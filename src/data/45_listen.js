/* ───────── READ ALOUD ───────── */
const TESTI = [
{t:'My Morning Routine', lvl:'A2', text:`I usually wake up at seven, but I don't get up straight away. I check the weather on my phone and think about the day. Then I have a shower and make a big cup of coffee.

I work from home, so I don't need to rush. I sit by the window with my coffee and read the news for ten minutes. At eight o'clock I open my laptop and start work.

On Fridays it's different. I meet my friend Sara at a little café near the park, and we have breakfast together. It's my favourite moment of the week.`,
pron:['COF-fee (o é aberto: «cófi»)','WEA-ther (th suave, como em «the»)','LAP-top','FA-vou-rite: «FEI-vrit» (só duas sílabas)','break-fast: «BREK-fist»'],
ask:['What does your morning routine look like?','What is your favourite moment of the week?','Do you prefer coffee or tea? Why?']},
{t:'A Rainy Weekend', lvl:'A2', text:`Last weekend it rained from Friday night to Sunday evening. We had plans to go to the beach, but of course we stayed at home.

On Saturday we watched three films in a row and ordered pizza. My sister fell asleep during the second one, so she still doesn't know how it ends.

On Sunday I finally finished a book I started in January. It was a [[thriller|suspense]] about a missing painter, and the last chapter was brilliant. In the afternoon the rain stopped for an hour, and we went for a short walk. The streets were empty and the air smelled of wet leaves.`,
pron:['RAINED: uma sílaba, «reind»','WATCHED: uma sílaba, «wotcht»','STARTED: duas sílabas, «STAR-tid»','THRILL-er (th sem som de t)','CHAP-ter: «TCHÉP-ter»'],
ask:['What do you do on a rainy weekend?','Tell me about the last book you finished.','Describe a walk you enjoyed recently.']},
{t:'Learning to Speak Again', lvl:'B1', text:`For years I could read English quite well, but I never spoke it. In meetings I understood almost everything, and still I said nothing. I was afraid of making mistakes in front of people who spoke perfectly.

Then a colleague from Ireland told me something that changed my mind. "Nobody is listening to your grammar," she said. "They're listening to your ideas."

So I started small. I ordered coffee in English, I asked questions in meetings, and I recorded myself reading aloud. At first I hated my voice. Now I just notice the mistakes, correct them, and carry on. It isn't perfect, but it's mine.`,
pron:['COL-league: «CÓ-lig»','a-FRAID','IRE-land: «AIR-lend»','re-COR-ded (verbo: acento na 2ª sílaba)','PER-fect-ly'],
ask:['When do you feel shy speaking another language?','What advice would you give to someone who is afraid of speaking?','Tell me about a colleague who helped you.']},
{t:'The Café on the Corner', lvl:'B1', text:`There's a café on the corner of my street that has been there for forty years. The owner, Mr Patel, knows everyone by name. He remembers how you like your coffee, which football team you support and whether your mother is feeling better.

When the big coffee chain opened across the road, everyone thought he would close within a year. Instead, the opposite happened. People kept coming back, not for the coffee, which is honestly just average, but for the conversation.

Last month he turned seventy. The whole street organised a surprise party, and for once, Mr Patel didn't know what to say.`,
pron:['COR-ner (com R americano)','AV-er-age: «ÉV-ridj»','HON-est-ly (o h é mudo)','sur-PRISE','OR-ga-nised'],
ask:['Is there a place in your neighbourhood like this café?','Do you prefer small local shops or big chains? Why?','Describe someone in your area that everyone knows.']},
{t:'Why We Love Stories', lvl:'B2', text:`Every culture we know of tells stories. Long before writing existed, people gathered around fires to hear about heroes, monsters and journeys. Some scientists believe that stories helped our ancestors survive: by listening to someone else's experience, you could learn about danger without facing it yourself.

Today, our stories come through screens rather than fires, but the effect on the brain seems surprisingly similar. When we follow a [[gripping|eletrizante]] plot, our heart rate changes, our attention narrows and, for a while, we forget where we are.

Perhaps that is why a good series can feel like a friendship. We spend hours with its characters, we worry about them, and when it ends, we miss them.`,
pron:['AN-ces-tors','sur-VIVE','sur-PRI-sing-ly','CHAR-ac-ters: «KÉ-rec-ters»','THROUGH: «thru»'],
ask:['Which series or film character do you miss?','Why do you think humans need stories?','Tell me a story your grandparents used to tell.']},
{t:'Working From Anywhere', lvl:'B2', text:`When the company announced that we could work from anywhere, half the office booked flights within a week. Some went home to their families; others went to beaches they had only seen in photos.

The first months felt like a holiday that never ended. But slowly, the problems appeared. Time zones made meetings impossible, the Wi-Fi in paradise was terrible, and some of us realised we actually missed the office: the small talk, the shared lunches, even the bad coffee.

Now most of my team works in a hybrid way. We come in twice a week, mainly to see each other. It turns out that freedom is wonderful, but people still need people.`,
pron:['an-NOUNCED: «a-NAUNST»','PA-ra-dise','HY-brid: «HAI-brid»','RE-a-lised: «RI-a-laizd»','WON-der-ful: «UÂN-der-ful»'],
ask:['Would you like to work from anywhere? Where?','What are the advantages and disadvantages of remote work?','What do you miss about working in an office, or what would you miss?']},
{t:'The Last Bookshop', lvl:'C1', text:`The bookshop had survived two wars, a flood and the arrival of the internet, but it was not expected to survive the new rent. When the owner announced its closure, nobody imagined what would happen next.

Within days, readers began to arrive with offers of help. A retired accountant reorganised the finances; a group of students redesigned the website; a famous novelist, who had written her first chapters at a table in the back, gave a reading that sold out in an hour.

By the end of the year, the shop had not only paid its debts but opened a small café. Its owner still finds it difficult to explain. "Perhaps," she says, "people simply weren't ready to lose a place where nobody hurries you."`,
pron:['sur-VIVED','CLO-sure: «CLOU-jer»','ac-COUN-tant','FI-nan-ces: «FAI-nan-siz»','DEBTS: o b é mudo, «dets»'],
ask:['Why do you think the readers helped the bookshop?','Is there a place in your life where «nobody hurries you»?','Should cities protect independent shops? How?']},
{t:'On Fear of Failure', lvl:'C1', text:`We tend to imagine that confident people simply feel less fear. More often, they have learned to act before the fear goes away. The difference is not in the feeling but in what they do with it.

Psychologists sometimes describe this as building tolerance rather than eliminating discomfort. Each time we speak in a meeting despite our nerves, or send the email we have rewritten five times, the brain registers that nothing terrible happened. Gradually, the alarm becomes quieter.

It follows that waiting until we feel ready is, paradoxically, the surest way never to feel ready at all. Readiness is not a condition we achieve before acting; it is, more often than not, the result of having acted.`,
pron:['CON-fi-dent','TOL-er-ance','dis-COM-fort: «dis-CÂM-fort»','PA-ra-dox-i-cal-ly','READ-i-ness: «RÉ-di-nis»'],
ask:['Do you agree that confidence comes after action? Give an example.','What is something you did before you felt ready?','How could you build tolerance to speaking English in public?']}
];

/* ───────── TONGUE TWISTERS ───────── */
const SCIOGLI = [
["She sells seashells by the seashore.","s × sh"],
["Red lorry, yellow lorry.","r × l"],
["Three free throws.","th × f"],
["Fresh French fried fish.","fr + sh"],
["I scream, you scream, we all scream for ice cream.","palavras que se juntam: I scream = ice cream"],
["Peter Piper picked a peck of pickled peppers.","p com ar (aspirado)"],
["How much wood would a woodchuck chuck if a woodchuck could chuck wood?","w e o u curto"],
["Thirty-three thousand thirsty thinkers.","th surdo"],
["Which witch is which?","w × wh, i curto"],
["Unique New York, unique New York.","iu × u"],
["A big black bug bit a big black bear.","b e vogais curtas"],
["Sheep should sleep in a shed.","i longo × i curto: sheep / ship"]
];

/* ───────── LISTENING SCENES ───────── */
const ASCOLTI = [
{t:'At the Coffee Shop', lvl:'A2', where:'New York', names:{A:'Barista',B:'Customer'}, lines:[
['A','Hi there! What can I get you?'],['B','Hi. Can I have a medium latte, please?'],['A','Sure. Whole milk, oat milk or almond?'],['B','Oat milk, please.'],['A','Anything else? We\'ve got fresh blueberry muffins today.'],['B','Oh, okay, one muffin too. To go, please.'],['A','Great. That\'s nine fifty. Can I get a name for the order?'],['B','Larissa. L-A-R-I-S-S-A.'],['A','Perfect. It\'ll be ready at the end of the counter in a couple of minutes.']],
q:[["What size is the latte?",["Small","Medium","Large","Extra large"],1],["What milk does she choose?",["Whole","Almond","Oat","Soy"],2],["How much is the order?",["$5.90","$9.50","$9.15","$19.50"],1],["«To go» means…",["to drink there","to take away","to deliver","to cancel"],1]],
notes:['«What can I get you?» = o que vai ser?','«To go» (EUA) = «to take away» (Reino Unido): para viagem.','«Nine fifty» = 9,50 dólares: os centavos vêm sem «dollars».']},
{t:'Airport Announcements', lvl:'A2', where:'London Heathrow', lines:[
['N','Good afternoon. This is a boarding announcement for British Airways flight BA two four seven to Boston. Passengers in group one may now board at gate fourteen.'],['N','Attention, please. Flight IB three one six six to Madrid is delayed by approximately forty-five minutes. We apologise for any inconvenience.'],['N','Would passenger Anna Costa, travelling to Lisbon, please go to gate nine immediately. The gate is about to close.'],['N','Please do not leave your luggage unattended at any time.']],
q:[["Where is the British Airways flight going?",["Madrid","Boston","Lisbon","Barcelona"],1],["Which gate is it boarding at?",["Four","Nine","Fourteen","Forty"],2],["How long is the Madrid delay?",["About fifteen minutes","About forty-five minutes","About an hour","Four hours"],1],["What must Anna Costa do?",["Wait","Go to gate nine now","Collect her luggage","Call the airline"],1]],
notes:['«Delayed by approximately forty-five minutes»: forty-five tem o acento no «five».','«Unattended» = sem supervisão: frase de todo aeroporto.','Números de voo são lidos dígito por dígito: «two four seven».']},
{t:'Meeting the Neighbours', lvl:'B1', where:'Toronto', names:{A:'Mike',B:'Ana'}, lines:[
['A','Hey! You must be the new neighbour. I\'m Mike, from 4B.'],['B','Hi, Mike, nice to meet you. I\'m Ana. Yeah, I moved in last weekend.'],['A','Welcome to the building! Where are you from?'],['B','Brazil, originally, but I\'ve been living in Spain for a few years.'],['A','No way! Brazil to Spain to Canada? You\'re gonna hate our winters.'],['B','Everybody keeps telling me that! I\'ve already bought a huge coat.'],['A','Smart move. Hey, if you need anything, like a drill or, I dunno, someone to water your plants, just knock.'],['B','Thanks, that\'s really kind. Actually, do you know a good place for coffee around here?'],['A','Oh, definitely. There\'s a little place on Queen Street, two blocks down. Tell them Mike sent you. They won\'t give you a discount, but they\'ll pretend to be impressed.']],
q:[["How long has Ana been in the building?",["Since last weekend","A few years","A month","Since yesterday"],0],["Where has Ana been living recently?",["Brazil","Spain","The USA","Portugal"],1],["What has Ana already bought?",["A drill","A big coat","Plants","Coffee"],1],["What is Mike's joke about the café?",["They'll give her a discount","They'll pretend to be impressed","It's closed","It's very expensive"],1]],
notes:['«You\'re gonna hate our winters»: gonna = going to.','«I dunno» = I don\'t know.','«Smart move» = boa ideia, jogada esperta.','«Two blocks down» = duas quadras para lá.']},
{t:'A Phone Call with a Bank', lvl:'B1', where:'UK', names:{A:'Agent',B:'Customer'}, lines:[
['A','Good morning, you\'re through to Hartley Bank, my name\'s James. How can I help?'],['B','Hi, James. I think someone has used my card. There are two payments I don\'t recognise.'],['A','I\'m sorry to hear that. I\'ll need to ask you a few security questions first. Could you confirm your date of birth?'],['B','Sure, it\'s the fourteenth of March, nineteen ninety.'],['A','Thank you. And which payments are you worried about?'],['B','One for two hundred and thirty pounds at an electronics shop, and another one for fifteen pounds this morning.'],['A','Right, I can see them. I\'m going to block your card now, and we\'ll send you a new one within five working days. You won\'t be charged for those payments while we investigate.'],['B','Brilliant, thank you. Will I be able to use my phone to pay in the meantime?'],['A','I\'m afraid not, as it\'s linked to the same card. But you can withdraw cash at any branch with your ID.']],
q:[["Why is the customer calling?",["To open an account","She doesn't recognise two payments","She lost her phone","To change her address"],1],["When was she born?",["14 March 1990","4 March 1990","14 May 1990","40 March 1990"],0],["How much was the first payment?",["£15","£130","£230","£213"],2],["Can she pay with her phone meanwhile?",["Yes","No, it's linked to the same card","Only online","Only in shops"],1]],
notes:['«You\'re through to…» = você está falando com… (atendimento britânico).','«I\'m afraid not» = infelizmente não (forma educada de negar).','Datas britânicas: «the fourteenth of March».','«Working days» = dias úteis.']},
{t:'Stand-up Meeting', lvl:'B2', where:'A tech company, online', names:{A:'Priya',B:'Tom',C:'Larissa'}, lines:[
['A','Morning, everyone. Let\'s keep it short. Tom, wanna kick us off?'],['B','Sure. So, yesterday I wrapped up the login fix, it\'s in review now. Today I\'m picking up the payment bug. No blockers.'],['A','Great, thanks. Larissa?'],['C','Yeah, so, I spent most of yesterday on the API migration. It\'s going slower than we thought, to be honest. The old docs are kind of a mess.'],['A','How far behind are we, roughly?'],['C','I\'d say two days, ballpark. I could use a hand from someone who knows the old system.'],['B','I worked on that last year. I can pair with you after lunch if you want.'],['C','That\'d be amazing, thanks.'],['A','Perfect. Let\'s touch base again tomorrow and see where we are. Anything else? No? Okay, cheers, everyone.']],
q:[["What did Tom finish yesterday?",["The payment bug","The login fix","The API migration","The documentation"],1],["Why is Larissa's task slow?",["She's ill","The old documentation is bad","Tom is blocking her","The client changed plans"],1],["How late are they, approximately?",["Two hours","Two days","Two weeks","They're on time"],1],["What does Tom offer?",["To take over the task","To work with her after lunch","To write new docs","To talk to the client"],1]],
notes:['«Kick us off» = começar, abrir a reunião.','«Wrap up» = finalizar; «pick up» = assumir uma tarefa.','«No blockers» = nada me impedindo.','«Ballpark» = estimativa aproximada; «touch base» = conversar rapidamente.','«I could use a hand» = uma ajuda viria bem.']},
{t:'The Argument', lvl:'B2', where:'A flat in London', names:{A:'Kate',B:'Dan'}, lines:[
['A','You\'re late. Again.'],['B','I know, I know. I\'m sorry. The meeting ran over and then the tube was a nightmare.'],['A','You could\'ve texted, Dan. Dinner\'s been ready for an hour.'],['B','My phone died. Honestly. I was gonna call from the office, but…'],['A','But what?'],['B','But I forgot. Okay? I forgot. That\'s on me.'],['A','It\'s not about tonight. It\'s every time. I feel like I\'m always the one waiting.'],['B','That\'s not fair. Last week I cooked every single day.'],['A','You\'re right. That\'s… fair. I\'m just tired.'],['B','Look, why don\'t we heat this up and talk properly? No phones, no work. Deal?'],['A','…Deal. But you\'re doing the washing-up.']],
q:[["Why was Dan late?",["He went to the pub","His meeting went on longer and the tube was bad","He forgot about dinner","He was at the shops"],1],["Why didn't he text?",["His phone battery died","He didn't want to","He had no signal","He was driving"],0],["What is Kate's real complaint?",["The food is cold","She always feels like the one waiting","Dan works too much","Dan never cooks"],1],["How does the argument end?",["Kate leaves","They agree to talk without phones","Dan goes out","They order pizza"],1]],
notes:['«The meeting ran over» = a reunião passou da hora.','«The tube» = o metrô de Londres.','«You could\'ve texted» soa «you-coulda-texted».','«That\'s on me» = a culpa é minha.','«Deal?» = combinado?']},
{t:'A Detective Interview', lvl:'B2', where:'Police station', names:{A:'Detective',B:'Mr Reed'}, lines:[
['A','Mr Reed, where were you on Thursday night, between nine and eleven?'],['B','At home. I told the officer already.'],['A','Alone?'],['B','Yes, alone. I was watching the football.'],['A','Which match?'],['B','I… don\'t remember. Some cup game.'],['A','That\'s interesting, because there wasn\'t a match on Thursday. It was postponed because of the storm.'],['B','Then it must\'ve been a replay. I don\'t know. I fell asleep.'],['A','Your neighbour says your car wasn\'t in the driveway at ten.'],['B','She must be mistaken. She\'s eighty-two.'],['A','She might be. But the camera at the petrol station on Mill Road isn\'t eighty-two, Mr Reed, and it filmed your car at ten fifteen.'],['B','…I think I\'d like to speak to my lawyer.']],
q:[["What does Mr Reed say he was doing?",["Working late","Watching football at home","Visiting a neighbour","Driving to the coast"],1],["What's wrong with his story about the match?",["It was a different team","The match was postponed","It was on Friday","It was cancelled because of fans"],1],["What evidence does the detective have?",["A witness and a camera","Only the neighbour","A phone call","His fingerprints"],0],["What does Mr Reed decide at the end?",["To confess","To call his lawyer","To leave the country","To accuse the neighbour"],1]],
notes:['«It must\'ve been a replay» = deve ter sido uma reprise (dedução).','«She must be mistaken» = ela deve estar enganada.','«Petrol station» (UK) = «gas station» (US).','«I\'d like to speak to my lawyer»: a frase de todo interrogatório de série.']},
{t:'Job Interview', lvl:'C1', where:'Video call', names:{A:'Interviewer',B:'Candidate'}, lines:[
['A','Thanks for joining us. So, tell me a bit about yourself and why this role caught your eye.'],['B','Sure. I\'m a software developer with about eight years\' experience, mostly in back-end systems for fintech. What caught my eye was the focus on accessibility. It\'s something I\'ve become passionate about since I worked on a banking app for older users.'],['A','Interesting. Can you tell me about a time a project didn\'t go to plan?'],['B','Absolutely. Two years ago we underestimated a data migration quite badly. In hindsight, we should have tested with real data much earlier. We ended up working two weekends, which wasn\'t ideal. What I took from it is that I now push for a small pilot before any big change.'],['A','That\'s a great answer. Where do you see yourself in five years?'],['B','Ideally, leading a small team. I really enjoy mentoring junior developers, and I\'d like to do more of that, as long as I can still get my hands dirty with code.'],['A','Good to know. Do you have any questions for us?'],['B','Yes, actually. How does the team handle disagreements about technical decisions?']],
q:[["What attracted the candidate to the role?",["The salary","The focus on accessibility","Working from home","The location"],1],["What went wrong two years ago?",["She was late","They underestimated a migration","A colleague left","The client cancelled"],1],["What did she learn?",["To work weekends","To run a small pilot first","To avoid migrations","To hire more people"],1],["«Get my hands dirty with code» means…",["write code herself","clean her keyboard","avoid coding","teach coding only"],0]],
notes:['«Caught my eye» = chamou minha atenção.','«In hindsight» = olhando para trás.','«What I took from it» = o que aprendi com isso.','Repare como ela usa should have e ended up para falar de um erro sem parecer negativa.']},
{t:'Podcast: Do We Read Less?', lvl:'C1', where:'Radio studio', names:{A:'Host',B:'Guest'}, lines:[
['A','Welcome back. My guest today has spent ten years studying how we read. So, the big question: are we reading less than we used to?'],['B','Well, it depends what you mean by reading. If you count messages, articles and subtitles, we probably read more words per day than any generation in history.'],['A','But not books.'],['B','Not books, no, or at least not in the same way. What\'s changed is the kind of attention we bring. We skim much more. We jump from one thing to the next. Deep, slow reading, the kind where you lose track of time, has become rarer.'],['A','Is that necessarily a bad thing?'],['B','Not necessarily. Skimming is a useful skill. The problem is when it\'s the only skill we\'ve got. Deep reading is a bit like a muscle: if you don\'t use it, it doesn\'t disappear, but it gets weaker.'],['A','So what would you recommend?'],['B','Something very unglamorous: twenty minutes a day, phone in another room, with a book you actually enjoy. Not the one you think you should be reading.']],
q:[["According to the guest, do we read fewer words today?",["Yes, far fewer","No, probably more words","Exactly the same","Nobody knows"],1],["What has become rarer?",["Reading subtitles","Deep, slow reading","Reading messages","Skimming"],1],["How does she describe deep reading?",["As a muscle","As a luxury","As a waste of time","As a school subject"],0],["What does she recommend?",["Reading only classics","Twenty minutes a day with an enjoyable book, phone away","Speed-reading courses","Reading on the phone"],1]],
notes:['«Skim» = ler por alto.','«Lose track of time» = perder a noção do tempo.','«Unglamorous» = nada glamuroso, simples.','Repare na ênfase: «Not the one you think you should be reading.»']},
{t:'Small Talk at a Party', lvl:'B1', where:'A party in Sydney', names:{A:'Josh',B:'Bea'}, lines:[
['A','G\'day! I don\'t think we\'ve met. I\'m Josh, I work with Emma.'],['B','Hi Josh, I\'m Bea. Emma and I were at uni together.'],['A','No worries. So how are you finding Sydney?'],['B','I love it, but the coffee is way more expensive than at home.'],['A','Ha, fair enough. Where\'s home?'],['B','São Paulo. Have you ever been to Brazil?'],['A','Not yet, mate, but it\'s on the list. Reckon I\'d need a guide, though.'],['B','Well, if you ever go, let me know. I\'ll send you a list of places.'],['A','Deal. Can I get you a drink? There\'s some beer in the esky.'],['B','The what?'],['A','The esky! The cool box. Sorry, Aussie word.']],
q:[["How does Bea know Emma?",["From work","From university","They're sisters","From the gym"],1],["What does Bea find expensive?",["Rent","Coffee","Beer","Transport"],1],["Has Josh been to Brazil?",["Yes, twice","No, not yet","He lives there","He doesn't say"],1],["What is an «esky»?",["A beer brand","A cool box","A barbecue","A taxi"],1]],
notes:['«G\'day» = olá (australiano).','«How are you finding…?» = o que está achando de…?','«Reckon» = acho, imagino (muito usado na Austrália e no Reino Unido).','«Mate» = cara, amigo.','Repare na entonação australiana, que sobe no fim das frases.']}
];
