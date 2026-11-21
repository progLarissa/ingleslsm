/* ---------- READING EXAMS ---------- */
let examTimer=null, examRun=null, examFilter='all';
function stopExamTimer(){ if(examTimer){ clearInterval(examTimer); examTimer=null; } }
const LETTERS='ABCDEFG';
function examById(id){ return EXAMS.find(e=>e.id===id) || (S.examGen&&S.examGen[id]) || null; }
function examTotal(E){ return E.type==='gapped'?E.a.length:E.q.length; }
function examScoreLabel(r,E){ return r?`${r.best}/${examTotal(E)}`:''; }
function renderExams(id){
  if(id) return renderExam(id);
  const gen=Object.values(S.examGen||{}).sort((a,b)=>(b.d||0)-(a.d||0));
  const card=E=>{ const r=S.exam[E.id]; const T=EXAM_TYPES[E.type]; return `<a class="card lexcard" href="#exam-${E.id}"><span class="lab">${E.lvl} · ${T.exam}</span><h3>${esc(E.title)}</h3><span class="note">${T.name} · ${examTotal(E)} questions · ${E.minutes} min</span>${r?`<span class="note"><b>best ${r.best}/${examTotal(E)}</b> · ${r.n} ${r.n===1?'attempt':'attempts'}</span>`:'<span class="note">not taken yet</span>'}</a>`; };
  const types=Object.keys(EXAM_TYPES);
  const list=EXAMS.filter(E=>examFilter==='all'||E.type===examFilter);
  $('#main').innerHTML=`<header class="uhead"><div class="eyebrow">Tests · reading for exams</div><h1 class="title">Reading exams</h1>
   <p class="subtitle">Timed practice in the real formats of Cambridge B2 First, C1 Advanced and IELTS: long texts, the four question types that appear in every exam, and an explanation for every answer. Generate as many new practices as you want, or upload your own texts.</p></header>
   <div class="chipsel" id="exfilter" style="margin-bottom:16px"><button data-f="all" aria-pressed="${examFilter==='all'}">all</button>${types.map(t=>`<button data-f="${t}" aria-pressed="${examFilter===t}">${EXAM_TYPES[t].name}</button>`).join('')}</div>
   <div class="lexgrid">${list.map(card).join('')}</div>
   ${gen.length?`<h3>Your generated practices</h3><div class="lexgrid">${gen.filter(E=>examFilter==='all'||E.type===examFilter).map(card).join('')}</div>`:''}
   <section class="card" style="margin-top:24px"><div class="card-h"><div><span class="lab">Unlimited practice</span><h3>Generate a new practice</h3></div></div>
    <p>Claude writes a new, original text in exam style with questions and explanations. Choose the format, the level and, if you like, a topic. Or paste a text you need to read for work or study and get exam-style questions about it.</p>
    <div class="genform">
     <label><span class="lab">Format</span><select id="gx-type" class="vsel">${types.map(t=>`<option value="${t}">${EXAM_TYPES[t].name} (${EXAM_TYPES[t].exam})</option>`).join('')}</select></label>
     <label><span class="lab">Level</span><select id="gx-lvl" class="vsel"><option>B2</option><option selected>C1</option></select></label>
     <label><span class="lab">Topic (optional)</span><input id="gx-topic" class="vsel" placeholder="e.g. technology, psychology, travel, history of cinema" autocomplete="off"></label>
    </div>
    <details class="gxown"><summary>Use my own text (multiple choice or True/False/Not Given)</summary><textarea id="gx-text" class="labin" rows="6" placeholder="Paste an article, a report or a page from a book (200 to 900 words)…"></textarea></details>
    <div class="btnrow" style="margin-top:12px"><button class="btn red" id="gx-go" type="button">Generate the practice</button><span class="note" id="gx-msg"></span></div></section>
   <h2 class="sec" style="margin-top:30px">How to approach each format</h2>
   ${types.map(t=>`<section class="card"><div class="card-h"><div><span class="lab">${EXAM_TYPES[t].exam}</span><h3>${EXAM_TYPES[t].name}</h3></div></div><p>${EXAM_TYPES[t].how}</p></section>`).join('')}
   <section class="card"><div class="card-h"><div><span class="lab">General strategy</span><h3>Reading faster without losing the meaning</h3></div></div>
    <ul class="dots"><li><b>Skim first</b> (1–2 minutes): title, first and last paragraph, first sentence of each paragraph. Know what the text is about before reading the questions.</li><li><b>Paraphrase is the key skill.</b> Answers rarely repeat the text's words. Ask «does this option say the same thing in other words?».</li><li><b>Words that change everything:</b> <i>only, all, never, some, most, unless, however, despite</i>. One of them is usually the trap.</li><li><b>Don't translate in your head.</b> Translating every sentence costs about half your time. Underline, guess from context and move on.</li><li><b>Time:</b> in the real exam, about 1.5 minutes per question. Here the clock shows it.</li></ul></section>`;
  $('#exfilter').querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{ examFilter=b.dataset.f; renderExams(); });
  $('#gx-go').onclick=generateExam;
}
function renderExam(id){
  const E=examById(id); if(!E){ location.hash='exams'; return; }
  const T=EXAM_TYPES[E.type], r=S.exam[E.id];
  $('#main').innerHTML=`<header class="uhead"><div class="eyebrow"><a href="#exams">Reading exams</a> · ${E.lvl} · ${T.exam}${E.gen?' · generated':''}</div><h1 class="title">${esc(E.title)}</h1>
   <p class="subtitle">${T.name} · ${examTotal(E)} questions · ${E.minutes} minutes${r?` · best ${r.best}/${examTotal(E)}`:''}</p></header>
   <div id="exbody"></div>`;
  if(examRun&&examRun.id===E.id&&examRun.result) return examResult(E);
  $('#exbody').innerHTML=`<section class="card"><div class="card-h"><div><span class="lab">How to do it</span><h3>${T.name}</h3></div></div><p>${T.how}</p>
   <p class="note">The clock starts when you press «Start». You can hand in early. Wrong answers go to the mistakes notebook with the explanation.</p>
   <div class="btnrow"><button class="btn primary" id="exstart" type="button">Start · ${E.minutes} min</button><button class="btn" id="exnotime" type="button">Practise without a timer</button>${E.gen?'<button class="btn ghost" id="exdel" type="button">Delete this practice</button>':''}</div></section>`;
  $('#exstart').onclick=()=>startExam(E,true);
  $('#exnotime').onclick=()=>startExam(E,false);
  const d=$('#exdel'); if(d) d.onclick=()=>{ delete S.examGen[E.id]; delete S.exam[E.id]; save(); location.hash='exams'; };
}
function examTextHTML(E){
  if(E.type==='gapped'){
    return `<article class="reading exread">${E.parts.map((p,i)=>p+(i<E.a.length?`<div class="gapbox"><span class="gapn">${i+1}</span><select class="vsel gapsel" data-g="${i}" aria-label="Gap ${i+1}"><option value="">choose A–G</option>${E.opts.map((_,k)=>`<option value="${k}">${LETTERS[k]}</option>`).join('')}</select></div>`:'')).join('')}</article>
     <section class="card"><div class="card-h"><div><span class="lab">The missing paragraphs</span><h3>A–G (one is extra)</h3></div></div><ol class="optlist">${E.opts.map((o,k)=>`<li><b>${LETTERS[k]}</b><span>${esc(o)}</span></li>`).join('')}</ol></section>`;
  }
  if(E.type==='match') return `<div class="mtexts">${E.sections.map(s=>`<article class="card reading exread"><div class="card-h"><h3><span class="mletter">${s[0]}</span> ${esc(s[1])}</h3></div>${s[2]}</article>`).join('')}</div>`;
  return `<article class="reading exread">${E.text}</article>`;
}
function startExam(E,timed){
  stopExamTimer();
  examRun={id:E.id,ans:{},result:null,timed,end:Date.now()+E.minutes*60000};
  const qs = E.type==='gapped'?'' : E.type==='match'
    ? E.q.map((q,i)=>`<li><div><div class="q">${esc(q[0])}</div><div class="opts" data-i="${i}">${E.sections.map((s,j)=>`<button class="opt" type="button" data-j="${j}">${s[0]}</button>`).join('')}</div></div></li>`).join('')
    : E.type==='tfng'
    ? E.q.map((q,i)=>`<li><div><div class="q">${esc(q[0])}</div><div class="opts" data-i="${i}">${['True','False','Not Given'].map((o,j)=>`<button class="opt" type="button" data-j="${j}">${o}</button>`).join('')}</div></div></li>`).join('')
    : E.q.map((q,i)=>`<li><div><div class="q">${esc(q[0])}</div><div class="opts" data-i="${i}">${q[1].map((o,j)=>`<button class="opt" type="button" data-j="${j}">${LETTERS[j]} · ${esc(o)}</button>`).join('')}</div></div></li>`).join('');
  $('#exbody').innerHTML=`${timed?`<div class="timer" id="extimer"><span>Time left <b id="exleft">${E.minutes}:00</b></span><button class="btn primary" id="exsend" type="button">Hand in</button></div>`:''}
   <div class="exgrid ${E.type==='mc'||E.type==='tfng'?'two':''}"><div class="extext">${examTextHTML(E)}</div>
   ${qs?`<section class="card exq"><div class="card-h"><div><span class="lab">Questions</span><h3>${E.type==='match'?'Which person or section…?':'Answer the questions'}</h3></div></div><ol class="items">${qs}</ol></section>`:''}</div>
   <div class="btnrow" style="justify-content:flex-end"><button class="btn primary" id="exsend2" type="button">Hand in and check</button></div>`;
  $('#exbody').querySelectorAll('.opts').forEach(g=>g.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{ g.querySelectorAll('.opt').forEach(x=>x.classList.remove('sel')); b.classList.add('sel'); examRun.ans[+g.dataset.i]=+b.dataset.j; }));
  $('#exbody').querySelectorAll('.gapsel').forEach(s=>s.onchange=()=>{ examRun.ans[+s.dataset.g]=s.value===''?undefined:+s.value; });
  const send=()=>gradeExam(E); const s1=$('#exsend'); if(s1) s1.onclick=send; $('#exsend2').onclick=send;
  if(timed){ const upd=()=>{ const el=$('#exleft'); if(!el){ stopExamTimer(); return; } const left=Math.max(0,examRun.end-Date.now()); el.textContent=`${Math.floor(left/60000)}:${String(Math.floor(left%60000/1000)).padStart(2,'0')}`; $('#extimer').classList.toggle('low',left<3*60000); if(left<=0){ stopExamTimer(); gradeExam(E); } }; upd(); examTimer=setInterval(upd,1000); }
  window.scrollTo(0,0);
}
function examKey(E){ return E.type==='mc'?'c':E.type==='tfng'?'tf':'m'; }
function gradeExam(E){
  if(!examRun||examRun.result) return; stopExamTimer();
  const src='Reading exams · '+E.title, A=examRun.ans;
  let ok=[];
  if(E.type==='gapped'){
    ok=E.a.map((c,i)=>{ const good=A[i]===c; if(!good) addErr(`ex-${E.id}-${i}`,'mc',{q:`Gap ${i+1} of «${E.title}»: which paragraph fits? (before it: «${plain(E.parts[i]).replace(/<[^>]+>/g,'').trim().slice(-90)}»)`,o:E.opts.map((o,k)=>LETTERS[k]+' · '+o.slice(0,90)+(o.length>90?'…':'')),c,e:E.e[i]||''},src); return good; });
  } else {
    ok=E.q.map((q,i)=>{ let c,o; if(E.type==='mc'){ c=q[2]; o=q[1]; } else if(E.type==='tfng'){ c={T:0,F:1,NG:2}[q[1]]; o=['True','False','Not Given']; } else { c=q[1]; o=E.sections.map(s=>s[0]+' · '+s[1]); }
      const good=A[i]===c; if(!good) addErr(`ex-${E.id}-${i}`,'mc',{q:(E.type==='match'?'Who… ':'')+q[0],o,c,e:(E.type==='mc'?q[3]:q[2])||''},src); return good; });
  }
  const score=ok.filter(Boolean).length, tot=ok.length;
  const prev=S.exam[E.id]||{best:0,n:0};
  S.exam[E.id]={best:Math.max(prev.best,score),last:score,n:(prev.n||0)+1,d:Date.now()};
  tick(10+score); save();
  examRun.result={ok,score,tot};
  renderNav(route()); examResult(E);
}
function examResult(E){
  const R=examRun.result, A=examRun.ans, pct=Math.round(100*R.score/R.tot);
  const verdict=pct>=80?'Exam-ready':pct>=60?'A pass: keep going':'Not there yet';
  let rows='';
  if(E.type==='gapped') rows=E.a.map((c,i)=>`<li><div><div class="q">Gap ${i+1}: your answer <b>${A[i]==null?'—':LETTERS[A[i]]}</b></div><div class="${R.ok[i]?'corrected':'expl'}">${R.ok[i]?'✓':'✗ right answer: '+LETTERS[c]} · ${esc(E.e[i]||'')}</div></div></li>`).join('')+`<li><div><div class="q">Extra paragraph (not used): <b>${LETTERS[[...E.opts.keys()].find(k=>!E.a.includes(k))]}</b></div></div></li>`;
  else rows=E.q.map((q,i)=>{ let right,mine,ex; if(E.type==='mc'){ right=LETTERS[q[2]]+' · '+q[1][q[2]]; mine=A[i]==null?'—':LETTERS[A[i]]; ex=q[3]; } else if(E.type==='tfng'){ const L=['True','False','Not Given']; right={T:'True',F:'False',NG:'Not Given'}[q[1]]; mine=A[i]==null?'—':L[A[i]]; ex=q[2]; } else { right=E.sections[q[1]][0]+' · '+E.sections[q[1]][1]; mine=A[i]==null?'—':E.sections[A[i]][0]; ex=q[2]; }
    return `<li><div><div class="q">${esc(q[0])} <span class="note">· you: ${esc(mine)}</span></div><div class="${R.ok[i]?'corrected':'expl'}">${R.ok[i]?'✓':'✗ '+esc(right)} · ${esc(ex||'')}</div></div></li>`; }).join('');
  $('#exbody').innerHTML=`<section class="card result ${pct>=60?'pass':''}"><div class="drill"><span class="lab">Result</span><div class="verb">${R.score}<small style="font-size:.45em">/${R.tot}</small></div><div class="pen" style="font-size:30px">${verdict}</div>
    <p class="note">${pct}% · In Cambridge exams, about 60% is a pass at the level and 80% suggests the level above. Your mistakes are in the notebook with explanations.</p></div>
    <div class="btnrow" style="justify-content:center"><button class="btn" id="exagain" type="button">Try again</button><a class="btn" href="#exams">More practices</a><a class="btn" href="#review">Mistakes notebook</a></div></section>
   <section class="card"><div class="card-h"><h3>Answers and explanations</h3></div><ol class="items">${rows}</ol></section>
   <details class="card"><summary><b>Read the text again</b></summary>${examTextHTML(E).replace(/<select[\s\S]*?<\/select>/g,'')}</details>`;
  $('#exagain').onclick=()=>{ examRun=null; renderExam(E.id); };
  window.scrollTo(0,0);
}
async function generateExam(){
  const btn=$('#gx-go'), msg=$('#gx-msg'), type=$('#gx-type').value, lvl=$('#gx-lvl').value, topic=$('#gx-topic').value.trim(), own=($('#gx-text').value||'').trim();
  if(own && !(type==='mc'||type==='tfng')){ msg.textContent='Your own text works with Multiple choice or True/False/Not Given.'; return; }
  if(own && own.split(/\s+/).length<150){ msg.textContent='Paste at least 150 words.'; return; }
  const sample=await getSample(); if(!sample){ msg.textContent='Generating practices only works with this page open inside Claude.'; return; }
  btn.disabled=true; msg.textContent='Writing the text and the questions… (about a minute)';
  const lang=aiLang({band:1})==='pt'?'Portuguese':'simple English';
  const base=`You are an experienced writer of Cambridge English (B2 First, C1 Advanced) and IELTS reading papers. Level: ${lvl}. The candidate is a Brazilian adult who reads English for work; she speaks Portuguese and Spanish. Explanations must be in ${lang}, max 30 words each, quoting or pointing to the key words in the text.`;
  const topicLine= topic?`Topic: ${topic}.`:'Choose an interesting topic of general interest (science, work, culture, psychology, technology, society, travel). Write an ORIGINAL text, not a known article.';
  const specs={
    mc: own?`Use ONLY the text below, unchanged. Write 6 multiple-choice questions in Cambridge Part 5 style (detail, opinion, attitude, purpose, meaning of a phrase in context, reference), in text order, 4 options each, only one correct; wrong options must be plausible (use words from the text with the wrong meaning).
Answer only with JSON: {"title":"short title","text":"<p>…</p> paragraphs of the text as HTML","q":[["question",["A","B","C","D"],index_of_correct_0_to_3,"explanation"]]}
TEXT:\n"""${own}"""` : `${topicLine} Write a ${lvl==='C1'?'650-750':'550-650'} word magazine-style article in 5-7 paragraphs with opinions and nuance, then 6 multiple-choice questions in Cambridge Part 5 style (detail, opinion, attitude, purpose, meaning in context, reference), in text order, 4 options each, one correct; wrong options plausible.
Answer only with JSON: {"title":"short title","text":"<p>…</p><p>…</p>","q":[["question",["A","B","C","D"],index_of_correct_0_to_3,"explanation"]]}`,
    tfng: own?`Use ONLY the text below, unchanged. Write 10 IELTS True/False/Not Given statements in text order: about 4 True, 3 False, 3 Not Given. Not Given statements must be plausible but impossible to confirm from the text. Paraphrase; don't copy sentences.
Answer only with JSON: {"title":"short title","text":"<p>…</p> paragraphs of the text as HTML","q":[["statement","T or F or NG","explanation"]]}
TEXT:\n"""${own}"""` : `${topicLine} Write a ${lvl==='C1'?'600-700':'500-600'} word factual, academic-style text in 5-6 paragraphs (IELTS Academic), then 10 True/False/Not Given statements in text order: about 4 T, 3 F, 3 NG. NG statements must be plausible but not confirmable. Paraphrase.
Answer only with JSON: {"title":"short title","text":"<p>…</p><p>…</p>","q":[["statement","T or F or NG","explanation"]]}`,
    gapped: `${topicLine} Write a ${lvl==='C1'?'650-750':'550-650'} word article in Cambridge Part 6 format: 13 paragraphs in order, of which paragraphs 2,4,6,8,10,12 are removed as gaps. The removed paragraphs must contain clear cohesion clues (pronouns, linkers, references) to the paragraphs before AND after. Also write one extra distractor paragraph that seems to fit but doesn't. Shuffle the 7 options (6 removed + distractor).
Answer only with JSON: {"title":"short title","parts":["<p>paragraph 1</p>","<p>paragraph 3</p>","<p>5</p>","<p>7</p>","<p>9</p>","<p>11</p>","<p>13</p>"],"opts":["7 paragraphs, plain text, shuffled"],"a":[index in opts for gap1,…,gap6],"e":["6 explanations, one per gap, naming the clues"]}`,
    match: `${topicLine} Write a Cambridge Part 7 multiple-matching task: 4 short texts (A-D, ${lvl==='C1'?'130-160':'110-140'} words each) by four different people or about four different things on the same theme, each with a short title like «Name, age, job» or a heading. Then 10 statements; each matches exactly one text; use paraphrase, include some distractors where two texts mention the same idea but only one matches.
Answer only with JSON: {"title":"short title","sections":[["A","heading","<p>text</p>"],["B","heading","<p>…</p>"],["C","…","…"],["D","…","…"]],"q":[["statement",index_0_to_3,"explanation"]]}`
  };
  try{
    const d=await sample.json(base+'\n'+specs[type],{cache:false,modelTier:'complex'});
    const id='g'+Date.now().toString(36);
    const E={id,type,lvl,gen:true,d:Date.now(),title:String(d.title||'Generated practice').slice(0,80),minutes:type==='gapped'?14:type==='match'?15:type==='tfng'?15:18};
    const clean=h=>String(h||'').replace(/<(?!\/?(p|b|i|em|strong|br)\b)[^>]*>/gi,'');
    if(type==='mc'){ E.text=clean(d.text); E.q=(d.q||[]).filter(q=>Array.isArray(q)&&Array.isArray(q[1])&&q[1].length===4&&q[2]>=0&&q[2]<4).map(q=>[String(q[0]),q[1].map(String),+q[2],String(q[3]||'')]); if(E.q.length<4||!E.text) throw {code:'invalid_json'}; }
    else if(type==='tfng'){ E.text=clean(d.text); E.q=(d.q||[]).filter(q=>Array.isArray(q)&&['T','F','NG'].includes(String(q[1]).toUpperCase())).map(q=>[String(q[0]),String(q[1]).toUpperCase(),String(q[2]||'')]); if(E.q.length<6||!E.text) throw {code:'invalid_json'}; }
    else if(type==='gapped'){ E.parts=(d.parts||[]).map(clean); E.opts=(d.opts||[]).map(String); E.a=(d.a||[]).map(Number); E.e=(d.e||[]).map(String); if(E.parts.length!==7||E.opts.length!==7||E.a.length!==6||new Set(E.a).size!==6||E.a.some(x=>!(x>=0&&x<7))) throw {code:'invalid_json'}; }
    else { E.sections=(d.sections||[]).slice(0,4).map((s,i)=>[LETTERS[i],String(s[1]||''),clean(s[2])]); E.q=(d.q||[]).filter(q=>Array.isArray(q)&&q[1]>=0&&q[1]<4).map(q=>[String(q[0]),+q[1],String(q[2]||'')]); if(E.sections.length!==4||E.q.length<6) throw {code:'invalid_json'}; }
    S.examGen=S.examGen||{}; S.examGen[id]=E;
    const ks=Object.keys(S.examGen).sort((a,b)=>S.examGen[a].d-S.examGen[b].d); while(ks.length>12) delete S.examGen[ks.shift()];
    save(); location.hash='exam-'+id;
  }catch(e){ msg.textContent=errMsg(e); btn.disabled=false; }
}

