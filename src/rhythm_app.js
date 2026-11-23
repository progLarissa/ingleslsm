function tick(n=1){
  const k=dayKey(); S.days[k]=(S.days[k]||0)+n; save();
  updRhythm();
}
function streaks(){
  const met=k=>(S.days[k]||0)>0;
  let cur=0; const d=new Date(); if(!met(dayKey(d))) d.setDate(d.getDate()-1);
  while(met(dayKey(d))){ cur++; d.setDate(d.getDate()-1); }
  const keys=Object.keys(S.days).filter(met).sort(); let best=0,run=0,prev=null;
  keys.forEach(k=>{ if(prev){ const p=new Date(prev+'T12:00:00'); p.setDate(p.getDate()+1); run= dayKey(p)===k? run+1 : 1; } else run=1; best=Math.max(best,run); prev=k; });
  return {cur, best:Math.max(best,cur), total:keys.length};
}
function todaySess(){
  const p=planStatus(); if(p.nextIdx<0) return null;
  const i = p.todayIdx>=0 ? p.todayIdx : p.nextIdx; const s=p.ss[i];
  const n=s.tasks.filter((_,j)=>taskDone(s,j)).length;
  return {s,n,tot:s.tasks.length,isToday:p.todayIdx===i,late:p.late};
}
function rhythmText(){
  const t=todaySess(), st=streaks();
  if(!t) return {top:'Plan complete!',sub:'',pct:100,mini:'✓',met:true};
  const short=t.s.label.replace(/ of \d+$/,'');
  const met=t.n===t.tot;
  return {top:met&&t.isToday?'Today ✓':(t.isToday?'Today':'Next'), sub:`${short} · ${t.n} of ${t.tot} tasks`, pct:Math.round(100*t.n/t.tot), mini:met&&t.isToday?'✓':`${t.n}/${t.tot}`, met:met&&t.isToday, streak:st.cur};
}
function rhythmWidget(){
  const r=rhythmText();
  return `<a class="rhythm ${r.met?'met':''}" href="#plan" id="rhythm" title="My plan"><span class="rw-top"><span><b id="rw-n">${esc(r.top)}</b></span><span class="rw-streak" id="rw-s">${r.streak?`${r.streak} ${r.streak===1?'day':'days'} in a row`:''}</span></span><span class="note" id="rw-sub" style="color:inherit;opacity:.8">${esc(r.sub)}</span><span class="rw-bar"><i id="rw-bar" style="width:${r.pct}%"></i></span></a>`;
}
function updRhythm(){
  const e=$('#rw-n'); const r=rhythmText(); const top=$('#rw-top'); if(top){ top.textContent=r.mini; top.setAttribute('href','#plan'); }
  if(!e) return;
  e.textContent=r.top; $('#rw-sub').textContent=r.sub; $('#rw-bar').style.width=r.pct+'%';
  $('#rw-s').textContent=r.streak?`${r.streak} ${r.streak===1?'day':'days'} in a row`:'';
  $('#rhythm').classList.toggle('met',r.met);
}
function homeRhythm(){
  const st=streaks(), due=errDue().length;
  return `<section class="rhythm-sec">
   <div class="rgrid">
    <div class="card"><span class="lab">Study streak</span><b class="big">${st.cur}<small> ${st.cur===1?'day':'days'}</small></b><span class="note">record: ${st.best} · ${st.total} days studied in total</span></div>
    <div class="card ${due?'due':''}"><span class="lab">Mistakes to review today</span><b class="big">${due}</b><a class="btn ${due?'primary':''}" href="#review">${due?'Review now →':'Open the notebook'}</a></div>
    <div class="card ${vDue().length?'due':''}"><span class="lab">Words to review today</span><b class="big">${vDue().length}</b><a class="btn ${vDue().length?'primary':''}" href="#words">${vDue().length?'Review now →':'Word review'}</a><span class="note">${vStats().mastered} words mastered</span></div>
   </div>
   <div class="testrow">${TESTS.map(t=>{ const r=S.tests[t.id]; return `<a class="testchip ${r&&r.passed?'passed':''}" href="#test-${t.id}"><b>${t.title}</b><span>${t.range?"Warm-up ":"units "}${tRange(t)} · ${t.lvl}</span><em>${r?(r.passed?'passed · ':'')+r.best+'/20':'to do'}</em></a>`; }).join('')}<a class="testchip lex" href="#exams"><b>Reading exams</b><span>${EXAMS.length} practices</span><em>${Object.keys(S.exam).length} done</em></a><a class="testchip lex" href="#writing"><b>Writing exams</b><span>${WEXAMS.length} tasks</span><em>${Object.values(S.wexam||{}).filter(x=>x.scores).length} marked</em></a></div>
  </section>`;
}
/* end */
