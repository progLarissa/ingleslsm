/* ---------- FLASHCARDS (Anki-style spaced repetition, SM-2) ---------- */
const VGAP=[1,3,7,15];
function vsr(){ S.vsr=S.vsr||{}; const V=S.vsr;
  Object.keys(V).forEach(k=>{ const e=V[k]; if(e.ef==null){ e.ef=2.5; e.reps=(e.b||0)+1; e.iv=e.m?30:(VGAP[e.b]||1); e.lapses=0; if(e.m){ e.due=addDays(30); } delete e.b; delete e.m; } });
  return V; }
const vKeyLex=(t,i)=>'lex:'+hashStr(LESSICO[t].w[i][0]);
const DECKS=[
  {id:'my', name:'My words', note:'what you collect from films, books and the translator', keys:()=>Object.keys(S.myvoc||{}).map(k=>'my:'+k)},
  ...LESSICO.map((T,t)=>({id:'lex'+t, name:T.t, note:T.lvl+' · '+T.w.length+' words', keys:()=>T.w.map((_,i)=>vKeyLex(t,i))})),
  {id:'ff', name:'False friends', note:FALSI.length+' PT/ES traps', keys:()=>FALSI.map(f=>'ff:'+hashStr(f[0]))},
  {id:'vb', name:'Irregular verbs', note:Object.keys(VERBI).length+' verbs · past and participle', keys:()=>Object.keys(VERBI).map(v=>'vb:'+v)}
];
function vDecks(){ S.vdecks=S.vdecks||{my:true,vb:true,lex0:true}; return S.vdecks; }
function vCard(k){
  if(k.startsWith('my:')){ const w=(S.myvoc||{})[k.slice(3)]; return w?{front:w.pt,back:w.it,ex:w.ex||'',say:w.it,src:'My words',ans:[w.it]}:null; }
  if(k.startsWith('lex:')){ for(let t=0;t<LESSICO.length;t++){ const w=LESSICO[t].w.find(w=>'lex:'+hashStr(w[0])===k); if(w) return {front:w[1],back:w[0],ex:w[2],say:w[0],src:LESSICO[t].t,ans:[w[0]]}; } return null; }
  if(k.startsWith('ff:')){ const f=FALSI.find(f=>'ff:'+hashStr(f[0])===k); return f?{front:`What does «${f[0]}» really mean?`,back:f[1],ex:`Careful: ${f[2]}. E.g. ${f[3]}`,say:f[0],src:'False friends',ans:[f[1]]}:null; }
  if(k.startsWith('vb:')){ const v=k.slice(3), d=VERBI[v]; return d?{front:`to ${v} (${d.pt}) · past simple and past participle?`,back:`${v} · ${d.p} · ${d.pp}`,ex:d.ex||'',say:`${v}, ${String(d.p).split('/')[0]}, ${String(d.pp).split('/')[0]}`,src:'Irregular verbs',ans:[`${d.p} ${d.pp}`]}:null; }
  return null;
}
function vAdd(k,box){ const V=vsr(); if(V[k]) return; const iv=box?3:1; V[k]={ef:2.5,iv,reps:1,lapses:0,due:addDays(iv),u:Date.now()}; save(); }
function vNewQuota(){ S.vnew=S.vnew||{}; const t=dayKey(); if(S.vnew.d!==t) S.vnew={d:t,n:0}; return Math.max(0,(S.vnewMax||10)-S.vnew.n); }
function vNewKeys(){ const V=vsr(), D=vDecks(), seen=new Set(); const out=[]; DECKS.forEach(d=>{ if(!D[d.id]) return; d.keys().forEach(k=>{ if(!V[k]&&!seen.has(k)&&vCard(k)){ seen.add(k); out.push(k); } }); }); return out; }
function vReviewKeys(){ const t=dayKey(), V=vsr(); return Object.keys(V).filter(k=>V[k].due<=t&&vCard(k)); }
function vDue(){ return vReviewKeys().concat(vNewKeys().slice(0,vNewQuota())); }
function vStats(){ const V=vsr(), ks=Object.keys(V).filter(k=>vCard(k)); return {all:ks.length, young:ks.filter(k=>V[k].iv<21).length, mastered:ks.filter(k=>V[k].iv>=21).length, due:vReviewKeys().length, nw:Math.min(vNewQuota(),vNewKeys().length), newLeft:vNewKeys().length}; }
function vNext(e,g){ // g: 0 again, 1 hard, 2 good, 3 easy → {iv,ef}
  const isNew=!e||!e.reps; let ef=e?e.ef:2.5, iv=e?e.iv:0;
  if(g===0) return {iv:0, ef:isNew?ef:Math.max(1.3,ef-.2)};
  if(isNew) return {iv:[0,1,1,4][g], ef:g===3?ef+.15:ef};
  if(g===1) return {iv:Math.max(iv+1,Math.round(iv*1.2)), ef:Math.max(1.3,ef-.15)};
  if(g===2) return {iv:Math.max(iv+1,Math.round(iv*ef)), ef};
  return {iv:Math.max(iv+2,Math.round(iv*ef*1.3)), ef:ef+.15};
}
const ivTxt=d=>d<=0?'<10 min':d===1?'1 day':d<30?d+' days':d<365?Math.round(d/30)+' mo':(Math.round(d/36.5)/10)+' y';
function vGrade(k,g){
  const V=vsr(), e=V[k], isNew=!e;
  const n=vNext(e,g);
  if(isNew){ vNewQuota(); S.vnew.n++; }
  const r={ef:n.ef, iv:n.iv, reps:(e?e.reps:0)+(g?1:0), lapses:(e?e.lapses:0)+(g===0&&!isNew?1:0), due:addDays(Math.max(n.iv,g===0?1:n.iv)), u:Date.now()};
  if(g===0) r.reps=0;
  V[k]=r; save(); return g===0;
}
let vQueue=null, vPos=0, vOk=0, vAgain=0;
function renderWords(){
  const st=vStats(), D=vDecks(), V=vsr();
  $('#main').innerHTML=`<header class="uhead"><div class="eyebrow">Every day · vocabulary</div><h1 class="title">Flashcards</h1>
   <p class="subtitle">The same method as Anki: look at the card, try to remember, turn it and say how well you knew it. Cards you know come back later and later (days, weeks, months); cards you forget come back soon.</p></header>
   <div class="rgrid">
    <div class="card ${st.due+st.nw?'due':''}"><span class="lab">Today</span><b class="big">${st.due+st.nw}<small> cards</small></b><span class="note">${st.due} to review · ${st.nw} new</span><button class="btn ${st.due+st.nw?'primary':''}" id="vgo" type="button" ${st.due+st.nw?'':'disabled'}>Study now</button></div>
    <div class="card"><span class="lab">Learning</span><b class="big">${st.young}</b><span class="note">interval under 3 weeks</span></div>
    <div class="card"><span class="lab">Mature</span><b class="big">${st.mastered}</b><span class="note">interval of 3 weeks or more</span></div>
   </div>
   <section class="card" id="vcard" hidden></section>
   <section class="card"><div class="card-h"><div><span class="lab">Decks</span><h3>What goes into your flashcards</h3></div><label class="note">New cards a day <select id="vmax" class="vsel">${[5,10,15,20,30].map(n=>`<option ${n===(S.vnewMax||10)?'selected':''}>${n}</option>`).join('')}</select></label></div>
    <p class="note" style="margin-top:0">Turn on the decks you want. New cards enter a few each day (${S.vnewMax||10} by default), so the daily review stays short. Words you mark in the vocabulary cards and words you add from the translator or «My words» enter automatically.</p>
    <ul class="decks">${DECKS.map(d=>{ const ks=d.keys(), inR=ks.filter(k=>V[k]).length; return `<li><label><input type="checkbox" data-deck="${d.id}" ${D[d.id]?'checked':''}><span><b>${esc(d.name)}</b><span class="note">${esc(d.note)} · ${inR}/${ks.length} started</span></span></label></li>`; }).join('')}</ul></section>
   <section class="card"><div class="card-h"><div><span class="lab">Anki app</span><h3>Take your cards to Anki</h3></div></div>
    <p class="note" style="margin-top:0">If you also use the Anki app, export the cards you have started (Portuguese ⇥ English ⇥ example). In Anki: File → Import, choose the file, separator «Tab».</p>
    <div class="btnrow"><button class="btn" id="vexp" type="button">Export for Anki</button><span class="note" id="vexpm"></span></div></section>`;
  $('#main').querySelectorAll('[data-deck]').forEach(c=>c.onchange=()=>{ vDecks()[c.dataset.deck]=c.checked; save(); renderWords(); renderNav(route()); });
  $('#vmax').onchange=e=>{ S.vnewMax=+e.target.value; save(); renderWords(); renderNav(route()); };
  const go=$('#vgo'); if(go) go.onclick=()=>{ vQueue=shuffle(vReviewKeys()).concat(vNewKeys().slice(0,vNewQuota())); vPos=0; vOk=0; vAgain=0; vShow(); };
  $('#vexp').onclick=()=>{ const rows=Object.keys(vsr()).map(k=>vCard(k)).filter(Boolean).map(c=>[c.front,c.back,c.ex].map(x=>String(x||'').replace(/[\t\n]+/g,' ')).join('\t'));
    const txt='#separator:tab\n#html:false\n'+rows.join('\n'); const m=$('#vexpm');
    try{ const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([txt],{type:'text/plain'})); a.download='english-notebook-anki.txt'; document.body.appendChild(a); a.click(); a.remove(); }catch(e){}
    navigator.clipboard&&navigator.clipboard.writeText(txt).then(()=>{ m.textContent=`${rows.length} cards copied. If no file was downloaded, paste them into a .txt file and import it in Anki.`; },()=>{ m.textContent=`${rows.length} cards: the file download only works in the GitHub version.`; }); };
}
function vShow(){
  const c=$('#vcard'); if(!c) return; c.hidden=false; c.scrollIntoView({block:'nearest'});
  if(vPos>=vQueue.length){ c.innerHTML=`<div class="drill"><div class="pen" style="font-size:38px">Done for today!</div><p class="lead" style="margin:8px auto">${vOk} cards remembered${vAgain?`, ${vAgain} to see again soon`:''}.</p><button class="btn primary" id="vback" type="button">Back</button></div>`; $('#vback').onclick=()=>{ renderWords(); renderNav(route()); }; return; }
  const k=vQueue[vPos], w=vCard(k), e=vsr()[k];
  if(!w){ vPos++; return vShow(); }
  c.innerHTML=`<div class="card-h"><span class="lab">${vPos+1}/${vQueue.length} · ${esc(w.src)}${e&&e.reps?'':' · new'}</span></div>
   <div class="drill ankic"><div class="verb" style="font-size:28px">${esc(w.front)}</div>
    <input id="vin" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="type it (optional) or just think" aria-label="your answer">
    <div id="vback2" hidden><div class="ankiback">${esc(w.back)}</div>${w.ex?`<p class="expl">${esc(w.ex)}</p>`:''}<div class="fb" id="vfb"></div></div></div>
   <div class="btnrow" style="justify-content:center" id="vshowrow"><button class="btn primary" id="vshow" type="button">Show answer</button></div>
   <div class="ankibtns" id="vgrade" hidden>${['Again','Hard','Good','Easy'].map((l,g)=>`<button class="btn g${g}" type="button" data-g="${g}"><b>${l}</b><small>${ivTxt(vNext(e,g).iv)}</small></button>`).join('')}</div>
   <p class="note" style="text-align:center">Keys: Enter shows the answer · 1 2 3 4 grade it</p>`;
  const inp=$('#vin'); inp.focus({preventScroll:true});
  const reveal=()=>{ if(!$('#vback2').hidden) return; $('#vback2').hidden=false; $('#vshowrow').hidden=true; $('#vgrade').hidden=false;
    if(inp.value.trim()){ const r=judge(inp.value,w.ans.concat(w.ans.map(a=>a.replace(/^(the|a|an|to)\s+/i,'')))); $('#vfb').innerHTML=r!=='no'?'<span class="mark ok">✓ you typed it right</span>':`<span class="mark no">you typed: ${esc(inp.value)}</span>`; }
    inp.disabled=true; c.focus({preventScroll:true}); if(canSpeak) speakSeq([{text:w.say}]); };
  const grade=g=>{ if($('#vgrade').hidden) return; const again=vGrade(k,g); tick(); if(again){ vAgain++; vQueue.push(k); } else vOk++; vPos++; vShow(); renderNav(route()); };
  $('#vshow').onclick=reveal; inp.addEventListener('keydown',ev=>{ if(ev.key==='Enter'){ ev.preventDefault(); ev.stopPropagation(); reveal(); } });
  c.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>grade(+b.dataset.g));
  c.onkeydown=ev=>{ if(/^[1-4]$/.test(ev.key)&&!$('#vgrade').hidden){ ev.preventDefault(); grade(+ev.key-1); } else if(ev.key==='Enter'&&!$('#vgrade').hidden){ ev.preventDefault(); grade(2); } };
  c.tabIndex=-1;
}
/* end */
