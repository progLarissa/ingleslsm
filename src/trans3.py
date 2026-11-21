R3=[]
def r(old,new,n=1): R3.append((old,new,n))

# ---- unit page ----
r("const TABS=[['lezione','Lezione'],['lettura','Lettura'],['esercizi','Esercizi'],['scrittura','Scrittura'],['parla','Parla e ascolta']];","const TABS=[['lezione','Lesson'],['lettura','Reading'],['esercizi','Exercises'],['scrittura','Writing'],['parla','Listen & speak']];")
r("${u.n?'Primi passi · '+u.n:'Unità '+String(u.id).padStart(2,'0')} · ${u.lvl}","${u.n?'Warm-up · '+u.n:'Unit '+String(u.id).padStart(2,'0')} · ${u.lvl}")
r("<span>${p}% completato</span></div></header>","<span>${p}% complete</span></div></header>")
r("""<span class="pen">Fine del blocco!</span> Hai finito le unità ${tRange(t)}? Mettiti alla prova con la <a href="#verifica-${t.id}">${t.title}</a> (livello ${t.lvl}, 30 minuti).""","""<span class="pen">End of the block!</span> Finished units ${tRange(t)}? Try the <a href="#test-${t.id}">${t.title}</a> (level ${t.lvl}, 30 minutes).""")
r("""'<a class="btn ghost" href="#verbi">Coniugatore →</a>'""","""'<a class="btn ghost" href="#verbs">Irregular verbs →</a>'""")
r("tr.lastElementChild.textContent=p+'% completato';","tr.lastElementChild.textContent=p+'% complete';")
r("${d?'✓ Lezione studiata':'Segna come studiata'}","${d?'✓ Lesson studied':'Mark as studied'}")
r('<button class="btn" id="lnext">Vai alla lettura →</button>','<button class="btn" id="lnext">Go to the reading →</button>')
r('<p class="note">Parole sottolineate con i puntini: passa il mouse o toccale per vedere la traduzione.</p>','<p class="note">Words with a dotted underline: hover or tap them to see the meaning.</p>')
r('<span class="lab">Comprensione</span><h3>Domande sul testo</h3>','<span class="lab">Reading comprehension</span><h3>Questions on the text</h3>')
r('<button class="btn" id="rreset">Rifai</button>','<button class="btn" id="rreset">Try again</button>')
r(""",uName(u)+' · lettura']);""",""",uName(u)+' · reading']);""")
r("""'<span class="mark ok">giusto!</span>':'<span class="mark no">no…</span>'""","""'<span class="mark ok">right!</span>':'<span class="mark no">not quite…</span>'""")
r("const TYPE_LAB={fill:'Completa',mc:'Scelta multipla',fix:'Correggi',order:'Riordina'};","const TYPE_LAB={fill:'Fill in',mc:'Multiple choice',fix:'Correct it',order:'Word order'};")
r("""<p class="note" style="margin-bottom:18px">Scrivi e premi <b>Invio</b> per andare avanti. «Correggi» controlla tutta la serie; gli accenti dimenticati diventano gialli.</p>""","""<p class="note" style="margin-bottom:18px">Type and press <b>Enter</b> to move on. «Check» marks the whole set. Contractions count as the full form: <i>doesn't</i> = <i>does not</i>.</p>""")
r("""<span class="lab">Esercizi extra</span><h3>Altri esercizi su questa unità</h3></div></div>
   <p>Genera 6 frasi nuove su <i>${esc(u.title.toLowerCase())}</i>, pensate per le trappole di chi parla spagnolo e portoghese. Puoi ripetere tutte le volte che vuoi.</p>
   <div class="btnrow"><button class="btn red" id="genbtn">Genera 6 esercizi nuovi</button>""","""<span class="lab">Extra practice</span><h3>More exercises on this unit</h3></div></div>
   <p>Generate 6 new sentences on <i>${esc(u.title)}</i>, built around the traps of Portuguese and Spanish speakers. Repeat as often as you like.</p>
   <div class="btnrow"><button class="btn red" id="genbtn">Generate 6 new exercises</button>""")
r("uName(u)+' · serie '+String.fromCharCode(65+i)","uName(u)+' · set '+String.fromCharCode(65+i)")
r("buildSet(inner,{t:'fill',title:'Generati · serie '+(k+1),items:set},'IA',null,null,uName(u)+' · esercizi generati');","buildSet(inner,{t:'fill',title:'Generated · set '+(k+1),items:set},'AI',null,null,uName(u)+' · generated exercises');")
r("""<button class="btn primary" data-a="check">Correggi</button><button class="btn" data-a="show">Mostra le soluzioni</button><button class="btn" data-a="reset">Rifai</button></div>':'<div class="btnrow"><button class="btn" data-a="reset">Rifai</button></div>'""","""<button class="btn primary" data-a="check">Check</button><button class="btn" data-a="show">Show answers</button><button class="btn" data-a="reset">Try again</button></div>':'<div class="btnrow"><button class="btn" data-a="reset">Try again</button></div>'""")
r('aria-label="lacuna">','aria-label="gap">')
r("""<div class="fixline">Correzione: <input class="blank" data-b="0" style="width:${w}ch" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="correzione">""","""<div class="fixline">Correction: <input class="blank" data-b="0" style="width:${w}ch" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="correction">""")
r("if(r==='acc') notes.push('accento: '+ans[b][0]);","if(r==='acc') notes.push('spelling: '+ans[b][0]);")
r("notes.every(n=>n.startsWith('accento'))","notes.every(n=>n.startsWith('spelling'))")

# ---- AI ----
r("""const ERR={not_granted:'Non hai autorizzato Claude su questa pagina.',sampling_disabled:'Claude non è disponibile per questo account.',rate_limited:'Troppe richieste di seguito. Aspetta qualche minuto e riprova.',session_expired:'La sessione è scaduta: accedi di nuovo a Claude.',refused:'La richiesta è stata rifiutata. Prova a riformulare il testo.',invalid_json:'La risposta è arrivata in un formato inatteso. Riprova.'};
const errMsg=e=>ERR[e&&e.code]||'Non è stato possibile completare la richiesta. Riprova tra poco.';""","""const ERR={not_granted:'Claude is not allowed on this page yet. Allow it in the page permissions and try again.',sampling_disabled:'Claude is not available for this account.',rate_limited:'Too many requests in a row. Wait a few minutes and try again.',session_expired:'Your session has expired: sign in to Claude again.',refused:'The request was refused. Try rewording the text.',invalid_json:'The answer came back in an unexpected format. Try again.'};
const errMsg=e=>ERR[e&&e.code]||'The request could not be completed. Try again in a moment.';""")
r("msg.textContent='Preparo le frasi…';","msg.textContent='Writing the sentences…';")
r("msg.textContent='La generazione automatica funziona solo con la pagina aperta dentro Claude.';","msg.textContent='Generating exercises only works with this page open inside Claude.';")
r("""  const prompt=`Sei un insegnante d'italiano esperto. Crea 6 esercizi di completamento NUOVI e vari sul tema: ${u.focus}. Livello ${u.lvl}.
La studentessa è madrelingua portoghese (Brasile) e parla spagnolo fluentemente: almeno 3 frasi devono colpire errori tipici di ispanofoni/lusofoni su questo tema.
Regole: ogni frase in italiano naturale e moderno, ${u.band===0?'5-12 parole, con lessico molto semplice di livello A1':'8-20 parole'}; contiene esattamente UNA lacuna scritta "___"; dopo la frase, tra parentesi, il suggerimento (es. il verbo all'infinito e la persona). "risposte" elenca tutte le soluzioni corrette accettabili (minuscole, senza punteggiatura). "spiegazione" in ${aiLang(u)==='pt'?'portoghese':'italiano semplice'}, massimo 20 parole.
Rispondi solo con un array JSON: [{"frase":"Penso che Marco ___ ragione. (avere)","risposte":["abbia"],"spiegazione":"${aiLang(u)==='pt'?'Verbo de opinião pede congiuntivo.':'Dopo un verbo di opinione serve il congiuntivo.'}"}]`;""","""  const prompt=`You are an expert English teacher. Write 6 NEW and varied gap-fill exercises on: ${u.focus}. Level ${u.lvl}.
The student is a Brazilian native speaker of Portuguese who also speaks Spanish fluently: at least 3 sentences must target typical mistakes of Portuguese/Spanish speakers on this topic.
Rules: natural, modern English (the kind heard in films and series or read in novels), ${u.band===0?'6-12 words, simple A2 vocabulary':'8-20 words'}; exactly ONE gap written "___"; after the sentence, in brackets, a hint (e.g. the base verb). "risposte" lists every acceptable correct answer (lower case, no punctuation; include contracted and full forms). "spiegazione" in ${aiLang(u)==='pt'?'Portuguese':'simple English'}, max 20 words.
Answer only with a JSON array: [{"frase":"If I ___ you, I'd take the job. (be)","risposte":["were","was"],"spiegazione":"${aiLang(u)==='pt'?'Condicional tipo 2: if + passado.':'Second conditional: if + past simple.'}"}]`;""")
r("msg.textContent='Fatto: la nuova serie è qui sotto.';","msg.textContent='Done: the new set is below.';")
r("function aiLang(u){ if(S.aiLang==='pt'||S.aiLang==='it') return S.aiLang; return (u&&u.band===0)?'pt':'it'; }","function aiLang(u){ if(S.aiLang==='pt'||S.aiLang==='en') return S.aiLang; return (u&&u.band===0)?'pt':'en'; }")
r("""  const head=`Sei un'insegnante d'italiano esigente ma incoraggiante. Correggi il testo di una studentessa madrelingua portoghese (Brasile) che parla spagnolo fluentemente e sta studiando per arrivare al livello ${lvl}.
Tema grammaticale dell'unità: ${u.focus}.
Consegna: ${u.write.task}
`;""","""  const head=`You are a demanding but encouraging English teacher and Cambridge writing examiner. Correct the text of a Brazilian student (native Portuguese, fluent Spanish) who is working towards level ${lvl}.
Grammar focus of the unit: ${u.focus}.
Task: ${u.write.task}
`;""")
r("""Rispondi IN PORTOGHESE (gli esempi in italiano), con esattamente queste sezioni in markdown:
## Avaliação geral
Nível CEFR estimado do texto, 2-3 frases sobre pontos fortes e fracos, e se a consigna e as estruturas da unidade foram usadas.
## Erros
Lista com cada erro no formato: ~~errado~~ → **certo**: explicação curta. Marque [ES] ou [PT] quando for interferência dessas línguas. Agrupe por tipo (gramática, vocabulário, ortografia/acentos).
## Texto corrigido
O texto inteiro corrigido, mudando o mínimo possível.
## Para soar mais italiano
3 sugestões de expressões ou estruturas mais naturais, com o trecho original e a versão melhorada.
## Exercício personalizado
3 frases para completar baseadas nos erros dela (com ___), e as soluções no fim.
` : `
Rispondi IN ITALIANO, con frasi chiare adatte al livello ${lvl} (se una spiegazione è difficile, puoi aggiungere tra parentesi una parola in portoghese), con esattamente queste sezioni in markdown:
## Valutazione generale
Livello QCER stimato del testo, 2-3 frasi su punti di forza e di debolezza, e se la consegna e le strutture dell'unità sono state usate.
## Errori
Elenco di ogni errore nel formato: ~~sbagliato~~ → **giusto**: spiegazione breve. Segna [ES] o [PT] quando è un'interferenza di queste lingue. Raggruppa per tipo (grammatica, lessico, ortografia/accenti).
## Testo corretto
Il testo intero corretto, cambiando il meno possibile.
## Per suonare più italiana
3 suggerimenti di espressioni o strutture più naturali, con il passaggio originale e la versione migliorata.
## Esercizio personalizzato
3 frasi da completare basate sui suoi errori (con ___) e le soluzioni alla fine.
`;""","""Answer IN PORTUGUESE (examples in English), with exactly these markdown sections:
## Avaliação geral
Nível CEFR estimado do texto e uma nota de 0 a 5 em cada critério do Cambridge (Content, Communicative achievement, Organisation, Language), 2-3 frases sobre pontos fortes e fracos, e se a tarefa e as estruturas da unidade foram usadas.
## Erros
Lista com cada erro no formato: ~~errado~~ → **certo**: explicação curta. Marque [PT] ou [ES] quando for interferência dessas línguas. Agrupe por tipo (gramática, vocabulário, ortografia, pontuação).
## Texto corrigido
O texto inteiro corrigido, mudando o mínimo possível.
## Para soar mais natural
3 sugestões de expressões, collocations ou phrasal verbs mais naturais, com o trecho original e a versão melhorada.
## Exercício personalizado
3 frases para completar baseadas nos erros dela (com ___), e as soluções no fim.
` : `
Answer IN ENGLISH, in clear sentences suited to level ${lvl} (if an explanation is hard, you may add a Portuguese word in brackets), with exactly these markdown sections:
## Overall assessment
Estimated CEFR level, a 0-5 mark for each Cambridge criterion (Content, Communicative achievement, Organisation, Language), 2-3 sentences on strengths and weaknesses, and whether the task and the unit's structures were used.
## Mistakes
Every mistake in the format: ~~wrong~~ → **right**: short explanation. Mark [PT] or [ES] when it comes from those languages. Group by type (grammar, vocabulary, spelling, punctuation).
## Corrected text
The whole text corrected, changing as little as possible.
## To sound more natural
3 more natural expressions, collocations or phrasal verbs, with the original passage and the improved version.
## Your personal exercise
3 gap-fill sentences based on her mistakes (with ___) and the answers at the end.
`;""")
r("TESTO DELLA STUDENTESSA:","STUDENT'S TEXT:")
r('<span class="lab note">Consegna · ${W.words[0]}–${W.words[1]} parole</span>','<span class="lab note">Task · ${W.words[0]}–${W.words[1]} words</span>')
r('placeholder="Scrivi qui il tuo testo…" spellcheck="false" lang="it"','placeholder="Write your text here…" spellcheck="false" lang="en"')
r('<button class="btn red" id="wcorr">Correggi con la penna rossa</button><button class="btn" id="wmodel">Vedi il testo modello</button>','<button class="btn red" id="wcorr">Correct it with the red pen</button><button class="btn" id="wmodel">See the model text</button>')
r("""<aside class="side"><h4>Obiettivi del compito</h4><ul class="checklist" id="wtargets"></ul><p class="note" style="margin:0">Gli obiettivi si contano da soli mentre scrivi (alcuni sono stime). Quelli «da confermare» spuntali tu.</p><h4>Correzione in</h4><div class="seg" id="ailang" style="margin:0"><button data-l="it" aria-pressed="${aiLang(u)==='it'}">italiano</button><button data-l="pt" aria-pressed="${aiLang(u)==='pt'}">portoghese</button></div></aside>""","""<aside class="side"><h4>Task targets</h4><ul class="checklist" id="wtargets"></ul><p class="note" style="margin:0">Targets are counted as you type (some are estimates). Tick the «check yourself» ones by hand.</p><h4>Correction in</h4><div class="seg" id="ailang" style="margin:0"><button data-l="en" aria-pressed="${aiLang(u)==='en'}">English</button><button data-l="pt" aria-pressed="${aiLang(u)==='pt'}">Portuguese</button></div></aside>""")
r("""`<b>${n}</b> parole · obiettivo ${W.words[0]}–${W.words[1]}""","""`<b>${n}</b> words · target ${W.words[0]}–${W.words[1]}""")
r('<span class="note">(da confermare)</span>','<span class="note">(check yourself)</span>')
r("b.textContent=d?'✓ Compito completato':'Segna come completato';","b.textContent=d?'✓ Task completed':'Mark as completed';")
r("$('#wmodel').textContent=b.hidden?'Vedi il testo modello':'Nascondi il testo modello';","$('#wmodel').textContent=b.hidden?'See the model text':'Hide the model text';")
r('<div class="stamp">Correzione salvata</div>','<div class="stamp">Saved correction</div>')
r("<p>Scrivi almeno 30 parole prima di chiedere la correzione.</p>","<p>Write at least 30 words before asking for a correction.</p>")
r("""<div class="ai-out"><div class="stamp">La professoressa sta leggendo…</div><div id="aibody"></div><div class="btnrow" style="margin-top:10px"><button class="btn" id="aistop">Ferma</button></div></div>""","""<div class="ai-out"><div class="stamp">The teacher is reading…</div><div id="aibody"></div><div class="btnrow" style="margin-top:10px"><button class="btn" id="aistop">Stop</button></div></div>""")
r("""<p>La correzione automatica funziona solo con la pagina aperta dentro Claude. Copia la richiesta qui sotto e incollala in una conversazione con Claude: contiene già il tuo testo e le istruzioni.</p><textarea readonly id="fbtext">${esc(prompt)}</textarea><div class="btnrow" style="margin-top:8px"><button class="btn" id="fbcopy">Copia la richiesta</button>""","""<p>Automatic correction only works with this page open inside Claude. Copy the request below and paste it into a chat with Claude: it already contains your text and the instructions.</p><textarea readonly id="fbtext">${esc(prompt)}</textarea><div class="btnrow" style="margin-top:8px"><button class="btn" id="fbcopy">Copy the request</button>""")
r("""$('#fbmsg').textContent='Copiata.',()=>{ tx.select(); $('#fbmsg').textContent='Selezionata: usa Ctrl+C / Cmd+C.'; }""","""$('#fbmsg').textContent='Copied.',()=>{ tx.select(); $('#fbmsg').textContent='Selected: press Ctrl+C / Cmd+C.'; }""")
r("out.querySelector('.stamp').textContent='Corretto ✓';","out.querySelector('.stamp').textContent='Corrected ✓';",2)
r("<p class=\"note\">La risposta è stata tagliata. Prova con un testo un po’ più breve.</p>","<p class=\"note\">The answer was cut off. Try a slightly shorter text.</p>")
r("e.code==='cancelled'?'Correzione interrotta':errMsg(e)","e.code==='cancelled'?'Correction stopped':errMsg(e)")

# ---- false friends ----
r("""<div class="eyebrow">Strumenti · lessico</div><h1 class="title">Falsi amici</h1><p class="subtitle">Parole che sembrano spagnole o portoghesi, ma non lo sono. Gira le carte e poi mettiti alla prova con il quiz.</p></header>
  <div class="seg" role="group"><button data-m="cards" aria-pressed="${falsiMode==='cards'}">Carte</button>""","""<div class="eyebrow">Tools · vocabulary</div><h1 class="title">False friends</h1><p class="subtitle">Words that look Portuguese or Spanish but mean something else. Flip the cards, then test yourself with the quiz.</p></header>
  <div class="seg" role="group"><button data-m="cards" aria-pressed="${falsiMode==='cards'}">Cards</button>""")
r('aria-label="${esc(f[0])}: gira la carta"','aria-label="${esc(f[0])}: flip the card"')
r("<small>tocca per vedere il significato</small>","<small>tap to see what it means</small>")
r("const q=[`Che cosa significa «${f[0]}»?`,opts,opts.indexOf(f[1]),`Attenzione: ${f[2]}. Es.: ${f[3]}`]; q.w=f[0]; return q;","const q=[`What does «${f[0]}» mean?`,opts,opts.indexOf(f[1]),`Careful: ${f[2]}. E.g. ${f[3]}`]; q.w=f[0]; return q;")
r("""<span class="lab">10 domande casuali</span><h3>Quiz dei falsi amici</h3></div><span class="score" id="fscore">${S.falsi.best?'record '+S.falsi.best+'/10':''}</span></div><ol class="items" id="fq"></ol><div class="btnrow"><button class="btn primary" id="fnew">Nuovo quiz</button>""","""<span class="lab">10 random questions</span><h3>False friends quiz</h3></div><span class="score" id="fscore">${S.falsi.best?'record '+S.falsi.best+'/10':''}</span></div><ol class="items" id="fq"></ol><div class="btnrow"><button class="btn primary" id="fnew">New quiz</button>""")
r("'falso',{w:qs[i].w},'Falsi amici']","'falso',{w:qs[i].w},'False friends']")

# ---- order ----
r("""box.innerHTML=`<div class="build" aria-label="la tua frase"><span class="ph">Tocca le parole nell'ordine giusto</span></div>""","""box.innerHTML=`<div class="build" aria-label="your sentence"><span class="ph">Tap the words in the right order</span></div>""")
r("""fb.innerHTML='<span class="mark no">mancano delle parole</span>';""","""fb.innerHTML='<span class="mark no">some words are missing</span>';""")
r("""'<span class="mark ok">✓ perfetto</span>'""","""'<span class="mark ok">✓ perfect</span>'""")

# ---- lab ----
r("""<div class="eyebrow">Strumenti · frasi</div><h1 class="title">Laboratorio di frasi</h1><p class="subtitle">Frasi intere, una alla volta: traduci dal portoghese, trasforma le strutture e ricostruisci frasi in disordine. Invio controlla, Invio di nuovo passa alla prossima.</p></header>
   <div class="seg" role="group"><button data-m="trad" aria-pressed="${labMode==='trad'}">Traduzione</button><button data-m="trasf" aria-pressed="${labMode==='trasf'}">Trasforma</button><button data-m="ord" aria-pressed="${labMode==='ord'}">Riordina</button></div>
   ${labMode==='trad'?`<div class="chipsel" id="lvl" style="margin:-6px 0 16px"><button data-l="-1" aria-pressed="${labLvl===-1}">tutti i livelli</button>""","""<div class="eyebrow">Tools · sentences</div><h1 class="title">Sentence lab</h1><p class="subtitle">Whole sentences, one at a time: translate from Portuguese, rewrite with a key word (the Cambridge «key word transformation») and rebuild scrambled sentences. Enter checks, Enter again moves on.</p></header>
   <div class="seg" role="group"><button data-m="trad" aria-pressed="${labMode==='trad'}">Translate</button><button data-m="trasf" aria-pressed="${labMode==='trasf'}">Rewrite</button><button data-m="ord" aria-pressed="${labMode==='ord'}">Word order</button></div>
   ${labMode==='trad'?`<div class="chipsel" id="lvl" style="margin:-6px 0 16px"><button data-l="-1" aria-pressed="${labLvl===-1}">all levels</button>""")
r("const LV=['A2–B1','B1–B2','B2–C1'];","const LV=['A2','B1–B2','B2–C1'];")
r("$('#labstats').textContent=`In questa modalità: ${s.ok} giuste su ${s.tot}.`;","$('#labstats').textContent=`In this mode: ${s.ok} right out of ${s.tot}.`;")
r("""<span class="lab">Unità ${it[2]} · riordina</span></div><div class="ordbox big"></div><div class="btnrow" style="margin-top:14px"><button class="btn primary" id="lcheck">Verifica</button><button class="btn" id="lnext">Prossima →</button>""","""<span class="lab">${esc(uName(UNITS.find(u=>u.id===it[2])||{id:it[2]}))} · word order</span></div><div class="ordbox big"></div><div class="btnrow" style="margin-top:14px"><button class="btn primary" id="lcheck">Check</button><button class="btn" id="lnext">Next →</button>""")
r("'Laboratorio · riordina'","'Sentence lab · word order'")
r("sub=`Traduci in italiano · ${LV[it[2]]}`;","sub=`Translate into English · ${LV[it[2]]}`;")
r("""placeholder="Scrivi in italiano…"></textarea>""","""placeholder="Write in English…"></textarea>""")
r("""<div class="btnrow" style="margin-top:12px"><button class="btn primary" id="lcheck">Verifica</button><button class="btn" id="lnext">Prossima →</button></div>
   <div id="lai"></div>""","""<div class="btnrow" style="margin-top:12px"><button class="btn primary" id="lcheck">Check</button><button class="btn" id="lnext">Next →</button></div>
   <div id="lai"></div>""")
r("'Laboratorio · '+(labMode==='trad'?'traduzione':'trasforma')","'Sentence lab · '+(labMode==='trad'?'translation':'rewrite')")
r('<span class="note">Soluzioni accettate:</span>','<span class="note">Accepted answers:</span>')
r("""`<span class="mark ok">Perfetto! ✓</span>${note}${answers.length>1?sols:''}`""","""`<span class="mark ok">Perfect! ✓</span>${note}${answers.length>1?sols:''}`""")
r("""`<span class="mark acc">Quasi: controlla gli accenti.</span>${note}${sols}`""","""`<span class="mark acc">Almost: check the spelling.</span>${note}${sols}`""")
r("""<span class="mark no">Non corrisponde alle soluzioni previste.</span>${note}${sols}
        <p class="note">Anche altre forme possono essere giuste. Se pensi che la tua vada bene, chiedi un secondo parere:</p>
        <div class="btnrow"><button class="btn red" id="laibtn">Fai valutare la mia frase</button><button class="btn ghost" id="lself">Era giusta: conta il punto</button>""","""<span class="mark no">It does not match the expected answers.</span>${note}${sols}
        <p class="note">Other versions can be right too. If you think yours works, ask for a second opinion:</p>
        <div class="btnrow"><button class="btn red" id="laibtn">Check my sentence with AI</button><button class="btn ghost" id="lself">It was right: count it</button>""")
r("""box.innerHTML=`<div class="ai-out"><div class="stamp">La professoressa sta leggendo…</div></div>`;""","""box.innerHTML=`<div class="ai-out"><div class="stamp">The teacher is reading…</div></div>`;""")
r("""<p>La valutazione automatica funziona solo con la pagina aperta dentro Claude.</p>""","""<p>The AI check only works with this page open inside Claude.</p>""")
r("""  const q=`Sei un insegnante d'italiano. Valuta la risposta di una studentessa brasiliana che parla anche spagnolo.
Compito: ${task}
Frase di partenza: ${prompt}
Soluzioni di riferimento: ${answers.join(' | ')}
Risposta della studentessa: ${mine}
La risposta può essere corretta anche se diversa dalle soluzioni, purché sia grammaticalmente corretta, naturale e fedele al senso (e, per le trasformazioni, rispetti la consegna).
Rispondi solo con JSON: {"corretta": true o false, "versione_corretta": "la sua frase corretta con il minimo di modifiche", "spiegazione": "in ${aiLang()==='pt'?'portoghese':'italiano semplice'}, massimo 35 parole, indicando eventuali interferenze di PT/ES"}`;""","""  const q=`You are an English teacher. Assess the answer of a Brazilian student who also speaks Spanish.
Task: ${task}
Starting sentence: ${prompt}
Reference answers: ${answers.join(' | ')}
Student's answer: ${mine}
The answer can be right even if it differs from the references, as long as it is grammatically correct, natural and faithful to the meaning (and, for key word transformations, uses the key word unchanged and respects the task).
Answer only with JSON: {"corretta": true or false, "versione_corretta": "her sentence corrected with as few changes as possible", "spiegazione": "in ${aiLang()==='pt'?'Portuguese':'simple English'}, max 35 words, pointing out any PT/ES interference"}`;""")
r("${ok?'Va bene! ✓':'Correzione'}","${ok?'That works! ✓':'Correction'}")

# ---- rhythm ----
r("toast(`<span class=\"pen\">Brava!</span> Obiettivo di oggi raggiunto: ${S.goal} punti.`);","toast(`<span class=\"pen\">Well done!</span> Today's goal reached: ${S.goal} points.`);")
r("""title="Il tuo ritmo"><span class="rw-top"><span>Oggi <b id="rw-n">${n}</b>/${g}</span><span class="rw-streak" id="rw-s">${st.cur?`serie: ${st.cur} ${st.cur===1?'giorno':'giorni'}`:'inizia la serie'}</span>""","""title="Your rhythm"><span class="rw-top"><span>Today <b id="rw-n">${n}</b>/${g}</span><span class="rw-streak" id="rw-s">${st.cur?`streak: ${st.cur} ${st.cur===1?'day':'days'}`:'start a streak'}</span>""")
r("$('#rw-s').textContent=st.cur?`serie: ${st.cur} ${st.cur===1?'giorno':'giorni'}`:'inizia la serie';","$('#rw-s').textContent=st.cur?`streak: ${st.cur} ${st.cur===1?'day':'days'}`:'start a streak';")
r("d.toLocaleDateString('it-IT',{month:'short'})","d.toLocaleDateString('en-GB',{month:'short'})")
r("""title="${d.toLocaleDateString('it-IT',{day:'numeric',month:'long'})}: ${n} punti">""","""title="${d.toLocaleDateString('en-GB',{day:'numeric',month:'long'})}: ${n} points">""")
r("""<div class="hmleg"><span>meno</span>""","""<div class="hmleg"><span>less</span>""")
r("<span>obiettivo raggiunto</span></div></div>","<span>goal reached</span></div></div>")
r("""<h2 class="sec" style="margin:0">Il tuo ritmo</h2><span class="note">obiettivo giornaliero: ""","""<h2 class="sec" style="margin:0">Your rhythm</h2><span class="note">daily goal: """)
r("""</span> punti</span></div>""","""</span> points</span></div>""")
r("""<span class="lab">Oggi</span><b class="big">${n}<small>/${S.goal}</small></b>""","""<span class="lab">Today</span><b class="big">${n}<small>/${S.goal}</small></b>""")
r("${n>=S.goal?'Obiettivo raggiunto. Continua così!':`Ancora ${S.goal-n} punti per l'obiettivo.`}","${n>=S.goal?'Goal reached. Keep it up!':`${S.goal-n} more points to reach your goal.`}")
r("""<span class="lab">Serie attuale</span><b class="big">${st.cur}<small> ${st.cur===1?'giorno':'giorni'}</small></b><span class="note">record: ${st.best} · giorni con obiettivo: ${st.total}</span>""","""<span class="lab">Current streak</span><b class="big">${st.cur}<small> ${st.cur===1?'day':'days'}</small></b><span class="note">record: ${st.best} · days with goal met: ${st.total}</span>""")
r("""<span class="lab">Da ripassare oggi</span><b class="big">${due}</b><a class="btn ${due?'primary':''}" href="#ripasso">${due?'Ripassa ora →':'Apri il quaderno'}</a>""","""<span class="lab">To review today</span><b class="big">${due}</b><a class="btn ${due?'primary':''}" href="#review">${due?'Review now →':'Open the notebook'}</a>""")
r("""<span>${t.range?"Primi passi ":"unità "}${tRange(t)} · ${t.lvl}</span><em>${r?(r.passed?'superata · ':'')+r.best+'/20':'da fare'}</em></a>`; }).join('')}<a class="testchip lex" href="#lessico"><b>Lessico</b><span>${LESSICO.length} temi</span><em>${Object.keys(S.voc).filter(k=>S.voc[k]).length} parole imparate</em></a>""","""<span>${t.range?"Warm-up ":"units "}${tRange(t)} · ${t.lvl}</span><em>${r?(r.passed?'passed · ':'')+r.best+'/20':'to do'}</em></a>`; }).join('')}<a class="testchip lex" href="#vocabulary"><b>Vocabulary</b><span>${LESSICO.length} topics</span><em>${Object.keys(S.voc).filter(k=>S.voc[k]).length} words learnt</em></a>""")
