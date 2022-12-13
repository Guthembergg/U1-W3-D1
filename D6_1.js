// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("---------------ESERICIZO 1-------------------");

function giveMeRandom(n) {
  if (typeof n === "number" && Number.isInteger(n)) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * 11));
    }
    return arr;
  } else {
    console.log("inserisci un numero intero");
  }
}
function checkArray(a) {
  x = Math.floor(Math.random() * a + 1);
  arr = giveMeRandom(x);
  let somma = 0;
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      console.log("elemento all'indice", i, "è maggiore di 5");
      somma = somma + arr[i];
    }
  }
  if (somma > 0) {
    console.log("la somma degli elementi > 5 è", somma);
  } else {
    console.log("nessun elemento > 5");
  }
}
// a è il floor massimo della lunghezza dell array casuale
checkArray(20);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("---------------ESERICIZO 2-------------------");

let shoppingCart = [
  { price: 3, name: "coffee", id: "0004001", quantity: 2 },
  { price: 1, name: "pen", id: "000051", quantity: 2 },
  { price: 10, name: "mouse", id: "0006001", quantity: 5 },
];

function shoppingCartTotal() {
  let somma = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    somma += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return `la somma del carrello è :${somma}`;
}
console.log(shoppingCartTotal());

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("---------------ESERICIZO 3-------------------");

function addToShoppingCart(p, n, i, q) {
  shoppingCart.push({ price: p, name: n, id: i, quantity: q });
  a = shoppingCart.length;
  console.log("ho aggiunto", n, "totale elementi nell'array:", a);
}
addToShoppingCart(9, "patate", "000021", 2);
console.log(shoppingCart);
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("---------------ESERICIZO 4-------------------");

function maxShoppingCart(shoppingCart) {
  let nameC;
  let prezzo;
  let quantita2;
  let max2 = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    prezzo = shoppingCart[i].price;
    quantita2 = shoppingCart[i].quantity;
    max = prezzo * quantita2;
    if (prezzo * quantita2 >= max2) {
      max2 = prezzo * quantita2;
      nameC = shoppingCart[i].name;
    }
  }
  console.log(
    "l'oggetto più costoso,tenendo conto delle quantita', è  ",
    nameC,
    " che in totale costano  ",
    max2
  );
}

maxShoppingCart(shoppingCart);

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("---------------ESERICIZO 5-------------------");

function latestShoppingCart(shoppingCart) {
  console.log("l'ultimo elemento è:", shoppingCart[shoppingCart.length - 1]);
}

latestShoppingCart(shoppingCart);
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("---------------ESERICIZO 6-------------------");

function loopUntil(x) {
  let y;
  let z;
  let w;
  let i = 0;
  if (x <= 9 && x >= 0 && Number.isInteger(x)) {
    while (i <= 3) {
      y = Math.floor(Math.random() * 10);
      console.log(y);
      i = 0;
      if (y > x) {
        z = Math.floor(Math.random() * 10);
        console.log("primo");
        console.log(z);
        i++;
        if (z > x) {
          w = Math.floor(Math.random() * 10);
          console.log("secondo");
          console.log(w);
          i++;
          if (w > x) {
            i++;
            console.log("maggiore per tre volte consecutive");
            break;
          }
        }
      }
    }
  } else {
    console.log("inserisci un numero intero tra 0 e 9");
  }
}
loopUntil(6);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("---------------ESERICIZO 7-------------------");
array2 = [10, 20, 15, "ciao", 15];

function avarage(array) {
  let num = 0;
  let a = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      num = num + array[i];
      a++;
    }
  }
  media = num / a;
  console.log(media);
}
avarage(array2);

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("---------------ESERICIZO 8-------------------");
arraystring = ["ciao", "corta", "hola", "lunghissima"];
function longest(array) {
  max = array[0].length;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > max) {
      max = array[i].length;
      strmax = i;
    }
  }
  console.log("la stringa più lunga è:'", array[strmax], "'");
}
longest(arraystring);
/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("---------------ESERICIZO 9-------------------");
emailContent = "niente spam in questa email";
function spam(emailContent) {
  if (emailContent.search("SPAM") || emailContent.search("SCAM")) {
    console.log("trovato spam");
    return true;
  }
}
spam(emailContent);
/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("---------------ESERICIZO 10-------------------");

let date_1 = new Date("10/25/2021");

function passati(data) {
  let date_2 = new Date();
  let difference = date_2.getTime() - date_1.getTime();
  console.log("la differenza di giorni e':", difference / (1000 * 3600 * 24));
}
passati(date_1);
/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(x, y) {
  myArr = [];
  if (
    typeof y === "number" &&
    Number.isInteger(y) &&
    typeof x === "number" &&
    Number.isInteger(x)
  ) {
    for (let i = 0; i <= y; i++) {
      for (let a = 0; a <= x; a++) {
        myArr.push("" + i + a);
      }
    }
    console.log(myArr);
  } else {
    console.log("inserisci due numeri interi");
  }
}

matrixGenerator(6, 6);
