R4=[]
def r(old,new,n=1): R4.append((old,new,n))

# ---- mistakes notebook ----
r("const BOXLAB=['tra 1 giorno','tra 3 giorni','tra 7 giorni','tra 15 giorni'];","const BOXLAB=['in 1 day','in 3 days','in 7 days','in 15 days'];")
r("case 'verb': return `${d.v} · ${TEMPI[d.t]} · ${PERSONE[d.p]}`;","case 'verb': return `Irregular verb: ${d.v}`;")
r("case 'falso': return `Falso amico: ${d.w}`;","case 'falso': return `False friend: ${d.w}`;")
r("case 'dict': return `Dettato: ${d.s}`;","case 'dict': return `Dictation: ${d.s}`;")
r("case 'myvoc': { const w=S.myvoc[d.k]; return w?`Le mie parole: ${w.it}`:'Le mie parole'; }","case 'myvoc': { const w=S.myvoc[d.k]; return w?`My words: ${w.it}`:'My words'; }")
r("case 'vocab': { const w=LESSICO[d.t]&&LESSICO[d.t].w[d.i]; return w?`Lessico: ${w[0]}`:'Lessico'; }","case 'vocab': { const w=LESSICO[d.t]&&LESSICO[d.t].w[d.i]; return w?`Vocabulary: ${w[0]}`:'Vocabulary'; }")
r("""<div class="eyebrow">Ogni giorno · ripasso</div><h1 class="title">Quaderno degli errori</h1>
   <p class="subtitle">Ogni risposta sbagliata finisce qui e torna a trovarti dopo 1, 3, 7 e 15 giorni. Se la indovini quattro volte di fila, la consideri imparata.</p></header>""","""<div class="eyebrow">Every day · review</div><h1 class="title">Mistakes notebook</h1>
   <p class="subtitle">Every wrong answer lands here and comes back after 1, 3, 7 and 15 days. Get it right four times in a row and it counts as mastered.</p></header>""")
r("""<span class="lab">Da ripassare oggi</span><b class="big">${due.length}</b><div class="btnrow"><button class="btn primary" id="rvstart" ${due.length?'':'disabled'}>Inizia il ripasso</button>""","""<span class="lab">To review today</span><b class="big">${due.length}</b><div class="btnrow"><button class="btn primary" id="rvstart" ${due.length?'':'disabled'}>Start reviewing</button>""")
r("""<span class="lab">In attesa</span><b class="big">${all.length-due.length}</b><button class="btn" id="rvall" ${all.length?'':'disabled'}>Ripassa tutto in anticipo</button>""","""<span class="lab">Waiting</span><b class="big">${all.length-due.length}</b><button class="btn" id="rvall" ${all.length?'':'disabled'}>Review everything now</button>""")
r("""<span class="lab">Imparati</span><b class="big">${S.mastered}</b><span class="note">errori trasformati in certezze</span>""","""<span class="lab">Mastered</span><b class="big">${S.mastered}</b><span class="note">mistakes you no longer make</span>""")
r("""<span class="lab">Scatola ${i+1}</span><b>${n}</b><span class="note">torna ${BOXLAB[i]}</span>""","""<span class="lab">Box ${i+1}</span><b>${n}</b><span class="note">back ${BOXLAB[i]}</span>""")
r("""<span class="lab">Elenco</span><h3>Tutti gli errori salvati</h3></div><span class="note">${all.length} in totale</span>""","""<span class="lab">List</span><h3>All saved mistakes</h3></div><span class="note">${all.length} in total</span>""")
r("""${esc(e.src)} · scatola ${e.b+1} · ${e.due<=dayKey()?'<b class="due-t">oggi</b>':'il '+new Date(e.due+'T12:00:00').toLocaleDateString('it-IT',{day:'numeric',month:'short'})}${e.w>1?` · sbagliato ${e.w} volte`:''}</div></div><button class="btn ghost" data-del="${esc(k)}" title="Rimuovi">Rimuovi</button>""","""${esc(e.src)} · box ${e.b+1} · ${e.due<=dayKey()?'<b class="due-t">today</b>':new Date(e.due+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'short'})}${e.w>1?` · wrong ${e.w} times`:''}</div></div><button class="btn ghost" data-del="${esc(k)}" title="Remove">Remove</button>""")
r("""`<p>Ancora nessun errore salvato. Quando sbagli un esercizio, una frase, un verbo o una parola, lo ritrovi qui.</p>`""","""`<p>No mistakes saved yet. When you get an exercise, a sentence, a verb or a word wrong, you will find it here.</p>`""")
r("""<div class="pen" style="font-size:40px">Finito!</div><p class="lead" style="margin:10px auto">${rvOk} giuste su ${rvQueue.length}. Le risposte giuste salgono di scatola; quelle sbagliate tornano domani.</p><div class="btnrow" style="justify-content:center"><button class="btn primary" id="rvback">Torna al quaderno</button>""","""<div class="pen" style="font-size:40px">Done!</div><p class="lead" style="margin:10px auto">${rvOk} right out of ${rvQueue.length}. Right answers move up a box; wrong ones come back tomorrow.</p><div class="btnrow" style="justify-content:center"><button class="btn primary" id="rvback">Back to the notebook</button>""")
r("""<span class="lab">${esc(e.src)} · scatola ${e.b+1}</span>""","""<span class="lab">${esc(e.src)} · box ${e.b+1}</span>""")
r("""<button class="btn primary" id="rvcheck">Verifica</button><button class="btn" id="rvnext" hidden>Avanti →</button>""","""<button class="btn primary" id="rvcheck">Check</button><button class="btn" id="rvnext" hidden>Next →</button>""")
r("""(ok?'<span class="mark ok">Giusto! ✓</span>':'<span class="mark no">Non ancora…</span>')""","""(ok?'<span class="mark ok">Right! ✓</span>':'<span class="mark no">Not yet…</span>')""")
r("""<div class="fixline">Correzione: <input class="blank" style=""","""<div class="fixline">Correction: <input class="blank" style=""")
r("""q=`Che cosa significa «${f[0]}»?`; c=o.indexOf(f[1]); ex=`Attenzione: ${f[2]}. Es.: ${f[3]}`;""","""q=`What does «${f[0]}» mean?`; c=o.indexOf(f[1]); ex=`Careful: ${f[2]}. E.g. ${f[3]}`;""")
r("""q=`Come si dice «${w[1]}»?`; c=o.indexOf(w[0]); ex=w[2]; }""","""q=`How do you say «${w[1]}» in English?`; c=o.indexOf(w[0]); ex=w[2]; }""")
r("""    const forms=coniuga(d.v,d.t), ans=forms[d.p];
    box.innerHTML=`<div class="drill" style="padding:6px 0"><div class="verb" style="font-size:40px">${d.v}</div><div class="note">${esc(VERBI[d.v].pt||'')}</div><div class="meta"><b>${TEMPI[d.t]}</b></div><div class="pers">${PERSONE[d.p]}</div><input id="rvin" autocomplete="off" autocapitalize="off" spellcheck="false"></div>`;
    const inp=$('#rvin'); inp.focus({preventScroll:true});
    const go=()=>{ if(!inp.value.trim()) return; const r=judge(inp.value,[ans]); finish(r!=='no',`<p class="corrected">${esc(ans)}</p>`); };
    enterTo(inp,go); chk.onclick=go;""","""    const V=VERBI[d.v]||{p:'',pp:'',pt:''};
    box.innerHTML=`<div class="drill" style="padding:6px 0"><div class="verb" style="font-size:40px">to ${d.v}</div><div class="note">${esc(V.pt||'')}</div><div class="vpair"><label><span class="lab">past simple</span><input id="rvin" autocomplete="off" autocapitalize="off" spellcheck="false"></label><label><span class="lab">past participle</span><input id="rvin2" autocomplete="off" autocapitalize="off" spellcheck="false"></label></div></div>`;
    const inp=$('#rvin'), inp2=$('#rvin2'); inp.focus({preventScroll:true});
    inp.addEventListener('keydown',ev=>{ if(ev.key==='Enter'){ ev.preventDefault(); inp2.focus(); } });
    const go=()=>{ if(!inp.value.trim()) return; const ok=judge(inp.value,[V.p])!=='no'&&judge(inp2.value,[V.pp])!=='no'; finish(ok,`<p class="corrected">${esc(d.v)} · ${esc(V.p)} · ${esc(V.pp)}</p>`); };
    enterTo(inp2,go); chk.onclick=go;""")
r("""<span class="note">Soluzioni:</span><ul>""","""<span class="note">Answers:</span><ul>""")

# ---- tests ----
r("""<div class="eyebrow">Verifica · ${T.range?"Primi passi ":"unità "}${tRange(T)} · livello ${T.lvl}</div><h1 class="title">${T.title}</h1>
   <p class="subtitle">Una prova nello stile degli esami CILS e CELI: lettura, testo a buchi e grammatica. 30 minuti, nessun suggerimento, 20 punti. Si supera con 12; con 17 è «con distinzione».</p></header>""","""<div class="eyebrow">Test · ${T.range?"Warm-up ":"units "}${tRange(T)} · level ${T.lvl}</div><h1 class="title">${T.title}</h1>
   <p class="subtitle">A test in the style of the Cambridge Reading and Use of English paper: reading, open cloze and grammar. 30 minutes, no hints, 20 points. Pass with 12; 17 or more is a pass «with distinction».</p></header>""")
r("""<span class="lab">Prima di cominciare</span><h3>Come funziona</h3>""","""<span class="lab">Before you start</span><h3>How it works</h3>""")
r("""<ul class="dots"><li><b>Parte A · Lettura</b>: un testo e 5 domande (5 punti).</li><li><b>Parte B · Testo a buchi</b>: 8 spazi da completare (8 punti). Gli accenti contano.</li><li><b>Parte C · Grammatica</b>: 7 domande a scelta multipla (7 punti).</li></ul>
   <p>Il tempo parte quando premi «Comincia». Allo scadere la verifica si consegna da sola. Non cambiare pagina durante la prova, altrimenti dovrai ricominciare. Gli errori finiranno nel quaderno degli errori.</p>""","""<ul class="dots"><li><b>Part A · Reading</b>: a text and 5 questions (5 points).</li><li><b>Part B · Open cloze</b>: 8 gaps, one word each (8 points). Spelling counts.</li><li><b>Part C · Grammar and vocabulary</b>: 7 multiple-choice questions (7 points).</li></ul>
   <p>The clock starts when you press «Start». When time is up, the test hands itself in. Do not leave the page during the test or you will have to start again. Your mistakes go to the mistakes notebook.</p>""")
r("""`<p class="note">Ultimo tentativo: ${r.last}/20 · migliore: ${r.best}/20${r.passed?' · superata il '+new Date(r.pdate).toLocaleDateString('it-IT'):''}</p>`""","""`<p class="note">Last attempt: ${r.last}/20 · best: ${r.best}/20${r.passed?' · passed on '+new Date(r.pdate).toLocaleDateString('en-GB'):''}</p>`""")
r("""<button class="btn primary" id="tstart">Comincia la verifica</button>${r&&r.passed?'<button class="btn" id="tcert">Vedi l\\'attestato</button>':''}""","""<button class="btn primary" id="tstart">Start the test</button>${r&&r.passed?'<button class="btn" id="tcert">See your certificate</button>':''}""")
r('aria-label="spazio ${n}">','aria-label="gap ${n}">')
r("""<div class="timer" id="timer"><span>Tempo rimasto <b id="tleft">30:00</b></span><button class="btn primary" id="tsend">Consegna</button></div>""","""<div class="timer" id="timer"><span>Time left <b id="tleft">30:00</b></span><button class="btn primary" id="tsend">Hand in</button></div>""")
r("""<span class="lab">Parte A · 5 punti</span><h3>Lettura: ${esc(R.title)}</h3>""","""<span class="lab">Part A · 5 points</span><h3>Reading: ${esc(R.title)}</h3>""")
r("""<span class="lab">Parte B · 8 punti</span><h3>Testo a buchi: ${esc(T.cloze.title)}</h3>""","""<span class="lab">Part B · 8 points</span><h3>Open cloze: ${esc(T.cloze.title)}</h3>""")
r("""<span class="lab">Parte C · 7 punti</span><h3>Grammatica</h3>""","""<span class="lab">Part C · 7 points</span><h3>Grammar and vocabulary</h3>""")
r("""<button class="btn primary" id="tsend2">Consegna la verifica</button>""","""<button class="btn primary" id="tsend2">Hand in the test</button>""")
r("src+' · lettura'","src+' · reading'")
r("src+' · testo a buchi'","src+' · open cloze'")
r("src+' · grammatica'","src+' · grammar'")
r("lab=sc>=17?'Superata con distinzione':sc>=12?'Superata':'Non ancora superata';","lab=sc>=17?'Passed with distinction':sc>=12?'Passed':'Not passed yet';")
r("""<span class="lab">Risultato</span>""","""<span class="lab">Result</span>""")
r("${R.passed?'Ottimo lavoro: gli errori sono nel quaderno, ripassali nei prossimi giorni.':'Servono 12 punti. Ripassa gli errori nel quaderno e riprova tra qualche giorno.'}","${R.passed?'Great work: your mistakes are in the notebook, review them over the next few days.':'You need 12 points. Review your mistakes in the notebook and try again in a few days.'}")
r("${sec('Lettura',R.read,5)}${sec('Testo a buchi',R.cloze,8)}${sec('Grammatica',R.mc,7)}","${sec('Reading',R.read,5)}${sec('Open cloze',R.cloze,8)}${sec('Grammar',R.mc,7)}")
r("""<a class="btn" href="#ripasso">Vai al quaderno degli errori</a><button class="btn" id="tagain">Rifai la verifica</button>""","""<a class="btn" href="#review">Go to the mistakes notebook</a><button class="btn" id="tagain">Take the test again</button>""")
r("""<div class="card-h"><h3>Correzione</h3></div>""","""<div class="card-h"><h3>Answers</h3></div>""")
r("${R.read[i]?'✓':'✗ risposta giusta:'}","${R.read[i]?'✓':'✗ right answer:'}")
r("""<div class="q">Spazio ${i+1}: <i>${esc(R.clozeVals[i]||'—')}</i></div><div class="${R.cloze[i]?'corrected':'expl'}">${R.cloze[i]?'✓':'✗ soluzione:'}""","""<div class="q">Gap ${i+1}: <i>${esc(R.clozeVals[i]||'—')}</i></div><div class="${R.cloze[i]?'corrected':'expl'}">${R.cloze[i]?'✓':'✗ answer:'}""")
r("${R.mc[i]?'✓':'✗ risposta giusta:'}","${R.mc[i]?'✓':'✗ right answer:'}")
r("""   <div class="eyebrow">Quaderno d'Italiano</div>
   <div class="cert-t">Attestato</div>
   <p>Si attesta che</p>
   <input class="cert-name" id="certname" value="${esc(S.name||'')}" placeholder="scrivi qui il tuo nome" aria-label="nome sull'attestato">
   <p>ha superato la <b>${T.title}</b> (${T.range?"Primi passi ":"unità "}${tRange(T)}) di livello <b>${T.lvl}</b><br>con il punteggio di <b>${r.best}/20</b>${r.dist||r.best>=17?', <i>con distinzione</i>':''}.</p>
   <div class="cert-foot"><span>${new Date(r.pdate||Date.now()).toLocaleDateString('it-IT',{day:'numeric',month:'long',year:'numeric'})}</span>""","""   <div class="eyebrow">English Notebook</div>
   <div class="cert-t">Certificate</div>
   <p>This is to certify that</p>
   <input class="cert-name" id="certname" value="${esc(S.name||'')}" placeholder="write your name here" aria-label="name on the certificate">
   <p>has passed <b>${T.title}</b> (${T.range?"Warm-up ":"units "}${tRange(T)}) at level <b>${T.lvl}</b><br>with a score of <b>${r.best}/20</b>${r.dist||r.best>=17?', <i>with distinction</i>':''}.</p>
   <div class="cert-foot"><span>${new Date(r.pdate||Date.now()).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}</span>""")

# ---- vocabulary ----
r("""<div class="eyebrow">Ogni giorno · lessico</div><h1 class="title">Lessico tematico</h1>
     <p class="subtitle">Il vocabolario che separa il B2 dal C1: ${LESSICO.reduce((a,t)=>a+t.w.length,0)} parole ed espressioni in ${LESSICO.length} temi. Studia la lista, ripassa con le carte, verifica con il quiz.</p></header>""","""<div class="eyebrow">Every day · vocabulary</div><h1 class="title">Vocabulary by topic</h1>
     <p class="subtitle">The words that block you in films and novels: ${LESSICO.reduce((a,t)=>a+t.w.length,0)} words and expressions in ${LESSICO.length} topics. Study the list, review with the cards, test yourself with the quiz.</p></header>""")
r("""<span class="note">${k}/${t.w.length} imparate</span></a>`; }).join('')}</div>`;""","""<span class="note">${k}/${t.w.length} learnt</span></a>`; }).join('')}</div>`;""")
r("""<div class="eyebrow"><a href="#lessico">Lessico tematico</a> · ${T.lvl}</div>""","""<div class="eyebrow"><a href="#vocabulary">Vocabulary by topic</a> · ${T.lvl}</div>""")
r("""<span>${known}/${T.w.length} imparate</span></div></header>""","""<span>${known}/${T.w.length} learnt</span></div></header>""")
r("${[['lista','Lista'],['carte','Carte'],['quiz','Quiz']]","${[['lista','List'],['carte','Cards'],['quiz','Quiz']]")
r("""<td><b>${esc(w[0])}</b></td><td class="pt">${esc(w[1])}</td><td><i>${esc(w[2])}</i></td><td><button class="btn ghost ${S.voc[w[0]]?'kn':''}" data-k="${i}">${S.voc[w[0]]?'✓ la so':'la so?'}</button></td>""","""<td>${canSpeak?`<button class="btn ghost play" type="button" data-say="${i}" aria-label="Listen">▶</button>`:''}<b>${esc(w[0])}</b></td><td class="pt">${esc(w[1])}</td><td><i>${esc(w[2])}</i></td><td><button class="btn ghost ${S.voc[w[0]]?'kn':''}" data-k="${i}">${S.voc[w[0]]?'✓ I know it':'know it?'}</button></td>""")
r("""    lb.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{ const w=T.w[+b.dataset.k]; S.voc[w[0]]=!S.voc[w[0]]; save(); renderLessico(id); });""","""    lb.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{ const w=T.w[+b.dataset.k]; S.voc[w[0]]=!S.voc[w[0]]; save(); renderLessico(id); });
    lb.querySelectorAll('[data-say]').forEach(b=>b.onclick=()=>{ const w=T.w[+b.dataset.say]; speakSeq([{text:w[0]},{text:w[2]}]); });""")
r("""<div class="pen" style="font-size:36px">Fatto!</div><p>Hai visto tutte le carte del tema. Quelle segnate «da ripassare» sono nel quaderno degli errori.</p><button class="btn primary" id="lxagain">Ricomincia</button>""","""<div class="pen" style="font-size:36px">Done!</div><p>You have seen every card in this topic. The ones marked «review» are in the mistakes notebook.</p><button class="btn primary" id="lxagain">Start again</button>""")
r("""<p class="note">${pos+1} / ${order.length} · tocca la carta per girarla</p>""","""<p class="note">${pos+1} / ${order.length} · tap the card to flip it</p>""")
r("""<small>${S.voc[w[0]]?'già imparata':'come si dice in portoghese?'}</small>""","""<small>${S.voc[w[0]]?'already learnt':'what is it in Portuguese?'}</small>""")
r("""<button class="btn" id="lxno">Da ripassare</button><button class="btn primary" id="lxyes">La so ✓</button>""","""<button class="btn" id="lxno">Review</button><button class="btn primary" id="lxyes">I know it ✓</button>""")
r("$('#lxcard').onclick=()=>$('#lxcard').classList.toggle('on');","$('#lxcard').onclick=()=>{ $('#lxcard').classList.toggle('on'); };\n      if(canSpeak) speakSeq([{text:w[0]}]);")
r("'Lessico · '+T.t","'Vocabulary · '+T.t",2)
r("const q=[`Come si dice «${w[1]}»?`,o,o.indexOf(w[0]),w[2]];","const q=[`How do you say «${w[1]}» in English?`,o,o.indexOf(w[0]),w[2]];")
r("const q=[`Che cosa significa «${w[0]}»?`,o,o.indexOf(w[1]),w[2]];","const q=[`What does «${w[0]}» mean?`,o,o.indexOf(w[1]),w[2]];")
r("""<span class="lab">10 domande</span><h3>Quiz: ${esc(T.t)}</h3></div><span class="score" id="lxscore"></span></div><ol class="items" id="lxq"></ol><div class="btnrow"><button class="btn primary" id="lxnew">Nuovo quiz</button>""","""<span class="lab">10 questions</span><h3>Quiz: ${esc(T.t)}</h3></div><span class="score" id="lxscore"></span></div><ol class="items" id="lxq"></ol><div class="btnrow"><button class="btn primary" id="lxnew">New quiz</button>""")

# ---- sync ----
r("""{local:'○ Progressi salvati solo su questo dispositivo',sync:'◌ Sincronizzazione…',ok:'● Progressi sincronizzati sul tuo account',err:'○ Sincronizzazione non riuscita: riprovo al prossimo salvataggio',full:'○ Spazio esaurito: i progressi restano su questo dispositivo'}""","""{local:'○ Progress saved on this device only',sync:'◌ Syncing…',ok:'● Progress synced to your account',err:'○ Sync failed: trying again at the next save',full:'○ Storage full: progress stays on this device'}""")
r("dbRefs={core:col.doc('quaderno'),texts:col.doc('quaderno-testi')};","dbRefs={core:col.doc('english'),texts:col.doc('english-texts')};")

# ---- speech ----
r("""function speakBtnHTML(id){ return canSpeak?`<button class="btn speak" id="${id}" type="button" aria-pressed="false">▶ Ascolta</button>`:''; }""","""function speakBtnHTML(id){ return canSpeak?`<button class="btn speak" id="${id}" type="button" aria-pressed="false">▶ Listen</button>`:''; }""")
r("""function itVoice(){ try{ const vs=speechSynthesis.getVoices(); return vs.find(v=>/^it[-_]IT/i.test(v.lang))||vs.find(v=>/^it/i.test(v.lang))||null; }catch(e){ return null; } }""","""const accLang=()=>S.accent==='GB'?'en-GB':'en-US';
function itVoice(){ try{ const vs=speechSynthesis.getVoices(); const re=S.accent==='GB'?/^en[-_]GB/i:/^en[-_]US/i; const good=v=>/natural|neural|premium|enhanced|google|samantha|daniel|serena|ava|zoe|aria|jenny|libby|sonia|ryan/i.test(v.name); const loc=vs.filter(v=>re.test(v.lang)); return loc.find(good)||loc[0]||vs.find(v=>/^en/i.test(v.lang))||null; }catch(e){ return null; } }""")
r("b.textContent=b.dataset.label||'▶ Ascolta';","b.textContent=b.dataset.label||'▶ Listen';")
r("u.lang='it-IT'; if(v) u.voice=v; u.rate=rate||S.rate||0.9;","u.lang=accLang(); if(v) u.voice=v; u.rate=rate||S.rate||0.95;")
r("if(b){ b.textContent='■ Ferma'; b.setAttribute('aria-pressed','true'); } }\n  }catch(e){ stopSpeak(); }","if(b){ b.textContent='■ Stop'; b.setAttribute('aria-pressed','true'); } }\n  }catch(e){ stopSpeak(); }")
r("u.lang='it-IT'; if(v) u.voice=v; u.rate=opts.rate||S.rate||0.9;","u.lang=accLang(); if(v) u.voice=v; u.rate=opts.rate||S.rate||0.95;")
r("b.textContent='■ Ferma'; b.setAttribute('aria-pressed','true'); } }\n    return true;","b.textContent='■ Stop'; b.setAttribute('aria-pressed','true'); } }\n    return true;")

# ---- culture ----
r("""return `<h2 class="sec">Cultura italiana</h2>
   <p>Per capire una lingua bisogna conoscere chi la parla. ${CULTURA.length} schede brevi, in italiano semplice con la traduzione in portoghese, curiosità e un piccolo quiz.</p>""","""return `<h2 class="sec">Culture and accents</h2>
   <p>Films are easier when you know who is talking and how. ${CULTURA.length} short cards on accents, British and American habits and the cultural references behind the jokes, in clear English with a Portuguese translation and a quiz.</p>""")
r("${read(i)?'<em>✓ letta</em>':''}","${read(i)?'<em>✓ read</em>':''}")
r("""`<div class="btnrow" style="margin:12px 0 30px"><a class="btn" href="#cultura-${next}">Leggi la prossima: ${esc(CULTURA[next].t)} →</a></div>`:'<p class="note" style="margin-bottom:30px">Hai letto tutte le schede. Bravissima!</p>'""","""`<div class="btnrow" style="margin:12px 0 30px"><a class="btn" href="#culture-${next}">Read the next one: ${esc(CULTURA[next].t)} →</a></div>`:'<p class="note" style="margin-bottom:30px">You have read every card. Brilliant!</p>'""")
r("""<div class="eyebrow">Ogni giorno · cultura</div><h1 class="title">Cultura italiana</h1>
     <p class="subtitle">Geografia, storia, cibo, arte, musica, cinema e le abitudini di tutti i giorni. Ogni scheda è scritta in italiano semplice: leggi prima da sola, poi controlla la traduzione.</p></header>""","""<div class="eyebrow">Every day · culture</div><h1 class="title">Culture and accents</h1>
     <p class="subtitle">Accents, British and American everyday life, politeness and the references films take for granted. Read each card on your own first, then check the translation.</p></header>""")
r("${S.cult[i]&&S.cult[i].read?' · ✓ letta':''}","${S.cult[i]&&S.cult[i].read?' · ✓ read':''}")
r("""<div class="eyebrow"><a href="#cultura">Cultura italiana</a> · ${esc(C.tag)}</div>""","""<div class="eyebrow"><a href="#culture">Culture and accents</a> · ${esc(C.tag)}</div>""")
r("${cultTrans?'Nascondi la traduzione':'Mostra tutta la traduzione'}","${cultTrans?'Hide the translation':'Show the whole translation'}")
r("${cultTrans?'nascondi':'traduzione'}","${cultTrans?'hide':'translation'}")
r("""<p class="note">Parole sottolineate con i puntini: passa il mouse o toccale per la traduzione.</p>
   <section class="card sapevi"><div class="card-h"><h3><span class="pen">Lo sapevi?</span></h3>""","""<p class="note">Words with a dotted underline: hover or tap them for the meaning.</p>
   <section class="card sapevi"><div class="card-h"><h3><span class="pen">Did you know?</span></h3>""")
r("""<span class="lab">Parole chiave</span><h3>Il lessico della scheda</h3>""","""<span class="lab">Key words</span><h3>Vocabulary from the card</h3>""")
r("""<span class="lab">Quiz</span><h3>Hai capito?</h3>""","""<span class="lab">Quiz</span><h3>Did you get it?</h3>""")
r("""<button class="btn" id="creset">Rifai il quiz</button><button class="btn ${st.read?'':'primary'}" id="cread">${st.read?'✓ Scheda letta':'Segna come letta'}</button>""","""<button class="btn" id="creset">Retake the quiz</button><button class="btn ${st.read?'':'primary'}" id="cread">${st.read?'✓ Card read':'Mark as read'}</button>""")
r("b.textContent=p.hidden?'traduzione':'nascondi';","b.textContent=p.hidden?'translation':'hide';")
r("const b=$('#cread'); if(b){ b.textContent='✓ Scheda letta';","const b=$('#cread'); if(b){ b.textContent='✓ Card read';")
r("'Cultura · '+C.t","'Culture · '+C.t")
r("bindSpeak('cspeak',()=>C.p.map(p=>p[0].replace(/\\[\\[([^|\\]]+)\\|[^\\]]+\\]\\]/g,'$1')).join(' '));","bindSpeak('cspeak',()=>C.p.map(p=>p[0].replace(/\\[\\[([^|\\]]+)\\|[^\\]]+\\]\\]/g,'$1').replace(/<[^>]+>/g,'')).join(' '));")
