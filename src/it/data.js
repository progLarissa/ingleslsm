<script>
const UNITS = [
/* ───────────────────────── UNITÀ 1 ───────────────────────── */
{
id:1, lvl:'A2 → B1', band:0,
title:'Articoli e preposizioni articolate',
sub:'O esqueleto de qualquer frase: il / lo / gli, del, nello, dal…',
focus:'articoli determinativi (il, lo, l\', la, i, gli, le), preposizioni articolate, partitivo, possessivi con articolo',
lesson:`
<p class="lead">Em italiano o artigo depende do <em>som inicial</em> da palavra seguinte, e as preposições se fundem com ele muito mais do que em português. Parece detalhe, mas aparece em todas as frases: vale a pena automatizar logo.</p>
<h3>Artigos definidos</h3>
<div class="tw"><table class="tbl">
<tr><th></th><th>diante de consoante</th><th>s + consoante, z, gn, ps, x, y</th><th>diante de vogal</th></tr>
<tr><th>masc. sing.</th><td>il libro</td><td>lo studente, lo zaino, lo psicologo</td><td>l'amico</td></tr>
<tr><th>masc. pl.</th><td>i libri</td><td>gli studenti, gli zaini</td><td>gli amici</td></tr>
<tr><th>fem. sing.</th><td>la casa</td><td>la studentessa</td><td>l'amica</td></tr>
<tr><th>fem. pl.</th><td>le case</td><td>le studentesse</td><td>le amiche</td></tr>
</table></div>
<p>Indefinidos seguem a mesma lógica: <i>un libro, uno zaino, un amico</i> (sem apóstrofo no masculino!), <i>una casa, un'amica</i>.</p>
<h3>Preposições articuladas</h3>
<div class="tw"><table class="tbl c">
<tr><th></th><th>il</th><th>lo</th><th>l'</th><th>la</th><th>i</th><th>gli</th><th>le</th></tr>
<tr><th>di</th><td>del</td><td>dello</td><td>dell'</td><td>della</td><td>dei</td><td>degli</td><td>delle</td></tr>
<tr><th>a</th><td>al</td><td>allo</td><td>all'</td><td>alla</td><td>ai</td><td>agli</td><td>alle</td></tr>
<tr><th>da</th><td>dal</td><td>dallo</td><td>dall'</td><td>dalla</td><td>dai</td><td>dagli</td><td>dalle</td></tr>
<tr><th>in</th><td>nel</td><td>nello</td><td>nell'</td><td>nella</td><td>nei</td><td>negli</td><td>nelle</td></tr>
<tr><th>su</th><td>sul</td><td>sullo</td><td>sull'</td><td>sulla</td><td>sui</td><td>sugli</td><td>sulle</td></tr>
</table></div>
<p><i>Con</i> e <i>per</i> normalmente não se fundem: <i>con il treno, per la strada</i>.</p>
<h3>Partitivo: "um pouco de", "alguns"</h3>
<p><i>di</i> + artigo indica quantidade indeterminada: <i>Vorrei <b>del</b> pane</i> (quero pão), <i>Ho conosciuto <b>degli</b> studenti brasiliani</i> (alguns estudantes). Nas negativas some: <i>Non ho pane</i>.</p>
<h3>Possessivos levam artigo</h3>
<p>Como no português de Portugal: <i>il mio libro, la tua casa, i nostri amici</i>. Exceção: parentes no singular, sem adjetivo nem diminutivo → <i>mia madre, tuo fratello</i>. Mas: <i>i miei fratelli, la mia sorellina, la loro madre</i> (<i>loro</i> sempre com artigo).</p>
<div class="trap"><span class="pen">Attenzione!</span> Ir à casa ou ao consultório de alguém usa <b>da</b>: <i>vado dal medico, vado da Marco</i> (ES <i>al médico</i>, PT <i>ao médico</i>). Lugares "institucionais" usam <b>in</b> sem artigo: <i>in banca, in ufficio, in biblioteca, in centro, in montagna</i>. Cidades com <b>a</b> (<i>a Roma</i>), países com <b>in</b> (<i>in Italia</i>), países plurais com artigo (<i>negli Stati Uniti</i>).</div>
<div class="trap"><span class="pen">Per chi parla spagnolo</span> <b>lo</b> não é neutro: é artigo masculino (<i>lo zio</i>). E <b>gli</b> é o plural masculino, nada a ver com o <i>le</i> indireto do espanhol.</div>
`,
reading:{
title:'Sabato mattina a Bologna',
text:`<p>Il sabato mattina Giulia esce presto dalla sua casa in via Saragozza e va al mercato delle Erbe. Prima si ferma al bar sotto i [[portici|pórticos, arcadas]] e prende un cappuccino con una brioche. Al [[bancone|balcão]] c'è sempre lo stesso barista, un signore con gli occhiali che conosce tutti i clienti per nome. Poi entra nel mercato: compra del pane, delle [[albicocche|damascos]] e un po' di mortadella per il pranzo. Le piace parlare con i venditori, che le danno consigli sulle ricette e sulle stagioni della frutta.</p>
<p>Verso le undici passa dalla libreria vicino all'università, dove lavora sua sorella. Le due sorelle [[chiacchierano|conversam, batem papo]] dei loro progetti per l'estate: Giulia vorrebbe andare negli Stati Uniti, ma sua sorella preferisce le isole greche. Alla fine decidono di [[rimandare|adiar]] la discussione. A mezzogiorno Giulia torna a casa con lo zaino pieno e le gambe stanche, ma contenta: per lei il sabato è il giorno più bello della settimana.</p>`,
q:[
["Dove fa colazione Giulia?",["Al mercato","In un bar sotto i portici","A casa","In libreria"],1,"«Prima si ferma al bar sotto i portici e prende un cappuccino»."],
["Che cosa compra per il pranzo?",["Solo frutta","Pane, albicocche e mortadella","Un cappuccino e una brioche","Dei libri"],1,"Pane, albicocche e mortadella: note os partitivos del, delle."],
["Chi lavora in libreria?",["Il barista","Una venditrice","La sorella di Giulia","Giulia"],2,"«…la libreria vicino all'università, dove lavora sua sorella»."],
["Su che cosa non sono d'accordo le sorelle?",["Sul ristorante","Sulla destinazione delle vacanze","Sul lavoro","Sul mercato"],1,"Giulia quer ir aos Estados Unidos, a irmã prefere as ilhas gregas."],
["«Rimandare la discussione» significa…",["continuare a discutere","discuterne un'altra volta","litigare","dimenticare il problema"],1,"Rimandare = adiar."]
]},
ex:[
{t:'fill', title:'Completa con articolo o preposizione articolata', items:[
["Ho lasciato le chiavi ___ tavolo. (su)",["sul"],"su + il = sul"],
["Domani vado ___ dentista. (da)",["dal"],"Ir ao profissional = da + artigo."],
["Il treno parte ___ stazione centrale alle otto. (da)",["dalla"]],
["Abbiamo parlato ___ problemi della scuola. (di)",["dei"]],
["Vorrei ___ pane fresco, per favore. (partitivo)",["del"]],
["Ho conosciuto ___ studenti brasiliani. (partitivo)",["degli"],"studenti começa por s + consoante → gli → degli."],
["Il libro è ___ zaino. (in)",["nello"]],
["Ho regalato un fiore ___ zia di Marco. (a)",["alla"]],
["___ psicologo mi ha consigliato di riposare. (articolo)",["lo"]],
["Stasera ceno con ___ madre. (possessivo, 1ª persona)",["mia"],"Parente no singular: sem artigo."],
["Abito ___ Stati Uniti da tre anni. (in)",["negli"]],
["Ho messo il latte ___ frigo. (in)",["nel"]]
]},
{t:'mc', title:'Scegli la forma giusta', items:[
["Vado ___ medico perché ho la febbre.",["al","dal","nel"],1,"Profissionais e pessoas: da."],
["Lavoro ___ banca da cinque anni.",["nella","in","alla"],1,"In banca, in ufficio: sem artigo."],
["Qual è corretta?",["Il mio fratello vive a Milano.","Mio fratello vive a Milano.","Lo mio fratello vive a Milano."],1,"Parente no singular sem adjetivo: sem artigo."],
["Ho comprato ___ zaini nuovi.",["i","gli","le"],1],
["Quale frase è corretta?",["Loro madre è medico.","La loro madre è medico.","Sua loro madre è medico."],1,"Loro leva sempre artigo."],
["Ci vediamo ___ otto davanti al cinema.",["alle","sulle","nelle"],0,"Horas: alle otto, all'una."]
]},
{t:'fix', title:'Correggi la parte sottolineata', items:[
["Domani vado {al} dentista.",["dal"],"Domani vado dal dentista."],
["Ho visto {i} zii di Paolo alla festa.",["gli"],"Ho visto gli zii di Paolo alla festa."],
["Ho incontrato {un'amico} al bar.",["un amico"],"Ho incontrato un amico al bar."],
["Abitiamo {nella} Italia da due anni.",["in"],"Abitiamo in Italia da due anni."],
["{La mia} sorella studia medicina.",["mia"],"Mia sorella studia medicina."]
]}
],
write:{
task:'Descreva o seu bairro ou a sua cidade ideal: onde ficam as coisas, o que se compra, aonde você vai e com quem.',
words:[120,160],
targets:[
{l:'8 preposições articuladas', re:'<(dell\'|all\'|dall\'|nell\'|sull\'|(del|dello|della|dei|degli|delle|al|allo|alla|ai|agli|alle|dal|dallo|dalla|dai|dagli|dalle|nel|nello|nella|nei|negli|nelle|sul|sullo|sulla|sui|sugli|sulle)>)', n:8},
{l:'2 artigos lo / gli', re:'<(lo|gli)>', n:2},
{l:'1 "da" + pessoa ou profissional', manual:true}
],
model:`Nel mio quartiere ideale le case sono basse e colorate e le strade sono piene di alberi. Al centro della piazza c'è una fontana, e intorno ci sono dei piccoli negozi: il panettiere, il fruttivendolo e una libreria con gli scaffali fino al soffitto. La mattina vado al bar sotto casa e prendo un caffè al bancone. Il sabato faccio la spesa al mercato: compro del pane, delle verdure e un po' di formaggio dai contadini della zona. Quando sto male vado dal medico, che ha lo studio sopra la farmacia. Nel pomeriggio porto il cane al parco, sulla collina, dove si vedono i tetti di tutta la città. La sera ceno con mia madre o con gli amici in una trattoria nella via principale.`
}
},

/* ───────────────────────── UNITÀ 2 ───────────────────────── */
{
id:2, lvl:'A2 → B1', band:0,
title:'Passato prossimo: essere o avere?',
sub:'O erro número 1 de quem fala espanhol e português.',
focus:'passato prossimo, scelta dell\'ausiliare essere/avere, accordo del participio, participi irregolari',
lesson:`
<p class="lead">Espanhol e português usam um só auxiliar (<i>haber</i>, <i>ter</i>). O italiano usa dois, e escolher o errado soa imediatamente estrangeiro. A boa notícia: a regra é bastante previsível.</p>
<h3>Quem usa <b>essere</b></h3>
<ul class="dots">
<li>Verbos de movimento com destino ou origem: <i>andare, venire, arrivare, partire, uscire, entrare, tornare, cadere</i>.</li>
<li>Mudança de estado: <i>nascere, morire, diventare, crescere, invecchiare, aumentare, dimagrire</i>.</li>
<li>Estado/permanência: <i>essere, stare, restare, rimanere</i>.</li>
<li>Todos os reflexivos: <i>mi sono svegliata, ci siamo divertiti</i>.</li>
<li><i>piacere, sembrare, succedere, costare, bastare, mancare, durare, servire</i>.</li>
</ul>
<p>Os transitivos (com objeto direto) usam <b>avere</b>: <i>ho mangiato, ho visto, ho scritto</i>. Também alguns intransitivos de atividade: <i>ho dormito, ho camminato, ho lavorato, ho viaggiato</i>.</p>
<h3>Concordância do particípio</h3>
<p>Com <b>essere</b>, o particípio concorda com o sujeito: <i>Maria è andat<b>a</b>, le ragazze sono uscit<b>e</b>, i prezzi sono aumentat<b>i</b></i>. Com <b>avere</b>, fica invariável: <i>Maria ha mangiat<b>o</b></i> (ver unidade 4 para a exceção com pronomes).</p>
<h3>Verbos com os dois auxiliares</h3>
<p>Mudam conforme tenham objeto: <i>Ho finito il lavoro</i> / <i>Il film è finito</i>; <i>Ho salito le scale</i> / <i>Sono salita sul treno</i>; <i>Ho cambiato casa</i> / <i>Sei cambiata tanto!</i> Igual para <i>cominciare, passare, correre, scendere</i>.</p>
<h3>Particípios irregulares que mais aparecem</h3>
<div class="chips">fatto · detto · scritto · letto · preso · messo · visto · aperto · chiuso · chiesto · risposto · rimasto · scelto · spento · acceso · vinto · perso · corso · nato · morto · vissuto · successo · rotto · deciso · sceso · offerto · speso · tradotto · promesso · discusso</div>
<div class="trap"><span class="pen">Attenzione!</span> <i>Mi è piaciuto il film / Mi sono piaciuti i film</i>: o particípio concorda com aquilo que agrada, que é o sujeito gramatical.</div>
<div class="plus"><span class="pen">Vantaggio</span> Uso: no norte e no italiano padrão, o <i>passato prossimo</i> cobre o nosso pretérito perfeito simples (<i>ieri ho fatto</i> = ontem fiz). O <i>passato remoto</i> fica para textos escritos e para o Sul (unidade 12).</div>
`,
reading:{
title:'Un weekend andato storto',
text:`<p>Venerdì sera io e Marco siamo partiti per Torino in treno. Il viaggio è cominciato male: vicino a Milano il treno si è fermato per due ore per un [[guasto|avaria, defeito]]. Siamo arrivati in albergo dopo mezzanotte e il receptionist ci ha detto che la nostra camera non era più disponibile. Alla fine ci hanno dato una stanza piccolissima, vicino all'ascensore.</p>
<p>Il sabato, per fortuna, è andato meglio. Abbiamo visitato il Museo Egizio, abbiamo passeggiato lungo il Po e abbiamo mangiato in una trattoria che ci ha consigliato un amico. Marco ha ordinato il vitello tonnato, io ho scelto gli agnolotti. Domenica mattina, però, è successa un'altra cosa: ho lasciato il telefono sul tavolo della colazione e me ne sono [[accorta|percebi (accorgersi)]] solo in stazione. Sono tornata di corsa in albergo e, per fortuna, una cameriera l'aveva già consegnato alla reception. Abbiamo preso il treno delle undici [[per un pelo|por um triz]].</p>`,
q:[
["Perché sono arrivati tardi a Torino?",["Hanno perso il treno","Il treno si è fermato per un guasto","Hanno sbagliato albergo","Si sono persi"],1],
["Che problema c'è stato in albergo?",["Era chiuso","La camera prenotata non era disponibile","Non c'era l'ascensore","Era troppo caro"],1],
["Chi ha consigliato la trattoria?",["Il receptionist","Un amico","Marco","Una cameriera"],1],
["Chi racconta la storia?",["Marco","Una donna","Il receptionist","Non si può sapere"],1,"«me ne sono accorta», «sono tornata»: a concordância do particípio revela que quem narra é mulher."],
["«Per un pelo» significa…",["con calma","quasi non ce l'hanno fatta","in anticipo","per sbaglio"],1]
]},
ex:[
{t:'fill', title:'Coniuga al passato prossimo', items:[
["Ieri Marta ___ con le colleghe. (uscire)",["è uscita"]],
["Noi ___ troppo alla festa. (mangiare)",["abbiamo mangiato"]],
["Le mie amiche ___ in ritardo. (arrivare)",["sono arrivate"]],
["Quanto ___ il biglietto? (costare)",["è costato"],"costare usa essere."],
["Il concerto ___ a mezzanotte. (finire)",["è finito"],"Sem objeto → essere."],
["Chi ___ questa lettera? (scrivere)",["ha scritto"]],
["Mi ___ molto il film. (piacere)",["è piaciuto"]],
["Stamattina io (f.) ___ alle sei. (svegliarsi)",["mi sono svegliata"]],
["Paolo ___ a Londra per dieci anni. (vivere)",["ha vissuto","è vissuto"],"vivere aceita os dois auxiliares."],
["Che cosa ___ ? (succedere)",["è successo"]],
["I prezzi ___ molto quest'anno. (aumentare)",["sono aumentati"]],
["Noi ___ le scale a piedi. (salire)",["abbiamo salito"],"Com objeto (le scale) → avere."]
]},
{t:'mc', title:'Scegli la risposta giusta', items:[
["Abbiamo ___ le scale a piedi.",["salito","saliti","salite"],0,"Com avere o particípio não concorda."],
["Il film ___ alle dieci.",["ha cominciato","è cominciato"],1],
["Le ragazze si sono ___ molto.",["divertito","divertite","divertiti"],1],
["Quante ore ___ il viaggio?",["ha durato","è durato"],1],
["Ho ___ il libro sul tavolo.",["mettuto","messo","misso"],1],
["Ieri ___ dodici chilometri.",["ho camminato","sono camminato"],0,"Atividade sem destino → avere."]
]},
{t:'fix', title:'Correggi la parte sottolineata', items:[
["Ieri {ho andato} al cinema con Luca.",["sono andato","sono andata"],"Ieri sono andato/a al cinema con Luca."],
["Maria è {nato} a Napoli.",["nata"],"Maria è nata a Napoli."],
["Abbiamo {apriti} la finestra.",["aperto"],"Abbiamo aperto la finestra."],
["Mi {è piaciuta} molto i tuoi biscotti.",["sono piaciuti"],"Mi sono piaciuti molto i tuoi biscotti."],
["Gli studenti {hanno arrivato} tardi.",["sono arrivati"],"Gli studenti sono arrivati tardi."],
["{Ho rimasto} a casa tutto il giorno.",["sono rimasto","sono rimasta"],"Sono rimasto/a a casa tutto il giorno."]
]}
],
write:{
task:'Conte uma viagem ou um fim de semana em que algo deu errado. Sequência de fatos, do começo ao fim.',
words:[130,170],
targets:[
{l:'6 tempos compostos com essere', re:'<(sono|sei|è|siamo|siete)\\s+(W+\\s+)?W+(at|ut|it|st|rt|nat|mort)[oaie]>', n:6},
{l:'3 particípios irregulares', re:'<(fatt|dett|scritt|lett|pres|mess|vist|apert|chius|chiest|rispost|rimast|scelt|spent|acces|vint|pers|cors|nat|mort|vissut|success|rott|decis|sces|offert|spes|promess|tradott|discuss)[oaie]>', n:3},
{l:'1 verbo reflexivo no passado', re:'<(mi|ti|si|ci|vi)\\s+(sono|sei|è|siamo|siete)>', n:1}
],
model:`L'estate scorsa io e mia sorella siamo andate a Napoli per un weekend. Siamo partite venerdì mattina, ma il volo è partito con tre ore di ritardo. Quando siamo arrivate, abbiamo scoperto che la valigia di mia sorella non c'era: è rimasta a Roma! Abbiamo compilato un modulo all'aeroporto e poi abbiamo preso un taxi per il centro. La sera ci siamo consolate con una pizza enorme in una pizzeria di via dei Tribunali. Il sabato è stato bellissimo: abbiamo visto il Cristo Velato, abbiamo fatto una passeggiata sul lungomare e siamo salite al Vomero con la funicolare. Domenica, però, è cominciato a piovere e siamo rimaste in albergo quasi tutto il giorno. La valigia è arrivata un'ora prima della partenza. Alla fine ci siamo divertite lo stesso.`
}
},

/* ───────────────────────── UNITÀ 3 ───────────────────────── */
{
id:3, lvl:'A2 → B1', band:0,
title:'Imperfetto, passato prossimo e trapassato',
sub:'Contar histórias: cenário, ação e o que tinha acontecido antes.',
focus:'contrasto imperfetto / passato prossimo, trapassato prossimo, stare + gerundio, verbi che cambiano significato (sapere, conoscere, dovere)',
lesson:`
<p class="lead">Aqui você já joga em casa: a lógica imperfeito/perfeito é a mesma do espanhol e do português. A diferença é só que o "perfeito" italiano é composto (<i>ho fatto</i> = fiz).</p>
<div class="tw"><table class="tbl">
<tr><th>Imperfetto</th><th>Passato prossimo</th></tr>
<tr><td>cenário, descrição: <i>Era tardi e pioveva</i></td><td>ação concluída: <i>È arrivato alle dieci</i></td></tr>
<tr><td>hábito: <i>Da piccola andavo al mare</i></td><td>vez única ou contada: <i>Ci sono andata tre volte</i></td></tr>
<tr><td>ação em curso interrompida: <i>Mentre cucinavo…</i></td><td>…a interrupção: <i>…è suonato il telefono</i></td></tr>
<tr><td>duração sem limite</td><td>duração delimitada: <i>Ha piovuto tutto il giorno</i></td></tr>
</table></div>
<h3>Formas</h3>
<p>-<b>avo</b>/-<b>evo</b>/-<b>ivo</b>, -vi, -va, -vamo, -vate, -vano. Irregulares: <i>essere → ero, eri, era, eravamo, eravate, erano</i>; <i>fare → facevo</i>; <i>dire → dicevo</i>; <i>bere → bevevo</i>; <i>tradurre → traducevo</i>.</p>
<p><b>Stare + gerundio</b> no imperfetto para ação em andamento: <i>Stavo uscendo quando mi hai chiamato.</i></p>
<h3>Trapassato prossimo: o passado do passado</h3>
<p>Imperfetto de <i>avere/essere</i> + particípio: <i>Quando siamo arrivati, il treno <b>era già partito</b></i>. Corresponde ao PT <i>tinha partido</i> e ao ES <i>había salido</i>, com a mesma escolha de auxiliar da unidade 2.</p>
<h3>Verbos que mudam de sentido</h3>
<div class="tw"><table class="tbl">
<tr><th></th><th>imperfetto</th><th>passato prossimo</th></tr>
<tr><th>sapere</th><td><i>Sapevo</i> = já sabia</td><td><i>Ho saputo</i> = fiquei sabendo</td></tr>
<tr><th>conoscere</th><td><i>Conoscevo Anna</i> = já a conhecia</td><td><i>Ho conosciuto Anna</i> = fui apresentada a ela</td></tr>
<tr><th>dovere</th><td><i>Dovevo partire</i> = era para partir (talvez não tenha ido)</td><td><i>Sono dovuta partire</i> = tive que partir (e parti)</td></tr>
<tr><th>potere</th><td><i>Potevo aiutarti</i> = teria sido possível</td><td><i>Ho potuto aiutarti</i> = consegui</td></tr>
</table></div>
<div class="trap"><span class="pen">Attenzione!</span> Duração até o presente usa <b>presente + da</b>: <i>Conosco Paolo da dieci anni</i>, <i>Studio italiano da tre mesi</i>. Não use passato prossimo aqui.</div>
`,
reading:{
title:'La sera che andò via la luce',
text:`<p>Quando ero bambina passavo tutte le estati dalla nonna, in un paesino dell'Abruzzo. La casa era vecchia e un po' umida, ma aveva un giardino enorme con un [[fico|figueira]] e un [[pozzo|poço]] che non funzionava più. La mattina la nonna si alzava prima dell'alba, preparava il caffè con la moka e poi andava a lavorare nell'[[orto|horta]]. Io invece dormivo fino a tardi e, quando scendevo in cucina, trovavo sempre una fetta di pane con la marmellata di fichi.</p>
<p>Un'estate, però, è successa una cosa che non ho mai dimenticato. Era una sera di agosto e faceva un caldo terribile. Stavamo cenando in giardino quando all'improvviso è andata via la luce in tutto il paese. Io avevo paura del buio, ma la nonna ha acceso una candela, ha preso la [[fisarmonica|acordeão, sanfona]] che il nonno le aveva regalato da giovane e ha cominciato a suonare. In pochi minuti sono arrivati i vicini, ognuno con qualcosa da mangiare o da bere. Abbiamo ballato fino a mezzanotte. Ancora oggi, quando manca la luce, penso a quella sera.</p>`,
q:[
["Che cosa faceva la nonna ogni mattina?",["Dormiva fino a tardi","Faceva il caffè e lavorava nell'orto","Suonava la fisarmonica","Andava al mercato"],1],
["Perché la narratrice era spaventata?",["Per un temporale","Aveva paura del buio","Per i vicini","Per il caldo"],1],
["Chi aveva regalato la fisarmonica alla nonna?",["La nipote","I vicini","Il nonno","Nessuno"],2],
["Perché si usa l'imperfetto in «faceva un caldo terribile»?",["È un'azione puntuale","Descrive lo sfondo della scena","È un'azione futura","È un errore"],1],
["Quale fatto è anteriore a tutti gli altri del racconto?",["La nonna ha acceso una candela","Il nonno le aveva regalato la fisarmonica","Sono arrivati i vicini","Abbiamo ballato"],1,"O trapassato (aveva regalato) marca o fato mais antigo."]
]},
ex:[
{t:'fill', title:'Imperfetto, passato prossimo o trapassato?', items:[
["Quando ___ piccola, ___ in campagna. (essere / abitare)",[["ero"],["abitavo"]]],
["Mentre ___ la doccia, ___ il telefono. (fare, io / suonare)",[["facevo"],["è suonato","ha suonato"]]],
["Ieri ___ tutto il giorno. (piovere)",["è piovuto","ha piovuto"],"Duração delimitada → passato prossimo; piovere aceita os dois auxiliares."],
["Da bambino Luca ___ sempre il latte prima di dormire. (bere)",["beveva"]],
["Quando siamo arrivati, il treno ___ già ___ . (partire)",[["era"],["partito"]]],
["Non ___ che avessi una sorella: l'ho scoperto ieri. (sapere, io)",["sapevo"]],
["Ieri ___ i genitori di Anna: sono simpaticissimi! (conoscere, io)",["ho conosciuto"]],
["___ uscendo quando mi hai chiamato. (stare, io)",["stavo"]],
["Gli ho restituito il libro che mi ___ l'anno prima. (prestare)",["aveva prestato"]],
["Che tempo ___ quando siete partiti? (fare)",["faceva"]],
["Studio italiano ___ tre mesi.",["da"],"Duração até hoje: presente + da."]
]},
{t:'mc', title:'Scegli la risposta giusta', items:[
["Ieri sera ero stanca, così ___ a letto presto.",["andavo","sono andata"],1],
["Quando vivevo a Roma, ___ ogni mattina al bar.",["sono andata","andavo"],1,"Hábito."],
["«Ho saputo la notizia» significa:",["la sapevo da tempo","l'ho scoperta in quel momento"],1],
["«Dovevo partire alle otto, ma…» implica che:",["sono partito alle otto","probabilmente non sono partito alle otto"],1],
["Era la prima volta che ___ il mare.",["vedevo","ho visto","vedrò"],0],
["Quando sono arrivata, Marco ___ già ___ .",["è / uscito","era / uscito","ha / uscito"],1]
]},
{t:'fix', title:'Correggi la parte sottolineata', items:[
["Quando ero piccolo, {sono andato} spesso dai nonni.",["andavo"],"Quando ero piccolo, andavo spesso dai nonni."],
["Ieri {facevo} una passeggiata di tre ore.",["ho fatto"],"Ieri ho fatto una passeggiata di tre ore."],
["Mentre {ho cucinato}, è arrivato Paolo.",["cucinavo"],"Mentre cucinavo, è arrivato Paolo."],
["Quando sono arrivata, la festa {è già finita}.",["era già finita"],"Quando sono arrivata, la festa era già finita."],
["{Ho conosciuto} Paolo da anni: siamo amici d'infanzia.",["conosco"],"Conosco Paolo da anni: siamo amici d'infanzia."]
]}
],
write:{
task:'Conte uma lembrança de infância: primeiro o cenário (como era, o que se fazia sempre), depois um acontecimento preciso.',
words:[150,190],
targets:[
{l:'6 verbos no imperfetto', re:'<W+(avo|evo|ivo|ava|eva|iva|avamo|evamo|ivamo|avano|evano|ivano)>|<(ero|eri|era|eravamo|erano)>', n:6},
{l:'3 verbos no passato prossimo', re:'<(ho|hai|ha|abbiamo|avete|hanno|sono|sei|è|siamo|siete)\\s+(W+\\s+)?W+(at|ut|it|tt|st|rt|s)[oaie]>', n:3},
{l:'1 trapassato prossimo', re:'<(avevo|avevi|aveva|avevamo|avevate|avevano|ero|eri|era|eravamo|eravate|erano)\\s+(già\\s+|mai\\s+)?W+(at|ut|it|tt|st|rt)[oaie]>', n:1},
{l:'1 stavo + gerúndio', re:'<(stavo|stavi|stava|stavamo|stavate|stavano)\\s+W+(ando|endo)>', n:1}
],
model:`Quando avevo otto anni abitavo in una piccola città vicino al mare. Ogni domenica mio padre ci portava in spiaggia con una vecchia macchina rossa che faceva un rumore terribile. Mia madre preparava i panini con la frittata e mio fratello e io litigavamo per tutto il viaggio. La spiaggia era quasi sempre vuota e l'acqua era freddissima, ma a noi non importava. Una domenica di settembre, però, è successa una cosa strana. Stavamo costruendo un castello di sabbia quando mio fratello ha trovato una bottiglia con un messaggio dentro. L'abbiamo aperta con le mani che tremavano. Dentro c'era una lettera scritta in francese: una bambina di Marsiglia l'aveva buttata in mare due anni prima. Le abbiamo risposto e per molti anni siamo rimaste amiche di penna. Ancora oggi, quando vedo una bottiglia sulla spiaggia, mi fermo a guardarla.`
}
},

/* ───────────────────────── UNITÀ 4 ───────────────────────── */
{
id:4, lvl:'B1', band:0,
title:'Pronomi diretti, indiretti e combinati',
sub:'Glielo, me ne, te la: o italiano adora juntar pronomes.',
focus:'pronomi diretti (lo, la, li, le), indiretti (gli, le, Le), pronomi combinati (me lo, glielo), posizione, accordo del participio con lo/la/li/le',
lesson:`
<div class="tw"><table class="tbl">
<tr><th></th><th>direto</th><th>indireto</th><th>combinado com lo / la / li / le / ne</th></tr>
<tr><th>io</th><td>mi</td><td>mi</td><td><b>me</b> lo, me la, me ne</td></tr>
<tr><th>tu</th><td>ti</td><td>ti</td><td><b>te</b> lo, te la, te ne</td></tr>
<tr><th>lui</th><td>lo</td><td>gli</td><td><b>glielo</b>, gliela, glieli, gliele, gliene</td></tr>
<tr><th>lei / Lei</th><td>la / La</td><td>le / Le</td><td><b>glielo</b>, gliela… (iguais!)</td></tr>
<tr><th>noi</th><td>ci</td><td>ci</td><td><b>ce</b> lo, ce la, ce ne</td></tr>
<tr><th>voi</th><td>vi</td><td>vi</td><td><b>ve</b> lo, ve la, ve ne</td></tr>
<tr><th>loro</th><td>li / le</td><td>gli (loro, formal, depois do verbo)</td><td><b>glielo</b>…</td></tr>
</table></div>
<p>O indireto vem <b>primeiro</b> e o <i>i</i> vira <i>e</i>: <i>mi + lo → me lo</i>. Com <i>gli/le</i> tudo vira uma palavra só: <i>Il libro? <b>Gliel'</b>ho dato</i> (a ele, a ela ou a eles).</p>
<h3>Posição</h3>
<ul class="dots">
<li>Antes do verbo conjugado: <i>Lo vedo domani. Te lo dico.</i></li>
<li>Colado ao infinitivo, gerúndio e imperativo (tu/noi/voi): <i>Voglio veder<b>lo</b>, vedendo<b>lo</b>, guarda<b>lo</b>!</i></li>
<li>Com verbos modais, as duas posições: <i>Lo voglio vedere = Voglio vederlo</i>.</li>
</ul>
<h3>Concordância com o particípio</h3>
<p>Com <i>lo, la, li, le</i> antes do <i>avere</i>, o particípio concorda: <i>La torta? L'ho mangiat<b>a</b>. Le chiavi? Le ho pres<b>e</b>.</i> Com <i>ne</i> também: <i>Di mele, ne ho mangiat<b>e</b> tre.</i></p>
<div class="trap"><span class="pen">Per chi parla spagnolo</span> o <i>le</i> indireto espanhol corresponde a <b>gli</b> (masc.) ou <b>le</b> (fem.). E o <i>se lo</i> espanhol vira <b>glielo</b>: <i>se lo di → gliel'ho dato</i>.</div>
<div class="trap"><span class="pen">Per chi parla portoghese</span> não existe próclise/ênclise livre: com verbo conjugado o pronome vem sempre antes (<i>Ti amo</i>, nunca "amo-ti"). E <i>lhe</i> → <i>gli/le</i>.</div>
`,
reading:{
title:'Il trasloco',
text:`<p>Cara Elisa,<br>ti scrivo perché finalmente il [[trasloco|mudança]] è finito! Ti ricordi i libri che mi avevi prestato a febbraio? Li ho ritrovati in uno [[scatolone|caixa grande de papelão]] in cantina: te li riporto sabato, promesso. Anche la lampada di tua zia è [[saltata fuori|apareceu]]: gliela restituisco io, così la saluto.</p>
<p>Il nuovo appartamento mi piace tantissimo, anche se i vicini sono un po' strani. Quello del terzo piano, per esempio, mi ha chiesto se potevo prestargli il [[trapano|furadeira]]. Gliel'ho dato senza problemi, ma sono passate due settimane e non me l'ha ancora riportato. Ieri l'ho incontrato sulle scale e gliel'ho ricordato con gentilezza: mi ha risposto che me lo restituisce «appena finisce i lavori». Vedremo!</p>
<p>Sabato vieni alla festa di inaugurazione? Ho invitato anche Matteo e Sara, ma non mi hanno ancora risposto. Se li senti, ricordaglielo tu, per favore.<br>Un abbraccio,<br>Chiara</p>`,
q:[
["Che cosa riporterà Chiara a Elisa?",["La lampada","I libri","Il trapano","Uno scatolone"],1],
["A chi restituirà la lampada?",["A Elisa","Alla zia di Elisa","Al vicino","A Matteo"],1,"«gliela restituisco io, così la saluto» — gliela = la lampada a lei (la zia)."],
["In «non me l'ha ancora riportato», «l'» si riferisce a…",["il trapano","la lampada","un libro","il vicino"],0],
["Che cosa chiede Chiara a Elisa alla fine?",["Di portare dei libri","Di ricordare la festa a Matteo e Sara","Di parlare con il vicino","Di aiutarla con il trasloco"],1],
["«Ricordaglielo» significa:",["ricorda a loro la festa","ricordati di loro","ricorda me a loro","ricordalo a me"],0]
]},
ex:[
{t:'fill', title:'Completa con il pronome', items:[
["Hai visto Marta? Sì, ___ ho vista ieri.",["l'"]],
["Hai comprato le mele? Sì, ___ ho comprate.",["le"]],
["Hai telefonato a Paolo? No, ___ telefono stasera.",["gli"]],
["Hai scritto alla professoressa? Sì, ___ ho scritto un'email.",["le"]],
["Mi presti la bici? Sì, ___ presto volentieri.",["te la"]],
["Hai dato il libro a Luca? Sì, ___ ho dato.",["gliel'","glielo"]],
["Chi ti ha regalato quegli orecchini? ___ ha regalati mia madre.",["me li"]],
["Puoi spiegare la regola a noi? Certo, ___ spiego subito.",["ve la"]],
["Devo restituire le chiavi alla signora: ___ restituisco domani.",["gliele"]],
["Le foto? Voglio ___ prima di stamparle. (vedere)",["vederle"]],
["Quante pizze avete ordinato? ___ abbiamo ordinate quattro.",["ne"]],
["La verità? Non ___ hanno ancora detta. (a noi)",["ce l'","ce la"]]
]},
{t:'mc', title:'Scegli la risposta giusta', items:[
["Hai detto la verità a tua madre? Sì, ___ ho detta.",["gliel'","glie l'","le la"],0],
["Queste scarpe? ___ ho pagate ottanta euro.",["Le","Li","Gli"],0],
["Signora, ___ posso offrire un caffè?",["La","Le","Gli"],1,"offrire a qualcuno → indireto; Lei formal → Le."],
["Quanti biscotti hai mangiato? ___ ho mangiati cinque.",["Li","Ne","Ce"],1],
["Sto cercando Luca, ma non ___ trovo.",["gli","lo","le"],1],
["Il regalo per i bambini? ___ porto domani.",["Glielo","Se lo","Gli lo"],0]
]},
{t:'fix', title:'Correggi la parte sottolineata', items:[
["Ho visto Anna e {gli} ho detto ciao.",["le"],"Ho visto Anna e le ho detto ciao."],
["I documenti? {Gli} ho già spediti.",["li"],"I documenti? Li ho già spediti."],
["Questa canzone? L'ho {sentito} mille volte.",["sentita"],"Questa canzone? L'ho sentita mille volte."],
["Il regalo per Paolo? {Se lo} ho dato ieri.",["gliel'","glielo"],"Il regalo per Paolo? Gliel'ho dato ieri."],
["Mi passi il sale? Sì, {ti lo} passo.",["te lo"],"Mi passi il sale? Sì, te lo passo."]
]}
],
write:{
task:'Escreva um e-mail a uma amiga: você devolve coisas, pede favores e conta a quem emprestou ou deu o quê.',
words:[120,160],
targets:[
{l:'4 pronomes combinados', re:'<(me|te|ce|ve|se)\\s+(lo|la|li|le|ne)>|glie(lo|la|li|le|ne)>|gliel\'', n:4},
{l:'2 pronomes colados a infinitivo/imperativo', manual:true},
{l:'1 particípio concordado com lo/la/li/le', manual:true}
],
model:`Ciao Bea,\nti ricordi la giacca che mi avevi prestato per il matrimonio di Luca? Te la riporto giovedì, l'ho portata in lavanderia ieri. Anche il libro di cucina di tua madre è qui: gliel'ho promesso per Natale, ma se lo vedi prima diglielo tu che non l'ho perso! Ti devo chiedere un favore: mi presti la tua valigia grande per il viaggio a Lisbona? Se me la dai sabato, te la restituisco il 20. Ah, ho finalmente trovato le foto della gita in montagna: le ho stampate tutte e te ne ho messe da parte cinque. Volevo mandarle anche a Marco, ma non ho il suo indirizzo. Me lo puoi scrivere? Grazie mille, un abbraccio!\nGiulia`
}
},

/* ───────────────────────── UNITÀ 5 ───────────────────────── */
{
id:5, lvl:'B1', band:0,
title:'Ci e ne',
sub:'Duas palavrinhas sem equivalente em espanhol e português.',
focus:'particella ci (luogo, a/su qualcosa), particella ne (partitivo, di/da qualcosa), verbi pronominali volerci, metterci, farcela, andarsene, entrarci',
lesson:`
<p class="lead">Quem sabe francês reconhece <i>y</i> e <i>en</i>. Para nós, <b>ci</b> e <b>ne</b> são a maior novidade do italiano intermediário, e omiti-los é o que mais denuncia o falante de espanhol/português.</p>
<h3>CI</h3>
<ul class="dots">
<li><b>Lugar</b> (= lá, aí): <i>Vai a Roma? Sì, <b>ci</b> vado domani.</i> <i>Ci sono stata due volte.</i></li>
<li><b>a / su + coisa</b>: <i>Pensi al viaggio? Sì, <b>ci</b> penso sempre.</i> <i>Non <b>ci</b> credo! Ci conto.</i></li>
<li><b>Esserci</b>: <i>c'è, ci sono</i> (há, existe).</li>
</ul>
<h3>NE</h3>
<ul class="dots">
<li><b>Partitivo</b> (quantidade): <i>Quanti figli hai? <b>Ne</b> ho due.</i> <i>Vuoi del vino? No, grazie, non <b>ne</b> voglio.</i></li>
<li><b>di + coisa</b>: <i>Che <b>ne</b> pensi?</i> (o que você acha disso?) <i><b>Ne</b> parliamo dopo.</i></li>
<li><b>da + lugar</b>: <i>Sono entrata in banca e <b>ne</b> sono uscita dopo un'ora.</i></li>
</ul>
<h3>Verbos com ci / ne que você vai ouvir sempre</h3>
<div class="tw"><table class="tbl">
<tr><td><b>volerci</b></td><td>levar / ser preciso (impessoal)</td><td><i>Ci vuole un'ora. Ci vogliono due ore.</i></td></tr>
<tr><td><b>metterci</b></td><td>demorar (alguém)</td><td><i>Ci metto venti minuti a piedi.</i></td></tr>
<tr><td><b>farcela</b></td><td>conseguir, dar conta</td><td><i>Ce la faccio! Non ce la faccio più.</i></td></tr>
<tr><td><b>andarsene</b></td><td>ir embora</td><td><i>Me ne vado. Se n'è andata.</i></td></tr>
<tr><td><b>entrarci</b></td><td>ter a ver</td><td><i>Questo non c'entra niente.</i></td></tr>
<tr><td><b>starci</b></td><td>aceitar, topar</td><td><i>Una pizza stasera? Ci sto!</i></td></tr>
<tr><td><b>fregarsene</b></td><td>não estar nem aí (coloquial)</td><td><i>Me ne frego.</i></td></tr>
</table></div>
<div class="trap"><span class="pen">Attenzione!</span> "Tenho dois" não existe sem <b>ne</b>: <i>Ho due</i> ✗ → <i><b>Ne</b> ho due</i> ✓. E "levar tempo": <i>ci vuole</i> (impessoal) ≠ <i>ci metto</i> (eu demoro).</div>
<div class="plus"><span class="pen">Combinações</span> <i>ci + ne → ce n'è, ce ne sono</i>; <i>mi + ne → me ne</i>; <i>ci + la → ce la</i>.</div>
`,
reading:{
title:'Il paese che si svuota',
text:`<p>In Italia ci sono migliaia di piccoli comuni che rischiano di sparire. A Pietrabianca (nome inventato), sull'Appennino, quarant'anni fa gli abitanti erano duemila; oggi ce ne sono meno di trecento, e quasi la metà ha più di sessantacinque anni. I giovani se ne vanno perché il lavoro non c'è e per arrivare all'università più vicina ci vogliono due ore di autobus.</p>
<p>Il sindaco, però, non ci sta. Tre anni fa ha lanciato un'iniziativa che ha fatto parlare di sé anche all'estero: vendere le case abbandonate a un euro, a condizione che chi le compra le [[ristrutturi|reforme]] entro tre anni. «All'inizio nessuno ci credeva», racconta. «Poi sono arrivate centinaia di richieste. Ne abbiamo accettate una quarantina». Tra i nuovi abitanti ci sono una coppia di architetti olandesi, un programmatore che lavora da remoto e una famiglia argentina con tre bambini.</p>
<p>Non tutti ce l'hanno fatta: ristrutturare costa molto più di quanto molti immaginavano. Ma la scuola elementare, che doveva chiudere, l'anno scorso ha riaperto con dodici alunni. «Non è molto», ammette il sindaco, «ma ci basta per ricominciare a sperare».</p>`,
q:[
["Quanti abitanti ha oggi Pietrabianca?",["Duemila","Meno di trecento","Cinquemila","Quaranta"],1],
["Perché i giovani se ne vanno?",["Le case costano troppo","Mancano lavoro e servizi vicini","Non amano la montagna","Il sindaco li manda via"],1],
["«Il sindaco non ci sta» significa che il sindaco…",["non è in paese","non accetta la situazione","non sta bene","non ha tempo"],1],
["In «Ne abbiamo accettate una quarantina», «ne» sostituisce:",["delle case","delle richieste","degli abitanti","dei comuni"],1,"O particípio concorda: accettate (richieste, fem. pl.)."],
["Quale risultato positivo cita il testo?",["Tutti hanno ristrutturato","La scuola elementare ha riaperto","Il paese ha di nuovo duemila abitanti","L'autobus è più veloce"],1],
["«Non tutti ce l'hanno fatta» vuol dire che…",["alcuni non sono riusciti","alcuni non sono arrivati","tutti hanno finito i lavori","alcuni hanno venduto la casa"],0]
]},
ex:[
{t:'fill', title:'Ci, ne o una combinazione?', items:[
["Vai spesso a Napoli? Sì, ___ vado ogni mese.",["ci"]],
["Quanti fratelli hai? ___ ho tre.",["ne"]],
["Che cosa pensi del nuovo progetto? Che cosa ___ pensi?",["ne"]],
["Per arrivare a Milano ___ vogliono tre ore.",["ci"]],
["Quanto tempo ___ metti per prepararti la mattina?",["ci"]],
["Sono stanchissima: ___ vado a casa.",["me ne"]],
["È difficile, ma ___ la faccio!",["ce"]],
["Hai pensato alla mia proposta? Sì, ___ ho pensato molto.",["ci"]],
["Di pasta, ___ hai comprata abbastanza?",["ne"]],
["Questo non ___ entra niente con la nostra discussione.",["c'"]],
["Quante uova ci sono in frigo? ___ sono sei.",["ce ne"]],
["Gli ospiti ___ sono andati a mezzanotte.",["se ne"]]
]},
{t:'mc', title:'Scegli la risposta giusta', items:[
["Per fare il tiramisù ___ quattro uova.",["ci vuole","ci vogliono"],1],
["«Non ce la faccio più» significa:",["non lo faccio più","non riesco più a continuare","non ci vado più"],1],
["Quante sigarette fumi? Non ___ fumo nessuna.",["ci","ne","la"],1],
["Sei mai stata in Sicilia? No, non ___ sono mai stata.",["ne","ci","la"],1],
["Parliamo di politica? No, non ___ voglio parlare.",["ci","ne","lo"],1,"parlare di → ne."],
["Io ___ metto un'ora ad arrivare in ufficio.",["ci","ne","mi"],0]
]},
{t:'fix', title:'Correggi la parte sottolineata', items:[
["Hai figli? Sì, {ho} due.",["ne ho"],"Hai figli? Sì, ne ho due."],
["Vieni al cinema? No, non {ne} vengo.",["ci"],"Vieni al cinema? No, non ci vengo."],
["Quanto tempo {ci vuoi} per finire?",["ci metti"],"Quanto tempo ci metti per finire?"],
["Sono stufa, {mi vado}!",["me ne vado"],"Sono stufa, me ne vado!"],
["Di questo problema {ci} parliamo domani.",["ne"],"Di questo problema ne parliamo domani."]
]}
],
write:{
task:'Você comprou uma casa por um euro num vilarejo italiano. Escreva um post de blog: por que foi, quanto tempo levou para chegar e reformar, o que você acha disso hoje.',
words:[140,180],
targets:[
{l:'4 usos de ci', re:'<(ci|ce)>|<c\'', n:4},
{l:'4 usos de ne', re:'<ne>|<n\'', n:4},
{l:'volerci ou metterci', re:'<(ci|ce)\\s+(vuole|vogliono|voleva|volevano|è voluto|sono voluti|metto|metti|mette|mettiamo|mettete|mettono|ho messo|hai messo|ha messo|abbiamo messo|hanno messo)', n:1}
],
model:`Due anni fa ho comprato una casa a un euro a Castelluccio, un paesino in Molise. Ci sono arrivata per caso: ne avevo letto in un articolo e ci ho pensato per mesi prima di decidere. Per arrivarci da Roma ci vogliono quasi tre ore di macchina, e l'ultima mezz'ora è tutta curve. La casa era un disastro: c'era un buco nel tetto e di finestre sane non ce n'era neanche una. Ci ho messo un anno e mezzo a ristrutturarla, e ho speso molto più di quanto pensavo. Tante volte ho pensato: non ce la faccio, me ne torno in città. Ma i vicini mi hanno aiutato in tutti i modi. Oggi ci vivo sei mesi all'anno e ci lavoro da remoto. Che ne penso? Che ne è valsa la pena. Se ci passate, venite a trovarmi!`
}
},

/* ───────────────────────── UNITÀ 6 ───────────────────────── */
{
id:6, lvl:'B1', band:0,
title:'Futuro e condizionale',
sub:'Inclusive a grande armadilha: "disse que viria" = disse che sarebbe venuto.',
focus:'futuro semplice e anteriore, futuro di probabilità, condizionale presente e passato, futuro nel passato (condizionale passato), condizionale giornalistico',
lesson:`
<h3>Futuro</h3>
<p>-<b>rò</b>, -rai, -rà, -remo, -rete, -ranno. Em -are o <i>a</i> vira <i>e</i>: <i>parlerò</i>. Irregulares: <i>andrò, avrò, dovrò, potrò, saprò, vedrò, vivrò</i> · <i>berrò, rimarrò, terrò, verrò, vorrò</i> · <i>sarò, farò, darò, starò</i>.</p>
<ul class="dots">
<li><b>Probabilidade</b> no presente: <i>Saranno le otto</i> = devem ser oito horas. <i>Avrà fame</i> = deve estar com fome.</li>
<li><b>Futuro anteriore</b> (avrò/sarò + particípio): ação futura anterior a outra, e probabilidade no passado: <i>Avrà perso il treno</i> = deve ter perdido o trem.</li>
</ul>
<div class="trap"><span class="pen">Attenzione!</span> Depois de <i>quando, appena, se</i> com valor futuro, o italiano usa <b>futuro</b>: <i>Quando <b>arriverai</b>, chiamami</i>. ES usa subjuntivo (<i>cuando llegues</i>), PT o futuro do subjuntivo (<i>quando chegares</i>). Nenhum dos dois funciona em italiano.</div>
<h3>Condizionale</h3>
<p>-<b>rei</b>, -resti, -rebbe, -remmo, -reste, -rebbero (mesmo radical do futuro): <i>vorrei, potresti, sarebbe</i>.</p>
<ul class="dots">
<li>Cortesia: <i>Vorrei un caffè. Potrebbe aiutarmi?</i></li>
<li>Conselho: <i>Dovresti dormire di più.</i></li>
<li>Notícia não confirmada (jornalístico): <i>Il ministro <b>si sarebbe dimesso</b></i> = teria se demitido.</li>
</ul>
<h3>O futuro no passado</h3>
<div class="tw"><table class="tbl">
<tr><th>Espanhol</th><th>Português</th><th>Italiano</th></tr>
<tr><td>Dijo que vendría</td><td>Disse que viria</td><td>Ha detto che <b>sarebbe venuto</b></td></tr>
<tr><td>Pensaba que lo harías</td><td>Pensava que você faria</td><td>Pensavo che l'<b>avresti fatto</b></td></tr>
</table></div>
<p>Em italiano, o futuro visto do passado é <b>sempre condicional passado</b>, mesmo que a ação ainda vá acontecer. "Ha detto che verrebbe" é o erro mais típico de hispanófonos e lusófonos neste nível.</p>
`,
reading:{
title:'Come vivremo nel 2050',
text:`<p>Come vivremo nel 2050? Secondo un rapporto pubblicato ieri da un gruppo di [[urbanisti|urbanistas]] di un'università milanese, le città italiane cambieranno più nei prossimi venticinque anni che nei cento precedenti. Le auto private, dicono gli autori, diventeranno sempre più rare nei centri storici: al loro posto ci saranno tram, biciclette e piccoli veicoli elettrici condivisi.</p>
<p>Il rapporto, che sarebbe costato oltre due milioni di euro, prevede anche che entro il 2050 un italiano su tre lavorerà almeno in parte da casa. «Non sarà la fine degli uffici», spiega una delle autrici, «ma gli uffici dovranno trasformarsi in luoghi d'incontro più che di lavoro quotidiano».</p>
<p>Non tutti sono d'accordo. Alcuni economisti ritengono che le previsioni siano troppo ottimistiche: secondo loro, senza investimenti seri, nel 2050 le città saranno semplicemente più vecchie e più care. Un consigliere comunale ha dichiarato che il Comune avrebbe già pronto un piano per ridurre il traffico, ma non ha voluto fornire dettagli. Lo presenteranno, ha detto, «quando avremo trovato i [[fondi|recursos, verbas]]».</p>`,
q:[
["Chi ha scritto il rapporto?",["Il Comune","Un gruppo di urbanisti","Alcuni economisti","Un giornale"],1],
["Perché il giornalista scrive «sarebbe costato»?",["È un'ipotesi irreale","L'informazione non è confermata","È un futuro sicuro","È una richiesta gentile"],1],
["Secondo l'autrice, in futuro gli uffici…",["spariranno","diventeranno luoghi d'incontro","saranno più grandi","costeranno di più"],1],
["Che cosa pensano alcuni economisti?",["Che le previsioni siano troppo ottimistiche","Che il rapporto sia perfetto","Che le città saranno più giovani","Che le auto aumenteranno"],0],
["«Quando avremo trovato i fondi» indica…",["un'azione futura anteriore a un'altra","un'azione passata","un'ipotesi irreale","un ordine"],0]
]},
ex:[
{t:'fill', title:'Futuro o condizionale?', items:[
["Quando ___ a Roma, chiamami. (arrivare, tu)",["arriverai"],"Futuro depois de quando, nunca subjuntivo."],
["L'anno prossimo ___ in Giappone. (andare, noi)",["andremo"]],
["Non risponde… ___ ancora in riunione. (essere)",["sarà"],"Futuro de probabilidade."],
["___ un caffè macchiato, per favore. (volere, io)",["vorrei"]],
["Al tuo posto, ___ subito con il capo. (parlare, io)",["parlerei"]],
["Mi ha promesso che ___ alla festa, ma non è venuto. (venire)",["sarebbe venuto"],"Futuro no passado = condizionale passato."],
["Secondo i giornali, il calciatore ___ con la Juventus. (firmare — notizia non confermata, passato)",["avrebbe firmato"]],
["Appena ___ questo lavoro, verrò da te. (finire, io)",["avrò finito","finirò"]],
["Mi ___ dire che ore sono, per favore? (potere, Lei)",["potrebbe"]],
["Ero sicura che ___ noi! (vincere)",["avremmo vinto"]],
["Sono le dieci e Marco non è qui: ___ il treno. (perdere — probabilità)",["avrà perso"]],
["Sei stanchissima: ___ dormire di più. (dovere, tu)",["dovresti"]]
]},
{t:'mc', title:'Scegli la risposta giusta', items:[
["Disse che ___ il giorno dopo.",["partirebbe","sarebbe partito","partirà"],1],
["Sono le dieci e Marco non è arrivato. ___ perso il treno.",["Avrà","Avrebbe","Ha avuto"],0],
["Quando ___ in Italia, visiterò Firenze.",["sarò","sia","sarei"],0],
["«Il presidente sarebbe malato» significa:",["è sicuramente malato","pare che sia malato, ma non è confermato","sarà malato in futuro"],1],
["Pensavo che tu ___ .",["verresti","saresti venuta","venga"],1],
["Che ore sono? Non so, ___ le tre.",["saranno","sarebbero","sono state"],0]
]},
{t:'fix', title:'Correggi la parte sottolineata', items:[
["Quando {sia} grande, farò il medico.",["sarò"],"Quando sarò grande, farò il medico."],
["Pensavo che il film {finirebbe} prima.",["sarebbe finito"],"Pensavo che il film sarebbe finito prima."],
["{Volerei} un'informazione, per favore.",["vorrei"],"Vorrei un'informazione, per favore."],
["Domani {andarò} dal medico.",["andrò"],"Domani andrò dal medico."],
["Mi ha scritto che {verrebbe} domani.",["sarebbe venuto","sarebbe venuta"],"Mi ha scritto che sarebbe venuto/a domani."]
]}
],
write:{
task:'Como será a sua vida daqui a 10 anos? Depois escreva 3 linhas de "notícia não confirmada" sobre você, em estilo jornalístico.',
words:[140,180],
targets:[
{l:'5 verbos no futuro', re:'<W+(rò|rai|rà|remo|rete|ranno)>', n:5},
{l:'1 futuro anteriore', re:'<(avrò|avrai|avrà|avremo|avrete|avranno|sarò|sarai|sarà|saremo|sarete|saranno)\\s+W+(at|ut|it|tt|st|rt|s)[oaie]>', n:1},
{l:'2 condizionali', re:'<W+(rei|resti|rebbe|remmo|reste|rebbero)>', n:2},
{l:'1 futuro no passado (ha detto che… sarebbe…)', manual:true}
],
model:`Tra dieci anni, se tutto andrà come spero, parlerò italiano quasi come la mia lingua madre. Passerò almeno due mesi all'anno in Italia, probabilmente in Sicilia, e lavorerò da remoto da una casa con la vista sul mare. Quando avrò finito il progetto a cui lavoro adesso, ne comincerò un altro, questa volta in italiano. Lavorerò meno ore al computer e farò più passeggiate. Mia madre mi ha sempre detto che un giorno sarei andata a vivere all'estero: chissà, forse avrà ragione lei. Mi piacerebbe anche imparare a cucinare come una nonna siciliana, ma su questo non sarei così ottimista.\n\nULTIM'ORA — Secondo fonti non confermate, una studentessa straniera avrebbe letto in italiano tutti i romanzi di Elena Ferrante in un solo mese. La donna avrebbe dichiarato di non aver usato il dizionario neanche una volta.`
}
}
];
UNITS.push(
/* ───────────────────────── UNITÀ 7 ───────────────────────── */
{
id:7, lvl:'B1 → B2', band:1,
title:'Imperativo e pronomi',
sub:'Dimmi, fallo, vattene, mi dica: dar ordens com naturalidade.',
focus:'imperativo informale (tu, noi, voi) e formale (Lei), imperativo negativo, pronomi attaccati e raddoppiamento (dimmi, fallo), forme brevi (di\', fa\', va\', da\', sta\')',
lesson:`
<div class="tw"><table class="tbl">
<tr><th></th><th>parlare</th><th>prendere</th><th>sentire</th><th>finire</th></tr>
<tr><th>tu</th><td>parla</td><td>prendi</td><td>senti</td><td>finisci</td></tr>
<tr><th>Lei</th><td>parli</td><td>prenda</td><td>senta</td><td>finisca</td></tr>
<tr><th>noi</th><td>parliamo</td><td>prendiamo</td><td>sentiamo</td><td>finiamo</td></tr>
<tr><th>voi</th><td>parlate</td><td>prendete</td><td>sentite</td><td>finite</td></tr>
</table></div>
<p><b>Negativo de tu = non + infinitivo</b>: <i>Non parlare! Non toccare!</i> (ES <i>no hables</i>, PT <i>não fales</i> — não sirvam de modelo). Para Lei/noi/voi basta pôr <i>non</i> antes: <i>Non parli, non parlate</i>.</p>
<p><b>Lei</b> usa as formas do congiuntivo, como o <i>usted</i> espanhol: <i>Scusi, Venga, Dica, Faccia, Vada, Stia, Abbia pazienza, Sia gentile</i>.</p>
<h3>Formas curtas de tu</h3>
<div class="chips">andare → va' (vai) · fare → fa' (fai) · dare → da' (dai) · stare → sta' (stai) · dire → di' · essere → sii · avere → abbi · sapere → sappi</div>
<h3>Pronomes no imperativo</h3>
<ul class="dots">
<li><b>tu, noi, voi</b>: pronome colado no fim: <i>Guardalo! Diciamoglielo. Sedetevi.</i></li>
<li>Com as formas curtas, a consoante dobra: <i>dimmi, fammi, dallo, stammi bene, vacci</i> (exceção: <i>gli → dagli, digli</i>).</li>
<li><b>Lei</b>: pronome antes: <i>Mi dica. Si accomodi. Lo prenda pure.</i></li>
<li>Negativo de tu: as duas ordens são certas: <i>Non farlo = Non lo fare.</i></li>
</ul>
<div class="trap"><span class="pen">Attenzione!</span> <i>Dime, hazlo, dígamelo</i> funcionam no espanhol, mas a ortografia italiana dobra a consoante: <b>dimmi</b>, <b>fallo</b>, <b>dammelo</b>, <b>vattene</b>.</div>
<div class="plus"><span class="pen">Registro</span> <i>Pure</i> suaviza: <i>Entri pure</i> = fique à vontade para entrar. <i>Dai!</i> = vamos! / ah, para! <i>Senti</i> / <i>Senta</i> = olha… (para chamar a atenção).</div>
`,
reading:{
title:'Sopravvivere alla burocrazia',
text:`<p>Hai appena preso la residenza in Italia? Benvenuta! Ecco cinque regole per sopravvivere alla burocrazia.</p>
<p><b>Primo</b>: non andare mai in un ufficio pubblico senza una fotocopia di tutto. Anche se il sito dice che basta il documento originale, portati sempre una copia del passaporto, del codice fiscale e, [[già che ci sei|já que está nessa]], del contratto d'affitto.</p>
<p><b>Secondo</b>: prendi il numero appena entri e non perderlo di vista. Se l'impiegato ti chiama e non rispondi entro dieci secondi, ricomincerai [[da capo|do zero]].</p>
<p><b>Terzo</b>: sii gentile, ma non esagerare. Un «buongiorno» e un sorriso aprono molte porte; i complimenti esagerati, invece, sembrano sospetti.</p>
<p><b>Quarto</b>: se ti dicono di tornare «domani», chiedi a che ora e scriviti il nome della persona con cui hai parlato. Domani, con ogni probabilità, ci sarà qualcun altro allo [[sportello|guichê]].</p>
<p><b>Quinto</b>, e più importante: non arrabbiarti. Respira, guarda le altre persone in [[fila|fila]] e ricordati che stanno soffrendo quanto te. Fai amicizia: in Italia molte informazioni utili non le trovi su internet, ma in sala d'attesa.</p>`,
q:[
["Secondo il testo, che cosa conviene portare?",["Solo l'originale","Fotocopie di tutti i documenti","Un regalo per l'impiegato","Il contratto di lavoro"],1],
["Che cosa succede se non rispondi quando ti chiamano?",["Ti aspettano","Devi ricominciare","Ti danno un altro numero","Niente"],1],
["Perché conviene scriversi il nome dell'impiegato?",["Per fare un reclamo","Perché il giorno dopo potrebbe esserci un'altra persona","Per mandargli un regalo","Per l'assicurazione"],1],
["«Non arrabbiarti» è…",["un imperativo negativo di tu con pronome","un congiuntivo","un futuro","un infinito semplice"],0],
["Dove si trovano molte informazioni utili, secondo l'autore?",["Su internet","In sala d'attesa, parlando con gli altri","Sul sito del Comune","Allo sportello"],1]
]},
ex:[
{t:'fill', title:'Imperativo', items:[
["___ la verità! (dire, tu)",["di'"]],
["___ cosa ne pensi. (dire + mi, tu)",["dimmi"]],
["___ , sa dov'è la stazione? (scusare, Lei)",["scusi"]],
["___ quel cavo! (non toccare, tu)",["non toccare"]],
["___ , prego, lo spettacolo comincia. (sedersi, voi)",["sedetevi"]],
["___ pure avanti, dottore. (venire, Lei)",["venga"]],
["Il compito? ___ subito! (fare + lo, tu)",["fallo"]],
["Il telecomando? ___ , per favore. (dare + me + lo, tu)",["dammelo"]],
["Basta! ___ ! (andarsene, tu)",["vattene"]],
["Signora, ___ pure. (dire + mi, Lei)",["mi dica"]],
["Non ___ ! (preoccuparsi, tu)",["preoccuparti","ti preoccupare"]],
["Se vedi Luca, ___ di chiamarmi. (dire + gli, tu)",["digli"]]
]},
{t:'mc', title:'Scegli la risposta giusta', items:[
["Signora, ___ un momento, per favore.",["aspetta","aspetti","aspettate"],1],
["Non ___ così tardi! (tu)",["torni","tornare","torna"],1],
["Il libro? ___ a Marco!",["Dagli lo","Daglielo","Dallogli"],1],
["___ tranquilla, signora, è tutto a posto. (stare, Lei)",["Stai","Stia","Sta'"],1],
["Ragazzi, ___ silenzio!",["fate","facciano","fai"],0],
["___ attenzione quando attraversi! (fare, tu)",["Fa'","Faccia","Fate"],0]
]},
{t:'fix', title:'Correggi la parte sottolineata', items:[
["Signor Rossi, {prendi} pure un biscotto.",["prenda"],"Signor Rossi, prenda pure un biscotto."],
["Luca, non {parla} con la bocca piena!",["parlare"],"Luca, non parlare con la bocca piena!"],
["{Dime} la verità!",["dimmi"],"Dimmi la verità!"],
["Professore, {mi lo spieghi} di nuovo, per favore.",["me lo spieghi"],"Professore, me lo spieghi di nuovo, per favore."],
["Bambini, {sedetivi}!",["sedetevi"],"Bambini, sedetevi!"]
]}
],
write:{
task:'Escreva um guia "Como sobreviver a…" (seu trabalho, sua cidade, uma mudança) com 8 conselhos no imperativo de tu. Depois reescreva 2 deles com Lei.',
words:[130,170],
targets:[
{l:'3 imperativos negativos (non + infinitivo)', re:'<non\\s+(ti\\s+|lo\\s+|la\\s+|mi\\s+)?W+(are|ere|ire|arti|erti|irti|arlo|erlo|irlo|arla|erla|irla|arle|erle|irle|arli|erli|irli)>', n:3},
{l:'3 pronomes colados (dimmi, fallo, ricordati…)', re:'<W+(ami|imi|emi|ati|iti|eti|alo|ilo|elo|ala|ila|ela|ateli|atelo|atela|tene|cene|gli|glielo|gliela|mmi|llo|lla|cci|melo|mela)>', n:3},
{l:'2 conselhos com Lei', manual:true}
],
model:`Come sopravvivere al primo mese in un nuovo lavoro\n1. Arriva dieci minuti prima, almeno la prima settimana.\n2. Non fingere di sapere tutto: se non capisci qualcosa, chiedilo subito.\n3. Impara i nomi dei colleghi e scriviteli da qualche parte.\n4. Non lamentarti del capo alla macchinetta del caffè: le pareti hanno orecchie.\n5. Porta qualcosa di dolce il venerdì: fallo almeno una volta, funziona sempre.\n6. Non rispondere alle email alle undici di sera.\n7. Trova un collega gentile e fattelo amico.\n8. Ricordati che tutti, all'inizio, si sentono persi.\n\nCon il Lei:\n2. Non finga di sapere tutto: se non capisce qualcosa, lo chieda subito.\n8. Si ricordi che tutti, all'inizio, si sentono persi.`
}
},

/* ───────────────────────── UNITÀ 8 ───────────────────────── */
{
id:8, lvl:'B1 → B2', band:1,
title:'Congiuntivo presente e passato',
sub:'Penso che sia: onde o italiano se afasta do espanhol e do português.',
focus:'congiuntivo presente e passato: forme, verbi di opinione (pensare, credere, sembrare), volontà, emozione, espressioni impersonali, congiunzioni (benché, affinché, purché, a meno che, prima che), relative e superlativi',
lesson:`
<p class="lead">As formas não assustam (são quase as do <i>presente de subjuntivo</i> espanhol). O que muda é <b>quando</b> usar: o italiano usa congiuntivo depois de <b>opinião</b>, onde nós usamos indicativo.</p>
<div class="tw"><table class="tbl">
<tr><th>Espanhol</th><th>Português</th><th>Italiano</th></tr>
<tr><td>Creo que <b>es</b> verdad</td><td>Acho que <b>é</b> verdade</td><td>Credo che <b>sia</b> vero</td></tr>
<tr><td>Me parece que <b>tiene</b> razón</td><td>Parece-me que <b>tem</b> razão</td><td>Mi sembra che <b>abbia</b> ragione</td></tr>
</table></div>
<h3>Formas</h3>
<p>-are → <b>-i</b> (parli, parli, parli, parliamo, parliate, parlino); -ere/-ire → <b>-a</b> (prenda, senta, finisca… prendiamo, prendiate, prendano). As três pessoas do singular são iguais, então use o pronome se precisar: <i>Penso che <b>tu</b> abbia ragione</i>.</p>
<div class="chips">essere: sia · avere: abbia · fare: faccia · andare: vada · dire: dica · venire: venga · potere: possa · volere: voglia · dovere: debba · sapere: sappia · stare: stia · dare: dia · uscire: esca</div>
<p><b>Congiuntivo passato</b>: <i>abbia/sia</i> + particípio: <i>Penso che sia già partita.</i></p>
<h3>Quando usar</h3>
<ul class="dots">
<li>Opinião e crença: <i>penso, credo, ritengo, immagino, mi sembra, suppongo che…</i></li>
<li>Vontade e pedido: <i>voglio, preferisco, chiedo che…</i></li>
<li>Emoção: <i>sono contenta, mi dispiace, ho paura che…</i></li>
<li>Dúvida e esperança: <i>dubito, spero, non so se…</i></li>
<li>Impessoais: <i>bisogna, è necessario, è importante, è meglio, è possibile che…</i></li>
<li>Conjunções: <i>benché, sebbene, nonostante, affinché, perché</i> (= para que), <i>purché, a condizione che, a meno che (non), prima che, senza che</i>.</li>
<li>Relativas de busca e superlativos: <i>Cerco qualcuno che <b>sappia</b> il tedesco. È il libro più bello che <b>abbia</b> mai letto.</i></li>
</ul>
<h3>Quando NÃO usar</h3>
<p><i>Secondo me <b>è</b>…</i> · <i>So che <b>è</b>…</i> · <i>Sono sicura che <b>è</b>…</i> · <i>È vero / è chiaro che <b>è</b>…</i> · <i>Anche se <b>piove</b>…</i> (anche se = indicativo; benché = congiuntivo).</p>
<div class="trap"><span class="pen">Attenzione!</span> Mesmo sujeito → <b>di + infinitivo</b>: <i>Penso <b>di</b> avere ragione</i> (não "penso che io abbia"). <i>Spero di vederti presto.</i></div>
`,
reading:{
title:'Lettera al direttore',
text:`<p>Gentile direttore,<br>si dice spesso che i giovani italiani non leggano più. Mi sembra che questa affermazione sia ingiusta, o almeno troppo semplice. Sono un'insegnante di liceo e vedo ogni giorno ragazzi che [[divorano|devoram]] saghe fantasy, fumetti giapponesi e romanzi scoperti sui social. Non credo che leggere un manga sia meno nobile che leggere un classico; penso piuttosto che la scuola debba partire da lì per arrivare, con pazienza, anche a Calvino e a Morante.</p>
<p>Certo, è vero che la concentrazione è un problema. Molti studenti [[fanno fatica|têm dificuldade]] a leggere per più di venti minuti senza che il telefono li interrompa. Ma è necessario che noi adulti ci chiediamo quale esempio diamo: quanti genitori leggono davanti ai figli?</p>
<p>Propongo una cosa semplice: che ogni scuola dedichi un quarto d'ora al giorno alla lettura libera, senza voti e senza [[schede|fichas, questionários]]. Qualcuno dirà che è tempo perso. Io credo invece che sia l'investimento più utile che possiamo fare, purché lo facciamo con costanza.<br>Cordiali saluti,<br>Lucia Ferri, Pavia</p>`,
q:[
["Che lavoro fa l'autrice?",["Giornalista","Insegnante di liceo","Bibliotecaria","Studentessa"],1],
["Qual è la sua opinione sui manga?",["Sono inutili","Possono essere un punto di partenza","Sono meglio dei classici","Bisogna vietarli"],1],
["Quale problema reale riconosce?",["Il prezzo dei libri","La concentrazione","La mancanza di biblioteche","I programmi scolastici"],1],
["Che cosa propone?",["Più compiti di lettura","Quindici minuti di lettura libera al giorno","Vietare i telefoni a scuola","Leggere solo classici"],1],
["Perché «è vero che la concentrazione è un problema» usa l'indicativo?",["Perché «è vero che» esprime certezza","Perché è un errore","Perché il soggetto è lo stesso","Perché è un'opinione"],0]
]},
ex:[
{t:'fill', title:'Congiuntivo o indicativo?', items:[
["Penso che Marco ___ ragione. (avere)",["abbia"]],
["È importante che voi ___ puntuali. (arrivare)",["arriviate"]],
["Credo che il film ___ alle undici. (finire)",["finisca"]],
["Spero che tu ___ meglio. (stare)",["stia"]],
["Mi sembra che Anna ___ ieri. (partire)",["sia partita"]],
["Benché ___ , usciamo lo stesso. (piovere)",["piova"]],
["Cerco una casa che ___ un giardino. (avere)",["abbia"]],
["È il ristorante più buono che io ___ mai ___ . (provare)",[["abbia"],["provato"]]],
["So che Luca ___ in vacanza. (essere)",["è"],"Saber = certeza → indicativo."],
["Te lo dico perché tu lo ___ . (sapere)",["sappia"],"perché = para que → congiuntivo."],
["Prima che tu ___ , chiudi la finestra. (uscire)",["esca"]],
["Dubito che loro ___ il problema. (capire)",["capiscano"]]
]},
{t:'mc', title:'Scegli la risposta giusta', items:[
["Secondo me il libro ___ interessante.",["sia","è"],1,"Secondo me + indicativo."],
["Credo che ___ ragione tu.",["hai","abbia"],1],
["Sono sicura che ___ .",["venga","verrà"],1],
["Non vado alla festa a meno che non ___ anche tu.",["vieni","venga"],1],
["(io = io) Penso ___ stanca.",["che io sia","di essere"],1],
["Anche se ___ tardi, ti accompagno.",["è","sia"],0,"anche se + indicativo."]
]},
{t:'fix', title:'Correggi la parte sottolineata', items:[
["Credo che Luca {è} già partito.",["sia"],"Credo che Luca sia già partito."],
["Voglio che tu {vieni} con me.",["venga"],"Voglio che tu venga con me."],
["Spero che voi {siete} contenti.",["siate"],"Spero che voi siate contenti."],
["Benché {è} tardi, continuiamo.",["sia"],"Benché sia tardi, continuiamo."],
["È possibile che loro {hanno} perso il treno.",["abbiano"],"È possibile che loro abbiano perso il treno."]
]}
],
write:{
task:'Escreva uma carta ao diretor de um jornal sobre um tema que te interesse (tecnologia, escola, cidade, trabalho remoto…). Dê opinião, concorde parcialmente, proponha algo.',
words:[160,210],
targets:[
{l:'4 congiuntivi irregulares (contagem automática)', re:'<(sia|siate|siano|abbia|abbiate|abbiano|faccia|facciano|possa|possano|debba|debbano|vada|vadano|venga|vengano|sappia|sappiano|dica|dicano|stia|stiano|voglia|vogliano|dia|diano|esca|escano|piaccia|piacciano|W{3,}iate|W{3,}isca|W{3,}iscano)>', n:4},
{l:'6 congiuntivi no total, incluindo regulares', manual:true},
{l:'2 conjunções (benché, affinché, purché…)', re:'<(benché|sebbene|affinché|purché|a meno che|prima che|nonostante|a condizione che|senza che)>', n:2},
{l:'1 "secondo me" ou "so che" com indicativo', manual:true}
],
model:`Gentile direttore,\nho letto con interesse l'articolo sul lavoro da remoto e vorrei aggiungere il punto di vista di chi lo pratica da cinque anni. Non credo che lavorare da casa sia la soluzione a tutti i problemi, ma mi sembra che molte aziende ne abbiano paura senza motivo. Secondo me il vero problema non è il luogo, è la fiducia. È normale che un capo voglia sapere che cosa fanno i suoi collaboratori, ma è necessario che lo misuri dai risultati, non dalle ore passate davanti allo schermo.\nCerto, anch'io riconosco che la solitudine esiste. Per questo propongo un modello misto: due giorni in ufficio e tre a casa, purché le riunioni importanti si facciano tutte nei giorni di presenza. Benché qualcuno pensi che sia un compromesso al ribasso, io credo che sia l'unico modo affinché tutti, aziende e lavoratori, ci guadagnino qualcosa.\nCordiali saluti`
}
},

/* ───────────────────────── UNITÀ 9 ───────────────────────── */
{
id:9, lvl:'B2', band:1,
title:'Congiuntivo imperfetto e concordanza dei tempi',
sub:'Pensavo che fosse, vorrei che venissi, come se niente fosse.',
focus:'congiuntivo imperfetto e trapassato, concordanza dei tempi (contemporaneità, anteriorità, posteriorità), magari + congiuntivo, come se',
lesson:`
<div class="plus"><span class="pen">Vantaggio enorme</span> O congiuntivo imperfetto corresponde quase perfeitamente ao <i>-ra/-se</i> espanhol e ao imperfeito do subjuntivo português: <i>fuera / fosse → fosse</i>, <i>tuviera / tivesse → avessi</i>, <i>viniera / viesse → venissi</i>.</div>
<h3>Formas</h3>
<p>-<b>assi</b>, -<b>essi</b>, -<b>issi</b>: <i>parlassi, parlassi, parlasse, parlassimo, parlaste, parlassero</i>. Irregulares: <i>essere → fossi</i>, <i>dare → dessi</i>, <i>stare → stessi</i>, <i>fare → facessi</i>, <i>dire → dicessi</i>, <i>bere → bevessi</i>, <i>tradurre → traducessi</i>.</p>
<p><b>Congiuntivo trapassato</b>: <i>avessi/fossi</i> + particípio: <i>Pensavo che fosse già partito.</i></p>
<h3>Concordância dos tempos</h3>
<div class="tw"><table class="tbl">
<tr><th>verbo principal</th><th>simultâneo</th><th>anterior</th><th>posterior</th></tr>
<tr><td><b>presente / futuro</b><br><i>Penso che…</i></td><td>…sia stanca</td><td>…sia stata stanca</td><td>…sarà stanca</td></tr>
<tr><td><b>passado</b><br><i>Pensavo che…</i></td><td>…fosse stanca</td><td>…fosse stata stanca</td><td>…<b>sarebbe stata</b> stanca</td></tr>
<tr><td><b>condicional</b><br><i>Vorrei che…</i></td><td>…tu venissi</td><td>…tu fossi venuta</td><td>—</td></tr>
</table></div>
<p>Com <i>vorrei, preferirei, mi piacerebbe</i> o congiuntivo é <b>sempre imperfetto</b>: <i>Vorrei che tu <b>venissi</b></i> (nunca "venga").</p>
<h3>Expressões fixas</h3>
<ul class="dots">
<li><b>Magari</b> + imperfetto = tomara/quem dera: <i>Magari fosse vero!</i></li>
<li><b>Come se</b> + imperfetto/trapassato: <i>Parla come se sapesse tutto. Mi guardava come se non mi avesse mai visto.</i></li>
<li>Pergunta indireta no passado: <i>Mi ha chiesto se <b>avessi</b> tempo</i> (registro cuidado; coloquial: <i>se avevo</i>).</li>
</ul>
<div class="trap"><span class="pen">Attenzione!</span> O <i>-ra</i> espanhol às vezes vale como mais-que-perfeito ou condicional (<i>quisiera</i>). Em italiano não: <i>vorrei</i> é condicional, <i>volessi</i> só congiuntivo.</div>
`,
reading:{
title:'La libreria',
text:`<p>Quando ho detto ai miei genitori che volevo lasciare il lavoro in banca per aprire una libreria, mia madre mi ha guardato come se avessi annunciato di voler partire per la Luna. Pensava che fosse un [[capriccio|capricho]] passeggero e sperava che, dopo qualche settimana, cambiassi idea. Mio padre, invece, non ha detto niente: si è limitato a chiedermi se avessi fatto bene i conti.</p>
<p>In effetti non li avevo fatti. Credevo che bastassero i [[risparmi|economias]] di dieci anni e un po' di entusiasmo. Nessuno mi aveva detto che l'affitto di un locale in centro costasse quanto uno stipendio, né che i distributori [[pretendessero|exigissem]] il pagamento anticipato. Il primo anno è stato durissimo. A volte avrei voluto che qualcuno mi dicesse di smettere, così avrei avuto una scusa per tornare indietro.</p>
<p>Poi, lentamente, le cose sono cambiate. I clienti hanno cominciato a tornare, a consigliare la libreria agli amici, a chiedermi di organizzare presentazioni. Oggi, quando mia madre passa a trovarmi, si siede sulla poltrona vicino alla [[vetrina|vitrine]] e legge per ore, come se fosse sempre stata quella la sua idea.</p>`,
q:[
["Che lavoro faceva prima chi racconta?",["Libraio","Impiegato in banca","Insegnante","Commerciante"],1],
["Che cosa sperava la madre?",["Che cambiasse idea","Che aprisse in centro","Che lavorasse con lei","Che partisse"],0],
["Che cosa ha chiesto il padre?",["Se aveva paura","Se aveva fatto bene i conti","Se gli servivano soldi","Niente"],1],
["Quale difficoltà NON viene citata?",["L'affitto alto","Il pagamento anticipato ai distributori","La concorrenza dei negozi online","Un primo anno molto duro"],2],
["L'ultima frase suggerisce che la madre…",["è ancora contraria","ormai apprezza la libreria","vuole comprarla","ci lavora"],1]
]},
ex:[
{t:'fill', title:'Concordanza dei tempi', items:[
["Pensavo che tu ___ a casa. (essere)",["fossi"]],
["Vorrei che voi ___ con noi. (venire)",["veniste"]],
["Credevo che Luca ___ già la settimana prima. (partire)",["fosse partito"]],
["Magari ___ più tempo! (avere, io)",["avessi"]],
["Parla come se ___ tutto. (sapere)",["sapesse"]],
["Era necessario che noi ___ presto. (fare)",["facessimo"]],
["Mi ha chiesto di stare zitta affinché il bambino ___ . (dormire)",["dormisse"]],
["Speravo che tu mi ___ una risposta. (dare)",["dessi"]],
["Era il film più brutto che ___ mai ___ . (vedere, io)",[["avessi"],["visto"]]],
["Avevo paura che non ___ i soldi. (bastare)",["bastassero"]],
["Ero sicura che lui ___ . (venire — posteriorità)",["sarebbe venuto"]],
["Mi piacerebbe che tu ___ di più. (leggere)",["leggessi"]]
]},
{t:'mc', title:'Scegli la risposta giusta', items:[
["Pensavo che Marco ___ già ___ .",["sia / arrivato","fosse / arrivato","è / arrivato"],1],
["Vorrei che tu mi ___ .",["ascolti","ascoltassi","ascolterai"],1],
["Ero sicura che lui ___ .",["venisse","sarebbe venuto","venga"],1,"Posterioridade no passado → condizionale passato."],
["Magari ___ vero!",["è","fosse","sia"],1],
["Si comporta come se ___ il capo.",["è","fosse","sarebbe"],1],
["Non sapevo che ___ sposata.",["fossi","sei","saresti"],0]
]},
{t:'fix', title:'Correggi la parte sottolineata', items:[
["Volevo che tu {vieni} alla festa.",["venissi"],"Volevo che tu venissi alla festa."],
["Pensavo che lo spettacolo {era} già cominciato.",["fosse"],"Pensavo che lo spettacolo fosse già cominciato."],
["Speravo che {abbia} capito. (tu)",["avessi"],"Speravo che avessi capito."],
["Mi ha chiesto se {potrei} aiutarlo.",["potessi","potevo"],"Mi ha chiesto se potessi (coloquial: potevo) aiutarlo."],
["Mi guardava come se {era} un fantasma.",["fossi","fosse"],"Mi guardava come se fossi un fantasma."]
]}
],
write:{
task:'Conte uma decisão importante da sua vida e as reações dos outros: o que pensavam, esperavam, temiam, o que você gostaria que tivessem dito.',
words:[160,210],
targets:[
{l:'5 congiuntivi imperfetti/trapassati (estimativa)', re:'<W+(assi|essi|issi|asse|esse|isse|assimo|essimo|assero|essero|issero)>|<(fossi|fosse|fossimo|foste|fossero|deste|steste|faceste)>', n:5},
{l:'1 "come se"', re:'<come se>', n:1},
{l:'1 "vorrei/avrei voluto che"', re:'<(vorrei|avrei voluto|preferirei|mi piacerebbe)\\s+che>', n:1}
],
model:`Quando ho deciso di trasferirmi all'estero da sola, quasi nessuno era d'accordo. Mia nonna pensava che fosse una follia e sperava che all'ultimo momento cambiassi idea. Le mie amiche credevano che lo facessi per un ragazzo, come se una donna non potesse partire per sé stessa. Solo mio fratello mi ha chiesto se avessi già trovato una casa, e mi ha aiutato a cercarla.\nIo stessa avevo paura che non riuscissi a trovare lavoro e che i soldi non bastassero. I primi mesi sono stati difficili: avrei voluto che qualcuno mi dicesse che avevo fatto bene, ma nessuno lo diceva. Poi ho trovato un lavoro, nuovi amici, una città che sentivo mia. Un anno dopo mia nonna è venuta a trovarmi. Ha girato per l'appartamento in silenzio, poi mi ha detto: «Magari avessi avuto il tuo coraggio alla tua età». È la frase più bella che abbia mai sentito.`
}
},

/* ───────────────────────── UNITÀ 10 ───────────────────────── */
{
id:10, lvl:'B2', band:1,
title:'Il periodo ipotetico',
sub:'Se avessi saputo… Três tipos, um misto e zero condicional depois de "se".',
focus:'periodo ipotetico della realtà, della possibilità e dell\'irrealtà, periodo ipotetico misto, qualora, nel caso in cui, gerundio ipotetico',
lesson:`
<div class="tw"><table class="tbl">
<tr><th>tipo</th><th>se +</th><th>consequência</th><th>exemplo</th></tr>
<tr><td><b>real</b></td><td>presente / futuro</td><td>presente, futuro, imperativo</td><td><i>Se piove, resto a casa. Se vieni, ti preparo la cena.</i></td></tr>
<tr><td><b>possível</b></td><td>congiuntivo imperfetto</td><td>condizionale presente</td><td><i>Se avessi tempo, viaggerei di più.</i></td></tr>
<tr><td><b>irreal (passado)</b></td><td>congiuntivo trapassato</td><td>condizionale passato</td><td><i>Se avessi studiato, avrei passato l'esame.</i></td></tr>
<tr><td><b>misto</b></td><td>trapassato</td><td>condizionale presente</td><td><i>Se avessi accettato quel lavoro, ora vivrei a Milano.</i></td></tr>
<tr><td><b>misto</b></td><td>imperfetto</td><td>condizionale passato</td><td><i>Se fossi più paziente, non avrei litigato con lui.</i></td></tr>
</table></div>
<div class="plus"><span class="pen">Vantaggio</span> É a mesma estrutura de <i>si tuviera, viajaría</i> e <i>se tivesse, viajaria</i>. Você já pensa assim.</div>
<div class="trap"><span class="pen">Attenzione!</span> Nunca condicional depois de <b>se</b>: <i>Se avrei tempo</i> ✗. Até nativos erram, e é muito estigmatizado.</div>
<h3>Registro</h3>
<ul class="dots">
<li>Coloquial: <i>Se lo sapevo, venivo</i> (duplo imperfetto). Ouve-se muito, mas não escreva assim num texto formal.</li>
<li>Formal: <b>qualora</b> + congiuntivo = caso: <i>Qualora il prodotto risultasse difettoso, contatti l'assistenza.</i></li>
<li><b>Nel caso in cui / in caso</b> + congiuntivo; <b>a patto che / purché</b> + congiuntivo.</li>
<li>Gerúndio hipotético: <i>Volendo, potremmo partire domani</i> (se quisermos).</li>
</ul>
`,
reading:{
title:'La vita che non ho vissuto',
text:`<p>Paola ha quarantadue anni e lavora come traduttrice a Trieste. Quando aveva diciannove anni, ha vinto una [[borsa di studio|bolsa de estudos]] per studiare medicina a Bologna, ma l'ha rifiutata perché il suo ragazzo di allora non voleva che partisse. «Se fossi andata a Bologna», racconta, «oggi probabilmente farei il medico e vivrei lontano da qui. Non avrei imparato lo sloveno, non avrei conosciuto mio marito e forse non avrei mai scoperto quanto mi piace tradurre».</p>
<p>Le chiedo se [[rimpiange|se arrepende de, lamenta]] quella scelta. Ci pensa un momento. «Se me l'avessi chiesto a venticinque anni, ti avrei risposto di sì, senza dubbio. Ero arrabbiata con me stessa: pensavo di aver buttato via la mia occasione per un ragazzo che, tra l'altro, mi ha lasciata sei mesi dopo. Oggi no. Se potessi tornare indietro, forse farei la stessa cosa, ma per motivi diversi».</p>
<p>Qual è la lezione, allora? «Che non conosciamo mai davvero la vita che non abbiamo vissuto», dice. «La immaginiamo sempre migliore, ma se la vivessimo, avrebbe i suoi problemi, come questa».</p>`,
q:[
["Perché Paola non è andata a Bologna?",["Non aveva soldi","Il suo ragazzo non voleva","Non l'avevano accettata","Preferiva tradurre"],1],
["Secondo lei, che cosa NON avrebbe fatto se fosse partita?",["Imparare lo sloveno","Studiare medicina","Lasciare Trieste","Diventare medico"],0],
["Che cosa pensava a venticinque anni?",["Di aver fatto bene","Di aver sprecato un'occasione","Di voler tornare subito a Bologna","Che il ragazzo avesse ragione"],1],
["«Se potessi tornare indietro, forse farei la stessa cosa» è un periodo ipotetico…",["della realtà","della possibilità","dell'irrealtà nel passato"],1],
["Qual è la lezione di Paola?",["Bisogna sempre partire","La vita non vissuta sembra migliore, ma avrebbe i suoi problemi","L'amore conta più della carriera","Non si deve mai rimpiangere nulla"],1]
]},
ex:[
{t:'fill', title:'Completa il periodo ipotetico', items:[
["Se ___ più soldi, comprerei una casa al mare. (avere, io)",["avessi"]],
["Se domani ___ bel tempo, andiamo in spiaggia. (fare)",["fa"]],
["Se ___ che eri in città, ti avrei chiamato. (sapere, io)",["avessi saputo"]],
["Se tu fossi più paziente, non ___ sempre. (arrabbiarsi)",["ti arrabbieresti"]],
["Se avessimo preso il treno delle otto, ora ___ già a Firenze. (essere)",["saremmo"],"Misto: condição passada, consequência presente."],
["Se ___ la lotteria, che cosa faresti? (vincere, tu)",["vincessi"]],
["Se ieri non ___ , saremmo andati al mare. (piovere)",["fosse piovuto","avesse piovuto"]],
["Qualora il prodotto ___ difettoso, contatti l'assistenza. (risultare)",["risultasse"]],
["Se fossi in te, ___ l'offerta. (accettare)",["accetterei"]],
["Se ci ___ prima, non avreste avuto problemi. (pensare, voi)",["aveste pensato"]],
["Se l'avessi saputo, te lo ___ . (dire)",["avrei detto"]],
["Se ___ in Italia da bambina, oggi parlerei italiano perfettamente. (crescere, io)",["fossi cresciuta"]]
]},
{t:'mc', title:'Scegli la risposta giusta', items:[
["Se ___ tempo, verrei.",["avrei","avessi","avrò"],1],
["Se l'avessi saputo, ___ .",["te l'avrei detto","te lo dirò","te lo direi"],0],
["Se fossi nata a Roma, ora ___ romana.",["sarei","sarei stata","sono"],0],
["Se ___ , porta l'ombrello.",["piove","piovesse","pioverebbe"],0],
["Quale frase è sbagliata?",["Se avrei tempo, verrei.","Se avessi tempo, verrei.","Se ho tempo, vengo."],0],
["«Volendo, potremmo partire domani» significa:",["se volessimo, potremmo partire domani","dobbiamo partire domani","vogliamo partire domani"],0]
]},
{t:'fix', title:'Correggi la parte sottolineata', items:[
["Se {avrei} soldi, viaggerei di più.",["avessi"],"Se avessi soldi, viaggerei di più."],
["Se avessi studiato, {passavo} l'esame. (registro formale)",["avrei passato"],"Se avessi studiato, avrei passato l'esame."],
["Se {saresti} venuta, ti saresti divertita.",["fossi venuta"],"Se fossi venuta, ti saresti divertita."],
["Se fossi in te, {parlo} con lui.",["parlerei"],"Se fossi in te, parlerei con lui."],
["Se lui {avesse} più attento, non avrebbe sbagliato.",["fosse stato"],"Se lui fosse stato più attento, non avrebbe sbagliato."]
]}
],
write:{
task:'"E se…?" Escreva sobre uma escolha da sua vida e como tudo teria sido diferente. Termine com o que você faria hoje se pudesse.',
words:[160,210],
targets:[
{l:'4 frases com "se"', re:'<se>', n:4},
{l:'2 condicionais presentes', re:'<W+(rei|resti|rebbe|remmo|reste|rebbero)>', n:2},
{l:'2 condicionais passados', re:'<(avrei|avresti|avrebbe|avremmo|avreste|avrebbero|sarei|saresti|sarebbe|saremmo|sareste|sarebbero)\\s+(W+\\s+)?W+(at|ut|it|tt|st|rt|s)[oaie]>', n:2},
{l:'1 hipotético misto', manual:true}
],
model:`A diciotto anni ho dovuto scegliere tra informatica e architettura. Ho scelto informatica, un po' per passione e un po' perché mio padre diceva che avrei trovato lavoro più facilmente. Se avessi scelto architettura, probabilmente avrei studiato in un'altra città, avrei conosciuto altre persone e forse oggi vivrei in un posto completamente diverso. Non avrei mai imparato a programmare e, chissà, magari disegnerei case invece di scrivere codice.\nA volte ci penso, soprattutto quando passo davanti a un bel palazzo antico. Se fossi stata più coraggiosa, avrei seguito l'istinto e non il consiglio di mio padre. Ma se fossi rimasta in quella strada, non avrei incontrato le persone che oggi sono la mia famiglia. Se potessi tornare indietro, credo che rifarei la stessa scelta, ma frequenterei anche un corso di disegno. E se trovassi il tempo, lo farei anche adesso: non è mai troppo tardi.`
}
},

/* ───────────────────────── UNITÀ 11 ───────────────────────── */
{
id:11, lvl:'B2 → C1', band:2,
title:'Si, passivo, gerundio e participio',
sub:'O italiano dos textos formais: va compilato, si vendono, finita la cena…',
focus:'si impersonale (ci si alza), si passivante, passivo con essere, venire e andare (va fatto), gerundio presente e passato, participio passato assoluto',
lesson:`
<h3>Si impersonale e si passivante</h3>
<ul class="dots">
<li><b>Impessoal</b> (verbo na 3ª sing.): <i>In Italia si mangia tardi. Si vive bene qui.</i></li>
<li>Com verbos reflexivos vira <b>ci si</b>: <i>La domenica ci si alza tardi.</i></li>
<li>Com <i>essere</i> + adjetivo, o adjetivo vai ao <b>plural</b>: <i>Quando si è giovani, si è impazienti.</i></li>
<li><b>Passivante</b>: o verbo concorda com a coisa: <i>Si vende casa / Si vendono case</i> (= ES <i>se venden</i>, PT <i>vendem-se</i>). Nos tempos compostos, <i>essere</i> + concordância: <i>Si sono vendute molte case.</i></li>
</ul>
<h3>Três passivas</h3>
<div class="tw"><table class="tbl">
<tr><th>auxiliar</th><th>valor</th><th>exemplo</th></tr>
<tr><td><b>essere</b></td><td>neutro, todos os tempos</td><td><i>La legge è stata approvata ieri.</i></td></tr>
<tr><td><b>venire</b></td><td>enfatiza a ação; só tempos simples</td><td><i>La porta viene chiusa alle venti.</i></td></tr>
<tr><td><b>andare</b></td><td>obrigação (= deve ser)</td><td><i>Il modulo va compilato in stampatello.</i></td></tr>
</table></div>
<div class="trap"><span class="pen">Attenzione!</span> <b>Andare + particípio</b> não existe em espanhol nem em português, e é onipresente em instruções italianas: <i>Il vino va servito fresco. Le domande vanno presentate entro il 30.</i> Também = "perder-se": <i>La lettera è andata persa.</i></div>
<h3>Gerúndio</h3>
<p>Causa, modo, tempo, condição: <i>Essendo stanca, sono rimasta a casa. Studiando si impara. Volendo, si può fare.</i> Gerúndio passado: <i>Avendo finito, sono uscita. Essendo arrivati tardi, abbiamo perso l'inizio.</i> Pronomes colados: <i>vedendolo, dicendoglielo</i>.</p>
<h3>Particípio absoluto (C1)</h3>
<p>Como o PT <i>Terminado o jantar, saímos</i>: <i><b>Finita</b> la cena, siamo usciti. <b>Arrivati</b> a casa, abbiamo dormito.</i> O particípio concorda com o seu "sujeito": <i>Saputa la notizia</i> (la notizia → saputa).</p>
`,
reading:{
title:'Come nasce una forma di Parmigiano',
text:`<p>Il Parmigiano Reggiano si produce solo in una zona ben precisa, tra le province di Parma, Reggio Emilia, Modena, Bologna (a sinistra del fiume Reno) e Mantova (a destra del Po). Il latte viene raccolto due volte al giorno e deve essere lavorato entro poche ore: non si possono aggiungere conservanti né additivi.</p>
<p>La sera, il latte [[munto|ordenhado]] viene lasciato riposare in grandi vasche, dove la panna affiora naturalmente. La mattina dopo, [[scremato|desnatado]] il latte della sera, lo si mescola con quello intero della mattina e lo si versa nelle tipiche caldaie di rame a forma di campana. Aggiunti il [[caglio|coalho]] e il siero, il latte coagula in pochi minuti; la cagliata viene poi rotta in granelli minuscoli con uno strumento chiamato spino.</p>
<p>Ogni forma va lasciata in [[salamoia|salmoura]] per circa venti giorni e poi stagionata per almeno dodici mesi. Superato questo periodo, gli esperti del Consorzio la esaminano battendola con un martelletto: ascoltando il suono, capiscono se all'interno ci sono difetti. Solo le forme che superano il controllo vengono marchiate a fuoco. Le altre, private del marchio, si vendono come semplice formaggio.</p>`,
q:[
["Che cosa NON si può aggiungere al latte?",["Caglio","Conservanti","Siero","Latte intero"],1],
["Che cosa succede al latte della sera?",["Viene buttato","Riposa e la panna affiora","Viene stagionato","Viene marchiato"],1],
["A che cosa serve il martelletto?",["A rompere la cagliata","A capire dal suono se ci sono difetti","A marchiare le forme","A girare le forme"],1],
["«Ogni forma va lasciata in salamoia» significa che…",["può essere lasciata","deve essere lasciata","è stata lasciata","viene lasciata ogni tanto"],1],
["«Superato questo periodo» è…",["un gerundio","un participio assoluto","un passivo con venire","un si impersonale"],1]
]},
ex:[
{t:'fill', title:'Si, passivo, gerundio, participio', items:[
["In Italia ___ verso l'una. (pranzare, si)",["si pranza"]],
["In quel negozio ___ libri usati. (vendere, si)",["si vendono"]],
["Il modulo ___ in stampatello. (compilare — obbligo)",["va compilato"]],
["La legge ___ ieri dal Parlamento. (approvare, passivo)",["è stata approvata"]],
["Le lettere ___ ogni mattina. (spedire, venire)",["vengono spedite"]],
["___ in ritardo, ho preso un taxi. (essere, gerundio)",["essendo"]],
["___ i compiti, i ragazzi sono usciti. (finire, participio assoluto)",["finiti"]],
["Quando ___ stanchi, si lavora male. (essere, si)",["si è"]],
["La domenica ___ tardi. (alzarsi, impersonale)",["ci si alza"]],
["___ già ___ , non ho ordinato niente. (mangiare, gerundio passato)",[["avendo"],["mangiato"]]],
["Le domande ___ entro il 30 giugno. (presentare — obbligo)",["vanno presentate"]],
["___ la notizia, ha chiamato sua madre. (sapere, participio assoluto)",["saputa"]]
]},
{t:'mc', title:'Scegli la risposta giusta', items:[
["In questa città ___ molti turisti.",["si vede","si vedono"],1],
["Questo vino ___ servito fresco. (= deve essere)",["va","viene","è stato"],0],
["Il ladro ___ arrestato ieri sera.",["viene","è stato","va"],1,"venire não entra em tempos compostos; ieri pede passato prossimo."],
["___ la notizia, ha chiamato sua madre.",["Saputo","Saputa","Sapendo"],1],
["Dopo una lunga giornata ___ stanchi.",["si è","si sono","si è stanco"],0],
["Il pacco ___ perso durante il trasloco.",["è andato","è venuto","ha andato"],0]
]},
{t:'fix', title:'Correggi la parte sottolineata', items:[
["In Italia {si beve} molti caffè.",["si bevono"],"In Italia si bevono molti caffè."],
["La porta {va chiusa} ieri sera dal portiere.",["è stata chiusa"],"La porta è stata chiusa ieri sera dal portiere."],
["{Arrivato} a casa, Maria ha cenato.",["arrivata"],"Arrivata a casa, Maria ha cenato."],
["In campagna {si alza} presto.",["ci si alza"],"In campagna ci si alza presto."],
["Il documento {è venuto} firmato ieri.",["è stato"],"Il documento è stato firmato ieri."]
]}
],
write:{
task:'Descreva um processo tradicional (uma receita de família, um ofício, uma festa da sua terra) em registro formal, como num guia ou num museu.',
words:[150,190],
targets:[
{l:'2 si passivante/impersonale', re:'<si\\s+W+(a|ano|ono|e)>', n:2},
{l:'1 passiva com venire', re:'<(viene|vengono|veniva|venivano|verrà|verranno)\\s+W+(at|ut|it|tt|st|s|rt|ott)[oaie]>', n:1},
{l:'1 passiva com andare (obrigação)', re:'<(va|vanno|andava|andavano|andrà|andranno)\\s+W+(at|ut|it|tt|st|s|rt|ott)[oaie]>', n:1},
{l:'1 particípio absoluto ou gerúndio', manual:true}
],
model:`Il pão de queijo è un piccolo panino al formaggio tipico del Minas Gerais, in Brasile. La ricetta tradizionale viene tramandata di generazione in generazione e ogni famiglia ne custodisce una versione propria.\nPer prima cosa si porta a ebollizione il latte con l'olio e un pizzico di sale. Il liquido bollente va versato sulla farina di manioca, detta polvilho, e mescolato energicamente fino a ottenere un impasto liscio. Raffreddato l'impasto, si aggiungono le uova una alla volta e, infine, il formaggio grattugiato: in Brasile si usa il queijo minas stagionato, ma si può sostituire con un pecorino non troppo salato.\nLavorando l'impasto con le mani unte d'olio, si formano delle palline della grandezza di una noce. Queste vengono disposte su una teglia e cotte in forno caldo per circa venticinque minuti. I panini vanno serviti ancora tiepidi, preferibilmente con un caffè forte.`
}
},

/* ───────────────────────── UNITÀ 12 ───────────────────────── */
{
id:12, lvl:'B2 → C1', band:2,
title:'Discorso indiretto, connettivi e passato remoto',
sub:'Relatar, argumentar e ler literatura como um nativo.',
focus:'discorso indiretto (trasformazioni di tempi, pronomi, avverbi), connettivi testuali (tuttavia, eppure, pertanto, anzi, siccome), segnali discorsivi (mica, magari, pure, ormai), passato remoto',
lesson:`
<h3>Discurso indireto (verbo introdutor no passado)</h3>
<div class="tw"><table class="tbl">
<tr><th>direto</th><th>indireto</th></tr>
<tr><td>presente: «Sono stanca»</td><td>imperfetto: <i>Ha detto che era stanca</i></td></tr>
<tr><td>passato prossimo: «Ho perso il treno»</td><td>trapassato: <i>…che aveva perso il treno</i></td></tr>
<tr><td>futuro: «Verrò»</td><td>condizionale passato: <i>…che sarebbe venuta</i></td></tr>
<tr><td>imperativo: «Chiudi la porta!»</td><td><i>Mi ha detto di chiudere la porta</i> / <i>che chiudessi</i></td></tr>
<tr><td>pergunta: «Dove vai?»</td><td><i>Mi ha chiesto dove andavo</i> (cuidado: <i>andassi</i>)</td></tr>
<tr><td>questo · qui · oggi · domani · ieri</td><td>quello · lì · quel giorno · il giorno dopo · il giorno prima</td></tr>
</table></div>
<h3>Conectivos para escrever em nível B2–C1</h3>
<div class="tw"><table class="tbl">
<tr><th>adição</th><td>inoltre, per di più, oltretutto, non solo… ma anche</td></tr>
<tr><th>oposição</th><td>tuttavia, eppure, però, invece, mentre, ciononostante, anzi</td></tr>
<tr><th>causa</th><td>perché, poiché, dato che, visto che, <b>siccome</b> (só no início da frase)</td></tr>
<tr><th>consequência</th><td>quindi, perciò, pertanto, dunque, di conseguenza</td></tr>
<tr><th>concessão</th><td>benché / sebbene + congiuntivo · anche se + indicativo</td></tr>
<tr><th>reformulação</th><td>cioè, ossia, vale a dire, in altre parole</td></tr>
<tr><th>conclusão</th><td>insomma, in conclusione, in definitiva</td></tr>
</table></div>
<div class="trap"><span class="pen">Falsi amici del discorso</span> <b>anzi</b> = pelo contrário / aliás (não "antes") · <b>eppure</b> = e no entanto · <b>mica</b> = nada (<i>Non è mica vero</i>) · <b>magari</b> = talvez / tomara · <b>pure</b> = também / à vontade · <b>ormai</b> = a esta altura, já · <b>addirittura</b> = até mesmo · <b>caso mai</b> = se por acaso.</div>
<h3>Passato remoto: para ler</h3>
<p>Usado na literatura, na história e no Sul da Itália. Regulares: <i>parlai, parlasti, parlò, parlammo, parlaste, parlarono</i> · <i>credei/credetti</i> · <i>dormii, dormì</i>. Muitos irregulares seguem o padrão "1-3-3" (irregulares só em io, lui, loro):</p>
<div class="chips">avere: ebbi, ebbe, ebbero · fare: feci, fece, fecero · dire: dissi, disse, dissero · venire: venni, venne, vennero · prendere: presi, prese, presero · vedere: vidi, vide, videro · nascere: nacqui, nacque · scrivere: scrissi, scrisse · essere: fui, fosti, fu, fummo, foste, furono</div>
`,
reading:{
title:'Il treno per Palermo',
text:`<p>Quando Rosaria scese dal treno, la stazione era quasi deserta. Erano passati vent'anni dall'ultima volta che aveva visto Palermo, eppure riconobbe subito l'odore del mare mescolato a quello del pane caldo. Prese la valigia, attraversò l'[[atrio|saguão]] e si fermò davanti al bar dove, da ragazza, aspettava suo padre.</p>
<p>Il barista, un uomo anziano con i [[baffi|bigode]] bianchi, la guardò a lungo. Poi le chiese se fosse la figlia di don Carmelo. Rosaria rimase in silenzio per un attimo, sorpresa. «Sì», rispose infine, «come fa a saperlo?» L'uomo sorrise e le disse che aveva gli stessi occhi del padre, e che don Carmelo, ogni mattina, si sedeva proprio a quel tavolino e parlava di lei, della figlia che studiava al Nord e che un giorno sarebbe tornata.</p>
<p>Rosaria non seppe cosa dire. Si sedette al tavolino, ordinò un caffè e, per la prima volta da molti anni, pianse senza vergogna. Fuori, intanto, la città si svegliava.</p>`,
q:[
["Da quanto tempo Rosaria non vedeva Palermo?",["Due anni","Vent'anni","Da sempre","Un mese"],1],
["Come l'ha riconosciuta il barista?",["Dalla valigia","Dagli occhi, uguali a quelli del padre","Dalla voce","Gliel'aveva detto qualcuno"],1],
["Che cosa faceva don Carmelo ogni mattina?",["Lavorava al bar","Si sedeva a quel tavolino e parlava della figlia","Andava alla stazione","Studiava al Nord"],1],
["In discorso diretto il barista avrebbe chiesto: «Lei ___ la figlia di don Carmelo?»",["è","fosse","era"],0],
["«Eppure riconobbe subito l'odore»: «eppure» esprime…",["causa","contrasto","conseguenza","tempo"],1],
["«Pianse» è il passato remoto di…",["piangere","piacere","pensare"],0]
]},
ex:[
{t:'fill', title:'Discorso indiretto, connettivi, passato remoto', items:[
["«Sono stanca.» → Anna ha detto che ___ stanca.",["era"]],
["«Ho perso il treno.» → Luca ha detto che ___ il treno.",["aveva perso"]],
["«Verrò domani.» → Marta ha detto che ___ il giorno dopo.",["sarebbe venuta"]],
["«Chiudi la porta!» → Mi ha detto ___ la porta.",["di chiudere"]],
["«Questo libro è mio.» → Ha detto che ___ libro era suo.",["quel"]],
["Non è caro, ___ , è piuttosto economico. (= al contrario)",["anzi"]],
["___ pioveva, siamo rimasti a casa. (causa, inizio frase)",["siccome","poiché","dato che","visto che"]],
["Ha studiato tanto; ___ , non ha passato l'esame. (opposizione)",["tuttavia","eppure","ciononostante","però"]],
["Non ho tempo, ___ non posso venire. (conseguenza)",["quindi","perciò","pertanto","dunque","di conseguenza"]],
["Dante ___ a Firenze nel 1265. (nascere, passato remoto)",["nacque"]],
["I Mille ___ da Quarto nel 1860. (partire, passato remoto)",["partirono"]],
["Non è ___ vero quello che dici! (= per niente)",["mica"]]
]},
{t:'mc', title:'Scegli la risposta giusta', items:[
["Lei ___ il libro e ___ via. (passato remoto)",["prese / andò","prendé / andiede","prendette / andò"],0],
["«Dove vai?» → Mi chiese ___ .",["dove andavo","dove vado","dove andrò"],0],
["Posso aprire la finestra? Ma certo, aprila ___ !",["pure","mica","anzi"],0],
["«Ebbe» è il passato remoto di…",["essere","avere","andare"],1],
["___ è tardi, ormai non vale la pena uscire.",["Siccome","Perché","Anzi"],0,"Siccome no início da frase."],
["«Ormai è troppo tardi» significa:",["a questo punto è troppo tardi","forse è troppo tardi","non è mai troppo tardi"],0]
]},
{t:'fix', title:'Correggi la parte sottolineata', items:[
["Mi ha detto che {verrà} il giorno dopo.",["sarebbe venuto","sarebbe venuta"],"Mi ha detto che sarebbe venuto/a il giorno dopo."],
["Ha detto che {domani} sarebbe partito.",["il giorno dopo","l'indomani"],"Ha detto che il giorno dopo sarebbe partito."],
["Sono rimasta a casa {siccome} pioveva.",["perché","poiché","dato che","visto che"],"Sono rimasta a casa perché pioveva."],
["Mi ha ordinato {che chiudo} la porta.",["di chiudere","che chiudessi"],"Mi ha ordinato di chiudere la porta."],
["Ha detto che {questa} era la sua casa.",["quella"],"Ha detto che quella era la sua casa."]
]}
],
write:{
task:'Relate em discurso indireto uma conversa recente (o que te disseram, perguntaram, pediram) e comente-a com pelo menos 5 conectivos diferentes.',
words:[180,230],
targets:[
{l:'3 verbos introdutores (ha detto che, mi ha chiesto se…)', re:'<(ha detto|hanno detto|mi ha chiesto|ci ha chiesto|ha chiesto|disse|chiese|ha risposto|rispose|ha spiegato|ha raccontato|ha aggiunto|mi ha consigliato|mi ha pregato)\\s+(che|se|di|dove|quando|come|perché)>', n:3},
{l:'5 conectivos diferentes', re:'<(inoltre|per di più|oltretutto|tuttavia|eppure|però|invece|ciononostante|anzi|poiché|dato che|visto che|siccome|quindi|perciò|pertanto|dunque|di conseguenza|benché|sebbene|anche se|cioè|ossia|vale a dire|insomma|in conclusione|in definitiva)>', n:5, distinct:true},
{l:'1 condizionale passato como futuro no passado', re:'<(avrei|avresti|avrebbe|avremmo|avreste|avrebbero|sarei|saresti|sarebbe|saremmo|sareste|sarebbero)\\s+W+(at|ut|it|tt|st|rt|s)[oaie]>', n:1}
],
model:`Ieri ho incontrato la mia vicina, la signora Tina, sulle scale. Mi ha chiesto se avessi sentito i rumori della notte prima e, senza aspettare la risposta, mi ha raccontato che il ragazzo del quarto piano aveva fatto una festa fino alle tre. Ha aggiunto che aveva già scritto all'amministratore e che, se la cosa si fosse ripetuta, avrebbe chiamato i vigili. Poi mi ha chiesto di firmare anche io la sua lettera di protesta.\nSinceramente io non avevo sentito niente: anzi, avevo dormito benissimo. Tuttavia non volevo sembrare scortese, quindi le ho detto che ci avrei pensato. In realtà la capisco: ha ottant'anni, vive da sola e, per di più, ha il sonno leggerissimo. Eppure mi sembra esagerato coinvolgere i vigili per una sola festa. Siccome conosco un po' il ragazzo, ho deciso di parlargli io, cioè di provare prima con il dialogo. Insomma, faccio da mediatrice: speriamo che funzioni.`
}
}
);
UNITS.push(
/* ───────────────────────── UNITÀ 13 ───────────────────────── */
{
id:13, lvl:'B2', band:2,
title:'Pronomi relativi',
sub:'Che, cui, il quale, il cui, chi, ciò che: ligar frases como um nativo.',
focus:'pronomi relativi: che, cui (con cui, di cui, in cui), il quale / la quale, il cui (possessivo relativo), chi, quello che / ciò che, il che',
lesson:`
<p class="lead">Em português e espanhol, <i>que</i> vai depois de quase qualquer preposição (<i>a pessoa com que falei</i>). Em italiano não: depois de preposição, <b>che</b> vira <b>cui</b>.</p>
<div class="tw"><table class="tbl">
<tr><th>pronome</th><th>uso</th><th>exemplo</th></tr>
<tr><td><b>che</b></td><td>sujeito ou objeto direto, invariável</td><td><i>Il ragazzo <b>che</b> lavora con me. Il libro <b>che</b> leggo.</i></td></tr>
<tr><td><b>cui</b></td><td>depois de preposição</td><td><i>L'amica <b>con cui</b> esco. Il film <b>di cui</b> ti ho parlato. La città <b>in cui</b> vivo.</i></td></tr>
<tr><td><b>cui</b> sozinho</td><td>= a cui (registro cuidado)</td><td><i>La persona <b>cui</b> ho scritto.</i></td></tr>
<tr><td><b>il quale, la quale, i quali, le quali</b></td><td>formal; evita ambiguidade; com preposição articulada</td><td><i>La sorella di Marco, <b>la quale</b> vive a Parigi… Il progetto <b>al quale</b> lavoro.</i></td></tr>
<tr><td><b>il cui, la cui, i cui, le cui</b></td><td>= cujo/cuyo; o artigo concorda com a coisa possuída</td><td><i>La scrittrice <b>i cui</b> romanzi leggo. La casa <b>le cui</b> finestre danno sul mare.</i></td></tr>
<tr><td><b>chi</b></td><td>= quem / aquele que, verbo no singular</td><td><i><b>Chi</b> dorme non piglia pesci.</i></td></tr>
<tr><td><b>quello che / ciò che</b></td><td>= o que</td><td><i>Non capisco <b>quello che</b> dici.</i></td></tr>
<tr><td><b>il che</b></td><td>= o que (retoma a frase inteira)</td><td><i>È arrivato tardi, <b>il che</b> mi ha irritato.</i></td></tr>
<tr><td><b>dove</b></td><td>= in cui, para lugares</td><td><i>La città <b>dove</b> sono nata.</i></td></tr>
</table></div>
<div class="trap"><span class="pen">Attenzione!</span> "Com que", "de que", "em que" → <b>con cui, di cui, in cui</b>. Nunca "con che". E "o que" no começo de frase é <b>quello che / ciò che</b>, não "il che": <i>Quello che dici è vero</i>.</div>
<div class="plus"><span class="pen">Dica</span> <i>Per cui</i> no fim de um raciocínio é coloquial para "por isso": <i>Ero stanca, per cui sono andata a letto.</i> Em texto formal use <i>perciò</i> ou <i>pertanto</i>.</div>
`,
reading:{
title:'Il paese da cui vengo',
text:`<p>Il paese da cui vengo è un posto in cui tutti si conoscono e in cui nessuno chiude la porta a chiave. Quando ci torno, la prima persona che incontro è quasi sempre la signora Ines, la cui finestra dà proprio sulla fermata dell'autobus. È lei che sa chi è partito, chi è tornato e chi si è sposato, il che la rende una specie di archivio vivente.</p>
<p>Vivo a Milano da otto anni, in un quartiere dove non conosco nemmeno i vicini con cui divido il [[pianerottolo|patamar, hall do andar]]. All'inizio era proprio questo che mi piaceva: la libertà di essere nessuno. Chi è cresciuto in un paese piccolo capirà ciò che intendo. Poi, lentamente, ho cominciato a sentire la mancanza di quegli sguardi da cui un tempo [[scappavo|fugia]].</p>
<p>L'anno scorso ho fatto una cosa per cui i miei amici milanesi mi hanno preso in giro: ho lasciato un biglietto sotto ogni porta del palazzo, invitando tutti a un aperitivo sul terrazzo. Sono venute undici persone, tra cui un pensionato che suona il violino e una ragazza peruviana con la quale oggi esco spesso. Non è il mio paese, ma è un inizio.</p>`,
q:[
["Perché la signora Ines è «una specie di archivio vivente»?",["Lavora in biblioteca","Sa tutto quello che succede in paese","Ha molti libri","È molto anziana"],1],
["Che cosa piaceva all'inizio di Milano a chi racconta?",["I vicini simpatici","L'anonimato","Il terrazzo","I trasporti"],1],
["«Quegli sguardi da cui un tempo scappavo» indica…",["l'attenzione, a volte invadente, della gente del paese","la polizia","i turisti","i colleghi di lavoro"],0],
["Perché gli amici milanesi l'hanno preso in giro?",["Ha invitato i vicini con dei biglietti","Suona il violino","È tornato al paese","Ha cambiato casa"],0],
["In «una ragazza con la quale oggi esco», «con la quale» equivale a…",["con che","con cui","di cui"],1]
]},
ex:[
{t:'fill', title:'Completa con il relativo giusto', items:[
["La ragazza ___ ho conosciuto ieri è spagnola.",["che"]],
["Il libro di ___ ti ho parlato è esaurito.",["cui"]],
["Il ristorante ___ siamo andati era carissimo. (luogo)",["in cui","dove"]],
["Ecco l'amico con ___ vado in vacanza.",["cui"]],
["___ cerca trova.",["chi"]],
["___ dici non è vero.",["quello che","ciò che"]],
["Lo scrittore, ___ romanzi sono tradotti ovunque, vive a Roma. (possessivo relativo)",["i cui"]],
["È arrivato in ritardo, ___ ha fatto arrabbiare il capo.",["il che"]],
["Le persone a ___ ho scritto non hanno risposto.",["cui"]],
["Il motivo per ___ ti chiamo è semplice.",["cui"]],
["La collega ___ marito lavora con me si chiama Anna. (possessivo relativo)",["il cui"]],
["Il progetto al ___ lavoro scade a maggio.",["quale"]]
]},
{t:'mc', title:'Scegli la risposta giusta', items:[
["La persona ___ ho parlato è il direttore.",["con che","con cui","con quale"],1],
["Non capisco ___ vuoi.",["che","quello che","il quale"],1],
["La casa ___ finestre danno sul mare.",["le cui","la cui","cui"],0,"Concorda com finestre."],
["___ arriva tardi non entra.",["Chi","Che","Il quale"],0],
["Ho visto la sorella di Marco, ___ vive a Parigi. (lei, non Marco)",["che","la quale","il quale"],1,"La quale elimina a ambiguidade."],
["Ha perso il lavoro, ___ lo ha molto preoccupato.",["il che","che","ciò"],0]
]},
{t:'fix', title:'Correggi la parte sottolineata', items:[
["La ragazza {cui} ho visto ieri è mia cugina.",["che"],"La ragazza che ho visto ieri è mia cugina."],
["Il film {che} ti ho parlato è bellissimo.",["di cui"],"Il film di cui ti ho parlato è bellissimo."],
["La città {que} vivo è Torino.",["in cui","dove"],"La città in cui vivo è Torino."],
["Conosco uno studente {cui} padre è professore.",["il cui"],"Conosco uno studente il cui padre è professore."],
["{Che} dorme non piglia pesci.",["chi"],"Chi dorme non piglia pesci."]
]}
],
write:{
task:'Descreva o lugar de onde você vem para alguém que nunca esteve lá: as pessoas, os lugares e os costumes que você leva consigo.',
words:[150,190],
targets:[
{l:'3 usos de cui (con cui, di cui, in cui…)', re:'<cui>', n:3},
{l:'1 il cui / la cui / i cui / le cui', re:'<(il|la|i|le)\\s+cui>', n:1},
{l:'1 chi, quello che ou ciò che', re:'<(chi|quello che|ciò che)>', n:1},
{l:'1 "il che" retomando uma frase', manual:true}
],
model:`La città da cui vengo è un posto in cui il mare si vede da quasi ogni finestra. È una città di cui i turisti conoscono soprattutto le spiagge, ma la parte che amo di più è il mercato del centro, dove andavo la domenica con mio nonno. Lì lavorava un pescivendolo la cui voce si sentiva da due strade di distanza: chi passava di lì non poteva non comprare qualcosa.\nLe persone con cui sono cresciuta parlano forte, ridono ancora più forte e invitano a pranzo anche chi hanno appena conosciuto, il che all'inizio sorprende molti stranieri. Quello che mi manca di più è proprio questo: la facilità con cui si fa amicizia. Oggi vivo in una città in cui tutti hanno fretta, ma porto con me un'abitudine di cui non riesco a fare a meno: salutare sempre il barista per nome.`
}
},

/* ───────────────────────── UNITÀ 14 ───────────────────────── */
{
id:14, lvl:'B2', band:2,
title:'Verbi e preposizioni',
sub:'Cominciare a, smettere di, innamorarsi di, sono appena arrivata.',
focus:'verbi seguiti da a / di / da / su + infinito o nome (cominciare a, riuscire a, decidere di, smettere di, cercare di, innamorarsi di, dipendere da, contare su), verbi senza preposizione, avere appena + participio',
lesson:`
<p class="lead">É memória pura, mas rende muito: a preposição errada é o que mais denuncia a "tradução mental" do espanhol ou do português.</p>
<div class="tw"><table class="tbl">
<tr><th>+ a</th><td>cominciare, continuare, riuscire, imparare, provare, aiutare, abituarsi, convincere, insegnare, prepararsi, andare / venire (a fare)</td></tr>
<tr><th>+ di</th><td>decidere, finire, smettere, cercare, sperare, ricordarsi, dimenticarsi, accorgersi, credere, pensare (= pretender), chiedere, dire, permettere, avere paura / bisogno / voglia di</td></tr>
<tr><th>sem preposição</th><td>volere, potere, dovere, sapere, preferire, desiderare, amare, osare; <i>bisogna, è necessario, mi piace</i> + infinitivo</td></tr>
<tr><th>+ da</th><td>dipendere da, derivare da, guarire da, difendersi da</td></tr>
<tr><th>+ su</th><td>contare su, riflettere su, scommettere su</td></tr>
</table></div>
<h3>As armadilhas clássicas</h3>
<div class="tw"><table class="tbl">
<tr><th>PT / ES</th><th>Italiano</th></tr>
<tr><td>acabei de chegar / acabo de llegar</td><td><b>Sono appena arrivata</b> (nunca "finisco di arrivare")</td></tr>
<tr><td>deixar de fumar / dejar de fumar</td><td><b>smettere di</b> fumare</td></tr>
<tr><td>tratar de / tentar</td><td><b>cercare di</b>, <b>provare a</b></td></tr>
<tr><td>apaixonar-se por / enamorarse de</td><td><b>innamorarsi di</b></td></tr>
<tr><td>casar com</td><td><b>sposare</b> qualcuno (transitivo) / <b>sposarsi con</b></td></tr>
<tr><td>parecer-se com</td><td><b>assomigliare a</b></td></tr>
<tr><td>precisar de</td><td><b>avere bisogno di</b></td></tr>
<tr><td>sonhar com</td><td><b>sognare</b> qualcosa / sognare di + infinitivo</td></tr>
<tr><td>pensar em</td><td><b>pensare a</b> (algo/alguém) · <b>pensare di</b> (opinião ou intenção)</td></tr>
</table></div>
<div class="trap"><span class="pen">Attenzione!</span> <i>Che ne pensi?</i> = o que você acha disso? · <i>Penso a te</i> = penso em você · <i>Penso di partire</i> = pretendo partir.</div>
`,
reading:{
title:'Come ho smesso di rimandare',
text:`<p>Per anni ho rimandato tutto: cominciavo a scrivere una relazione e, dopo dieci minuti, decidevo di controllare la posta; provavo a studiare e [[finivo per|acabava por]] guardare video di gatti. Mi ripetevo che dovevo smettere di perdere tempo, ma non ci riuscivo.</p>
<p>Poi ho letto il libro di una psicologa che mi ha convinta a cambiare prospettiva. Secondo lei, chi procrastina non è pigro: ha paura di fallire, o di non essere all'altezza. Il libro mi ha insegnato a dividere ogni compito in parti piccolissime e a concentrarmi solo sulla prima. Non «scrivere la relazione», ma «aprire il file e scrivere il titolo».</p>
<p>All'inizio mi sembrava ridicolo. Eppure funziona: una volta iniziato, è più facile continuare a lavorare che fermarsi. Ho anche imparato a perdonarmi quando non riesco a rispettare i miei piani, invece di arrabbiarmi con me stessa.</p>
<p>Non dico di essere guarita: anche oggi, appena finito di scrivere questo articolo, ho pensato di riordinare l'armadio. Ma ho resistito. Conto su di voi, lettori, per ricordarmi di non [[mollare|desistir]].</p>`,
q:[
["Che cosa succedeva quando l'autrice provava a studiare?",["Studiava molto","Finiva per guardare video","Si addormentava","Andava in palestra"],1],
["Secondo la psicologa, chi procrastina…",["è pigro","ha paura di fallire","non ha tempo","è stanco"],1],
["Qual è il metodo proposto?",["Lavorare di notte","Dividere ogni compito in parti piccolissime","Spegnere il telefono","Studiare con gli amici"],1],
["In «ho pensato di riordinare l'armadio», «pensare di» significa…",["ricordare","avere intenzione di","credere in","preoccuparsi"],1],
["«Non mollare» significa…",["non arrendersi","non uscire di casa","non mangiare","non scrivere"],0]
]},
ex:[
{t:'fill', title:'A, di, da, su… o niente?', items:[
["Ho cominciato ___ studiare italiano a settembre.",["a"]],
["Ho deciso ___ cambiare lavoro.",["di"]],
["Non riesco ___ dormire con questo caldo.",["a"]],
["Devi smettere ___ fumare!",["di"]],
["Cerco ___ capire, ma è difficile.",["di"]],
["Si è innamorata ___ un ragazzo francese.",["di"]],
["Non lo so, dipende ___ te.",["da"]],
["Ho ___ mangiato, non ho fame. (= proprio ora)",["appena"]],
["Mi ha convinto ___ restare.",["a"]],
["Ricordati ___ comprare il latte!",["di"]],
["Ho bisogno ___ un consiglio.",["di"]],
["Assomigli molto ___ tua madre.",["a"]]
]},
{t:'mc', title:'Scegli la risposta giusta', items:[
["Penso ___ partire domani. (= pretendo)",["a","di","in"],1],
["Penso spesso ___ mia nonna.",["a","di","in"],0],
["Qual è corretta?",["Voglio a imparare.","Voglio di imparare.","Voglio imparare."],2],
["«Acabei de chegar» si dice…",["Finisco di arrivare.","Sono appena arrivata.","Ho appena di arrivare."],1],
["Qual è corretta?",["Ha sposato con un medico.","Ha sposato un medico.","Si è sposata a un medico."],1],
["Conto ___ di te.",["su","in","con"],0]
]},
{t:'fix', title:'Correggi la parte sottolineata', items:[
["Mi sono innamorata {per} lui.",["di"],"Mi sono innamorata di lui."],
["Ho smesso {a} fumare due anni fa.",["di"],"Ho smesso di fumare due anni fa."],
["{Finisco di arrivare}, ti chiamo dopo.",["sono appena arrivato","sono appena arrivata"],"Sono appena arrivato/a, ti chiamo dopo."],
["{Voglio di imparare} il cinese.",["voglio imparare"],"Voglio imparare il cinese."],
["{Ho bisogno} il tuo aiuto.",["ho bisogno del"],"Ho bisogno del tuo aiuto."]
]}
],
write:{
task:'Conte um hábito que você começou, deixou ou está tentando mudar: como começou, o que tentou, o que conseguiu e o que pretende fazer.',
words:[150,190],
targets:[
{l:'3 construções com a + infinitivo', re:'<a\\s+W+(are|ere|ire|armi|ermi|irmi|arti|erti|irti|arsi|ersi|irsi|arlo|erlo|irlo|arla|erla|irla)>', n:3},
{l:'3 construções com di + infinitivo', re:'<di\\s+W+(are|ere|ire|armi|ermi|irmi|arti|erti|irti|arsi|ersi|irsi|arlo|erlo|irlo|arla|erla|irla)>', n:3},
{l:'1 "appena" + particípio', re:'<appena\\s+W+(at|ut|it|tt|st|s|rt)[oaie]>', n:1}
],
model:`Due anni fa ho deciso di smettere di usare il telefono a letto. Avevo cominciato a dormire male e mi svegliavo già stanca. All'inizio ho provato a lasciarlo in cucina, ma dopo tre sere ho smesso di farlo: avevo paura di non sentire la sveglia. Allora una collega mi ha convinto a comprare una vecchia sveglia, e questo mi ha aiutato a cambiare davvero. Oggi riesco a leggere almeno venti pagine prima di dormire e mi sono abituata a spegnere tutto alle undici. Non sempre ci riesco, ovviamente: ieri sera, per esempio, ho appena finito di cenare e ho subito cercato di controllare le email. Ma ho imparato a non sentirmi in colpa. Adesso penso di fare lo stesso con i social durante il lavoro. Spero di farcela!`
}
},

/* ───────────────────────── UNITÀ 15 ───────────────────────── */
{
id:15, lvl:'B2 → C1', band:2,
title:'Causativo e verbi pronominali',
sub:'Mi faccio tagliare i capelli, me la cavo, non me la sento, ce l\'ho con te.',
focus:'fare + infinito (causativo), lasciare + infinito, verbi pronominali (cavarsela, prendersela, sentirsela, passarsela, godersela, smetterla, avercela con qualcuno, farcela)',
lesson:`
<h3>Fare + infinitivo: mandar fazer</h3>
<p><i>Faccio riparare la macchina</i> = mando consertar o carro. <i>Mi faccio tagliare i capelli</i> = corto o cabelo (no cabeleireiro).</p>
<div class="trap"><span class="pen">Attenzione!</span> Em português e espanhol, "corto o cabelo" / "me corto el pelo" serve mesmo quando outra pessoa corta. Em italiano, <i>mi taglio i capelli</i> significa que você mesma corta. No cabeleireiro: <b>mi faccio tagliare</b>.</div>
<ul class="dots">
<li>Quem executa a ação vem com <b>a</b> ou <b>da</b>: <i>Ho fatto leggere la lettera <b>a</b> Marco. Mi faccio aiutare <b>da</b> mia sorella.</i></li>
<li>Pronomes vão antes de <i>fare</i> (ou colados no imperativo): <i>Te lo faccio sapere. Fallo entrare!</i></li>
<li><b>Lasciare</b> + infinitivo = deixar: <i>Lasciami parlare! Non lasciarti convincere.</i> (sem preposição!)</li>
</ul>
<h3>Verbos pronominais do dia a dia</h3>
<div class="tw"><table class="tbl">
<tr><td><b>cavarsela</b></td><td>virar-se, se sair</td><td><i>Me la cavo con l'inglese. Te la sei cavata bene!</i></td></tr>
<tr><td><b>farcela</b></td><td>conseguir</td><td><i>Ce l'ho fatta! Non ce la faccio più.</i></td></tr>
<tr><td><b>prendersela</b></td><td>ofender-se, ficar chateada</td><td><i>Non prendertela, scherzavo. Se l'è presa.</i></td></tr>
<tr><td><b>avercela con</b></td><td>estar com raiva de alguém</td><td><i>Perché ce l'hai con me?</i></td></tr>
<tr><td><b>sentirsela</b></td><td>sentir-se capaz, ter coragem</td><td><i>Non me la sento di guidare di notte.</i></td></tr>
<tr><td><b>passarsela</b></td><td>estar levando a vida</td><td><i>Come te la passi?</i></td></tr>
<tr><td><b>godersela</b></td><td>aproveitar</td><td><i>Siamo in vacanza: godiamocela!</i></td></tr>
<tr><td><b>smetterla / finirla</b></td><td>parar com isso</td><td><i>Smettila! Finiscila di lamentarti.</i></td></tr>
<tr><td><b>andarsene</b></td><td>ir embora</td><td><i>Me ne vado.</i></td></tr>
</table></div>
<p>Nos tempos compostos usam <b>essere</b> e o particípio concorda com o <i>la</i> (feminino): <i>me la sono cavat<b>a</b>, se l'è pres<b>a</b></i> — mesmo quando quem fala é homem.</p>
`,
reading:{
title:'Me la godo',
text:`<p>Quando sono arrivata a Bologna per l'Erasmus, non parlavo quasi italiano. I primi giorni me la sono cavata con lo spagnolo e i gesti, ma presto ho capito che non bastava. Al supermercato una signora se l'è presa perché le avevo «rubato» il posto nella fila; io non avevo capito niente e lei ce l'ha avuta con me per tutta la settimana, ogni volta che ci incontravamo sulle scale.</p>
<p>La mia coinquilina, Chiara, mi ha fatto conoscere i suoi amici e mi ha fatto vedere i posti dove andavano gli studenti. Una sera mi ha portata a una festa di laurea e mi ha fatto assaggiare i tortellini di sua nonna. «Lasciati andare», mi diceva quando avevo paura di sbagliare. Non me la sentivo di parlare davanti a tutti, ma alla fine ho raccontato una storia e li ho fatti ridere.</p>
<p>Dopo sei mesi mi sono fatta tagliare i capelli da un parrucchiere del quartiere e ho chiacchierato con lui per un'ora, senza mai passare allo spagnolo. Quando sono uscita, mi sono resa conto che ce l'avevo fatta. Oggi, se qualcuno mi chiede come me la passo in Italia, rispondo: «Me la godo».</p>`,
q:[
["Come se l'è cavata all'inizio?",["Con l'inglese","Con lo spagnolo e i gesti","Con un'app di traduzione","Non se l'è cavata"],1],
["Perché la signora ce l'aveva con lei?",["Pensava che le avesse rubato il posto in fila","Faceva rumore","Non la salutava","Parlava spagnolo"],0],
["Che cosa ha fatto Chiara?",["Le ha fatto conoscere amici e luoghi degli studenti","Le ha tagliato i capelli","Le ha insegnato lo spagnolo","L'ha lasciata sola"],0],
["«Non me la sentivo di parlare» significa…",["non avevo il coraggio di parlare","non sentivo bene","non volevo ascoltare","non stavo male"],0],
["«Mi sono fatta tagliare i capelli» significa che…",["li ha tagliati da sola","il parrucchiere glieli ha tagliati","se li è fatti crescere"],1]
]},
ex:[
{t:'fill', title:'Causativo e pronominali', items:[
["Domani ___ riparare la lavatrice. (fare, io)",["faccio"]],
["Ieri mi sono ___ tagliare i capelli.",["fatta","fatto"]],
["Il professore ci ha ___ leggere tre capitoli.",["fatto"]],
["___ parlare, per favore! (lasciare + mi, tu)",["lasciami"]],
["All'esame non ero preparata, ma me la sono ___ . (cavarsela)",["cavata"]],
["Non ___ : scherzavo! (prendersela, tu, negativo)",["prendertela","te la prendere"]],
["Come ___ passi? (passarsela, tu)",["te la"]],
["___ ! Mi stai facendo impazzire. (smetterla, tu)",["smettila"]],
["Perché ___ con me? Che cosa ti ho fatto? (avercela, tu)",["ce l'hai"]],
["Non me ___ sento di guidare di notte.",["la"]],
["Ti ___ sapere domani. (fare, io)",["faccio"]],
["Siamo in vacanza: ___ ! (godersela, noi)",["godiamocela"]]
]},
{t:'mc', title:'Scegli la risposta giusta', items:[
["«Corto o cabelo no cabeleireiro» =",["Taglio i capelli dal parrucchiere.","Mi faccio tagliare i capelli dal parrucchiere."],1],
["«Me la sono cavata» significa…",["mi sono arrabbiata","me ne sono andata","ho superato la difficoltà"],2],
["«Ce l'ha con me» significa…",["è arrabbiato con me","è d'accordo con me","ha qualcosa per me"],0],
["Non me la ___ di parlare in pubblico.",["sento","sente","senti"],0],
["«Come te la passi?» significa…",["Come va la vita?","Dove vai?","Che cosa mi passi?"],0],
["Lasciami ___ !",["a parlare","di parlare","parlare"],2]
]},
{t:'fix', title:'Correggi la parte sottolineata', items:[
["Domani {mi taglio} i capelli dal parrucchiere.",["mi faccio tagliare"],"Domani mi faccio tagliare i capelli dal parrucchiere."],
["All'esame me la sono {cavato} bene.",["cavata"],"All'esame me la sono cavata bene."],
["{Lasciami a parlare}!",["lasciami parlare"],"Lasciami parlare!"],
["Non {mi la sento} di partire.",["me la sento"],"Non me la sento di partire."],
["Perché {la hai} con lui?",["ce l'hai"],"Perché ce l'hai con lui?"]
]}
],
write:{
task:'Conte como você se virou numa situação difícil num lugar ou ambiente novo: quem te ajudou, o que te fizeram fazer, do que você não se sentia capaz.',
words:[150,190],
targets:[
{l:'2 causativos (fare + infinitivo)', re:'<(faccio|fai|fa|facciamo|fate|fanno|fatto|fatta|fatti|fatte|farò|faceva|facevo|fece)\\s+W+(are|ere|ire)>', n:2},
{l:'3 verbos pronominais com la (me la, ce l\'…)', re:'<(me|te|se|ce|ve)\\s+(la|l\')', n:3},
{l:'1 lasciare + infinitivo', re:'<(lascia|lasciami|lasciarmi|lasciati|lasciarti|lasciato|lasciata|lascio|lasciava|lasciavo|lasciatemi)\\s+W+(are|ere|ire)>', n:1}
],
model:`Il mio primo giorno di lavoro in un'azienda tedesca è stato un disastro. Non capivo quasi niente, ma mi vergognavo di chiedere. A mezzogiorno un collega, Jonas, si è accorto che ero in difficoltà e mi ha fatto sedere vicino a lui in mensa. Mi ha fatto conoscere tutta la squadra e mi ha fatto vedere come funzionava il sistema delle ferie. Il pomeriggio il capo mi ha chiesto di presentare il mio progetto: non me la sentivo, ma Jonas mi ha detto «Lasciati aiutare» e mi ha fatto ripetere la presentazione due volte prima della riunione. Alla fine me la sono cavata abbastanza bene. Solo una collega se l'è presa perché avevo occupato la sua sala riunioni, e per qualche giorno ce l'ha avuta con me. Oggi, dopo un anno, ce l'ho fatta: parlo tedesco e me la godo.`
}
},

/* ───────────────────────── UNITÀ 16 ───────────────────────── */
{
id:16, lvl:'C1', band:2,
title:'Registro formale e nominalizzazione',
sub:'Escrever como num e-mail institucional, num relatório ou num jornal.',
focus:'nominalizzazione (decidere → la decisione), sinonimi formali (effettuare, svolgere, comportare, fornire, disporre di), formule della lettera formale (con la presente, resto in attesa di un Suo riscontro), Lei con maiuscola',
lesson:`
<p class="lead">No C1 o que muda não é a gramática, é o <b>registro</b>: transformar verbos em substantivos, trocar verbos genéricos por precisos e dominar as fórmulas da escrita formal.</p>
<h3>Nominalização</h3>
<p><i>Il governo ha deciso di aumentare le tasse</i> → <i>La <b>decisione</b> del governo di aumentare le tasse</i>.</p>
<div class="chips">arrivare → l'arrivo · partire → la partenza · aumentare → l'aumento · ridurre → la riduzione · crescere → la crescita · scegliere → la scelta · sviluppare → lo sviluppo · chiudere → la chiusura · pagare → il pagamento · perdere → la perdita · vendere → la vendita · risolvere → la soluzione · analizzare → l'analisi · richiedere → la richiesta · rinviare → il rinvio</div>
<h3>Verbos genéricos → formais</h3>
<div class="tw"><table class="tbl">
<tr><th>coloquial</th><th>formal</th><th>exemplo</th></tr>
<tr><td>fare</td><td>effettuare, svolgere, compiere, redigere</td><td><i>effettuare un pagamento, svolgere un'attività, redigere un verbale</i></td></tr>
<tr><td>dire</td><td>affermare, dichiarare, sostenere, comunicare</td><td><i>Il ministro ha dichiarato che…</i></td></tr>
<tr><td>avere</td><td>possedere, disporre di</td><td><i>L'azienda dispone di trenta dipendenti.</i></td></tr>
<tr><td>dare</td><td>fornire, conferire, rilasciare</td><td><i>fornire informazioni, rilasciare un certificato</i></td></tr>
<tr><td>usare</td><td>impiegare, utilizzare, avvalersi di</td><td><i>Ci avvaliamo di consulenti esterni.</i></td></tr>
<tr><td>causare</td><td>comportare, determinare, provocare</td><td><i>Il progetto comporta costi elevati.</i></td></tr>
<tr><td>mostrare</td><td>evidenziare, illustrare</td><td><i>I dati evidenziano un calo.</i></td></tr>
</table></div>
<div class="trap"><span class="pen">Falso amico</span> <b>comportare</b> = implicar, acarretar (não "comportar-se", que é <i>comportarsi</i>). <b>Riscontro</b> = resposta, retorno.</div>
<h3>Fórmulas de carta e e-mail formal</h3>
<div class="tw"><table class="tbl">
<tr><th>abertura</th><td>Gentile Dottoressa Bianchi, · Egregio Direttore, · Spettabile Ditta / Spett.le Ufficio</td></tr>
<tr><th>motivo</th><td>Con la presente desidero… · In riferimento alla Sua email del… · Le scrivo in merito a…</td></tr>
<tr><th>pedido</th><td>Le sarei grata se potesse… · Vi chiedo cortesemente di…</td></tr>
<tr><th>fecho</th><td>Resto in attesa di un Suo cortese riscontro. · La ringrazio anticipatamente. · Distinti saluti / Cordiali saluti</td></tr>
</table></div>
<p>No registro formal, os pronomes de <b>Lei</b> costumam ir com maiúscula, inclusive colados: <i>La ringrazio, comunicarLe, la Sua richiesta</i>. Para empresas: <i>Voi, Vostro</i>.</p>
`,
reading:{
title:'Reclamo per mancata consegna',
text:`<p><b>Oggetto:</b> Reclamo per mancata consegna — ordine n. 48213</p>
<p>Gentile Servizio Clienti,<br>con la presente desidero segnalare la mancata consegna dell'ordine in oggetto, effettuato il 2 ottobre e regolarmente pagato con carta di credito. Al momento dell'acquisto, sul Vostro sito era indicata una consegna entro cinque giorni lavorativi. Ad oggi, a distanza di oltre tre settimane, non ho ricevuto né il prodotto né alcuna comunicazione [[in merito al|a respeito do]] ritardo.</p>
<p>Ho contattato il Vostro numero verde in due occasioni: nel primo caso la chiamata si è interrotta dopo un'attesa di quaranta minuti; nel secondo, un operatore mi ha assicurato che il pacco sarebbe stato consegnato entro 48 ore, il che non è avvenuto.</p>
<p>Considerato quanto sopra, chiedo la consegna immediata della merce oppure, in alternativa, il [[rimborso integrale|reembolso total]] dell'importo versato. Qualora non ricevessi riscontro entro dieci giorni dalla presente, mi vedrò costretta a rivolgermi a un'associazione per la tutela dei consumatori.</p>
<p>Resto in attesa di un Vostro cortese [[riscontro|retorno, resposta]] e porgo distinti saluti.<br>Marta Colombo</p>`,
q:[
["Qual è lo scopo dell'email?",["Chiedere informazioni su un prodotto","Fare un reclamo per un ordine non consegnato","Annullare un ordine","Ringraziare il servizio clienti"],1],
["Entro quando era prevista la consegna?",["48 ore","Cinque giorni lavorativi","Tre settimane","Dieci giorni"],1],
["Che cosa è successo nella seconda telefonata?",["La chiamata si è interrotta","Un operatore ha promesso la consegna entro 48 ore","Le hanno rimborsato i soldi","Non ha risposto nessuno"],1],
["Che cosa chiede Marta?",["Uno sconto","La consegna immediata o il rimborso","Di parlare con il direttore","Un prodotto diverso"],1],
["«Qualora non ricevessi riscontro» equivale a…",["se non riceverò una risposta","quando riceverò una risposta","benché riceva una risposta"],0],
["«Considerato quanto sopra» significa…",["tenendo conto di ciò che ho scritto","sopra il tavolo","considerando il prezzo"],0]
]},
ex:[
{t:'fill', title:'Nominalizzazione e lessico formale', items:[
["Il governo ha deciso. → La ___ del governo.",["decisione"]],
["I prezzi sono aumentati. → L'___ dei prezzi.",["aumento"]],
["Il treno parte alle otto. → La ___ del treno è alle otto.",["partenza"]],
["___ il pagamento entro il 30 giugno. (fare, formale, Lei)",["effettui"]],
["Il comune ha chiuso la biblioteca. → La ___ della biblioteca.",["chiusura"]],
["Il direttore ha ___ che i risultati sono positivi. (dire, formale)",["affermato","dichiarato","sostenuto","comunicato"]],
["___ riferimento alla Sua email del 3 marzo…",["in"]],
["Resto in attesa di un Suo cortese ___ .",["riscontro"]],
["Il progetto ___ costi elevati. (causare, formale)",["comporta"]],
["L'azienda ___ di trenta dipendenti. (avere, formale)",["dispone"]],
["L'economia è cresciuta del 2%. → La ___ economica è stata del 2%.",["crescita"]],
["La ringrazio ___ per la disponibilità. (= in anticipo, prima)",["anticipatamente"]]
]},
{t:'mc', title:'Scegli la risposta giusta', items:[
["Qual è la più formale?",["Ti scrivo per dirti che…","Le scrivo per comunicarLe che…","Ciao, volevo dirti che…"],1],
["«Svolgere un'attività» significa…",["realizar uma atividade","desembrulhar uma atividade","voltar a uma atividade"],0],
["Saluto finale formale:",["Un bacione","Distinti saluti","Ci sentiamo!"],1],
["Nominalizzazione di «analizzare»:",["l'analizzamento","l'analisi","l'analizzo"],1],
["«Comportare» significa…",["comportar-se","implicar, acarretar","comportamento"],1],
["«Fornire informazioni» significa…",["pedir informações","dar informações","esconder informações"],1]
]},
{t:'fix', title:'Correggi la parte sottolineata', items:[
["Egregio Direttore, {ti} scrivo per segnalare un problema.",["le"],"Egregio Direttore, Le scrivo per segnalare un problema."],
["Il progetto {fa} costi molto alti.",["comporta"],"Il progetto comporta costi molto alti."],
["L'{aumentazione} dei prezzi preoccupa i cittadini.",["aumento"],"L'aumento dei prezzi preoccupa i cittadini."],
["Con la presente {voglio dirLe} che la riunione è rinviata.",["le comunico"],"Con la presente Le comunico che la riunione è rinviata."],
["{Ciao}, Dottoressa Bianchi, …",["gentile"],"Gentile Dottoressa Bianchi, …"]
]}
],
write:{
task:'Escreva um e-mail formal de reclamação ou de solicitação (a uma empresa, universidade ou prefeitura): contexto, problema, pedido concreto e prazo.',
words:[160,210],
targets:[
{l:'abertura formal (Gentile, Egregio, Spettabile)', re:'<(gentile|egregio|egregia|spettabile|spett\\.le)>', n:1},
{l:'4 substantivos abstratos (-zione, -mento, -ura, -enza…)', re:'<W+(zione|zioni|mento|menti|ura|ure|enza|enze|anza|anze)>', n:4},
{l:'fecho formal (Distinti saluti, Resto in attesa…)', re:'<(distinti saluti|cordiali saluti|resto in attesa|porgo|la ringrazio)', n:1},
{l:'Lei / Le / Sua com maiúscula', manual:true}
],
model:`Oggetto: Richiesta di rimborso — corso di lingua tedesca\n\nGentile Responsabile della Segreteria,\ncon la presente desidero richiedere il rimborso della quota di iscrizione al corso di tedesco B1, regolarmente versata il 15 settembre. Al momento dell'iscrizione, sul Vostro sito era prevista la partenza del corso per il 1° ottobre. In data 28 settembre, tuttavia, ho ricevuto una comunicazione relativa al rinvio dell'inizio delle lezioni a data da definirsi, senza alcuna indicazione in merito alle tempistiche.\nComprendo che si possano verificare imprevisti organizzativi; ciononostante, l'incertezza sulla data di avvio comporta per me notevoli difficoltà, dal momento che la frequenza del corso era legata a un'esigenza lavorativa.\nLe sarei pertanto grata se potesse disporre il rimborso integrale dell'importo versato tramite bonifico bancario. Resto a disposizione per fornire eventuali documenti necessari alla pratica.\nRingraziandoLa anticipatamente per la Sua cortese attenzione, resto in attesa di un Suo riscontro e porgo distinti saluti.`
}
}
);
/* ───────── FASE A1 → A2 · PRIMI PASSI ───────── */
UNITS.forEach(u=>{ u.band++; });
UNITS.unshift(
/* ───────── P1 ───────── */
{
id:101, n:'P1', lvl:'A1', band:0,
title:'Ciao! Suoni, saluti e presentazioni',
sub:'Come si leggono le parole e come ci si presenta · Como ler e como se apresentar',
focus:'pronuncia e ortografia (c/ch, g/gh, gli, gn, sc, doppie, accento), saluti formali e informali, presentarsi (mi chiamo, sono, piacere), tu e Lei',
lesson:`
<p class="lead">O italiano se lê quase exatamente como se escreve. Aprendendo uma dúzia de regras você consegue ler em voz alta qualquer palavra, e é aí que começa a melodia da língua.</p>
<h3>Os sons que mudam</h3>
<div class="tw"><table class="tbl">
<tr><th>escrita</th><th>som</th><th>como em…</th><th>exemplos</th></tr>
<tr><td><b>ce, ci</b></td><td>"tch"</td><td>tchau</td><td><i>cena, ciao, cinema, dolce</i></td></tr>
<tr><td><b>che, chi</b></td><td>"k"</td><td>quero</td><td><i>che, chiave, Michele, pochi</i></td></tr>
<tr><td><b>ca, co, cu</b></td><td>"k"</td><td>casa</td><td><i>casa, come, cuore</i></td></tr>
<tr><td><b>ge, gi</b></td><td>"dj"</td><td>"dia" no Rio</td><td><i>gelato, giorno, Giulia</i></td></tr>
<tr><td><b>ghe, ghi</b></td><td>"g"</td><td>guerra</td><td><i>spaghetti, laghi</i></td></tr>
<tr><td><b>gli</b></td><td>"lh"</td><td>filho</td><td><i>figlio, famiglia, moglie</i></td></tr>
<tr><td><b>gn</b></td><td>"nh"</td><td>banho</td><td><i>gnocchi, lasagna, bagno</i></td></tr>
<tr><td><b>sce, sci</b></td><td>"ch"</td><td>chá</td><td><i>pesce, sciare, uscita</i></td></tr>
<tr><td><b>sche, schi</b></td><td>"sk"</td><td>—</td><td><i>scherzo, schiena</i></td></tr>
<tr><td><b>z, zz</b></td><td>"ts" ou "dz"</td><td>—</td><td><i>pizza</i> (ts), <i>zero</i> (dz)</td></tr>
<tr><td><b>h</b></td><td>muda</td><td>hora</td><td><i>ho, hai, ha, hanno</i></td></tr>
</table></div>
<p>Em <i>ciao, giorno, giallo</i> o <b>i</b> só serve para dar o som "tch"/"dj": não se pronuncia. Diz-se "tchao", "djorno".</p>
<div class="trap"><span class="pen">Attenzione, brasiliana!</span> No italiano as vogais finais são sempre claras: <i>latte</i> é "lát-te", nunca "látchi"; <i>sette</i> é "sét-te". E <b>di</b>, <b>ti</b> nunca viram "dji", "tchi": <i>dico</i> = "dí-ko", <i>tipo</i> = "tí-po".</div>
<h3>Consoantes duplas</h3>
<p>As <i>doppie</i> se pronunciam mais longas e mudam o significado: <i>nono</i> (nono) ≠ <i>nonno</i> (avô) · <i>sete</i> (sede) ≠ <i>sette</i> (sete) · <i>caro</i> ≠ <i>carro</i> · <i>pena</i> ≠ <i>penna</i> (caneta).</p>
<h3>O acento</h3>
<p>A maioria das palavras é paroxítona: <i>a-MI-co, par-LA-re</i>. O acento gráfico só aparece na última sílaba: <i>città, perché, caffè, così</i>. E <b>è</b> (é, verbo) ≠ <b>e</b> (e, conjunção).</p>
<h3>Saudações</h3>
<div class="tw"><table class="tbl">
<tr><th>informal (tu)</th><th>formal (Lei)</th></tr>
<tr><td><i>Ciao!</i> (oi / tchau)</td><td><i>Buongiorno</i> (até o começo da tarde) · <i>Buonasera</i></td></tr>
<tr><td><i>Come stai?</i></td><td><i>Come sta?</i></td></tr>
<tr><td><i>Come ti chiami?</i></td><td><i>Come si chiama?</i></td></tr>
<tr><td><i>A presto! Ci vediamo!</i></td><td><i>Arrivederci! ArrivederLa!</i></td></tr>
</table></div>
<p><i>Buonanotte</i> só para ir dormir. Para se apresentar: <i>Mi chiamo Ana. Sono brasiliana, di Recife. Piacere!</i> Resposta: <i>Piacere mio!</i></p>
<div class="plus"><span class="pen">Vantaggio</span> O <b>Lei</b> formal usa o verbo na 3ª pessoa, exatamente como o nosso "você" ou "o senhor": <i>Lei come sta?</i> = Como o senhor está?</div>
<div class="trap"><span class="pen">Parole utili</span> <i>grazie</i> (obrigada) · <i>prego</i> (de nada / por favor, entre) · <i>per favore</i> (por favor) · <i>scusa / scusi</i> (desculpa / com licença) · <i>sì / no</i> · <i>va bene</i> (tudo bem).</div>
`,
reading:{
title:'Al corso d\'italiano',
text:`<p><b>Insegnante:</b> Buongiorno a tutti! Io sono Paola, la vostra [[insegnante|professora]]. E tu, come ti chiami?</p>
<p><b>Studentessa:</b> Mi chiamo Ana. Sono brasiliana, di Belo Horizonte.</p>
<p><b>Insegnante:</b> Piacere, Ana! E dove [[abiti|mora (abitare)]]?</p>
<p><b>Ana:</b> Abito a Lisbona, ma lavoro per un'[[azienda|empresa]] italiana.</p>
<p><b>Insegnante:</b> Che lavoro fai?</p>
<p><b>Ana:</b> Sono programmatrice.</p>
<p><b>Insegnante:</b> Bene! E tu?</p>
<p><b>Studente:</b> Ciao, io sono Tomás. Sono argentino, di Rosario. Ho ventisei anni e sono studente.</p>
<p><b>Insegnante:</b> Perché studiate l'italiano?</p>
<p><b>Ana:</b> Perché mi piace la musica della lingua!</p>
<p><b>Tomás:</b> Io lo studio per il lavoro e perché mia [[nonna|avó]] è di Genova.</p>
<p><b>Insegnante:</b> Benissimo. [[Allora|Então]], cominciamo!</p>`,
q:[
["Come si chiama l'insegnante?",["Ana","Paola","Genova","Tomás"],1],
["Di dov'è Ana?",["Di Rosario","Di Belo Horizonte","Di Genova","Di Lisbona"],1],
["Che lavoro fa Ana?",["È studentessa","È insegnante","È programmatrice","È musicista"],2],
["Quanti anni ha Tomás?",["Ventisei","Venti","Trentasei","Sedici"],0],
["Perché Ana studia l'italiano?",["Per il lavoro","Per la nonna","Perché le piace la musica della lingua","Per un viaggio"],2]
]},
ex:[
{t:'mc', title:'Come si legge? · Como se lê?', items:[
["In «ciao», «ci» si legge come…",["k","tch","s"],1],
["In «chiave», «chi» si legge come…",["tch","k","ch (de chá)"],1],
["In «famiglia», «gli» si legge come…",["g + li","lh (de filho)","li"],1],
["In «bagno», «gn» si legge come…",["g + n","nh (de banho)","n"],1],
["In «pesce», «sce» si legge come…",["ske","che (de chá)","se"],1],
["In «giorno», «gi» si legge come…",["dj (como «dia» no Rio)","g (de gato)","j (de já)"],0],
["«Latte» si legge…",["«látchi»","«lát-te»","«láte»"],1,"No final, -e é um «e» claro, nunca «i»; e «te» nunca vira «tchi»."],
["«Nonno» e «nono» sono…",["la stessa parola","parole diverse: avô / nono","sinonimi"],1,"As consoantes duplas mudam o significado."]
]},
{t:'fill', title:'Completa i saluti · Complete as saudações', items:[
["___ ! Come stai? (informale)",["ciao"]],
["Buongiorno, signora. Come ___ ? (stare, formale)",["sta"]],
["Ciao, Marco! Come ___ ? (stare, informale)",["stai"]],
["Mi ___ Ana. E tu? (chiamarsi)",["chiamo"]],
["Scusi, Lei come si ___ ? (chiamarsi)",["chiama"]],
["___ brasiliana, di Recife. (essere, io)",["sono"]],
["Di dove ___ ? (essere, tu)",["sei"]],
["Quanti anni ___ ? — Ho trent'anni. (avere, tu)",["hai"]],
["Piacere! — Piacere ___ !",["mio"]],
["Grazie! — ___ !",["prego"]],
["Sono le nove di sera: ___ ! (saluto)",["buonasera"]]
]},
{t:'order', title:'Ricostruisci la frase · Monte a frase', items:[
["Mi chiamo Ana e sono brasiliana.",["Sono brasiliana e mi chiamo Ana."]],
["Buongiorno, come sta?",[]],
["Di dove sei?",[]],
["Ho ventisei anni.",[]],
["Abito a Lisbona con mia sorella.",[]]
]}
],
write:{
task:'Presentati in 5–8 frasi: come ti chiami, di dove sei, dove abiti, che lavoro fai, perché studi l\'italiano. (Apresente-se em 5 a 8 frases.)',
words:[40,80],
targets:[
{l:'«mi chiamo» e «sono»', re:'<(mi chiamo|sono)>', n:2},
{l:'onde você mora ou de onde é (abito, sono di…)', re:'<(abito|sono di|vivo)>', n:1},
{l:'1 frase com «perché»', re:'<perché>', n:1}
],
model:`Ciao! Mi chiamo Ana e sono brasiliana, di Belo Horizonte. Ho trentaquattro anni. Abito a Lisbona con mia sorella. Sono programmatrice e lavoro per un'azienda italiana. Parlo portoghese e spagnolo. Studio l'italiano perché mi piace la musica della lingua e perché voglio leggere libri italiani. Piacere di conoscerti!`
}
},

/* ───────── P2 ───────── */
{
id:102, n:'P2', lvl:'A1', band:0,
title:'Essere e avere',
sub:'Chi sei? Com\'è? · Quem você é? Como é?',
focus:'presente di essere e avere, pronomi soggetto, nazionalità e professioni, accordo dell\'aggettivo (-o/-a/-e), espressioni con avere (avere fame, sete, freddo, caldo, sonno, fretta, paura, ragione)',
lesson:`
<p class="lead">Os dois verbos mais importantes. Em italiano, <b>essere</b> faz o papel de "ser" e quase sempre de "estar", e <b>avere</b> é "ter".</p>
<div class="tw"><table class="tbl">
<tr><th></th><th>essere</th><th>avere</th></tr>
<tr><th>io</th><td>sono</td><td>ho</td></tr>
<tr><th>tu</th><td>sei</td><td>hai</td></tr>
<tr><th>lui / lei / Lei</th><td>è</td><td>ha</td></tr>
<tr><th>noi</th><td>siamo</td><td>abbiamo</td></tr>
<tr><th>voi</th><td>siete</td><td>avete</td></tr>
<tr><th>loro</th><td>sono</td><td>hanno</td></tr>
</table></div>
<p>O <b>h</b> é mudo e só serve para distinguir: <i>ho</i> (tenho) / <i>o</i> (ou) · <i>ha</i> (tem) / <i>a</i> (a, preposição) · <i>hanno</i> (têm) / <i>anno</i> (ano). Como no espanhol, o pronome sujeito costuma ficar de fora: <i>Sono stanca</i> = Estou cansada.</p>
<h3>Adjetivos: concordância</h3>
<div class="tw"><table class="tbl">
<tr><th></th><th>masc. sing.</th><th>fem. sing.</th><th>masc. pl.</th><th>fem. pl.</th></tr>
<tr><td>em -o</td><td>alto</td><td>alta</td><td>alti</td><td>alte</td></tr>
<tr><td>em -e</td><td>gentile</td><td>gentile</td><td>gentili</td><td>gentili</td></tr>
</table></div>
<p><b>Nacionalidades:</b> brasiliano/a, italiano/a, spagnolo/a, argentino/a, americano/a, tedesco/a (alemão) · e em -e: portoghese, francese, inglese, cinese, giapponese.</p>
<p><b>Profissões:</b> <i>Che lavoro fai?</i> → <i>Sono insegnante / medico / ingegnere / studentessa / programmatrice</i> (sem artigo), ou <i>Faccio la programmatrice</i> (com artigo).</p>
<h3>Expressões com avere</h3>
<div class="chips">ho fame (estou com fome) · ho sete (sede) · ho freddo (frio) · ho caldo (calor) · ho sonno (sono) · ho fretta (pressa) · ho paura (medo) · ho ragione (tenho razão) · ho bisogno di… (preciso de…)</div>
<div class="trap"><span class="pen">Attenzione!</span> A idade é com <b>avere</b>: <i>Ho trent'anni</i> (nunca "sono trent'anni"). E "estar com fome" é <i>avere fame</i>: nada de "sono con fame".</div>
<div class="plus"><span class="pen">Per chi parla spagnolo</span> Aqui o espanhol ajuda: <i>tengo hambre → ho fame</i>, <i>tengo frío → ho freddo</i>. O "estar" (<i>stare</i>) aparece em poucas expressões: <i>Come stai? Sto bene. Sto a casa.</i></div>
`,
reading:{
title:'La mia famiglia',
text:`<p>Mi chiamo Giulia e sono di Bari, nel Sud Italia. Ho trentadue anni e sono [[infermiera|enfermeira]]. Ho una famiglia grande.</p>
<p>Mio padre si chiama Nicola: è alto, simpatico e un po' [[testardo|teimoso]]. Ha sessantacinque anni ed è [[in pensione|aposentado]]. Mia madre, Teresa, è piccola e molto energica: ha sempre fretta!</p>
<p>Ho due fratelli. Marco ha ventotto anni, è ingegnere e abita a Torino. Luca è il più giovane: ha diciannove anni ed è studente all'università.</p>
<p>Abbiamo anche un [[cane|cachorro]], Pepe: è nero, piccolo e ha sempre fame. La domenica siamo tutti insieme a pranzo [[dalla nonna|na casa da avó]]. Che bello!</p>`,
q:[
["Che lavoro fa Giulia?",["È medico","È infermiera","È studentessa","È ingegnere"],1],
["Com'è il padre?",["Piccolo ed energico","Alto, simpatico e un po' testardo","Giovane e timido","Basso e serio"],1],
["Dove abita Marco?",["A Bari","A Torino","Dalla nonna","All'università"],1],
["Quanti anni ha Luca?",["Ventotto","Diciannove","Trentadue","Sessantacinque"],1],
["Chi è Pepe?",["Il nonno","Il cane","Un fratello","Il padre"],1]
]},
ex:[
{t:'fill', title:'Essere o avere?', items:[
["Io ___ brasiliana. (essere)",["sono"]],
["Tu ___ fame? (avere)",["hai"]],
["Marco ___ molto simpatico. (essere)",["è"]],
["Noi ___ una casa piccola. (avere)",["abbiamo"]],
["Voi ___ italiani? (essere)",["siete"]],
["Loro ___ due figli. (avere)",["hanno"]],
["Lei ___ trent'anni. (avere)",["ha"]],
["Noi ___ stanchi. (essere)",["siamo"]],
["Hai freddo? — No, ho ___ ! (= calor)",["caldo"]],
["Voi ___ ragione. (avere)",["avete"]],
["Maria è ___ . (simpatico)",["simpatica"]],
["Sophie e Claire sono ___ . (francese)",["francesi"]]
]},
{t:'mc', title:'Scegli · Escolha', items:[
["Quanti anni hai? — ___ venticinque anni.",["Sono","Ho","Ha"],1],
["Hans è di Berlino: è ___ .",["tedesco","tedesca","tedeschi"],0],
["Sophie e Claire sono ___ .",["francese","francesi","francesa"],1],
["«Estou com fome» si dice…",["Sono con fame.","Ho fame.","Sto fame."],1],
["Paolo ___ in ritardo: ha sempre fretta.",["è","ha","e"],0],
["«E» senza accento significa…",["é (verbo)","e (conjunção)","ele"],1]
]},
{t:'fix', title:'Correggi · Corrija a parte sublinhada', items:[
["{Sono} trent'anni.",["ho"],"Ho trent'anni."],
["Maria è {simpatico}.",["simpatica"],"Maria è simpatica."],
["Noi {abbiamo} brasiliani.",["siamo"],"Noi siamo brasiliani."],
["Loro {ha} fame.",["hanno"],"Loro hanno fame."],
["Luca {e} medico.",["è"],"Luca è medico."]
]},
{t:'order', title:'Ricostruisci la frase · Monte a frase', items:[
["Mia sorella è alta e simpatica.",[]],
["Abbiamo un cane piccolo e nero.",["Abbiamo un cane nero e piccolo."]],
["Hai fame o sete?",["Hai sete o fame?"]],
["I miei amici sono spagnoli.",[]],
["Oggi ho molto sonno.",["Ho molto sonno oggi."]]
]}
],
write:{
task:'Descrivi la tua famiglia o i tuoi amici: nome, età, lavoro, carattere, aspetto. (Descreva sua família ou seus amigos.)',
words:[50,90],
targets:[
{l:'4 formas de essere', re:'<(sono|sei|è|siamo|siete)>', n:4},
{l:'3 formas de avere', re:'<(ho|hai|ha|abbiamo|avete|hanno)>', n:3},
{l:'4 adjetivos concordados (alta, simpatici…)', manual:true}
],
model:`La mia famiglia è piccola. Mia madre si chiama Rosa, ha sessant'anni ed è insegnante. È bassa, allegra e molto paziente. Mio padre si chiama Paulo: è alto e un po' timido, ma è molto spiritoso. Ho una sorella, Bia. Lei ha trent'anni, è medico e abita a Rio. Bia ha due figli, Leo e Nina: sono piccoli, simpatici e hanno sempre fame! Abbiamo anche una gatta bianca, Luna.`
}
},

/* ───────── P3 ───────── */
{
id:103, n:'P3', lvl:'A1', band:0,
title:'Nomi, articoli e plurali',
sub:'Il, la, un, una e i plurali · Artigos, gênero e plural',
focus:'genere dei nomi (-o, -a, -e), plurale regolare e irregolare, articolo determinativo e indeterminativo di base (il, lo, l\', la, i, gli, le, un, uno, una), parole invariabili (il caffè, la città, il bar)',
lesson:`
<p class="lead">Quase todo substantivo italiano termina em vogal, e essa vogal diz o gênero e o número. O plural não leva <b>-s</b>: a vogal final muda.</p>
<div class="tw"><table class="tbl">
<tr><th>singular</th><th>plural</th><th>exemplo</th></tr>
<tr><td>-o (masc.)</td><td>-i</td><td><i>il libro → i libri</i></td></tr>
<tr><td>-a (fem.)</td><td>-e</td><td><i>la casa → le case</i></td></tr>
<tr><td>-e (masc. ou fem.)</td><td>-i</td><td><i>il fiore → i fiori · la chiave → le chiavi</i></td></tr>
<tr><td>acento final ou consoante</td><td>não muda</td><td><i>la città → le città · il caffè → i caffè · il bar → i bar</i></td></tr>
</table></div>
<p><b>Ortografia:</b> -ca/-ga → -che/-ghe (<i>l'amica → le amiche</i>); -co/-go → -chi/-ghi (<i>il gioco → i giochi</i>), com exceções como <i>l'amico → gli amici</i>.</p>
<p><b>Irregulares frequentes:</b> <i>l'uomo → gli uomini · la mano → le mani · l'uovo → le uova</i>.</p>
<h3>Artigos (versão simples)</h3>
<div class="tw"><table class="tbl">
<tr><th></th><th>definido sing.</th><th>definido pl.</th><th>indefinido</th></tr>
<tr><td>masc. (maioria)</td><td>il libro</td><td>i libri</td><td>un libro</td></tr>
<tr><td>masc. + s+consoante, z</td><td>lo studente, lo zaino</td><td>gli studenti</td><td>uno studente</td></tr>
<tr><td>masc. + vogal</td><td>l'amico</td><td>gli amici</td><td>un amico</td></tr>
<tr><td>fem.</td><td>la casa · l'amica</td><td>le case · le amiche</td><td>una casa · un'amica</td></tr>
</table></div>
<p>Na unidade 1 você vai ver os artigos em detalhe, com as preposições.</p>
<div class="trap"><span class="pen">Gênero diferente!</span> <i>il fiore</i> (a flor) · <i>il ponte</i> (a ponte) · <i>il colore</i> (a cor) · <i>il dolore</i> (a dor) · <i>il latte</i> · <i>il sale</i> (ES <i>la sal</i>) · <i>il miele</i> (ES <i>la miel</i>) · <i>la fine</i> (o fim). Como no português, <i>il problema, il programma, il cinema</i> são masculinos.</div>
`,
reading:{
title:'Il mio appartamento',
text:`<p>Abito in un appartamento piccolo ma [[luminoso|claro, com muita luz]], al terzo piano. C'è un [[soggiorno|sala de estar]] con un [[divano|sofá]] verde, due poltrone e tanti libri.</p>
<p>La cucina è piccola: ci sono un [[frigorifero|geladeira]], un forno e una macchina per il caffè, naturalmente! In camera da letto ho un letto grande, un [[armadio|armário]] e una [[scrivania|escrivaninha]] con il computer. Il bagno ha una doccia e uno [[specchio|espelho]] enorme.</p>
<p>Dalla finestra vedo i [[tetti|telhados]] della città, gli alberi del parco e, la sera, le luci dei bar. Non è una casa grande, ma per me è perfetta.</p>`,
q:[
["A che piano è l'appartamento?",["Al primo","Al terzo","Al quinto","Al piano terra"],1],
["Di che colore è il divano?",["Rosso","Verde","Blu","Nero"],1],
["Che cosa c'è in cucina?",["Un divano","Un frigorifero, un forno e una macchina per il caffè","Un letto","Una doccia"],1],
["Dov'è il computer?",["In cucina","Sulla scrivania, in camera da letto","In bagno","Nel soggiorno"],1],
["Che cosa vede dalla finestra?",["Il mare","I tetti, gli alberi e le luci dei bar","Le montagne","La stazione"],1]
]},
ex:[
{t:'fill', title:'Volgi al plurale · Passe para o plural', items:[
["il libro → ___",["i libri"]],
["la casa → ___",["le case"]],
["il fiore → ___",["i fiori"]],
["la chiave → ___",["le chiavi"]],
["la città → ___",["le città"]],
["il caffè → ___",["i caffè"]],
["lo studente → ___",["gli studenti"]],
["l'amica → ___",["le amiche"]],
["l'amico → ___",["gli amici"]],
["l'uomo → ___",["gli uomini"]],
["la mano → ___",["le mani"]],
["il bar → ___",["i bar"]]
]},
{t:'mc', title:'Il, lo, la o l\'? · Escolha o artigo', items:[
["___ fiore è rosso.",["Il","La","Lo"],0,"Fiore é masculino (em português, «a flor»)."],
["___ zaino è pesante.",["Il","Lo","L'"],1,"Diante de z: lo."],
["___ acqua è fredda.",["La","L'","Lo"],1],
["Ho ___ problema.",["una","un","uno"],1,"Problema é masculino, como em português."],
["___ studentesse sono brave.",["Le","Gli","I"],0],
["Vorrei ___ espresso.",["un","uno","un'"],0,"Masculino diante de vogal: un, sem apóstrofo."],
["___ sale, per favore.",["La","Il","Lo"],1,"Il sale (em espanhol, «la sal»)."]
]},
{t:'order', title:'Ricostruisci la frase · Monte a frase', items:[
["Le chiavi sono sul tavolo.",[]],
["Ho un gatto e due cani.",["Ho due cani e un gatto."]],
["Gli studenti sono in classe.",[]],
["La mia città è piccola ma bella.",[]],
["Vorrei due caffè, per favore.",["Per favore, vorrei due caffè."]]
]}
],
write:{
task:'Descrivi la tua casa o la tua stanza preferita: che cosa c\'è, di che colore sono le cose. (Descreva sua casa ou seu cômodo preferido.)',
words:[50,90],
targets:[
{l:'6 artigos (il, la, i, le, un, una…)', re:'<(il|lo|la|i|gli|le|un|uno|una)>|<(l|un)\'', n:6},
{l:'3 plurais', manual:true},
{l:'2 cores concordadas (rosse, bianca…)', manual:true}
],
model:`La mia casa è in una strada tranquilla. Il soggiorno è grande e luminoso: ci sono un divano grigio, due poltrone rosse e una libreria con tanti libri. La cucina è bianca e ha una finestra sul giardino. In camera da letto ci sono un letto, un armadio e due comodini. Le pareti sono azzurre. Il bagno è piccolo, ma ha una vasca. La mia stanza preferita è lo studio: ho una scrivania, il computer e tante piante.`
}
},

/* ───────── P4 ───────── */
{
id:104, n:'P4', lvl:'A1', band:0,
title:'Il presente dei verbi regolari',
sub:'Parlo, prendo, dormo, capisco · O presente dos verbos regulares',
focus:'presente indicativo regolare (-are, -ere, -ire, -isc-), frase negativa (non, non… mai), domande (che cosa, dove, quando, come, perché, chi, quanto), verbi in -care/-gare (cerchi, paghi)',
lesson:`
<div class="tw"><table class="tbl">
<tr><th></th><th>parlare</th><th>prendere</th><th>dormire</th><th>capire (-isc-)</th></tr>
<tr><th>io</th><td>parlo</td><td>prendo</td><td>dormo</td><td>capisco</td></tr>
<tr><th>tu</th><td>parli</td><td>prendi</td><td>dormi</td><td>capisci</td></tr>
<tr><th>lui / lei</th><td>parla</td><td>prende</td><td>dorme</td><td>capisce</td></tr>
<tr><th>noi</th><td>parliamo</td><td>prendiamo</td><td>dormiamo</td><td>capiamo</td></tr>
<tr><th>voi</th><td>parlate</td><td>prendete</td><td>dormite</td><td>capite</td></tr>
<tr><th>loro</th><td>parlano</td><td>prendono</td><td>dormono</td><td>capiscono</td></tr>
</table></div>
<ul class="dots">
<li><b>tu</b> termina sempre em <b>-i</b>; <b>noi</b> sempre em <b>-iamo</b>.</li>
<li><b>loro</b> tem o acento na antepenúltima: <i>PAR-la-no, PREN-do-no</i> (nunca "parlÁno").</li>
<li>Verbos em <b>-isc-</b>: <i>capire, finire, preferire, pulire, spedire</i> (só em io, tu, lui, loro).</li>
<li><b>-care / -gare</b> mantêm o som duro: <i>cercare → cerchi, cerchiamo · pagare → paghi</i>.</li>
<li><b>-iare</b> não duplica o i: <i>mangiare → mangi · studiare → studi</i>.</li>
</ul>
<h3>Negação e perguntas</h3>
<p><b>non</b> antes do verbo: <i>Non parlo tedesco.</i> Negação dupla, como no português: <i>Non mangio mai carne. Non vedo niente.</i> Para perguntar, basta a entonação: <i>Parli italiano?</i></p>
<div class="tw"><table class="tbl">
<tr><td><b>che cosa / cosa</b> o quê</td><td><b>chi</b> quem</td><td><b>dove</b> onde</td><td><b>quando</b> quando</td></tr>
<tr><td><b>come</b> como</td><td><b>perché</b> por quê / porque</td><td><b>quanto</b> quanto</td><td><b>quale</b> qual</td></tr>
</table></div>
<div class="trap"><span class="pen">Attenzione!</span> <b>come</b> = como (pergunta); "comer" é <b>mangiare</b>. <b>dove</b> = onde (ES <i>donde</i>). <b>perché</b> serve para a pergunta e a resposta.</div>
`,
reading:{
title:'Una giornata normale',
text:`<p>Sofia abita a Milano e lavora in una banca. Ogni mattina prende la [[metropolitana|metrô]] alle otto e arriva in ufficio alle otto e mezza. Lavora fino alle cinque. A pranzo mangia un panino con i [[colleghi|colegas]] in un bar vicino.</p>
<p>Il pomeriggio risponde alle email e parla con i clienti. Dopo il lavoro, due volte alla settimana, [[frequenta|faz, frequenta]] un corso di yoga. La sera cucina, guarda una serie in TV o legge un libro. Non esce molto durante la settimana, perché è stanca.</p>
<p>Il sabato, [[invece|por outro lado]], vede gli amici e balla fino a tardi! La domenica dorme fino alle dieci e [[pulisce|limpa]] la casa. Sofia preferisce la domenica: è il suo giorno preferito.</p>`,
q:[
["Dove lavora Sofia?",["In un bar","In una banca","In una scuola","In un negozio"],1],
["Come va al lavoro?",["In macchina","In metropolitana","A piedi","In bicicletta"],1],
["Che cosa fa due volte alla settimana?",["Balla","Un corso di yoga","Cucina per gli amici","Va al cinema"],1],
["Perché non esce molto durante la settimana?",["Perché è stanca","Perché non ha amici","Perché studia","Perché piove"],0],
["Qual è il suo giorno preferito?",["Il sabato","La domenica","Il lunedì","Il venerdì"],1]
]},
ex:[
{t:'fill', title:'Coniuga al presente · Conjugue', items:[
["Io ___ italiano ogni giorno. (studiare)",["studio"]],
["Tu ___ portoghese e spagnolo. (parlare)",["parli"]],
["Marco ___ il treno alle otto. (prendere)",["prende"]],
["Noi ___ in un ristorante cinese. (mangiare)",["mangiamo"]],
["Voi ___ fino a tardi la domenica? (dormire)",["dormite"]],
["Loro ___ in una banca. (lavorare)",["lavorano"]],
["Io non ___ questa parola. (capire)",["capisco"]],
["A che ora ___ il film? (finire)",["finisce"]],
["Tu ___ le chiavi? (cercare)",["cerchi"]],
["Chi ___ il conto? (pagare)",["paga"]],
["Noi ___ il tè. (preferire)",["preferiamo"]],
["Loro ___ un libro al mese. (leggere)",["leggono"]]
]},
{t:'mc', title:'Che parola interrogativa? · Qual palavra?', items:[
["___ abiti? — A Napoli.",["Dove","Quando","Chi"],0],
["___ ti chiami? — Marta.",["Come","Che","Quale"],0],
["___ studi l'italiano? — Perché mi piace.",["Quando","Perché","Dove"],1],
["___ costa? — Due euro.",["Quanto","Come","Chi"],0],
["___ è quel ragazzo? — È mio fratello.",["Che","Chi","Cosa"],1],
["___ fai stasera? — Niente.",["Che cosa","Chi","Dove"],0],
["Non mangio ___ carne. (= nunca)",["mai","niente","nessuno"],0]
]},
{t:'fix', title:'Correggi · Corrija', items:[
["Io {parlo non} tedesco.",["non parlo"],"Io non parlo tedesco."],
["Tu {parlas} molto bene!",["parli"],"Tu parli molto bene!"],
["Noi {mangiamos} alle otto.",["mangiamo"],"Noi mangiamo alle otto."],
["Loro {capono} tutto.",["capiscono"],"Loro capiscono tutto."],
["Tu {cerci} lavoro?",["cerchi"],"Tu cerchi lavoro?"]
]},
{t:'order', title:'Ricostruisci la frase · Monte a frase', items:[
["Non capisco questa parola.",[]],
["Dove abiti adesso?",["Adesso dove abiti?"]],
["La sera leggo un libro.",["Leggo un libro la sera."]],
["Noi non guardiamo mai la TV.",[]],
["Perché studi l'italiano?",[]]
]}
],
write:{
task:'Descrivi la tua settimana: che cosa fai di solito (lavoro, studio, tempo libero)? Usa almeno 8 verbi diversi. (Descreva sua semana com pelo menos 8 verbos.)',
words:[60,100],
targets:[
{l:'8 verbos diferentes no presente', manual:true},
{l:'1 frase negativa com «non»', re:'<non>', n:1},
{l:'1 verbo em -isc- (capisco, preferisco, finisco…)', re:'<W+isc(o|i|e|ono)>', n:1}
],
model:`Dal lunedì al venerdì lavoro da casa. La mattina comincio alle nove e finisco alle sei. A pranzo mangio un'insalata e leggo le notizie. Il martedì e il giovedì studio italiano con un'insegnante online: parliamo, scriviamo e qualche volta non capisco niente! La sera cucino e guardo un film. Non esco molto durante la settimana. Il sabato, invece, vedo le amiche e camminiamo in centro. Preferisco la domenica: dormo fino a tardi e non apro il computer.`
}
},

/* ───────── P5 ───────── */
{
id:105, n:'P5', lvl:'A1', band:0,
title:'Verbi irregolari e modali',
sub:'Vado, faccio, vengo, voglio, posso, devo · Os irregulares mais usados',
focus:'presente dei verbi irregolari frequenti (andare, venire, fare, stare, uscire, dire) e dei modali volere, potere, dovere, sapere + infinito; andare a / in; espressioni con fare (fare colazione, fare la spesa, fa caldo)',
lesson:`
<div class="tw"><table class="tbl">
<tr><th></th><th>andare</th><th>venire</th><th>fare</th><th>stare</th><th>uscire</th><th>dire</th></tr>
<tr><th>io</th><td>vado</td><td>vengo</td><td>faccio</td><td>sto</td><td>esco</td><td>dico</td></tr>
<tr><th>tu</th><td>vai</td><td>vieni</td><td>fai</td><td>stai</td><td>esci</td><td>dici</td></tr>
<tr><th>lui / lei</th><td>va</td><td>viene</td><td>fa</td><td>sta</td><td>esce</td><td>dice</td></tr>
<tr><th>noi</th><td>andiamo</td><td>veniamo</td><td>facciamo</td><td>stiamo</td><td>usciamo</td><td>diciamo</td></tr>
<tr><th>voi</th><td>andate</td><td>venite</td><td>fate</td><td>state</td><td>uscite</td><td>dite</td></tr>
<tr><th>loro</th><td>vanno</td><td>vengono</td><td>fanno</td><td>stanno</td><td>escono</td><td>dicono</td></tr>
</table></div>
<h3>Modais + infinitivo (sem preposição!)</h3>
<div class="tw"><table class="tbl">
<tr><th></th><th>volere</th><th>potere</th><th>dovere</th><th>sapere</th></tr>
<tr><th>io</th><td>voglio</td><td>posso</td><td>devo</td><td>so</td></tr>
<tr><th>tu</th><td>vuoi</td><td>puoi</td><td>devi</td><td>sai</td></tr>
<tr><th>lui / lei</th><td>vuole</td><td>può</td><td>deve</td><td>sa</td></tr>
<tr><th>noi</th><td>vogliamo</td><td>possiamo</td><td>dobbiamo</td><td>sappiamo</td></tr>
<tr><th>voi</th><td>volete</td><td>potete</td><td>dovete</td><td>sapete</td></tr>
<tr><th>loro</th><td>vogliono</td><td>possono</td><td>devono</td><td>sanno</td></tr>
</table></div>
<p><i>Voglio imparare. Posso entrare? Devo lavorare. So nuotare</i> (sei nadar). Para pedir com educação: <b>vorrei</b> (gostaria).</p>
<h3>Andare a / in</h3>
<p><b>a</b> + cidade ou infinitivo: <i>vado a Roma, vado a mangiare</i> · <b>in</b> + país, região, lugares e transporte: <i>vado in Italia, in banca, in centro, in treno, in macchina</i> · <i>a piedi</i> (a pé) · <i>a casa</i>.</p>
<h3>Expressões com fare</h3>
<div class="chips">fare colazione (tomar café da manhã) · fare la spesa (fazer compras de mercado) · fare la doccia · fare una passeggiata · fare sport · fare una foto · fa caldo / fa freddo (está calor / frio)</div>
<div class="trap"><span class="pen">Attenzione!</span> <b>sapere</b> = saber (um fato, fazer algo): <i>So che è vero. So cucinare.</i> · <b>conoscere</b> = conhecer (pessoa, lugar): <i>Conosco Roma. Conosco Marco.</i></div>
`,
reading:{
title:'Messaggi tra amiche',
text:`<p><b>Bea:</b> Ciao Giulia! Come stai? Stasera io e Paolo andiamo al cinema a vedere un film italiano. Vuoi venire con noi? Il film comincia alle nove, ma prima facciamo un [[aperitivo|aperitivo, happy hour]] in piazza.</p>
<p><b>Giulia:</b> Ciao Bea! Sto bene, grazie. Vengo [[volentieri|com prazer]], ma non posso venire all'aperitivo: devo lavorare fino alle otto. Vi [[raggiungo|encontro vocês lá]] direttamente al cinema, va bene? Sai se viene anche Marta?</p>
<p><b>Bea:</b> Marta non può, deve studiare per un esame. Però viene Luca! Dobbiamo comprare i biglietti online: [[li compro|eu os compro]] io per tutti.</p>
<p><b>Giulia:</b> Perfetto, grazie! Quanto costa?</p>
<p><b>Bea:</b> Nove euro. Ci vediamo alle nove meno dieci davanti al cinema. Non fare tardi!</p>
<p><b>Giulia:</b> [[Tranquilla|Fica tranquila]], non faccio tardi!</p>`,
q:[
["Dove vanno stasera Bea e Paolo?",["A teatro","Al cinema","A un concerto","A cena da Giulia"],1],
["Perché Giulia non va all'aperitivo?",["Non le piace","Deve lavorare fino alle otto","Deve studiare","È stanca"],1],
["Chi non può venire?",["Luca","Marta","Paolo","Giulia"],1],
["Chi compra i biglietti?",["Giulia","Bea","Luca","Marta"],1],
["A che ora si vedono davanti al cinema?",["Alle nove","Alle nove meno dieci","Alle otto","Alle dieci"],1]
]},
ex:[
{t:'fill', title:'Coniuga · Conjugue', items:[
["Stasera ___ al cinema. (andare, io)",["vado"]],
["Tu ___ con noi? (venire)",["vieni"]],
["Che cosa ___ domenica? (fare, voi)",["fate"]],
["Come ___ tua madre? (stare)",["sta"]],
["Loro ___ sempre alle sette. (uscire)",["escono"]],
["Noi ___ sempre la verità. (dire)",["diciamo"]],
["Io ___ imparare l'italiano. (volere)",["voglio"]],
["___ aprire la finestra? (potere, io)",["posso"]],
["Domani noi ___ lavorare. (dovere)",["dobbiamo"]],
["Tu ___ nuotare? (sapere)",["sai"]],
["Loro ___ in Spagna in macchina. (andare)",["vanno"]],
["Ogni mattina ___ colazione al bar. (fare, io)",["faccio"]]
]},
{t:'mc', title:'Scegli · Escolha', items:[
["Voglio ___ l'italiano.",["imparare","a imparare","di imparare"],0,"Modais + infinitivo, sem preposição."],
["Vado ___ Roma la settimana prossima.",["in","a","da"],1],
["Andiamo ___ Italia in estate.",["a","in","per"],1],
["Vado al lavoro ___ piedi.",["a","in","con"],0],
["«Conheço Roma» si dice…",["So Roma.","Conosco Roma."],1],
["Oggi ___ freddo: metti il cappotto!",["è","fa","ha"],1],
["Scusi, ___ entrare?",["posso","può","puoi"],0]
]},
{t:'fix', title:'Correggi · Corrija', items:[
["Io {ando} a casa.",["vado"],"Io vado a casa."],
["Noi {possiamos} venire.",["possiamo"],"Noi possiamo venire."],
["Lui {vole} un caffè.",["vuole"],"Lui vuole un caffè."],
["Devo {di studiare} stasera.",["studiare"],"Devo studiare stasera."],
["Loro {fano} la spesa il sabato.",["fanno"],"Loro fanno la spesa il sabato."]
]},
{t:'order', title:'Ricostruisci la frase · Monte a frase', items:[
["Stasera non posso uscire.",["Non posso uscire stasera."]],
["Vuoi venire al cinema con noi?",["Vuoi venire con noi al cinema?"]],
["Devo fare la spesa domani.",["Domani devo fare la spesa."]],
["Andiamo in Italia in treno.",[]],
["Come stai oggi?",["Oggi come stai?"]]
]}
],
write:{
task:'Scrivi un messaggio a un\'amica per invitarla a fare qualcosa nel fine settimana: dove andate, che cosa fate, a che ora. Poi scrivi la sua risposta: può venire o no? Perché? (Escreva um convite e a resposta.)',
words:[60,100],
targets:[
{l:'4 verbos irregulares (vado, faccio, vieni…)', re:'<(vado|vai|va|andiamo|andate|vanno|vengo|vieni|viene|veniamo|venite|vengono|faccio|fai|fa|facciamo|fate|fanno|sto|stai|sta|stiamo|state|stanno|esco|esci|esce|usciamo|uscite|escono|dico|dici|dice|diciamo|dite|dicono)>', n:4},
{l:'3 modais + infinitivo (voglio andare…)', re:'<(voglio|vuoi|vuole|vogliamo|volete|vogliono|vorrei|posso|puoi|può|possiamo|potete|possono|devo|devi|deve|dobbiamo|dovete|devono)\\s+W+(are|ere|ire)>', n:3}
],
model:`Ciao Carla! Sabato vado al mare con mio fratello. Vuoi venire con noi? Partiamo alle nove in macchina e torniamo la sera. Facciamo un picnic in spiaggia e, se fa caldo, facciamo il bagno. Puoi portare la tua macchina fotografica?\n— Ciao! Che bella idea, ma purtroppo non posso venire: sabato devo lavorare fino alle due. Però sono libera domenica. Vuoi fare qualcosa insieme domenica? Andiamo al museo o facciamo una passeggiata in centro?`
}
},

/* ───────── P6 ───────── */
{
id:106, n:'P6', lvl:'A1', band:0,
title:'Numeri, ore e routine',
sub:'Che ore sono? Mi sveglio, mi alzo · Números, horas e rotina',
focus:'numeri da 0 a 1000, l\'ora (sono le tre, è l\'una, alle otto e mezza), giorni della settimana, mesi, stagioni, la data, verbi riflessivi al presente (svegliarsi, alzarsi, lavarsi, vestirsi, chiamarsi, divertirsi), avverbi di frequenza (sempre, spesso, qualche volta, mai)',
lesson:`
<h3>Números</h3>
<div class="chips">0 zero · 1 uno · 2 due · 3 tre · 4 quattro · 5 cinque · 6 sei · 7 sette · 8 otto · 9 nove · 10 dieci · 11 undici · 12 dodici · 13 tredici · 14 quattordici · 15 quindici · 16 sedici · 17 diciassette · 18 diciotto · 19 diciannove · 20 venti · 21 ventuno · 22 ventidue · 23 ventitré · 28 ventotto · 30 trenta · 40 quaranta · 50 cinquanta · 60 sessanta · 70 settanta · 80 ottanta · 90 novanta · 100 cento · 200 duecento · 1000 mille · 2000 duemila</div>
<p>As dezenas perdem a vogal antes de <i>uno</i> e <i>otto</i>: <i>ventuno, ventotto, trentuno</i>. Tudo junto numa palavra: <i>trecentoquarantacinque</i> (345).</p>
<h3>As horas</h3>
<div class="tw"><table class="tbl">
<tr><td><i>Che ore sono?</i></td><td><b>Sono le</b> tre · <b>È l'</b>una · <b>È</b> mezzogiorno · <b>È</b> mezzanotte</td></tr>
<tr><td>minutos</td><td>le tre <b>e</b> dieci · e un quarto · e mezza · le quattro <b>meno</b> un quarto (3:45)</td></tr>
<tr><td><i>A che ora…?</i></td><td><b>Alle</b> otto · <b>all'</b>una · <b>a</b> mezzogiorno · <b>verso le</b> nove (por volta das nove)</td></tr>
</table></div>
<h3>Dias, meses, estações</h3>
<p><b>lunedì, martedì, mercoledì, giovedì, venerdì</b> (masc.), <b>sabato</b>, <b>domenica</b> (fem.), sempre com minúscula. <i>Il lunedì vado in palestra</i> = toda segunda · <i>Lunedì vado da Marco</i> = nesta segunda.</p>
<p>gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre · <i>il 9 novembre, il primo maggio</i> · primavera, estate, autunno, inverno.</p>
<h3>Verbos reflexivos</h3>
<div class="tw"><table class="tbl">
<tr><th>svegliarsi</th><td>mi sveglio · ti svegli · si sveglia · ci svegliamo · vi svegliate · si svegliano</td></tr>
</table></div>
<p>Outros: <i>alzarsi</i> (levantar-se), <i>lavarsi, vestirsi, truccarsi</i> (maquiar-se), <i>riposarsi, addormentarsi</i> (pegar no sono), <i>divertirsi</i>. O pronome vem <b>antes</b> do verbo: <i>Mi alzo</i> (nunca "alzo-mi").</p>
<p><b>Frequência:</b> sempre · di solito · spesso · qualche volta · raramente · <i>non… mai</i>.</p>
`,
reading:{
title:'La giornata di un fornaio',
text:`<p>Franco ha cinquantotto anni e [[fa il fornaio|é padeiro]] a Bologna da trent'anni. La sua giornata comincia quando gli altri dormono: si sveglia alle tre meno un quarto, si lava, si veste e alle tre e mezza è già in [[forno|padaria]]. Prepara il pane, le focacce e le brioche per i bar della zona.</p>
<p>Alle sette apre il negozio e serve i primi clienti. Alle due del pomeriggio torna a casa, [[pranza|almoça]] con la moglie e si riposa un paio d'ore. La sera si addormenta presto, verso le nove.</p>
<p>«Non vado mai al cinema e non esco mai la sera», dice [[ridendo|rindo]], «ma la domenica mi alzo alle dieci e mi sento un re!» In agosto il forno chiude per tre settimane: Franco e sua moglie vanno sempre al mare in Puglia.</p>`,
q:[
["A che ora si sveglia Franco?",["Alle tre e mezza","Alle tre meno un quarto","Alle sette","Alle due"],1],
["Che cosa fa alle sette?",["Torna a casa","Apre il negozio","Si riposa","Va al bar"],1],
["Quando si riposa?",["La mattina","Il pomeriggio, dopo pranzo","La sera tardi","Mai"],1],
["Che cosa non fa mai?",["Andare al cinema","Lavorare","Pranzare","Svegliarsi presto"],0],
["Dove va in agosto?",["In montagna","Al mare in Puglia","In città","All'estero"],1]
]},
ex:[
{t:'fill', title:'Ore, numeri e riflessivi', items:[
["Che ore sono? — ___ le otto.",["sono"]],
["Che ore sono? — ___ l'una.",["è"]],
["A che ora comincia il film? — ___ nove.",["alle"]],
["13:30 → È l'una e ___ .",["mezza","mezzo","trenta"]],
["8:45 → Sono le nove meno un ___ .",["quarto"]],
["Io ___ alle sette. (svegliarsi)",["mi sveglio"]],
["Tu ___ presto? (alzarsi)",["ti alzi"]],
["Marta ___ in cinque minuti! (vestirsi)",["si veste"]],
["Noi ___ molto alle feste. (divertirsi)",["ci divertiamo"]],
["I bambini ___ alle nove. (addormentarsi)",["si addormentano"]],
["Il giorno dopo la domenica è il ___ .",["lunedì"]],
["Il mese dopo luglio è ___ .",["agosto"]],
["27 = ___ (in lettere)",["ventisette"]],
["38 = ___ (in lettere)",["trentotto"]]
]},
{t:'mc', title:'Scegli · Escolha', items:[
["Che ore sono? (12:00)",["È mezzogiorno.","Sono mezzogiorno.","È le dodici."],0],
["21 si scrive…",["ventiuno","ventuno","vent'uno"],1],
["I giorni della settimana si scrivono…",["con la maiuscola","con la minuscola"],1],
["«Toda segunda vou à academia» = ___ vado in palestra.",["Il lunedì","Lunedì","Al lunedì"],0,"Il lunedì = toda segunda; lunedì = nesta segunda."],
["Io ___ chiamo Ana.",["mi","me","si"],0],
["«Nunca saio» si dice…",["Mai esco.","Non esco mai.","Non mai esco."],1]
]},
{t:'order', title:'Ricostruisci la frase · Monte a frase', items:[
["Mi sveglio alle sette e mezza.",[]],
["La domenica mi alzo tardi.",["Mi alzo tardi la domenica."]],
["Il film comincia alle nove.",[]],
["Non vado mai in palestra.",[]],
["Il mio compleanno è il dodici marzo.",[]]
]}
],
write:{
task:'Descrivi la tua routine: a che ora ti svegli, che cosa fai la mattina, il pomeriggio e la sera, che cosa fai nel fine settimana. (Descreva sua rotina com horários.)',
words:[60,100],
targets:[
{l:'4 horários (alle…, all\'una, verso le…)', re:'<(alle|all\'|a mezzogiorno|a mezzanotte|verso le|dalle)', n:4},
{l:'4 verbos reflexivos (mi sveglio, mi alzo…)', re:'<(mi|ti|si|ci|vi)\\s+W+(o|i|a|e|iamo|ate|ete|ite|ano|ono)>', n:4},
{l:'2 advérbios de frequência', re:'<(sempre|spesso|di solito|qualche volta|raramente|mai)>', n:2}
],
model:`Di solito mi sveglio alle sette, ma mi alzo alle sette e un quarto: mi piace restare un po' a letto! Mi lavo, mi vesto e faccio colazione con un caffè e una fetta di pane. Alle otto e mezza comincio a lavorare. A mezzogiorno e mezza pranzo e poi faccio una passeggiata. Finisco di lavorare verso le sei. La sera ceno alle otto e qualche volta studio italiano. Mi addormento sempre verso mezzanotte. Il sabato non mi sveglio mai prima delle nove.`
}
},

/* ───────── P7 ───────── */
{
id:107, n:'P7', lvl:'A1 → A2', band:0,
title:'In città: c\'è, ci sono e le preposizioni',
sub:'Dov\'è la stazione? C\'è un bar qui vicino? · Na cidade',
focus:'c\'è / ci sono, preposizioni semplici (di, a, da, in, con, su, per, tra/fra), espressioni di luogo (vicino a, lontano da, davanti a, dietro, accanto a, di fronte a), chiedere e dare indicazioni (giri a destra, vada dritto)',
lesson:`
<h3>C'è / ci sono = há, tem</h3>
<p><b>c'è</b> + singular, <b>ci sono</b> + plural: <i>C'è un bar qui vicino? Ci sono due farmacie. Non c'è problema.</i> Para perguntar onde está algo conhecido: <i>Dov'è il museo? Dove sono i bagni?</i></p>
<h3>Preposições simples</h3>
<div class="tw"><table class="tbl">
<tr><th>di</th><td>de (posse, origem com essere, material)</td><td><i>il libro di Marco · sono di Rio · di lana</i></td></tr>
<tr><th>a</th><td>a, em (cidades), a + infinitivo</td><td><i>vado a Roma · abito a Milano · vado a mangiare</i></td></tr>
<tr><th>da</th><td>de (de onde venho), desde, casa de alguém</td><td><i>vengo da Napoli · studio da un mese · vado da Marta</i></td></tr>
<tr><th>in</th><td>em (países, regiões, lugares, transporte)</td><td><i>in Italia · in centro · in banca · in treno</i></td></tr>
<tr><th>con</th><td>com</td><td><i>con gli amici</i></td></tr>
<tr><th>su</th><td>sobre, em cima</td><td><i>su un tavolo · sul tavolo</i></td></tr>
<tr><th>per</th><td>para, por</td><td><i>un regalo per te · passo per il centro</i></td></tr>
<tr><th>tra / fra</th><td>entre; daqui a</td><td><i>tra la banca e la posta · tra due giorni</i></td></tr>
</table></div>
<div class="trap"><span class="pen">Attenzione!</span> <i>Abito <b>a</b> Roma</i> (nunca "in Roma") · <i>Sono <b>di</b> Rio</i> mas <i>Vengo <b>da</b> Rio</i> · "daqui a dois dias" = <i><b>tra</b> due giorni</i> · "há um mês que estudo" = <i>studio <b>da</b> un mese</i>.</div>
<h3>Onde fica</h3>
<div class="chips">vicino a (perto de) · lontano da (longe de) · davanti a (em frente a) · dietro (atrás) · accanto a (ao lado de) · di fronte a (do outro lado, em frente) · sopra / sotto (em cima / embaixo) · a destra · a sinistra · dritto (reto) · all'angolo (na esquina)</div>
<h3>Dar indicações (com Lei)</h3>
<p><i>Scusi, dov'è la stazione?</i> — <i>Vada dritto, poi giri a destra. Prenda la prima a sinistra. È a cinque minuti a piedi.</i></p>
`,
reading:{
title:'Benvenuti a Lucca',
text:`<p>Lucca è una piccola città della Toscana, a circa mezz'ora da Pisa in treno. Il centro storico è [[circondato|cercado]] da [[mura|muralhas]] antiche: sopra le mura c'è una passeggiata di quattro chilometri, con alberi e [[panchine|bancos de praça]]. I lucchesi vanno lì a correre, a passeggiare o in bicicletta.</p>
<p>In centro ci sono molte chiese e una piazza molto speciale, Piazza dell'Anfiteatro: ha una forma ovale perché è costruita sopra un antico anfiteatro romano. Intorno alla piazza ci sono bar, ristoranti e negozi. Non ci sono molte macchine, quindi è facile girare a piedi.</p>
<p>Lucca è anche la città di Giacomo Puccini, il compositore della <i>Bohème</i>: la sua [[casa natale|casa onde nasceu]] oggi è un museo, vicino a Piazza San Michele.</p>`,
q:[
["Dov'è Lucca?",["In Sicilia","In Toscana","In Lombardia","Vicino a Roma"],1],
["Che cosa c'è sopra le mura?",["Una strada per le macchine","Una passeggiata con alberi e panchine","Un museo","La stazione"],1],
["Perché Piazza dell'Anfiteatro è ovale?",["È costruita sopra un anfiteatro romano","È un parco","È nuova","Non si sa"],0],
["Perché è facile girare a piedi?",["Ci sono pochi turisti","Non ci sono molte macchine","Ci sono molti autobus","La città è grande"],1],
["Chi è nato a Lucca?",["Verdi","Puccini","Dante","Leonardo"],1]
]},
ex:[
{t:'fill', title:'C\'è, ci sono e preposizioni', items:[
["In questa via ___ un bar molto buono.",["c'è"]],
["Nel mio quartiere ___ due farmacie.",["ci sono"]],
["Abito ___ Milano.",["a"]],
["Lavoro ___ Italia da un anno.",["in"]],
["Vengo ___ Rio de Janeiro.",["da"]],
["Sono ___ Rio de Janeiro.",["di"]],
["Vado in ufficio ___ treno.",["in"]],
["Esco ___ i miei amici.",["con"]],
["Questo regalo è ___ te.",["per"]],
["La farmacia è ___ la banca e la posta.",["tra","fra"]],
["Ci vediamo ___ due giorni. (= daqui a)",["tra","fra"]],
["Studio italiano ___ un mese.",["da"]]
]},
{t:'mc', title:'Scegli · Escolha', items:[
["Scusi, ___ il Duomo?",["c'è","dov'è","ci sono"],1],
["___ un supermercato qui vicino?",["C'è","Dov'è","Ci sono"],0],
["Vado ___ Marco stasera. (= à casa do Marco)",["a","da","in"],1],
["Vada dritto e poi ___ a destra.",["gira","giri","girare"],1,"Com Lei: giri, prenda, vada."],
["Il gatto è ___ il letto. (embaixo)",["sotto","sopra","su"],0],
["Il bar è ___ alla stazione. (= ao lado)",["accanto","dietro","lontano"],0]
]},
{t:'fix', title:'Correggi · Corrija', items:[
["Abito {in} Roma da due anni.",["a"],"Abito a Roma da due anni."],
["{Ci è} un problema.",["c'è"],"C'è un problema."],
["{C'è} molti turisti in centro.",["ci sono"],"Ci sono molti turisti in centro."],
["Vengo {di} Lisbona in aereo.",["da"],"Vengo da Lisbona in aereo."],
["Ci vediamo {dentro di} tre giorni.",["tra","fra"],"Ci vediamo tra tre giorni."]
]},
{t:'order', title:'Ricostruisci la frase · Monte a frase', items:[
["Scusi, dov'è la stazione?",[]],
["C'è una farmacia qui vicino?",["Qui vicino c'è una farmacia?"]],
["La banca è davanti alla posta.",[]],
["Vada dritto e giri a sinistra.",[]],
["Nel mio quartiere ci sono molti parchi.",["Ci sono molti parchi nel mio quartiere."]]
]}
],
write:{
task:'Descrivi il tuo quartiere a un amico italiano che viene a trovarti: che cosa c\'è, dove sono le cose, come arrivare a casa tua. (Descreva seu bairro e dê indicações.)',
words:[60,100],
targets:[
{l:'3 c\'è / ci sono', re:'<(c\'è|ci sono)', n:3},
{l:'5 preposições simples', re:'<(di|a|da|in|con|su|per|tra|fra)>', n:5},
{l:'2 expressões de lugar (vicino a, davanti a…)', re:'<(vicino|lontano|davanti|dietro|accanto|di fronte|a destra|a sinistra|dritto|all\'angolo)', n:2}
],
model:`Ciao Matteo! Il mio quartiere è tranquillo ma vivace. Vicino a casa mia c'è un mercato con frutta e verdura, e ci sono tre bar e una pizzeria buonissima. Di fronte al mio palazzo c'è un piccolo parco con una fontana. Per arrivare da me dalla stazione, prendi l'autobus 12 e scendi alla quarta fermata, in Piazza Verdi. Poi vai dritto per cento metri e giri a destra in via Roma. Casa mia è al numero 8, accanto a una libreria. A presto!`
}
},

/* ───────── P8 ───────── */
{
id:108, n:'P8', lvl:'A1 → A2', band:0,
title:'Mi piace! Gusti, cibo e ordinare',
sub:'Mi piace, mi piacciono, vorrei · Gostos, comida e pedir no bar',
focus:'piacere (mi piace / mi piacciono, ti, gli, le, ci, vi), anche a me / neanche a me, dimostrativi questo e quello, ordinare al bar e al ristorante (vorrei, per me, il conto per favore), lessico del cibo e dei pasti',
lesson:`
<p class="lead"><b>Piacere</b> funciona como o <i>gustar</i> espanhol: o que agrada é o sujeito. Em português pensamos ao contrário ("eu gosto de"), então vale treinar.</p>
<div class="tw"><table class="tbl">
<tr><th></th><th>+ singular ou infinitivo</th><th>+ plural</th></tr>
<tr><td>(a me) <b>mi</b></td><td>mi piace il caffè · mi piace ballare</td><td>mi piacciono i dolci</td></tr>
<tr><td>(a te) <b>ti</b></td><td>ti piace</td><td>ti piacciono</td></tr>
<tr><td>(a lui / a lei / a Lei) <b>gli / le / Le</b></td><td>gli piace · le piace</td><td>gli piacciono · le piacciono</td></tr>
<tr><td>(a noi / a voi / a loro) <b>ci / vi / gli</b></td><td>ci piace · vi piace · gli piace</td><td>ci piacciono…</td></tr>
</table></div>
<p>Com um nome: <i><b>A</b> Marco piace il calcio. <b>A</b> mia madre piacciono i fiori.</i></p>
<div class="trap"><span class="pen">Per chi parla portoghese</span> "Eu gosto <b>de</b> café" → <i>Mi piace <b>il</b> caffè</i>: sem "di" e com artigo. E <i>Tu mi piaci</i> = "eu gosto de você"… no sentido romântico!</div>
<p><b>Concordar:</b> <i>Mi piace il mare. — <b>Anche a me!</b> / A me no.</i> · <i>Non mi piace il pesce. — <b>Neanche a me.</b> / A me sì.</i></p>
<h3>Questo e quello</h3>
<p><b>questo, questa, questi, queste</b> (este/esse). <b>quello</b> muda como o artigo: <i>quel libro, quello zaino, quell'albero, quella casa, quei libri, quegli zaini, quelle case</i>.</p>
<h3>No bar e no restaurante</h3>
<div class="tw"><table class="tbl">
<tr><th>pedir</th><td><i>Vorrei… · Per me… · Prendo… · Che cosa ci consiglia? · Il conto, per favore. · Posso pagare con la carta?</i></td></tr>
<tr><th>no bar</th><td><i>un caffè</i> (= espresso) · <i>un macchiato · un cappuccino · un cornetto</i> (croissant) · <i>una spremuta</i> (suco espremido) · <i>un'acqua naturale / frizzante</i></td></tr>
<tr><th>o cardápio</th><td><i>antipasto</i> → <i>primo</i> (massa, risoto, sopa) → <i>secondo</i> (carne ou peixe) + <i>contorno</i> (acompanhamento) → <i>dolce</i></td></tr>
</table></div>
<div class="trap"><span class="pen">Attenzione!</span> Se pedir <i>un latte</i>, você recebe um copo de leite. Café com leite é <i>caffellatte</i> ou <i>latte macchiato</i>. O <i>coperto</i> na conta é uma taxa fixa por pessoa (pão e mesa).</div>
`,
reading:{
title:'Al bar della stazione',
text:`<p><b>Barista:</b> Buongiorno! Che cosa le preparo?</p>
<p><b>Cliente:</b> Buongiorno. Vorrei un cappuccino e un cornetto, per favore.</p>
<p><b>Barista:</b> Il cornetto [[vuoto|sem recheio]], alla crema o alla marmellata?</p>
<p><b>Cliente:</b> Alla crema, grazie. Quanto [[pago|eu pago]]?</p>
<p><b>Barista:</b> Sono tre euro e trenta.</p>
<p><b>Cliente:</b> Ecco a lei. Scusi, a che ora parte il treno per Firenze?</p>
<p><b>Barista:</b> Quello delle dieci? Di solito parte dal [[binario|plataforma]] tre. Le piace Firenze?</p>
<p><b>Cliente:</b> Non lo so, è la prima volta! Mi piacciono molto i musei, e a Firenze ce ne sono tanti.</p>
<p><b>Barista:</b> Allora deve vedere gli Uffizi. E mangiare la bistecca alla fiorentina!</p>
<p><b>Cliente:</b> [[Purtroppo|Infelizmente]] la carne non mi piace… sono vegetariana.</p>
<p><b>Barista:</b> Nessun problema: a Firenze ci sono anche la ribollita e la pappa al pomodoro. Sono buonissime!</p>
<p><b>Cliente:</b> Grazie mille! Arrivederci.</p>
<p><b>Barista:</b> Buon viaggio!</p>`,
q:[
["Che cosa ordina la cliente?",["Un caffè e un panino","Un cappuccino e un cornetto","Una spremuta","Un tè"],1],
["Quanto paga?",["Tre euro e trenta","Un euro e ottanta","Due euro","Cinque euro"],0],
["Dove va la cliente?",["A Roma","A Firenze","A Milano","A Napoli"],1],
["Perché non vuole la bistecca?",["È cara","È vegetariana","Non ha fame","Non c'è tempo"],1],
["Che cosa le piace molto?",["Il calcio","I musei","La carne","Il treno"],1]
]},
ex:[
{t:'fill', title:'Piacere, questo/quello e al bar', items:[
["Mi ___ il caffè. (piacere)",["piace"]],
["Mi ___ i film italiani. (piacere)",["piacciono"]],
["A Marco ___ leggere. (piacere)",["piace"]],
["Ti piace il calcio? — Sì, ___ piace molto. (a me)",["mi"]],
["A Laura piace il mare? — Sì, ___ piace tanto. (a lei)",["le"]],
["A noi ___ piacciono i gatti.",["ci"]],
["Mi piace il gelato. — ___ a me!",["anche"]],
["Non mi piace il pesce. — ___ a me.",["neanche","nemmeno","neppure"]],
["___ un caffè, per favore. (volere, cortese)",["vorrei"]],
["Il ___ , per favore! (para pagar)",["conto"]],
["___ libro è mio. (este)",["questo"]],
["___ ragazze sono spagnole. (aquelas)",["quelle"]]
]},
{t:'mc', title:'Scegli · Escolha', items:[
["Ti piacciono ___ ?",["il vino","i dolci","la pizza"],1],
["«Eu gosto de café» si dice…",["Io piaccio il caffè.","Mi piace di caffè.","Mi piace il caffè."],2],
["Mi piace ballare. — A me ___ . (= eu não)",["no","neanche","anche"],0],
["Al bar, «un caffè» è…",["un espresso","un caffè con latte","un caffè americano grande"],0],
["Se chiedi «un latte», ricevi…",["un caffellatte","un bicchiere di latte","un cappuccino"],1],
["___ zaino è di Paolo. (aquela mochila)",["Quel","Quello","Quella"],1],
["Il primo piatto di solito è…",["pasta, risotto o zuppa","carne o pesce","il dolce"],0]
]},
{t:'fix', title:'Correggi · Corrija', items:[
["Mi {piace} gli spaghetti.",["piacciono"],"Mi piacciono gli spaghetti."],
["{Io piace} la musica italiana.",["mi piace"],"Mi piace la musica italiana."],
["{Lui piace} il calcio.",["gli piace"],"Gli piace il calcio."],
["Mi piace {di leggere} romanzi.",["leggere"],"Mi piace leggere romanzi."],
["{Questo} ragazze sono simpatiche.",["queste"],"Queste ragazze sono simpatiche."]
]},
{t:'order', title:'Ricostruisci la frase · Monte a frase', items:[
["Mi piacciono molto i musei.",[]],
["Vorrei un cappuccino e un cornetto.",["Vorrei un cornetto e un cappuccino."]],
["A mia sorella non piace il pesce.",[]],
["Quanto costa questo libro?",[]],
["Il conto, per favore.",["Per favore, il conto."]]
]}
],
write:{
task:'Scrivi che cosa ti piace e che cosa non ti piace (cibo, musica, sport, città…). Poi scrivi un piccolo dialogo al bar o al ristorante. (Seus gostos e um diálogo no bar.)',
words:[70,110],
targets:[
{l:'3 «mi piace»', re:'<(mi|ti|gli|le|ci|vi)\\s+piace>', n:3},
{l:'2 «mi piacciono»', re:'<(mi|ti|gli|le|ci|vi)\\s+piacciono>', n:2},
{l:'1 «vorrei»', re:'<vorrei>', n:1},
{l:'1 questo / quello', re:'<(questo|questa|questi|queste|quel|quello|quella|quei|quegli|quelle|quell\')', n:1}
],
model:`Mi piace molto la cucina italiana, soprattutto la pasta e la pizza. Mi piacciono anche i dolci, ma non mi piace il caffè troppo forte. Mi piace camminare in città e visitare i musei. Non mi piacciono il calcio e la musica troppo alta. A mio fratello piace il cinema; a me piacciono di più i libri.\n— Buonasera! Che cosa prendete?\n— Io vorrei un'insalata e un'acqua naturale. Lui prende gli spaghetti al pomodoro.\n— Vino?\n— Sì, un bicchiere di quel vino rosso, grazie.\n— Il conto, per favore!`
}
}
);
/* falso amigo: [italiano, significado, armadilha, exemplo] */
const FALSI = [
["burro","manteiga","ES/PT burro = asino","Pane, burro e marmellata."],
["salire","subir","ES salir = uscire","Sono salita al terzo piano."],
["guardare","olhar","PT guardar = mettere via, conservare","Guarda che bel tramonto!"],
["caldo","quente","ES caldo = brodo","Oggi fa un caldo terribile."],
["aceto","vinagre","ES aceite = olio","Insalata con olio e aceto."],
["largo","largo, amplo","ES largo = lungo","Una strada larga dieci metri."],
["squisito","delicioso","PT esquisito = strano","Che torta squisita!"],
["autista","motorista","PT autista = persona autistica","L'autista dell'autobus era gentile."],
["macchina","carro","PT máquina = macchinario, apparecchio","Vado in ufficio in macchina."],
["camera","quarto (cômodo)","PT câmera = macchina fotografica / telecamera","La camera da letto è piccola."],
["tirare","puxar","ES/PT tirar = togliere, buttare","Tirare la porta (non spingere)."],
["imbarazzata","envergonhada, constrangida","ES embarazada = incinta","Ero imbarazzatissima davanti a tutti."],
["topo","rato","PT topo = cima","Un topo in cucina!"],
["cena","jantar","PT cena = scena","La cena è alle otto."],
["presto","cedo, logo","PT/ES presto = veloce; ES pronto = presto","Mi alzo presto. A presto!"],
["negozio","loja","PT negócio = affare","Il negozio apre alle nove."],
["gamba","perna","ES gamba = gambero","Mi fa male la gamba."],
["seta","seda","ES seta = fungo","Una camicia di seta."],
["ufficio","escritório","PT ofício = mestiere","Lavoro in ufficio."],
["polpo","polvo (animal)","PT polvo = polpo; IT polvere = pó","Insalata di polpo."],
["bravo","bom, competente","ES/PT bravo = arrabbiato, feroce","È una brava insegnante."],
["rumore","barulho","PT/ES rumor = voce, pettegolezzo","Che rumore fanno i vicini!"],
["morbido","macio, fofo","PT mórbido = morboso","Un cuscino morbido."],
["donna","mulher","PT dona = proprietaria, signora","Una donna molto simpatica."],
["conto","conta (restaurante)","PT/ES conto/cuento = racconto","Il conto, per favore!"],
["palestra","academia (de ginástica)","PT palestra = conferenza","Vado in palestra tre volte a settimana."],
["carta","papel","PT/ES carta = lettera","Un foglio di carta."],
["tasca","bolso (de roupa)","ES tasca = osteria, bettola","Ho le chiavi in tasca."],
["cattivo","mau, ruim","PT cativo = prigioniero","Un cattivo odore."],
["licenziare","demitir","PT licenciar = abilitare, laureare","L'hanno licenziato dopo un mese."],
["vaso","vaso (de flores)","ES vaso = bicchiere","Un vaso di fiori sul tavolo."],
["pelo","pelo (do corpo)","ES pelo = capelli","Ha i capelli lunghi (non i peli!)."],
["salsa","molho","ES/PT salsa = prezzemolo (PT)","Pasta con la salsa di pomodoro."],
["fermare","parar","PT firmar = fissare; IT firmare = assinar","Ferma la macchina!"],
["annoiarsi","entediar-se","PT enjoar = avere la nausea","Mi annoio a morte."],
["eventualmente","se for o caso, se necessário","PT eventualmente = ogni tanto","Eventualmente ti chiamo io."],
["subire","sofrer (algo), aguentar","PT/ES subir = salire","Ha subito un'operazione."],
["levare","tirar, remover","PT/ES levar = portare","Levati le scarpe, per favore."],
["intendere","pretender, ter a intenção","PT/ES entender = capire","Che cosa intendi fare?"],
["pretendere","exigir","PT/ES pretender = intendere","Pretendo una risposta!"]
];

/* verbos: pres(6), part, aux, fut (radical), imp (radical), cong [sing,noi,voi,loro], cimp (radical), pr [io,lui,loro], noiPR (opcional) */
const VERBI = {
essere:{pres:['sono','sei','è','siamo','siete','sono'],part:'stato',aux:'E',fut:'sar',impF:['ero','eri','era','eravamo','eravate','erano'],cong:['sia','siamo','siate','siano'],cimp:'fo',pr:['fui','fu','furono'],noiPR:'fummo'},
avere:{pres:['ho','hai','ha','abbiamo','avete','hanno'],part:'avuto',aux:'A',fut:'avr',imp:'ave',cong:['abbia','abbiamo','abbiate','abbiano'],cimp:'ave',pr:['ebbi','ebbe','ebbero']},
fare:{pres:['faccio','fai','fa','facciamo','fate','fanno'],part:'fatto',aux:'A',fut:'far',imp:'face',cong:['faccia','facciamo','facciate','facciano'],cimp:'face',pr:['feci','fece','fecero']},
andare:{pres:['vado','vai','va','andiamo','andate','vanno'],part:'andato',aux:'E',fut:'andr',imp:'anda',cong:['vada','andiamo','andiate','vadano'],cimp:'anda',pr:['andai','andò','andarono']},
venire:{pres:['vengo','vieni','viene','veniamo','venite','vengono'],part:'venuto',aux:'E',fut:'verr',imp:'veni',cong:['venga','veniamo','veniate','vengano'],cimp:'veni',pr:['venni','venne','vennero']},
dire:{pres:['dico','dici','dice','diciamo','dite','dicono'],part:'detto',aux:'A',fut:'dir',imp:'dice',cong:['dica','diciamo','diciate','dicano'],cimp:'dice',pr:['dissi','disse','dissero']},
dare:{pres:['do','dai','dà','diamo','date','danno'],part:'dato',aux:'A',fut:'dar',imp:'da',cong:['dia','diamo','diate','diano'],cimp:'de',pr:['diedi/detti','diede/dette','diedero/dettero']},
stare:{pres:['sto','stai','sta','stiamo','state','stanno'],part:'stato',aux:'E',fut:'star',imp:'sta',cong:['stia','stiamo','stiate','stiano'],cimp:'ste',pr:['stetti','stette','stettero']},
potere:{pres:['posso','puoi','può','possiamo','potete','possono'],part:'potuto',aux:'A',fut:'potr',imp:'pote',cong:['possa','possiamo','possiate','possano'],cimp:'pote',pr:['potei/potetti','poté/potette','poterono/potettero']},
volere:{pres:['voglio','vuoi','vuole','vogliamo','volete','vogliono'],part:'voluto',aux:'A',fut:'vorr',imp:'vole',cong:['voglia','vogliamo','vogliate','vogliano'],cimp:'vole',pr:['volli','volle','vollero']},
dovere:{pres:['devo','devi','deve','dobbiamo','dovete','devono'],part:'dovuto',aux:'A',fut:'dovr',imp:'dove',cong:['debba','dobbiamo','dobbiate','debbano'],cimp:'dove',pr:['dovetti/dovei','dovette/dové','dovettero/doverono']},
sapere:{pres:['so','sai','sa','sappiamo','sapete','sanno'],part:'saputo',aux:'A',fut:'sapr',imp:'sape',cong:['sappia','sappiamo','sappiate','sappiano'],cimp:'sape',pr:['seppi','seppe','seppero']},
uscire:{pres:['esco','esci','esce','usciamo','uscite','escono'],part:'uscito',aux:'E',fut:'uscir',imp:'usci',cong:['esca','usciamo','usciate','escano'],cimp:'usci',pr:['uscii','uscì','uscirono']},
rimanere:{pres:['rimango','rimani','rimane','rimaniamo','rimanete','rimangono'],part:'rimasto',aux:'E',fut:'rimarr',imp:'rimane',cong:['rimanga','rimaniamo','rimaniate','rimangano'],cimp:'rimane',pr:['rimasi','rimase','rimasero']},
bere:{pres:['bevo','bevi','beve','beviamo','bevete','bevono'],part:'bevuto',aux:'A',fut:'berr',imp:'beve',cong:['beva','beviamo','beviate','bevano'],cimp:'beve',pr:['bevvi','bevve','bevvero']},
tenere:{pres:['tengo','tieni','tiene','teniamo','tenete','tengono'],part:'tenuto',aux:'A',fut:'terr',imp:'tene',cong:['tenga','teniamo','teniate','tengano'],cimp:'tene',pr:['tenni','tenne','tennero']},
scegliere:{pres:['scelgo','scegli','sceglie','scegliamo','scegliete','scelgono'],part:'scelto',aux:'A',fut:'sceglier',imp:'sceglie',cong:['scelga','scegliamo','scegliate','scelgano'],cimp:'sceglie',pr:['scelsi','scelse','scelsero']},
parlare:{pres:['parlo','parli','parla','parliamo','parlate','parlano'],part:'parlato',aux:'A',fut:'parler',imp:'parla',cong:['parli','parliamo','parliate','parlino'],cimp:'parla',pr:['parlai','parlò','parlarono']},
credere:{pres:['credo','credi','crede','crediamo','credete','credono'],part:'creduto',aux:'A',fut:'creder',imp:'crede',cong:['creda','crediamo','crediate','credano'],cimp:'crede',pr:['credei/credetti','credé/credette','crederono/credettero']},
finire:{pres:['finisco','finisci','finisce','finiamo','finite','finiscono'],part:'finito',aux:'A',fut:'finir',imp:'fini',cong:['finisca','finiamo','finiate','finiscano'],cimp:'fini',pr:['finii','finì','finirono']}
};
const PERSONE = ['io','tu','lui/lei','noi','voi','loro'];
const TEMPI = {
pres:'presente', imp:'imperfetto', pp:'passato prossimo', fut:'futuro', cond:'condizionale',
cong:'congiuntivo presente', cimp:'congiuntivo imperfetto', pr:'passato remoto'
};
function coniuga(v, t){
  const d = VERBI[v];
  switch(t){
    case 'pres': return d.pres.slice();
    case 'imp': return d.impF ? d.impF.slice() : ['vo','vi','va','vamo','vate','vano'].map(e=>d.imp+e);
    case 'fut': return ['ò','ai','à','emo','ete','anno'].map(e=>d.fut+e);
    case 'cond': return ['ei','esti','ebbe','emmo','este','ebbero'].map(e=>d.fut+e);
    case 'cong': return [d.cong[0],d.cong[0],d.cong[0],d.cong[1],d.cong[2],d.cong[3]];
    case 'cimp': return ['ssi','ssi','sse','ssimo','ste','ssero'].map(e=>d.cimp+e);
    case 'pr': return [d.pr[0], d.cimp+'sti', d.pr[1], d.noiPR || d.cimp+'mmo', d.cimp+'ste', d.pr[2]];
    case 'pp': {
      const A=['ho','hai','ha','abbiamo','avete','hanno'], E=['sono','sei','è','siamo','siete','sono'];
      const st = d.part.slice(0,-1);
      return d.aux==='A' ? A.map(a=>a+' '+d.part)
        : E.map((a,i)=> i<3 ? a+' '+st+'o/'+st+'a' : a+' '+st+'i/'+st+'e');
    }
  }
}
FALSI.push(
["comportare","implicar, acarretar","PT comportar-se = IT comportarsi","Il progetto comporta dei rischi."],
["riparare","consertar","PT reparar = notare, accorgersi","Devo far riparare la bici."],
["attendere","esperar, aguardar","PT/ES atender = rispondere, servire","Attenda in linea, prego."],
["aspettare","esperar (alguém, algo)","ES/PT esperar = anche sperare (ter esperança)","Ti aspetto alle otto. / Spero che venga."],
["assistere","presenciar, assistir (a um evento), ajudar","PT assistir TV = guardare la TV","Ho assistito all'incidente."],
["spesa","compras de mercado, gasto","PT despesa = solo spesa come costo","Vado a fare la spesa."],
["fretta","pressa","PT frete = trasporto, spedizione","Ho fretta, scusa!"],
["esperto","especialista, experiente","PT esperto = furbo, sveglio","È un esperto di informatica."],
["sentire","ouvir e sentir","PT sentir = solo provare (non udire)","Senti questa canzone!"],
["ricoverare","internar (hospital)","PT recuperar = recuperare","L'hanno ricoverato d'urgenza."],
["estate","verão","PT estado / ES estado = stato","Quest'estate vado in Sicilia."],
["stanza","cômodo, quarto","PT estância = tenuta, località","Un appartamento di tre stanze."],
["trucco","maquiagem; truque","PT truque = solo inganno","Si è tolta il trucco."],
["brutto","feio, ruim","PT bruto = rozzo, grezzo","Che brutto tempo!"],
["mancia","gorjeta","PT/ES mancha = macchia","Ho lasciato la mancia al cameriere."],
["riso","arroz; riso (risada)","PT riso = solo risata","Risotto: si fa con il riso Carnaroli."],
["spalla","ombro","ES espalda = schiena (costas)","Mi fa male la spalla destra."],
["salire","subir","ES salir = uscire","Sali in macchina!"],
["gentile","amável","PT/ES gentil = (simile) ma anche pagão (gentio)","Sei molto gentile."],
["parare","defender (gol), aparar","PT/ES parar = fermare/fermarsi","Il portiere ha parato il rigore."],
["vivanda","comida, alimento","PT vivenda = villa, casa","Vivande e bevande."],
["lusinga","lisonja","PT/ES lisonja (ok), mas IT lusingato = lisonjeado","Mi sento lusingata."],
["prossimo","próximo; o próximo (pessoa)","ES próximo = vicino (anche IT vicino!)","Il prossimo treno parte alle 9."],
["vicino","perto, vizinho","PT vizinho (ok), ES vecino; ma IT vicino = anche perto","Abito vicino alla stazione."],
["affogare","afogar-se","PT afogar (ok), ma ES ahogar; IT soffocare = sufocar","Ha rischiato di affogare."],
["piccante","apimentado","PT picante (ok); IT pepe = pimenta-do-reino","Non mi piace il cibo piccante."]
);
/* tira entradas repetidas ou pouco úteis */
(function(){ const seen=new Set(); for(let i=FALSI.length-1;i>=0;i--){ const k=FALSI[i][0]; if(seen.has(k)||['lusinga','affogare','piccante','gentile','prossimo','vicino'].includes(k)) FALSI.splice(i,1); else seen.add(k); } FALSI.sort((a,b)=>a[0].localeCompare(b[0],'it')); })();

/* significado e grupo dos verbos existentes */
const VPT={essere:'ser, estar',avere:'ter',fare:'fazer',andare:'ir',venire:'vir',dire:'dizer',dare:'dar',stare:'estar, ficar',potere:'poder',volere:'querer',dovere:'dever',sapere:'saber',uscire:'sair',rimanere:'ficar, permanecer',bere:'beber',tenere:'segurar, manter',scegliere:'escolher',parlare:'falar',credere:'acreditar',finire:'terminar'};
Object.keys(VPT).forEach(k=>{ VERBI[k].pt=VPT[k]; VERBI[k].g=['parlare','credere','finire'].includes(k)?'reg':'irr'; });

/* novos verbos: presente | particípio | aux | futuro | imperfetto | congiuntivo (sing,noi,voi,loro) | cong. imperfetto | passato remoto (io,lui,loro) | significado | grupo */
function V(pres,part,aux,fut,imp,cong,cimp,pr,pt,g){ return {pres:pres.split(' '),part,aux,fut,imp,cong:cong.split(' '),cimp,pr:pr.split(' '),pt,g}; }
Object.assign(VERBI,{
porre:V('pongo poni pone poniamo ponete pongono','posto','A','porr','pone','ponga poniamo poniate pongano','pone','posi pose posero','pôr, colocar','irr'),
tradurre:V('traduco traduci traduce traduciamo traducete traducono','tradotto','A','tradurr','traduce','traduca traduciamo traduciate traducano','traduce','tradussi tradusse tradussero','traduzir','irr'),
piacere:V('piaccio piaci piace piacciamo piacete piacciono','piaciuto','E','piacer','piace','piaccia piacciamo piacciate piacciano','piace','piacqui piacque piacquero','agradar, gostar','irr'),
nascere:V('nasco nasci nasce nasciamo nascete nascono','nato','E','nascer','nasce','nasca nasciamo nasciate nascano','nasce','nacqui nacque nacquero','nascer','irr'),
morire:V('muoio muori muore moriamo morite muoiono','morto','E','morir','mori','muoia moriamo moriate muoiano','mori','morii morì morirono','morrer','irr'),
vivere:V('vivo vivi vive viviamo vivete vivono','vissuto','A','vivr','vive','viva viviamo viviate vivano','vive','vissi visse vissero','viver','irr'),
vedere:V('vedo vedi vede vediamo vedete vedono','visto','A','vedr','vede','veda vediamo vediate vedano','vede','vidi vide videro','ver','irr'),
prendere:V('prendo prendi prende prendiamo prendete prendono','preso','A','prender','prende','prenda prendiamo prendiate prendano','prende','presi prese presero','pegar, tomar','irr'),
mettere:V('metto metti mette mettiamo mettete mettono','messo','A','metter','mette','metta mettiamo mettiate mettano','mette','misi mise misero','pôr, colocar','irr'),
leggere:V('leggo leggi legge leggiamo leggete leggono','letto','A','legger','legge','legga leggiamo leggiate leggano','legge','lessi lesse lessero','ler','irr'),
scrivere:V('scrivo scrivi scrive scriviamo scrivete scrivono','scritto','A','scriver','scrive','scriva scriviamo scriviate scrivano','scrive','scrissi scrisse scrissero','escrever','irr'),
chiudere:V('chiudo chiudi chiude chiudiamo chiudete chiudono','chiuso','A','chiuder','chiude','chiuda chiudiamo chiudiate chiudano','chiude','chiusi chiuse chiusero','fechar','irr'),
aprire:V('apro apri apre apriamo aprite aprono','aperto','A','aprir','apri','apra apriamo apriate aprano','apri','aprii aprì aprirono','abrir','irr'),
chiedere:V('chiedo chiedi chiede chiediamo chiedete chiedono','chiesto','A','chieder','chiede','chieda chiediamo chiediate chiedano','chiede','chiesi chiese chiesero','pedir, perguntar','irr'),
rispondere:V('rispondo rispondi risponde rispondiamo rispondete rispondono','risposto','A','risponder','risponde','risponda rispondiamo rispondiate rispondano','risponde','risposi rispose risposero','responder','irr'),
correre:V('corro corri corre corriamo correte corrono','corso','A','correr','corre','corra corriamo corriate corrano','corre','corsi corse corsero','correr','irr'),
perdere:V('perdo perdi perde perdiamo perdete perdono','perso','A','perder','perde','perda perdiamo perdiate perdano','perde','persi perse persero','perder','irr'),
vincere:V('vinco vinci vince vinciamo vincete vincono','vinto','A','vincer','vince','vinca vinciamo vinciate vincano','vince','vinsi vinse vinsero','vencer, ganhar','irr'),
decidere:V('decido decidi decide decidiamo decidete decidono','deciso','A','decider','decide','decida decidiamo decidiate decidano','decide','decisi decise decisero','decidir','irr'),
conoscere:V('conosco conosci conosce conosciamo conoscete conoscono','conosciuto','A','conoscer','conosce','conosca conosciamo conosciate conoscano','conosce','conobbi conobbe conobbero','conhecer','irr'),
crescere:V('cresco cresci cresce cresciamo crescete crescono','cresciuto','E','crescer','cresce','cresca cresciamo cresciate crescano','cresce','crebbi crebbe crebbero','crescer','irr'),
salire:V('salgo sali sale saliamo salite salgono','salito','E','salir','sali','salga saliamo saliate salgano','sali','salii salì salirono','subir','irr'),
scendere:V('scendo scendi scende scendiamo scendete scendono','sceso','E','scender','scende','scenda scendiamo scendiate scendano','scende','scesi scese scesero','descer','irr'),
spegnere:V('spengo spegni spegne spegniamo spegnete spengono','spento','A','spegner','spegne','spenga spegniamo spegniate spengano','spegne','spensi spense spensero','apagar, desligar','irr'),
togliere:V('tolgo togli toglie togliamo togliete tolgono','tolto','A','toglier','toglie','tolga togliamo togliate tolgano','toglie','tolsi tolse tolsero','tirar, remover','irr'),
piangere:V('piango piangi piange piangiamo piangete piangono','pianto','A','pianger','piange','pianga piangiamo piangiate piangano','piange','piansi pianse piansero','chorar','irr'),
ridere:V('rido ridi ride ridiamo ridete ridono','riso','A','rider','ride','rida ridiamo ridiate ridano','ride','risi rise risero','rir','irr'),
rompere:V('rompo rompi rompe rompiamo rompete rompono','rotto','A','romper','rompe','rompa rompiamo rompiate rompano','rompe','ruppi ruppe ruppero','quebrar','irr'),
muovere:V('muovo muovi muove muoviamo muovete muovono','mosso','A','muover','muove','muova muoviamo muoviate muovano','muove','mossi mosse mossero','mover','irr'),
offrire:V('offro offri offre offriamo offrite offrono','offerto','A','offrir','offri','offra offriamo offriate offrano','offri','offrii offrì offrirono','oferecer','irr'),
mangiare:V('mangio mangi mangia mangiamo mangiate mangiano','mangiato','A','manger','mangia','mangi mangiamo mangiate mangino','mangia','mangiai mangiò mangiarono','comer','reg'),
cercare:V('cerco cerchi cerca cerchiamo cercate cercano','cercato','A','cercher','cerca','cerchi cerchiamo cerchiate cerchino','cerca','cercai cercò cercarono','procurar','reg'),
pagare:V('pago paghi paga paghiamo pagate pagano','pagato','A','pagher','paga','paghi paghiamo paghiate paghino','paga','pagai pagò pagarono','pagar','reg'),
cominciare:V('comincio cominci comincia cominciamo cominciate cominciano','cominciato','A','comincer','comincia','cominci cominciamo cominciate comincino','comincia','cominciai cominciò cominciarono','começar','reg'),
studiare:V('studio studi studia studiamo studiate studiano','studiato','A','studier','studia','studi studiamo studiate studino','studia','studiai studiò studiarono','estudar','reg'),
giocare:V('gioco giochi gioca giochiamo giocate giocano','giocato','A','giocher','gioca','giochi giochiamo giochiate giochino','gioca','giocai giocò giocarono','jogar, brincar','reg'),
arrivare:V('arrivo arrivi arriva arriviamo arrivate arrivano','arrivato','E','arriver','arriva','arrivi arriviamo arriviate arrivino','arriva','arrivai arrivò arrivarono','chegar','reg'),
tornare:V('torno torni torna torniamo tornate tornano','tornato','E','torner','torna','torni torniamo torniate tornino','torna','tornai tornò tornarono','voltar','reg'),
dormire:V('dormo dormi dorme dormiamo dormite dormono','dormito','A','dormir','dormi','dorma dormiamo dormiate dormano','dormi','dormii dormì dormirono','dormir','reg'),
partire:V('parto parti parte partiamo partite partono','partito','E','partir','parti','parta partiamo partiate partano','parti','partii partì partirono','partir','reg'),
sentire:V('sento senti sente sentiamo sentite sentono','sentito','A','sentir','senti','senta sentiamo sentiate sentano','senti','sentii sentì sentirono','ouvir, sentir','reg'),
capire:V('capisco capisci capisce capiamo capite capiscono','capito','A','capir','capi','capisca capiamo capiate capiscano','capi','capii capì capirono','entender','reg'),
preferire:V('preferisco preferisci preferisce preferiamo preferite preferiscono','preferito','A','preferir','preferi','preferisca preferiamo preferiate preferiscano','preferi','preferii preferì preferirono','preferir','reg'),
vendere:V('vendo vendi vende vendiamo vendete vendono','venduto','A','vender','vende','venda vendiamo vendiate vendano','vende','vendei/vendetti vendé/vendette venderono/vendettero','vender','reg')
});
function gerundio(v){ const d=VERBI[v]; if(v==='essere') return 'essendo'; const s=d.imp; return s.endsWith('a')? s+'ndo' : s.slice(0,-1)+'endo'; }
/* Série "Monta a frase" por unidade: [frase correta, [ordens alternativas aceitas]] */
const ORDER = {
1:[["Ho comprato del pane e delle mele al mercato.",["Al mercato ho comprato del pane e delle mele."]],["Domani vado dal medico con mia madre.",["Vado dal medico domani con mia madre.","Domani vado con mia madre dal medico."]],["Il libro di Marco è sullo scaffale.",[]],["Gli zii di Paolo abitano negli Stati Uniti.",[]],["Ci vediamo alle otto davanti al cinema.",["Alle otto ci vediamo davanti al cinema."]]],
2:[["Ieri sera siamo usciti con i colleghi.",["Siamo usciti con i colleghi ieri sera."]],["Le ragazze si sono divertite molto alla festa.",["Alla festa le ragazze si sono divertite molto."]],["Non ho ancora letto il tuo messaggio.",[]],["Il film è cominciato con mezz'ora di ritardo.",[]],["Mi sono piaciuti molto i tuoi biscotti.",["I tuoi biscotti mi sono piaciuti molto."]]],
3:[["Mentre cucinavo, è arrivato mio fratello.",["Mio fratello è arrivato mentre cucinavo."]],["Quando siamo arrivati, il treno era già partito.",["Il treno era già partito quando siamo arrivati."]],["Da bambina passavo le estati al mare.",["Passavo le estati al mare da bambina."]],["Stavo uscendo quando hai chiamato.",["Quando hai chiamato stavo uscendo."]],["Conosco Paolo da più di dieci anni.",[]]],
4:[["Il libro? Gliel'ho dato ieri.",["Il libro? Ieri gliel'ho dato."]],["Te lo dico solo una volta.",[]],["Le chiavi? Non le ho ancora trovate.",[]],["Me ne ha parlato mia sorella.",["Mia sorella me ne ha parlato."]],["Voglio vederla prima di partire.",["Prima di partire voglio vederla."]]],
5:[["Ci vogliono due ore per arrivare.",["Per arrivare ci vogliono due ore."]],["Quanti figli hai? Ne ho tre.",[]],["Non ce la faccio più.",[]],["Che ne pensi della mia proposta?",[]],["Me ne vado perché è tardi.",["Perché è tardi me ne vado."]]],
6:[["Quando arriverai a Roma, chiamami subito.",["Chiamami subito quando arriverai a Roma."]],["Mi ha detto che sarebbe venuto più tardi.",[]],["Al tuo posto non accetterei quell'offerta.",["Non accetterei quell'offerta al tuo posto."]],["Non risponde: sarà ancora in riunione.",[]],["Appena avrò finito, ti scriverò.",["Ti scriverò appena avrò finito."]]],
7:[["Dimmi la verità, per favore.",["Per favore, dimmi la verità."]],["Non preoccuparti, ci penso io.",[]],["Signora, si accomodi pure.",[]],["Il telecomando? Dammelo subito!",[]],["Ragazzi, non fate rumore!",[]]],
8:[["Penso che tu abbia ragione.",[]],["Benché sia tardi, continuiamo a lavorare.",["Continuiamo a lavorare benché sia tardi."]],["Cerco qualcuno che parli tedesco.",[]],["È importante che tutti arrivino in orario.",[]],["Secondo me il film è troppo lungo.",["Il film secondo me è troppo lungo."]]],
9:[["Pensavo che fossi già partita.",[]],["Vorrei che tu venissi con me.",[]],["Parla come se sapesse tutto.",[]],["Magari avessi più tempo libero!",[]],["Credevo che non mi avresti mai scritto.",[]]],
10:[["Se avessi tempo, imparerei il giapponese.",["Imparerei il giapponese se avessi tempo."]],["Se l'avessi saputo, sarei venuta prima.",["Sarei venuta prima se l'avessi saputo."]],["Se fossi in te, accetterei subito.",["Accetterei subito se fossi in te."]],["Se piove, restiamo a casa.",["Restiamo a casa se piove."]],["Se avessi studiato medicina, ora farei il medico.",["Ora farei il medico se avessi studiato medicina."]]],
11:[["Il modulo va compilato in stampatello.",[]],["In Italia si cena piuttosto tardi.",["Si cena piuttosto tardi in Italia."]],["Finita la cena, siamo usciti a passeggiare.",[]],["Essendo stanca, sono rimasta a casa.",["Sono rimasta a casa essendo stanca."]],["La legge è stata approvata ieri.",["Ieri la legge è stata approvata."]]],
12:[["Mi ha chiesto se avessi tempo.",[]],["Ha detto che sarebbe tornato il giorno dopo.",["Ha detto che il giorno dopo sarebbe tornato."]],["Non è mica vero quello che dici.",["Quello che dici non è mica vero."]],["Ha studiato molto, eppure non ha passato l'esame.",[]],["Rosaria non seppe cosa dire.",[]]],
13:[["Il libro di cui ti ho parlato è esaurito.",[]],["La città in cui vivo è piccola.",[]],["Chi cerca trova.",[]],["Non capisco quello che vuoi.",["Quello che vuoi non capisco."]],["Conosco una ragazza il cui padre è medico.",[]]],
14:[["Ho deciso di cambiare lavoro.",[]],["Non riesco a dormire con questo caldo.",["Con questo caldo non riesco a dormire."]],["Sono appena arrivata a casa.",[]],["Si è innamorata di un ragazzo francese.",[]],["Ricordati di comprare il latte!",[]]],
15:[["Mi faccio tagliare i capelli domani.",["Domani mi faccio tagliare i capelli."]],["Non me la sento di guidare di notte.",["Di notte non me la sento di guidare."]],["Perché ce l'hai con me?",[]],["Te lo faccio sapere stasera.",["Stasera te lo faccio sapere."]],["All'esame me la sono cavata bene.",["Me la sono cavata bene all'esame."]]],
16:[["Resto in attesa di un Suo cortese riscontro.",[]],["Il progetto comporta costi molto elevati.",[]],["Con la presente Le comunico il rinvio della riunione.",["Le comunico con la presente il rinvio della riunione."]],["La decisione del governo ha sorpreso tutti.",[]],["La ringrazio anticipatamente per la Sua disponibilità.",[]]]
};
UNITS.forEach(u=>{ if(ORDER[u.id]) u.ex.push({t:'order', title:'Ricostruisci la frase', items:ORDER[u.id]}); });

/* Laboratório: tradução PT → IT  [pt, [respostas aceitas], nível, nota] */
const TRAD = [
["Fui ao médico ontem.",["Ieri sono andato dal medico.","Ieri sono andata dal medico.","Sono andato dal medico ieri.","Sono andata dal medico ieri."],0,"Ir ao médico = andare DAL medico; andare usa essere."],
["Quantos irmãos você tem? Tenho dois.",["Quanti fratelli hai? Ne ho due."],0,"Ne obrigatório com quantidade."],
["Para chegar a Milão leva uma hora.",["Per arrivare a Milano ci vuole un'ora.","Ci vuole un'ora per arrivare a Milano."],0,"Ci vuole = leva (impessoal)."],
["Eu gosto muito destes livros.",["Mi piacciono molto questi libri.","Questi libri mi piacciono molto."],0,"Piacere concorda com o que agrada."],
["Ela nasceu em 1990.",["È nata nel 1990.","Lei è nata nel 1990."],0,"Anos com nel."],
["Estudo italiano há três meses.",["Studio italiano da tre mesi.","Studio l'italiano da tre mesi."],0,"Presente + da."],
["Quando cheguei, o filme já tinha começado.",["Quando sono arrivata, il film era già cominciato.","Quando sono arrivato, il film era già cominciato.","Quando sono arrivata, il film era già iniziato.","Quando sono arrivato, il film era già iniziato."],0,"Trapassato prossimo."],
["Você viu a Ana? Sim, vi-a ontem.",["Hai visto Anna? Sì, l'ho vista ieri.","Hai visto Ana? Sì, l'ho vista ieri."],0,"Particípio concorda com la."],
["Você deu o livro ao Marco? Sim, dei.",["Hai dato il libro a Marco? Sì, gliel'ho dato."],0,"Glielo = o + a ele."],
["Vou embora, é tarde.",["Me ne vado, è tardi."],0,"Andarsene."],
["Quando você chegar, me ligue.",["Quando arriverai, chiamami.","Quando arrivi, chiamami."],0,"Futuro (ou presente coloquial), nunca congiuntivo."],
["Ele disse que viria amanhã.",["Ha detto che sarebbe venuto domani.","Ha detto che sarebbe venuto il giorno dopo.","Ha detto che domani sarebbe venuto."],1,"Futuro no passado = condizionale passato."],
["Eu queria um café, por favor.",["Vorrei un caffè, per favore."],0,"Cortesia = condizionale."],
["Não toque nele! (tu)",["Non toccarlo!","Non lo toccare!"],1,"Negativo de tu = non + infinitivo."],
["Diga-me a verdade. (tu)",["Dimmi la verità."],1,"Di' + mi = dimmi."],
["Acho que você tem razão.",["Penso che tu abbia ragione.","Credo che tu abbia ragione."],1,"Opinião → congiuntivo."],
["Espero que ela esteja bem.",["Spero che lei stia bene.","Spero che stia bene."],1,"Stare → stia."],
["Embora esteja cansada, vou sair.",["Benché sia stanca, esco.","Sebbene sia stanca, esco.","Anche se sono stanca, esco.","Benché sia stanca, uscirò.","Anche se sono stanca, uscirò."],1,"Benché + congiuntivo; anche se + indicativo."],
["Procuro alguém que fale alemão.",["Cerco qualcuno che parli tedesco.","Cerco qualcuno che parli il tedesco."],1,"Relativa de busca → congiuntivo."],
["Eu gostaria que você viesse comigo.",["Vorrei che tu venissi con me.","Vorrei che venissi con me.","Mi piacerebbe che tu venissi con me.","Mi piacerebbe che venissi con me."],1,"Vorrei che + congiuntivo imperfetto."],
["Se eu tivesse tempo, viajaria mais.",["Se avessi tempo, viaggerei di più.","Se avessi tempo, viaggerei più spesso.","Viaggerei di più se avessi tempo."],1,"Igualzinho ao português."],
["Se eu soubesse, teria vindo.",["Se l'avessi saputo, sarei venuta.","Se l'avessi saputo, sarei venuto.","Se lo avessi saputo, sarei venuta.","Se lo avessi saputo, sarei venuto.","Se avessi saputo, sarei venuta.","Se avessi saputo, sarei venuto."],1,"Irrealidade no passado."],
["Pensava que você já tivesse partido.",["Pensavo che fossi già partita.","Pensavo che fossi già partito.","Pensavo che tu fossi già partita.","Pensavo che tu fossi già partito."],1,"Congiuntivo trapassato."],
["Ele fala como se soubesse tudo.",["Parla come se sapesse tutto."],1,"Come se + imperfetto."],
["Tomara que seja verdade!",["Magari fosse vero!","Speriamo che sia vero!"],1,"Magari + congiuntivo imperfetto."],
["O formulário deve ser preenchido à mão.",["Il modulo va compilato a mano."],2,"Andare + particípio = deve ser."],
["Na Itália janta-se tarde.",["In Italia si cena tardi.","Si cena tardi in Italia."],1,"Si impersonale."],
["Vendem-se casas.",["Si vendono case.","Vendesi case."],1,"Si passivante concorda."],
["Terminado o jantar, saímos.",["Finita la cena, siamo usciti.","Finita la cena, siamo uscite.","Finita la cena, uscimmo.","Terminata la cena, siamo usciti."],2,"Particípio absoluto concorda com cena."],
["Acabei de chegar.",["Sono appena arrivata.","Sono appena arrivato."],2,"Appena + particípio."],
["Deixei de fumar há dois anos.",["Ho smesso di fumare due anni fa."],2,"Smettere di; 'há' passado = fa."],
["Ela se apaixonou por um italiano.",["Si è innamorata di un italiano."],2,"Innamorarsi di."],
["Cortei o cabelo ontem (no cabeleireiro).",["Ieri mi sono fatta tagliare i capelli.","Ieri mi sono fatto tagliare i capelli.","Mi sono fatta tagliare i capelli ieri.","Mi sono fatto tagliare i capelli ieri."],2,"Causativo."],
["Não me sinto capaz de dirigir à noite.",["Non me la sento di guidare di notte."],2,"Sentirsela."],
["O livro de que te falei esgotou.",["Il libro di cui ti ho parlato è esaurito.","Il libro di cui ti ho parlato è andato esaurito."],2,"Di cui."],
["A moça cujo pai é médico.",["La ragazza il cui padre è medico."],2,"Il cui."],
["Ele me perguntou se eu tinha tempo.",["Mi ha chiesto se avevo tempo.","Mi ha chiesto se avessi tempo."],2,"Pergunta indireta."],
["Não é nada verdade!",["Non è mica vero!"],2,"Mica."],
["O projeto implica custos elevados.",["Il progetto comporta costi elevati."],2,"Comportare = implicar."],
["Aguardo a sua resposta. (formal)",["Resto in attesa di un Suo riscontro.","Resto in attesa di una Sua risposta.","Attendo una Sua risposta.","Resto in attesa di un Suo cortese riscontro.","Attendo un Suo riscontro."],2,"Fórmula de fecho."]
];

/* Laboratório: transformações  [instrução, frase de partida, [respostas]] */
const TRASF = [
["Passa al passato prossimo","Marta esce con le amiche.",["Marta è uscita con le amiche."]],
["Volgi al plurale","Lo studente straniero è arrivato.",["Gli studenti stranieri sono arrivati."]],
["Sostituisci le parti in corsivo con pronomi: «il libro», «a Luca»","Ho dato il libro a Luca.",["Gliel'ho dato.","Glielo ho dato."]],
["Usa «ne»","Ho mangiato due pizze.",["Ne ho mangiate due."]],
["Discorso indiretto (passato)","«Sono stanca», ha detto Anna.",["Anna ha detto che era stanca.","Ha detto che era stanca."]],
["Discorso indiretto (passato)","«Verrò domani», ha detto Luca.",["Luca ha detto che sarebbe venuto il giorno dopo.","Luca ha detto che sarebbe venuto l'indomani.","Luca ha detto che il giorno dopo sarebbe venuto."]],
["Discorso indiretto","«Chiudi la finestra!», mi ha detto.",["Mi ha detto di chiudere la finestra."]],
["Forma passiva con essere","Il Parlamento ha approvato la legge.",["La legge è stata approvata dal Parlamento."]],
["Passiva con venire","Il portiere chiude la porta alle otto.",["La porta viene chiusa dal portiere alle otto.","La porta viene chiusa alle otto dal portiere.","Alle otto la porta viene chiusa dal portiere."]],
["Obbligo con andare + participio","Bisogna compilare il modulo.",["Il modulo va compilato."]],
["Si passivante","Qui vendiamo libri usati.",["Qui si vendono libri usati.","Si vendono libri usati qui."]],
["Participio assoluto","Dopo che abbiamo finito la cena, siamo usciti.",["Finita la cena, siamo usciti."]],
["Gerundio causale","Poiché ero stanca, sono rimasta a casa.",["Essendo stanca, sono rimasta a casa."]],
["Comincia con «Penso che…»","Marco ha ragione.",["Penso che Marco abbia ragione."]],
["Comincia con «Credo che…»","Luca è partito.",["Credo che Luca sia partito.","Credo che Luca sia già partito."]],
["Passa al passato: «Pensavo che…»","Penso che sia stanca.",["Pensavo che fosse stanca."]],
["Periodo ipotetico della possibilità","Se ho tempo, vengo.",["Se avessi tempo, verrei."]],
["Periodo ipotetico dell'irrealtà (passato)","Se ho tempo, vengo.",["Se avessi avuto tempo, sarei venuto.","Se avessi avuto tempo, sarei venuta."]],
["Imperativo formale (Lei)","Prendi un biscotto!",["Prenda un biscotto!","Prenda pure un biscotto!"]],
["Imperativo negativo (tu)","Parla!",["Non parlare!"]],
["Imperativo con pronomi (il libro, a me)","Dai il libro a me!",["Dammelo!"]],
["Futuro nel passato: «Ha detto che…»","Dice che verrà.",["Ha detto che sarebbe venuto.","Ha detto che sarebbe venuta."]],
["Unisci con un pronome relativo","Ho letto il libro. Mi hai parlato del libro.",["Ho letto il libro di cui mi hai parlato."]],
["Unisci con «il cui / la cui»","Conosco una ragazza. Il padre della ragazza è medico.",["Conosco una ragazza il cui padre è medico."]],
["Nominalizza (frase nominale)","Il treno è arrivato in ritardo.",["L'arrivo in ritardo del treno.","Il ritardo del treno.","L'arrivo del treno in ritardo."]],
["Registro formale (Lei)","Ti scrivo per dirti che la riunione è rinviata.",["Le scrivo per dirLe che la riunione è rinviata.","Le scrivo per comunicarLe che la riunione è rinviata."]],
["Causativo: «Faccio…»","Il meccanico ripara la mia macchina.",["Faccio riparare la macchina al meccanico.","Faccio riparare la macchina dal meccanico.","Faccio riparare la mia macchina dal meccanico.","Faccio riparare la mia macchina al meccanico."]],
["Usa «ci vuole / ci vogliono»","Servono tre uova per la torta.",["Ci vogliono tre uova per la torta.","Per la torta ci vogliono tre uova."]],
["Completa con il trapassato (partire)","Quando sono arrivata, il treno…",["Quando sono arrivata, il treno era già partito.","Quando sono arrivata, il treno era partito."]],
["Passato remoto","Dante è nato a Firenze.",["Dante nacque a Firenze."]]
];
/* Enunciados em italiano: subtítulos, consegne e obiettivi */
const IT = {
1:{sub:'Lo scheletro di ogni frase: il / lo / gli, del, nello, dal…',
 task:'Descrivi il tuo quartiere o la tua città ideale: dove sono le cose, che cosa si compra, dove vai e con chi.',
 t:['8 preposizioni articolate','2 articoli lo / gli','1 «da» + persona o professionista']},
2:{sub:'L\'errore numero 1 di chi parla spagnolo e portoghese.',
 task:'Racconta un viaggio o un fine settimana in cui qualcosa è andato storto: i fatti in ordine, dall\'inizio alla fine.',
 t:['6 tempi composti con essere','3 participi irregolari','1 verbo riflessivo al passato']},
3:{sub:'Raccontare storie: lo sfondo, l\'azione e quello che era successo prima.',
 task:'Racconta un ricordo d\'infanzia: prima lo sfondo (com\'era, che cosa si faceva sempre), poi un fatto preciso.',
 t:['6 verbi all\'imperfetto','3 verbi al passato prossimo','1 trapassato prossimo','1 stavo + gerundio']},
4:{sub:'Glielo, me ne, te la: l\'italiano ama unire i pronomi.',
 task:'Scrivi un\'email a un\'amica: le restituisci delle cose, le chiedi dei favori e racconti a chi hai prestato o dato che cosa.',
 t:['4 pronomi combinati','2 pronomi attaccati a infinito o imperativo','1 participio accordato con lo/la/li/le']},
5:{sub:'Due paroline che spagnolo e portoghese non hanno.',
 task:'Hai comprato una casa a un euro in un paesino italiano. Scrivi un post per un blog: perché ci sei andata, quanto tempo ci hai messo ad arrivare e a ristrutturare, che cosa ne pensi oggi.',
 t:['4 usi di ci','4 usi di ne','volerci o metterci']},
6:{sub:'Con la grande trappola: «disse que viria» = disse che sarebbe venuto.',
 task:'Come sarà la tua vita tra dieci anni? Poi scrivi tre righe di «notizia non confermata» su di te, in stile giornalistico.',
 t:['5 verbi al futuro','1 futuro anteriore','2 condizionali','1 futuro nel passato (ha detto che… sarebbe…)']},
7:{sub:'Dimmi, fallo, vattene, mi dica: dare ordini con naturalezza.',
 task:'Scrivi una guida «Come sopravvivere a…» (il tuo lavoro, la tua città, un trasloco) con 8 consigli all\'imperativo con il tu. Poi riscrivine 2 con il Lei.',
 t:['3 imperativi negativi (non + infinito)','3 pronomi attaccati (dimmi, fallo, ricordati…)','2 consigli con il Lei']},
8:{sub:'Penso che sia: dove l\'italiano si allontana da spagnolo e portoghese.',
 task:'Scrivi una lettera al direttore di un giornale su un tema che ti interessa (tecnologia, scuola, città, lavoro da remoto…). Dai la tua opinione, concedi qualcosa, fai una proposta.',
 t:['4 congiuntivi irregolari (conteggio automatico)','6 congiuntivi in tutto, regolari compresi','2 congiunzioni (benché, affinché, purché…)','1 «secondo me» o «so che» con l\'indicativo']},
9:{sub:'Pensavo che fosse, vorrei che venissi, come se niente fosse.',
 task:'Racconta una decisione importante della tua vita e le reazioni degli altri: che cosa pensavano, speravano, temevano, che cosa avresti voluto che ti dicessero.',
 t:['5 congiuntivi imperfetti o trapassati (stima)','1 «come se»','1 «vorrei / avrei voluto che»']},
10:{sub:'Se avessi saputo… Tre tipi, uno misto e mai il condizionale dopo «se».',
 task:'«E se…?» Scrivi di una scelta della tua vita e di come sarebbe andato tutto diversamente. Chiudi con quello che faresti oggi se potessi.',
 t:['4 frasi con «se»','2 condizionali presenti','2 condizionali passati','1 periodo ipotetico misto']},
11:{sub:'L\'italiano dei testi formali: va compilato, si vendono, finita la cena…',
 task:'Descrivi un processo tradizionale (una ricetta di famiglia, un mestiere, una festa della tua terra) in registro formale, come in una guida o in un museo.',
 t:['2 si passivante o impersonale','1 passivo con venire','1 passivo con andare (obbligo)','1 participio assoluto o gerundio']},
12:{sub:'Riferire, argomentare e leggere letteratura come un madrelingua.',
 task:'Riferisci in discorso indiretto una conversazione recente (che cosa ti hanno detto, chiesto, chiesto di fare) e commentala usando almeno 5 connettivi diversi.',
 t:['3 verbi introduttivi (ha detto che, mi ha chiesto se…)','5 connettivi diversi','1 condizionale passato come futuro nel passato']},
13:{sub:'Che, cui, il quale, il cui, chi, ciò che: collegare frasi come un madrelingua.',
 task:'Descrivi il posto da cui vieni a qualcuno che non ci è mai stato: le persone, i luoghi e le abitudini che porti con te.',
 t:['3 usi di cui (con cui, di cui, in cui…)','1 il cui / la cui / i cui / le cui','1 chi, quello che o ciò che','1 «il che» che riprende una frase']},
14:{sub:'Cominciare a, smettere di, innamorarsi di, sono appena arrivata.',
 task:'Racconta un\'abitudine che hai cominciato, lasciato o che stai cercando di cambiare: com\'è iniziata, che cosa hai provato, che cosa sei riuscita a fare e che cosa pensi di fare.',
 t:['3 costruzioni con a + infinito','3 costruzioni con di + infinito','1 «appena» + participio']},
15:{sub:'Mi faccio tagliare i capelli, me la cavo, non me la sento, ce l\'ho con te.',
 task:'Racconta come te la sei cavata in una situazione difficile in un posto o in un ambiente nuovo: chi ti ha aiutata, che cosa ti hanno fatto fare, di che cosa non te la sentivi.',
 t:['2 causativi (fare + infinito)','3 verbi pronominali con la (me la, ce l\'…)','1 lasciare + infinito']},
16:{sub:'Scrivere come in un\'email istituzionale, una relazione o un giornale.',
 task:'Scrivi un\'email formale di reclamo o di richiesta (a un\'azienda, un\'università o un Comune): contesto, problema, richiesta concreta e scadenza.',
 t:['apertura formale (Gentile, Egregio, Spettabile)','4 nomi astratti (-zione, -mento, -ura, -enza…)','chiusura formale (Distinti saluti, Resto in attesa…)','Lei / Le / Sua con la maiuscola']}
};
UNITS.forEach(u=>{ const x=IT[u.id]; if(!x) return; u.sub=x.sub; u.write.task=x.task; u.write.targets.forEach((t,i)=>{ if(x.t[i]) t.l=x.t[i]; }); });
/* Verifiche: lettura (5), testo a buchi (8), scelta multipla (7) = 20 punti */
const TESTS = [
{id:1, units:[1,4], lvl:'B1', title:'Verifica 1',
reading:{title:'La signora del terzo piano',
text:`<p>Quando mi sono trasferita a Torino, nel palazzo non conoscevo nessuno. La prima persona che ho incontrato è stata la signora Bruna, del terzo piano. Aveva più di ottant'anni, viveva da sola e passava le giornate sul balcone, tra le piante di basilico e una radio sempre accesa.</p>
<p>Un giorno, mentre salivo le scale con le borse della spesa, mi ha fermata e mi ha chiesto se potevo comprarle il giornale ogni mattina. Gliel'ho comprato per tutto l'inverno. In cambio, lei mi preparava dei biscotti alle mandorle e me li lasciava davanti alla porta, in una scatola di latta.</p>
<p>A marzo sono partita per un mese per lavoro. Quando sono tornata, la scatola non c'era. Ho bussato alla sua porta, ma non ha risposto nessuno. Il portiere mi ha spiegato che la signora era andata a vivere dalla figlia, a Genova. Due settimane dopo, però, ho ricevuto un pacco: dentro c'erano i biscotti e un biglietto. «Il giornale qui me lo porta mia nipote», diceva, «ma non è puntuale come te».</p>`,
q:[
["Dove passava le giornate la signora Bruna?",["In cucina","Sul balcone","Al bar","In portineria"],1],
["Che favore ha chiesto alla narratrice?",["Di portarle la spesa","Di comprarle il giornale ogni mattina","Di innaffiare le piante","Di accompagnarla dal medico"],1],
["Che cosa faceva la signora in cambio?",["Le pagava il giornale","Le preparava dei biscotti","Le prestava dei libri","Le cucinava la cena"],1],
["Perché nessuno ha risposto quando la narratrice ha bussato?",["La signora dormiva","La signora era andata a vivere dalla figlia","La signora era in ospedale","La signora non voleva vederla"],1],
["In «me lo porta mia nipote», «lo» si riferisce a…",["il pacco","il giornale","il biscotto","il portiere"],1]
]},
cloze:{title:'Una vacanza in Puglia',
text:`L'anno scorso [1] (io, andare) in vacanza in Puglia con due amiche. [2] (noi, partire) da Milano in treno e il viaggio è durato quasi nove ore. Il primo giorno siamo andate [3] (a + il) mare, ma faceva così caldo che dopo un'ora siamo tornate [4] (in + lo) appartamento. La sera, mentre [5] (noi, cenare) in una trattoria, il proprietario ci ha offerto un limoncello. «Quanti ne volete?» ci ha chiesto. «[6] prendiamo tre, grazie!» Le mie amiche [7] (divertirsi) tantissimo. Io, invece, ho perso il telefono, ma per fortuna un cameriere l'ha trovato e [8] (a me + lo) ha restituito il giorno dopo.`,
a:[["sono andata"],["siamo partite"],["al"],["nell'"],["cenavamo"],["ne"],["si sono divertite"],["me l'","me lo"]]},
mc:[
["Domani vado ___ dentista.",["al","dal","nel"],1],
["Abito ___ Stati Uniti da due anni.",["nei","negli","agli"],1],
["Il film ___ alle nove.",["ha cominciato","è cominciato","era cominciando"],1],
["Quando sono arrivata, la lezione ___ già ___ .",["è / finita","era / finita","ha / finito"],1],
["Le chiavi? Non ___ trovo più!",["li","le","gli"],1],
["Hai detto a Paolo della festa? Sì, ___ ho detto.",["gliel'","l'","glie"],0],
["Conosco Marta ___ dieci anni.",["da","per","fa"],0]
]},

{id:2, units:[5,8], lvl:'B1+', title:'Verifica 2',
reading:{title:'Il coworking in montagna',
text:`<p>Da qualche anno, in alcune valli del Trentino, sono nati degli spazi di coworking per chi lavora a distanza. L'idea è semplice: si affitta una scrivania in un vecchio maso ristrutturato e si lavora con vista sulle Dolomiti. «All'inizio pensavamo che sarebbero venuti soprattutto stranieri», racconta Elena, che ne gestisce uno in valle. «Invece la maggior parte dei clienti sono italiani delle grandi città, stanchi del traffico».</p>
<p>Per arrivarci da Milano ci vogliono circa quattro ore, ma molti restano un mese intero. «Credo che il segreto sia l'equilibrio», spiega Elena. «Lavori fino alle cinque, poi esci, cammini nel bosco, e la sera ceni con persone che fanno mestieri diversissimi dal tuo».</p>
<p>Non tutti in paese sono entusiasti. Alcuni abitanti temono che i prezzi delle case aumentino troppo. Il sindaco, però, è ottimista: secondo lui il coworking porterà nuove famiglie e, forse, permetterà di riaprire la scuola. «Se volete provare», consiglia Elena, «prenotate presto e portate scarpe da montagna: ne avrete bisogno».</p>`,
q:[
["Chi sono la maggior parte dei clienti?",["Turisti stranieri","Italiani delle grandi città","Studenti universitari","Abitanti del paese"],1],
["Quanto tempo ci vuole per arrivare da Milano?",["Un'ora","Circa quattro ore","Un mese","Un giorno intero"],1],
["Secondo Elena, qual è il segreto del successo?",["I prezzi bassi","L'equilibrio tra lavoro e tempo libero","La connessione veloce","La cucina locale"],1],
["Che cosa temono alcuni abitanti?",["Il rumore","L'aumento dei prezzi delle case","La chiusura della scuola","Troppa neve"],1],
["In «ne avrete bisogno», «ne» si riferisce a…",["le scarpe da montagna","i prezzi","le famiglie","le prenotazioni"],0]
]},
cloze:{title:'Cara Giulia',
text:`Cara Giulia, ti scrivo da Bologna. Sono arrivata ieri e [1] (rimanere, io, futuro) qui fino a venerdì. Il viaggio è stato lunghissimo: per arrivare [2] sono volute sei ore! Domani [3] (vedere, io, futuro) Marco: mi aveva detto che [4] (venire, futuro nel passato) a prendermi in stazione, ma non è venuto… Penso che [5] (avere, lui) troppo lavoro in questo periodo. Se passi da Bologna, [6] (chiamare + mi, imperativo tu)! Ti porterei in un'osteria che mi piace molto: [7] (andare + ci, noi, presente) insieme? Spero che tu [8] (stare) bene. Un abbraccio, Sara`,
a:[["rimarrò"],["ci"],["vedrò"],["sarebbe venuto"],["abbia"],["chiamami"],["ci andiamo"],["stia"]]},
mc:[
["Quanti libri hai letto quest'anno? ___ ho letti dodici.",["Li","Ne","Ci"],1],
["Per fare la pizza ___ un'ora.",["ci vuole","ci vogliono","ci metto"],0],
["Quando ___ a casa, chiamami.",["arrivassi","arriverai","arriveresti"],1],
["Signora, ___ pure!",["entra","entri","entrate"],1],
["Penso che Luca ___ ragione.",["ha","abbia","avrà avuto"],1],
["Benché ___ tardi, continuiamo.",["è","sia","sarà"],1],
["Ha detto che ___ il giorno dopo.",["partirebbe","sarebbe partito","partirà"],1]
]},

{id:3, units:[9,12], lvl:'B2', title:'Verifica 3',
reading:{title:'La valigia di cartone',
text:`<p>Mio nonno partì per l'Argentina nel 1951, a diciannove anni, con una valigia di cartone e l'indirizzo di un cugino che non aveva mai visto. Raccontava sempre che, se il cugino non fosse venuto a prenderlo al porto, sarebbe tornato in Italia con la stessa nave. Il cugino, invece, c'era: lo riconobbe da una foto che la famiglia gli aveva spedito mesi prima.</p>
<p>I primi anni furono duri. Lavorava dodici ore al giorno in una fabbrica di scarpe e la sera studiava lo spagnolo, benché fosse stanchissimo. Nelle lettere alla madre, però, scriveva che tutto andava bene, come se Buenos Aires fosse una specie di paradiso. Lei, che non sapeva leggere, se le faceva leggere dal parroco del paese.</p>
<p>Quando, molti anni dopo, gli chiesi se si fosse mai pentito di essere partito, ci pensò a lungo. Mi disse che, se fosse rimasto, probabilmente avrebbe avuto una vita più tranquilla, ma che non avrebbe mai conosciuto mia nonna. «E tu», aggiunse sorridendo, «non saresti qui a fare domande».</p>`,
q:[
["Che cosa avrebbe fatto il nonno se il cugino non fosse venuto?",["Avrebbe cercato lavoro da solo","Sarebbe tornato in Italia","Avrebbe aspettato al porto","Sarebbe andato in Brasile"],1],
["Come lo riconobbe il cugino?",["Dalla valigia","Da una foto","Dalla voce","Da una lettera"],1],
["Perché le lettere alla madre non erano del tutto sincere?",["Il nonno voleva tranquillizzarla","Il parroco le cambiava","Il nonno non sapeva scrivere","Erano in spagnolo"],0],
["Chi leggeva le lettere alla madre?",["Il nonno","Il cugino","Il parroco","La nonna"],2],
["«Benché fosse stanchissimo» esprime…",["una causa","una concessione","un'ipotesi","un fine"],1]
]},
cloze:{title:'Un incontro inatteso',
text:`Ieri ho incontrato Chiara, che non vedevo da anni. Mi ha detto che [1] (lavorare, imperfetto) a Londra e che il mese dopo [2] (tornare, futuro nel passato) in Italia. Credevo che [3] (sposarsi, lei, congiuntivo trapassato) da tempo, invece mi ha raccontato che il fidanzato l'aveva lasciata. «Se l'[4] (sapere, io) prima», le ho detto, «ti avrei chiamata». Lei ha sorriso, come se non [5] (essere) importante. Poi mi ha chiesto [6] ancora vivevo nello stesso quartiere. Le ho risposto di sì; [7] (= e non solo: di più), le ho proposto di venire a cena da me. Magari [8] (potere, noi) tornare amiche come prima!`,
a:[["lavorava"],["sarebbe tornata"],["si fosse sposata"],["avessi saputo"],["fosse"],["se"],["anzi","inoltre"],["potessimo"]]},
mc:[
["Vorrei che tu mi ___ la verità.",["dica","dicessi","diresti"],1],
["Se ___ più tempo, studierei il cinese.",["avrei","avessi","ho avuto"],1],
["Se l'avessi saputo, ___ .",["te l'avrei detto","te lo direi","te lo dicessi"],0],
["Il modulo ___ compilato entro lunedì.",["va","viene stato","è andato"],0],
["In Italia ___ molti prodotti biologici.",["si vende","si vendono","si è venduto"],1],
["«Verrò domani», disse. → Disse che ___ il giorno dopo.",["verrebbe","sarebbe venuto","verrà"],1],
["Dante ___ a Ravenna nel 1321.",["morse","morì","moriva"],1]
]},

{id:4, units:[13,16], lvl:'C1', title:'Verifica 4',
reading:{title:'Lavoro agile: la pubblica amministrazione ci ripensa',
text:`<p>Il lavoro agile nella pubblica amministrazione torna al centro del dibattito. Secondo un'indagine diffusa la scorsa settimana, la maggior parte dei dipendenti pubblici che ne hanno usufruito negli ultimi anni dichiara di aver mantenuto, se non migliorato, la propria produttività. I dirigenti, tuttavia, si mostrano più cauti: molti lamentano difficoltà nel coordinamento dei gruppi e nella valutazione dei risultati.</p>
<p>Il nodo, osservano gli autori, non è tanto la scelta tra presenza e distanza, quanto l'organizzazione del lavoro. Laddove gli obiettivi sono stati definiti con chiarezza, il passaggio al lavoro agile ha comportato benefici evidenti, tra cui la riduzione delle assenze e un minore ricorso agli straordinari. Dove invece si è semplicemente trasferito a casa il lavoro d'ufficio, senza ripensarne i processi, i risultati sono stati deludenti.</p>
<p>Il rapporto si chiude con alcune raccomandazioni: investire nella formazione dei dirigenti, dotare il personale di strumenti adeguati e, soprattutto, misurare i risultati anziché le ore di presenza. Resta da vedere se le amministrazioni sapranno farne tesoro.</p>`,
q:[
["Che cosa dichiara la maggior parte dei dipendenti?",["Di essere meno produttiva","Di aver mantenuto o migliorato la produttività","Di preferire l'ufficio","Di lavorare più ore"],1],
["Di che cosa si lamentano molti dirigenti?",["Dei costi","Del coordinamento e della valutazione dei risultati","Della tecnologia","Delle assenze"],1],
["Secondo gli autori, il vero nodo è…",["la scelta tra casa e ufficio","l'organizzazione del lavoro","il numero di dipendenti","gli stipendi"],1],
["«Ha comportato benefici» significa che…",["ha portato dei vantaggi","si è comportato bene","ha eliminato dei benefici"],0],
["«Farne tesoro» significa…",["risparmiare denaro","imparare dall'esperienza e usarla","nascondere i risultati","spendere di più"],1]
]},
cloze:{title:'Una risposta formale',
text:`Gentile Dottoressa Ferri, [1] riferimento alla Sua email del 12 maggio, Le comunico che il documento [2] cui mi chiedeva è in fase di revisione. La [3] (consegnare, nome) è prevista entro la fine del mese. Mi scuso per il ritardo, [4] (causare, participio) dal cambio del sistema informatico. Non sono ancora riuscito [5] completare la parte economica, ma conto [6] (su + il) contributo dei colleghi dell'ufficio acquisti, [7] (possessivo relativo) esperienza sarà preziosa. Resto in attesa di un Suo cortese [8] e porgo distinti saluti.`,
a:[["in"],["di"],["consegna"],["causato"],["a"],["sul"],["la cui"],["riscontro"]]},
mc:[
["La persona ___ ti ho parlato è arrivata.",["che","di cui","cui"],1],
["Ho smesso ___ fumare.",["a","di","da"],1],
["Sono ___ arrivata, ti chiamo tra un'ora.",["appena","finito di","già di"],0],
["Domani mi ___ tagliare i capelli.",["faccio","lascio","metto"],0],
["All'esame me la sono ___ bene.",["cavato","cavata","cavati"],1],
["Il progetto ___ costi elevati.",["comporta","si comporta","porta via"],0],
["Qual è la formula più formale?",["Ti scrivo per dirti che…","Le scrivo per comunicarLe che…","Volevo dirti che…"],1]
]}
];
TESTS.unshift({id:0, units:[101,108], range:'P1–P8', lvl:'A1', title:'Verifica A1',
reading:{title:'Un\'email da Marta',
text:`<p>Ciao Lucia! Come stai? Io sto bene, ma sono un po' stanca: da lunedì lavoro in un nuovo ufficio, in centro. Il lavoro mi piace molto e i colleghi sono simpatici.</p>
<p>Il problema è la casa: abito ancora in periferia e ogni mattina prendo due autobus. Mi sveglio alle sei e arrivo in ufficio alle otto e mezza! Adesso cerco un appartamento piccolo vicino al lavoro. Ci sono tante offerte, ma sono care.</p>
<p>Sabato vado a vedere due case: vuoi venire con me? Dopo possiamo mangiare una pizza insieme. Un abbraccio, Marta</p>`,
q:[
["Dove lavora Marta adesso?",["In periferia","In un nuovo ufficio in centro","A casa","In una pizzeria"],1],
["Come va al lavoro?",["In macchina","Con due autobus","A piedi","In treno"],1],
["A che ora si sveglia?",["Alle sei","Alle otto e mezza","Alle sette","Alle nove"],0],
["Che cosa cerca?",["Un nuovo lavoro","Un appartamento vicino al lavoro","Nuovi colleghi","Una macchina"],1],
["Che cosa propone a Lucia per sabato?",["Andare al cinema","Vedere due case e poi mangiare una pizza","Lavorare insieme","Fare sport"],1]
]},
cloze:{title:'Mi presento',
text:`Mi chiamo Pedro e [1] (essere) di Porto Alegre. [2] (avere) ventinove anni e [3] (lavorare) in un ristorante. Ogni giorno [4] (svegliarsi) alle sette. Nel mio quartiere [5] (c'è / ci sono) un parco molto grande. Il fine settimana [6] (andare) al mare con gli amici. Mi [7] (piacere) molto i dolci italiani! Adesso [8] (abitare) a Bologna.`,
a:[["sono"],["ho"],["lavoro"],["mi sveglio"],["c'è"],["vado"],["piacciono"],["abito"]]},
mc:[
["___ studenti sono in classe.",["I","Gli","Le"],1],
["Marta ___ trent'anni.",["è","ha","hai"],1],
["Noi ___ in Italia in treno.",["andiamo","andamo","vanno"],0],
["Che ore sono? — ___ l'una.",["Sono","È","Ha"],1],
["Abito ___ Roma.",["in","a","di"],1],
["Mi ___ le lasagne.",["piace","piacciono","piaci"],1],
["Voglio ___ l'italiano.",["imparare","di imparare","a imparare"],0]
]});
/* Lessico tematico: [italiano, português, esempio] */
const LESSICO = [
{t:'Lavoro e ufficio', lvl:'B1', w:[
["il colloquio","entrevista (de emprego)","Domani ho un colloquio di lavoro."],
["lo stipendio","salário","Lo stipendio arriva il 27 del mese."],
["le ferie","férias (do trabalho)","Quest'anno prendo le ferie ad agosto."],
["la scadenza","prazo","La scadenza è venerdì: non c'è tempo da perdere."],
["il capo","chefe","Il mio capo è esigente ma giusto."],
["assumere","contratar","L'azienda assumerà dieci persone."],
["licenziare","demitir","L'hanno licenziato senza preavviso."],
["dimettersi","pedir demissão","Si è dimessa per cambiare città."],
["il contratto a tempo indeterminato","contrato efetivo, sem prazo","Finalmente ho un contratto a tempo indeterminato."],
["la riunione","reunião","La riunione è stata rinviata a lunedì."],
["il turno","turno","Lavoro su turni, anche di notte."],
["lo sciopero","greve","Domani c'è sciopero dei treni."],
["andare in pensione","aposentar-se","Mio padre è andato in pensione a 65 anni."],
["la busta paga","holerite, contracheque","Controlla sempre la busta paga."],
["fare carriera","fazer carreira","Vuole fare carriera nel settore pubblico."],
["lo straordinario","hora extra","Questo mese ho fatto venti ore di straordinario."],
["il preavviso","aviso prévio","Bisogna dare un mese di preavviso."],
["la sede","sede, escritório","La sede dell'azienda è a Milano."]
]},
{t:'Casa e vita quotidiana', lvl:'A2–B1', w:[
["l'affitto","aluguel","L'affitto costa 800 euro al mese."],
["il coinquilino","colega de apartamento","Ho due coinquilini spagnoli."],
["la caparra","caução, depósito","Ho pagato due mesi di caparra."],
["le bollette","contas (luz, gás, água)","Le bollette sono aumentate molto."],
["le spese condominiali","taxa de condomínio","Le spese condominiali sono comprese."],
["il citofono","interfone","Suona il citofono: è il corriere."],
["il pianerottolo","patamar, hall do andar","Ho lasciato il pacco sul pianerottolo."],
["la lavatrice","máquina de lavar","La lavatrice si è rotta di nuovo."],
["stendere i panni","estender a roupa","Stendo i panni sul balcone."],
["apparecchiare la tavola","pôr a mesa","Puoi apparecchiare la tavola?"],
["sparecchiare","tirar a mesa","Io cucino, tu sparecchi."],
["il rubinetto","torneira","Il rubinetto della cucina perde."],
["la cantina","porão, depósito","Le biciclette sono in cantina."],
["lo sgabuzzino","quartinho de despejo","L'aspirapolvere è nello sgabuzzino."],
["la spazzatura","lixo","Porta giù la spazzatura, per favore."],
["la raccolta differenziata","coleta seletiva","Qui la raccolta differenziata è obbligatoria."],
["le faccende di casa","tarefas domésticas","Il sabato sbrigo le faccende di casa."],
["il mutuo","financiamento imobiliário","Hanno acceso un mutuo di trent'anni."]
]},
{t:'Salute e corpo', lvl:'B1', w:[
["il medico di base","médico de família","Prenota una visita dal medico di base."],
["la ricetta","receita (médica)","Senza ricetta non ti danno l'antibiotico."],
["il pronto soccorso","pronto-socorro","Siamo andati al pronto soccorso."],
["la febbre","febre","Ho la febbre a 38."],
["il raffreddore","resfriado","Ho un raffreddore terribile."],
["la tosse","tosse","Questo sciroppo è per la tosse."],
["il mal di testa","dor de cabeça","Ho mal di testa da stamattina."],
["la caviglia","tornozelo","Mi sono storta la caviglia."],
["il ginocchio","joelho (pl. le ginocchia)","Mi fanno male le ginocchia."],
["la spalla","ombro","Ho un dolore alla spalla."],
["la schiena","costas","Ho mal di schiena."],
["guarire","sarar, curar-se","Sei guarita dall'influenza?"],
["ricoverare","internar","L'hanno ricoverato per due giorni."],
["le analisi del sangue","exame de sangue","Devo fare le analisi del sangue."],
["la farmacia di turno","farmácia de plantão","La domenica cerco la farmacia di turno."],
["l'otturazione","obturação","Il dentista mi ha fatto un'otturazione."],
["stare in forma","estar em forma","Cammino ogni giorno per stare in forma."],
["sentirsi giù","sentir-se pra baixo","Oggi mi sento un po' giù."]
]},
{t:'Emozioni e carattere', lvl:'B1–B2', w:[
["arrabbiarsi","ficar com raiva","Non arrabbiarti per così poco."],
["offendersi","ofender-se","Si è offesa per una battuta."],
["vergognarsi","ter vergonha","Mi vergogno di parlare in pubblico."],
["essere orgoglioso di","ter orgulho de","Sono orgogliosa di te."],
["avere nostalgia di","ter saudade de","Ho nostalgia di casa."],
["deluso","decepcionado","Sono rimasta delusa dal film."],
["testardo","teimoso","È testarda come un mulo."],
["permaloso","melindroso, que se ofende fácil","Non scherzare con lui, è permaloso."],
["tirchio","pão-duro","È così tirchio che non offre mai un caffè."],
["spiritoso","engraçado, espirituoso","È una persona molto spiritosa."],
["sfacciato","descarado","Che sfacciato: è passato davanti a tutti!"],
["geloso","ciumento","È molto geloso della sua ragazza."],
["essere in ansia","estar aflita, ansiosa","Sono in ansia per l'esame."],
["sollevato","aliviado","Mi sento sollevata."],
["commuoversi","emocionar-se","Mi sono commossa al matrimonio."],
["essere stufo di","estar farto de","Sono stufa di aspettare."],
["scoraggiarsi","desanimar","Non scoraggiarti, ce la farai!"],
["avere un caratteraccio","ter um gênio difícil","Ha un caratteraccio, ma è buono."]
]},
{t:'Società e politica', lvl:'B2', w:[
["il disegno di legge","projeto de lei","Il disegno di legge passa al Senato."],
["le elezioni","eleições","Le elezioni si terranno a giugno."],
["il sindaco","prefeito","Il sindaco ha inaugurato il parco."],
["il Comune","prefeitura, município","Devo andare in Comune per la carta d'identità."],
["il consigliere comunale","vereador","Un consigliere comunale ha protestato."],
["il codice fiscale","código fiscal (como o CPF)","Per lavorare serve il codice fiscale."],
["la disoccupazione","desemprego","La disoccupazione giovanile è alta."],
["le tasse","impostos","Paghiamo molte tasse."],
["l'evasione fiscale","sonegação de impostos","L'evasione fiscale è un problema serio."],
["il sondaggio","pesquisa (de opinião)","Secondo un sondaggio, il 60% è d'accordo."],
["la manifestazione","manifestação, protesto","C'è una manifestazione in centro."],
["la maggioranza","maioria (governista)","La maggioranza ha approvato la legge."],
["l'opposizione","oposição","L'opposizione ha votato contro."],
["il decreto","decreto","Il governo ha approvato un decreto."],
["lo sportello","guichê, balcão de atendimento","Lo sportello apre alle nove."],
["il bilancio","orçamento, balanço","Il bilancio del Comune è in rosso."],
["il ballottaggio","segundo turno","Si andrà al ballottaggio."],
["la cronaca","notícias do dia a dia","L'ho letto nella cronaca locale."]
]},
{t:'Ambiente e tecnologia', lvl:'B2', w:[
["il riscaldamento globale","aquecimento global","Il riscaldamento globale preoccupa i giovani."],
["le fonti rinnovabili","fontes renováveis","Bisogna investire nelle fonti rinnovabili."],
["l'inquinamento","poluição","L'inquinamento in città è alto."],
["lo spreco","desperdício","Lo spreco alimentare è enorme."],
["la siccità","seca","La siccità ha colpito il Sud."],
["l'alluvione","enchente, inundação","Un'alluvione ha allagato il paese."],
["il pannello solare","painel solar","Abbiamo messo i pannelli solari sul tetto."],
["smaltire","descartar (resíduos)","Dove si smaltiscono le pile?"],
["risparmiare energia","economizar energia","Spegni la luce per risparmiare energia."],
["scaricare","baixar (um arquivo, um app)","Scarica l'app del Comune."],
["aggiornare","atualizar","Devi aggiornare il sistema."],
["lo schermo","tela","Lo schermo del telefono si è rotto."],
["il caricabatterie","carregador","Hai un caricabatterie da prestarmi?"],
["allegare","anexar","Ti allego il documento."],
["inoltrare","encaminhar (e-mail)","Ti inoltro la mail del capo."],
["la chiavetta","pen drive","Salva tutto sulla chiavetta."],
["la stampante","impressora","La stampante non funziona."],
["l'intelligenza artificiale","inteligência artificial","L'intelligenza artificiale cambia il lavoro."]
]},
{t:'Espressioni idiomatiche', lvl:'B2–C1', w:[
["in bocca al lupo!","boa sorte! (responde-se: crepi!)","In bocca al lupo per l'esame!"],
["non vedere l'ora di","estar louca para","Non vedo l'ora di vederti!"],
["costare un occhio della testa","custar os olhos da cara","Quella borsa costa un occhio della testa."],
["prendere un granchio","enganar-se, dar um fora","Ho preso un granchio: la riunione era ieri."],
["essere al verde","estar sem dinheiro","A fine mese sono sempre al verde."],
["avere le mani bucate","ser gastadeira","Ha le mani bucate: spende tutto."],
["fare le ore piccole","ir dormir de madrugada","Abbiamo fatto le ore piccole a chiacchierare."],
["piovere a catinelle","chover canivetes","Prendi l'ombrello, piove a catinelle."],
["rompere le scatole","encher o saco","Smettila di rompere le scatole!"],
["acqua in bocca!","boca de siri!","Te lo dico, ma acqua in bocca!"],
["tagliare la corda","dar no pé, fugir","Quando è arrivato il capo, ha tagliato la corda."],
["avere la testa fra le nuvole","estar com a cabeça nas nuvens","Oggi hai proprio la testa fra le nuvole."],
["fare una figuraccia","passar vergonha, pagar mico","Ho fatto una figuraccia davanti a tutti."],
["essere in gamba","ser competente, esperta","La nuova collega è molto in gamba."],
["non avere peli sulla lingua","não ter papas na língua","Mia nonna non ha peli sulla lingua."],
["a occhio e croce","mais ou menos, a olho","Saranno, a occhio e croce, trenta persone."],
["cadere dalle nuvole","ficar surpreso, cair das nuvens","Quando gliel'ho detto, è caduto dalle nuvole."],
["ogni morte di papa","muito raramente","Ci vediamo ogni morte di papa."]
]},
{t:'Connettivi e lessico formale', lvl:'C1', w:[
["tuttavia","contudo, no entanto","Il progetto è valido; tuttavia costa troppo."],
["pertanto","portanto","I dati sono incompleti; pertanto non possiamo decidere."],
["inoltre","além disso","Il corso è gratuito; inoltre rilascia un attestato."],
["infatti","de fato (confirma o que foi dito)","Era stanca: infatti è andata a letto presto."],
["invece","ao contrário, por outro lado","Pensavo fosse caro, invece è economico."],
["anzi","pelo contrário; aliás","Non mi dispiace, anzi, mi fa piacere."],
["ovvero","ou seja","Il QCER, ovvero il Quadro comune europeo."],
["ciononostante","apesar disso","Pioveva; ciononostante siamo usciti."],
["qualora","caso","Qualora ci fossero problemi, ci contatti."],
["purché","desde que","Puoi venire, purché arrivi in orario."],
["affinché","para que","Te lo spiego affinché tu capisca."],
["in merito a","a respeito de","Le scrivo in merito alla Sua richiesta."],
["a fronte di","diante de, em face de","A fronte di costi alti, i risultati sono scarsi."],
["al fine di","a fim de","Al fine di ridurre i costi, chiudiamo la sede."],
["in seguito a","em consequência de, após","In seguito all'incidente, la strada è chiusa."],
["per quanto riguarda","no que diz respeito a","Per quanto riguarda il budget, ne parliamo domani."],
["laddove","onde, nos casos em que","Laddove possibile, lavoriamo da remoto."],
["avvalersi di","valer-se de","Ci avvaliamo di consulenti esterni."]
]}
];
/* Schede di cultura: paragrafi [italiano, português], curiosità (pt), parole [it, pt], quiz */
const CULTURA = [
{t:'L\'Italia in breve', pt:'O básico sobre a Itália', tag:'Geografia',
p:[
["L'Italia è una [[penisola|península]] nel Sud dell'Europa, nel mar Mediterraneo. Ha la forma di uno [[stivale|bota]]. La capitale è Roma. In Italia vivono quasi 59 milioni di persone.","A Itália é uma península no sul da Europa, no mar Mediterrâneo. Tem a forma de uma bota. A capital é Roma. Na Itália vivem quase 59 milhões de pessoas."],
["L'Italia ha venti regioni. Anche le due isole più grandi sono regioni: la Sicilia e la Sardegna. Dentro il territorio italiano ci sono due piccoli Stati indipendenti: San Marino e la Città del Vaticano.","A Itália tem vinte regiões. As duas maiores ilhas também são regiões: a Sicília e a Sardenha. Dentro do território italiano há dois pequenos Estados independentes: San Marino e a Cidade do Vaticano."],
["Al Nord ci sono le Alpi: la montagna più alta è il Monte Bianco, con più di 4.800 metri. Lungo tutta la penisola ci sono gli Appennini. Il fiume più lungo è il Po. Ci sono anche vulcani famosi: l'Etna, il Vesuvio e lo Stromboli.","No Norte ficam os Alpes: a montanha mais alta é o Monte Branco, com mais de 4.800 metros. Ao longo de toda a península estão os Apeninos. O rio mais longo é o Pó. Há também vulcões famosos: o Etna, o Vesúvio e o Stromboli."],
["La bandiera è verde, bianca e rossa e si chiama «il Tricolore». L'Italia è una Repubblica dal 1946 ed è uno dei sei Paesi fondatori dell'Unione Europea. La moneta è l'euro.","A bandeira é verde, branca e vermelha e se chama «il Tricolore». A Itália é uma República desde 1946 e é um dos seis países fundadores da União Europeia. A moeda é o euro."]
],
curio:["A Itália é o país com mais sítios do Patrimônio Mundial da UNESCO: são cerca de 60.","San Marino é considerada uma das repúblicas mais antigas do mundo: a tradição diz que foi fundada no ano 301.","A península é banhada por quatro mares: Lígure, Tirreno, Jônico e Adriático."],
w:[["la penisola","a península"],["lo stivale","a bota"],["la regione","a região"],["l'isola","a ilha"],["il fiume","o rio"],["la montagna","a montanha"],["la bandiera","a bandeira"],["il Paese","o país"]],
q:[["Qual è la capitale d'Italia?",["Milano","Roma","Firenze","Venezia"],1],["Quante regioni ha l'Italia?",["Dodici","Venti","Trenta","Quindici"],1],["Che forma ha l'Italia?",["Di un cerchio","Di uno stivale","Di un triangolo","Di una stella"],1],["Di che colori è la bandiera?",["Rossa, bianca e blu","Verde, bianca e rossa","Gialla e rossa","Verde e gialla"],1]]
},
{t:'Nord, Centro e Sud', pt:'As grandes cidades e as três Itálias', tag:'Geografia',
p:[
["L'Italia si divide spesso in tre parti: il Nord, il Centro e il Sud. Il [[paesaggio|paisagem]], il cibo, l'accento e anche il ritmo della vita cambiano molto da una zona all'altra.","A Itália costuma ser dividida em três partes: o Norte, o Centro e o Sul. A paisagem, a comida, o sotaque e até o ritmo de vida mudam muito de uma região para outra."],
["Al Nord, Milano è la capitale dell'economia e della moda. Torino è la città delle automobili e del cioccolato. Venezia è costruita sull'acqua: non ci sono macchine, solo [[barche|barcos]] e [[ponti|pontes]]. Bologna è famosa per la cucina e per l'università, la più antica del mondo occidentale.","No Norte, Milão é a capital da economia e da moda. Turim é a cidade dos automóveis e do chocolate. Veneza é construída sobre a água: não há carros, só barcos e pontes. Bolonha é famosa pela cozinha e pela universidade, a mais antiga do mundo ocidental."],
["Al Centro, Roma è la «città eterna»: in ogni strada ci sono duemila anni di storia. Firenze è la città del Rinascimento, con il Duomo e la Galleria degli Uffizi. Siena e Pisa sono piccole e bellissime.","No Centro, Roma é a «cidade eterna»: em cada rua há dois mil anos de história. Florença é a cidade do Renascimento, com o Duomo e a Galeria Uffizi. Siena e Pisa são pequenas e lindíssimas."],
["Al Sud, Napoli è vivace, rumorosa e piena di musica: è la patria della pizza. In Puglia ci sono i trulli, case bianche con il tetto a cono. Palermo, in Sicilia, ha una storia araba, normanna e spagnola: si vede nei palazzi e si sente nei sapori.","No Sul, Nápoles é animada, barulhenta e cheia de música: é a pátria da pizza. Na Puglia há os trulli, casas brancas com telhado em cone. Palermo, na Sicília, tem uma história árabe, normanda e espanhola: dá para ver nos palácios e sentir nos sabores."]
],
curio:["Veneza tem cerca de 118 ilhas ligadas por mais de 400 pontes.","A tradição diz que quem joga uma moeda na Fontana di Trevi volta a Roma. As moedas são recolhidas e doadas para caridade.","«Campanilismo» (de campanile, campanário) é o orgulho, às vezes exagerado, que cada italiano tem da própria cidade."],
w:[["il Nord / il Sud","o Norte / o Sul"],["la moda","a moda"],["il ponte","a ponte (masc.!)"],["la barca","o barco"],["il paesaggio","a paisagem"],["l'accento","o sotaque"],["vivace","animado, vivo"],["rumoroso","barulhento"]],
q:[["Quale città è costruita sull'acqua?",["Milano","Venezia","Torino","Napoli"],1],["Dov'è la Galleria degli Uffizi?",["A Roma","A Firenze","A Bologna","A Palermo"],1],["Che cosa sono i trulli?",["Dolci tipici","Case bianche con il tetto a cono","Barche","Montagne"],1],["Quale città è la patria della pizza?",["Napoli","Torino","Venezia","Siena"],0]]
},
{t:'La lingua italiana e i dialetti', pt:'De onde vem a língua que você está aprendendo', tag:'Lingua',
p:[
["L'italiano viene dal latino, come il portoghese e lo spagnolo. Per questo tante parole sono [[simili|parecidas]]: «casa», «amore», «vino», «luna». Molti linguisti dicono che l'italiano è una delle lingue più vicine al latino.","O italiano vem do latim, como o português e o espanhol. Por isso tantas palavras são parecidas: «casa», «amore», «vino», «luna». Muitos linguistas dizem que o italiano é uma das línguas mais próximas do latim."],
["L'italiano di oggi nasce dal fiorentino del Trecento, la lingua di Dante, Petrarca e Boccaccio. Per secoli, però, la gente [[parlava|falava]] soprattutto il dialetto della sua città.","O italiano de hoje nasce do florentino do século XIV, a língua de Dante, Petrarca e Boccaccio. Durante séculos, porém, as pessoas falavam sobretudo o dialeto da sua cidade."],
["Quando l'Italia diventa uno Stato unito, nel 1861, solo una piccola parte della popolazione parla italiano. Sono la scuola, la radio e soprattutto la televisione, negli anni Cinquanta e Sessanta, a [[diffondere|difundir]] la lingua in tutto il Paese.","Quando a Itália se torna um Estado unificado, em 1861, só uma pequena parte da população fala italiano. São a escola, o rádio e sobretudo a televisão, nos anos 1950 e 1960, que difundem a língua por todo o país."],
["Oggi tutti parlano italiano, ma i dialetti sono ancora vivi: il napoletano, il siciliano, il veneto, il romanesco… Molte canzoni e poesie sono in dialetto, e l'accento cambia molto da una regione all'altra.","Hoje todos falam italiano, mas os dialetos continuam vivos: o napolitano, o siciliano, o vêneto, o romanesco… Muitas canções e poemas são em dialeto, e o sotaque muda muito de uma região para outra."]
],
curio:["«Ciao» vem do vêneto «s-ciào», que significava «(sou seu) escravo», uma forma muito respeitosa de cumprimentar. O «tchau» brasileiro vem daí!","Muitas palavras italianas entraram no português: piano, maestro, soprano, concerto, fiasco, pizza, gelato.","No Brasil ainda se fala o «talian», um dialeto de base vêneta, na Serra Gaúcha e em partes de Santa Catarina e do Paraná."],
w:[["la lingua","a língua"],["il dialetto","o dialeto"],["la parola","a palavra"],["simile","parecido"],["diffondere","difundir"],["l'accento","o sotaque"]],
q:[["Da quale lingua viene l'italiano?",["Dal greco","Dal latino","Dall'arabo","Dal francese"],1],["L'italiano moderno nasce dal dialetto di…",["Napoli","Firenze","Venezia","Milano"],1],["In che anno l'Italia diventa uno Stato unito?",["1492","1861","1946","1900"],1],["Che cosa diffonde la lingua negli anni Cinquanta?",["Il cinema muto","La televisione","Internet","I giornali stranieri"],1]]
},
{t:'La storia in otto tappe', pt:'A história da Itália em 8 etapas', tag:'Storia',
p:[
["753 a.C. — Secondo la [[leggenda|lenda]], Romolo fonda Roma. Roma diventa poi un grande impero: le strade, gli [[acquedotti|aquedutos]] e la lingua latina arrivano in tutta Europa.","753 a.C. — Segundo a lenda, Rômulo funda Roma. Roma se torna depois um grande império: as estradas, os aquedutos e a língua latina chegam a toda a Europa."],
["Medioevo — Dopo la fine dell'Impero romano d'Occidente, nel 476, l'Italia si divide in tanti piccoli Stati. Nascono i Comuni e le repubbliche marinare, come Venezia e Genova.","Idade Média — Depois do fim do Império Romano do Ocidente, em 476, a Itália se divide em muitos pequenos Estados. Nascem as Comunas e as repúblicas marítimas, como Veneza e Gênova."],
["Il Rinascimento (Quattrocento e Cinquecento) — Firenze, Roma e Venezia diventano il centro dell'arte europea: è l'epoca di Leonardo, Michelangelo e Raffaello.","O Renascimento (séculos XV e XVI) — Florença, Roma e Veneza se tornam o centro da arte europeia: é a época de Leonardo, Michelangelo e Rafael."],
["1861 — Dopo le guerre del Risorgimento e la spedizione dei Mille di Garibaldi, nasce il Regno d'Italia. Roma diventa la capitale nel 1871.","1861 — Depois das guerras do Risorgimento e da expedição dos Mil de Garibaldi, nasce o Reino da Itália. Roma se torna a capital em 1871."],
["1922–1945 — Il fascismo di Mussolini e la Seconda guerra mondiale. Il 25 aprile 1945 è il giorno della Liberazione.","1922–1945 — O fascismo de Mussolini e a Segunda Guerra Mundial. O dia 25 de abril de 1945 é o dia da Libertação."],
["1946 — Con un [[referendum|plebiscito]], il 2 giugno, gli italiani scelgono la Repubblica. Per la prima volta in un voto nazionale votano anche le donne.","1946 — Num plebiscito, em 2 de junho, os italianos escolhem a República. Pela primeira vez numa votação nacional, as mulheres também votam."],
["Anni Cinquanta e Sessanta — È il «miracolo economico»: l'Italia diventa un Paese industriale e molte persone del Sud vanno a lavorare nelle [[fabbriche|fábricas]] del Nord.","Anos 1950 e 1960 — É o «milagre econômico»: a Itália se torna um país industrial e muitas pessoas do Sul vão trabalhar nas fábricas do Norte."],
["Oggi — L'Italia è una delle grandi economie d'Europa e uno dei Paesi fondatori dell'Unione Europea.","Hoje — A Itália é uma das grandes economias da Europa e um dos países fundadores da União Europeia."]
],
curio:["Garibaldi também lutou no Brasil, na Revolução Farroupilha, onde conheceu Anita, nascida em Laguna (SC). Por isso é chamado «herói dos dois mundos».","25 de abril (Libertação) e 2 de junho (Festa da República) são feriados nacionais.","«Risorgimento» significa «ressurgimento»: é o nome do movimento que levou à unificação."],
w:[["la leggenda","a lenda"],["l'impero","o império"],["il Comune","a comuna, o município"],["la guerra","a guerra"],["il referendum","o plebiscito"],["la fabbrica","a fábrica"]],
q:[["Secondo la leggenda, chi fonda Roma?",["Garibaldi","Romolo","Dante","Cesare"],1],["Quando nasce il Regno d'Italia?",["Nel 1861","Nel 1946","Nel 753","Nel 1500"],0],["Che cosa scelgono gli italiani il 2 giugno 1946?",["Il re","La Repubblica","L'euro","La capitale"],1],["Che cos'è il «miracolo economico»?",["Una festa religiosa","Il grande sviluppo industriale degli anni '50 e '60","Una guerra","Una legge"],1]]
},
{t:'A tavola', pt:'Refeições, pratos e regras não escritas', tag:'Cibo',
p:[
["Per gli italiani il cibo è una cosa seria. La colazione è piccola e dolce: un caffè o un cappuccino con un cornetto o dei biscotti. Molti la fanno in piedi, al bar.","Para os italianos a comida é coisa séria. O café da manhã é pequeno e doce: um café ou um cappuccino com um croissant ou biscoitos. Muitos o tomam em pé, no bar."],
["Il pranzo è verso l'una e la cena verso le otto, o più tardi al Sud. Un pasto completo ha l'antipasto, il primo (pasta, risotto o zuppa), il secondo (carne o pesce) con il contorno, poi il dolce e il caffè. Ma a casa, ogni giorno, si mangia molto meno!","O almoço é por volta da uma e o jantar por volta das oito, ou mais tarde no Sul. Uma refeição completa tem a entrada, o primeiro prato (massa, risoto ou sopa), o segundo (carne ou peixe) com o acompanhamento, depois a sobremesa e o café. Mas em casa, no dia a dia, se come bem menos!"],
["Ci sono alcune regole non scritte: il cappuccino si beve la mattina, la pasta non è un contorno e sulla pasta con il pesce, di solito, non si mette il parmigiano.","Há algumas regras não escritas: o cappuccino se toma de manhã, a massa não é acompanhamento e, na massa com peixe, normalmente não se põe parmesão."],
["Ogni regione ha i suoi piatti: le lasagne e i tortellini in Emilia-Romagna, il risotto alla milanese in Lombardia, la carbonara a Roma, la pizza a Napoli, il pesto in Liguria, gli arancini e i cannoli in Sicilia. Prima di cena, soprattutto al Nord, c'è l'aperitivo: un drink, come lo spritz, con qualcosa da mangiare.","Cada região tem os seus pratos: lasanha e tortellini na Emília-Romanha, risoto à milanesa na Lombardia, carbonara em Roma, pizza em Nápoles, pesto na Ligúria, arancini e cannoli na Sicília. Antes do jantar, sobretudo no Norte, há o aperitivo: um drinque, como o spritz, com algo para beliscar."]
],
curio:["A carbonara tradicional não leva creme de leite: só ovo, guanciale (bochecha de porco curada), pecorino e pimenta-do-reino.","Antes de comer se diz «Buon appetito!» e, ao brindar, «Salute!» ou «Cin cin!».","«Una pasta» também é um docinho de confeitaria: «vado a prendere le paste» = vou comprar doces."],
w:[["la colazione","o café da manhã"],["il pranzo","o almoço"],["la cena","o jantar"],["il primo","o primeiro prato"],["il secondo","o segundo prato"],["il contorno","o acompanhamento"],["il dolce","a sobremesa, o doce"],["l'aperitivo","o aperitivo"]],
q:[["Com'è la colazione italiana di solito?",["Salata e grande","Piccola e dolce","Con uova e bacon","Non esiste"],1],["Che cos'è il «primo»?",["La carne","La pasta, il risotto o la zuppa","Il dolce","L'insalata"],1],["Quando si beve il cappuccino, di solito?",["La sera","La mattina","Dopo cena","Con la pizza"],1],["Dov'è tipico il pesto?",["In Sicilia","In Liguria","A Roma","In Puglia"],1]]
},
{t:'Il caffè e il bar', pt:'O ritual do café italiano', tag:'Cibo',
p:[
["Il bar italiano non è un locale notturno: è il posto dove si prende il caffè la mattina, si legge il giornale e si [[chiacchiera|bate papo]] con il barista. In ogni paese, anche piccolissimo, c'è almeno un bar.","O bar italiano não é uma casa noturna: é o lugar onde se toma café de manhã, se lê o jornal e se bate papo com o barista. Em todo vilarejo, mesmo minúsculo, há pelo menos um bar."],
["Se chiedi «un caffè», ricevi un espresso: piccolo, forte e caldo. Ci sono molte varianti: il macchiato (con un po' di latte), il ristretto (ancora più forte), il lungo, il corretto (con un goccio di grappa), il caffè d'orzo e il decaffeinato.","Se você pede «un caffè», recebe um espresso: pequeno, forte e quente. Há muitas variantes: o macchiato (com um pouco de leite), o ristretto (ainda mais forte), o lungo, o corretto (com um pingo de grappa), o café de cevada e o descafeinado."],
["Spesso il caffè si beve in piedi, al banco: costa meno che al tavolo. In molti bar prima si paga alla cassa, si prende lo [[scontrino|recibo]] e poi si ordina al banco.","Muitas vezes o café se toma em pé, no balcão: custa menos do que na mesa. Em muitos bares primeiro se paga no caixa, pega-se o recibo e depois se pede no balcão."],
["A Napoli esiste una tradizione bellissima: il «caffè sospeso». Chi può paga due caffè, ne beve uno e lascia l'altro per una persona che non ha soldi.","Em Nápoles existe uma tradição lindíssima: o «caffè sospeso» (café pendente). Quem pode paga dois cafés, toma um e deixa o outro para uma pessoa que não tem dinheiro."]
],
curio:["A moka, a cafeteira italiana de fogão, foi criada por Alfonso Bialetti em 1933.","«Macchiato» quer dizer «manchado»: o café «manchado» com um pouco de leite.","No balcão, um espresso se toma em poucos goles: o café italiano é rápido."],
w:[["il banco","o balcão"],["la cassa","o caixa"],["lo scontrino","o recibo"],["il barista","o barista, atendente"],["la moka","a cafeteira italiana"],["il goccio","o pingo, o golinho"]],
q:[["Se chiedi «un caffè» al bar, che cosa ricevi?",["Un caffè americano","Un espresso","Un cappuccino","Un caffè freddo"],1],["Dove costa meno il caffè?",["Al tavolo","Al banco","In terrazza","Costa uguale"],1],["Che cos'è lo scontrino?",["La ricevuta","Il cucchiaino","Lo zucchero","Il barista"],0],["Che cos'è il «caffè sospeso»?",["Un caffè pagato per chi non ha soldi","Un caffè freddo","Un caffè senza zucchero","Un caffè molto lungo"],0]]
},
{t:'L\'arte e il Rinascimento', pt:'Leonardo, Michelangelo e companhia', tag:'Arte',
p:[
["Il Rinascimento nasce a Firenze nel Quattrocento. Gli artisti studiano l'arte greca e romana, la natura e il corpo umano: al centro di tutto c'è l'uomo.","O Renascimento nasce em Florença no século XV. Os artistas estudam a arte grega e romana, a natureza e o corpo humano: no centro de tudo está o homem."],
["Leonardo da Vinci è pittore, scienziato e inventore: dipinge la Gioconda (oggi a Parigi, al Louvre) e l'Ultima Cena (a Milano). Michelangelo [[scolpisce|esculpe]] il David (a Firenze) e dipinge la [[volta|abóbada, teto]] della Cappella Sistina, in Vaticano. Raffaello dipinge la Scuola di Atene.","Leonardo da Vinci é pintor, cientista e inventor: pinta a Mona Lisa (hoje em Paris, no Louvre) e a Última Ceia (em Milão). Michelangelo esculpe o Davi (em Florença) e pinta o teto da Capela Sistina, no Vaticano. Rafael pinta a Escola de Atenas."],
["Altri nomi importanti: Botticelli, con La nascita di Venere agli Uffizi; Brunelleschi, l'architetto della [[cupola|cúpula]] del Duomo di Firenze; e più tardi Caravaggio, il maestro della luce e dell'ombra.","Outros nomes importantes: Botticelli, com O Nascimento de Vênus nos Uffizi; Brunelleschi, o arquiteto da cúpula do Duomo de Florença; e, mais tarde, Caravaggio, o mestre da luz e da sombra."],
["Non c'è solo il Rinascimento: in Italia ci sono i mosaici di Ravenna, le rovine di Pompei, le chiese barocche di Roma e di Lecce e i grattacieli moderni di Milano.","Não existe só o Renascimento: na Itália há os mosaicos de Ravena, as ruínas de Pompeia, as igrejas barrocas de Roma e de Lecce e os arranha-céus modernos de Milão."]
],
curio:["Michelangelo pintou o teto da Capela Sistina entre 1508 e 1512, trabalhando em pé num andaime, e não deitado como diz a lenda.","O nome «Gioconda» vem de Lisa Gherardini, esposa do comerciante florentino Francesco del Giocondo.","A cúpula de Brunelleschi continua sendo a maior cúpula de alvenaria do mundo."],
w:[["il pittore / la pittrice","o pintor / a pintora"],["dipingere","pintar"],["scolpire","esculpir"],["il quadro","o quadro"],["la scultura","a escultura"],["la cupola","a cúpula"]],
q:[["Dove nasce il Rinascimento?",["A Roma","A Firenze","A Venezia","A Napoli"],1],["Chi dipinge la Gioconda?",["Michelangelo","Leonardo da Vinci","Raffaello","Caravaggio"],1],["Dov'è il David di Michelangelo?",["A Firenze","A Parigi","A Milano","A Venezia"],0],["Chi è l'architetto della cupola del Duomo di Firenze?",["Botticelli","Brunelleschi","Caravaggio","Leonardo"],1]]
},
{t:'La musica: dall\'opera a Sanremo', pt:'A melodia que te trouxe até aqui', tag:'Musica',
p:[
["L'Italia è la patria dell'opera lirica, nata a Firenze alla fine del Cinquecento. Per questo tante parole della musica, in tutto il mondo, sono italiane: piano, forte, allegro, adagio, crescendo, soprano.","A Itália é a pátria da ópera, nascida em Florença no fim do século XVI. Por isso tantas palavras da música, no mundo inteiro, são italianas: piano, forte, allegro, adagio, crescendo, soprano."],
["I compositori più famosi sono Verdi (La traviata, Aida, Nabucco), Puccini (La bohème, Tosca, Madama Butterfly) e Rossini (Il barbiere di Siviglia). Il teatro dell'opera più famoso è la Scala di Milano.","Os compositores mais famosos são Verdi (La traviata, Aida, Nabucco), Puccini (La bohème, Tosca, Madama Butterfly) e Rossini (O barbeiro de Sevilha). O teatro de ópera mais famoso é o Scala de Milão."],
["Dal 1951, ogni anno, c'è il Festival di Sanremo, la grande [[gara|competição]] della canzone italiana. Per una settimana, di solito a febbraio, l'Italia guarda la TV e discute delle canzoni.","Desde 1951, todo ano, acontece o Festival de Sanremo, a grande competição da canção italiana. Durante uma semana, geralmente em fevereiro, a Itália assiste à TV e discute as músicas."],
["Ci sono poi i cantautori, che scrivono testi bellissimi: Lucio Dalla, Fabrizio De André, Lucio Battisti, Francesco De Gregori. E artisti conosciuti nel mondo come Laura Pausini, Andrea Bocelli o i Måneskin, che hanno vinto l'Eurovision nel 2021.","Há também os cantautores, que escrevem letras lindíssimas: Lucio Dalla, Fabrizio De André, Lucio Battisti, Francesco De Gregori. E artistas conhecidos no mundo como Laura Pausini, Andrea Bocelli ou o Måneskin, que venceu o Eurovision em 2021."]
],
curio:["«Nel blu dipinto di blu» (Volare), de Domenico Modugno, venceu Sanremo em 1958 e é uma das canções italianas mais famosas do mundo.","O coro «Va, pensiero», do Nabucco de Verdi, é quase um segundo hino nacional.","Dica de estudo: escolha uma canção de que você goste, encontre a letra e leia junto enquanto ouve. É ótimo para a pronúncia e para o vocabulário."],
w:[["la canzone","a canção"],["il cantautore","o cantor-compositor"],["il testo","a letra (de canção)"],["la gara","a competição"],["il compositore","o compositor"],["la lirica","a ópera"]],
q:[["Dove nasce l'opera lirica?",["A Milano","A Firenze","A Napoli","A Vienna"],1],["Chi ha scritto La traviata?",["Puccini","Verdi","Rossini","Dalla"],1],["Che cos'è Sanremo?",["Un festival della canzone","Un teatro dell'opera","Un gruppo rock","Un premio di cinema"],0],["Che cos'è un cantautore?",["Un cantante che scrive le sue canzoni","Un attore","Un direttore d'orchestra","Un ballerino"],0]]
},
{t:'Il cinema italiano', pt:'Do neorrealismo a Sorrentino', tag:'Cinema',
p:[
["Dopo la Seconda guerra mondiale nasce il Neorealismo: film [[girati|filmados]] per strada, con persone comuni, che raccontano la povertà del dopoguerra. I più famosi sono «Roma città aperta» di Roberto Rossellini e «Ladri di biciclette» di Vittorio De Sica.","Depois da Segunda Guerra Mundial nasce o Neorrealismo: filmes rodados na rua, com pessoas comuns, que contam a pobreza do pós-guerra. Os mais famosos são «Roma, cidade aberta», de Roberto Rossellini, e «Ladrões de bicicleta», de Vittorio De Sica."],
["Nel 1960 Federico Fellini gira «La dolce vita», con la famosa scena di Anita Ekberg nella Fontana di Trevi. Negli stessi anni nasce la «commedia all'italiana» e Sergio Leone rende famoso lo «spaghetti western».","Em 1960 Federico Fellini roda «A doce vida», com a famosa cena de Anita Ekberg na Fontana di Trevi. Nos mesmos anos nasce a «comédia à italiana» e Sergio Leone torna famoso o «western spaghetti»."],
["Più recentemente, «La vita è bella» di Roberto Benigni vince l'Oscar nel 1999 e «La grande bellezza» di Paolo Sorrentino nel 2014.","Mais recentemente, «A vida é bela», de Roberto Benigni, ganha o Oscar em 1999, e «A grande beleza», de Paolo Sorrentino, em 2014."],
["Il cinema è anche un ottimo modo per imparare la lingua: guarda i film con i [[sottotitoli|legendas]] in italiano, così leggi e ascolti insieme.","O cinema também é uma ótima forma de aprender a língua: assista aos filmes com legendas em italiano, assim você lê e ouve ao mesmo tempo."]
],
curio:["A palavra «paparazzi» vem de Paparazzo, um fotógrafo personagem de «La dolce vita».","O Festival de Veneza, de 1932, é o festival de cinema mais antigo do mundo.","Cinecittà, em Roma, inaugurada em 1937, é um dos maiores estúdios de cinema da Europa."],
w:[["il film","o filme"],["il/la regista","o diretor / a diretora"],["girare un film","rodar um filme"],["i sottotitoli","as legendas"],["l'attore / l'attrice","o ator / a atriz"],["la scena","a cena"]],
q:[["Che cos'è il Neorealismo?",["Film girati per strada con persone comuni","Un tipo di opera","Un festival","Film di fantascienza"],0],["Chi ha girato «La dolce vita»?",["Rossellini","Fellini","Benigni","Leone"],1],["Da dove viene la parola «paparazzi»?",["Da un personaggio di un film di Fellini","Da un fotografo americano","Dal dialetto napoletano","Da un giornale"],0],["Quale film di Sorrentino vince l'Oscar?",["La vita è bella","La grande bellezza","Roma città aperta","Ladri di biciclette"],1]]
},
{t:'Libri e scrittori', pt:'De Dante a Elena Ferrante', tag:'Letteratura',
p:[
["Dante Alighieri è il «padre della lingua italiana». Nella Divina Commedia racconta un viaggio immaginario nell'Inferno, nel Purgatorio e nel Paradiso. Il primo verso è famosissimo: «Nel mezzo del cammin di nostra vita».","Dante Alighieri é o «pai da língua italiana». Na Divina Comédia conta uma viagem imaginária pelo Inferno, pelo Purgatório e pelo Paraíso. O primeiro verso é famosíssimo: «No meio do caminho da nossa vida»."],
["Altri classici sono Petrarca, poeta dell'amore, Boccaccio con il Decameron e Alessandro Manzoni con «I promessi sposi», un romanzo che tutti gli studenti leggono a scuola.","Outros clássicos são Petrarca, poeta do amor, Boccaccio com o Decameron e Alessandro Manzoni com «Os noivos», um romance que todos os estudantes leem na escola."],
["Nel Novecento ci sono Luigi Pirandello (premio Nobel nel 1934), Italo Calvino, Natalia Ginzburg, Primo Levi e Umberto Eco con «Il nome della rosa». Oggi Elena Ferrante, con «L'amica geniale», è letta in tutto il mondo.","No século XX há Luigi Pirandello (prêmio Nobel em 1934), Italo Calvino, Natalia Ginzburg, Primo Levi e Umberto Eco com «O nome da rosa». Hoje Elena Ferrante, com «A amiga genial», é lida no mundo inteiro."],
["Un consiglio: comincia con libri brevi e semplici, come i racconti di «Marcovaldo» di Calvino, e leggi un po' ogni giorno.","Um conselho: comece com livros curtos e simples, como os contos de «Marcovaldo», de Calvino, e leia um pouco todos os dias."]
],
curio:["«As aventuras de Pinóquio» (1883), de Carlo Collodi, é um dos livros mais traduzidos do mundo.","A Itália tem seis prêmios Nobel de Literatura: Carducci, Grazia Deledda (a única mulher), Pirandello, Quasimodo, Montale e Dario Fo.","Elena Ferrante é um pseudônimo: a identidade da autora nunca foi confirmada por ela."],
w:[["lo scrittore / la scrittrice","o escritor / a escritora"],["il romanzo","o romance"],["la poesia","o poema, a poesia"],["il verso","o verso"],["il racconto","o conto"],["leggere","ler"]],
q:[["Chi è il «padre della lingua italiana»?",["Manzoni","Dante","Calvino","Pirandello"],1],["Che cosa racconta la Divina Commedia?",["Una storia d'amore a Milano","Un viaggio nell'Inferno, nel Purgatorio e nel Paradiso","La storia di Roma","La vita di un re"],1],["Chi ha scritto «L'amica geniale»?",["Natalia Ginzburg","Elena Ferrante","Umberto Eco","Primo Levi"],1],["Chi ha scritto Pinocchio?",["Collodi","Dante","Boccaccio","Calvino"],0]]
},
{t:'Gesti e buone maniere', pt:'Falar com as mãos e saber se comportar', tag:'Società',
p:[
["Gli italiani parlano anche con le mani. Il gesto più famoso è la «mano a borsa»: tutte le dita unite verso l'alto e la mano che si muove su e giù. Significa «Ma che cosa vuoi?» o «Ma che dici?».","Os italianos também falam com as mãos. O gesto mais famoso é a «mano a borsa»: todos os dedos juntos para cima e a mão que se move para cima e para baixo. Significa «Mas o que você quer?» ou «Mas o que você está dizendo?»."],
["Altri gesti: l'[[indice|dedo indicador]] che gira sulla [[guancia|bochecha]] significa «buonissimo!»; la mano sotto il [[mento|queixo]] che va in avanti significa «non m'importa»; l'indice sotto l'occhio significa «attenzione!» o «sono furbo».","Outros gestos: o indicador girando na bochecha significa «delicioso!»; a mão sob o queixo indo para a frente significa «não me importa»; o indicador embaixo do olho significa «atenção!» ou «sou esperto»."],
["Per salutare amici e parenti ci si danno due baci sulle guance. Con persone che non conosci, o in un contesto formale, si dà la mano e si usa il Lei: «Buongiorno, come sta?». Si passa al tu quando l'altra persona lo propone.","Para cumprimentar amigos e parentes se dão dois beijos no rosto. Com pessoas que você não conhece, ou num contexto formal, aperta-se a mão e usa-se o Lei: «Bom dia, como o senhor está?». Passa-se ao tu quando a outra pessoa propõe."],
["Quando entri in un negozio, saluta sempre con «Buongiorno» o «Buonasera». E quando qualcuno [[starnutisce|espirra]], si dice «Salute!».","Quando você entra numa loja, cumprimente sempre com «Buongiorno» ou «Buonasera». E quando alguém espirra, diz-se «Salute!» (saúde!)."]
],
curio:["«Buongiorno» vale mais ou menos até o começo da tarde; depois se diz «Buonasera». «Buon pomeriggio» se usa mais para se despedir.","«Prego» é uma palavra-coringa: de nada, por favor, entre, pode falar, pois não.","Dar a gorjeta não é obrigatório na Itália, mas é comum deixar o troco ou arredondar a conta."],
w:[["il gesto","o gesto"],["la guancia","a bochecha"],["il bacio","o beijo"],["dare la mano","apertar a mão"],["furbo","esperto, espertalhão"],["salutare","cumprimentar"]],
q:[["Che cosa significa la «mano a borsa»?",["Ciao","Ma che cosa vuoi?","Grazie","Vieni qui"],1],["Come si salutano gli amici?",["Con un inchino","Con due baci sulle guance","Senza toccarsi","Con tre baci"],1],["Che cosa si dice quando qualcuno starnutisce?",["Prego!","Salute!","Auguri!","Buon appetito!"],1],["Con una persona che non conosci, di solito usi…",["il tu","il Lei","il voi","il loro"],1]]
},
{t:'Feste e calendario', pt:'O ano italiano, de Natal a Ferragosto', tag:'Società',
p:[
["Natale, il 25 dicembre, è la festa della famiglia: si mangia tanto e si fa il [[presepe|presépio]]. I dolci tipici sono il panettone, nato a Milano, e il pandoro, di Verona. Il 31 dicembre si festeggia il Capodanno con le [[lenticchie|lentilhas]], che portano soldi.","O Natal, em 25 de dezembro, é a festa da família: come-se muito e monta-se o presépio. Os doces típicos são o panetone, nascido em Milão, e o pandoro, de Verona. Em 31 de dezembro comemora-se o Ano Novo com lentilhas, que trazem dinheiro."],
["Il 6 gennaio arriva la Befana, una vecchietta che porta dolci ai bambini buoni e carbone a quelli cattivi. A febbraio c'è il Carnevale, con le [[maschere|máscaras]]: i più famosi sono quelli di Venezia e di Viareggio.","Em 6 de janeiro chega a Befana, uma velhinha que traz doces para as crianças boazinhas e carvão para as levadas. Em fevereiro há o Carnaval, com as máscaras: os mais famosos são os de Veneza e de Viareggio."],
["A Pasqua si mangia la colomba e il lunedì dopo, Pasquetta, si fa una gita o un picnic con gli amici. Il 25 aprile si festeggia la Liberazione, il 1° maggio la Festa dei lavoratori e il 2 giugno la Festa della Repubblica.","Na Páscoa come-se a colomba e, na segunda-feira seguinte, a Pasquetta, faz-se um passeio ou um piquenique com os amigos. Em 25 de abril comemora-se a Libertação, em 1º de maio o Dia do Trabalhador e em 2 de junho a Festa da República."],
["Il 15 agosto è Ferragosto: tutti vanno al mare o in montagna e le città sono vuote. Ogni città ha anche la festa del suo santo [[patrono|padroeiro]], con processioni, fuochi d'artificio e bancarelle.","Em 15 de agosto é Ferragosto: todos vão para a praia ou para a montanha e as cidades ficam vazias. Cada cidade tem também a festa do seu santo padroeiro, com procissões, fogos de artifício e barraquinhas."]
],
curio:["Em agosto muitas lojas e restaurantes fecham por algumas semanas: é comum ver na porta «Chiuso per ferie».","«Auguri!» serve para aniversário, Natal, Ano Novo e muitas outras ocasiões: é o «felicidades» italiano.","O Palio di Siena, a corrida de cavalos na praça principal, acontece em 2 de julho e 16 de agosto."],
w:[["la festa","a festa, o feriado"],["il presepe","o presépio"],["la maschera","a máscara"],["Capodanno","Ano Novo"],["Ferragosto","15 de agosto"],["gli auguri","as felicitações"]],
q:[["Che cosa porta la Befana ai bambini cattivi?",["Giocattoli","Carbone","Soldi","Fiori"],1],["Qual è il dolce di Natale nato a Milano?",["La colomba","Il panettone","Il tiramisù","Il cannolo"],1],["Quando è Ferragosto?",["Il 15 agosto","Il 2 giugno","Il 25 aprile","Il 6 gennaio"],0],["Che cosa si mangia a Capodanno per avere soldi?",["Le lenticchie","Il panettone","La pizza","Il pesce"],0]]
},
{t:'Italia e Brasile', pt:'A grande imigração e o que ficou dela', tag:'Storia',
p:[
["Tra il 1875 e il 1920 più di un milione di italiani [[emigra|emigra]] in Brasile. Vengono soprattutto dal Veneto, dalla Lombardia, dal Trentino, dalla Campania e dalla Calabria. Partono per la povertà e cercano terra e lavoro.","Entre 1875 e 1920, mais de um milhão de italianos emigram para o Brasil. Vêm sobretudo do Vêneto, da Lombardia, do Trentino, da Campânia e da Calábria. Partem por causa da pobreza e procuram terra e trabalho."],
["Molti lavorano nelle [[piantagioni|fazendas, plantações]] di caffè di São Paulo, soprattutto dopo l'abolizione della schiavitù nel 1888. Altri fondano colonie nel Sud, in Rio Grande do Sul, Santa Catarina e Paraná, dove coltivano la [[vite|videira]] e producono vino.","Muitos trabalham nas fazendas de café de São Paulo, sobretudo depois da abolição da escravidão, em 1888. Outros fundam colônias no Sul, no Rio Grande do Sul, em Santa Catarina e no Paraná, onde cultivam a videira e produzem vinho."],
["Oggi si stima che in Brasile vivano più di 30 milioni di persone con [[antenati|antepassados]] italiani: è la comunità di origine italiana più grande fuori dall'Italia.","Hoje estima-se que no Brasil vivam mais de 30 milhões de pessoas com antepassados italianos: é a maior comunidade de origem italiana fora da Itália."],
["L'influenza è ovunque: nel quartiere del Bixiga a São Paulo, nella Festa da Uva di Caxias do Sul, nel talian della Serra Gaúcha, nella pizza paulistana e in parole come «tchau», che viene da «ciao».","A influência está em toda parte: no bairro do Bixiga, em São Paulo, na Festa da Uva de Caxias do Sul, no talian da Serra Gaúcha, na pizza paulistana e em palavras como «tchau», que vem de «ciao»."]
],
curio:["Em 2014 o talian foi reconhecido como patrimônio cultural imaterial do Brasil.","A maioria dos imigrantes viajava semanas de navio e desembarcava nos portos de Santos ou do Rio de Janeiro; em São Paulo, muitos passavam pela Hospedaria dos Imigrantes, hoje Museu da Imigração.","Para pesquisar antepassados italianos, os registros de batismo das paróquias de origem e as listas de desembarque dos navios são fontes preciosas."],
w:[["emigrare","emigrar"],["l'antenato","o antepassado"],["la nave","o navio"],["il porto","o porto"],["la piantagione","a fazenda, a plantação"],["la vite","a videira"]],
q:[["Quando arrivano molti italiani in Brasile?",["Tra il 1875 e il 1920","Nel 1500","Dopo il 2000","Nel 1946"],0],["Dove lavorano molti di loro a São Paulo?",["Nelle miniere","Nelle piantagioni di caffè","Nei porti","Nelle banche"],1],["Che cos'è il talian?",["Un dolce","Un dialetto di base veneta parlato nel Sud del Brasile","Una festa","Un quartiere"],1],["Da quale parola italiana viene «tchau»?",["Ciao","Ciò","Chiaro","Caro"],0]]
}
];
/* ───────── LEGGERE AD ALTA VOCE ───────── */
/* {t, lvl, text (paragrafi separati da \n\n, glosse [[a|b]]), pron:[parole con accento], ask:[domande per parlare]} */
const TESTI = [
{t:'Il mercato del sabato', lvl:'A1', text:`Il sabato mattina vado al mercato con mia madre. Il mercato è in piazza, vicino alla chiesa. Ci sono tante [[bancarelle|barracas]]: frutta, verdura, formaggi, pane e fiori.

Mia madre compra sempre le mele, i pomodori e un po' di formaggio. Io compro i fiori per la cucina. Il signor Luigi vende le [[pesche|pêssegos]] più buone della città. È simpatico e parla molto!

Alle undici prendiamo un caffè al bar della piazza e poi torniamo a casa. Il sabato è il mio giorno preferito.`,
pron:['MER-ca-to','SA-ba-to','CHIE-sa (ch = k)','for-MAG-gi (gg = dj)','PE-sche (sch = sk)'], ask:['Che cosa compri al mercato?','Qual è il tuo giorno preferito? Perché?']},
{t:'Una cartolina da Roma', lvl:'A1', text:`Cara Giulia,
ti scrivo da Roma! La città è bellissima e fa molto caldo. Il nostro albergo è piccolo ma comodo, vicino a Piazza Navona.

Ogni giorno camminiamo tanto. Ieri abbiamo visto il Colosseo e la Fontana di Trevi. Oggi visitiamo i Musei Vaticani. La sera mangiamo in una trattoria: la carbonara è buonissima!

Torno a casa lunedì. Ti porto un regalo.
Un bacio,
Anna`,
pron:['CA-ra','al-BER-go','Co-los-SE-o','buo-NIS-si-ma','re-GA-lo'], ask:['Quale città vuoi visitare in Italia?','Che cosa mangi in vacanza?']},
{t:'La mia giornata', lvl:'A1', text:`Mi sveglio alle sette e mezza. Mi alzo, faccio la doccia e bevo un caffè. Poi prendo l'autobus e vado al lavoro.

Lavoro in un ufficio in centro. A mezzogiorno mangio con i colleghi. Il pomeriggio lavoro ancora tre ore.

La sera torno a casa, cucino e leggo un libro. Qualche volta guardo un film. Vado a letto verso le undici. Sono stanca, ma contenta.`,
pron:['MEZ-za (zz = dz)','DOC-cia','uf-FI-cio','mez-zo-GIOR-no','qual-che VOL-ta'], ask:['Com\'è la tua giornata?','A che ora ti svegli di solito?']},
{t:'Il nonno e il treno', lvl:'A2', text:`Mio nonno ha ottantadue anni e ama i treni. Da giovane lavorava in ferrovia: guidava i treni tra Bologna e Firenze. Conosce ogni [[galleria|túnel]] e ogni stazione della linea.

Quando ero piccola, la domenica mi portava alla stazione. Ci sedevamo su una panchina e guardavamo passare i treni. Lui mi raccontava storie di viaggi, di neve e di passeggeri strani.

Oggi il nonno non guida più, ma ogni domenica va ancora alla stazione. Adesso ci vado anch'io, con mia figlia. E il nonno racconta le stesse storie, con lo stesso sorriso.`,
pron:['ot-tan-ta-DU-e','fer-ro-VI-a','gal-le-RI-a','pas-seg-GE-ri','sor-RI-so'], ask:['Chi è una persona importante della tua famiglia? Com\'è?','Che cosa facevi la domenica da piccola?']},
{t:'La pasta al pomodoro', lvl:'A2', text:`Per quattro persone servono trecentoventi grammi di spaghetti, una [[passata|molho de tomate peneirado]] di pomodoro, uno spicchio d'aglio, olio extravergine d'oliva, sale e qualche foglia di basilico.

Prima metti l'olio in una padella e fai [[soffriggere|dourar levemente]] l'aglio per un minuto. Poi aggiungi la passata, un pizzico di sale e lascia cuocere per quindici minuti.

Nel frattempo porta a bollore una pentola d'acqua, aggiungi il sale e butta la pasta. Quando è al dente, scolala e mettila nella padella con il sugo. Mescola bene, aggiungi il basilico e servi subito. Buon appetito!`,
pron:['spa-GHET-ti (gh = g)','SPIC-chio','A-glio (gli = lh)','ba-SI-li-co','pen-TO-la'], ask:['Qual è il tuo piatto preferito? Come si prepara?','Cucini spesso? Che cosa?']},
{t:'Il primo giorno di lavoro', lvl:'A2', text:`Lunedì è stato il mio primo giorno nel nuovo lavoro. Ero molto nervosa: mi sono svegliata alle sei, anche se dovevo essere in ufficio alle nove.

Sono arrivata in anticipo e ho aspettato al bar di fronte. Alle nove meno cinque sono entrata. La mia responsabile, Elena, mi ha presentato a tutti i colleghi e mi ha mostrato la mia scrivania, vicino alla finestra.

La mattina è passata velocissima. A pranzo i colleghi mi hanno portato in una trattoria lì vicino e abbiamo parlato di tutto, non solo di lavoro. Quando sono tornata a casa, ero stanca ma felice.`,
pron:['ner-VO-sa','re-spon-sa-BI-le','scri-va-NI-a','ve-lo-CIS-si-ma','trat-to-RI-a'], ask:['Racconta il tuo primo giorno di lavoro o di scuola.','Come ti senti quando cominci qualcosa di nuovo?']},
{t:'Il dialetto di mia nonna', lvl:'B1', text:`Mia nonna è nata in un paesino della Calabria e per tutta la vita ha parlato soprattutto il dialetto. L'italiano lo capiva benissimo, ma diceva che le parole del dialetto erano «più vere», più vicine alle cose.

Quando ero bambina non capivo quasi niente di quello che diceva, e lei rideva delle mie risposte sbagliate. Poi, un'estate, ho cominciato a scrivere su un quaderno le sue espressioni preferite, con la traduzione accanto. Alla fine dell'estate il quaderno era pieno.

Oggi la nonna non c'è più, ma quel quaderno è sulla mia libreria. Ogni tanto lo apro e leggo ad alta voce qualche frase. Non ho il suo accento, naturalmente, ma mi sembra di sentire la sua voce.`,
pron:['pa-e-SI-no','sop-rat-TUT-to','ben-NIS-si-mo','e-spres-SIO-ni','ac-CEN-to'], ask:['Nella tua famiglia si parla un dialetto o una lingua diversa? Racconta.','Quali parole o espressioni ti ricordano una persona cara?']},
{t:'Vivere su un\'isola', lvl:'B1', text:`Da tre anni vivo a Procida, una piccola isola nel golfo di Napoli. Prima abitavo a Milano e lavoravo in un'agenzia di pubblicità: correvo sempre, dalla mattina alla sera.

Qui la vita ha un altro ritmo. Il traghetto per Napoli parte ogni ora, e se lo perdi non succede niente: aspetti il prossimo, prendi un caffè, chiacchieri con qualcuno. All'inizio questa lentezza mi innervosiva; adesso non potrei più farne a meno.

Certo, l'isola ha anche i suoi limiti. D'inverno molti negozi chiudono e per andare dal medico specialista bisogna prendere la nave. Ma quando la sera guardo il mare dal porto, con le case colorate che si accendono una dopo l'altra, penso di aver fatto la scelta giusta.`,
pron:['PRO-ci-da','pub-bli-CI-tà','tra-GHET-to','in-ner-vo-SI-va','spe-cia-LI-sta'], ask:['Preferisci vivere in una grande città o in un posto piccolo? Perché?','Che cosa cambieresti nel ritmo della tua vita?']},
{t:'La bicicletta', lvl:'B1', text:`In molte città italiane la bicicletta sta tornando di moda. A Ferrara, chiamata «la città delle biciclette», quasi tutti si spostano su due ruote: studenti, impiegati, pensionati con il cesto della spesa.

Andare in bicicletta ha molti vantaggi. Non inquina, non costa quasi niente, fa bene alla salute e spesso è più veloce della macchina, soprattutto in centro. Inoltre permette di vedere la città in un altro modo, più lento e più attento.

Non mancano però i problemi: in alcune città le piste ciclabili sono poche e pericolose, e i furti di biciclette sono frequenti. Per questo molti chiedono ai Comuni di investire di più. Se le strade fossero più sicure, dicono, ancora più persone lascerebbero l'auto a casa.`,
pron:['bi-ci-CLET-ta','FER-ra-ra','van-TAG-gi','ci-CLA-bi-li','pe-ri-CO-lo-se'], ask:['Come ti sposti in città? Quali sono i vantaggi e gli svantaggi?','Che cosa dovrebbe fare il Comune della tua città per i ciclisti?']},
{t:'Il lavoro che cambia', lvl:'B2', text:`Fino a pochi decenni fa, per molti italiani il «posto fisso» era il sogno di una vita: entrare in un'azienda o nella pubblica amministrazione a vent'anni e restarci fino alla pensione. Oggi questo modello sembra appartenere a un'altra epoca.

I giovani cambiano lavoro più spesso, a volte per scelta, più spesso per necessità. Molti lavorano da remoto per aziende che hanno sede in altri Paesi, altri alternano periodi di lavoro e di formazione. Secondo alcuni sociologi, la stabilità non è scomparsa: ha semplicemente cambiato forma, e oggi coincide più con le competenze che con il contratto.

Resta il fatto che l'incertezza ha un prezzo. Senza un reddito stabile è più difficile chiedere un mutuo, fare progetti, decidere di avere figli. Il vero problema, forse, non è la flessibilità in sé, ma il fatto che spesso non sia accompagnata da tutele adeguate.`,
pron:['de-CEN-ni','am-mi-ni-stra-ZIO-ne','so-CIO-lo-gi','com-pe-TEN-ze','ade-GUA-te'], ask:['Per te è meglio un lavoro stabile o un lavoro flessibile? Argomenta.','Come è cambiato il mondo del lavoro nel tuo Paese?']},
{t:'Le città e il turismo', lvl:'B2', text:`Ogni anno milioni di turisti visitano Venezia, Firenze e le Cinque Terre. Il turismo porta lavoro e ricchezza, ma in alcuni luoghi ha raggiunto livelli che molti residenti considerano insostenibili.

Nei centri storici gli affitti brevi per i turisti hanno fatto salire i prezzi delle case, e molte famiglie sono state costrette a trasferirsi in periferia. Al posto delle botteghe artigiane sono comparsi negozi di souvenir tutti uguali. Il rischio, dicono gli urbanisti, è che le città diventino scenografie: belle da fotografare, ma senza vita.

Alcune amministrazioni hanno cominciato a reagire: Venezia, per esempio, ha introdotto un contributo d'accesso nei giorni di maggiore affluenza. Le opinioni sono divise. C'è chi pensa che sia un passo necessario e chi teme che trasformi la città in un museo a pagamento.`,
pron:['in-so-ste-NI-bi-li','re-si-DEN-ti','bot-TE-ghe','sce-no-gra-FI-e','af-flu-EN-za'], ask:['Il turismo di massa è un problema o un\'opportunità? Argomenta.','Come si potrebbe proteggere una città molto turistica?']},
{t:'Il silenzio', lvl:'B2', text:`Viviamo immersi nel rumore: il traffico, le notifiche del telefono, la musica nei negozi, la televisione accesa anche quando nessuno la guarda. Ci siamo talmente abituati che il silenzio, quando arriva, quasi ci mette a disagio.

Eppure il silenzio non è un vuoto. Gli scienziati hanno osservato che brevi momenti di quiete abbassano il ritmo cardiaco e aiutano la concentrazione. Ma al di là dei dati, chiunque abbia passato qualche ora in montagna o in un monastero sa che il silenzio cambia il modo di pensare: i pensieri rallentano, si fanno più chiari.

Forse non possiamo eliminare il rumore dalle nostre vite. Possiamo però difendere qualche spazio di quiete: una passeggiata senza cuffie, un pasto senza telefono, dieci minuti la sera con la luce spenta. Non è poco.`,
pron:['im-MER-si','no-ti-FI-che','di-SA-gio','car-DI-a-co','mo-NA-ste-ro'], ask:['Riesci a stare in silenzio? Che cosa provi?','Quali abitudini hai per ridurre il rumore nella tua giornata?']},
{t:'Elogio della lentezza', lvl:'C1', text:`Ci è stato insegnato che il tempo è denaro, e che sprecarlo sia quasi una colpa. Così riempiamo ogni minuto: ascoltiamo podcast mentre cuciniamo, rispondiamo alle email in coda alla posta, leggiamo i titoli dei giornali senza mai arrivare in fondo agli articoli. Ne risulta una vita più densa, ma non necessariamente più ricca.

La lentezza, al contrario, viene spesso confusa con la pigrizia o con l'inefficienza. In realtà presuppone un'attenzione che la fretta non consente. Chi impara una lingua lo sa bene: non si arriva alla padronanza accumulando regole, ma lasciando sedimentare le parole, tornando sugli stessi testi, accettando di non capire subito.

Non si tratta, beninteso, di rinunciare alla rapidità quando serve. Si tratta di restituire alle cose il loro tempo: quello della lettura, della conversazione, dell'apprendimento. Un tempo che non si misura in risultati immediati, ma in ciò che, lentamente, diventa nostro.`,
pron:['spre-CAR-lo','pi-GRI-zia','pre-sup-PO-ne','pa-dro-NAN-za','se-di-men-TA-re'], ask:['La lentezza è un valore o un lusso? Argomenta con esempi.','Che cosa hai imparato lentamente nella tua vita?']},
{t:'La lingua che abitiamo', lvl:'C1', text:`Si dice spesso che una lingua non è soltanto uno strumento di comunicazione, ma una casa: un luogo in cui si abita, con le sue stanze familiari e i suoi angoli ancora sconosciuti. Chi emigra lo sperimenta sulla propria pelle. Per anni continua a contare, a sognare, a imprecare nella lingua madre, mentre la nuova lingua resta un abito elegante ma un po' stretto.

Poi, quasi senza accorgersene, qualcosa cambia. Una battuta che fa ridere senza bisogno di tradurla mentalmente; una parola che sembra l'unica giusta per dire una certa sfumatura; un sogno, finalmente, nella lingua nuova. È in quei momenti che la casa straniera comincia a diventare propria.

Non per questo la prima lingua viene abbandonata. Anzi, chi vive tra più lingue scopre di avere più stanze a disposizione, e che ognuna gli permette di guardare il mondo da una finestra diversa.`,
pron:['co-mu-ni-ca-ZIO-ne','spe-ri-MEN-ta','im-pre-CA-re','ac-cor-GER-se-ne','sfu-ma-TU-ra'], ask:['Che rapporto hai con le lingue che parli? Ti senti diversa in ognuna?','Racconta un momento in cui una lingua straniera ti è sembrata «tua».']}
];
const SCIOGLI = [
["Trentatré trentini entrarono a Trento, tutti e trentatré trotterellando.","tr + doppie"],
["Sopra la panca la capra campa, sotto la panca la capra crepa.","p e c"],
["Apelle figlio di Apollo fece una palla di pelle di pollo.","doppie: ll"],
["Tigre contro tigre.","tr / gr"],
["Sereno è, sereno sarà, se non sarà sereno si rasserenerà.","r e s"],
["Chi ama chiama chi ama, chi chiama chi ama chiama chi ama.","chi = ki"],
["Se l'arcivescovo di Costantinopoli si volesse disarcivescoviscostantinopolizzare…","sc e ritmo"],
["Il cuoco cuoce in cucina e dice che la cuoca giace e tace perché sua cugina non cuoce.","c dura e dolce"]
];

/* ───────── ASCOLTO: dialoghi ───────── */
/* righe [speaker, testo]; speaker A/B/N (narratore) */
const ASCOLTI = [
{t:'In albergo', lvl:'A1', lines:[
['A','Buonasera! Benvenuta all\'Hotel Belvedere.'],['B','Buonasera. Ho una prenotazione a nome Costa, Laura Costa.'],['A','Sì, ecco: una camera singola per tre notti. Mi dà un documento, per favore?'],['B','Certo, ecco il passaporto. A che ora è la colazione?'],['A','Dalle sette alle dieci, al primo piano. La sua camera è la numero quarantadue, al quarto piano. L\'ascensore è a destra.'],['B','Grazie. C\'è il wi-fi?'],['A','Sì, la password è sul biglietto con la chiave. Buona permanenza!']],
q:[["Per quante notti è la prenotazione?",["Una","Due","Tre","Quattro"],2],["Quando c'è la colazione?",["Dalle sei alle nove","Dalle sette alle dieci","Dalle otto alle undici","Tutto il giorno"],1],["Qual è il numero della camera?",["Ventiquattro","Quarantadue","Quattordici","Dodici"],1],["Dov'è la password del wi-fi?",["Al bar","Sul biglietto con la chiave","Alla reception","Non c'è"],1]]},
{t:'Annunci alla stazione', lvl:'A1', lines:[
['N','Attenzione. Il treno regionale per Firenze delle ore nove e quindici partirà dal binario sei anziché dal binario tre.'],['N','Il treno Frecciarossa da Milano per Roma è in arrivo al binario dieci con un ritardo di venti minuti. Ci scusiamo per il disagio.'],['N','Si avvisano i signori viaggiatori che il treno per Bologna delle ore dieci è stato cancellato.']],
q:[["Da quale binario parte il treno per Firenze?",["Tre","Sei","Dieci","Nove"],1],["A che ora parte il treno per Firenze?",["9:15","9:50","10:00","6:15"],0],["Quanti minuti di ritardo ha il Frecciarossa?",["Dieci","Quindici","Venti","Trenta"],2],["Che cosa succede al treno per Bologna?",["Parte in ritardo","È cancellato","Cambia binario","Parte in anticipo"],1]]},
{t:'Le previsioni del tempo', lvl:'A2', lines:[
['N','Ed ecco le previsioni del tempo per domani. Al Nord il cielo sarà nuvoloso, con piogge in Lombardia e in Veneto, soprattutto nel pomeriggio. Le temperature scenderanno di qualche grado: a Milano la massima sarà di dodici gradi.'],['N','Al Centro tempo variabile: sole la mattina e qualche nuvola la sera. A Roma diciotto gradi.'],['N','Al Sud e sulle isole bel tempo e temperature miti: a Palermo fino a ventidue gradi. Mare calmo. Attenzione al vento forte sulla Sardegna.']],
q:[["Dove pioverà domani?",["In Sicilia","In Lombardia e in Veneto","A Roma","In Sardegna"],1],["Quale sarà la temperatura massima a Milano?",["Diciotto gradi","Dodici gradi","Ventidue gradi","Dieci gradi"],1],["Che tempo farà a Palermo?",["Pioggia","Bel tempo","Neve","Nebbia"],1],["Dove ci sarà vento forte?",["In Sardegna","A Roma","A Milano","In Veneto"],0]]},
{t:'Un messaggio in segreteria', lvl:'A2', lines:[
['A','Buongiorno, sono Francesca dello studio dentistico Ferri. Chiamo per l\'appuntamento della signora Bianchi di giovedì alle quattro.'],['A','Purtroppo il dottore giovedì non c\'è, quindi dobbiamo spostare la visita. Possiamo proporle venerdì alle dieci e mezza oppure lunedì prossimo alle tre.'],['A','Ci richiami, per favore, al numero zero due, quattro cinque sei, sette otto nove. Lo studio è aperto dalle nove all\'una e dalle tre alle sette. Grazie e buona giornata.']],
q:[["Perché chiama Francesca?",["Per confermare l'appuntamento","Per spostare l'appuntamento","Per chiedere un pagamento","Per un'emergenza"],1],["Quando era l'appuntamento?",["Giovedì alle quattro","Venerdì alle dieci e mezza","Lunedì alle tre","Mercoledì alle quattro"],0],["Che cosa propone?",["Venerdì alle 10:30 o lunedì alle 15","Solo martedì","Giovedì alle 16","Sabato mattina"],0],["Quando è chiuso lo studio?",["Dalle nove all'una","Dall'una alle tre","Dalle tre alle sette","Mai"],1]]},
{t:'Una stanza in affitto', lvl:'B1', lines:[
['A','Pronto?'],['B','Buongiorno, chiamo per l\'annuncio della stanza in via Mazzini. È ancora libera?'],['A','Sì, è libera dal primo del mese. È una stanza singola in un appartamento con altre due ragazze, una studentessa e un\'infermiera.'],['B','Quanto costa al mese?'],['A','Trecentottanta euro, spese comprese, tranne il riscaldamento, che dividiamo in tre. Chiediamo anche due mensilità di caparra.'],['B','Va bene. La stanza ha la scrivania? Lavoro da casa due giorni alla settimana.'],['A','Sì, c\'è una scrivania vicino alla finestra. Però il wi-fi a volte è lento, te lo dico subito.'],['B','Ah, capisco. Posso venire a vederla?'],['A','Certo. Domani dopo le sei va bene?'],['B','Perfetto, a domani!']],
q:[["Con chi vivrebbe la persona che chiama?",["Con una famiglia","Con una studentessa e un'infermiera","Da sola","Con il proprietario"],1],["Che cosa NON è compreso nel prezzo?",["L'acqua","Il riscaldamento","Il wi-fi","La luce"],1],["Perché chiede della scrivania?",["Studia all'università","Lavora da casa due giorni alla settimana","Ama leggere","Non lo dice"],1],["Che problema segnala la ragazza?",["La stanza è piccola","Il wi-fi a volte è lento","C'è rumore","La finestra è rotta"],1]]},
{t:'In farmacia', lvl:'B1', lines:[
['A','Buongiorno, mi dica.'],['B','Buongiorno. Da ieri ho mal di gola e un po\' di febbre. Avrei bisogno di qualcosa, ma non vorrei prendere antibiotici.'],['A','Ha tosse?'],['B','No, solo la gola che brucia, soprattutto la mattina.'],['A','Allora le consiglio queste pastiglie da sciogliere in bocca, tre o quattro al giorno, e un antinfiammatorio dopo i pasti, se la febbre supera i trentotto. Beva molta acqua calda con il miele.'],['B','E se fra tre giorni non sto meglio?'],['A','In quel caso vada dal medico: potrebbe servire una visita. Per gli antibiotici, comunque, ci vuole la ricetta.']],
q:[["Che sintomi ha la cliente?",["Tosse e febbre","Mal di gola e un po' di febbre","Mal di testa","Mal di stomaco"],1],["Quante pastiglie al giorno consiglia la farmacista?",["Una","Tre o quattro","Dieci","Due"],1],["Quando deve prendere l'antinfiammatorio?",["Prima di dormire","Dopo i pasti, se la febbre supera i 38","Ogni ora","A digiuno"],1],["Che cosa serve per gli antibiotici?",["Niente","La ricetta","Un documento","Pagare in contanti"],1]]},
{t:'Il notiziario', lvl:'B2', lines:[
['N','Buonasera, ecco le principali notizie. Apriamo con il maltempo: forti piogge hanno colpito la Liguria nella notte. Alcune strade sono state chiuse in via precauzionale, ma non si registrano feriti. Le scuole di Genova resteranno chiuse anche domani.'],['N','Economia: secondo i dati diffusi oggi, la vendita di biciclette elettriche è cresciuta del quindici per cento rispetto all\'anno scorso. A trainare il mercato sono soprattutto le grandi città del Nord.'],['N','Cultura: si è aperta oggi a Torino una mostra dedicata ai manifesti del cinema italiano degli anni Sessanta. L\'esposizione resterà aperta fino a marzo e l\'ingresso sarà gratuito la prima domenica del mese.']],
q:[["Che cosa è successo in Liguria?",["Un terremoto","Forti piogge","Uno sciopero","Un incendio"],1],["Che cosa resterà chiuso domani a Genova?",["Le strade","Le scuole","I negozi","L'aeroporto"],1],["Di quanto sono cresciute le vendite di biciclette elettriche?",["Del 5%","Del 15%","Del 50%","Del 25%"],1],["Quando l'ingresso alla mostra sarà gratuito?",["Ogni giorno","La prima domenica del mese","Il sabato","Mai"],1]]},
{t:'Intervista a una restauratrice', lvl:'B2', lines:[
['A','Oggi abbiamo con noi Marta Ruggeri, restauratrice di affreschi. Marta, come si diventa restauratori?'],['B','Serve una formazione lunga: cinque anni di studi specialistici, e poi tanta pratica nei cantieri. È un mestiere che si impara soprattutto guardando lavorare chi ha più esperienza.'],['A','Qual è la parte più difficile del suo lavoro?'],['B','Sapersi fermare. Il restauro non deve rendere un\'opera «nuova», ma conservarla e renderla leggibile. Ogni intervento deve essere riconoscibile e, se possibile, reversibile.'],['A','C\'è un lavoro a cui è particolarmente legata?'],['B','Un piccolo affresco in una chiesa di campagna, in Umbria. Nessuno lo considerava importante. Quando abbiamo tolto lo sporco, sono comparsi colori che nessuno vedeva da secoli. Gli abitanti del paese venivano ogni sera a guardare: per loro era come ritrovare un pezzo di famiglia.']],
q:[["Come si impara il mestiere, secondo Marta?",["Solo studiando libri","Con lunghi studi e molta pratica","Con un corso online","Da soli"],1],["Qual è la parte più difficile del lavoro?",["Trovare clienti","Sapersi fermare","Lavorare in alto","Usare i colori"],1],["Secondo Marta, il restauro deve…",["rendere l'opera nuova","conservare l'opera e renderla leggibile","cambiare i colori","nascondere i danni"],1],["Perché l'affresco umbro è speciale per lei?",["È molto famoso","Gli abitanti l'hanno sentito come un pezzo di famiglia","È il più grande d'Italia","L'ha dipinto lei"],1]]}
];

/* ───────── FRASARIO ───────── */
const FRASARIO = [
{t:'Fare conoscenza', lvl:'A1', f:[["Piacere, mi chiamo…","Prazer, eu me chamo…"],["Di dove sei?","De onde você é?"],["Sono brasiliana, ma vivo all'estero.","Sou brasileira, mas moro no exterior."],["Che lavoro fai?","Em que você trabalha?"],["Da quanto tempo studi l'italiano?","Há quanto tempo você estuda italiano?"],["Scusa, puoi parlare più lentamente?","Desculpa, pode falar mais devagar?"],["Come si dice … in italiano?","Como se diz … em italiano?"],["Non ho capito, puoi ripetere?","Não entendi, pode repetir?"]]},
{t:'Al bar', lvl:'A1', f:[["Un caffè, per favore.","Um café (espresso), por favor."],["Vorrei un cappuccino e un cornetto.","Queria um cappuccino e um croissant."],["Quant'è?","Quanto é?"],["Posso pagare con la carta?","Posso pagar com cartão?"],["Un bicchiere d'acqua, per favore.","Um copo d'água, por favor."],["Dov'è il bagno?","Onde é o banheiro?"],["Grazie, buona giornata!","Obrigada, bom dia!"]]},
{t:'Al ristorante', lvl:'A1–A2', f:[["Avete un tavolo per due?","Vocês têm uma mesa para dois?"],["Ho prenotato a nome…","Fiz uma reserva em nome de…"],["Che cosa ci consiglia?","O que o senhor nos recomenda?"],["Sono vegetariana / allergica a…","Sou vegetariana / alérgica a…"],["Per me un primo e un contorno.","Para mim um primeiro prato e um acompanhamento."],["Il conto, per favore.","A conta, por favor."],["È tutto buonissimo, complimenti!","Está tudo delicioso, parabéns!"]]},
{t:'In albergo', lvl:'A2', f:[["Ho una prenotazione a nome…","Tenho uma reserva em nome de…"],["La colazione è compresa?","O café da manhã está incluído?"],["A che ora devo lasciare la camera?","A que horas tenho que deixar o quarto?"],["L'aria condizionata non funziona.","O ar-condicionado não funciona."],["Posso lasciare la valigia qui?","Posso deixar a mala aqui?"],["Mi può chiamare un taxi?","Pode me chamar um táxi?"]]},
{t:'In stazione e in giro', lvl:'A2', f:[["Un biglietto per Firenze, andata e ritorno.","Uma passagem para Florença, ida e volta."],["Da quale binario parte?","De qual plataforma sai?"],["Il treno è in ritardo?","O trem está atrasado?"],["Devo convalidare il biglietto?","Tenho que validar a passagem?"],["Scusi, come arrivo al centro?","Com licença, como chego ao centro?"],["È lontano a piedi?","É longe a pé?"],["Mi sono persa.","Eu me perdi."]]},
{t:'Dal medico e in farmacia', lvl:'A2–B1', f:[["Non mi sento bene.","Não estou me sentindo bem."],["Ho mal di testa / di gola / di pancia.","Estou com dor de cabeça / de garganta / de barriga."],["Ho la febbre da due giorni.","Estou com febre há dois dias."],["Sono allergica alla penicillina.","Sou alérgica a penicilina."],["Ci vuole la ricetta?","Precisa de receita?"],["Quante volte al giorno devo prenderlo?","Quantas vezes por dia tenho que tomar?"]]},
{t:'Al telefono', lvl:'B1', f:[["Pronto? Parlo con…?","Alô? Estou falando com…?"],["Chiamo per…","Estou ligando por causa de…"],["Mi può passare…, per favore?","Pode me passar para…, por favor?"],["Può richiamarmi più tardi?","Pode me ligar de volta mais tarde?"],["La linea è disturbata, non la sento bene.","A linha está ruim, não ouço bem."],["Le lascio il mio numero.","Deixo o meu número."]]},
{t:'Fare amicizia e uscire', lvl:'B1', f:[["Ti va di prendere un aperitivo?","Topa tomar um aperitivo?"],["Che fai stasera?","O que você vai fazer hoje à noite?"],["Ci sto! / Purtroppo non posso.","Topo! / Infelizmente não posso."],["Ci vediamo alle otto davanti al cinema.","A gente se vê às oito em frente ao cinema."],["Che bello rivederti!","Que bom te ver de novo!"],["Dai, offro io!","Deixa, eu pago!"]]},
{t:'Al lavoro', lvl:'B1–B2', f:[["Possiamo fissare una riunione per giovedì?","Podemos marcar uma reunião para quinta?"],["Ti mando il documento entro oggi.","Te mando o documento ainda hoje."],["Scusate il ritardo.","Desculpem o atraso."],["Potresti spiegarmi meglio questo punto?","Você poderia me explicar melhor este ponto?"],["Sono d'accordo, però propongo di…","Concordo, mas proponho…"],["Ci aggiorniamo la settimana prossima.","Voltamos a conversar semana que vem."]]},
{t:'Esprimere un\'opinione', lvl:'B2', f:[["Secondo me…","Na minha opinião…"],["Dal mio punto di vista…","Do meu ponto de vista…"],["Credo che sia importante…","Acho que é importante…"],["Non sono del tutto d'accordo.","Não concordo totalmente."],["Hai ragione, ma bisogna considerare che…","Você tem razão, mas é preciso considerar que…"],["Da un lato…, dall'altro…","Por um lado…, por outro…"],["In fin dei conti…","No fim das contas…"]]},
{t:'Argomentare e dibattere', lvl:'C1', f:[["Vorrei soffermarmi su un aspetto…","Gostaria de me deter num aspecto…"],["Non è tanto una questione di…, quanto di…","Não é tanto uma questão de…, mas de…"],["Ammesso che sia vero…","Supondo que seja verdade…"],["Questo non significa che…","Isso não quer dizer que…"],["Mi permetto di dissentire.","Permito-me discordar."],["Per riassumere…","Para resumir…"],["Ne consegue che…","Disso decorre que…"]]},
{t:'Riempitivi: suonare naturale', lvl:'B1–C1', f:[["Allora…","Então…"],["Cioè…","Quer dizer…"],["Insomma…","Enfim…"],["Diciamo che…","Digamos que…"],["Boh, non lo so.","Sei lá, não sei."],["Magari!","Quem dera!"],["Figurati!","Imagina! (de nada)"],["Dai!","Vai! / Ah, para!"],["Ecco!","Isso! / Pronto!"]]}
];

/* ───────── CONVERSAZIONE CON L'IA ───────── */
const ROLEPLAY = [
{t:'Al bar', lvl:'A1', role:'un barista simpatico di un bar di Roma', goal:'ordinare una colazione e pagare'},
{t:'Fare conoscenza', lvl:'A1', role:'una ragazza italiana conosciuta a una festa, curiosa e gentile', goal:'presentarsi, dire di dove sei, che lavoro fai e perché studi italiano'},
{t:'Chiedere indicazioni', lvl:'A1', role:'un signore anziano di Bologna, cordiale, che spiega la strada', goal:'arrivare dalla stazione alla Piazza Maggiore'},
{t:'In albergo', lvl:'A2', role:'il receptionist di un albergo a Firenze', goal:'fare il check-in e risolvere un problema con la camera'},
{t:'Al ristorante', lvl:'A2', role:'un cameriere di una trattoria napoletana, un po\' scherzoso', goal:'ordinare una cena completa e chiedere consigli'},
{t:'Dal medico', lvl:'A2', role:'un medico di base, calmo e professionale', goal:'spiegare i sintomi di un raffreddore e capire la terapia'},
{t:'Cercare casa', lvl:'B1', role:'una proprietaria che affitta una stanza a Torino', goal:'chiedere prezzo, spese, regole della casa e fissare una visita'},
{t:'Un reclamo in negozio', lvl:'B1', role:'un commesso di un negozio di elettronica', goal:'restituire un prodotto difettoso e ottenere il rimborso'},
{t:'Colloquio di lavoro', lvl:'B2', role:'una responsabile delle risorse umane di un\'azienda tecnologica milanese', goal:'presentare la propria esperienza, rispondere a domande difficili e chiedere informazioni sul contratto'},
{t:'Un dibattito tra amici', lvl:'B2', role:'un amico italiano con opinioni forti sul lavoro da remoto', goal:'difendere la propria opinione con argomenti e concedere qualcosa'},
{t:'Una telefonata formale', lvl:'B2', role:'un impiegato della segreteria di un\'università', goal:'chiedere informazioni sull\'iscrizione a un corso e sui documenti necessari'},
{t:'Intervista radiofonica', lvl:'C1', role:'una giornalista di una radio culturale', goal:'raccontare il proprio rapporto con le lingue e la migrazione, con riflessioni personali e argomentate'}
];

/* ───────── PROVA ORALE ───────── */
const ORALE = [
{lvl:'A2', t:'Presentazione', p:'Presentati: chi sei, di dove sei, che cosa fai, la tua famiglia, i tuoi interessi.', prep:30, talk:60},
{lvl:'A2', t:'La tua città', p:'Descrivi la città o il quartiere in cui vivi: che cosa c\'è, che cosa ti piace e che cosa no.', prep:30, talk:60},
{lvl:'A2', t:'Un fine settimana', p:'Racconta che cosa hai fatto lo scorso fine settimana.', prep:30, talk:60},
{lvl:'B1', t:'Un ricordo', p:'Racconta un viaggio importante della tua vita: dove, con chi, che cosa è successo, che cosa hai imparato.', prep:60, talk:120},
{lvl:'B1', t:'Abitudini', p:'Come è cambiata la tua vita negli ultimi cinque anni? Confronta passato e presente.', prep:60, talk:120},
{lvl:'B1', t:'Consigli', p:'Un amico vuole imparare una lingua straniera da solo. Che cosa gli consigli? Perché?', prep:60, talk:120},
{lvl:'B2', t:'Argomentare', p:'«Lo smartphone ci ha reso più soli.» Sei d\'accordo? Argomenta con esempi, considera anche il punto di vista opposto.', prep:90, talk:180},
{lvl:'B2', t:'Ipotesi', p:'Se potessi vivere un anno in qualsiasi città del mondo, quale sceglieresti e come cambierebbe la tua vita?', prep:90, talk:180},
{lvl:'B2', t:'Problema e soluzione', p:'Nella tua città il traffico è un problema serio. Proponi tre soluzioni e valutane vantaggi e svantaggi.', prep:90, talk:180},
{lvl:'C1', t:'Riflessione', p:'In che misura la lingua che parliamo influenza il nostro modo di pensare? Argomenta partendo dalla tua esperienza.', prep:120, talk:240},
{lvl:'C1', t:'Attualità', p:'Il turismo di massa sta trasformando molte città europee. Analizza il fenomeno, le sue cause e le possibili politiche per gestirlo.', prep:120, talk:240},
{lvl:'C1', t:'Etica', p:'L\'intelligenza artificiale nel lavoro: opportunità o minaccia? Esprimi una posizione articolata e rispondi alle possibili obiezioni.', prep:120, talk:240}
];

/* ───────── PARLA E ASCOLTA per unità: domande e ricerche video ───────── */
const USPEAK = {
101:{p:['Come ti chiami e di dove sei?','Dove abiti adesso?','Che lavoro fai?','Perché studi l\'italiano?','Come saluti una persona che non conosci?'],v:['pronuncia italiana per principianti','saluti in italiano presentarsi']},
102:{p:['Descrivi una persona della tua famiglia.','Quanti anni hai?','Com\'è il tuo carattere?','Di che nazionalità sono i tuoi amici?','Di che cosa hai paura?'],v:['verbi essere e avere italiano','descrivere una persona in italiano']},
103:{p:['Che cosa c\'è nella tua stanza?','Qual è il tuo oggetto preferito?','Quanti libri hai a casa?','Descrivi la tua cucina.','Che cosa c\'è nella tua borsa?'],v:['articoli determinativi italiano principianti','plurale dei nomi italiano']},
104:{p:['Che cosa fai la mattina?','Che lingue parli?','Che cosa mangi a pranzo?','Che cosa non fai mai?','Dove lavori o studi?'],v:['presente indicativo verbi regolari italiano','la mia giornata in italiano']},
105:{p:['Che cosa vuoi fare questo fine settimana?','Che cosa devi fare domani?','Dove vai in vacanza?','Che cosa sai fare bene?','Che cosa fai il sabato?'],v:['verbi irregolari andare fare venire italiano','verbi modali volere potere dovere']},
106:{p:['A che ora ti svegli?','Racconta la tua routine.','Quando è il tuo compleanno?','Qual è il tuo giorno preferito? Perché?','Quale stagione preferisci?'],v:['che ore sono in italiano','verbi riflessivi routine italiano']},
107:{p:['Che cosa c\'è nel tuo quartiere?','Come vai al lavoro?','Spiega come arrivare a casa tua dalla stazione.','Che cosa c\'è vicino a casa tua?','Qual è il posto più bello della tua città?'],v:['chiedere indicazioni in italiano','preposizioni semplici italiano']},
108:{p:['Che cosa ti piace mangiare?','Che musica ti piace?','Che cosa non ti piace fare?','Che cosa ordini al bar?','Qual è il tuo piatto italiano preferito?'],v:['ordinare al bar in italiano','verbo piacere spiegazione']},
1:{p:['Descrivi il tuo quartiere ideale.','Dove vai quando sei malata?','Che cosa compri al mercato?','Che cosa hai nello zaino?','Racconta il tuo sabato mattina.'],v:['preposizioni articolate italiano','fare la spesa al mercato italiano']},
2:{p:['Che cosa hai fatto ieri?','Racconta un viaggio andato storto.','A che ora ti sei svegliata stamattina?','Che film hai visto ultimamente?','Che cosa hai mangiato ieri sera?'],v:['passato prossimo essere o avere','raccontare un viaggio in italiano']},
3:{p:['Com\'era la tua casa da bambina?','Che cosa facevi d\'estate da piccola?','Racconta un ricordo d\'infanzia.','Che cosa stavi facendo ieri alle otto?','Com\'era la tua scuola?'],v:['imperfetto e passato prossimo differenza','trapassato prossimo italiano']},
4:{p:['Che cosa regali ai tuoi amici per il compleanno?','Hai prestato qualcosa a qualcuno di recente?','Che cosa ti hanno regalato l\'ultima volta?','Chi chiami quando hai un problema?','A chi racconti i tuoi segreti?'],v:['pronomi combinati glielo me lo','pronomi diretti e indiretti italiano']},
5:{p:['Quanto tempo ci metti per arrivare al lavoro?','Quanti caffè bevi al giorno?','Che cosa ne pensi dei social network?','Ci sei mai stata in Italia? Racconta.','Quando non ce la fai più, che cosa fai?'],v:['particelle ci e ne','ci vuole ci metto differenza']},
6:{p:['Come sarà la tua vita tra dieci anni?','Che cosa farai le prossime vacanze?','Che cosa faresti con un milione di euro?','Che consiglio daresti a chi comincia l\'italiano?','Che cosa ti hanno promesso e non hanno fatto?'],v:['futuro semplice italiano','condizionale presente e passato']},
7:{p:['Dai cinque consigli a un turista nella tua città.','Spiega una ricetta usando l\'imperativo.','Che cosa diresti a un amico stressato?','Come chiedi qualcosa a uno sconosciuto con il Lei?','Quali sono le regole della tua casa?'],v:['imperativo italiano con pronomi','imperativo formale Lei']},
8:{p:['Che cosa pensi del lavoro da remoto?','Che cosa speri per il futuro?','È importante che i bambini imparino le lingue? Perché?','Che cosa ti preoccupa del mondo di oggi?','Cerchi una casa: com\'è la casa che sogni?'],v:['congiuntivo presente spiegazione','penso che congiuntivo o indicativo']},
9:{p:['Che cosa pensavano i tuoi genitori del tuo lavoro?','Che cosa vorresti che cambiasse nella tua vita?','Racconta una decisione importante e le reazioni degli altri.','Magari…! Che cosa desideri?','Chi conosci che parla come se sapesse tutto?'],v:['congiuntivo imperfetto italiano','concordanza dei tempi congiuntivo']},
10:{p:['Se potessi vivere in Italia, dove vivresti?','Se avessi scelto un\'altra professione, che cosa faresti oggi?','Che cosa faresti se vincessi la lotteria?','Se fossi il sindaco della tua città, che cosa cambieresti?','Se avessi saputo l\'italiano da piccola, che cosa sarebbe cambiato?'],v:['periodo ipotetico italiano','se avessi saputo frasi ipotetiche']},
11:{p:['Spiega come si prepara un piatto tipico del tuo Paese.','Come si festeggia il Natale nella tua famiglia?','Che cosa si fa la domenica nel tuo Paese?','Descrivi un processo del tuo lavoro.','Quali regole vanno rispettate in ufficio?'],v:['si impersonale e si passivante','forma passiva italiano venire andare']},
12:{p:['Riferisci una conversazione di ieri.','Che cosa ti ha detto l\'ultima persona con cui hai parlato?','Racconta una storia usando «eppure», «anzi», «insomma».','Che libro italiano vorresti leggere?','Riassumi una notizia che hai letto oggi.'],v:['discorso indiretto italiano','connettivi italiano tuttavia eppure anzi']},
13:{p:['Descrivi la città da cui vieni.','Parla di una persona il cui lavoro ammiri.','Qual è il libro di cui parli di più?','Descrivi un luogo in cui ti senti a casa.','Chi è la persona con cui parli di più?'],v:['pronomi relativi cui il quale','il cui la cui italiano']},
14:{p:['Che abitudine hai smesso di avere?','Che cosa hai deciso di fare quest\'anno?','Di chi o di che cosa ti sei innamorata?','Che cosa sei riuscita a fare di cui sei orgogliosa?','Su chi puoi contare?'],v:['verbi con preposizione a di italiano','smettere di cominciare a']},
15:{p:['Racconta come te la sei cavata in una situazione difficile.','Che cosa ti fai fare dal parrucchiere?','Quando non te la senti di uscire, che cosa fai?','Ce l\'hai con qualcuno? Perché?','Come te la passi in questo periodo?'],v:['fare causativo italiano','cavarsela farcela prendersela']},
16:{p:['Presenta un reclamo a voce, in registro formale.','Spiega un progetto di lavoro come in una riunione.','Chiedi informazioni a un ufficio pubblico.','Riassumi un problema e proponi una soluzione formale.','Presentati come in un colloquio di lavoro.'],v:['email formale in italiano','registro formale italiano lessico']}
};
(function(){
'use strict';
