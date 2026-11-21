/* ───────── READING EXAMS ─────────
 type mc:     {text, q:[[question, [4 options], correct, explanation]]}
 type gapped: {parts:[html paragraphs with {1}..{6} gap markers between], opts:[7 paragraphs A-G], a:[letter index per gap], e:[explanation per gap]}
 type match:  {sections:[[letter, title, html]], q:[[statement, section index, explanation]]}
 type tfng:   {text, q:[[statement, 'T'|'F'|'NG', explanation]]}
*/
const EXAM_TYPES = {
mc:{name:'Multiple choice', exam:'Cambridge Part 5', how:`Leia o texto inteiro uma vez, rápido, só para entender o tema e o tom. Depois, para cada pergunta, encontre o trecho exato (as perguntas seguem a ordem do texto) e só então olhe as opções. A resposta certa quase nunca repete as palavras do texto: ela diz a mesma coisa com outras palavras. As opções erradas costumam usar palavras do texto com o sentido errado.`},
gapped:{name:'Gapped text', exam:'Cambridge Part 6',how:`Seis parágrafos foram retirados e misturados com um extra que não serve. Leia o texto principal inteiro primeiro. Depois procure as pistas nas bordas de cada lacuna: pronomes (<i>this, they, it</i>), conectores (<i>however, as a result</i>), nomes e tempos verbais que precisam combinar com o parágrafo de antes E com o de depois. Faça primeiro os mais óbvios.`},
match:{name:'Multiple matching', exam:'Cambridge Part 7',how:`Aqui não se lê tudo com calma: é uma prova de leitura rápida (scanning). Leia as afirmações primeiro e sublinhe a ideia-chave de cada uma. Depois leia um texto de cada vez e marque as afirmações que ele responde. Cuidado com textos que mencionam o mesmo tema mas dizem outra coisa.`},
tfng:{name:'True / False / Not Given', exam:'IELTS Reading',how:`<b>True</b>: o texto diz a mesma coisa. <b>False</b>: o texto diz o contrário. <b>Not Given</b>: o texto não diz, mesmo que pareça provável. O erro mais comum é usar o próprio conhecimento: responda só com o que está escrito. Desconfie de palavras como <i>all, always, only, never</i> na afirmação.`}
};

const EXAMS = [
/* ── Part 5 · B2 ── */
{id:'p5-b2', type:'mc', lvl:'B2', minutes:18, title:'The Accidental Polyglot',
text:`<p>When Marta Ruiz arrived in Edinburgh at the age of twenty-six, she had studied English for twelve years and could not order a sandwich without rehearsing the sentence in her head. "I knew every rule," she says, "and I could do the exercises in my sleep. What I couldn't do was understand a single word the woman at the bakery said to me."</p>
<p>Today Marta works as a subtitler for a streaming company and speaks four languages, none of which, she insists, she learned "properly". Her method, if it can be called that, began almost by accident. Lonely and too embarrassed to speak, she started spending her evenings watching detective series with English subtitles. "At first it was just company," she admits. "I wasn't studying. But after a few months I noticed that I could follow the jokes, and the jokes are always the last thing you understand."</p>
<p>What surprised her most was that it wasn't the vocabulary that changed first, but her ear. Words she already knew on paper suddenly became recognisable in speech. "In class, English was a list of separate words. In the series, it was a river. I had to learn where one word ended and the next one began."</p>
<p>Marta is careful not to present her story as a recipe. Watching series, she believes, works only if you already have a foundation, and only if you are genuinely interested in what you are watching. "People ask me which series is best for learning. That's the wrong question. The best series is the one you would watch anyway, even in your own language."</p>
<p>She is equally cautious about the idea that you can learn without effort. Her evenings in front of the screen were relaxing, she says, but the moment that changed everything was far from comfortable. A colleague invited her to a pub quiz, and she spent three hours terrified that someone would ask her a question. Someone did. She answered, the team won, and nobody commented on her accent. "That night I understood that nobody was waiting for me to fail. I was the only one keeping score."</p>
<p>These days, when she trains new subtitlers, she gives them a piece of advice that has nothing to do with grammar. "Listen to how people actually talk, not how you think they should. Real people interrupt each other, leave sentences unfinished and use the same three words for everything. If your subtitles are too perfect, they're wrong."</p>`,
q:[
["What was Marta's main problem when she arrived in Edinburgh?",["She didn't know enough grammar","She couldn't understand spoken English","She was afraid of bakeries","She had forgotten her English"],1,"«I knew every rule… What I couldn't do was understand a single word» : o problema era a compreensão oral, não a gramática."],
["Why did Marta start watching detective series?",["Her teacher recommended it","She wanted to become a subtitler","She felt alone and wanted company","She needed it for her job"],2,"«Lonely and too embarrassed to speak… At first it was just company.»"],
["What does Marta mean when she compares English to «a river»?",["Spoken English is fast and continuous","English is a beautiful language","She preferred studying outdoors","English has many dialects"],0,"Ela explica logo depois: tinha de aprender onde uma palavra termina e a outra começa."],
["What does Marta think about the question «which series is best for learning»?",["It is very useful","It misses the point","It depends on the level","Only teachers can answer it"],1,"«That's the wrong question. The best series is the one you would watch anyway.»"],
["What was important about the pub quiz?",["Her team won a prize","She realised others weren't judging her","Her colleague corrected her accent","She decided to stop watching series"],1,"«nobody was waiting for me to fail. I was the only one keeping score.»"],
["What is Marta's advice to new subtitlers?",["Use perfect grammar","Reflect the way people really speak","Avoid unfinished sentences","Translate word for word"],1,"«Listen to how people actually talk… If your subtitles are too perfect, they're wrong.»"]
]},
/* ── Part 5 · C1 ── */
{id:'p5-c1', type:'mc', lvl:'C1', minutes:18, title:'Do We Still Need to Learn Languages?',
text:`<p>Every few years a new device promises to make language learning obsolete. The latest generation of translation earbuds can render a conversation in Japanese into passable English with barely a second's delay, and it is tempting to conclude, as several technology commentators already have, that the long, frustrating business of memorising verb tables is about to join handwriting and mental arithmetic in the museum of skills we no longer need.</p>
<p>The argument has a certain appeal, not least to anyone who has struggled through a grammar course. Yet it rests on a rather narrow view of what language is for. If the purpose of speaking another language were merely to exchange information, a sufficiently accurate machine would indeed make human effort redundant. But very little of what we value in conversation is information in that sense. We joke, we hesitate, we choose one word rather than another because of who we are talking to. A translation, however fluent, flattens these choices into something serviceable but anonymous.</p>
<p>There is also the question of what learning a language does to the learner. Researchers have long noted that bilingual speakers report feeling, and sometimes behaving, slightly differently in each of their languages. Whether this amounts to having two personalities is debatable, and the evidence is less dramatic than popular articles suggest. What is harder to dispute is that the effort of learning forces us to notice things we would otherwise take for granted: that our own language divides the world in particular ways, and that other divisions are possible.</p>
<p>None of this is to deny that the machines are useful. For a tourist ordering dinner or a doctor treating a patient with whom she shares no language, they may be transformative. The danger lies elsewhere: in the assumption that because something can be done for us, it is no longer worth doing ourselves. We did not stop running when cars were invented; we simply stopped needing to run in order to arrive.</p>
<p>Perhaps that is the most useful way to think about the future of language learning. It is likely to become less a matter of necessity and more a matter of choice, pursued not because we cannot manage without it, but because of what it gives us that a device cannot: the experience of being understood, imperfectly, in someone else's words.</p>`,
q:[
["In the first paragraph, the writer suggests that some commentators…",["have tested the earbuds carefully","are too quick to declare language learning unnecessary","regret the loss of handwriting","believe the earbuds are inaccurate"],1,"«it is tempting to conclude, as several technology commentators already have…» : o autor apresenta essa conclusão como apressada."],
["According to the writer, what is wrong with the argument in favour of machines?",["It ignores the cost of the devices","It assumes language is mainly about exchanging information","It is based on old technology","It underestimates grammar courses"],1,"«it rests on a rather narrow view of what language is for… very little of what we value in conversation is information.»"],
["What does the writer say about bilingual people having «two personalities»?",["It has been clearly proven","The idea is exaggerated in popular articles","It only applies to children","It is completely false"],1,"«the evidence is less dramatic than popular articles suggest.»"],
["What, according to the writer, does learning a language make us notice?",["That our own language reflects one way of dividing the world","That grammar is universal","That translation is impossible","That machines are more accurate than people"],0,"«our own language divides the world in particular ways, and… other divisions are possible.»"],
["Why does the writer mention running and cars?",["To show that technology makes us lazy","To argue that machines are dangerous","To compare a skill we still choose to practise with one we no longer need","To explain how tourists travel"],2,"Deixamos de precisar correr para chegar, mas não deixamos de correr: assim seria com as línguas."],
["What is the writer's overall conclusion?",["Language learning will disappear","Language learning will become a choice valued for its own sake","Machines will never be useful","Only doctors should use translation devices"],1,"«less a matter of necessity and more a matter of choice…»"]
]},
/* ── Part 6 · B2 ── */
{id:'p6-b2', type:'gapped', lvl:'B2', minutes:14, title:'Learning to Code at Forty',
parts:[
`<p>Two years ago, at forty-one, I was a secondary school history teacher with no technical background whatsoever. Today I work as a junior web developer. People often assume I must have had some secret talent for computers. The truth is much less exciting.</p>`,
`<p>So I started with a free online course in the evenings, after marking homework. Progress was painfully slow. Some nights I spent two hours trying to understand why a single line of code refused to work, only to discover I had forgotten a comma.</p>`,
`<p>She was right. Within a month I was spending my lunch breaks reading forums and my weekends building tiny websites for friends: a page for my cousin's bakery, a quiz for my students, a map of my village's old buildings.</p>`,
`<p>That realisation changed the way I studied. Instead of trying to finish courses, I chose small projects and learned whatever I needed to complete them.</p>`,
`<p>Not everyone was supportive. Some colleagues thought I was having a midlife crisis, and my mother asked several times whether teaching was really so bad.</p>`,
`<p>Eventually I applied for a junior position at a small company that builds software for museums. In the interview, they asked fewer questions about code than about the history projects I had made.</p>`,
`<p>If I have one piece of advice for anyone thinking of a similar change, it is this: don't wait until you feel ready. I never did.</p>`
],
opts:[
"Apparently my teaching background was exactly what they were looking for. They needed someone who could explain technical ideas to curators and visitors.",
"It began, as many changes do, with boredom. I loved my students, but after fifteen years I felt I was repeating the same lessons, and I wanted to build something rather than only explain things.",
"Fortunately, the school paid for me to take an expensive course at a private academy, which made everything much easier.",
"Looking at these projects, I noticed something unexpected: I learned far more from building a terrible website than from watching a perfect video tutorial.",
"It was not. I still enjoyed it, and in fact I kept teaching part-time for my first year as a developer, which helped with the bills.",
"At that point I almost gave up. My friend Ana, who worked in IT, told me that everybody feels stupid at the beginning, and that the trick was to stop studying and start making things.",
"Slowly, the projects grew more ambitious, and for the first time I began to wonder whether I could do this for a living."
],
a:[1,5,3,6,4,0],
e:["A lacuna explica como tudo começou; o parágrafo seguinte começa com «So I started…», consequência do tédio de B.","«She was right» no parágrafo seguinte precisa de uma mulher que deu um conselho: Ana, em F.","«That realisation» retoma a descoberta de D: aprendia mais construindo do que assistindo.","G (pensar em fazer disso uma profissão) prepara «Not everyone was supportive»: as pessoas reagem à ideia da mudança.","A mãe pergunta se dar aula era tão ruim; E responde «It was not».","Depois de dizerem que perguntaram mais sobre os projetos de história, A explica por quê. C é o distrator: contradiz o «free online course» do início."]},
/* ── Part 6 · C1 ── */
{id:'p6-c1', type:'gapped', lvl:'C1', minutes:14, title:'The Quiet Return of the Letter',
parts:[
`<p>Not long ago, a stationery shop in central London reported that sales of writing paper had risen for the third year in a row. In an age of instant messaging, this seems almost perverse. Who, after all, still writes letters?</p>`,
`<p>For some, the appeal is precisely the slowness that once made letters seem obsolete. A message that takes four days to arrive cannot be answered in four seconds, and that delay changes what people are willing to say.</p>`,
`<p>This is not merely nostalgia, although nostalgia certainly plays a part. Psychologists who study communication point out that the medium shapes the message in ways we rarely notice.</p>`,
`<p>Handwriting, by contrast, resists such shortcuts. Crossing out a word leaves a visible trace, and many letter writers say they find these traces oddly moving when they reread old correspondence.</p>`,
`<p>Of course, the revival should not be exaggerated. The number of personal letters sent each year remains a fraction of what it was even twenty years ago, and much of the growth comes from a relatively small group of enthusiasts.</p>`,
`<p>Even so, their numbers appear to be growing, and they are noticeably younger than one might expect.</p>`,
`<p>Perhaps, then, the letter is not returning so much as changing its role. No longer the ordinary way of keeping in touch, it has become something closer to a gift: an object that says, before a single word is read, that someone set aside time for you.</p>`
],
opts:[
"Many members, it turns out, had never received a handwritten letter before joining; for them, the letter is not a memory but a discovery.",
"On a screen, every thought can be deleted and replaced without a trace, and the finished message shows nothing of the hesitations that produced it.",
"Unsurprisingly, the shops that sell this paper are often located in wealthy areas where customers have plenty of free time.",
"Regular letter writers describe the experience in similar terms. Knowing that a reply will not come immediately, they say, frees them to be more reflective and, at times, more honest.",
"The answer, judging by the shop's own customers, is more varied than one might think: students, retired teachers, couples living in different countries.",
"They are, in other words, far from typical, and it would be a mistake to treat their habits as evidence of a wider cultural shift.",
"Several clubs and online communities now exist to connect strangers who wish to exchange letters, some with thousands of members across dozens of countries."
],
a:[4,3,1,6,5,0],
e:["E responde à pergunta «Who still writes letters?», e «For some, the appeal…» continua falando desses clientes.","D («similar terms», «more honest») desenvolve a ideia da demora e leva a «This is not merely nostalgia».","«Handwriting, by contrast» exige algo sobre a tela antes: B.","G (clubes com milhares de membros) é a evidência do «revival» que o parágrafo seguinte diz que não se deve exagerar.","Depois de «a relatively small group of enthusiasts», F conclui que eles não são típicos.","«they are noticeably younger» → A fala desses membros que nunca tinham recebido uma carta, e prepara a conclusão. C é o distrator: nada no texto fala de bairros ricos."]},
/* ── Part 7 · B2 ── */
{id:'p7-b2', type:'match', lvl:'B2', minutes:15, title:'How I Learned English From Screens',
sections:[
["A","Daniela, 34, nurse",`<p>I grew up in a small town where nobody spoke English, so cartoons were my first teachers. I didn't understand much, but I loved the sound of it. As an adult I took classes for years and still felt blocked, until I started watching medical dramas. Because I knew the hospital world, I could guess almost everything from context. Now I sometimes catch myself correcting the medical vocabulary in the subtitles, which my husband finds very annoying.</p>`],
["B","Kenji, 27, game designer",`<p>Honestly, it was video games more than films. Games make you read instructions and dialogue because you need them to win. I learned a lot of strange words that way, like «potion» and «ammunition», long before I knew how to ask for directions. Films came later, and at first they were frustrating: actors speak much faster than game characters. I still turn on English subtitles for anything British.</p>`],
["C","Laura, 41, lawyer",`<p>I was sceptical. I thought watching series was a nice excuse for being lazy. Then I spent a year in Canada for work and realised that my perfect textbook English made me sound like a robot. A colleague suggested I watch one comedy series and nothing else for three months. I did, and I picked up so many expressions that people started asking if I'd lived abroad before. The funny thing is, I still don't really like the series.</p>`],
["D","Tom, 22, student",`<p>My parents are Brazilian, but I was born in Ireland, so English is the language I think in. What I learned from screens was actually Portuguese! I watched Brazilian soap operas with my grandmother every evening. She would explain the jokes I didn't get, and I would explain the internet to her. It's the reason I can now talk to my cousins without switching to English every two minutes.</p>`]
],
q:[
["Who says that knowing the topic helped them understand?",0,"Daniela: «Because I knew the hospital world, I could guess almost everything from context.»"],
["Who was doubtful about learning from series at first?",2,"Laura: «I was sceptical.»"],
["Who learned unusual words before basic everyday phrases?",1,"Kenji: «potion» e «ammunition» antes de saber pedir informações."],
["Who used screens to learn a language other than English?",3,"Tom aprendeu português com novelas."],
["Who mentions that their speech sounded unnatural?",2,"Laura: «my perfect textbook English made me sound like a robot.»"],
["Who still finds one variety of English harder?",1,"Kenji: legendas para tudo que é britânico."],
["Who exchanged help with an older relative?",3,"Tom e a avó: ela explicava as piadas, ele explicava a internet."],
["Who followed a specific piece of advice from a colleague?",2,"Laura: uma série só, por três meses."],
["Whose habit irritates their partner?",0,"Daniela: corrigir as legendas, o que irrita o marido."],
["Who says they don't particularly enjoy what they watched?",2,"Laura: «I still don't really like the series.»"]
]},
/* ── Part 7 · C1 ── */
{id:'p7-c1', type:'match', lvl:'C1', minutes:15, title:'Four Translators on Their Craft',
sections:[
["A","The literary translator",`<p>People imagine that the hardest things to translate are technical terms. In fiction, it's the opposite: technical terms usually have an equivalent, whereas the rhythm of a sentence almost never does. I once spent an entire afternoon on a three-word line of dialogue because the original sounded casual and slightly cruel at the same time, and every version I tried was either one or the other. I don't think readers notice when you get it right, which is exactly how it should be.</p>`],
["B","The subtitler",`<p>My work is shaped by constraints that book translators never face. I have about forty characters per line and a couple of seconds before the image changes, so I'm constantly deciding what to leave out. Viewers sometimes complain that subtitles «don't say what the actor said», and they're right; they can't. What I aim for is that the audience laughs at the same moment as the original audience would have laughed. If that happens, I've done my job.</p>`],
["C","The interpreter",`<p>Unlike translators, I have no time to look anything up, and there's no second draft. That sounds terrifying, and the first year genuinely was. What people don't realise is how much preparation goes on beforehand: for a medical conference I might read for a week. During the session itself, the real skill is not knowing every word but staying calm when you don't, finding a way round the gap so smoothly that nobody notices it.</p>`],
["D","The localiser",`<p>I adapt video games and apps for the Brazilian market, and I'd argue that «translation» is too modest a word for what we do. A joke about American baseball means nothing to a teenager in Recife, so I replace it with something that works locally, even if the words have nothing in common with the original. Some purists find this shocking. My answer is that fidelity to the experience matters more than fidelity to the text.</p>`]
],
q:[
["Who believes that a successful translation should go unnoticed?",0,"A: «I don't think readers notice when you get it right, which is exactly how it should be.»"],
["Who mentions a limit on the number of characters?",1,"B: «about forty characters per line»."],
["Who admits to having found the job very frightening at first?",2,"C: «the first year genuinely was [terrifying]»."],
["Who defends changing content completely for a new audience?",3,"D substitui a piada de beisebol por algo local."],
["Who says that something which seems difficult is actually easier than people think?",0,"A: termos técnicos costumam ter equivalente."],
["Who accepts that audiences' criticism is justified?",1,"B: «they're right; they can't.»"],
["Who stresses the importance of work done before the actual performance?",2,"C: «how much preparation goes on beforehand»."],
["Who measures success by the audience's reaction?",1,"B: o público rir no mesmo momento que o original."],
["Who expects disapproval from traditionalists?",3,"D: «Some purists find this shocking.»"],
["Who describes struggling to keep two qualities of the original together?",0,"A: casual e cruel ao mesmo tempo."]
]},
/* ── IELTS T/F/NG 1 ── */
{id:'tf-1', type:'tfng', lvl:'B2', minutes:15, title:'The Rise of the Paperback',
text:`<p>For most of the history of printing, books were expensive objects. Bound in leather or cloth, they were bought by libraries and wealthy collectors, and ordinary readers depended on lending libraries, which charged a fee to borrow each volume.</p>
<p>This began to change in the nineteenth century, when cheaper paper and faster printing presses made it possible to produce books with soft covers at a fraction of the cost. Railway stations became important places to sell them, since travellers wanted something light to read on long journeys.</p>
<p>The real revolution, however, came in 1935, when a British publisher launched a series of good-quality paperbacks priced at sixpence, the same as a packet of cigarettes. Many booksellers were sceptical, believing that cheap books would damage the market for expensive ones. The first ten titles, which included novels and a biography, sold far better than expected, and within a year the company had sold around three million copies.</p>
<p>The success was copied across the world. In the United States, paperbacks were distributed to soldiers during the Second World War, introducing millions of young men to reading for pleasure. After the war, many of them continued to buy books, and publishers adapted by printing more popular fiction.</p>
<p>Today, despite the growth of e-books, paperbacks remain the most widely sold format in many countries. Some critics argue that this is partly because readers enjoy the physical object; others point simply to price.</p>`,
q:[
["Before the nineteenth century, most ordinary readers could not afford to buy books.","T","O texto diz que os livros eram caros e que leitores comuns dependiam de bibliotecas pagas."],
["Lending libraries offered books free of charge.","F","«which charged a fee to borrow each volume» : o contrário."],
["Railway stations were useful places to sell soft-cover books.","T","«Railway stations became important places to sell them.»"],
["The 1935 paperbacks cost the same as a packet of cigarettes.","T","«priced at sixpence, the same as a packet of cigarettes»."],
["All booksellers welcomed the cheap series.","F","«Many booksellers were sceptical» : então nem todos receberam bem."],
["The first ten titles were all novels.","F","Incluíam também uma biografia."],
["The British publisher later opened offices in the United States.","NG","O texto fala de paperbacks nos EUA, mas não diz nada sobre escritórios da editora."],
["Paperbacks given to soldiers encouraged a habit of reading.","T","«introducing millions of young men to reading for pleasure… many continued to buy books»."],
["E-books now sell more than paperbacks in most countries.","F","«paperbacks remain the most widely sold format in many countries»."],
["Most critics agree that price is the only reason for the paperback's success.","NG","Há críticos com duas opiniões; o texto não diz qual é a maioria nem que preço seja a única razão."]
]},
/* ── IELTS T/F/NG 2 ── */
{id:'tf-2', type:'tfng', lvl:'C1', minutes:15, title:'Sleep and the Learning Brain',
text:`<p>It has long been known that people who are deprived of sleep perform poorly on tests of attention. More surprising is the growing body of evidence that sleep does not merely restore our ability to learn, but actively contributes to the learning process itself.</p>
<p>In a frequently cited experiment, volunteers were taught a list of word pairs in the evening and tested the following morning. Those who had slept normally remembered significantly more than a group who had been kept awake, even when the second group was allowed to recover with a full night's sleep before the test. The researchers concluded that the first night after learning plays a particular role in stabilising new memories.</p>
<p>Brain recordings suggest a possible mechanism. During certain stages of deep sleep, patterns of activity observed while participants were learning appear to be replayed, as though the brain were rehearsing the day's material. Some scientists believe this replay helps transfer information from short-term storage to more permanent networks, although the details remain disputed.</p>
<p>Interestingly, the benefits seem to extend beyond simple memorisation. In one study, participants who slept after struggling with a puzzle were more than twice as likely to discover a hidden shortcut the next day as those who had stayed awake for the same length of time. Sleep, it seems, may help the brain to reorganise information as well as to store it.</p>
<p>For language learners, the practical implications are modest but clear: reviewing new vocabulary shortly before sleep may be more effective than cramming in the early afternoon, and sacrificing sleep to study longer is likely to be counterproductive.</p>`,
q:[
["The effect of sleep deprivation on attention is a recent discovery.","F","«It has long been known» : não é recente."],
["In the word-pair experiment, the volunteers learned the words in the evening.","T","«taught a list of word pairs in the evening»."],
["The group kept awake remembered as much as the others after one night of recovery sleep.","F","Mesmo com a noite de recuperação, lembraram menos."],
["The experiment was carried out with university students.","NG","O texto diz «volunteers», sem especificar quem eram."],
["Scientists fully agree on how memories are transferred during sleep.","F","«the details remain disputed»."],
["Brain activity during learning appears to be repeated during deep sleep.","T","«patterns of activity… appear to be replayed»."],
["In the puzzle study, sleepers were over twice as likely to find a shortcut.","T","«more than twice as likely to discover a hidden shortcut»."],
["Sleep after learning helps people solve puzzles faster in every case.","NG","O texto dá um estudo e uma probabilidade; não fala de velocidade nem de «todos os casos»."],
["The writer suggests reviewing vocabulary before going to bed.","T","«reviewing new vocabulary shortly before sleep may be more effective»."],
["The writer recommends studying late into the night before an exam.","F","«sacrificing sleep to study longer is likely to be counterproductive»."]
]}
];
