FUNCS = {}  # name -> full new source (replaces from 'function name(' up to the next top-level marker)

FUNCS['renderHome'] = r"""function renderHome(){
  const total=UNITS.reduce((a,u)=>a+uPct(u),0)/UNITS.length;
  const doneU=UNITS.filter(u=>uPct(u)===100).length;
  const next=UNITS.find(u=>uPct(u)<100)||UNITS[0];
  const exDone=Object.keys(S.ex).length;
  let h=`<section class="hero">
   <div class="eyebrow">Films · books · exams · speaking without fear</div>
   <h1>From a rusty A2 to <em>films without subtitles.</em></h1>
   <p class="lead">You already know more English than you think. This notebook dusts off the basics, then goes straight to what stops you from following a film or a novel: fast spoken English, phrasal verbs, narrative tenses and a lot of vocabulary.</p>
   <p class="note">Ten years without formal study? Start with the <a href="#unit-101">Warm-up</a>: six short units that review the A2 essentials, with explanations in Portuguese. Then go on to Unit 1.</p>
   <div class="stats">
     <div class="stat"><b>${Math.round(total)}%</b><span>of the course</span></div>
     <div class="stat"><b>${doneU}/${UNITS.length}</b><span>units completed</span></div>
     <div class="stat"><b>${exDone}</b><span>exercise sets</span></div>
     <div class="stat"><b>${S.verbi.best||0}</b><span>verb streak record</span></div>
   </div>
   <div class="btnrow" style="margin-top:20px"><a class="btn primary" href="#unit-${next.id}">${uPct(next)>0?'Continue':'Start'}: ${uName(next)} →</a><a class="btn" href="#verbs">Irregular verbs</a><a class="btn" href="#listening">Train your ear</a></div>
  </section>`;
  h+=homePlan()+homeBooks()+homeRhythm();
  h+=`<h2 class="sec">The course</h2><div class="levelmap">`;
  BANDS.forEach((b,bi)=>{
    const us=UNITS.filter(u=>u.band===bi);
    const desc=['Warm-up: present, past, future, present perfect, articles and modals. Dust off the A2 basics.','Narrative tenses for novels, phrasal verbs for films, conditionals, passive, reported speech and relative clauses.','Past modals, wishes, real spoken English, idioms and the linking that exams reward.'][bi];
    h+=`<div class="lv"><b>${b}</b><small>${desc}</small><div class="units">${us.map(u=>{const p=uPct(u);return `<a href="#unit-${u.id}" class="${p===100?'full':p>0?'part':''}" title="${esc(u.title)} · ${p}%">${uNum(u)}</a>`}).join('')}</div></div>`;
  });
  h+=`</div>
  <div class="cols3">
   <div class="card"><div class="card-h"><span class="lab">1 · Contrast</span></div><h3>What Portuguese and Spanish hide</h3><p>Every lesson compares English with the two languages you already have and marks in red the traps of a Brazilian who also speaks Spanish: <i>actually</i>, <i>I have 30 years</i>, <i>people is</i>. Explanations stay in Portuguese, so they are fast to read.</p></div>
   <div class="card"><div class="card-h"><span class="lab">2 · Volume</span></div><h3>Practice until it is automatic</h3><p>Four sets per unit, a translation and rewriting lab in the style of Cambridge exams, ${VKEYS.length} irregular verbs and a button that writes new exercises whenever you want.</p></div>
   <div class="card"><div class="card-h"><span class="lab">3 · Output</span></div><h3>Write, speak and get corrected</h3><p>A writing task per unit with targets counted as you type, red-pen correction, and an AI partner for low-pressure conversation. Nobody is watching: mistakes here are free.</p></div>
  </div>
  <h2 class="sec">Listening and speaking</h2>
  <div class="cols4">
   <a class="card lexcard" href="#listening"><span class="lab">Your ear</span><h3>Listening</h3><span class="note">Dictation by level, ${ASCOLTI.length} film-style scenes, numbers, prices and times.</span></a>
   <a class="card lexcard" href="#read-aloud"><span class="lab">Pronunciation</span><h3>Read aloud</h3><span class="note">${TESTI.length} texts, shadowing and a words-per-minute timer.</span></a>
   <a class="card lexcard" href="#speaking"><span class="lab">Confidence</span><h3>Speaking</h3><span class="note">${ROLEPLAY.length} AI role-plays, phrases to buy time, speaking test practice.</span></a>
   <a class="card lexcard" href="#beyond"><span class="lab">Real life</span><h3>Films, books &amp; me</h3><span class="note">Collect words from what you watch and read, log your time, summarise and get corrected.</span></a>
  </div>
  ${homeCultura()}
  <h2 class="sec">Films and books</h2>
  <h3>Films and series: a ladder</h3>
  <p class="note">The method: watch with <b>English</b> subtitles (never Portuguese), then rewatch two minutes without subtitles and shadow them. Climb a step when you understand about 80% with English subtitles.</p>
  <ul class="dots">
   <li><b>Step 1, clear and slow:</b> <i>Friends</i>, <i>Modern Family</i>, <i>Ted Lasso</i> (American and British side by side), animated films such as <i>Inside Out</i> and <i>Coco</i>.</li>
   <li><b>Step 2, everyday speed:</b> <i>The Office</i> (US), <i>Brooklyn Nine-Nine</i>, <i>Stranger Things</i>, <i>The Devil Wears Prada</i>, <i>The Martian</i>.</li>
   <li><b>Step 3, fast and full of slang:</b> <i>The Social Network</i>, <i>Silicon Valley</i> (you will enjoy the jokes), <i>Succession</i>, <i>Knives Out</i>.</li>
   <li><b>Step 4, strong accents:</b> <i>Sherlock</i>, <i>The Crown</i>, <i>Derry Girls</i> (Northern Ireland), <i>Peaky Blinders</i> (Birmingham).</li>
  </ul>
  <h3>More books, if you finish early</h3>
  <ul class="dots">
   <li><b>Easier:</b> R. J. Palacio, <i>Wonder</i>; a graded reader at level 4 or 5 (Penguin Readers, Oxford Bookworms).</li>
   <li><b>Middle:</b> Mark Haddon, <i>The Curious Incident of the Dog in the Night-Time</i>; John Steinbeck, <i>Of Mice and Men</i>.</li>
   <li><b>Harder:</b> Kazuo Ishiguro, <i>Never Let Me Go</i>; Sally Rooney, <i>Normal People</i>; George Orwell, <i>Nineteen Eighty-Four</i>.</li>
  </ul>
  <p class="note">Read with a pencil, not a dictionary: underline, guess from context, and look up only words that come back three times. Then add them to «My words».</p>
  <p class="note">The tests in this notebook follow the Reading and Use of English papers of Cambridge B2 First and C1 Advanced. The real exams (and IELTS) also test listening and speaking: the Listening and Speaking pages prepare you for those.</p>`;
  $('#main').innerHTML=h;
  bindHome();
}
"""

FUNCS['__VERBS__'] = r"""/* ---------- IRREGULAR VERBS ---------- */
const TEMPI = {past:'past simple', pp:'past participle'};
const PERSONE = [];
const VKEYS=Object.keys(VERBI).sort((a,b)=>a.localeCompare(b,'en'));
const first=s=>String(s).split('/')[0];
function vPattern(k){ const d=VERBI[k], p=first(d.p), pp=first(d.pp); if(p===k&&pp===k) return 'AAA'; if(p===pp) return 'ABB'; if(pp===k) return 'ABA'; return 'ABC'; }
const PATLAB={AAA:'cut – cut – cut',ABB:'buy – bought – bought',ABA:'come – came – come',ABC:'go – went – gone'};
let vSel={verbi:VKEYS.slice()};
try{ const v=JSON.parse(localStorage.getItem(KEY+'-v2')||'null'); if(v&&v.verbi&&v.verbi.length) vSel={verbi:v.verbi.filter(k=>VERBI[k])}; if(!vSel.verbi.length) vSel.verbi=VKEYS.slice(); }catch(e){}
let streak=0, cur=null, vMode='drill', vPat='all';
function saveVSel(){ try{localStorage.setItem(KEY+'-v2',JSON.stringify(vSel));}catch(e){} }
function renderVerbi(){
  $('#main').innerHTML=`<header class="uhead"><div class="eyebrow">Tools · verbs</div><h1 class="title">Irregular verbs</h1><p class="subtitle">${VKEYS.length} verbs you meet in every novel and every film. Type the past simple and the past participle, press Enter to check and Enter again for the next verb.</p></header>
   <div class="seg" role="group"><button data-m="drill" aria-pressed="${vMode==='drill'}">Practice</button><button data-m="table" aria-pressed="${vMode==='table'}">Table</button></div>
   <div id="vbody"></div>`;
  $('#main').querySelectorAll('.seg button').forEach(b=>b.onclick=()=>{ vMode=b.dataset.m; renderVerbi(); });
  if(vMode==='table') return verbTable();
  $('#vbody').innerHTML=`<section class="card drill" id="drill"></section>
   <section class="card"><div class="card-h"><div><span class="lab">Settings</span><h3>What to practise</h3></div><span class="note" id="vstats"></span></div>
   <div class="btnrow" style="margin:0 0 6px"><span class="note">By pattern:</span><button class="btn ghost" data-g="all">all</button>${Object.entries(PATLAB).map(([k,l])=>`<button class="btn ghost" data-g="${k}">${l}</button>`).join('')}</div>
   <div class="chipsel" id="selV">${VKEYS.map(k=>`<button data-k="${k}" aria-pressed="${vSel.verbi.includes(k)}" title="${esc(VERBI[k].pt||'')}">${k}</button>`).join('')}</div>
   <p class="note" style="margin-top:14px">Learning them by pattern is faster than learning a list. Both British and American forms are accepted: <i>learnt/learned</i>, <i>got/gotten</i>, <i>dreamt/dreamed</i>.</p></section>`;
  const sync=()=>{ $('#selV').querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',vSel.verbi.includes(x.dataset.k))); saveVSel(); nextVerb(); };
  $('#selV').querySelectorAll('button').forEach(b=>b.onclick=()=>{ const k=b.dataset.k; const i=vSel.verbi.indexOf(k); if(i>=0){ if(vSel.verbi.length>1) vSel.verbi.splice(i,1);} else vSel.verbi.push(k); sync(); });
  $('#vbody').querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>{ const g=b.dataset.g; vSel.verbi=VKEYS.filter(k=>g==='all'||vPattern(k)===g); sync(); });
  nextVerb();
}
function verbTable(){
  const rows=VKEYS.filter(k=>vPat==='all'||vPattern(k)===vPat);
  $('#vbody').innerHTML=`<section class="card"><div class="btnrow" style="justify-content:space-between;margin-bottom:12px"><div class="chipsel" id="vpat"><button data-p="all" aria-pressed="${vPat==='all'}">all</button>${Object.entries(PATLAB).map(([k,l])=>`<button data-p="${k}" aria-pressed="${vPat===k}">${l}</button>`).join('')}</div><input id="vq" class="vsel" placeholder="Search…" autocomplete="off"></div>
   <div class="tw"><table class="tbl lextbl" id="vtbl"><tr><th>base</th><th>past simple</th><th>past participle</th><th>português</th></tr>${rows.map(k=>`<tr><td>${canSpeak?`<button class="btn ghost play" type="button" data-say="${k}" aria-label="Listen">▶</button>`:''}<b>${k}</b></td><td>${esc(VERBI[k].p)}</td><td>${esc(VERBI[k].pp)}</td><td class="pt">${esc(VERBI[k].pt)}</td></tr>`).join('')}</table></div></section>`;
  $('#vpat').querySelectorAll('button').forEach(b=>b.onclick=()=>{ vPat=b.dataset.p; verbTable(); });
  $('#vbody').querySelectorAll('[data-say]').forEach(b=>b.onclick=()=>{ const d=VERBI[b.dataset.say]; speakSeq([{text:`${b.dataset.say}, ${first(d.p)}, ${first(d.pp)}`}]); });
  const q=$('#vq'); q.oninput=()=>{ const v=q.value.toLowerCase(); $('#vtbl').querySelectorAll('tr').forEach((tr,i)=>{ if(i) tr.hidden=v&&!tr.textContent.toLowerCase().includes(v); }); };
}
function vstats(){ const v=S.verbi; const el=$('#vstats'); if(el) el.textContent=`${v.ok}/${v.tot} right · streak ${streak} · record ${v.best}`; }
function nextVerb(){
  const v=vSel.verbi[Math.floor(Math.random()*vSel.verbi.length)];
  cur={v,done:false};
  const d=$('#drill'); if(!d) return;
  d.innerHTML=`<div class="verb">to ${v}</div><div class="note" style="margin-top:4px">${esc(VERBI[v].pt||'')}</div>
   <div class="vpair"><label><span class="lab">past simple</span><input id="vin" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="past simple"></label><label><span class="lab">past participle</span><input id="vin2" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="past participle"></label></div><div class="fb" id="vfb"></div><div id="vtab"></div>`;
  vstats();
  const a=$('#vin'), b=$('#vin2'); a.focus({preventScroll:true});
  a.addEventListener('keydown',e=>{ if(e.key!=='Enter') return; e.preventDefault(); if(cur.done){ nextVerb(); return; } b.focus(); });
  b.addEventListener('keydown',e=>{ if(e.key!=='Enter') return; e.preventDefault(); if(cur.done){ nextVerb(); return; } checkVerb(); });
}
function checkVerb(){
  const a=$('#vin'), b=$('#vin2'); if(!a.value.trim()&&!b.value.trim()) return;
  const d=VERBI[cur.v];
  const r1=judge(a.value,[d.p]), r2=judge(b.value,[d.pp]);
  const ok=r1!=='no'&&r2!=='no';
  cur.done=true; S.verbi.tot++; tick();
  [[a,r1],[b,r2]].forEach(([el,r])=>{ el.style.color=r==='no'?'var(--rosso)':'var(--verde)'; if(r==='no') el.style.textDecoration='line-through'; });
  if(ok){ S.verbi.ok++; streak++; S.verbi.best=Math.max(S.verbi.best,streak); $('#vfb').innerHTML='<span class="mark ok">Perfect! ✓</span>'; }
  else { streak=0; addErr(`v-${cur.v}`,'verb',{v:cur.v},'Irregular verbs'); $('#vfb').innerHTML=`<span class="mark no">${esc(cur.v)} · ${esc(d.p)} · ${esc(d.pp)}</span>`; }
  save(); vstats();
  $('#vtab').innerHTML=`<p class="note" style="margin-top:14px">pattern: <b>${PATLAB[vPattern(cur.v)]}</b>${d.ex?` · <i>${esc(d.ex)}</i>`:''} · Enter for the next verb</p>`;
  if(canSpeak) speakSeq([{text:`${cur.v}, ${first(d.p)}, ${first(d.pp)}`}]);
}
"""

FUNCS['numDrill'] = r"""function numDrill(ab){
  const types=[['numeri','Numbers'],['prezzi','Prices'],['orari','Times'],['anni','Years'],['telefono','Phone numbers']];
  ab.innerHTML=`<div class="chipsel" style="margin-bottom:14px">${types.map(([k,l])=>`<button data-t="${k}" aria-pressed="${numType===k}">${l}</button>`).join('')}</div>${rateSel()}<section class="card drill" id="ncard"></section><p class="note">Write in figures: 27 · 12.40 · 3:15 · 1987 · 0207 946 0321. Times use the 12-hour clock. Numbers are the first thing that disappears in fast speech: «thirteen» and «thirty» differ only in the stress.</p>`;
  bindRate(ab);
  ab.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{ numType=b.dataset.t; numDrill(ab); });
  const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
  const W=['twelve','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
  const next=()=>{
    let say,ans,show;
    if(numType==='numeri'){ const pick=R(0,3); const n=pick===0?[13,30,14,40,15,50,16,60,17,70,18,80,19,90][R(0,13)]:pick===1?R(0,100):pick===2?R(100,9999):R(10000,999999); say=String(n); ans=String(n); show=n.toLocaleString('en-GB'); }
    else if(numType==='prezzi'){ const e=R(1,199), c=[0,5,10,20,25,40,50,75,90,95,99][R(0,10)]; const cur=S.accent==='GB'?['pounds','p','£']:['dollars','cents','$']; say=c?(Math.random()<.5?`${e} ${cur[0]} and ${c} ${cur[1]}`:`${e} ${c}`):`${e} ${cur[0]}`; ans=(e+c/100).toFixed(2); show=`${cur[2]}${ans}`; }
    else if(numType==='orari'){ const h=R(1,12), m=[0,5,10,15,20,25,30,35,40,45,50,55][R(0,11)]; const nh=W[h%12+1]||W[1]; const mn=m=>({5:'five',10:'ten',15:'quarter',20:'twenty',25:'twenty-five',30:'half'})[m];
      if(Math.random()<.5){ say = m===0?`${W[h]} o'clock`: m<=30?`${mn(m)} past ${W[h]}`:`${mn(60-m)} to ${nh}`; }
      else { say = m===0?`${W[h]} o'clock`:`${W[h]} ${m<10?'oh '+m:m}`; }
      say='It\'s '+say+'.'; ans=`${h}:${String(m).padStart(2,'0')}`; show=ans; }
    else if(numType==='anni'){ const y=R(1800,2030); say=`in ${y}`; ans=String(y); show=String(y); }
    else { const d=()=>R(0,9); const p=[0,d(),d(),d(),' ',d(),d(),d(),' ',d(),d(),d(),d()]; show=p.join(''); ans=show.replace(/\s/g,''); say=show.split(' ').map(g=>g.split('').map(x=>x==='0'?'oh':x).join(' ')).join(', '); }
    const c=$('#ncard'); c.innerHTML=`${canSpeak?'<button class="btn primary" id="nplay" type="button">▶ Listen</button>':`<div class="verb">${esc(say)}</div>`}<div style="margin-top:14px"><input id="nin" inputmode="decimal" autocomplete="off" aria-label="answer"></div><div class="fb" id="nfb"></div><div class="btnrow" style="justify-content:center"><button class="btn" id="nnext" type="button">Next →</button></div>`;
    const inp=$('#nin'); let done=false;
    const play=()=>speakSeq([{text:say}]); const pb=$('#nplay'); if(pb){ pb.onclick=play; setTimeout(play,250); }
    const normN=v=>{ v=String(v).replace(/[$£€\s]/g,'').replace(/,/g,numType==='prezzi'?'.':''); if(numType==='orari'){ const m=v.match(/^(\d{1,2})[:.h]?(\d{2})?$/); return m?`${(+m[1]%12)||12}:${m[2]||'00'}`:v; } if(numType==='prezzi'){ const f=parseFloat(v); return isNaN(f)?v:f.toFixed(2); } return v.replace(/\D/g,''); };
    const check=()=>{ if(done) { next(); return; } if(!inp.value.trim()) return; done=true; const ok=normN(inp.value)===ans; tick(); $('#nfb').innerHTML=(ok?'<span class="mark ok">Right! ✓</span>':`<span class="mark no">${esc(show)}</span>`)+`<p class="note">«${esc(say)}»</p>`; inp.style.color=ok?'var(--verde)':'var(--rosso)'; };
    inp.addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); check(); } }); inp.focus({preventScroll:true});
    $('#nnext').onclick=next;
  };
  next();
}
"""

FUNCS['risorse'] = r"""function risorse(fb){
  fb.innerHTML=`<section class="card"><div class="card-h"><div><span class="lab">Method</span><h3>One episode, three passes</h3></div></div>
   <ol class="dots"><li><b>Watch it all</b> with <b>English</b> subtitles, without stopping. Never Portuguese subtitles: your brain stops listening.</li><li><b>Pick two minutes</b> you liked and rewatch them sentence by sentence: pause and repeat out loud, copying the rhythm (shadowing). This is where your ear learns <i>gonna</i>, <i>wanna</i>, <i>whaddaya</i>.</li><li><b>Watch those two minutes without subtitles.</b> You will be surprised.</li><li><b>Note 5 words or expressions</b> in <a href="#beyond" data-go="parole">My words</a>, with the sentence where you heard them.</li><li><b>Summarise</b> the episode in five sentences in <a href="#beyond" data-go="racconta">Tell me about it</a>, and <b>log</b> the minutes in the <a href="#beyond" data-go="registro">Study log</a>.</li></ol></section>
   <section class="card"><div class="card-h"><div><span class="lab">Method</span><h3>Reading a novel without suffering</h3></div></div>
   <ul class="dots"><li>Choose a book you would enjoy in Portuguese, one step <b>below</b> your level. Pleasure beats difficulty.</li><li>Read 20 minutes a day. Underline, but look up a word only if it blocks the story or comes back three times.</li><li>Once a week, read one page out loud and time yourself in <a href="#read-aloud">Read aloud</a>.</li><li>Audiobook trick: listen to a chapter while you read it. It joins the written word to the sound, which is exactly what films need.</li></ul></section>
   <section class="card"><div class="card-h"><div><span class="lab">To learn</span><h3>Channels and podcasts for learners</h3></div></div>
   <ul class="dots">
    <li><b>Pronunciation</b> · <a href="${yt('Rachel\'s English connected speech')}" target="_blank" rel="noopener">Rachel's English</a> (American, perfect for connected speech) · <a href="${yt('English with Lucy pronunciation')}" target="_blank" rel="noopener">English with Lucy</a> (British)</li>
    <li><b>Films and series explained</b> · <a href="${yt('Learn English with TV Series')}" target="_blank" rel="noopener">Learn English with TV Series</a> · <a href="${yt('Speak English with Vanessa')}" target="_blank" rel="noopener">Speak English with Vanessa</a></li>
    <li><b>B1–B2 podcasts</b> · <a href="${yt('6 Minute English BBC Learning English')}" target="_blank" rel="noopener">6 Minute English (BBC)</a> · <a href="${yt('Luke\'s English Podcast')}" target="_blank" rel="noopener">Luke's English Podcast</a> · <a href="${yt('All Ears English podcast')}" target="_blank" rel="noopener">All Ears English</a></li>
    <li><b>Exams</b> · <a href="${yt('Cambridge B2 First reading and use of English tips')}" target="_blank" rel="noopener">B2 First tips</a> · <a href="${yt('C1 Advanced writing essay tips')}" target="_blank" rel="noopener">C1 Advanced writing</a> · <a href="${yt('IELTS reading tips')}" target="_blank" rel="noopener">IELTS reading</a></li>
    <li><b>Native content</b> · TED Talks (subtitles in English, any topic) · tech podcasts and conference talks in your own field: you already know the topic, so only the English is new.</li>
   </ul></section>
   <section class="card"><div class="card-h"><div><span class="lab">For pleasure</span><h3>Music with lyrics</h3></div></div>
   <p>Look up the lyrics and read them while you listen. Clear singers first: Adele, Ed Sheeran, Taylor Swift, Norah Jones, The Beatles; then faster ones like Billie Eilish or Arctic Monkeys.</p></section>
   <section class="card"><div class="card-h"><div><span class="lab">By topic</span><h3>Videos for every unit</h3></div></div><p class="note">In every unit, in the «Listen &amp; speak» tab, you will find the right searches for that topic.</p>
    <div class="vlinks">${UNITS.map(u=>{ const s=USPEAK[u.id]; return s?`<div><b>${esc(uName(u))}</b> · ${s.v.map(q=>`<a href="${yt(q)}" target="_blank" rel="noopener">${esc(q)}</a>`).join(' · ')}</div>`:''; }).join('')}</div></section>`;
  fb.querySelectorAll('[data-go]').forEach(a=>a.onclick=e=>{ e.preventDefault(); fuoriMode=a.dataset.go; renderFuori(); });
}
"""
