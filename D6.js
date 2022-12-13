/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("-----------------ESRCIZIO 1----------------------");
function area(l1, l2) {
  if (typeof l1 === "number" && typeof l2 === "number") {
    console.log("l'area è:", l1 * l2);
  } else {
    console.log("inserisci numeri");
  }
}
area(3, 2);
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-----------------ESRCIZIO 2----------------------");
function creazySum(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    numsomma = num1 + num2;
    if (num1 === num2) {
      console.log(numsomma * 3);
    } else {
      console.log(numsomma);
    }
  } else {
    console.log("inserisci numeri");
  }
}
creazySum(2, 2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-----------------ESRCIZIO 3----------------------");
function creazyDiff(num1) {
  if (typeof num1 === "number") {
    numdiff = Math.abs(num1 - 19);

    if (num1 > 19) {
      console.log(numdiff * 3);
    } else {
      console.log(numdiff);
    }
  } else {
    console.log("inserisci numero");
  }
}
creazyDiff(9);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-----------------ESRCIZIO 4----------------------");
function boundary(n) {
  if (typeof n === "number" && Number.isInteger(n)) {
    if ((n > 20 && n <= 100) || n === 400) {
      return true;
    }
  } else {
    return "inserisci numero intero";
  }
}
console.log(boundary(500));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-----------------ESRCIZIO 5----------------------");
function epify(string) {
  if (typeof string === "string") {
    epicode = "EPICODE ";
    if (string.substr(0, 7) === "EPICODE") {
      console.log(string);
    } else {
      console.log(epicode.concat(string));
    }
  } else {
    console.log("inserisci una stringa");
  }
}
epify("ciao");

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-----------------ESRCIZIO 6----------------------");
function check3and7(n) {
  if (typeof n === "number" && n > 0) {
    if (n % 3 === 0) {
      console.log("divisibile per tre");
    } else {
      console.log("non divisibile per tre");
    }
    if (n % 7 === 0) {
      console.log("divisibile per sette");
    } else {
      console.log("non divisibile per sette");
    }
  }
}
check3and7(6);
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-----------------ESRCIZIO 7----------------------");
function reverseString(string) {
  if (typeof string === "string") {
    console.log(string.split("").reverse().join(""));
  } else {
    console.log("inserisci stringa");
  }
}
reverseString("ciao amico anu");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-----------------ESRCIZIO 8----------------------");
function upperFirst(string) {
  if (typeof string === "string") {
    arraystring = string.split(" ");
    let arraym = [];
    let maiusc = 0;
    for (let i = 0; i < arraystring.length; i++) {
      maiusc =
        arraystring[i].substring(0, 1).toUpperCase() + arraystring[i].slice(1);

      arraym.push(maiusc);
    }
    console.log(arraym);
  } else {
    console.log("inserisci stringa");
  }
}
upperFirst("ciao amici");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-----------------ESRCIZIO 9----------------------");

function cutString(string) {
  if (typeof string === "string") {
    stringF = string.slice(1, -1);
    console.log(stringF);
  } else {
    console.log("inserisci stringa");
  }
}
cutString("ciao a tutti");
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-----------------ESRCIZIO 10----------------------");

function giveMeRandom(n) {
  if (typeof n === "number" && Number.isInteger(n)) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * 11));
    }
    console.log(arr);
  } else {
    console.log("inserisci un numero intero");
  }
}
giveMeRandom(8);
