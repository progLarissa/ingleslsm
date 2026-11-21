R = []
def r(old, new, n=1):
    R.append((old, new, n))

# ---------- basics ----------
r("const uName = u=>u.n?`Primi passi ${u.n}`:`Unità ${u.id}`;", "const uName = u=>u.n?`Warm-up ${u.n}`:`Unit ${u.id}`;")
r("const KEY='quaderno-italiano-v1';", "const KEY='english-notebook-v1';")
r("const BANDS = ['A1 → A2','A2 → B1','B1 → B2','B2 → C1'];", "const BANDS = ['A2 review','B1 → B2','B2 → C1'];")
# contractions-aware normalisation
r("""const norm = s=>String(s).toLowerCase().replace(/[’`´‘]/g,"'").replace(/\\s*'\\s*/g,"'").replace(/\\s+/g,' ').trim().replace(/[.!?,;:»«"]+$/,'').replace(/^[«"]+/,'');""",
  """const unc = s=>s.replace(/\\bwon't\\b/g,'will not').replace(/\\bcan't\\b/g,'cannot').replace(/\\bshan't\\b/g,'shall not').replace(/\\bain't\\b/g,'is not').replace(/n't\\b/g,' not').replace(/'m\\b/g,' am').replace(/'re\\b/g,' are').replace(/'ve\\b/g,' have').replace(/'ll\\b/g,' will').replace(/\\bcan not\\b/g,'cannot').replace(/\\b(i|you|he|she|it|we|they|that|there|what|who|where|here|how)\\s+(is|has)\\b/g,"$1's").replace(/\\b(i|you|he|she|it|we|they|there|who)\\s+(would|had)\\b/g,"$1'd");
const norm = s=>unc(String(s).toLowerCase().replace(/[’`´‘]/g,"'").replace(/\\s*'\\s*/g,"'").replace(/\\s+/g,' ').trim().replace(/[.!?,;:»«"“”]+$/,'').replace(/^[«"“]+/,''));""")
r("const C='[a-zàèéìòù]';", "const C='[a-z]';")

# ---------- nav ----------
r("""let h=`<a class="brand" href="#"><b>Quaderno d'Italiano</b><span>Dall'A1 al C1 · scrittura e lettura</span></a>${rhythmWidget()}`;""",
  """let h=`<a class="brand" href="#"><b>English Notebook</b><span>A2 review → C1 · films, books, exams</span></a>${rhythmWidget()}`;""")
r("""<h4><span>${bi===0?'A1 → A2 · Primi passi':b}</span></h4>""", """<h4><span>${bi===0?'A2 review · Warm-up':b}</span></h4>""")
r("""href="#unita-${u.id}" ${cur?'aria-current="page"':''}><span class="n${u.n?' sm':''}">""", """href="#unit-${u.id}" ${cur?'aria-current="page"':''}><span class="n${u.n?' sm':''}">""")
r("""<h4><span>Ogni giorno</span></h4><ul>
   <li><a class="navlink tool" href="#ripasso" ${route.type==='ripasso'?'aria-current="page"':''}><span class="n">✎</span><span class="t">Quaderno degli errori ${due?`<span class="badge">${due}</span>`:''}<br><small class="note">${Object.keys(S.err).length} da ripassare · ${S.mastered} imparati</small></span></a></li>
   <li><a class="navlink tool" href="#cultura" ${route.type==='cultura'?'aria-current="page"':''}><span class="n">❦</span><span class="t">Cultura italiana<br><small class="note">${Object.keys(S.cult).filter(k=>S.cult[k]&&S.cult[k].read).length}/${CULTURA.length} schede lette</small></span></a></li>
   <li><a class="navlink tool" href="#lessico" ${route.type==='lessico'?'aria-current="page"':''}><span class="n">Aa</span><span class="t">Lessico tematico<br><small class="note">${LESSICO.reduce((a,t)=>a+t.w.length,0)} parole · ${LESSICO.length} temi</small></span></a></li>
  </ul></div>
  <div class="navgroup"><h4><span>Ascolto e parlato</span></h4><ul>
   <li><a class="navlink tool" href="#leggere" ${route.type==='leggere'?'aria-current="page"':''}><span class="n">❝</span><span class="t">Leggere ad alta voce<br><small class="note">${TESTI.length} testi · scioglilingua</small></span></a></li>
   <li><a class="navlink tool" href="#ascolto" ${route.type==='ascolto'?'aria-current="page"':''}><span class="n">♪</span><span class="t">Ascolto<br><small class="note">dettato · dialoghi · numeri</small></span></a></li>
   <li><a class="navlink tool" href="#parlare" ${route.type==='parlare'?'aria-current="page"':''}><span class="n">☏</span><span class="t">Parlare<br><small class="note">conversazione IA · prova orale</small></span></a></li>
   <li><a class="navlink tool" href="#fuori" ${route.type==='fuori'?'aria-current="page"':''}><span class="n">✚</span><span class="t">Fuori dal quaderno<br><small class="note">${Object.keys(S.myvoc).length} parole mie · registro</small></span></a></li>
  </ul></div>
  <div class="navgroup"><h4><span>Verifiche</span></h4><ul>${TESTS.map(t=>{ const r=S.tests[t.id]; return `<li><a class="navlink tool" href="#verifica-${t.id}" ${route.type==='test'&&route.id===t.id?'aria-current="page"':''}><span class="n${t.lvl.length>2?' sm':''}">${r&&r.passed?'✓':t.lvl}</span><span class="t">${t.title} · ${t.range?'':'unità '}${tRange(t)}<br><small class="note">${r?'migliore: '+r.best+'/20':'non ancora svolta'}</small></span></a></li>`; }).join('')}</ul></div>`;
  h+=`<div class="navgroup"><h4><span>Strumenti</span></h4><ul>
   <li><a class="navlink tool" href="#falsi-amici" ${route.type==='falsi'?'aria-current="page"':''}><span class="n">≠</span><span class="t">Falsi amici<br><small class="note">${FALSI.length} trappole ES/PT</small></span></a></li>
   <li><a class="navlink tool" href="#verbi" ${route.type==='verbi'?'aria-current="page"':''}><span class="n">→</span><span class="t">Coniugatore<br><small class="note">${Object.keys(VERBI).length} verbi · 8 tempi</small></span></a></li>
   <li><a class="navlink tool" href="#frasi" ${route.type==='frasi'?'aria-current="page"':''}><span class="n">¶</span><span class="t">Laboratorio di frasi<br><small class="note">${TRAD.length} traduzioni · ${TRASF.length} trasformazioni</small></span></a></li>""",
"""<h4><span>Every day</span></h4><ul>
   <li><a class="navlink tool" href="#review" ${route.type==='ripasso'?'aria-current="page"':''}><span class="n">✎</span><span class="t">Mistakes notebook ${due?`<span class="badge">${due}</span>`:''}<br><small class="note">${Object.keys(S.err).length} to review · ${S.mastered} mastered</small></span></a></li>
   <li><a class="navlink tool" href="#vocabulary" ${route.type==='lessico'?'aria-current="page"':''}><span class="n">Aa</span><span class="t">Vocabulary by topic<br><small class="note">${LESSICO.reduce((a,t)=>a+t.w.length,0)} words · ${LESSICO.length} topics</small></span></a></li>
   <li><a class="navlink tool" href="#culture" ${route.type==='cultura'?'aria-current="page"':''}><span class="n">❦</span><span class="t">Culture and accents<br><small class="note">${Object.keys(S.cult).filter(k=>S.cult[k]&&S.cult[k].read).length}/${CULTURA.length} cards read</small></span></a></li>
  </ul></div>
  <div class="navgroup"><h4><span>Listening and speaking</span></h4><ul>
   <li><a class="navlink tool" href="#listening" ${route.type==='ascolto'?'aria-current="page"':''}><span class="n">♪</span><span class="t">Listening<br><small class="note">dictation · scenes · numbers</small></span></a></li>
   <li><a class="navlink tool" href="#read-aloud" ${route.type==='leggere'?'aria-current="page"':''}><span class="n">❝</span><span class="t">Read aloud<br><small class="note">${TESTI.length} texts · tongue twisters</small></span></a></li>
   <li><a class="navlink tool" href="#speaking" ${route.type==='parlare'?'aria-current="page"':''}><span class="n">☏</span><span class="t">Speaking<br><small class="note">AI conversation · speaking test</small></span></a></li>
   <li><a class="navlink tool" href="#beyond" ${route.type==='fuori'?'aria-current="page"':''}><span class="n">✚</span><span class="t">Films, books &amp; me<br><small class="note">${Object.keys(S.myvoc).length} my words · study log</small></span></a></li>
  </ul></div>
  <div class="navgroup"><h4><span>Tests</span></h4><ul>${TESTS.map(t=>{ const r=S.tests[t.id]; return `<li><a class="navlink tool" href="#test-${t.id}" ${route.type==='test'&&route.id===t.id?'aria-current="page"':''}><span class="n${t.lvl.length>2?' sm':''}">${r&&r.passed?'✓':t.lvl}</span><span class="t">${t.title} · ${t.range?'':'units '}${tRange(t)}<br><small class="note">${r?'best: '+r.best+'/20':'not taken yet'}</small></span></a></li>`; }).join('')}</ul></div>`;
  h+=`<div class="navgroup"><h4><span>Tools</span></h4><ul>
   <li><a class="navlink tool" href="#false-friends" ${route.type==='falsi'?'aria-current="page"':''}><span class="n">≠</span><span class="t">False friends<br><small class="note">${FALSI.length} PT/ES traps</small></span></a></li>
   <li><a class="navlink tool" href="#verbs" ${route.type==='verbi'?'aria-current="page"':''}><span class="n">→</span><span class="t">Irregular verbs<br><small class="note">${VKEYS.length} verbs · past &amp; participle</small></span></a></li>
   <li><a class="navlink tool" href="#sentences" ${route.type==='frasi'?'aria-current="page"':''}><span class="n">¶</span><span class="t">Sentence lab<br><small class="note">${TRAD.length} translations · ${TRASF.length} rewrites</small></span></a></li>""")

# ---------- routes ----------
r("""  if((m=h.match(/^unita-(\\d+)$/)) && UNITS.find(u=>u.id==m[1])) return {type:'unit',id:+m[1]};
  if(h==='falsi-amici') return {type:'falsi'};
  if(h==='verbi') return {type:'verbi'};
  if(h==='frasi') return {type:'frasi'};
  if(h==='ripasso') return {type:'ripasso'};
  if(h==='lessico') return {type:'lessico'};
  if(h==='cultura') return {type:'cultura'};
  if(h==='leggere') return {type:'leggere'};
  if((m=h.match(/^leggere-(\\d+)$/)) && TESTI[+m[1]]) return {type:'leggere',id:+m[1]};
  if(h==='ascolto') return {type:'ascolto'};
  if((m=h.match(/^ascolto-(\\d+)$/)) && ASCOLTI[+m[1]]) return {type:'ascolto',id:+m[1]};
  if(h==='parlare') return {type:'parlare'};
  if(h==='fuori') return {type:'fuori'};
  if((m=h.match(/^cultura-(\\d+)$/)) && CULTURA[+m[1]]) return {type:'cultura',id:+m[1]};
  if((m=h.match(/^lessico-(\\d+)$/)) && LESSICO[+m[1]]) return {type:'lessico',id:+m[1]};
  if((m=h.match(/^verifica-(\\d+)$/)) && TESTS.find(t=>t.id==m[1])) return {type:'test',id:+m[1]};""",
"""  if((m=h.match(/^unit-(\\d+)$/)) && UNITS.find(u=>u.id==m[1])) return {type:'unit',id:+m[1]};
  if(h==='false-friends') return {type:'falsi'};
  if(h==='verbs') return {type:'verbi'};
  if(h==='sentences') return {type:'frasi'};
  if(h==='review') return {type:'ripasso'};
  if(h==='vocabulary') return {type:'lessico'};
  if(h==='culture') return {type:'cultura'};
  if(h==='read-aloud') return {type:'leggere'};
  if((m=h.match(/^read-aloud-(\\d+)$/)) && TESTI[+m[1]]) return {type:'leggere',id:+m[1]};
  if(h==='listening') return {type:'ascolto'};
  if((m=h.match(/^listening-(\\d+)$/)) && ASCOLTI[+m[1]]) return {type:'ascolto',id:+m[1]};
  if(h==='speaking') return {type:'parlare'};
  if(h==='beyond') return {type:'fuori'};
  if((m=h.match(/^culture-(\\d+)$/)) && CULTURA[+m[1]]) return {type:'cultura',id:+m[1]};
  if((m=h.match(/^vocabulary-(\\d+)$/)) && LESSICO[+m[1]]) return {type:'lessico',id:+m[1]};
  if((m=h.match(/^test-(\\d+)$/)) && TESTS.find(t=>t.id==m[1])) return {type:'test',id:+m[1]};""")

# generic hash renames (applied after explicit ones)
HASH = [('#unita-','#unit-'),('#verifica-','#test-'),('#lessico-','#vocabulary-'),('#cultura-','#culture-'),('#leggere-','#read-aloud-'),('#ascolto-','#listening-'),
        ('"#ripasso"','"#review"'),('"#lessico"','"#vocabulary"'),('"#cultura"','"#culture"'),('"#leggere"','"#read-aloud"'),('"#ascolto"','"#listening"'),('"#parlare"','"#speaking"'),('"#fuori"','"#beyond"'),('"#verbi"','"#verbs"'),('"#frasi"','"#sentences"'),('"#falsi-amici"','"#false-friends"')]
