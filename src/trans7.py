R7=[]
def r(old,new,n=1): R7.append((old,new,n))
r("['lesson','ex','read','write','tab','gen','corr','days','err','errDel','voc','tests','cult','spk','myvoc','log','orale','wpm','asc']","['lesson','ex','read','write','tab','gen','corr','days','err','errDel','voc','tests','cult','spk','myvoc','log','orale','wpm','asc','exam','examGen']")
r("['ex','read','corr','gen','lesson','voc','tab','cult','spk','myvoc','orale','wpm','asc'].forEach(f=>{","['ex','read','corr','gen','lesson','voc','tab','cult','spk','myvoc','orale','wpm','asc','exam','examGen'].forEach(f=>{")
r("const texts={write:o.write,corr:o.corr,gen:o.gen}; delete o.write; delete o.corr; delete o.gen;","const texts={write:o.write,corr:o.corr,gen:o.gen,examGen:o.examGen}; delete o.write; delete o.corr; delete o.gen; delete o.examGen;")
r("""<div class="navgroup"><h4><span>Tests</span></h4><ul>${TESTS.map(""","""<div class="navgroup"><h4><span>Tests</span></h4><ul><li><a class="navlink tool" href="#exams" ${route.type==='exams'?'aria-current="page"':''}><span class="n">§</span><span class="t">Reading exams<br><small class="note">${EXAMS.length} practices · Cambridge &amp; IELTS</small></span></a></li>${TESTS.map(""")
r("""  if(h==='speaking') return {type:'parlare'};""","""  if(h==='speaking') return {type:'parlare'};
  if(h==='exams') return {type:'exams'};
  if((m=h.match(/^exam-([a-z0-9-]+)$/))) return {type:'exams',id:m[1]};""")
r("stopTestTimer(); stopSpeak(); stopOral();","stopTestTimer(); stopExamTimer(); stopSpeak(); stopOral();")
r("  else if(r.type==='test') renderTest(r.id);","  else if(r.type==='test') renderTest(r.id);\n  else if(r.type==='exams') renderExams(r.id);")
r("""  <h2 class="sec">Listening and speaking</h2>""","""  <section class="card examcta"><div><span class="lab">Your main goal · reading for exams</span><h3>Reading exams</h3><p>Timed practice in the real Cambridge and IELTS formats (multiple choice, gapped text, multiple matching, True/False/Not Given), with an explanation for every answer and unlimited new practices.</p></div><a class="btn primary" href="#exams">Practise now →</a></section>
  <h2 class="sec">Listening and speaking</h2>""")


r("'asc','exam','examGen']","'asc','exam','examGen','plan','books','wexam','vsr']",2)
r("r.name=n.name||o.name;","r.plan=Object.assign({},(O.plan||{}),(n.plan||{})); r.plan.tick=Object.assign({},(O.plan&&O.plan.tick)||{},(n.plan&&n.plan.tick)||{});\n  r.name=n.name||o.name;")
r("""  if(h==='exams') return {type:'exams'};""","""  if(h==='exams') return {type:'exams'};
  if(h==='plan') return {type:'plan'};""")
r("  else if(r.type==='exams') renderExams(r.id);","  else if(r.type==='exams') renderExams(r.id);\n  else if(r.type==='plan') renderPlan();")
r("""<h4><span>Every day</span></h4><ul>""","""<h4><span>Every day</span></h4><ul>
   <li><a class="navlink tool" href="#plan" ${route.type==='plan'?'aria-current="page"':''}><span class="n">▦</span><span class="t">My plan<br><small class="note">${planNavNote()}</small></span></a></li>""")
r("""function bindHome(){ ""","""function bindHome(){ const hp=$('#hplan'); if(hp) bindSession(hp,()=>renderHome()); """)

r("""  if(h==='plan') return {type:'plan'};""","""  if(h==='plan') return {type:'plan'};
  if(h==='books') return {type:'books'};
  if((m=h.match(/^books-(\\d)$/))) return {type:'books',id:m[1]};""")
r("  else if(r.type==='plan') renderPlan();","  else if(r.type==='plan') renderPlan();\n  else if(r.type==='books') renderBooks(r.id);")
r("""<span class="t">My plan<br><small class="note">${planNavNote()}</small></span></a></li>""","""<span class="t">My plan<br><small class="note">${planNavNote()}</small></span></a></li>
   <li><a class="navlink tool" href="#books" ${route.type==='books'?'aria-current="page"':''}><span class="n">❧</span><span class="t">Your books<br><small class="note">${BOOKS.map((B,i)=>((S.books&&S.books[i])||0)+'/'+B.ch).join(' · ')} chapters</small></span></a></li>""")

r("const texts={write:o.write,corr:o.corr,gen:o.gen,examGen:o.examGen}; delete o.write; delete o.corr; delete o.gen; delete o.examGen;","const texts={write:o.write,corr:o.corr,gen:o.gen,examGen:o.examGen,wexam:o.wexam}; delete o.write; delete o.corr; delete o.gen; delete o.examGen; delete o.wexam;")
r("  r.name=n.name||o.name; r.at=","  r.vsr=Object.assign({},O.vsr||{}); Object.entries(n.vsr||{}).forEach(([k,v])=>{ if(!r.vsr[k]||(v.u||0)>=(r.vsr[k].u||0)) r.vsr[k]=v; });\n  r.name=n.name||o.name; r.at=")
r("stopTestTimer(); stopExamTimer(); stopSpeak(); stopOral();","stopTestTimer(); stopExamTimer(); stopWexTimer(); stopSpeak(); stopOral();")
r("""  if(h==='books') return {type:'books'};""","""  if(h==='books') return {type:'books'};
  if(h==='words') return {type:'words'};
  if(h==='writing') return {type:'writing'};
  if((m=h.match(/^writing-([a-z0-9-]+)$/))) return {type:'writing',id:m[1]};""")
r("  else if(r.type==='books') renderBooks(r.id);","  else if(r.type==='books') renderBooks(r.id);\n  else if(r.type==='words') renderWords();\n  else if(r.type==='writing') renderWriting(r.id);")
r("""<span class="t">Reading exams<br><small class="note">${EXAMS.length} practices · Cambridge &amp; IELTS</small></span></a></li>""","""<span class="t">Reading exams<br><small class="note">${EXAMS.length} practices · Cambridge &amp; IELTS</small></span></a></li><li><a class="navlink tool" href="#writing" ${route.type==='writing'?'aria-current="page"':''}><span class="n">✍</span><span class="t">Writing exams<br><small class="note">${WEXAMS.length} tasks · marked by criterion</small></span></a></li>""")
r("""   <li><a class="navlink tool" href="#vocabulary" ${route.type==='lessico'?'aria-current="page"':''}>""","""   <li><a class="navlink tool" href="#words" ${route.type==='words'?'aria-current="page"':''}><span class="n">↻</span><span class="t">Word review ${vDue().length?`<span class="badge">${vDue().length}</span>`:''}<br><small class="note">${vStats().all} in review · ${vStats().mastered} mastered</small></span></a></li>
   <li><a class="navlink tool" href="#vocabulary" ${route.type==='lessico'?'aria-current="page"':''}>""")
r("""      $('#lxyes').onclick=()=>{ S.voc[w[0]]=true; tick(); save(); pos++; show(); };
      $('#lxno').onclick=()=>{ S.voc[w[0]]=false; ""","""      $('#lxyes').onclick=()=>{ S.voc[w[0]]=true; vAdd(vKeyLex(id,order[pos]),1); tick(); save(); pos++; show(); };
      $('#lxno').onclick=()=>{ S.voc[w[0]]=false; vAdd(vKeyLex(id,order[pos]),0); """)
r("""const k='w'+Date.now().toString(36); S.myvoc[k]={it,pt,ex:""","""const k='w'+Date.now().toString(36); vAdd('my:'+k,0); S.myvoc[k]={it,pt,ex:""")
r("""<p class="subtitle">Every wrong answer lands here and comes back after 1, 3, 7 and 15 days. Get it right four times in a row and it counts as mastered.</p></header>""","""<p class="subtitle">Every wrong answer lands here and comes back after 1, 3, 7 and 15 days. Get it right four times in a row and it counts as mastered.</p></header>
   ${vDue().length?`<section class="card examcta"><div><span class="lab">Also due today</span><h3>${vDue().length} ${vDue().length===1?'word':'words'} to review</h3><p class="note" style="margin:0">Spaced review of your vocabulary.</p></div><a class="btn primary" href="#words">Word review →</a></section>`:''}""")
r("""<section class="card examcta"><div><span class="lab">Your main goal · reading for exams</span>""","""<section class="card examcta"><div><span class="lab">Exam writing</span><h3>Writing exams</h3><p>Essays, e-mails, reviews, reports and proposals in the real Cambridge and IELTS formats, marked criterion by criterion like an examiner.</p></div><a class="btn" href="#writing">Write now →</a></section>
  <section class="card examcta"><div><span class="lab">Your main goal · reading for exams</span>""")
