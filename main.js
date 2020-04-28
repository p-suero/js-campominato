//GIOCO DEL CAMPO MINATO

//Chiedo all'utente di scegliere un livello di difficoltà
do {
    var difficolta = prompt("Scegli un livello di difficolta tra 0 - 1 - 2")
    if (!(difficolta_valida(difficolta))) {
        alert("Hai inserito un valore non valido");
    }
} while (!(difficolta_valida(difficolta)));


console.log("Il livello di difficoltà scelto è: " + difficolta);

//effettuo i settaggi secondo il livello scelto
if (difficolta == 0) {
    var val_max = 100
} else if (difficolta == 1) {
    val_max = 80
} else {
    val_max = 50
}

//Il computer deve generare 16 numeri casuali che saranno le "mine"
//ottengo le mine random grazie alla funzione
var mine_generate = genera_mine(16, 1 ,val_max)

//stampo la posizione delle mine
console.log("Le mine sono: " + mine_generate);


// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 ed il valore della variabile max, che sarà la sua giocata
//creo un contenitore per inserire i numeri dell'utente
var lista_numeri_utente = [];

do {
    //quindi chiedo all'utente un numero da 1 al valore della variabile max all'utente
    var numero_utente = parseInt(prompt("Inserisci un numero tra 1 e " + val_max));
    //poi verifico se il numero è valido ai fini del punteggio
    if (is_valid(numero_utente, val_max) == true) {
        if (lista_numeri_utente.includes(numero_utente)) {
            alert("Hai scelto un valore già inserito");
          //se l'utente mi inserisce un numero valido lo registro nell' array
        } else if (lista_numeri_utente.includes(numero_utente) == false) {
            lista_numeri_utente.push(numero_utente);
        }
      //stampo un messaggio in caso di numero non valido
    } else {
        alert("Hai inserito un valore non valido")
    }
} while (mine_generate.includes(numero_utente) == false  && lista_numeri_utente.length < (val_max - 16) );

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere
//Effettuo il calcolo -1 per stamprare il punteggio prima di colpire una mina
var punteggio = lista_numeri_utente.length - 1;

if (lista_numeri_utente.length == (val_max - 16)) {
    console.log("Complimenti. Hai raggiunto il punteggio massimo");
} else {
    console.log("Hai perso! -" + numero_utente + "- colpisce una mina");
    console.log("Il tuo punteggio finale è di: " + punteggio);
}


//creo una funzione che generi un array con n numeri random diversi tra di loro
function genera_mine (n, min, max) {
    var mine = [];

    while (mine.length < n) {
        var numero_random = Math.floor(Math.random() * (max - min + 1) ) + min;
        if (mine.includes(numero_random) == false) {

            mine.push(numero_random);
        }
    }
    return(mine)
}


//creo una funzione per il controllo dei valori quando si sceglie il livello di difficolta
function difficolta_valida (difficolta) {
    if (!(isNaN(difficolta)) && difficolta >= 0 && difficolta <= 2) {
        return true;
    } else {
        return false
    }
}


//creo una funzione per il controllo dei numeri inseriti dall'utente
function is_valid (numero, val_max) {
    if (isNaN(numero) == false && numero >= 1 && numero <= val_max) {
        return(true)
    } else {
        return(false)
    }
}
