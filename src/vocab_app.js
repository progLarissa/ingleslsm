/* ---------- SPACED VOCABULARY REVIEW ---------- */
const VGAP=[1,3,7,15];
function vsr(){ S.vsr=S.vsr||{}; return S.vsr; }
function vKeyLex(t,i){ return 'lex:'+hashStr(LESSICO[t].w[i][0]); }
function vWord(k){
  if(k.startsWith('my:')){ const w=S.myvoc[k.slice(3)]; return w?{en:w.it,pt:w.pt,ex:w.ex||'',src:'My words'}:null; }
  if(k.startsWith('lex:')){ for(let t=0;t<LESSICO.length;t++){ const i=LESSICO[t].w.findIndex(w=>'lex:'+hashStr(w[0])===k); if(i>=0){ const w=LESSICO[t].w[i]; return {en:w[0],pt:w[1],ex:w[2],src:LESSICO[t].t,t,i}; } } }
  return null;
}
function vAdd(k,box){ const V=vsr(); if(V[k]&&!V[k].m) return; const b=box||0; V[k]={b,due:addDays(VGAP[b]),u:Date.now()}; save(); }
function vDue(){ const t=dayKey(), V=vsr(); return Object.keys(V).filter(k=>!V[k].m&&V[k].due<=t&&vWord(k)); }
function vStats(){ const V=vsr(), ks=Object.keys(V).filter(k=>vWord(k)); return {all:ks.filter(k=>!V[k].m).length, mastered:ks.filter(k=>V[k].m).length, due:vDue().length}; }
function vAnswer(k,ok){
  const V=vsr(), e=V[k]; if(!e) return;
  if(ok){ e.b++; if(e.b>=VGAP.length){ e.m=dayKey(); } else e.due=addDays(VGAP[e.b]); }
  else { e.b=0; e.due=addDays(1); }
  e.u=Date.now(); save();
}
let vQueue=null, vPos=0, vOk=0;
function renderWords(){
  const st=vStats(), V=vsr();
  const boxes=[0,0,0,0]; Object.keys(V).forEach(k=>{ if(!V[k].m&&vWord(k)) boxes[Math.min(3,V[k].b)]++; });
  $('#main').innerHTML=`<header class="uhead"><div class="eyebrow">Every day · vocabulary</div><h1 class="title">Word review</h1>
   <p class="subtitle">Words come back after 1, 3, 7 and 15 days. You see the Portuguese and type the English. Right: the word moves to the next box. Wrong: it comes back tomorrow. After the 15-day box, it is yours.</p></header>
   <div class="rgrid">
    <div class="card ${st.due?'due':''}"><span class="lab">Due today</span><b class="big">${st.due}</b><button class="btn ${st.due?'primary':''}" id="vgo" type="button" ${st.due?'':'disabled'}>Review now</button></div>
    <div class="card"><span class="lab">In review</span><b class="big">${st.all}</b><span class="note">words being learnt</span></div>
    <div class="card"><span class="lab">Mastered</span><b class="big">${st.mastered}</b><span class="note">survived all four boxes</span></div>
   </div>
   <div class="boxes">${boxes.map((n,i)=>`<div class="box"><span class="lab">Box ${i+1}</span><b>${n}</b><span class="note">back in ${VGAP[i]} ${VGAP[i]===1?'day':'days'}</span></div>`).join('')}</div>
   <section class="card" id="vcard" hidden></section>
   <section class="card"><div class="card-h"><div><span class="lab">Add words</span><h3>Where the words come from</h3></div></div>
    <ul class="dots"><li>Every word you add to <a href="#beyond">My words</a> enters automatically (back tomorrow).</li><li>In <a href="#vocabulary">Vocabulary by topic</a>, the cards you answer enter by themselves: «Review» comes back tomorrow, «I know it» in 3 days.</li><li>Or add a whole topic at once:</li></ul>
    <div class="chipsel" id="vtopics">${LESSICO.map((T,t)=>{ const n=T.w.filter((_,i)=>V[vKeyLex(t,i)]).length; return `<button type="button" data-t="${t}" aria-pressed="${n===T.w.length}">${esc(T.t)} · ${n}/${T.w.length}</button>`; }).join('')}</div></section>`;
  $('#vtopics').querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{ const t=+b.dataset.t; LESSICO[t].w.forEach((_,i)=>vAdd(vKeyLex(t,i),0)); toast(`<span class="pen">Added:</span> ${esc(LESSICO[t].t)}. The first words come back tomorrow.`); renderWords(); renderNav(route()); });
  const go=$('#vgo'); if(go) go.onclick=()=>{ vQueue=shuffle(vDue()).slice(0,30); vPos=0; vOk=0; vShow(); };
}
function vShow(){
  const c=$('#vcard'); if(!c) return; c.hidden=false;
  if(vPos>=vQueue.length){ c.innerHTML=`<div class="drill"><div class="pen" style="font-size:38px">Done!</div><p class="lead" style="margin:8px auto">${vOk} right out of ${vQueue.length}.</p><button class="btn primary" id="vback" type="button">Back</button></div>`; $('#vback').onclick=()=>{ renderWords(); renderNav(route()); }; return; }
  const k=vQueue[vPos], w=vWord(k), e=vsr()[k];
  c.innerHTML=`<div class="card-h"><span class="lab">${vPos+1}/${vQueue.length} · ${esc(w.src)} · box ${e.b+1}</span></div><div class="drill" style="padding:6px 0"><span class="lab">how do you say it in English?</span><div class="verb" style="font-size:32px">${esc(w.pt)}</div><input id="vin" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="answer"><div class="fb" id="vfb"></div></div><div class="btnrow" style="justify-content:center"><button class="btn primary" id="vchk" type="button">Check</button><button class="btn" id="vnext" type="button" hidden>Next →</button></div>`;
  const inp=$('#vin'); inp.focus({preventScroll:true}); let done=false;
  const check=()=>{ if(done){ vPos++; vShow(); return; } if(!inp.value.trim()) return; done=true;
    const r=judge(inp.value,[w.en,w.en.replace(/^(the|a|an|to)\s+/i,''),...w.en.split(/\s*\/\s*/)]); const ok=r!=='no';
    vAnswer(k,ok); if(ok) vOk++; tick();
    $('#vfb').innerHTML=(ok?`<span class="mark ok">Right! ✓</span>${r==='acc'?` <span class="note">${esc(w.en)}</span>`:''}`:`<span class="mark no">${esc(w.en)}</span>`)+(w.ex?`<p class="expl">${esc(w.ex)}</p>`:'')+`<p class="note">${ok?(vsr()[k].m?'Mastered! It will not come back.':'Back in '+VGAP[vsr()[k].b]+' days.'):'Back tomorrow.'} Enter to continue.</p>`;
    inp.style.color=ok?'var(--verde)':'var(--rosso)'; $('#vchk').hidden=true; $('#vnext').hidden=false; if(canSpeak) speakSeq([{text:w.en}]); };
  inp.addEventListener('keydown',ev=>{ if(ev.key==='Enter'){ ev.preventDefault(); check(); } });
  $('#vchk').onclick=check; $('#vnext').onclick=check;
}
/* end */
