// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.
// BONUS: all'inizio della partita, il software richiede anche un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16):
// con difficoltà 0=> si gioca con numeri che vanno da 1 a 100
// con difficoltà 1 => si gioca con numeri che vanno da 1 a 80
// con difficoltà 2=> si gioca con numeri che vanno da 1 a 50

//chiedo al pc di generare 16 numeri random
var mine = []

while (mine.length < 16) {
    var numero_generato = genera_random (1, 100);
    mine.push(numero_generato);
}

console.log("Le bombe sono: " + mine);

//chiedo all'utente di inserire un numero tra 1 e 100. Questo vince se il suo numero è diverso da quello generato dal pc
var lista_numeri_utente = [];

do {
    //chiedo un numero all'utente
    var numero_utente = parseInt(prompt("Inserisci un numero tra 1 e 100"));
    //verifico se il numero è valido ai fini del punteggio
    if (isNaN(numero_utente)) {
        alert("Hai inserito un valore diverso dal numero");
    } else if (numero_utente < 1 || numero_utente > 100) {
        alert("Hai inserito un valore non compreso tra 1 e 100");
    } else if (lista_numeri_utente.includes(numero_utente)) {
        alert("Hai scelto un valore già inserito");
    //se l'utente mi inserisce un numero valido lo registro nel punteggio e quindi nella lista che contiene i numeri inseriti dall'utente, diversi da quelli random
    } else {
        lista_numeri_utente.push(numero_utente);
    }
} while (mine.includes(numero_utente)== false  && lista_numeri_utente.length < 84 );

//  Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere
var punteggio = lista_numeri_utente.length - 1;

if (mine.includes(numero_utente)) {
    console.log("Hai perso! -" + numero_utente + "- colpisce una bomba");
    console.log("Il tuo punteggio finale è di : " + punteggio);
} else if (punteggio = 84) {
    console.log("Hai vinto. Hai raggiunto il punteggio massimo");
}


//creo una funzione che generi numeri random
function genera_random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
