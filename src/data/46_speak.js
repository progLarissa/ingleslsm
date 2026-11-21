/* ───────── PHRASE BANK ───────── */
const FRASARIO = [
{t:'Buying time (when the words don\'t come)', lvl:'A2–C1', f:[["Let me think for a second…","Deixa eu pensar um segundo…"],["That's a good question.","Boa pergunta."],["How can I put this…","Como posso dizer…"],["What's the word… it's like a…","Qual é a palavra… é tipo um…"],["Well, I mean…","Bom, quer dizer…"],["I'm not sure how to say it, but…","Não sei bem como dizer, mas…"],["Sorry, I've lost my train of thought.","Desculpa, perdi o fio da meada."],["Where was I?","Onde é que eu estava?"]]},
{t:'When you don\'t understand', lvl:'A2', f:[["Sorry, could you say that again?","Desculpa, pode repetir?"],["Could you speak a bit more slowly, please?","Pode falar um pouco mais devagar, por favor?"],["Sorry, I didn't catch that.","Desculpa, não entendi."],["What do you mean by…?","O que você quer dizer com…?"],["Do you mean that…?","Você quer dizer que…?"],["How do you spell that?","Como se escreve?"],["Sorry, I'm still learning English.","Desculpa, ainda estou aprendendo inglês."]]},
{t:'Small talk', lvl:'A2–B1', f:[["How's it going?","Como vão as coisas?"],["Not bad, thanks. You?","Nada mal, obrigada. E você?"],["What do you do?","O que você faz (de trabalho)?"],["How long have you been here?","Há quanto tempo você está aqui?"],["Have you got any plans for the weekend?","Tem planos para o fim de semana?"],["Crazy weather today, isn't it?","Tempo maluco hoje, né?"],["It was really nice talking to you.","Foi muito bom conversar com você."],["Let's keep in touch!","Vamos manter contato!"]]},
{t:'Giving your opinion', lvl:'B1', f:[["In my opinion…","Na minha opinião…"],["I'd say that…","Eu diria que…"],["As far as I'm concerned…","Pelo que me diz respeito…"],["To be honest…","Para ser sincera…"],["I see your point, but…","Entendo seu ponto, mas…"],["I couldn't agree more.","Concordo totalmente."],["I'm not so sure about that.","Não tenho tanta certeza."],["It depends on…","Depende de…"]]},
{t:'Telling a story', lvl:'B1–B2', f:[["You won't believe what happened…","Você não vai acreditar no que aconteceu…"],["So, the other day…","Então, outro dia…"],["At first… but then…","No começo… mas depois…"],["All of a sudden…","De repente…"],["To cut a long story short…","Resumindo a história…"],["The funny thing is…","O engraçado é que…"],["In the end…","No fim…"],["Anyway, long story short…","Enfim, resumindo…"]]},
{t:'Reacting like a native', lvl:'B1–B2', f:[["No way!","Não acredito!"],["Seriously?","Sério?"],["That's awesome!","Que incrível!"],["Oh no, that's awful.","Ah não, que horrível."],["Good for you!","Que bom para você!"],["Tell me about it.","Nem me fala."],["Fair enough.","Justo, faz sentido."],["I know, right?","Pois é, né?"]]},
{t:'At work and in meetings', lvl:'B2', f:[["Could you walk me through it?","Pode me explicar passo a passo?"],["Just to clarify…","Só para esclarecer…"],["I'd like to add something.","Gostaria de acrescentar algo."],["Can I jump in here?","Posso interromper aqui?"],["Let's circle back to that later.","Vamos voltar a isso depois."],["I'll follow up by email.","Vou dar seguimento por e-mail."],["What's the timeline for this?","Qual é o prazo para isso?"],["I'm afraid I can't commit to that yet.","Infelizmente ainda não posso me comprometer com isso."]]},
{t:'Disagreeing politely', lvl:'B2–C1', f:[["I take your point, but…","Entendo o que você diz, mas…"],["I'm not sure I agree with that.","Não sei se concordo com isso."],["That's one way of looking at it, but…","É um jeito de ver, mas…"],["With respect, I think…","Com todo o respeito, acho que…"],["I see it slightly differently.","Vejo um pouco diferente."],["Couldn't we also consider…?","Não poderíamos também considerar…?"],["Let's agree to disagree.","Vamos concordar em discordar."],["You've got a point there.","Nisso você tem razão."]]}
];

/* ───────── AI ROLE-PLAYS ───────── */
const ROLEPLAY = [
{t:'At a café', lvl:'A2', role:'a friendly barista in a busy café in New York', goal:'order a drink and something to eat, ask about prices and pay'},
{t:'Meeting someone new', lvl:'A2', role:'a curious, friendly Canadian you meet at a friend\'s party', goal:'introduce yourself, say where you\'re from, what you do and why you\'re learning English'},
{t:'Hotel problem', lvl:'B1', role:'a polite hotel receptionist in London', goal:'check in and complain politely about a problem with your room'},
{t:'Talking about a series', lvl:'B1', role:'an enthusiastic friend who loves series and films and has opinions about everything', goal:'recommend a series you like, explain the plot without spoilers and react to your friend\'s recommendation'},
{t:'Book club', lvl:'B1', role:'the host of a small online book club, warm and curious', goal:'talk about a book you have read: the story, the characters, what you liked and didn\'t like'},
{t:'Doctor\'s appointment', lvl:'B1', role:'a calm, kind GP (family doctor) in the UK', goal:'explain your symptoms, answer questions and understand the advice'},
{t:'Daily stand-up', lvl:'B2', role:'the team lead of a software team running a quick daily stand-up meeting', goal:'say what you did yesterday, what you\'ll do today and explain a blocker'},
{t:'Job interview', lvl:'B2', role:'a friendly but professional interviewer for a senior developer position at an international tech company', goal:'present yourself, talk about your experience and a project that went wrong, and ask good questions'},
{t:'Negotiating a deadline', lvl:'B2', role:'a slightly stressed project manager who wants the work delivered earlier', goal:'politely negotiate a realistic deadline and explain why'},
{t:'Returning a product', lvl:'B1', role:'a customer service assistant in a shop who follows the rules strictly', goal:'return a faulty product without a receipt and get a refund or an exchange'},
{t:'Debate', lvl:'C1', role:'a sharp, polite debate partner who always takes the opposite view', goal:'defend your opinion on whether social media does more harm than good, using examples and polite disagreement'},
{t:'Telling a funny story', lvl:'B2', role:'an old friend you haven\'t seen for years, who laughs easily and asks lots of follow-up questions', goal:'tell a funny or embarrassing thing that happened to you recently and catch up on each other\'s lives'},
{t:'Free conversation', lvl:'B1', role:'a patient, encouraging English conversation partner from Ireland', goal:'chat freely about anything: your week, your plans, your hobbies; keep the conversation going'}
];

/* ───────── SPEAKING TEST ───────── */
const ORALE = [
{lvl:'A2', t:'About you', p:'Introduce yourself: where you\'re from, where you live, what you do and what you like doing in your free time.', prep:30, talk:60},
{lvl:'A2', t:'Your home', p:'Describe the place where you live. What do you like about it, and what would you change?', prep:30, talk:60},
{lvl:'A2', t:'Last weekend', p:'Talk about what you did last weekend.', prep:30, talk:60},
{lvl:'B1', t:'A memorable trip', p:'Describe a trip you will never forget: where you went, who with, what happened and why it was special.', prep:60, talk:90},
{lvl:'B1', t:'Then and now', p:'How is your life different now from ten years ago? Compare your work, your habits and your free time.', prep:60, talk:90},
{lvl:'B1', t:'A film or series', p:'Describe a film or series you love. What is it about, who are the main characters and why would you recommend it?', prep:60, talk:90},
{lvl:'B2', t:'Learning languages', p:'«The best way to learn a language is to live in the country where it is spoken.» Do you agree? Give reasons and examples.', prep:60, talk:120},
{lvl:'B2', t:'Remote work', p:'What are the advantages and disadvantages of working from home? Would you choose it for the rest of your career?', prep:60, talk:120},
{lvl:'B2', t:'A difficult decision', p:'Talk about a difficult decision you made. What were the options, what did you choose, and would you do the same again?', prep:60, talk:120},
{lvl:'C1', t:'Technology and attention', p:'Some people say technology has made us less able to concentrate. To what extent do you agree?', prep:60, talk:150},
{lvl:'C1', t:'Success', p:'What does «success» mean to you? Has your idea of success changed over time?', prep:60, talk:150},
{lvl:'C1', t:'Cities of the future', p:'How do you think cities will change in the next thirty years? Which changes worry you, and which excite you?', prep:60, talk:150}
];
