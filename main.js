//GIOCO DEL CAMPO MINATO

//Chiedo all'utente di scegliere un livello di difficoltà
do {
    var difficolta = prompt("Scegli un livello di difficolta tra 0 - 1 - 2")
    if (isNaN(difficolta) || difficolta != 0 && difficolta != 1 && difficolta != 2) {
        alert("Hai inserito un valore non consentito. Riprova");
    }
} while (isNaN(difficolta) || difficolta != 0 && difficolta != 1 && difficolta != 2);

console.log("Il livello di difficoltà scelto è: " + difficolta);

//effettuo i settaggi secondo il livello di difficoltà
if (difficolta == 0) {
    var val_max = 100
} else if (difficolta == 1) {
    val_max = 80
} else {
    val_max = 50
}

//Il computer deve generare 16 numeri casuali che saranno le "mine"
//setto un'array che conterrà i numeri inseriti dall'utente
var mine = []
//genero i numeri random secondo il livello di difficoltà
while (mine.length < 16) {
    var numeri_generati = genera_random (1, val_max);
    mine.push(numeri_generati);
}

//stampo la posizione delle bombe
console.log("Le bombe sono: " + mine);


// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 ed il valore della variabile max, che sarà la sua giocata
//creo un contenitore per inserire i numeri dell'utente
var lista_numeri_utente = [];

do {
    //quindi chiedo all?utente un numero da 1 al valore della variabile max all'utente
    var numero_utente = parseInt(prompt("Inserisci un numero tra 1 e " + val_max));
    //poi verifico se il numero è valido ai fini del punteggio
    if (isNaN(numero_utente)) {
        alert("Hai inserito un valore diverso dal numero");
    } else if (numero_utente < 1 || numero_utente > val_max) {
        alert("Hai inserito un valore non compreso tra 1 e " + val_max);
    } else if (lista_numeri_utente.includes(numero_utente)) {
        alert("Hai scelto un valore già inserito");
    //se l'utente mi inserisce un numero valido lo registro nel punteggio ovvero nell' array creato per contenere i numeri di quest ultimo
    } else {
        lista_numeri_utente.push(numero_utente);
    }
} while (mine.includes(numero_utente)== false  && lista_numeri_utente.length < (val_max - 16) );

//  Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere
//Effettuo il calcolo -1, perché l'array comprende anche l'ultimo valore che porta alla fine della partita (valore = bomba)
var punteggio = lista_numeri_utente.length - 1;

if (lista_numeri_utente.length == (val_max - 16)) {
    console.log("Complimenti. Hai raggiunto il punteggio massimo");
} else {
    console.log("Hai perso! -" + numero_utente + "- colpisce una bomba");
    console.log("Il tuo punteggio finale è di: " + punteggio);
}

//creo una funzione che generi numeri random
function genera_random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
