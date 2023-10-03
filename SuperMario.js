//View
updateview()
function updateview(){
document.getElementById('app').innerHTML = /*HTML*/ `
<div id="figurer-container">
    <div id="character-selection">
    <h1>Velg din karakter!</h1>
    <button onclick="velgKarakter(0)">Mario</button>
    <button onclick="velgKarakter(1)">Yoshi</button>
    <button onclick="velgKarakter(2)">Luigi</button>
    <button onclick="velgKarakter(3)">Peach</button>
    </div>
    <div id="kamp-container">
    <div id="karakter-info">
    <img src="images/pickYour.jpg" alt="" id="karakter-bilde">
    <p id="karakter-helse"></p>
    <button onclick="fightBowser()">Fight Bowser!</button>
    </div>
    
    <div id="bowser-diven">
    <img src="images/bowser.jpg" alt="bowser">
    <p id="bowser-helse">Helse: 300</p>
    <button onclick="fightKarakter()">Fight karakter!</button>
    </div>
` 
 }



let marioFigurer = [
{
navn: 'Mario',
bilde: 'images/mario2.jpg',
helse: 200
},
{
navn: 'Yoshi',
bilde: 'images/yoshi.jpg',
helse: 80
},
{
navn: 'Luigi',
bilde: 'images/luigi.jpg',
helse: 140
},
{
navn: 'Peach',
bilde: 'images/peach.jpg',
helse: 100
},
]

//controller
function velgKarakter(index) {
const valgtKarakter = marioFigurer[index];

const karakterBilde = document.getElementById('karakter-bilde');
karakterBilde.src = valgtKarakter.bilde;

const karakterHelse = document.getElementById('karakter-helse');
karakterHelse.textContent = `Helse: ${valgtKarakter.helse}`;
}

let karakterHelse = 100;
let bowserHelse = 300;
function fightBowser() {
if (bowserHelse > 0) {
bowserHelse -= 50;
document.getElementById('bowser-helse').textContent = `Helse: ${bowserHelse}`;
}
}
function fightKarakter() {
 

    if (karakterHelse > 0) {
        karakterHelse -= 50;
    document.getElementById('karakter-helse').textContent = `Helse: ${karakterHelse}`;
    }
}

