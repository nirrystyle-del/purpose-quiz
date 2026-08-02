var QUIZ_ASSET_BASE = new URL(".", document.currentScript.src).href;
/* ---------- sparkle field ---------- */
(function(){
var wrap = document.getElementById('sparkles');
var n = window.innerWidth < 600 ? 22 : 40;
for (var i = 0; i < n; i++) {
var s = document.createElement('div');
s.className = 'sp' + (Math.random() > .78 ? ' big' : '') +
(Math.random() > .6 ? ' rose' : '');
s.style.left = (Math.random() * 100) + '%';
s.style.top = (100 + Math.random() * 25) + '%';
s.style.animationDuration = (13 + Math.random() * 17) + 's';
s.style.animationDelay = (-Math.random() * 26) + 's';
wrap.appendChild(s);
}
})();
/* ---------- data ---------- */
var questions = [
{ t:"Když přemýšlíte o své práci nebo životním poslání, která myšlenka
se vám vrací nejčastěji?",
o:[["Vůbec nevím, čemu bych se chtěla věnovat.",[2,0,0,1,0,0]],
["Mám příliš mnoho zájmů a neumím si vybrat.",[0,1,0,2,0,0]],
["Myslím si, že už své poslání znám, ale zatím jsem nenašla odvahu se mu
naplno věnovat.",[0,0,2,0,0,0]],
["Už dlouho dělám něco, co mi nepřináší radost.",[0,0,0,0,2,0]]] },
{ t:"Z čeho máte největší obavy?",
o:[["Že promarním další roky v něčem, co není pro mě.",[0,0,0,1,2,0]],
["Že se rozhodnu špatně.",[2,0,0,1,0,0]],
["Že mě budou ostatní odsuzovat.",[0,0,2,0,0,0]],
["Že nikdy naplno nevyužiji svůj potenciál.",[0,1,0,0,0,2]]] },
{ t:"Která věta vám nejvíce připomíná vaše vlastní myšlenky?",
o:[["Možná vlastně žádný talent nemám.",[1,2,0,0,0,0]],
["Připadá mi, že všichni kolem už našli sami sebe, jen já
ne.",[0,0,0,2,1,0]],
["Cítím, že bych dokázala mnohem víc, ale jako bych stála na
místě.",[0,0,2,0,0,2]],
["Možná už je pozdě něco měnit.",[0,0,0,0,2,0]]] },
{ t:"Měly jste někdy činnost, která vám šla tak přirozeně, že jste ji
považovaly za samozřejmost?",
o:[["Ano, ale dodnes ji podceňuji.",[0,2,0,0,0,0]],
["Ano, ale už se jí nevěnuji.",[0,1,0,0,2,0]],
["Možná ano, ale nikdy jsem nad tím nepřemýšlela.",[1,2,0,0,0,0]],
["Ne.",[2,0,0,1,0,0]]] },
{ t:"Jak často přizpůsobujete svá rozhodnutí očekáváním ostatních?",
o:[["Téměř vždy.",[2,0,0,0,1,0]],
["Občas.",[1,0,0,1,0,0]],
["Jen výjimečně.",[0,0,2,0,0,0]],
["Prakticky nikdy.",[0,0,0,0,0,2]]] },
{ t:"Kdybyste měly jistotu, že uspějete, čemu byste se začaly věnovat už
zítra?",
o:[["Tvoření a kreativitě.",[0,2,1,0,0,0]],
["Pomoci druhým lidem.",[0,1,0,0,0,2]],
["Vlastnímu projektu nebo podnikání.",[0,0,1,0,0,2]],
["Upřímně nevím.",[2,0,0,1,0,0]]] },
{ t:"Kterou větu si říkáte nejčastěji?",
o:[["Je to až moc jednoduché na to, aby to mohlo být moje
poslání.",[0,2,0,0,0,0]],
["Takových lidí, jako jsem já, jsou tisíce.",[0,2,0,0,0,0]],
["Nejdřív musím být lepší, a teprve potom můžu začít.",[0,0,2,1,0,0]],
["Ještě nejsem připravená.",[1,0,2,1,0,0]]] },
{ t:"Kolikrát jste za posledních pět let začaly znovu od začátku?",
o:[["Ani jednou.",[0,0,0,0,2,0]],
["Jednou až dvakrát.",[0,0,0,0,0,2]],
["Třikrát až pětkrát.",[0,0,0,2,0,0]],
["Už jsem to přestala počítat.",[0,0,0,2,1,0]]] },
{ t:"Která věta s vámi nejvíce rezonuje?",
o:[["Mám pocit, že nežiji svůj vlastní život.",[0,0,0,0,2,0]],
["Pořád hledám sama sebe.",[1,0,0,2,0,0]],
["Uvnitř cítím, že jsem tady pro něco většího.",[0,0,0,0,0,2]],
["Připadá mi, že jsem ztratila spojení sama se sebou.",[2,0,0,0,1,0]]]
},
{ t:"Představte si, že zítra na sto procent poznáte své životní poslání.
Co ucítíte jako první?",
o:[["Úlevu.",[0,0,0,1,2,0]],
["Radost.",[0,1,0,0,0,2]],
["Strach.",[0,0,2,0,0,0]],
["Pocit, že do sebe všechno konečně zapadlo.",[0,1,0,0,0,2]]] }
];
var results = [
{
img: QUIZ_ASSET_BASE + "images/result-1.jpg",
title:"Ztratily jste spojení se svými skutečnými přáními",
body:'<p>Z vašich odpovědí je vidět, že problém nespočívá v tom, že
byste neměly své poslání. Spíše jste se příliš dlouho učily nedůvěřovat
samy sobě.</p>'+
'<p>Možná byly vaše sny a přání v dětství často zpochybňovány nebo vás
okolí přesvědčovalo, abyste si vybraly bezpečnější cestu. Postupně jste
si zvykly přemýšlet ne o tom, co chcete vy samy, ale o tom, co je
správné, rozumné a co schválí ostatní.</p>'+
'<p class="quote">„Ne… tohle není ono."</p>'+
'<p>Nejtěžší na celé situaci je, že člověk časem opravdu přestane vědět,
co si přeje. To ale neznamená, že odpověď ve vás není. Jen jste ji
příliš dlouho potlačovaly.</p>'+
'<p class="ask">Co jste dokázaly dělat celé hodiny? S čím za vámi
ostatní pravidelně chodili? Jaké sny jste odložily jen proto, že vám
připadaly příliš obyčejné?</p>'+
'<p>Je velmi pravděpodobné, že se vaše poslání už dlouho snaží upoutat
vaši pozornost. Jen pokaždé zvolíte bezpečnější cestu.</p>',
hint:"Datum narození může ukázat, kde jste přestaly důvěřovat samy sobě
a skrze jaké talenty se můžete nejsnáze vrátit ke své skutečné cestě."
},
{
img: QUIZ_ASSET_BASE + "images/result-2.jpg",
title:"Podceňujete svůj největší talent",
body:'<p>Z vašich odpovědí je vidět, že vaše poslání se s největší
pravděpodobností nachází přímo před vámi už velmi dlouho.</p>'+
'<p>Největší talent často vůbec nepůsobí jako talent. Přichází tak
přirozeně, že se zdá být úplně obyčejný.</p>'+
'<p class="quote">„To přece umí každý."<br>„Je to až moc
jednoduché."</p>'+
'<p>Právě proto můžete své poslání hledat všude možně, jen ne tam, kde
už dávno je.</p>'+
'<p>Možná umíte s lehkostí vysvětlovat složité věci, inspirovat druhé,
přicházet s novými nápady, dobře cítíte lidi nebo máte schopnost, kterou
už samy ani nevnímáte.</p>'+
'<p>Možná si myslíte, že skutečné poslání musí být složité. Ve
skutečnosti to bývá často přesně naopak.</p>'+
'<p class="ask">Co mi jde tak přirozeně, že jsem tomu přestala přikládat
hodnotu?</p>'+
'<p>Právě tam se velmi často skrývá odpověď.</p>',
hint:"Datum narození může ukázat, jaké schopnosti jste dostaly
nejpřirozeněji a proč je dodnes neberete dostatečně vážně."
},
{
img: QUIZ_ASSET_BASE + "images/result-3.jpg",
title:"Už své poslání znáte, ale bojíte se ho následovat",
body:'<p>Z vašich odpovědí je vidět, že problém pravděpodobně není v
tom, že byste své poslání neznaly. Naopak. Někde uvnitř už odpověď dávno
cítíte.</p>'+
'<p>Možná se stále vracíte ke stejné myšlence, ukládáte si materiály,
absolvovaly jste kurzy nebo jste dokonce udělaly první kroky. Jenže
pokaždé jste našly důvod, proč přestat.</p>'+
'<p>Protože jakmile si zvolíte svou skutečnou cestu, už nebudete moci
předstírat, že nevíte, co opravdu chcete. A to znamená vystoupit na
světlo, převzít odpovědnost, čelit názorům druhých a konečně uvěřit samy
sobě.</p>'+
'<p class="quote">Někdy nás neděsí neúspěch.<br>Děsí nás představa, že
by to opravdu mohlo vyjít.</p>',
hint:"Možná nepotřebujete hledat nové poslání. Potřebujete přestat
utíkat před tím, které už dlouho klepe na dveře vašeho života. Datum
narození může ukázat, proč právě vy máte z tohoto kroku obavy a skrze co
se dokážete nejsnáze naplno rozvinout."
},
{
img: QUIZ_ASSET_BASE + "images/result-4.jpg",
title:"Uvízly jste v nekonečném hledání sebe sama",
body:'<p>Z vašich odpovědí je vidět, že jste už vyzkoušely opravdu
hodně. Možná jste absolvovaly různé kurzy, změnily práci, objevovaly
nové zájmy nebo začínaly stále znovu s nadějí, že tentokrát už jste
konečně našly své místo.</p>'+
'<p>Jenže po čase se vždy znovu objevil stejný pocit.</p>'+
'<p class="quote">„Ne… ani tohle není ono."</p>'+
'<p>S největší pravděpodobností vám nechybí informace. Spíše hledáte
jednu dokonalou odpověď, po které zmizí všechny pochybnosti. Jenže tak
to většinou nefunguje.</p>'+
'<p>Poslání se odhaluje postupně. Skrze zkušenosti, činy a malé kroky.
Ne ve chvíli, kdy se o sobě dozvíte něco dalšího, ale když si dovolíte
naplno žít to, co vás už dlouho přitahuje.</p>',
hint:"Možná nepotřebujete hledat další směr. Potřebujete si konečně
vybrat jeden z těch, které už dlouho stojí před vámi. Datum narození vám
může ukázat, v čem se stále točíte v kruhu a co vám brání udělat další
krok."
},
{
img: QUIZ_ASSET_BASE + "images/result-5.jpg",
title:"Cítíte, že nežijete svůj vlastní život",
body:'<p>Z vašich odpovědí je vidět, že navenek může být ve vašem životě
všechno v pořádku. Práce, povinnosti i každodenní rutina.</p>'+
'<p>Uvnitř se ale stále častěji objevuje pocit, že nežijete svůj vlastní
život.</p>'+
'<p>Možná jste kdysi daly přednost jistotě před tím, co vás opravdu
zajímalo. Bezpečí před snem. Nebo jste samy sebe příliš dlouho odkládaly
na později.</p>'+
'<p class="quote">„Opravdu je tohle všechno?"</p>'+
'<p>Velmi často nejde o životní krizi. Je to vaše poslání, které vám
začíná znovu připomínat svou přítomnost.</p>',
hint:"Možná teď není vaším úkolem změnit celý život. Možná je čas
konečně začít naslouchat samy sobě. Datum narození může ukázat, ve které
oblasti života se budete cítit skutečně živé a proč právě teď tento
pocit přichází."
},
{
img: QUIZ_ASSET_BASE + "images/result-6.jpg",
title:"Vaše poslání se mění, ale vy se stále držíte své staré identity",
body:'<p>Z vašich odpovědí je vidět, že jste už ušly dlouhou cestu a
možná jste si své místo v životě dokonce našly. Přesto se ve vás stále
častěji objevuje pocit, že jste ze své dosavadní role už vyrostly.</p>'+
'<p>To neznamená, že jste se dříve rozhodly špatně.</p>'+
'<p>Poslání nemusí zůstávat celý život stejné. Vyvíjí se společně s
člověkem, rozšiřuje se a postupně odhaluje nové možnosti.</p>'+
'<p>Možná po vás život právě teď nechce, abyste začínaly od nuly. Možná
vás zve k tomu, abyste udělaly další krok a dovolily si stát se ještě
větší verzí sebe sama.</p>'+
'<p class="quote">Někdy nové poslání nenahrazuje to původní.<br>Stává se
jeho přirozeným pokračováním.</p>',
hint:"Datum narození může ukázat, kterým směrem je pro vás nyní nejlepší
růst a jaké nové příležitosti se vám právě otevírají."
}
];
var alsoLabels = [
"sklon ztrácet kontakt samy se sebou",
"sklon podceňovat své vlastní schopnosti",
"strach udělat rozhodující krok",
"tendence hledat bez skutečného rozhodnutí",
"pocit, že nežijete svůj vlastní život",
"touha posunout se dál"
];
/* ---------- engine ---------- */
var cur = 0;
var answers = [];
var busy = false;
function show(id){
var all = document.querySelectorAll('.screen');
for (var i = 0; i < all.length; i++) all[i].classList.remove('active');
document.getElementById(id).classList.add('active');
if (window.scrollTo) window.scrollTo({top:0, behavior:'auto'});
}
function bar(){
document.getElementById('bar').style.width = (cur / questions.length *
100) + '%';
}
function start(){
cur = 0;
busy = false;
answers = [];
for (var i = 0; i < questions.length; i++) answers.push(null);
render();
show('quiz');
}
function render(){
var q = questions[cur];
document.getElementById('qnum').textContent =
('0' + (cur + 1)).slice(-2) + ' / ' + questions.length;
document.getElementById('qtext').textContent = q.t;
var list = document.getElementById('opts');
list.innerHTML = '';
for (var i = 0; i < q.o.length; i++) {
(function(idx){
var li = document.createElement('li');
var b = document.createElement('button');
b.type = 'button';
b.className = 'opt';
b.textContent = q.o[idx][0];
if (answers[cur] === idx) b.className += ' picked';
b.onclick = function(){ pick(idx); };
li.appendChild(b);
list.appendChild(li);
})(i);
}
document.getElementById('back').disabled = (cur === 0);
bar();
}
function pick(i){
if (busy) return;
busy = true;
answers[cur] = i;
var btns =
document.getElementById('opts').getElementsByTagName('button');
for (var k = 0; k < btns.length; k++) {
btns[k].className = 'opt' + (k === i ? ' picked' : '');
}
setTimeout(function(){
busy = false;
if (cur < questions.length - 1) {
cur++;
render();
} else {
finish();
}
}, 430);
}
function prev(){
if (busy || cur === 0) return;
cur--;
render();
}
function finish(){
var scores = [0,0,0,0,0,0];
for (var q = 0; q < answers.length; q++) {
var a = answers[q];
if (a === null) continue;
var s = questions[q].o[a][1];
for (var t = 0; t < 6; t++) scores[t] += s[t];
}
show('load');
document.getElementById('bar').style.width = '100%';
setTimeout(function(){ reveal(scores); }, 2100);
}
function reveal(scores){
var order = [];
for (var i = 0; i < 6; i++) order.push({v:scores[i], i:i});
order.sort(function(a,b){ return b.v - a.v; });
var top = order[0];
var second = order[1];
var r = results[top.i];
document.getElementById('resimg').src = r.img;
document.getElementById('resimg').alt = r.title;
document.getElementById('restitle').textContent = r.title;
document.getElementById('resbody').innerHTML = r.body;
document.getElementById('reshint').textContent = r.hint;
var also = document.getElementById('also');
if (second.v >= 3 && second.v >= top.v - 3) {
also.textContent = 'Silně se u vás projevuje také ' +
alsoLabels[second.i] + '.';
also.style.display = 'block';
} else {
also.style.display = 'none';
}
show('result');
}
