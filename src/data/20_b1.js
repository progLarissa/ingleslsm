/* ───────── UNIT 1 ───────── */
U({
id:1, lvl:'B1 → B2', band:1,
title:'Narrative tenses: how novels tell stories',
sub:'Past continuous, past perfect, used to and would · Ler um romance sem se perder no tempo',
focus:'past simple vs past continuous (while, when, as), past perfect and past perfect continuous for earlier events, used to and would for past habits, be/get used to contrast',
lesson:`
<p class="lead">Um romance em inglês alterna quatro tempos para organizar o passado. Reconhecê-los é o que permite saber o que aconteceu antes, o que estava em andamento e o que era hábito, sem precisar traduzir.</p>
<h3>O mapa</h3>
<div class="tw"><table class="tbl">
<tr><th>tempo</th><th>função na história</th><th>exemplo</th></tr>
<tr><td><b>past simple</b></td><td>os fatos principais, em sequência</td><td>She <b>opened</b> the letter and <b>sat</b> down.</td></tr>
<tr><td><b>past continuous</b></td><td>o cenário, a ação interrompida</td><td>It <b>was raining</b>. I <b>was cooking</b> when he <b>called</b>.</td></tr>
<tr><td><b>past perfect</b></td><td>o que aconteceu ANTES do momento da história</td><td>When I arrived, the film <b>had</b> already <b>started</b>.</td></tr>
<tr><td><b>past perfect continuous</b></td><td>duração até um ponto do passado</td><td>Her eyes were red. She <b>had been crying</b>.</td></tr>
</table></div>
<h3>Past perfect: o «mais-que-perfeito»</h3>
<p>É o nosso «tinha feito / havia feito». <i>had + particípio</i> para todas as pessoas, e na fala vira <b>'d</b>: <i>I'd forgotten</i>. Compare:</p>
<div class="chips">When I got to the station, the train <b>left</b>. (cheguei, e aí o trem saiu) · When I got to the station, the train <b>had left</b>. (o trem já tinha saído)</div>
<h3>Hábitos do passado: used to e would</h3>
<p><b>used to</b> = «costumava», para hábitos e estados: <i>I <b>used to</b> live in Recife. I <b>didn't use to</b> like coffee.</i> <b>would</b> só para ações repetidas, muito comum em memórias: <i>Every summer we <b>would</b> drive to the coast.</i> Nunca <s>would</s> para estados: <i>I used to have long hair</i> (não <s>I would have long hair</s>).</p>
<div class="trap"><span class="pen">Cuidado!</span> <b>used to do</b> (hábito passado que acabou) ≠ <b>be used to doing</b> (estar acostumada) ≠ <b>get used to doing</b> (acostumar-se). <i>I'm used to <b>working</b> late. I'm getting used to <b>driving</b> on the left.</i></div>
<div class="trap"><span class="pen">Para quem fala espanhol</span> O past continuous parece o imperfeito (<i>llovía</i>), mas não serve para hábitos: <i>Cuando era niña, jugaba</i> → <i>When I was a child, I <b>used to play</b></i> (não <s>I was playing</s>).</div>
<div class="plus"><span class="pen">Lendo romances</span> Quando o narrador passa para o past perfect, é um flashback. Assim que a história «volta», ele retorna ao past simple. Repare nisso no próximo livro.</div>
`,
reading:{
title:'The Letter',
text:`<p>It was raining when Clara finally found the house. She had been driving for nearly three hours, and the last part of the road had been little more than a muddy [[track|trilha]] through the woods. She switched off the engine and sat for a moment, listening to the rain on the roof.</p>
<p>Her grandmother had lived here for fifty years. When Clara was a child, she used to spend every August in this house. In the mornings they would walk down to the lake, and in the evenings her grandmother would tell stories about the village, half of which, Clara later realised, she had invented.</p>
<p>Clara hadn't been back since the [[funeral|funeral]]. She had always meant to come, but there was always something: a deadline, a move, a new job. Now the house was being sold, and someone had to empty it.</p>
<p>The door was stiff, and the hall smelled of dust and old wood. As she was walking towards the kitchen, she noticed an envelope on the floor. Someone had pushed it under the door. It was addressed to her, in handwriting she didn't recognise, and it was dated two days earlier.</p>
<p>Nobody knew she was coming. She hadn't told anyone. With [[shaking|trêmulas]] hands, she opened it.</p>`,
q:[
["How long had Clara been driving when she arrived?",["Half an hour","Almost three hours","All day","Fifty years"],1,"Past perfect continuous: duração até a chegada."],
["What did Clara and her grandmother do in the mornings?",["They told stories","They walked to the lake","They cooked","They drove to the village"],1,"«In the mornings they would walk down to the lake»: would para hábito."],
["What did Clara later understand about the stories?",["They were true","Many were invented","They were about her mother","They were written down"],1],
["Why hadn't Clara come back before?",["She didn't like the house","She was always busy","She didn't have a car","Her grandmother didn't want her"],1],
["Why is the letter strange?",["It was in Italian","Nobody knew she was coming","It had no stamp","It was very old"],1,"Ninguém sabia que ela vinha."]
]},
ex:[
{t:'fill', title:'Choose the narrative tense', items:[
["I ___ dinner when the lights went out. (cook)",["was cooking"],"Ação em andamento interrompida."],
["When we got to the cinema, the film ___ already ___. (start)",[["had"],["started"]],"Aconteceu antes: past perfect."],
["She was tired because she ___ all night. (work, continuous)",["had been working","'d been working"]],
["I ___ have long hair when I was a teenager. (use)",["used to"]],
["Every Sunday my grandfather ___ take us to the park. (would)",["would"]],
["___ you use to play any sport at school? (do, past)",["did"]],
["We ___ like each other at first, but now we're best friends. (not use to)",["didn't use to","did not use to"]],
["It's my first month in London, and I'm still getting used to ___ on the left. (drive)",["driving"],"Get used to + -ing."],
["While I ___ the news, I fell asleep. (watch)",["was watching"]],
["He realised he ___ his wallet at home. (leave)",["had left","'d left"]],
["As I ___ along the beach, I saw a dolphin. (walk)",["was walking"]],
["By the time the police arrived, the thieves ___. (escape)",["had escaped","'d escaped"]]
]},
{t:'mc', title:'Choose the right option', items:[
["«Quando cheguei, ela já tinha saído.»",["When I arrived, she left.","When I arrived, she had left.","When I had arrived, she was leaving."],1],
["Which sentence is NOT correct?",["I used to live in Rio.","I would live in Rio.","Every summer we would go to the beach."],1,"Would não serve para estados como live."],
["«I'm used to getting up early» means…",["I got up early in the past","I'm accustomed to getting up early","I want to get up early"],1],
["«She had been crying» suggests…",["she is crying now","she cried before that moment, for some time","she will cry"],1],
["When she phoned, I ___ a shower.",["had","was having","have had"],1],
["In a novel, a sudden change to the past perfect usually means…",["a flashback","the future","a dream"],0]
]},
{t:'fix', title:'Correct the underlined part', items:[
["When I was a child, I {was playing} football every day.",["used to play","played"],"When I was a child, I used to play football every day."],
["I'm not used to {get} up so early.",["getting"],"I'm not used to getting up so early."],
["When I got to the airport, the plane {already left}.",["had already left"],"When I got to the airport, the plane had already left."],
["Did you {used to} smoke?",["use to"],"Did you use to smoke?"],
["While I {walked} home, it started to snow.",["was walking"],"While I was walking home, it started to snow."]
]}
],
write:{
task:'Write the opening of a short story (or a true memory) that begins with a strange discovery. Set the scene, include something that had happened before, and describe a past habit.',
words:[150,200],
targets:[
{l:'3 past continuous', re:'<(was|were)\\s+(not\\s+)?W+ing>', n:3},
{l:'3 past perfect (had + participle)', re:"(<had|'d)\\s+(already\\s+|never\\s+|not\\s+|just\\s+)?(been|W+ed|done|gone|seen|left|taken|made|told|found|lost|forgotten|written|known|given|come|become|begun|broken|chosen|spoken|stolen|hidden)>", n:3},
{l:'1 used to', re:'<use(d)? to>', n:1},
{l:'1 would for a past habit', manual:true}
],
model:`I was cleaning out my father's old desk when I found the photograph. It was hiding under a pile of bills, and someone had written a date on the back: 12 June 1979. Two people were standing in front of a small café by the sea, laughing at something outside the picture.

The man was obviously my father, but much younger. The woman wasn't my mother. I had never seen her before.

My father used to be a very quiet man. When I was a child, he would sit in the garden every evening with a book and a cup of tea, and he would hardly say a word. He had never mentioned any travels, any friends from before, anything at all.

I turned the photo over again. Under the date, in tiny letters, he had added a name: "Ines". I realised my hands were shaking.`
}
});
ORDER[1]=[
["I was having a shower when the phone rang.",["The phone rang when I was having a shower."]],
["She had never seen the sea before that trip.",[]],
["We used to spend every summer at our grandparents' house.",[]],
["By the time we arrived, everyone had gone home.",["Everyone had gone home by the time we arrived."]],
["I'm getting used to working from home.",[]]
];
USPEAK[1]={p:['What did you use to do as a child that you don\'t do now?','Tell a story that starts with «I was walking home when…».','Describe a place you used to visit every year.','Have you ever arrived somewhere too late? What had happened?','What are you still getting used to in your life?'],v:['narrative tenses past perfect continuous','used to vs be used to vs get used to']};

/* ───────── UNIT 2 ───────── */
U({
id:2, lvl:'B1 → B2', band:1,
title:'Phrasal verbs I: the ones every film uses',
sub:'get, take, put, come, go, look, find out, figure out · O vocabulário que falta nas legendas',
focus:'high-frequency phrasal verbs with get, take, put, come, go, look, turn, find, figure, give, run, work; separable vs inseparable; object pronoun position (turn it off, not turn off it)',
lesson:`
<p class="lead">Nativos quase nunca dizem <i>discover, continue, tolerate, postpone</i> numa conversa. Dizem <b>find out, carry on, put up with, put off</b>. Sem os phrasal verbs, um filme parece rápido demais; com eles, metade da dificuldade desaparece.</p>
<h3>O que são</h3>
<p>Verbo + partícula (<i>up, out, off, on, in, back, down, away, over</i>) com um sentido novo, muitas vezes impossível de adivinhar: <i>give up</i> não é «dar para cima», é desistir.</p>
<h3>30 essenciais</h3>
<div class="tw"><table class="tbl">
<tr><th>phrasal verb</th><th>sentido</th><th>phrasal verb</th><th>sentido</th></tr>
<tr><td>find out</td><td>descobrir (informação)</td><td>figure out</td><td>entender, resolver</td></tr>
<tr><td>give up</td><td>desistir; parar (de fumar)</td><td>carry on / go on</td><td>continuar</td></tr>
<tr><td>get up</td><td>levantar-se</td><td>get on (with)</td><td>dar-se bem (com)</td></tr>
<tr><td>get over</td><td>superar</td><td>get back</td><td>voltar</td></tr>
<tr><td>look for</td><td>procurar</td><td>look after</td><td>cuidar de</td></tr>
<tr><td>look forward to</td><td>aguardar ansiosamente</td><td>look up</td><td>procurar (no dicionário)</td></tr>
<tr><td>put off</td><td>adiar</td><td>put on</td><td>vestir; ligar</td></tr>
<tr><td>take off</td><td>tirar (roupa); decolar</td><td>take up</td><td>começar (hobby)</td></tr>
<tr><td>turn on / off</td><td>ligar / desligar</td><td>turn down</td><td>recusar; abaixar (volume)</td></tr>
<tr><td>come up</td><td>surgir</td><td>come across</td><td>encontrar por acaso</td></tr>
<tr><td>run out of</td><td>ficar sem</td><td>break down</td><td>quebrar (carro); desabar</td></tr>
<tr><td>work out</td><td>malhar; dar certo; calcular</td><td>pick up</td><td>pegar; buscar alguém</td></tr>
<tr><td>show up</td><td>aparecer</td><td>hang out</td><td>sair, passar tempo</td></tr>
<tr><td>calm down</td><td>acalmar-se</td><td>hold on</td><td>espera aí!</td></tr>
<tr><td>make up</td><td>inventar; fazer as pazes</td><td>break up</td><td>terminar (namoro)</td></tr>
</table></div>
<h3>Separáveis e inseparáveis</h3>
<p>Muitos aceitam o objeto no meio: <i>turn <b>the TV</b> off</i> ou <i>turn off <b>the TV</b></i>. Mas com pronome, o pronome <b>tem</b> de ir no meio: <i>turn <b>it</b> off</i> (nunca <s>turn off it</s>), <i>pick <b>me</b> up at eight</i>.</p>
<p>Outros são inseparáveis: <i>look <b>after</b> the kids / look after <b>them</b></i>, <i>get <b>over</b> it</i>, <i>come <b>across</b> it</i>.</p>
<div class="trap"><span class="pen">Cuidado!</span> <i>look forward to</i> termina em preposição: depois vem <b>-ing</b>: <i>I look forward to <b>hearing</b> from you</i> (não <s>to hear</s>).</div>
<div class="plus"><span class="pen">Estratégia</span> Não decore listas soltas: anote cada phrasal verb com a frase do filme onde o ouviu, em «My words». A cena ajuda a memória mais do que a tradução.</div>
`,
reading:{
title:'The Interview',
text:`<p>I almost didn't show up. The night before the interview, I'd [[run out of|ficado sem]] coffee, my laptop had broken down, and I'd spent hours trying to figure out how to save my presentation. At two in the morning I nearly gave up and went to bed.</p>
<p>But I carried on, and in the end I worked it out: I [[sent|enviei]] the file to my phone and borrowed my neighbour's laptop. She's always been kind; she looks after my cat when I'm away, and we get on really well.</p>
<p>The next morning I got up early, put on my best jacket and took the bus into town. Halfway there, the bus broke down too. I couldn't believe it. I jumped out, picked up a taxi and arrived with two minutes to spare.</p>
<p>The interview went well, until a question came up that I hadn't prepared for: "Tell us about a time you failed." My mind went blank. Then I just told them about the night before. They laughed, and one of them said, "Well, you didn't give up, did you?"</p>
<p>A week later they called to offer me the job. I found out afterwards that the other [[candidate|candidato]] had turned it down, but I don't care. I start on Monday, and I'm really looking forward to it.</p>`,
q:[
["What happened the night before the interview?",["She slept well","Her laptop stopped working","She lost her phone","She met her neighbour for coffee"],1,"«my laptop had broken down»"],
["How did she solve the problem?",["She bought a new laptop","She borrowed her neighbour's laptop","She cancelled the interview","She called a technician"],1],
["«We get on really well» means…",["we argue a lot","we have a good relationship","we travel together","we work together"],1],
["What came up during the interview?",["A difficult question","A technical problem","Another candidate","A taxi"],0],
["What did she find out later?",["The other candidate refused the job","She was the only candidate","The interviewers knew her neighbour","The job was cancelled"],0,"Turn down = recusar."]
]},
ex:[
{t:'fill', title:'Complete with the right particle', items:[
["I need to find ___ what time the shop closes.",["out"]],
["Don't give ___! You're almost there.",["up"]],
["Can you look ___ my plants while I'm away?",["after"]],
["We've run out ___ milk. Can you buy some?",["of"]],
["The meeting was put ___ until next week.",["off"],"Put off = adiar."],
["I can't figure ___ how this app works.",["out"]],
["It's cold. Put your coat ___.",["on"]],
["She broke ___ with her boyfriend last month.",["up"]],
["I came ___ some old photos while I was cleaning.",["across"]],
["Hold ___, I'll be back in a second.",["on"]],
["The radio is too loud. Can you turn it ___?",["down"]],
["I'm looking forward to ___ you next week. (see)",["seeing"]]
]},
{t:'mc', title:'Choose the right meaning', items:[
["«He didn't show up» means…",["he didn't appear","he didn't show something","he didn't get up"],0],
["«It took me ages to get over the flu» means…",["to catch it","to recover from it","to talk about it"],1],
["Which sentence is correct?",["Turn off it, please.","Turn it off, please.","Turn it please off."],1],
["«Let's hang out on Saturday.»",["Let's work on Saturday.","Let's spend time together on Saturday.","Let's go shopping on Saturday."],1],
["«Things worked out in the end» means…",["they went to the gym","they ended well","they were calculated"],1],
["«She took up yoga last year» means…",["she stopped yoga","she started yoga","she taught yoga"],1]
]},
{t:'fix', title:'Correct the underlined part', items:[
["I'm looking for my keys. Can you help me {look them for}?",["look for them"],"Can you help me look for them?"],
["The TV is on. Please {turn off it}.",["turn it off"],"Please turn it off."],
["I look forward to {hear} from you.",["hearing"],"I look forward to hearing from you."],
["She {discovered} the truth when she read his messages. (more natural)",["found out"],"She found out the truth…"],
["He couldn't {continue} because he was too tired. (more natural)",["carry on","go on"],"He couldn't carry on…"]
]}
],
write:{
task:'Tell the story of a day when everything went wrong but worked out in the end. Use as many phrasal verbs as you can, naturally.',
words:[140,190],
targets:[
{l:'8 phrasal verbs (verb + up/out/off/on/over/down…)', re:'<(get|got|gets|getting|give|gave|given|find|found|figure|figured|look|looked|looking|put|putting|take|took|taken|turn|turned|come|came|run|ran|break|broke|broken|work|worked|pick|picked|show|showed|hang|calm|hold|make|made|carry|carried|go|went|set|sort|sorted|end|ended|wake|woke|check|checked)\\s+(up|out|off|on|over|down|back|across|after|around|away|in)>', n:8},
{l:'1 phrasal verb with a pronoun in the middle (turn it off)', re:'<W+\\s+(it|them|him|her|me|us)\\s+(up|out|off|on|over|down|back|away)>', n:1},
{l:'1 look forward to + -ing', manual:true}
],
model:`Last Friday started badly. My alarm didn't go off, so I got up an hour late. I put on the first clothes I found and ran out of the house without breakfast. Of course, the metro broke down between two stations, and we were stuck for twenty minutes.

When I finally got to the office, I found out that the client had moved the meeting forward. I hadn't prepared anything. I nearly gave up, but my colleague Sara calmed me down and helped me sort it out. We figured out a plan in ten minutes and carried on as if nothing had happened.

The meeting went really well. The client even asked us to take on a second project. In the evening I turned off my phone, picked up a pizza and hung out with my sister.

Next week I'm working from home, and honestly, I'm looking forward to sleeping in.`
}
});
ORDER[2]=[
["I need to find out where she lives.",[]],
["Can you pick me up at eight?",[]],
["We've run out of coffee again.",[]],
["She gave up smoking three years ago.",["Three years ago she gave up smoking."]],
["Please turn it off before you go to bed.",[]]
];
USPEAK[2]={p:['What time do you usually get up, and what do you put on for work?','Have you ever given up something? How did it go?','Who do you get on with best in your family?','What are you looking forward to this year?','Tell me about a problem you figured out on your own.'],v:['most common phrasal verbs in movies','phrasal verbs with get']};

/* ───────── UNIT 3 ───────── */
U({
id:3, lvl:'B1 → B2', band:1,
title:'Conditionals: real, unreal and impossible',
sub:'If it rains… If I were you… If I had known… · unless, as long as, in case',
focus:'zero, first, second and third conditionals; if I were you; unless, as long as, provided that, in case; would in the result clause only, never in the if-clause',
lesson:`
<p class="lead">O inglês organiza as hipóteses em quatro tipos. A regra de ouro, oposta ao que muita gente faz: <b>nunca will nem would na oração com if</b> (salvo raros casos de cortesia).</p>
<h3>Os quatro condicionais</h3>
<div class="tw"><table class="tbl">
<tr><th>tipo</th><th>if…</th><th>resultado</th><th>exemplo</th></tr>
<tr><td>0 · sempre verdade</td><td>present</td><td>present</td><td>If you heat ice, it <b>melts</b>.</td></tr>
<tr><td>1 · possível, futuro real</td><td>present</td><td>will / can / imperativo</td><td>If it <b>rains</b>, we<b>'ll stay</b> home.</td></tr>
<tr><td>2 · imaginário, presente</td><td>past simple</td><td>would / could</td><td>If I <b>had</b> more time, I<b>'d read</b> more.</td></tr>
<tr><td>3 · impossível, passado</td><td>past perfect</td><td>would have + particípio</td><td>If I <b>had known</b>, I <b>would have helped</b>.</td></tr>
</table></div>
<h3>Correspondência com o português</h3>
<p>Tipo 2: «se eu <b>tivesse</b> tempo, eu <b>leria</b>» → <i>If I <b>had</b> time, I <b>would</b> read</i>. Tipo 3: «se eu <b>tivesse sabido</b>, <b>teria ajudado</b>» → <i>If I <b>had known</b>, I <b>would have helped</b></i>. Onde o português usa o subjuntivo, o inglês usa um tempo passado.</p>
<div class="trap"><span class="pen">Cuidado!</span> <s>If I would have time</s> → <i>If I <b>had</b> time</i>. <s>If I will see him</s> → <i>If I <b>see</b> him</i>.</div>
<h3>If I were you</h3>
<p>Para conselhos: <i>If I <b>were</b> you, I'd take the job.</i> Na fala ouve-se <i>If I was</i>, mas em provas use <b>were</b>.</p>
<h3>Outras conjunções</h3>
<div class="chips"><b>unless</b> = if not: I won't go unless you come · <b>as long as / provided that</b> = desde que · <b>in case</b> = caso (prevenção): Take an umbrella in case it rains · <b>otherwise</b> = senão</div>
<div class="plus"><span class="pen">Na fala</span> Nos filmes, o tipo 3 vira quase um sussurro: <i>If I'd known, I would've told you</i> soa «if-aid-nown, ai-wuda-told-ya». Treine o <i>would've / could've / should've</i>.</div>
`,
reading:{
title:'Lessons from a Missed Flight',
text:`<p>Three years ago I missed a flight to Lisbon, and it changed my life. If I hadn't stayed in that coffee shop for one more chapter of my book, I would have caught the plane. And if I had caught the plane, I would never have met Tom.</p>
<p>He was at the [[airline desk|balcão da companhia aérea]], arguing politely about his own missed flight. We were put on the same [[standby list|lista de espera]], and we spent six hours talking about books, terrible jobs and what we would do if we won the lottery. (He would buy a farm. I would open a bookshop with a café, obviously.)</p>
<p>People often ask me if I believe in fate. I'm not sure. If you leave a coffee shop two minutes earlier, you meet different people and live a different life; that's just how it works. But I do believe that unless you say yes to small accidents, nothing interesting ever happens.</p>
<p>So here's my advice. If your plans go wrong, don't panic straight away. Pack a book in case you get stuck somewhere. And if a stranger at an airport recommends a novel, read it, as long as it isn't too long. You never know where it might take you.</p>`,
q:[
["Why did the writer miss the flight?",["The traffic was bad","She was reading in a coffee shop","The flight was cancelled","She lost her passport"],1],
["Where did she meet Tom?",["On the plane","At the airline desk","In Lisbon","In a bookshop"],1],
["What would she do if she won the lottery?",["Buy a farm","Open a bookshop café","Travel the world","Stop working"],1],
["What does she believe?",["Everything is decided by fate","Small accidents can lead to interesting things","You should never change plans","Airports are dangerous"],1,"«unless you say yes to small accidents, nothing interesting ever happens.»"],
["«Pack a book in case you get stuck» means…",["only if you get stuck","to be prepared if you get stuck","because you will get stuck"],1]
]},
ex:[
{t:'fill', title:'Complete the conditionals', items:[
["If it ___ tomorrow, we'll cancel the picnic. (rain)",["rains"]],
["If I ___ you, I'd talk to her. (be)",["were","was"]],
["If we had more money, we ___ a bigger flat. (buy)",["would buy","'d buy","could buy"]],
["If I ___ about the party, I would have come. (know)",["had known","'d known"]],
["She ___ the exam if she had studied more. (pass)",["would have passed","'d have passed","would've passed"]],
["If you mix blue and yellow, you ___ green. (get)",["get"]],
["I won't go ___ you come with me. (unless/if)",["unless"]],
["Take some cash ___ the card machine doesn't work. (in case/unless)",["in case"]],
["You can borrow my car as ___ as you bring it back by six.",["long"]],
["What would you do if you ___ the lottery? (win)",["won"]],
["If he hadn't missed the bus, he ___ late. (not be)",["wouldn't have been","would not have been"]],
["If I see Paula, I ___ her you called. (tell)",["will tell","'ll tell"]]
]},
{t:'mc', title:'Choose the right sentence', items:[
["«Se eu tivesse tempo, eu viajaria mais.»",["If I would have time, I would travel more.","If I had time, I would travel more.","If I have time, I would travel more."],1],
["«Se eu tivesse sabido, teria vindo.»",["If I knew, I would come.","If I had known, I would have come.","If I would have known, I had come."],1],
["Which sentence is correct?",["If I will see her, I will tell her.","If I see her, I will tell her.","If I saw her, I will tell her."],1],
["«Unless you hurry, you'll miss the train» =",["If you hurry, you'll miss the train.","If you don't hurry, you'll miss the train.","Because you hurry, you'll miss the train."],1],
["Which is a third conditional?",["If I had wings, I'd fly.","If I'd had wings, I'd have flown.","If I have wings, I'll fly."],1],
["«I'll lend it to you provided that you return it.» provided that =",["unless","as long as","in case"],1]
]},
{t:'fix', title:'Correct the underlined part', items:[
["If I {would be} rich, I'd buy a house in Portugal.",["were","was"],"If I were rich, I'd buy a house in Portugal."],
["If it {will rain}, we'll stay at home.",["rains"],"If it rains, we'll stay at home."],
["If I had known, I {would help} you.",["would have helped","'d have helped","would've helped"],"If I had known, I would have helped you."],
["I'll take a jacket {unless} it gets cold.",["in case"],"I'll take a jacket in case it gets cold."],
["If I {would have seen} him, I'd have said hello.",["had seen","'d seen"],"If I had seen him, I'd have said hello."]
]}
],
write:{
task:'Write about a decision or an accident that changed your life. Imagine what would have happened if things had been different, and what you would do now in a different situation.',
words:[150,200],
targets:[
{l:'2 third conditionals (If… had…, … would have…)', re:"<(would|could|might|wouldn't|couldn't)\\s+(never\\s+|not\\s+)?have>|'d\\s+have>|<(would|could|might)'ve>", n:2},
{l:'2 second conditionals (would / could + verb)', re:"(<would|'d|<could)\\s+(not\\s+)?(?!have)W+>", n:2},
{l:'1 first conditional (If + present, will…)', manual:true},
{l:'1 unless / as long as / in case', re:'<(unless|as long as|provided that|in case)>', n:1}
],
model:`In 2016 I almost didn't apply for my first programming job. I had studied architecture, and I thought nobody would hire someone without a computer science degree. If my friend Júlia hadn't sent me the advert, I would never have applied. And if I hadn't got that job, I wouldn't have moved to Spain.

Sometimes I wonder what my life would be like if I had stayed in architecture. I would probably live in Curitiba, near my parents, and I might have a house instead of a flat. I don't think I would be happier, though. I love solving problems with code.

Now I try to say yes to opportunities, as long as they don't take over my whole life. If a friend sends me something interesting, I'll read it carefully. You never know: unless you try, you'll never find out.`
}
});
ORDER[3]=[
["If I were you, I'd accept the offer.",["I'd accept the offer if I were you."]],
["We'll miss the train unless we leave now.",["Unless we leave now we'll miss the train."]],
["If she had called me, I would have helped her.",["I would have helped her if she had called me."]],
["Take an umbrella in case it rains.",[]],
["What would you do if you lost your job?",[]]
];
USPEAK[3]={p:['What would you do if you didn\'t have to work?','If you could live in any city, where would you live?','What would have happened if you hadn\'t studied programming?','What will you do if it rains this weekend?','If you were the president for a day, what would you change?'],v:['conditionals 0 1 2 3 explained','would\'ve could\'ve should\'ve pronunciation']};
