R6=[]
def r(old,new,n=1): R6.append((old,new,n))

# multi-voice scenes
r("""      const u=new SpeechSynthesisUtterance(p.text); u.lang=accLang(); if(v) u.voice=v;""","""      const u=new SpeechSynthesisUtterance(p.text); u.lang=accLang(); const vv=(p.vi!=null&&enVoices()[p.vi])||v; if(vv) u.voice=vv;""")
r("""const accLang=()=>S.accent==='GB'?'en-GB':'en-US';""","""const accLang=()=>S.accent==='GB'?'en-GB':'en-US';
function enVoices(){ try{ const re=S.accent==='GB'?/^en[-_]GB/i:/^en[-_]US/i; const vs=speechSynthesis.getVoices().filter(v=>re.test(v.lang)); const first=itVoice(); return first?[first,...vs.filter(v=>v!==first)]:vs; }catch(e){ return []; } }""")
r("""speakSeq(A.lines.map(l=>({text:l[1],pitch:voices[l[0]]})),'dplay');""","""speakSeq(A.lines.map(l=>({text:l[1],pitch:voices[l[0]],vi:{A:0,B:1,C:2,N:0}[l[0]]})),'dplay');""")

# speaking page
r("""<div class="eyebrow">Ascolto e parlato · parlato</div><h1 class="title">Parlare</h1>
   <p class="subtitle">Conversazioni con l'IA, frasi pronte per ogni situazione e simulazioni della prova orale.</p></header>
   <div class="seg" role="group">${[['ia','Conversazione'],['frasi','Frasi utili'],['orale','Prova orale']]""","""<div class="eyebrow">Listening and speaking · speaking</div><h1 class="title">Speaking</h1>
   <p class="subtitle">A safe place to lose the fear: an AI partner that never judges, ready-made phrases to buy time and keep going, and timed speaking-test practice.</p></header>
   <div class="seg" role="group">${[['ia','Conversation'],['frasi','Useful phrases'],['orale','Speaking test']]""")
r("""<p class="note">Ascolta, ripeti ad alta voce, poi prova a dirla senza guardare.</p>""","""<p class="note">Listen, repeat out loud, then try to say it without looking. Learn the «buying time» phrases first: they are what keeps a conversation going when the words don't come.</p>""")
r("""data-all="${si}" id="fa-${si}">▶ Tutte</button>""","""data-all="${si}" id="fa-${si}">▶ All</button>""")
r("""data-f="${si}-${fi}" aria-label="Ascolta">""","""data-f="${si}-${fi}" aria-label="Listen">""")
r("""<section class="card tipcard"><span class="pen">Come «parlare» qui</span><p>Usa il <b>microfono della tastiera</b> del telefono (o la dettatura del computer: Win+H su Windows, Dettatura nelle impostazioni della tastiera sul Mac) per dire la frase a voce: il testo appare da solo. L'IA risponde, legge la risposta ad alta voce e ti corregge. Le correzioni finiscono nel quaderno degli errori.</p></section>""","""<section class="card tipcard"><span class="pen">How to «speak» here</span><p>Use your phone keyboard's <b>microphone</b> (or dictation on the computer: Win+H on Windows, Dictation in the keyboard settings on a Mac) and say your answer out loud: the text appears by itself. If dictation writes something strange, that is pronunciation feedback for free. The AI answers, reads its reply aloud and corrects you gently; corrections go to the mistakes notebook. Mistakes are expected here: the only goal is to keep talking.</p></section>""")
r("""const LVLHINT={A1:'frasi molto semplici e brevi, presente indicativo, lessico di base',A2:'frasi semplici, presente e passato prossimo, lessico quotidiano',B1:'frasi naturali, i tempi principali, qualche espressione comune',B2:'lingua naturale e varia, anche congiuntivo e condizionale',C1:'lingua ricca, idiomatica e sfumata'};
function chatRules(sc){ const lang=aiLang({band:/A[12]/.test(sc.lvl)?0:1})==='pt'?'portoghese':'italiano semplice';
  return `Sei ${sc.role}. Stai facendo una conversazione di pratica con una studentessa brasiliana (parla anche spagnolo) di livello ${sc.lvl}. Obiettivo della conversazione: ${sc.goal}.
Regole: resta sempre nel personaggio; usa un italiano adatto al livello ${sc.lvl} (${LVLHINT[sc.lvl]}); rispondi con 1-3 frasi brevi e quasi sempre fai una domanda per far continuare la conversazione; se la studentessa scrive in portoghese o in spagnolo, rispondi in italiano e suggeriscile la parola giusta.
Rispondi SEMPRE e soltanto con un oggetto JSON: {"risposta":"la tua battuta nel personaggio","correzione":"il messaggio della studentessa corretto con il minimo di modifiche, oppure stringa vuota se era corretto o se non ha ancora scritto","nota":"spiegazione brevissima dell'errore in ${lang}, oppure stringa vuota","suggerimenti":["due possibili risposte brevi per la studentessa, in italiano, di livello ${sc.lvl}"]}`; }""","""const LVLHINT={A2:'short simple sentences, present and past simple, everyday words',B1:'natural sentences, the main tenses, some common phrasal verbs',B2:'natural, varied English with phrasal verbs and idioms, normal speed',C1:'rich, idiomatic, nuanced English, as in a film or a meeting'};
function chatRules(sc){ const lang=aiLang({band:/A2/.test(sc.lvl)?0:1})==='pt'?'Portuguese':'simple English';
  return `You are ${sc.role}. You are having a practice conversation with a Brazilian student (she also speaks Spanish) at level ${sc.lvl}. She studied English for years but has always been shy about speaking, so be warm, patient and encouraging; never lecture. Goal of the conversation: ${sc.goal}.
Rules: always stay in character; use English suited to level ${sc.lvl} (${LVLHINT[sc.lvl]||LVLHINT.B1}), with natural spoken features (contractions, fillers like "well" or "I mean"); answer in 1-3 short sentences and almost always ask a question to keep the conversation going; if she writes in Portuguese or Spanish, answer in English and give her the English words. Correct only real mistakes, not style.
ALWAYS answer only with a JSON object: {"risposta":"your line in character","correzione":"her message corrected with as few changes as possible, or an empty string if it was correct or she has not written yet","nota":"a very short explanation of the mistake in ${lang}, or an empty string","suggerimenti":["two possible short replies she could give, in English, at level ${sc.lvl}"]}`; }""")
r("""<span class="lab note">${sc.lvl} · obiettivo</span><div><b>${esc(sc.t)}</b>: ${esc(sc.goal)}</div></div><div class="btnrow"><label class="note chk"><input type="checkbox" id="autosp" ${S.autoSpeak!==false?'checked':''}> leggi le risposte</label><button class="btn" id="cend" type="button">Valuta la conversazione</button><button class="btn ghost" id="cnew" type="button">Cambia scenario</button>""","""<span class="lab note">${sc.lvl} · goal</span><div><b>${esc(sc.t)}</b>: ${esc(sc.goal)}</div></div><div class="btnrow"><label class="note chk"><input type="checkbox" id="autosp" ${S.autoSpeak!==false?'checked':''}> read replies aloud</label><button class="btn" id="cend" type="button">Assess the conversation</button><button class="btn ghost" id="cnew" type="button">Change scenario</button>""")
r("""placeholder="Scrivi o detta la tua risposta…" spellcheck="false"></textarea><button class="btn primary" id="csend" type="button">Invia</button></div>
   <p class="note">Invio per inviare · Maiusc+Invio per andare a capo. Sul telefono tocca il microfono della tastiera per parlare.</p>""","""placeholder="Type or dictate your answer…" spellcheck="false"></textarea><button class="btn primary" id="csend" type="button">Send</button></div>
   <p class="note">Enter to send · Shift+Enter for a new line. On your phone, tap the keyboard microphone to speak.</p>""")
r("""data-say="${i}" aria-label="Ascolta">▶</button>`:''}</div>`:m.who==='me'""","""data-say="${i}" aria-label="Listen">▶</button>`:''}</div>`:m.who==='me'""")
r("""chat.msgs.push({who:'sys',text:'La conversazione con l\\'IA funziona solo con la pagina aperta dentro Claude.'});""","""chat.msgs.push({who:'sys',text:'The AI conversation only works with this page open inside Claude.'});""")
r("""chat.turns.push({role:'user',content:`Messaggio della studentessa: «${text}»\\n(Rispondi solo con il JSON richiesto.)`});""","""chat.turns.push({role:'user',content:`Student's message: «${text}»\\n(Answer only with the requested JSON.)`});""")
r("""'\\n\\nComincia tu la conversazione, presentando la situazione in modo naturale.'""","""'\\n\\nYou start the conversation, setting the scene naturally.'""")
r("""'lab',{q:text,s:'Correggi la frase (conversazione)',a:[String(r.correzione)],n:String(r.nota||'')},'Conversazione · '+chat.sc.t);""","""'lab',{q:text,s:'Correct the sentence (conversation)',a:[String(r.correzione)],n:String(r.nota||'')},'Conversation · '+chat.sc.t);""")
r("""`<span class="note">Idee:</span> ${ss.map""","""`<span class="note">Ideas:</span> ${ss.map""")
r("""out.innerHTML='<div class="ai-out"><p>Scrivi almeno tre messaggi prima di chiedere la valutazione.</p></div>';""","""out.innerHTML='<div class="ai-out"><p>Write at least three messages before asking for an assessment.</p></div>';""")
r("""const lang=aiLang({band:/A[12]/.test(chat.sc.lvl)?0:1})==='pt'?'PORTOGHESE':'ITALIANO (semplice)';
  const tr=chat.msgs.filter(m=>m.who!=='sys').map(m=>(m.who==='me'?'STUDENTESSA: ':'INTERLOCUTORE: ')+m.text).join('\\n');
  out.innerHTML='<div class="ai-out"><div class="stamp">La professoressa sta leggendo…</div><div id="cevb"></div></div>';
  try{ const r=await sample(`Sei un'insegnante d'italiano. Valuta la conversazione di pratica di una studentessa brasiliana (parla anche spagnolo), scenario «${chat.sc.t}», livello ${chat.sc.lvl}. Rispondi in ${lang} con queste sezioni in markdown:
## Livello e impressione generale
## Che cosa hai fatto bene
## 3 errori da sistemare
(formato: ~~sbagliato~~ → **giusto**: spiegazione)
## 5 espressioni utili per la prossima volta

CONVERSAZIONE:""","""const lang=aiLang({band:/A2/.test(chat.sc.lvl)?0:1})==='pt'?'PORTUGUESE':'simple ENGLISH';
  const tr=chat.msgs.filter(m=>m.who!=='sys').map(m=>(m.who==='me'?'STUDENT: ':'PARTNER: ')+m.text).join('\\n');
  out.innerHTML='<div class="ai-out"><div class="stamp">The teacher is reading…</div><div id="cevb"></div></div>';
  try{ const r=await sample(`You are an encouraging English teacher. Assess this practice conversation by a Brazilian student (she also speaks Spanish and is working on her confidence), scenario «${chat.sc.t}», level ${chat.sc.lvl}. Answer in ${lang} with these markdown sections:
## Level and overall impression
## What you did well
## 3 mistakes to fix
(format: ~~wrong~~ → **right**: explanation; mark [PT] or [ES] for interference)
## 5 useful expressions for next time

CONVERSATION:""")
r("out.querySelector('.stamp').textContent='Valutazione'; tick(5);","out.querySelector('.stamp').textContent='Assessment'; tick(5);")
# oral test
r("""<p class="note">Simulazione nello stile delle prove orali CILS e CELI: preparazione, poi parli da sola per il tempo indicato. Alla fine valuti la tua prova e, se vuoi, detti quello che hai detto per un parere.</p>""","""<p class="note">Practice in the style of the Cambridge and IELTS speaking tests: some preparation time, then you talk on your own for the time shown. Talk to the wall, to your phone recorder or to the cat: what matters is not stopping. Then rate yourself and, if you like, dictate what you said for feedback.</p>""")
r("""data-act="say">▶ Ascolta la consegna</button>`:''}<button class="btn primary" type="button" data-act="go">Comincia: ${o.prep}s di preparazione, ${Math.round(o.talk/60*10)/10} min per parlare</button>""","""data-act="say">▶ Listen to the task</button>`:''}<button class="btn primary" type="button" data-act="go">Start: ${o.prep}s to prepare, ${Math.round(o.talk/60*10)/10} min to speak</button>""")
r("""<span class="lab">${phase==='prep'?'Preparazione: prendi appunti':'Parla ad alta voce!'}</span>""","""<span class="lab">${phase==='prep'?'Preparation: make notes':'Speak out loud!'}</span>""")
r("""${phase==='prep'?'Sono pronta: comincio a parlare':'Ho finito'}""","""${phase==='prep'?'I\\'m ready: start speaking':'I\\'m done'}""")
r("const crit=['Fluidità','Grammatica','Lessico','Pronuncia','Coerenza'];","const crit=['Fluency','Grammar','Vocabulary','Pronunciation','Coherence'];")
r("""<div class="selfev"><span class="lab">Autovalutazione · da 1 a 4</span>""","""<div class="selfev"><span class="lab">Self-assessment · 1 to 4</span>""")
r("""<p class="note" style="margin-top:12px">Vuoi un parere? Detta o scrivi quello che hai detto (anche più o meno) e ricevi una correzione.</p>
   <textarea class="labin" rows="4" placeholder="Detta o scrivi qui la tua risposta…"></textarea><div class="btnrow" style="margin-top:8px"><button class="btn red" type="button" data-act="fb">Correggi la mia risposta</button>""","""<p class="note" style="margin-top:12px">Want feedback? Dictate or type what you said (roughly is fine) and get a correction.</p>
   <textarea class="labin" rows="4" placeholder="Dictate or type your answer here…"></textarea><div class="btnrow" style="margin-top:8px"><button class="btn red" type="button" data-act="fb">Correct my answer</button>""")
r("toast(`<span class=\"pen\">Prova registrata:</span> ${tot}/20`);","toast(`<span class=\"pen\">Saved:</span> ${tot}/20`);")
r("""out.innerHTML='<p class="note">Scrivi almeno 15 parole.</p>'; return; }
    const sample=await getSample(); if(!sample){ out.innerHTML='<p class="note">La correzione funziona solo con la pagina aperta dentro Claude.</p>'; return; }
    const lang=aiLang({band:o.lvl==='A2'?0:1})==='pt'?'PORTOGHESE':'ITALIANO (semplice)';
    out.innerHTML='<div class="ai-out"><div class="stamp">La professoressa sta ascoltando…</div><div class="ofbb"></div></div>';
    try{ const r=await sample(`Sei un esaminatore della prova orale CILS/CELI. Questa è la trascrizione (dettata) della produzione orale di una studentessa brasiliana che parla anche spagnolo. Livello della prova: ${o.lvl}. Consegna: «${o.p}». Ignora la punteggiatura e piccoli errori di trascrizione automatica.
Rispondi in ${lang} con queste sezioni in markdown:
## Livello stimato e giudizio
## Punti di forza
## Errori principali
(formato: ~~sbagliato~~ → **giusto**: spiegazione)
## Versione migliorata
(una versione breve e naturale di ciò che voleva dire, al livello ${o.lvl})
## Per la prossima volta
3 consigli concreti

TRASCRIZIONE:""","""out.innerHTML='<p class="note">Write at least 15 words.</p>'; return; }
    const sample=await getSample(); if(!sample){ out.innerHTML='<p class="note">Correction only works with this page open inside Claude.</p>'; return; }
    const lang=aiLang({band:o.lvl==='A2'?0:1})==='pt'?'PORTUGUESE':'simple ENGLISH';
    out.innerHTML='<div class="ai-out"><div class="stamp">The examiner is listening…</div><div class="ofbb"></div></div>';
    try{ const r=await sample(`You are a friendly Cambridge/IELTS speaking examiner. This is a dictated transcript of a spoken answer by a Brazilian student who also speaks Spanish and is building her confidence. Level: ${o.lvl}. Task: «${o.p}». Ignore punctuation and small speech-to-text errors (but if a word looks like a mispronunciation, say so).
Answer in ${lang} with these markdown sections:
## Estimated level and overall comment
## Strengths
## Main mistakes
(format: ~~wrong~~ → **right**: explanation)
## Improved version
(a short, natural version of what she wanted to say, at level ${o.lvl})
## Next time
3 concrete tips

TRANSCRIPT:""")
r("out.querySelector('.ofbb').innerHTML=md(r.text); out.querySelector('.stamp').textContent='Parere'; tick(5);","out.querySelector('.ofbb').innerHTML=md(r.text); out.querySelector('.stamp').textContent='Feedback'; tick(5);")

# beyond the notebook
r("const SRC=['corso','video','libro','podcast','conversazione','altro'];","const SRC=['film','series','book','video','podcast','conversation','course','other'];")
r("""<div class="eyebrow">Ascolto e parlato · il tuo studio</div><h1 class="title">Fuori dal quaderno</h1>
   <p class="subtitle">Il corso, i video, il tuo libro: raccogli qui le parole nuove, registra il tempo di studio (conta per il tuo obiettivo giornaliero) e racconta che cosa hai letto o visto.</p></header>
   <div class="seg" role="group">${[['parole','Le mie parole'],['registro','Registro di studio'],['racconta','Racconta'],['risorse','Video e podcast']]""","""<div class="eyebrow">Listening and speaking · real life</div><h1 class="title">Films, books &amp; me</h1>
   <p class="subtitle">Films, series and the book on your bedside table: collect new words here, log your time and tell me what you watched or read.</p></header>
   <div class="seg" role="group">${[['parole','My words'],['registro','Study log'],['racconta','Tell me about it'],['risorse','How to watch and read']]""")
r("""<span class="lab">Aggiungi</span><h3>Una parola nuova</h3></div><span class="note">${ids.length} parole</span>""","""<span class="lab">Add</span><h3>A new word or expression</h3></div><span class="note">${ids.length} words</span>""")
r("""<input id="mv-it" placeholder="italiano (es. la scrivania)" required autocomplete="off"><input id="mv-pt" placeholder="português (escrivaninha)" required autocomplete="off"><input id="mv-ex" placeholder="esempio (facoltativo)" autocomplete="off">""","""<input id="mv-it" placeholder="English (e.g. to figure out)" required autocomplete="off"><input id="mv-pt" placeholder="português (descobrir, entender)" required autocomplete="off"><input id="mv-ex" placeholder="the sentence where you found it (optional)" autocomplete="off">""")
r("""<button class="btn primary" type="submit">Aggiungi</button></form></section>""","""<button class="btn primary" type="submit">Add</button></form></section>""")
r("""<button class="btn primary" id="mvrev" type="button">Ripassa le mie parole</button><input id="mvq" class="vsel" placeholder="Cerca…" autocomplete="off">""","""<button class="btn primary" id="mvrev" type="button">Review my words</button><input id="mvq" class="vsel" placeholder="Search…" autocomplete="off">""")
r("""<button class="btn ghost" type="button" data-del="${k}">Rimuovi</button>""","""<button class="btn ghost" type="button" data-del="${k}">Remove</button>""")
r("""'<p class="note">Ancora nessuna parola. Aggiungi le parole che incontri nel corso, nei video o nel tuo libro: poi le ripassi qui e, se le sbagli, tornano nel quaderno degli errori.</p>'""","""'<p class="note">No words yet. Add the words and expressions you meet in films, series and books (5 per episode is a good habit): you review them here and, if you get them wrong, they come back in the mistakes notebook.</p>'""")
r("""<div class="pen" style="font-size:34px">Fatto!</div><p>${ok} giuste su ${order.length}.</p>""","""<div class="pen" style="font-size:34px">Done!</div><p>${ok} right out of ${order.length}.</p>""")
r("""<span class="lab">${pos+1}/${order.length} · come si dice in italiano?</span>""","""<span class="lab">${pos+1}/${order.length} · how do you say it in English?</span>""")
r("""const r=judge(inp.value,[w.it,w.it.replace(/^(il|lo|la|l'|i|gli|le|un|uno|una|un')\\s*/i,'')]); tick();""","""const r=judge(inp.value,[w.it,w.it.replace(/^(the|a|an|to)\\s+/i,'')]); tick();""")
r("""'myvoc',{k:order[pos]},'Le mie parole');""","""'myvoc',{k:order[pos]},'My words');""")
r("""(r==='ok'?'<span class="mark ok">Giusto! ✓</span>':r==='acc'?`<span class="mark acc">Quasi: ${esc(w.it)}</span>`:`<span class="mark no">${esc(w.it)}</span>`)+(w.ex?`<p class="expl">${esc(w.ex)}</p>`:'')+'<p class="note">Invio per continuare</p>';""","""(r==='ok'?'<span class="mark ok">Right! ✓</span>':r==='acc'?`<span class="mark acc">Almost: ${esc(w.it)}</span>`:`<span class="mark no">${esc(w.it)}</span>`)+(w.ex?`<p class="expl">${esc(w.ex)}</p>`:'')+'<p class="note">Enter to continue</p>';""")
r("""<span class="lab">Registra</span><h3>Che cosa hai fatto oggi fuori dal quaderno?</h3>""","""<span class="lab">Log</span><h3>What did you watch, read or practise today?</h3>""")
r("""<input id="lg-m" type="number" min="1" max="600" placeholder="minuti" required><input id="lg-n" placeholder="nota (es. lezione 5 del corso, episodio di una serie…)" autocomplete="off"><button class="btn primary" type="submit">Registra</button></form>
    <p class="note">Ogni minuto registrato vale un punto per l'obiettivo giornaliero.</p>""","""<input id="lg-m" type="number" min="1" max="600" placeholder="minutes" required><input id="lg-n" placeholder="note (e.g. Friends S1E3, English subtitles; Holes ch. 4)" autocomplete="off"><button class="btn primary" type="submit">Log it</button></form>
    <p class="note">Any day you log counts towards your study streak.</p>""")
r("""<span class="lab">Ultimi 7 giorni</span>""","""<span class="lab">Last 7 days</span>""")
r("""<span class="lab">In totale</span><b class="big">${Math.round(all/6)/10}<small> ore</small></b><span class="note">fuori dal quaderno</span></div><div class="card"><span class="lab">Oggi</span>""","""<span class="lab">In total</span><b class="big">${Math.round(all/6)/10}<small> hours</small></b><span class="note">of real English</span></div><div class="card"><span class="lab">Today</span>""")
r("toLocaleDateString('it-IT',{weekday:'long',day:'numeric',month:'long'})","toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long'})")
r("toast(`<span class=\"pen\">Registrato:</span> ${m} minuti`);","toast(`<span class=\"pen\">Logged:</span> ${m} minutes`);")
r("""<span class="lab">Racconta</span><h3>Che cosa hai letto, visto o studiato oggi?</h3></div></div>
   <p>Riassumi in italiano un capitolo del tuo libro, un video, una lezione del corso o una risposta che hai dato a voce. Puoi anche dettare il testo con il microfono della tastiera.</p>
   <textarea class="paper" id="rctext" style="min-height:200px" placeholder="Oggi ho letto / visto…">${esc(S.racconta||'')}</textarea>
   <div class="btnrow" style="margin-top:10px"><button class="btn red" id="rcgo" type="button">Correggi con la penna rossa</button>""","""<span class="lab">Tell me about it</span><h3>What did you watch or read today?</h3></div></div>
   <p>Summarise in English the episode you watched, a chapter of your book, or say what you thought of it. You can also dictate it with the keyboard microphone: that is speaking practice too.</p>
   <textarea class="paper" id="rctext" style="min-height:200px" placeholder="Today I watched / read…">${esc(S.racconta||'')}</textarea>
   <div class="btnrow" style="margin-top:10px"><button class="btn red" id="rcgo" type="button">Correct it with the red pen</button>""")
r("""(ta.value.trim()?ta.value.trim().split(/\\s+/).length:0)+' parole';""","""(ta.value.trim()?ta.value.trim().split(/\\s+/).length:0)+' words';""")
r("""out.innerHTML='<p class="note">Scrivi almeno 20 parole.</p>'; return; }
    const sample=await getSample(); if(!sample){ out.innerHTML='<p class="note">La correzione funziona solo con la pagina aperta dentro Claude.</p>'; return; }
    const lang=aiLang({band:0})==='pt'?'PORTOGHESE':'ITALIANO (semplice)';
    out.innerHTML='<div class="ai-out"><div class="stamp">La professoressa sta leggendo…</div><div id="rcb"></div></div>';
    try{ const r=await sample(`Sei un'insegnante d'italiano. Una studentessa brasiliana (parla anche spagnolo, livello tra A1 e B2) racconta che cosa ha letto, visto o studiato oggi. Il testo può essere dettato: ignora la punteggiatura mancante. Rispondi in ${lang} con queste sezioni in markdown:
## Livello stimato
## Errori
(formato: ~~sbagliato~~ → **giusto**: spiegazione; segna [ES] o [PT] per le interferenze)
## Testo corretto
## 5 parole o espressioni nuove da imparare
(utili per questo argomento, con traduzione in portoghese)

TESTO:""","""out.innerHTML='<p class="note">Write at least 20 words.</p>'; return; }
    const sample=await getSample(); if(!sample){ out.innerHTML='<p class="note">Correction only works with this page open inside Claude.</p>'; return; }
    const lang=aiLang({band:1})==='pt'?'PORTUGUESE':'simple ENGLISH';
    out.innerHTML='<div class="ai-out"><div class="stamp">The teacher is reading…</div><div id="rcb"></div></div>';
    try{ const r=await sample(`You are an English teacher. A Brazilian student (she also speaks Spanish, level B1-B2) tells you what she watched, read or studied today. The text may be dictated: ignore missing punctuation. Answer in ${lang} with these markdown sections:
## Estimated level
## Mistakes
(format: ~~wrong~~ → **right**: explanation; mark [PT] or [ES] for interference)
## Corrected text
## 5 new words or expressions to learn
(useful for this topic, with Portuguese translation; include phrasal verbs or idioms a native would use)

TEXT:""")
r("$('#rcb').innerHTML=md(r.text); out.querySelector('.stamp').textContent='Corretto ✓'; tick(10);","",0)

# tab Listen & speak
r("""<span class="lab">1 · Leggi ad alta voce</span>""","""<span class="lab">1 · Read aloud</span>""")
r("""<span class="lab">2 · Dettato</span><h3>Scrivi quello che senti</h3>""","""<span class="lab">2 · Dictation</span><h3>Write what you hear</h3>""")
r("""<span class="lab">3 · Rispondi a voce</span><h3>Parla per un minuto</h3></div></div>
    <p class="note">Leggi o ascolta la domanda e rispondi ad alta voce, senza scrivere. Poi spunta la domanda.</p>""","""<span class="lab">3 · Answer out loud</span><h3>Talk for one minute</h3></div></div>
    <p class="note">Read or listen to the question and answer out loud, without writing. Use the unit's grammar. Then tick the question.</p>""")
r("""data-q="${i}" aria-label="Ascolta">▶</button><div class="phr-it">${esc(q)}</div><button class="btn ghost said ${st.said&&st.said[i]?'kn':''}" type="button" data-said="${i}">${st.said&&st.said[i]?'✓ fatto':'fatto?'}</button>""","""data-q="${i}" aria-label="Listen">▶</button><div class="phr-it">${esc(q)}</div><button class="btn ghost said ${st.said&&st.said[i]?'kn':''}" type="button" data-said="${i}">${st.said&&st.said[i]?'✓ done':'done?'}</button>""")
r("""<p class="note">Vuoi una correzione? Detta una risposta nel <a href="#fuori" id="pracc">Racconta</a> o pratica con la <a href="#parlare" id="pconv">conversazione con l'IA</a>.</p>""","""<p class="note">Want a correction? Dictate an answer in <a href="#beyond" id="pracc">Tell me about it</a> or practise with the <a href="#speaking" id="pconv">AI conversation</a>.</p>""")
r("""<span class="lab">4 · Guarda e ascolta</span><h3>Video su questo argomento</h3>""","""<span class="lab">4 · Watch and listen</span><h3>Videos on this topic</h3>""")
r("""<span class="note">(ricerca su YouTube)</span>""","""<span class="note">(YouTube search)</span>""")
r("""<p class="note">Dopo aver guardato, registra i minuti nel <a href="#fuori" id="preg">Registro di studio</a>.</p>""","""<p class="note">After watching, log the minutes in your <a href="#beyond" id="preg">Study log</a>.</p>""")
r("${st.done?'✓ Parla e ascolta completato':'Segna come completato'}","${st.done?'✓ Listen & speak completed':'Mark as completed'}")
r("b.textContent=said[i]?'✓ fatto':'fatto?';","b.textContent=said[i]?'✓ done':'done?';")
r("""$('#pdbox').innerHTML=`<p><span class="mark ok">Dettato finito: ${ok}/${sents.length}</span></p><button class="btn" type="button" id="pdagain">Rifai il dettato</button>`;""","""$('#pdbox').innerHTML=`<p><span class="mark ok">Dictation finished: ${ok}/${sents.length}</span></p><button class="btn" type="button" id="pdagain">Do it again</button>`;""")
r("if(b){ b.textContent='✓ Parla e ascolta completato';","if(b){ b.textContent='✓ Listen & speak completed';")
r("$('#pdpos').textContent=`Frase ${pos+1} di ${sents.length}`;","$('#pdpos').textContent=`Sentence ${pos+1} of ${sents.length}`;")
r("uName(u)+' · dettato'","uName(u)+' · dictation'")
r("b.textContent=pos+1<sents.length?'Prossima frase →':'Vedi il risultato';","b.textContent=pos+1<sents.length?'Next sentence →':'See the result';")
r("""$('#pdbox').innerHTML='<p class="note">Nessuna frase per questa unità.</p>';""","""$('#pdbox').innerHTML='<p class="note">No sentences for this unit.</p>';""")
r("""box.innerHTML='<p class="note">Parola rimossa.</p>';""","""box.innerHTML='<p class="note">Word removed.</p>';""")
r("""<span class="lab">come si dice in italiano?</span><div class="verb" style="font-size:34px">${esc(w.pt)}</div><input id="rvin" """,""" <span class="lab">how do you say it in English?</span><div class="verb" style="font-size:34px">${esc(w.pt)}</div><input id="rvin" """)
r("""const r=judge(inp.value,[w.it,w.it.replace(/^(il|lo|la|l'|i|gli|le|un|uno|una|un')\\s*/i,'')]); finish(""","""const r=judge(inp.value,[w.it,w.it.replace(/^(the|a|an|to)\\s+/i,'')]); finish(""")
