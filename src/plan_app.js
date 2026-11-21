/* ---------- MY PLAN: dated daily sessions of about 25 minutes ---------- */
const WD=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const fromKey=k=>new Date(k+'T12:00:00');
const fmtDay=(k,o)=>fromKey(k).toLocaleDateString('en-GB',o||{weekday:'long',day:'numeric',month:'long'});
function planCfg(){ S.plan=S.plan||{}; const P=S.plan; if(!P.start) P.start=dayKey(); if(!Array.isArray(P.days)||!P.days.length) P.days=[0,1,2,3,4,5]; if(P.anchor==null) P.anchor=P.start; if(P.anchorIdx==null) P.anchorIdx=0; P.frozen=P.frozen||{}; P.tick=P.tick||{}; return P; }
let PLAN=null;
function wc(t){ return String(t||'').trim()?String(t).trim().split(/\s+/).length:0; }
function buildPlan(){
  if(PLAN) return PLAN;
  const out=[], SET_MIN={fill:8,mc:5,fix:5,order:5};
  const scenes=ASCOLTI.map((a,i)=>({k:'scene',i,m:10,t:`Listening scene: «${a.t}»`,href:'#listening-'+i,auto:()=>!!S.asc[i]}));
  const cult=CULTURA.map((c,i)=>({k:'cult',i,m:10,t:`Culture card: «${c.t}»`,href:'#culture-'+i,auto:()=>!!(S.cult[i]&&S.cult[i].read)}));
  const extras=[]; for(let i=0;i<Math.max(scenes.length,cult.length);i++){ if(scenes[i]) extras.push(scenes[i]); if(cult[i]) extras.push(cult[i]); }
  let ex=0, lexI=0, examI=0;
  const nextExtra=()=>extras[ex++%extras.length];
  const L=(u,tab,t,m,auto)=>({t,m,href:'#unit-'+u.id,tab,u:u.id,auto});
  const review={t:'Mistakes notebook: review what is due today',m:5,href:'#review'};
  const verbs={t:'Irregular verbs: 5 minutes of practice',m:5,href:'#verbs'};
  const setTask=(u,i)=>{ const s=u.ex[i]; return L(u,'esercizi',`Exercises, set ${String.fromCharCode(65+i)}: ${s.title}`,SET_MIN[s.t]||6,()=>!!S.ex[u.id+'-'+i]); };
  const push=(kind,label,unit,tasks)=>out.push({kind,label,unit,tasks});
  UNITS.forEach(u=>{
    const n=uName(u), last=u.ex.length-1;
    if(u.band===0){
      push('unit',`${n} · day 1 of 4`,u,[L(u,'lezione',`Lesson: ${u.title}`,15,()=>!!S.lesson[u.id]),setTask(u,0)]);
      push('unit',`${n} · day 2 of 4`,u,u.ex.slice(1).map((_,k)=>setTask(u,k+1)).concat([verbs]));
      push('unit',`${n} · day 3 of 4`,u,[L(u,'lettura',`Reading: «${u.reading.title}» + questions`,15,()=>!!S.read[u.id]),L(u,'parla','Listen & speak: read aloud and dictation',10,()=>!!(S.spk[u.id]&&S.spk[u.id].done))]);
      push('unit',`${n} · day 4 of 4`,u,[L(u,'scrittura','Writing task: write it, correct it with the red pen, mark it complete',20,()=>!!(S.write[u.id]&&S.write[u.id].done)),review]);
      if(u.id===106){ const T=TESTS[0]; push('test',T.title,null,[{t:`${T.title}: reading, open cloze and grammar (timed)`,m:30,href:'#test-'+T.id,auto:()=>!!S.tests[T.id]}]); }
      return;
    }
    const lex=LESSICO[lexI++%LESSICO.length];
    push('unit',`${n} · day 1 of 6`,u,[L(u,'lezione',`Lesson: ${u.title}`,20,()=>!!S.lesson[u.id]),review]);
    push('unit',`${n} · day 2 of 6`,u,u.ex.slice(0,last).map((_,i)=>setTask(u,i)).concat([verbs]));
    push('unit',`${n} · day 3 of 6`,u,[setTask(u,last),{t:`Vocabulary: «${lex.t}» (cards)`,m:10,href:'#vocabulary-'+LESSICO.indexOf(lex)},nextExtra()]);
    push('unit',`${n} · day 4 of 6`,u,[L(u,'lettura',`Reading: «${u.reading.title}» + questions`,15,()=>!!S.read[u.id]),L(u,'parla','Listen & speak: read aloud and dictation',10,()=>!!(S.spk[u.id]&&S.spk[u.id].done))]);
    push('unit',`${n} · day 5 of 6`,u,[L(u,'scrittura','Writing: first draft, no dictionary',25,()=>wc(S.write[u.id]&&S.write[u.id].text)>=Math.round(u.write.words[0]*.7))]);
    push('unit',`${n} · day 6 of 6`,u,[L(u,'scrittura','Writing: red-pen correction, rewrite and mark it complete',15,()=>!!(S.write[u.id]&&S.write[u.id].done)),nextExtra()]);
    const E=EXAMS[examI++];
    push('exam','Reading exam practice',null,[E?{t:`Reading exam: «${E.title}» (${EXAM_TYPES[E.type].exam}, timed)`,m:E.minutes,href:'#exam-'+E.id,auto:()=>!!S.exam[E.id]}:{t:'Reading exam: generate a new practice (C1, any format) and do it timed',m:18,href:'#exams'},review]);
    if(u.id===6||u.id===12){ const T=TESTS[u.id===6?1:2]; push('test',T.title,null,[{t:`${T.title}: reading, open cloze and grammar (timed)`,m:30,href:'#test-'+T.id,auto:()=>!!S.tests[T.id]}]); }
  });
  let band=0; out.forEach((s,i)=>{ s.idx=i; s.min=s.tasks.reduce((a,t)=>a+t.m,0); if(s.unit) band=s.unit.band; s.band=band; });
  PLAN=out; return out;
}
const tKey=(s,j)=>s.idx+'-'+j;
function taskDone(s,j){ const t=s.tasks[j]; return !!(planCfg().tick[tKey(s,j)] || (t.auto&&t.auto())); }
function sessState(s){ const n=s.tasks.filter((_,j)=>taskDone(s,j)).length; return n===s.tasks.length?'done':n?'part':'todo'; }
function nextDay(k,days){ const d=fromKey(k); for(let i=0;i<8;i++){ if(days.includes((d.getDay()+6)%7)) return dayKey(d); d.setDate(d.getDate()+1); } return dayKey(d); }
function planDates(){
  const P=planCfg(), ss=buildPlan(), dates=[];
  let cur=P.anchor;
  ss.forEach((s,i)=>{ if(i<P.anchorIdx&&P.frozen[i]){ dates.push(P.frozen[i]); return; } const k=nextDay(cur,P.days); dates.push(k); const d=fromKey(k); d.setDate(d.getDate()+1); cur=dayKey(d); });
  return dates;
}
function planStatus(){
  const ss=buildPlan(), dates=planDates(), today=dayKey();
  const st=ss.map(sessState);
  const done=st.filter(x=>x==='done').length;
  const late=ss.filter((s,i)=>st[i]!=='done'&&dates[i]<today).length;
  const nextIdx=st.findIndex(x=>x!=='done');
  const todayIdx=dates.findIndex((d,i)=>d===today);
  return {ss,dates,st,done,late,nextIdx,todayIdx,today};
}
function reschedule(fromKeyDate){
  const P=planCfg(), {dates,st}=planStatus();
  const first=st.findIndex(x=>x!=='done'); if(first<0) return;
  const frozen={}; for(let i=0;i<first;i++) frozen[i]=dates[i];
  P.frozen=frozen; P.anchorIdx=first; P.anchor=fromKeyDate||dayKey(); save();
}
let planView=null, planSel=null;
function sessionHTML(s,date,opts){
  opts=opts||{};
  const P=planCfg(), stt=sessState(s), today=dayKey();
  const tag = stt==='done'?'<span class="pstate done">✓ done</span>': date<today?'<span class="pstate late">late</span>': date===today?'<span class="pstate today">today</span>':'<span class="pstate">planned</span>';
  return `<div class="psess ${stt}"><div class="card-h"><div><span class="lab">${esc(fmtDay(date))} · session ${s.idx+1} of ${buildPlan().length}</span><h3>${esc(s.label)}</h3></div><div class="btnrow">${tag}<span class="note">≈ ${s.min} min</span></div></div>
   <ul class="ptasks">${s.tasks.map((t,j)=>{ const d=taskDone(s,j); return `<li class="${d?'on':''}"><button class="pchk" type="button" data-s="${s.idx}" data-j="${j}" aria-pressed="${d}" aria-label="Mark as done">${d?'✓':''}</button><div class="pt"><span>${esc(t.t)}</span><span class="note">${t.m} min${t.auto?' · ticks itself when you finish it':''}</span></div><a class="btn ghost" href="${t.href}" data-tab="${t.tab||''}" data-u="${t.u||''}">Open →</a></li>`; }).join('')}</ul>
   ${bookLine(s)}
   ${opts.cta&&stt==='done'?`<p class="note" style="margin:6px 0 0"><span class="pen" style="font-size:22px">Well done!</span> Today's session is complete. Anything extra is a bonus.</p>`:''}</div>`;
}
function bindSession(root,rerender){
  root.querySelectorAll('.pchk').forEach(b=>b.onclick=()=>{ const s=buildPlan()[+b.dataset.s], j=+b.dataset.j, P=planCfg(), k=tKey(s,j);
    const was=taskDone(s,j); if(was&&!P.tick[k]){ toast('This task ticks itself from your progress.'); return; }
    if(P.tick[k]) delete P.tick[k]; else { P.tick[k]=dayKey(); tick(2); }
    save(); if(sessState(s)==='done'&&!was) toast(`<span class="pen">Session done!</span> ${esc(s.label)}`); rerender(); renderNav(route()); });
  root.querySelectorAll('a[data-u]').forEach(a=>a.addEventListener('click',()=>{ if(a.dataset.u&&a.dataset.tab){ S.tab[a.dataset.u]=a.dataset.tab; save(); } }));
}
function planNavNote(){ const p=planStatus(); if(p.nextIdx<0) return 'all sessions done!'; const i=p.todayIdx>=0?p.todayIdx:p.nextIdx; return `${p.done}/${p.ss.length} sessions${p.late?` · ${p.late} late`:''}${p.todayIdx>=0&&p.st[p.todayIdx]==='done'?' · today ✓':''}`; }
function homePlan(){
  const p=planStatus(), pct=Math.round(100*p.done/p.ss.length);
  const show = p.todayIdx>=0 && p.st[p.todayIdx]!=='done' ? p.todayIdx : p.nextIdx;
  const end=p.dates[p.dates.length-1];
  return `<h2 class="sec">Your plan</h2>
   <div class="rgrid" style="margin-bottom:14px">
    <div class="card"><span class="lab">Progress</span><b class="big">${p.done}<small>/${p.ss.length} sessions</small></b><span class="rw-bar"><i style="width:${pct}%"></i></span><span class="note">${pct}% · about 25 minutes a day</span></div>
    <div class="card ${p.late?'due':''}"><span class="lab">Schedule</span><b class="big">${p.late?p.late:'✓'}<small>${p.late?' late':' on track'}</small></b><span class="note">${p.late?'Do the next one today, or move the plan forward.':'You are on schedule.'}</span></div>
    <div class="card"><span class="lab">Finish line</span><b class="big" style="font-size:26px">${esc(fmtDay(end,{day:'numeric',month:'short',year:'numeric'}))}</b><span class="note">C1 units, reading exams and three tests</span></div>
   </div>
   ${show>=0?`<section class="card" id="hplan">${sessionHTML(p.ss[show],p.dates[show],{cta:true})}</section>`:'<p class="lead">You have finished the whole plan. Congratulations!</p>'}
   <div class="btnrow" style="margin:-8px 0 30px"><a class="btn primary" href="#plan">Open the calendar →</a></div>`;
}
function renderPlan(){
  const P=planCfg(), p=planStatus(), today=p.today;
  if(!planView){ const d=fromKey(today); planView=[d.getFullYear(),d.getMonth()]; }
  const [Y,M]=planView;
  const byDate={}; p.dates.forEach((d,i)=>{ (byDate[d]=byDate[d]||[]).push(i); });
  if(planSel==null) planSel = p.todayIdx>=0 ? p.todayIdx : (p.nextIdx>=0?p.nextIdx:0);
  const first=new Date(Y,M,1), lead=(first.getDay()+6)%7, dim=new Date(Y,M+1,0).getDate();
  let cells=''; for(let i=0;i<lead;i++) cells+='<div class="cday empty"></div>';
  for(let d=1;d<=dim;d++){ const k=dayKey(new Date(Y,M,d)); const ids=byDate[k]||[];
    const cls=ids.map(i=>p.st[i]==='done'?'done':(k<today?'late':p.st[i]==='part'?'part':'plan'))[0]||'';
    const s=ids.length?p.ss[ids[0]]:null;
    const short=s?(s.kind==='test'?'Test':s.kind==='exam'?'Exam':(s.unit.n?s.unit.n:'U'+s.unit.id)+'·'+(s.label.match(/day (\d)/)||[,''])[1]):'';
    cells+=`<button class="cday ${cls} ${k===today?'today':''} ${ids.includes(planSel)?'sel':''}" type="button" ${ids.length?`data-i="${ids[0]}"`:'disabled'}><span class="cd">${d}</span>${short?`<span class="cs">${esc(short)}</span>`:''}${cls==='done'?'<span class="ck">✓</span>':''}</button>`; }
  const pct=Math.round(100*p.done/p.ss.length);
  const wk=[...Array(7)].map((_,i)=>{ const d=fromKey(today); d.setDate(d.getDate()-((d.getDay()+6)%7)+i); return dayKey(d); });
  const weekDone=wk.filter(k=>(byDate[k]||[]).some(i=>p.st[i]==='done')).length, weekPlanned=wk.filter(k=>(byDate[k]||[]).length).length;
  $('#main').innerHTML=`<header class="uhead"><div class="eyebrow">Every day · my plan</div><h1 class="title">My plan</h1>
   <p class="subtitle">${p.ss.length} sessions of about 25 minutes, on the days you choose. Each day shows exactly what to do; most tasks tick themselves when you finish them in the notebook.</p></header>
   <div class="rgrid">
    <div class="card"><span class="lab">Course progress</span><b class="big">${pct}%</b><span class="rw-bar"><i style="width:${pct}%"></i></span><span class="note">${p.done} of ${p.ss.length} sessions done</span></div>
    <div class="card"><span class="lab">This week</span><b class="big">${weekDone}<small>/${weekPlanned} days</small></b><span class="note">sessions completed this week</span></div>
    <div class="card ${p.late?'due':''}"><span class="lab">Schedule</span><b class="big">${p.late||'✓'}<small>${p.late?' late':' on track'}</small></b>${p.late?'<button class="btn primary" id="presched" type="button">Move the plan to start today</button>':`<span class="note">finish on ${esc(fmtDay(p.dates[p.dates.length-1],{day:'numeric',month:'long',year:'numeric'}))}</span>`}</div>
   </div>
   <div class="phasebar">${['Warm-up','B1 → B2','B2 → C1'].map((name,bi)=>{ const idx=p.ss.filter(s=>s.band===bi).map(s=>s.idx); const dn=idx.filter(i=>p.st[i]==='done').length; return `<div class="ph"><span class="lab">${name}</span><span class="rw-bar"><i style="width:${idx.length?Math.round(100*dn/idx.length):0}%"></i></span><span class="note">${dn}/${idx.length}</span></div>`; }).join('')}</div>
   <section class="card" id="psel">${sessionHTML(p.ss[planSel],p.dates[planSel])}</section>
   <section class="card cal"><div class="card-h"><div class="btnrow"><button class="btn ghost" id="cprev" type="button" aria-label="Previous month">←</button><h3 style="margin:0">${new Date(Y,M,1).toLocaleDateString('en-GB',{month:'long',year:'numeric'})}</h3><button class="btn ghost" id="cnext" type="button" aria-label="Next month">→</button></div><button class="btn" id="ctoday" type="button">Today</button></div>
    <div class="cgrid">${WD.map(w=>`<div class="cwd">${w}</div>`).join('')}${cells}</div>
    <div class="cleg"><span><i class="lg done"></i>done</span><span><i class="lg part"></i>started</span><span><i class="lg late"></i>late</span><span><i class="lg plan"></i>planned</span><span><i class="lg today"></i>today</span></div>
    <p class="note">Tap a day to see its session. Days without a number are rest days.</p></section>
   <section class="card"><div class="card-h"><div><span class="lab">Settings</span><h3>When do you study?</h3></div></div>
    <p class="note" style="margin-top:0">Choose your study days. Each session takes about 25 minutes (the shortest are 20, a test day is 30).</p>
    <div class="chipsel" id="pdays">${WD.map((w,i)=>`<button type="button" data-d="${i}" aria-pressed="${P.days.includes(i)}">${w}</button>`).join('')}</div>
    <div class="btnrow" style="margin-top:12px"><label class="note" for="pstart">Start (or restart) on</label><input type="date" id="pstart" class="vsel" value="${p.done?today:P.start}"><button class="btn primary" id="psave" type="button">Update my calendar</button></div>
    <p class="note">Updating keeps the sessions you have finished and spreads the rest from the date you choose. It is also the way to catch up after a holiday or a busy week.</p></section>
   <section class="card"><div class="card-h"><div><span class="lab">Every day, outside the plan</span><h3>The 10 extra minutes that make the difference</h3></div></div>
    <ul class="dots"><li>An episode or 20 minutes of a film with <b>English</b> subtitles, logged in <a href="#beyond">Films, books &amp; me</a>.</li><li>A few pages of your book before sleeping.</li><li>Neither is compulsory: they are the fun part. On busy days the 25-minute session is enough.</li></ul></section>`;
  bindSession($('#psel'),renderPlan);
  $('#main').querySelectorAll('.cday[data-i]').forEach(b=>b.onclick=()=>{ planSel=+b.dataset.i; renderPlan(); $('#psel').scrollIntoView({block:'nearest',behavior:'smooth'}); });
  $('#cprev').onclick=()=>{ planView=M?[Y,M-1]:[Y-1,11]; renderPlan(); };
  $('#cnext').onclick=()=>{ planView=M<11?[Y,M+1]:[Y+1,0]; renderPlan(); };
  $('#ctoday').onclick=()=>{ planView=null; planSel=null; renderPlan(); };
  const rs=$('#presched'); if(rs) rs.onclick=()=>{ reschedule(dayKey()); planSel=null; renderPlan(); renderNav(route()); toast('<span class="pen">Done:</span> the plan now continues from today.'); };
  $('#pdays').querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{ const d=+b.dataset.d, i=P.days.indexOf(d); if(i>=0){ if(P.days.length>1) P.days.splice(i,1); } else P.days.push(d); P.days.sort(); $('#pdays').querySelectorAll('[data-d]').forEach(x=>x.setAttribute('aria-pressed',P.days.includes(+x.dataset.d))); });
  $('#psave').onclick=()=>{ const v=$('#pstart').value||today; if(!p.done){ P.start=v; P.anchor=v; P.anchorIdx=0; P.frozen={}; save(); } else reschedule(v); planSel=null; planView=null; renderPlan(); renderNav(route()); toast('<span class="pen">Calendar updated.</span>'); };
}
