UNITS.forEach(u=>{ if(ORDER[u.id]) u.ex.push({t:'order', title:'Word order · Monte a frase', items:ORDER[u.id]}); });

/* ───────── FALSE FRIENDS: [english, real meaning, trap, example] ───────── */
const FALSI = [
["actually","na verdade, na real","PT atualmente = currently, nowadays","Actually, I've never been to Paris."],
["pretend","fingir","PT pretender = intend, plan","He pretended to be asleep."],
["push","empurrar","PT puxar = pull","Push the door, don't pull it."],
["library","biblioteca","PT livraria = bookshop","I borrowed this novel from the library."],
["parents","pais (pai e mãe)","PT parentes = relatives","My parents live in Recife."],
["college","faculdade, ensino superior","PT colégio = school","She's in her second year of college."],
["eventually","finalmente, no fim","PT eventualmente = occasionally, possibly","We eventually found the hotel at midnight."],
["fabric","tecido","PT fábrica = factory","This fabric is soft and light."],
["costume","fantasia (de festa)","PT costume = habit, custom","She went to the party in a vampire costume."],
["exquisite","requintado, primoroso","PT esquisito = weird, strange","The food was exquisite."],
["sensible","sensato","PT sensível = sensitive","That's a sensible decision."],
["realize","perceber, dar-se conta","PT realizar = carry out, achieve","I realised I had left my keys at home."],
["attend","frequentar, comparecer a","PT atender = answer, serve","Did you attend the meeting?"],
["assist","ajudar","PT assistir = watch","Can I assist you with your bags?"],
["intend","pretender, ter a intenção","PT entender = understand","I intend to finish this by Friday."],
["lunch","almoço","PT lanche = snack","What did you have for lunch?"],
["novel","romance (livro)","PT novela = soap opera","She's writing her first novel."],
["notice","perceber; aviso","PT notícia = news","Did you notice his new haircut?"],
["prejudice","preconceito","PT prejuízo = loss, damage","We must fight prejudice."],
["comprehensive","abrangente, completo","PT compreensivo = understanding","It's a comprehensive guide to the city."],
["resume","retomar, recomeçar","PT resumir = summarise","The meeting will resume after lunch."],
["sympathetic","solidário, compreensivo","PT simpático = nice, friendly","She was very sympathetic when I was ill."],
["embarrassed","envergonhado, constrangido","PT embaraçado; ES embarazada = pregnant","I was so embarrassed when I fell."],
["exit","saída","PT êxito; ES éxito = success","The exit is on the left."],
["carpet","tapete, carpete","ES carpeta = folder","There's coffee on the carpet!"],
["lecture","palestra, aula expositiva","PT leitura; ES lectura = reading","The lecture lasted two hours."],
["record","gravar; registro","PT recordar = remember","Can I record this conversation?"],
["support","apoiar","PT suportar = put up with, stand","My family always supported me."],
["argument","discussão, briga; argumento","usado mais para briga do que em PT","They had an argument about money."],
["injury","ferimento, lesão","PT injúria = insult","He missed the game because of an injury."],
["policy","política (regra de uma empresa)","PT polícia = police","The company has a strict privacy policy."],
["terrific","ótimo, incrível","PT terrível = terrible","You look terrific!"],
["large","grande","ES largo = long","Can I have a large coffee?"],
["rope","corda","ES ropa = clothes","Tie it with a rope."],
["constipated","com prisão de ventre","ES constipado = with a cold (I have a cold)","Don't say «I'm constipated» when you have a cold!"],
["preservative","conservante","PT preservativo = condom","This juice has no preservatives."],
["mayor","prefeito","ES mayor = older, bigger","The mayor opened the new park."],
["tenant","inquilino","PT tenente = lieutenant","The tenant pays the rent on the 5th."],
["casualty","vítima (de acidente)","PT casualidade = chance","There were no casualties in the fire."],
["retire","aposentar-se","PT retirar = remove, take out","My father retired last year."],
["data","dados","PT data = date","We need more data before we decide."],
["anthem","hino","PT antena = antenna","Everyone stood for the national anthem."],
["educated","culto, instruído (com estudo)","PT educado = polite","She's a highly educated woman."],
["discussion","conversa, debate (calmo)","PT discussão = argument, row","We had a long discussion about the project."],
["deception","engano, fraude","PT decepção = disappointment","The whole story was a deception."],
["pull","puxar","PT pular = jump","Pull the handle to open it."],
["balcony","varanda, sacada","PT balcão = counter","We had breakfast on the balcony."],
["agenda","pauta (de reunião)","PT agenda = diary, planner","What's on the agenda today?"]
];

/* ───────── IRREGULAR VERBS: base → {p, pp, pt, ex} ───────── */
const VERBI = {};
[
["arise","arose","arisen","surgir"],["awake","awoke","awoken","despertar"],["be","was/were","been","ser, estar"],["bear","bore","born/borne","suportar; dar à luz"],["beat","beat","beaten","bater, vencer"],["become","became","become","tornar-se"],["begin","began","begun","começar"],["bend","bent","bent","dobrar"],["bet","bet","bet","apostar"],["bite","bit","bitten","morder"],["bleed","bled","bled","sangrar"],["blow","blew","blown","soprar"],["break","broke","broken","quebrar"],["bring","brought","brought","trazer"],["build","built","built","construir"],["burn","burnt/burned","burnt/burned","queimar"],["buy","bought","bought","comprar"],["catch","caught","caught","pegar"],["choose","chose","chosen","escolher"],["come","came","come","vir"],["cost","cost","cost","custar"],["cut","cut","cut","cortar"],["deal","dealt","dealt","lidar"],["dig","dug","dug","cavar"],["do","did","done","fazer"],["draw","drew","drawn","desenhar"],["dream","dreamt/dreamed","dreamt/dreamed","sonhar"],["drink","drank","drunk","beber"],["drive","drove","driven","dirigir"],["eat","ate","eaten","comer"],["fall","fell","fallen","cair"],["feed","fed","fed","alimentar"],["feel","felt","felt","sentir"],["fight","fought","fought","lutar"],["find","found","found","encontrar"],["fly","flew","flown","voar"],["forbid","forbade","forbidden","proibir"],["forget","forgot","forgotten","esquecer"],["forgive","forgave","forgiven","perdoar"],["freeze","froze","frozen","congelar"],["get","got","got/gotten","conseguir, obter"],["give","gave","given","dar"],["go","went","gone","ir"],["grow","grew","grown","crescer"],["hang","hung","hung","pendurar"],["have","had","had","ter"],["hear","heard","heard","ouvir"],["hide","hid","hidden","esconder"],["hit","hit","hit","bater"],["hold","held","held","segurar"],["hurt","hurt","hurt","machucar"],["keep","kept","kept","manter, guardar"],["know","knew","known","saber, conhecer"],["lay","laid","laid","colocar, pôr (deitado)"],["lead","led","led","liderar"],["learn","learnt/learned","learnt/learned","aprender"],["leave","left","left","sair, deixar"],["lend","lent","lent","emprestar (dar)"],["let","let","let","deixar, permitir"],["lie","lay","lain","deitar-se"],["light","lit","lit","acender"],["lose","lost","lost","perder"],["make","made","made","fazer"],["mean","meant","meant","significar"],["meet","met","met","conhecer, encontrar"],["pay","paid","paid","pagar"],["put","put","put","pôr"],["quit","quit","quit","largar, desistir"],["read","read","read","ler"],["ride","rode","ridden","andar (de bicicleta, cavalo)"],["ring","rang","rung","tocar (campainha)"],["rise","rose","risen","subir, levantar-se"],["run","ran","run","correr"],["say","said","said","dizer"],["see","saw","seen","ver"],["seek","sought","sought","procurar"],["sell","sold","sold","vender"],["send","sent","sent","enviar"],["set","set","set","definir, pôr"],["shake","shook","shaken","sacudir"],["shine","shone","shone","brilhar"],["shoot","shot","shot","atirar; filmar"],["show","showed","shown","mostrar"],["shut","shut","shut","fechar"],["sing","sang","sung","cantar"],["sink","sank","sunk","afundar"],["sit","sat","sat","sentar"],["sleep","slept","slept","dormir"],["slide","slid","slid","deslizar"],["speak","spoke","spoken","falar"],["spend","spent","spent","gastar; passar (tempo)"],["spill","spilt/spilled","spilt/spilled","derramar"],["split","split","split","dividir"],["spread","spread","spread","espalhar"],["stand","stood","stood","ficar de pé"],["steal","stole","stolen","roubar"],["stick","stuck","stuck","grudar"],["sting","stung","stung","picar"],["strike","struck","struck","atingir; fazer greve"],["swear","swore","sworn","jurar; xingar"],["swim","swam","swum","nadar"],["take","took","taken","pegar, levar"],["teach","taught","taught","ensinar"],["tear","tore","torn","rasgar"],["tell","told","told","contar, dizer"],["think","thought","thought","pensar"],["throw","threw","thrown","jogar, atirar"],["understand","understood","understood","entender"],["wake","woke","woken","acordar"],["wear","wore","worn","vestir, usar"],["win","won","won","ganhar"],["write","wrote","written","escrever"]
].forEach(([b,p,pp,pt])=>{ VERBI[b]={p,pp,pt}; });
VERBI.lie.ex='lie (deitar) é irregular; lie (mentir) é regular: lied, lied.';
VERBI.lay.ex='Não confunda: lay (pôr) – laid – laid × lie (deitar-se) – lay – lain.';
VERBI.get.ex='gotten é americano; o britânico usa got.';
VERBI.read.ex='Escreve-se igual, mas o passado soa «red».';
VERBI.bear.ex='born só na passiva de nascer: I was born.';
