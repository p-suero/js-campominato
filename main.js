// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.
// BONUS: all'inizio della partita, il software richiede anche un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16):
// con difficoltà 0=> si gioca con numeri che vanno da 1 a 100
// con difficoltà 1 => si gioca con numeri che vanno da 1 a 80
// con difficoltà 2=> si gioca con numeri che vanno da 1 a 50

//creo una funzione che generi numeri random
function genera_random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//creo un array vuoto che contenga i numeri random
var mine = []

// costruisco un ciclo per generare 16 numeri random
while (mine.length < 16) {
    var numero_generato = genera_random (1, 100);
    mine.push(numero_generato);
}

console.log(mine);

var punteggio = -1;

do {
    var numero_utente = parseInt(prompt("Inserisci un numero tra 1 e 100"));
    punteggio = punteggio + 1;
} while ((isNaN(numero_utente) == false && numero_utente >= 1 && numero_utente <= 100) && (mine.includes(numero_utente)== false  && punteggio <= 84 ));

if (isNaN(numero_utente)) {
    alert("Hai inserito un valore diverso dal numero")
} else if (numero_utente <1 || numero_utente >100) {
    alert("hai inserito un valore non compreso tra 1 e 100")
} else if (mine.includes(numero_utente)) {
    console.log("Hai perso. E' stata colpita una bomba");
    console.log(punteggio);
} else {
    console.log("Hai raggiunto il punteggio massimo");
    console.log("Il tuo pungeggio finale è di" + punteggio);
}
