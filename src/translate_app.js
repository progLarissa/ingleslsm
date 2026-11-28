/* ---------- TRANSLATE TO PORTUGUESE (anywhere) ---------- */
let trMode=false, trCache={};
try{ trCache=JSON.parse(localStorage.getItem(KEY+'-tr')||'{}'); }catch(e){ trCache={}; }
function trSaveCache(){ try{ const ks=Object.keys(trCache); if(ks.length>400) ks.slice(0,ks.length-400).forEach(k=>delete trCache[k]); localStorage.setItem(KEY+'-tr',JSON.stringify(trCache)); }catch(e){} }
const trBusy=()=>!!(testTimer||examTimer||wexTimer);
const gtUrl=t=>'https://translate.google.com/?sl=en&tl=pt&op=translate&text='+encodeURIComponent(t.slice(0,4000));
const TR_BLOCK='p,li,td,th,h1,h2,h3,h4,blockquote,figcaption,summary,label,.q,.opt,.note,.lab,.sent,.verb,.phr-it,.tl,.subtitle,.lead,.task,.expl,.corrected,.model,.cs';
function trText(el){ const c=el.cloneNode(true); c.querySelectorAll('.trbox,button.play,.mark,input,select,textarea').forEach(x=>x.remove()); return c.textContent.replace(/\s+/g,' ').trim(); }
async function translate(text,context){
  const key=hashStr(text+'|'+(context||'').slice(0,200));
  if(trCache[key]) return trCache[key];
  const sample=await getSample(); if(!sample) throw {code:'offline'};
  const short=text.split(/\s+/).length<=4;
  const prompt = short
    ? `Translate the English word or expression «${text}» into Brazilian Portuguese${context?`, as it is used in this sentence: «${context.slice(0,400)}»`:''}.
Answer in Portuguese, in at most 3 short lines, plain text:
line 1: the translation (the meaning in this context first; another common meaning after « / » if useful)
line 2: a very short explanation of the use, only if helpful (e.g. phrasal verb, idiom, false friend, formal/informal)
No preamble.`
    : `Translate this English text into natural Brazilian Portuguese. Keep the meaning, not word for word. Keep any Portuguese that is already in the text unchanged. Answer with the translation only, no preamble, no quotes.
TEXT:
${text.slice(0,3000)}`;
  const r=await sample(prompt,{modelTier:'quick',cache:true});
  const out=String(r.text||'').trim(); if(out){ trCache[key]=out; trSaveCache(); }
  return out;
}
function trErrHTML(e,text){ return e&&e.code==='offline'
  ? `<p class="note" style="margin:0">A tradução automática funciona com a página aberta dentro do Claude. Aqui você pode usar o <a href="${gtUrl(text)}" target="_blank" rel="noopener">Google Tradutor</a>.</p>`
  : `<p class="note" style="margin:0">${esc(errMsg(e))} <a href="${gtUrl(text)}" target="_blank" rel="noopener">Google Tradutor</a></p>`; }
/* translate mode: tap a block, the translation appears below it */
async function trBlock(el){
  const nxt=el.nextElementSibling;
  if(nxt&&nxt.classList.contains('trbox')){ nxt.remove(); return; }
  const inner=el.querySelector(':scope > .trbox'); if(inner){ inner.remove(); return; }
  const text=trText(el); if(!text||!/[a-z]{2}/i.test(text)) return;
  const box=document.createElement('div'); box.className='trbox'; box.innerHTML='<span class="note">Traduzindo…</span>';
  const inline=/^(LI|TD|TH|LABEL|SUMMARY|BUTTON)$/.test(el.tagName)||el.classList.contains('opt');
  if(inline) el.appendChild(box); else el.insertAdjacentElement('afterend',box);
  try{ const t=await translate(text); box.innerHTML=`<span class="trflag">PT</span>${md(t)}`; }
  catch(e){ box.innerHTML=trErrHTML(e,text); }
}
function setTrMode(on){
  trMode=on&&!trBusy(); document.body.classList.toggle('trmode',trMode);
  const b=$('#trbtn'); if(b){ b.setAttribute('aria-pressed',trMode); b.title=trMode?'Sair do modo tradução':'Traduzir para o português'; }
  const bar=$('#trbar'); if(bar) bar.hidden=!trMode;
  if(on&&!trMode) toast('A tradução fica desligada durante as provas cronometradas.');
}
/* selection: a chip appears, tap it to see the translation */
let trSelText='', trSelCtx='';
function trHideChip(){ const c=$('#trchip'); if(c) c.hidden=true; }
function trOnSelect(){
  const sel=window.getSelection(); const c=$('#trchip'); if(!c) return;
  if(!sel||sel.isCollapsed||trBusy()){ trHideChip(); return; }
  const text=sel.toString().replace(/\s+/g,' ').trim();
  const node=sel.anchorNode&&(sel.anchorNode.nodeType===1?sel.anchorNode:sel.anchorNode.parentElement);
  if(!text||text.length>1500||!/[a-z]/i.test(text)||!node||!node.closest('#main')||node.closest('input,textarea,.trsheet')){ trHideChip(); return; }
  trSelText=text; const blk=node.closest(TR_BLOCK); trSelCtx=blk?trText(blk):'';
  const r=sel.getRangeAt(0).getBoundingClientRect();
  c.hidden=false;
  const top=Math.max(8, r.top-46), left=Math.min(window.innerWidth-120, Math.max(8, r.left+r.width/2-55));
  c.style.top=top+'px'; c.style.left=left+'px';
}
async function trShowSheet(text,ctx){
  const s=$('#trsheet'); s.hidden=false;
  s.innerHTML=`<div class="trs-h"><span class="lab">Tradução</span><button class="btn ghost" id="trclose" type="button" aria-label="Fechar">✕</button></div><p class="trs-en">${esc(text.length>300?text.slice(0,300)+'…':text)}</p><div class="trs-pt"><span class="note">Traduzindo…</span></div>
   <div class="btnrow">${canSpeak?'<button class="btn" id="trsay" type="button">▶ Listen</button>':''}${text.split(/\s+/).length<=4?'<button class="btn" id="tradd" type="button">+ My words</button>':''}<a class="btn ghost" href="${gtUrl(text)}" target="_blank" rel="noopener">Google Tradutor</a></div>`;
  $('#trclose').onclick=()=>{ s.hidden=true; };
  const say=$('#trsay'); if(say) say.onclick=()=>speakSeq([{text}]);
  let pt='';
  try{ pt=await translate(text,ctx); s.querySelector('.trs-pt').innerHTML=md(pt); }
  catch(e){ s.querySelector('.trs-pt').innerHTML=trErrHTML(e,text); const a=$('#tradd'); if(a) a.remove(); }
  const add=$('#tradd'); if(add) add.onclick=()=>{ const k='w'+Date.now().toString(36); S.myvoc[k]={it:text,pt:(pt.split('\n')[0]||'').slice(0,120),ex:(ctx||'').slice(0,200),d:dayKey()}; vAdd('my:'+k,0); save(); add.disabled=true; add.textContent='✓ Added'; toast('<span class="pen">Added</span> to My words and to the word review.'); };
}
function initTranslate(){
  const ui=document.createElement('div');
  ui.innerHTML=`<button class="trbtn" id="trbtn" type="button" aria-pressed="false" title="Traduzir para o português">PT</button>
   <div class="trbar" id="trbar" hidden><span><b>Modo tradução:</b> toque em qualquer frase ou parágrafo para ver em português. Toque de novo para esconder.</span><button class="btn" id="trexit" type="button">Sair</button></div>
   <button class="trchip" id="trchip" type="button" hidden>Traduzir ↗</button>
   <div class="trsheet" id="trsheet" hidden role="dialog" aria-label="Tradução"></div>`;
  while(ui.firstChild) document.body.appendChild(ui.firstChild);
  $('#trbtn').onclick=()=>{ setTrMode(!trMode); if(trMode&&!S.trSeen){ S.trSeen=1; save(); toast('Dica: também dá para <b>selecionar</b> uma palavra ou frase (ou tocar duas vezes nela) e tocar em «Traduzir».'); } };
  $('#trexit').onclick=()=>setTrMode(false);
  const chip=$('#trchip');
  chip.addEventListener('mousedown',e=>e.preventDefault());
  chip.onclick=()=>{ const t=trSelText, c=trSelCtx; trHideChip(); try{ window.getSelection().removeAllRanges(); }catch(e){} trShowSheet(t,c); };
  let st; document.addEventListener('selectionchange',()=>{ clearTimeout(st); st=setTimeout(trOnSelect,250); });
  window.addEventListener('scroll',trHideChip,{passive:true});
  document.addEventListener('click',e=>{
    if(!trMode) return;
    if(trBusy()){ setTrMode(false); return; }
    const t=e.target;
    if(!t.closest('#main')||t.closest('input,textarea,select,.trbox,#trbar,.trsheet')) return;
    const a=t.closest('a'); const blk=t.closest(TR_BLOCK)||(a&&a.textContent.trim()?a:null)||t.closest('button');
    if(!blk) return;
    e.preventDefault(); e.stopPropagation();
    trBlock(blk);
  },true);
  window.addEventListener('hashchange',()=>{ const s=$('#trsheet'); if(s) s.hidden=true; trHideChip(); if(trBusy()) setTrMode(false); });
}
initTranslate();
/* end */
