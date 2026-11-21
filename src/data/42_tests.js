/* ───────── TESTS: reading (5) + open cloze (8) + multiple choice (7) = 20 ───────── */
const TESTS = [
{id:1, units:[101,106], range:'W1–W6', lvl:'A2', title:'Test A2',
reading:{title:'The Neighbour Who Never Spoke',
text:`<p>When I moved into my flat in Manchester, I didn't know anybody in the building. Every morning I saw the same old man on the stairs. He always wore a grey hat, and he never said a word. I said "Good morning" every day for two months, but he just nodded.</p>
<p>One evening in December, there was a power cut. The whole street was dark and very cold. I was looking for candles when somebody knocked on my door. It was the old man, with a torch and a flask of hot soup. "You're the girl who always says good morning," he said. "I thought you might be cold."</p>
<p>His name was Arthur. He was eighty-four, and he had been a jazz pianist for forty years. He explained that he didn't talk much because he was nearly deaf. We sat on the stairs and drank the soup while he told me stories about clubs in London in the 1960s.</p>
<p>Since that night, I've had dinner with Arthur every Sunday. He still doesn't talk much on the stairs, but now I know why, and I always wait for his nod.</p>`,
q:[
["What did the old man do when she said «Good morning»?",["He answered loudly","He nodded","He ignored her completely","He smiled and talked"],1],
["Why did he knock on her door?",["He needed help","He thought she might be cold","He wanted candles","He was lost"],1],
["Why didn't Arthur talk much?",["He was shy","He didn't like her","He couldn't hear well","He didn't speak English"],2],
["What was Arthur's job?",["A teacher","A jazz pianist","A cook","An electrician"],1],
["How often do they have dinner now?",["Every day","Every Sunday","Once a month","Never"],1]
]},
cloze:{title:'My first week back at school',
text:`I [1] studied English for ten years, so last Monday I was really nervous. The course is in the evening, and most of the students [2] adults with jobs. Our teacher, [3] is from Scotland, speaks very fast, but she's very kind. On the first day, she asked us [4] we wanted to learn English. I said I wanted to watch films [5] subtitles. Next week we're [6] to read a short story, and I've [7] bought the book. I think it will [8] difficult, but I'm excited.`,
a:[["haven't","hadn't","had not","have not"],["are"],["who"],["why"],["without"],["going"],["already","just"],["be"]]},
mc:[
["I ___ 35 years old.",["have","am","has","make"],1],
["She ___ like spicy food.",["don't","isn't","doesn't","not"],2],
["We ___ to Portugal last summer.",["have gone","went","go","were going"],1],
["I've lived here ___ 2019.",["for","since","from","ago"],1],
["Can you give me some ___?",["advices","advice","an advice","advise"],1],
["You ___ pay. It's free.",["mustn't","don't have to","can't","shouldn't"],1],
["Do you know where ___?",["is the bank","the bank is","does the bank","the bank"],1]
]},
{id:2, units:[1,6], lvl:'B2', title:'Test B2',
reading:{title:'The Translator\'s Notebook',
text:`<p>For twenty years, Helen Marsh translated Brazilian novels into English, and for twenty years she kept a small black notebook that nobody was allowed to see. After her death last spring, her nephew found it in a drawer and, after some hesitation, decided to publish it.</p>
<p>The notebook turned out to be neither a diary nor a collection of secrets. It was a list of words: Portuguese words that Helen had never managed to translate. Next to each one she had written the dates of her attempts and, occasionally, a short comment. Beside <i>saudade</i> she had simply written "Gave up. Again."</p>
<p>Critics who had expected a scandal were disappointed. Readers, however, were fascinated. The book has been reprinted four times, and it is said that several universities are now using it to teach translation. What makes it so popular, according to its editor, is that it shows the work that normally remains invisible: the hours spent on a single word, the doubts, the small defeats.</p>
<p>Helen's nephew admits that he hesitated before publishing it. "She would have hated the attention," he says. "But I think she would have liked the idea that people finally saw how hard she had worked."</p>`,
q:[
["What did the nephew find?",["A diary full of secrets","A list of words Helen couldn't translate","An unpublished novel","Letters from Brazilian authors"],1],
["What does «Gave up. Again.» suggest?",["She translated saudade easily","She had tried several times without success","She hated the word","She stopped working"],1],
["How did critics react?",["They were fascinated","They were disappointed","They were angry","They ignored it"],1],
["According to the editor, why is the book popular?",["It is a scandal","It shows the invisible work of translation","It is very short","Universities paid for it"],1],
["What does the nephew believe?",["Helen would have loved the attention","Helen would have hated the attention but liked people seeing her work","Helen wanted him to publish it","Helen never worked hard"],1]
]},
cloze:{title:'Why I started reading in English',
text:`I [1] always been afraid of reading novels in English. When I was at school, we [2] to translate every word, and I found it boring. Last year, a friend [3] I trusted lent me a crime novel and told me not [4] use a dictionary. At first I understood very little, but I didn't give [5]. By the time I got to chapter five, I [6] stopped worrying about every word. If she hadn't insisted, I would never [7] tried. Now I'm looking forward [8] starting my next book.`,
a:[["had","have"],["had","used"],["who","that","whom"],["to"],["up"],["had","'d"],["have"],["to"]]},
mc:[
["When I got to the station, the train ___.",["already left","has already left","had already left","was already leaving"],2],
["If I ___ you, I'd take the job.",["am","were","would be","had been"],1],
["Can you find ___ what time the film starts?",["up","out","off","over"],1],
["My laptop ___ at the moment, so I'm using my phone.",["is repaired","is being repaired","has repaired","repairs"],1],
["She ___ me she was leaving.",["said","told","asked","spoke"],1],
["The man ___ car was stolen called the police.",["who","which","whose","that"],2],
["He suggested ___ a taxi.",["to take","take","taking","took"],2]
]},
{id:3, units:[7,12], lvl:'C1', title:'Test C1',
reading:{title:'In Defence of Boredom',
text:`<p>Few people today would admit to being bored. We carry devices that promise endless entertainment, and the moment our attention drifts, a screen is there to rescue us. Yet a growing number of psychologists argue that this rescue comes at a price.</p>
<p>Boredom, they suggest, is not simply an unpleasant state to be avoided. It functions as a signal: a sign that our current activity is not meeting our needs and that something should change. Researchers at a British university found that participants who had first completed a deliberately tedious task went on to produce more creative ideas than those who had not. Little did the volunteers suspect, while copying numbers from a phone book, that they were preparing their minds for invention.</p>
<p>The problem, according to these researchers, is not that we feel bored, but that we no longer allow the feeling to last long enough to be useful. Had we tolerated a few more minutes of emptiness, we might have reached the point where the mind begins to wander and connect unrelated ideas.</p>
<p>None of this means that we should throw away our phones. What it does suggest is that occasional moments of doing nothing may be worth protecting, not least because, as one researcher puts it, "a mind that is never bored is a mind that is never really free."</p>`,
q:[
["What is the writer's main point?",["Boredom should always be avoided","Boredom can be useful if we let it last","Phones make us creative","Psychologists are bored"],1],
["According to the text, boredom works as…",["a punishment","a signal that something should change","a disease","a waste of time"],1],
["What happened in the British study?",["Bored participants were less creative","Participants who did a boring task were more creative afterwards","Nobody completed the task","Participants used phones"],1],
["«Had we tolerated a few more minutes…» means…",["If we had tolerated a few more minutes","Because we tolerated more minutes","We will tolerate more minutes","We had to tolerate more minutes"],0],
["What does the writer recommend?",["Throwing phones away","Protecting occasional moments of doing nothing","Doing boring tasks at work","Avoiding psychologists"],1]
]},
cloze:{title:'A career I never expected',
text:`I had never imagined working in data analysis. In fact, at school I was terrible at maths, [1] is why everyone was surprised when I took a statistics course. Not only [2] I pass, but I actually enjoyed it. Looking back, I wish I [3] started earlier. [4] the long hours, I love what I do. I sometimes think that if I hadn't failed my first job interview, I would never [5] considered a change. It [6] out to be the best thing that could have happened. What I appreciate most [7] the feeling of solving a problem nobody else could. I'm [8] used to people asking me how I did it.`,
a:[["which"],["did"],["had","'d"],["despite"],["have"],["turned"],["is"],["getting"]]},
mc:[
["I'll never forget ___ the ocean for the first time.",["to see","seeing","see","to have seen"],1],
["She isn't answering. She ___ asleep.",["must have fallen","should have fallen","can't fall","must fall"],0],
["I wish I ___ to the party last night.",["went","would go","had gone","have gone"],2],
["It's high time you ___ a decision.",["make","made","will make","have made"],1],
["I can't ___ the noise from the flat upstairs any longer.",["put up with","come up with","get away with","look up to"],0],
["___ having little experience, she got the job.",["Although","Despite","However","Even though"],1],
["Rarely ___ such a talented young writer.",["we have seen","have we seen","we saw","did we saw"],1]
]}
];
