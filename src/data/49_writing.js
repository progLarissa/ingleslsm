/* ───────── WRITING EXAMS ───────── */
const WGENRE = {
essay:{name:'Essay', guide:`Registro formal ou neutro, sem contrações. <b>Estrutura:</b> introdução que reformula a pergunta → um parágrafo por ponto (ideia + explicação + exemplo) → conclusão com a sua opinião clara. Na Cambridge, você precisa tratar os pontos dados e, no B2, acrescentar uma ideia sua.`,
 ph:['It is often argued that…','There are several reasons why…','One major advantage of… is that…','On the other hand, it could be argued that…','A further point to consider is…','For instance, …','Taking everything into account, I believe that…']},
email:{name:'E-mail / letter', guide:`Responda a <b>todas</b> as perguntas ou pontos da mensagem recebida. Para um amigo: informal, com contrações e expressões naturais. Para uma empresa: formal, sem contrações. Comece e termine de forma adequada ao destinatário.`,
 ph:['Thanks so much for your email!','It was great to hear from you.','You asked me about…','If I were you, I\'d…','I am writing to complain about…','I would be grateful if you could…','I look forward to hearing from you.']},
review:{name:'Review', guide:`O leitor quer saber se vale a pena. <b>Estrutura:</b> título → apresentação (o que é, onde, quem) → o que é bom e o que é fraco, com detalhes concretos → recomendação clara (para quem?). Use adjetivos variados e algum toque pessoal.`,
 ph:['If you are looking for…, look no further.','What makes it special is…','The only drawback is…','Although…, it is well worth…','I would highly recommend it to anyone who…','It is not for everyone, but…']},
report:{name:'Report', guide:`Texto para um chefe, diretor ou comitê: objetivo e organizado. <b>Use títulos</b> (Introduction, …, Recommendations), frases impessoais e a passiva. Diga o objetivo no início e termine com recomendações concretas.`,
 ph:['The aim of this report is to…','This report is based on…','It was found that…','A majority of staff reported that…','It is therefore recommended that…','In conclusion, …']},
proposal:{name:'Proposal', guide:`Parecido com o report, mas olha para o <b>futuro</b>: você propõe algo e convence. Use títulos, explique a situação atual, apresente as suas sugestões e os benefícios esperados. Tom formal e persuasivo.`,
 ph:['The purpose of this proposal is to…','At present, …','I would suggest that…','One option would be to…','This would not only…, but also…','I strongly believe that these measures would…']},
article:{name:'Article', guide:`Para uma revista ou site: o objetivo é <b>prender o leitor</b>. Título chamativo, abertura com pergunta ou situação, tom vivo e pessoal, fale diretamente com o leitor e feche com uma ideia que fique na cabeça.`,
 ph:['Have you ever wondered…?','Imagine…','Let me tell you about…','Believe it or not, …','The best part is…','So, next time you…, why not…?']},
task1:{name:'IELTS Task 1 (graph)', guide:`Descreva dados, <b>não opine</b>. <b>Estrutura:</b> introdução (reformule o título) → overview com as 2 ou 3 tendências principais (essencial para nota alta) → dois parágrafos com números e comparações. Mínimo 150 palavras, 20 minutos.`,
 ph:['The bar chart compares…','Overall, it is clear that…','The most striking feature is…','…rose significantly from…% to…%','…remained relatively stable at…','In contrast, …','…was roughly twice as high as…']},
task2:{name:'IELTS Task 2 (essay)', guide:`Ensaio de opinião ou discussão, 250 palavras, 40 minutos. Responda <b>exatamente</b> à pergunta (To what extent do you agree? Discuss both views…). Posição clara já na introdução e mantida até a conclusão. Dois ou três parágrafos de desenvolvimento, cada um com uma ideia principal.`,
 ph:['It is sometimes argued that…','I completely agree / partly agree that…','The main reason for this is that…','A clear example of this is…','Admittedly, …; however, …','In conclusion, while…, I firmly believe that…']}
};

const WEXAMS = [
{id:'b2-essay', exam:'cam', lvl:'B2', g:'essay', minutes:40, words:[140,190], title:'Screens and children',
 prompt:`<p>In your English class you have been talking about technology and young people. Now your teacher has asked you to write an essay.</p><blockquote><b>Should there be strict limits on how much time children spend in front of screens?</b><br>Notes — write about:<br>1. health<br>2. education<br>3. ……… (your own idea)</blockquote>`,
 model:`Most children today spend several hours a day looking at phones, tablets or televisions. Some people believe that parents and schools should set strict limits, while others think this is unnecessary. In my view, limits are useful, but they should be flexible.

Firstly, there are clear health reasons for limiting screen time. Children who spend too long in front of a screen often sleep worse and do less exercise. As a result, they may have problems with concentration and even with their weight.

On the other hand, screens can be excellent tools for learning. Educational apps and videos can explain difficult topics in an attractive way, and many schools now use tablets in class. Banning them completely would not make sense.

Another point is family life. When everyone is looking at a different screen, families talk less. Simple rules, such as no phones at dinner, can make a real difference.

To sum up, I believe that limits are necessary, but they should focus on how screens are used, not only on how long.`},
{id:'b2-email', exam:'cam', lvl:'B2', g:'email', minutes:40, words:[140,190], title:'Advice for a friend',
 prompt:`<p>You have received this email from your English-speaking friend, Sam.</p><blockquote>I've just been offered a job in Lisbon, but I don't speak any Portuguese! I start in three months. What's the best way to learn quickly? And what should I know about living there? Any other tips? Thanks! Sam</blockquote><p>Write your <b>email</b>.</p>`,
 model:`Hi Sam,

Congratulations on the new job! That's fantastic news, and Lisbon is a wonderful city, so you're going to love it.

Don't worry about the language. Three months is enough to learn the basics if you study a little every day. I'd start with an app for twenty minutes a day, and then find a conversation partner online as soon as possible. Speaking from the beginning is the best way to lose the fear. You should also watch Portuguese series with subtitles; it's a great way to get used to the sound.

As for living there, remember that the city is full of hills, so bring comfortable shoes! Rents in the centre can be expensive, so you might want to look at neighbourhoods a bit further out. People are very friendly, and they really appreciate it when foreigners try to speak Portuguese, even badly.

One last tip: try the custard tarts as soon as you arrive. You won't regret it!

Let me know if you need anything else.

Best wishes,
Larissa`},
{id:'b2-review', exam:'cam', lvl:'B2', g:'review', minutes:40, words:[140,190], title:'A series that made you laugh',
 prompt:`<p>You see this announcement on an English-language website.</p><blockquote><b>Reviews wanted!</b><br>Tell us about a TV series that made you laugh. What is it about? What makes it funny? Would you recommend it to people who are learning English?<br>The best reviews will be published next month.</blockquote><p>Write your <b>review</b>.</p>`,
 model:`Ted Lasso: kindness has never been so funny

If you're looking for a series that will make you smile from the first episode, look no further than Ted Lasso. It tells the story of an American football coach who is hired to manage an English football team, although he knows absolutely nothing about the sport.

What makes it so funny is the contrast between Ted's endless optimism and the cynical people around him. His jokes are often terrible, but his kindness slowly changes everyone, and you find yourself laughing and crying in the same scene.

For English learners, it's a real treasure. You can hear American and several British accents side by side, and the dialogue is full of everyday expressions. The only drawback is that some characters speak very fast, so I'd recommend using English subtitles at first.

All in all, I would highly recommend Ted Lasso to anyone who needs a good laugh and wants to improve their listening at the same time.`},
{id:'b2-report', exam:'cam', lvl:'B2', g:'report', minutes:40, words:[140,190], title:'Studying at the local library',
 prompt:`<p>The director of your local library wants to attract more young adults. He has asked you to write a report explaining what the library offers now, what young people think of it, and what changes you recommend.</p><p>Write your <b>report</b>.</p>`,
 model:`Introduction
The aim of this report is to describe the current facilities of the library, summarise the opinions of young adults and recommend some changes. It is based on a short survey of thirty people aged between 18 and 30.

Current facilities
The library has a large collection of books and a quiet reading room. It is open from 10 a.m. to 6 p.m. on weekdays and closed at weekends.

Opinions of young adults
Most people surveyed said that the building is pleasant, but the opening hours are a problem, as many of them work or study during the day. Several also complained that the Wi-Fi is slow and that there are very few power sockets.

Recommendations
It is recommended that the library should open in the evenings and on Saturday mornings. Improving the Wi-Fi and adding more sockets would make it a popular place to study. Finally, organising monthly book clubs or film nights would help attract new visitors.`},
{id:'c1-essay', exam:'cam', lvl:'C1', g:'essay', minutes:45, words:[220,260], title:'Encouraging people to read',
 prompt:`<p>Your class has attended a panel discussion on how governments could encourage adults to read more. You have made the notes below.</p><blockquote><b>Ways governments could encourage reading:</b><br>• public libraries<br>• lower prices for books<br>• national reading campaigns<br><i>Some opinions expressed in the discussion:</i><br>«Libraries are the heart of a community.»<br>«People would read more if books were cheaper.»<br>«Adverts won't change anyone's habits.»</blockquote><p>Write an <b>essay</b> discussing <b>two</b> of the ways in your notes. You should <b>explain which way you think would be more effective</b>, giving reasons in support of your answer.</p>`,
 model:`Although reading is widely recognised as beneficial, surveys suggest that many adults hardly ever open a book. Governments have several tools at their disposal to change this, and two of the most frequently discussed are investing in public libraries and making books cheaper.

Supporters of lower prices argue that cost is the main barrier. If books were exempt from tax, the reasoning goes, more people would buy them. There is some truth in this, particularly for families on low incomes. However, price alone rarely explains behaviour: many people who could easily afford a novel still choose to spend their free time on their phones. Cheaper books might simply mean that those who already read would buy more.

Public libraries, by contrast, address not only cost but also access and habit. A well-funded library offers books free of charge, but it also offers a quiet place to read, advice from librarians and activities such as book clubs or author talks. Crucially, it reaches people who would never walk into a bookshop, including children, the elderly and newcomers to the country. In this sense, a library does more than supply books: it creates readers.

In conclusion, while reducing prices could be a welcome measure, I believe that investing in libraries would be considerably more effective. Not only do they remove the financial barrier, but they also build the kind of community in which reading becomes a natural part of everyday life.`},
{id:'c1-proposal', exam:'cam', lvl:'C1', g:'proposal', minutes:45, words:[220,260], title:'Wellbeing at work',
 prompt:`<p>The company you work for wants to improve the wellbeing of its employees and has invited staff to submit proposals. You decide to write a proposal describing the main problems that affect staff wellbeing at the moment, suggesting <b>two or three changes</b>, and explaining how these changes would benefit both the staff and the company.</p><p>Write your <b>proposal</b>.</p>`,
 model:`Introduction
The purpose of this proposal is to identify the main factors affecting staff wellbeing in our department and to suggest practical changes that could be introduced in the coming months.

Current situation
At present, many employees report feeling under pressure. Meetings frequently run late, messages arrive at all hours, and there is no clear expectation about when staff may disconnect. In addition, the office has very few quiet spaces, which makes concentrated work difficult.

Suggested changes
Firstly, I would suggest introducing a «no meetings» afternoon each week, allowing everyone to focus on their main tasks without interruption. Secondly, the company could adopt a simple policy stating that emails and chat messages sent after 7 p.m. do not require a reply until the following morning. Finally, one of the smaller meeting rooms could be turned into a quiet room for focused work or short breaks.

Expected benefits
These measures would not only reduce stress but also improve productivity, as staff would be able to concentrate for longer periods. Furthermore, a company that visibly cares about its employees is more likely to retain experienced staff, which would reduce the considerable costs of recruitment and training.

Conclusion
None of these changes would require significant investment. I strongly believe that, taken together, they would make a noticeable difference to the wellbeing of the team and, consequently, to the results of the company.`},
{id:'c1-review', exam:'cam', lvl:'C1', g:'review', minutes:45, words:[220,260], title:'Book or film?',
 prompt:`<p>An international magazine is running a series called <b>«Book or film?»</b>. Readers are invited to send in a review of a novel that has been made into a film, comparing the two and saying which they think is more successful and why.</p><p>Write your <b>review</b>.</p>`,
 model:`The Martian: when the film almost beats the book

Andy Weir's The Martian began life as a self-published online novel before becoming a bestseller and, in 2015, a Hollywood blockbuster. Having enjoyed both, I was surprised to find the comparison far closer than I had expected.

The novel is essentially the diary of Mark Watney, an astronaut left alone on Mars after his crew believe he has died. Its greatest strength is its voice: Watney is sarcastic, nerdy and relentlessly practical, and the technical detail, which might sound tedious, is precisely what makes his survival believable. That said, some passages read more like an engineering manual than a story, and readers without a scientific background may find themselves skimming.

Ridley Scott's film wisely trims most of these explanations. Matt Damon captures Watney's humour remarkably well, and the vast red landscapes give a sense of isolation that the book, told almost entirely from inside his head, cannot quite achieve. What is lost, however, is the satisfaction of following each problem to its solution; on screen, success sometimes arrives a little too easily.

So which is better? For sheer entertainment, the film is hard to beat. Yet for anyone who enjoys watching a clever mind at work, the novel remains the richer experience. My advice would be to read the book first, and then watch the film as a reward.`},
{id:'c1-email', exam:'cam', lvl:'C1', g:'email', minutes:45, words:[220,260], title:'A disappointing online course',
 prompt:`<p>You recently paid for an online language course, but it was very different from what the website promised. Write a <b>formal email</b> to the company explaining what was advertised, what the problems were and what you would like the company to do.</p>`,
 model:`Dear Sir or Madam,

I am writing to express my dissatisfaction with the «Fluent in Twelve Weeks» online course, for which I paid €249 on 2 October.

According to your website, the course included weekly live conversation classes with a qualified teacher, personalised feedback on written work within 48 hours and access to a library of over 200 authentic videos. Unfortunately, my experience has been very different.

Firstly, only two of the six live classes have actually taken place; the others were cancelled without notice, and on both occasions the session was led by a different person who did not appear to be a qualified teacher. Secondly, I have submitted four pieces of written work and have received feedback on just one, almost three weeks after sending it. Finally, the video library contains fewer than fifty videos, several of which do not play at all.

I would also like to point out that I contacted your support team on 20 October and have yet to receive a reply.

Given that the course has clearly not been delivered as advertised, I would be grateful if you could refund the full amount. Alternatively, I would be willing to accept a partial refund together with a guarantee that the remaining classes will take place as scheduled.

I look forward to receiving your reply within the next fourteen days.

Yours faithfully,
Larissa Santos`},
{id:'ielts-t1', exam:'ielts', lvl:'C1', g:'task1', minutes:20, words:[150,200], title:'Reading habits by age',
 prompt:`<p>The bar chart below shows the percentage of adults in one European country who read at least one book a month, by age group, in 2015 and 2025.</p><p><b>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</b></p>
<figure class="wchart" aria-label="Bar chart"><svg viewBox="0 0 520 280" role="img"><title>Adults reading at least one book a month (%)</title>
<g font-size="12" fill="currentColor">
<line x1="50" y1="230" x2="510" y2="230" stroke="currentColor" opacity=".4"/>
<g opacity=".55"><text x="40" y="234" text-anchor="end">0</text><text x="40" y="184" text-anchor="end">20</text><text x="40" y="134" text-anchor="end">40</text><text x="40" y="84" text-anchor="end">60</text><text x="40" y="34" text-anchor="end">80</text></g>
<g stroke="currentColor" opacity=".12"><line x1="50" y1="180" x2="510" y2="180"/><line x1="50" y1="130" x2="510" y2="130"/><line x1="50" y1="80" x2="510" y2="80"/><line x1="50" y1="30" x2="510" y2="30"/></g>
${[['18–24',58,41],['25–34',52,44],['35–49',47,46],['50–64',51,55],['65+',62,68]].map((d,i)=>{const x=70+i*90;return `<rect x="${x}" y="${230-d[1]*2.5}" width="30" height="${d[1]*2.5}" fill="#1E5A43"/><rect x="${x+32}" y="${230-d[2]*2.5}" width="30" height="${d[2]*2.5}" fill="#D9A441"/><text x="${x+15}" y="${224-d[1]*2.5}" text-anchor="middle" font-size="11">${d[1]}</text><text x="${x+47}" y="${224-d[2]*2.5}" text-anchor="middle" font-size="11">${d[2]}</text><text x="${x+31}" y="250" text-anchor="middle">${d[0]}</text>`;}).join('')}
<rect x="330" y="262" width="12" height="12" fill="#1E5A43"/><text x="348" y="272">2015</text><rect x="400" y="262" width="12" height="12" fill="#D9A441"/><text x="418" y="272">2025</text>
</g></svg><figcaption class="note">Practice data, invented for this exercise.</figcaption></figure>`,
 model:`The bar chart compares the proportion of adults in five age groups who read at least one book a month in 2015 and 2025.

Overall, it is clear that reading declined among younger adults over the decade, while it increased among the older age groups. In both years, people aged 65 and over were the most frequent readers.

In 2015, the youngest group, those aged 18 to 24, had a relatively high reading rate of 58%, but this figure fell sharply to 41% in 2025, the largest drop of any group. A smaller decrease was seen among 25- to 34-year-olds, from 52% to 44%. The figure for people aged 35 to 49 remained almost unchanged, at around 46–47%.

By contrast, the two oldest groups read more in 2025 than ten years earlier. The percentage of 50- to 64-year-olds who read monthly rose from 51% to 55%, while the figure for those aged 65 and over increased from 62% to 68%. As a result, by 2025 the oldest adults were reading at a rate roughly two-thirds higher than the youngest.`},
{id:'ielts-t2', exam:'ielts', lvl:'C1', g:'task2', minutes:40, words:[250,320], title:'Languages and technology',
 prompt:`<p>Write about the following topic:</p><blockquote><b>Some people believe that learning a foreign language at school is no longer necessary because translation technology is improving so quickly. To what extent do you agree or disagree?</b></blockquote><p>Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.</p>`,
 model:`In recent years, translation apps have become remarkably accurate, and some people now question whether schools should continue to teach foreign languages. While I accept that technology has made basic communication easier, I strongly disagree that language learning has become unnecessary.

The main reason is that a language is far more than a tool for exchanging information. When we speak to someone in their own language, we build trust in a way that no device can replicate. Business negotiations, friendships and even job interviews depend on humour, tone and cultural references that machines still struggle to convey. A doctor who can reassure a patient directly, for example, offers something an app cannot.

Furthermore, learning a language brings cognitive and educational benefits that go beyond communication. Studies have linked bilingualism to better concentration and problem-solving skills, and students who learn a second language often gain a clearer understanding of the grammar of their own. These advantages would be lost if languages were removed from the curriculum.

Admittedly, translation technology is extremely useful for tourists or for reading simple texts, and it would be unrealistic to expect every student to become fluent. However, this is an argument for teaching languages in a more practical and engaging way, not for abandoning them altogether.

In conclusion, although translation tools will continue to improve, I firmly believe that foreign languages should remain a central part of school education, because they offer personal, professional and intellectual benefits that technology cannot replace.`},
{id:'b2-article', exam:'cam', lvl:'B2', g:'article', minutes:40, words:[140,190], title:'The best place to study',
 prompt:`<p>You see this announcement in an English-language magazine for students.</p><blockquote><b>Where do you study best?</b><br>Some people need total silence; others work best in a busy café. Tell us about the place where you study best and explain why it works for you. Is there anything you would change?</blockquote><p>Write your <b>article</b>.</p>`,
 model:`My secret study spot

Have you ever tried to study at home and ended up cleaning the kitchen instead? I know the feeling. That's why, for the last two years, I've done all my studying in a very unusual place: the café at my local train station.

It sounds crazy, I know. It's noisy, people are always rushing past and the coffee is only average. But believe it or not, that's exactly why it works for me. The background noise is constant, so I stop noticing it after a few minutes, and nobody there knows me, so nobody interrupts me. There's also no washing-up waiting for me!

Another advantage is that I can't stay there forever. After an hour or two, I pack up and go home, so I study in short, intense sessions instead of long, unproductive ones.

If I could change one thing, it would be the chairs, which are terribly uncomfortable. But maybe that's part of the secret too: there's no way I could fall asleep!

So next time you can't concentrate, why not try somewhere completely different?`}
];
