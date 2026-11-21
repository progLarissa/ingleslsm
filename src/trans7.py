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


r("'asc','exam','examGen']","'asc','exam','examGen','plan','books']",2)
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
