/* ---------- WRITING EXAMS ---------- */
const WCRIT={cam:['Content','Communicative achievement','Organisation','Language'],ielts:['Task achievement / response','Coherence and cohesion','Lexical resource','Grammatical range and accuracy']};
const WEXAM_NAME={cam:'Cambridge',ielts:'IELTS'};
let wexTimer=null, wexFilter='all';
function stopWexTimer(){ if(wexTimer){ clearInterval(wexTimer); wexTimer=null; } }
function wexState(id){ S.wexam=S.wexam||{}; return S.wexam[id]=S.wexam[id]||{}; }
function wexLabel(W){ return W.exam==='ielts'?`IELTS ${W.g==='task1'?'Task 1':'Task 2'}`:`Cambridge ${W.lvl==='B2'?'B2 First':'C1 Advanced'}`; }
function wexScoreTxt(W,st){ if(!st||!st.scores) return ''; return W.exam==='ielts'?`band ${st.band}`:`${st.total}/20`; }
function renderWriting(id){
  stopWexTimer();
  if(id) return renderWex(id);
  const card=W=>{ const st=S.wexam&&S.wexam[W.id]; return `<a class="card lexcard" href="#writing-${W.id}"><span class="lab">${W.lvl} · ${wexLabel(W)}</span><h3>${esc(W.title)}</h3><span class="note">${WGENRE[W.g].name} · ${W.words[0]}–${W.words[1]} words · ${W.minutes} min</span><span class="note">${st&&st.scores?`<b>best: ${esc(wexScoreTxt(W,st))}</b>`:st&&wc(st.text)?'draft started':'not written yet'}</span></a>`; };
  const list=WEXAMS.filter(W=>wexFilter==='all'||(wexFilter==='ielts'?W.exam==='ielts':W.exam==='cam'&&W.lvl===wexFilter));
  $('#main').innerHTML=`<header class="uhead"><div class="eyebrow">Tests · writing for exams</div><h1 class="title">Writing exams</h1>
   <p class="subtitle">Real exam tasks from Cambridge B2 First, C1 Advanced and IELTS. Write under exam conditions, then get a mark for each criterion, exactly as an examiner would give it, with corrections and a model answer.</p></header>
   <div class="chipsel" id="wxf" style="margin-bottom:16px">${[['all','all'],['B2','Cambridge B2'],['C1','Cambridge C1'],['ielts','IELTS']].map(([k,l])=>`<button data-f="${k}" aria-pressed="${wexFilter===k}">${l}</button>`).join('')}</div>
   <div class="lexgrid">${list.map(card).join('')}</div>
   <h2 class="sec" style="margin-top:30px">How each text type works</h2>
   ${Object.entries(WGENRE).map(([k,G])=>`<section class="card"><div class="card-h"><div><span class="lab">Text type</span><h3>${G.name}</h3></div></div><p>${G.guide}</p><div class="chips">${G.ph.map(esc).join(' · ')}</div></section>`).join('')}
   <section class="card"><div class="card-h"><div><span class="lab">How you are marked</span><h3>The criteria</h3></div></div>
    <p><b>Cambridge</b> (B2 First, C1 Advanced): four criteria, 0 to 5 each, 20 in total. <b>Content</b> (did you answer everything?), <b>Communicative achievement</b> (right register and tone for the reader), <b>Organisation</b> (paragraphs and linking), <b>Language</b> (range and accuracy of vocabulary and grammar). Around 12/20 is a pass at the level.</p>
    <p><b>IELTS</b>: four criteria, band 0 to 9 each; the final band is the average. <b>Task achievement/response</b>, <b>Coherence and cohesion</b>, <b>Lexical resource</b>, <b>Grammatical range and accuracy</b>. Band 7 is the usual target for university and work abroad.</p></section>`;
  $('#wxf').querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{ wexFilter=b.dataset.f; renderWriting(); });
}
function wexPrompt(W,text){
  const crit=WCRIT[W.exam], lang=aiLang({band:1})==='pt'?'PORTUGUESE (examples in English)':'clear ENGLISH';
  const scale=W.exam==='ielts'?'IELTS band descriptors, 0-9 per criterion (half bands allowed only for the overall)':'Cambridge assessment scale, 0-5 per criterion';
  return `You are an experienced, strict but encouraging ${W.exam==='ielts'?'IELTS':'Cambridge English '+(W.lvl==='B2'?'B2 First':'C1 Advanced')} writing examiner. Mark this text written by a Brazilian adult (native Portuguese, fluent Spanish) exactly as in the real exam, using the ${scale}.
Task type: ${WGENRE[W.g].name}. Required length: ${W.words[0]}-${W.words[1]} words${W.exam==='ielts'&&W.g==='task1'?' (minimum 150)':W.exam==='ielts'?' (minimum 250)':''}.
TASK:
${plain(W.prompt).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').slice(0,1500)}

Answer in ${lang}, with exactly these markdown sections:
## Marks
One line per criterion: «${crit[0]}: X — one-sentence justification», and the same for ${crit.slice(1).join(', ')}. Then the ${W.exam==='ielts'?'overall band':'total out of 20'} and whether this would pass at ${W.exam==='ielts'?'band 7':W.lvl}.
## What would raise your mark
The 3 most important, concrete changes, in order of impact.
## Mistakes
Each mistake as: ~~wrong~~ → **right**: short explanation. Mark [PT] or [ES] for interference.
## Improved version
The whole text rewritten at a higher level, keeping her ideas.

On the very last line, write only: SCORES ${W.exam==='ielts'?'{"scores":[n,n,n,n],"band":n}':'{"scores":[n,n,n,n],"total":n}'}

STUDENT'S TEXT:
"""${text}"""`;
}
function renderWex(id){
  const W=WEXAMS.find(x=>x.id===id); if(!W){ location.hash='writing'; return; }
  const G=WGENRE[W.g], st=wexState(id);
  $('#main').innerHTML=`<header class="uhead"><div class="eyebrow"><a href="#writing">Writing exams</a> · ${W.lvl} · ${wexLabel(W)}</div><h1 class="title">${esc(W.title)}</h1>
   <p class="subtitle">${G.name} · ${W.words[0]}–${W.words[1]} words · ${W.minutes} minutes${st.scores?' · best '+esc(wexScoreTxt(W,st)):''}</p></header>
   <section class="card task wtask">${W.prompt}</section>
   <details class="card"><summary><b>How to write it: ${G.name}</b> (open before you start)</summary><p>${G.guide}</p><div class="chips">${G.ph.map(esc).join(' · ')}</div></details>
   <div class="timer" id="wxtimer" hidden><span>Time left <b id="wxleft"></b></span><button class="btn" id="wxstop" type="button">Stop the clock</button></div>
   <div class="btnrow" style="margin:6px 0 10px"><button class="btn primary" id="wxgo" type="button">Start · exam conditions (${W.minutes} min)</button><span class="note">or just start writing below, without a clock</span></div>
   <textarea class="paper" id="wxtext" spellcheck="false" lang="en" placeholder="Write your ${esc(G.name.toLowerCase())} here…">${esc(st.text||'')}</textarea>
   <p class="wc" id="wxwc"></p>
   <div class="btnrow"><button class="btn red" id="wxcorr" type="button">Mark it like an examiner</button><button class="btn" id="wxmodel" type="button">See the model answer</button><span class="note">Correction in: <button class="btn ghost" id="wxlang" type="button">${aiLang({band:1})==='pt'?'Portuguese':'English'}</button></span></div>
   <div class="model" id="wxmodelbox" hidden>${esc(W.model)}</div>
   <div id="wxout">${st.corr?`<div class="ai-out"><div class="stamp">Last marking · ${esc(wexScoreTxt(W,st))}</div>${wexScoresHTML(W,st)}${md(st.corr)}</div>`:''}</div>
   ${st.hist&&st.hist.length>1?`<p class="note">Previous marks: ${st.hist.map(h=>esc(h)).join(' → ')}</p>`:''}`;
  const ta=$('#wxtext');
  const upd=()=>{ const n=wc(ta.value); const [a,b]=W.words; $('#wxwc').innerHTML=`<b>${n}</b> words · target ${a}–${b}${n&&n<a?' · <span style="color:var(--rosso)">too short</span>':n>b+20?' · <span style="color:var(--ambra)">a little long</span>':''}`; };
  upd();
  let tT; ta.oninput=()=>{ upd(); clearTimeout(tT); tT=setTimeout(()=>{ st.text=ta.value; save(); },400); };
  $('#wxmodel').onclick=()=>{ const b=$('#wxmodelbox'); b.hidden=!b.hidden; $('#wxmodel').textContent=b.hidden?'See the model answer':'Hide the model answer'; };
  $('#wxlang').onclick=()=>{ S.aiLang=aiLang({band:1})==='pt'?'en':'pt'; save(); $('#wxlang').textContent=S.aiLang==='pt'?'Portuguese':'English'; };
  $('#wxgo').onclick=()=>{ const end=Date.now()+W.minutes*60000; $('#wxtimer').hidden=false; $('#wxgo').parentElement.hidden=true; ta.focus();
    const tickT=()=>{ const el=$('#wxleft'); if(!el){ stopWexTimer(); return; } const left=Math.max(0,end-Date.now()); el.textContent=`${Math.floor(left/60000)}:${String(Math.floor(left%60000/1000)).padStart(2,'0')}`; $('#wxtimer').classList.toggle('low',left<5*60000); if(left<=0){ stopWexTimer(); el.textContent='time is up'; toast('<span class="pen">Time is up!</span> Finish your sentence and ask for the marking.'); } };
    stopWexTimer(); tickT(); wexTimer=setInterval(tickT,1000); };
  $('#wxstop').onclick=()=>{ stopWexTimer(); $('#wxtimer').hidden=true; $('#wxgo').parentElement.hidden=false; };
  $('#wxcorr').onclick=async()=>{
    const text=ta.value.trim(), out=$('#wxout'); st.text=ta.value; save();
    if(wc(text)<Math.round(W.words[0]*.6)){ out.innerHTML=`<div class="ai-out"><p>Write at least ${Math.round(W.words[0]*.6)} words before asking for a mark.</p></div>`; return; }
    stopWexTimer();
    const prompt=wexPrompt(W,text), sample=await getSample();
    if(!sample){ out.innerHTML=`<div class="ai-out fallback"><p>Marking only works with this page open inside Claude. Copy the request below and paste it into a chat with Claude.</p><textarea readonly id="wxfb">${esc(prompt)}</textarea><div class="btnrow" style="margin-top:8px"><button class="btn" id="wxcopy" type="button">Copy the request</button><span class="note" id="wxcm"></span></div></div>`;
      $('#wxcopy').onclick=()=>{ const t=$('#wxfb'); navigator.clipboard.writeText(t.value).then(()=>$('#wxcm').textContent='Copied.',()=>{ t.select(); $('#wxcm').textContent='Selected: press Ctrl+C / Cmd+C.'; }); }; return; }
    const btn=$('#wxcorr'); btn.disabled=true;
    out.innerHTML=`<div class="ai-out"><div class="stamp">The examiner is reading…</div><div id="wxb"></div><div class="btnrow" style="margin-top:10px"><button class="btn" id="wxab" type="button">Stop</button></div></div>`;
    const ctl=new AbortController(); $('#wxab').onclick=()=>ctl.abort();
    const strip=t=>t.replace(/\n?\s*SCORES\s*\{[\s\S]*$/,'').trim();
    try{
      const r=await sample(prompt,{cache:false,modelTier:'complex',signal:ctl.signal,onText:({text})=>{ const b=$('#wxb'); if(b) b.innerHTML=md(strip(text)); }});
      const m=r.text.match(/SCORES\s*(\{[\s\S]*?\})/); let sc=null; try{ sc=m?JSON.parse(m[1]):null; }catch(e){}
      st.corr=strip(r.text);
      if(sc&&Array.isArray(sc.scores)&&sc.scores.length===4){
        st.scores=sc.scores.map(Number);
        if(W.exam==='ielts'){ const b=Number(sc.band)||Math.round(st.scores.reduce((a,x)=>a+x,0)/4*2)/2; st.lastBand=b; st.band=Math.max(st.band||0,b); }
        else { const t=Number(sc.total)||st.scores.reduce((a,x)=>a+x,0); st.last=t; st.total=Math.max(st.total||0,t); }
        st.hist=(st.hist||[]).concat([W.exam==='ielts'?'band '+(st.lastBand):st.last+'/20']).slice(-8);
      }
      st.d=Date.now(); tick(10); save(); renderNav(route());
      out.innerHTML=`<div class="ai-out"><div class="stamp">Marked ✓${st.scores?' · '+esc(W.exam==='ielts'?'band '+st.lastBand:st.last+'/20'):''}</div>${wexScoresHTML(W,st)}${md(st.corr)}</div>`;
    }catch(e){ const b=$('#wxb'); if(b&&e.text) b.innerHTML=md(strip(e.text)); const s=out.querySelector('.stamp'); if(s) s.textContent=e.code==='cancelled'?'Marking stopped':errMsg(e); const ab=$('#wxab'); ab&&ab.remove(); }
    btn.disabled=false;
  };
}
function wexScoresHTML(W,st){
  if(!st.scores) return '';
  const max=W.exam==='ielts'?9:5;
  return `<div class="wscores">${WCRIT[W.exam].map((c,i)=>`<div class="wsc"><span class="lab">${esc(c)}</span><span class="rw-bar"><i style="width:${Math.round(100*(st.scores[i]||0)/max)}%"></i></span><b>${st.scores[i]}<small>/${max}</small></b></div>`).join('')}</div>`;
}
/* end */
