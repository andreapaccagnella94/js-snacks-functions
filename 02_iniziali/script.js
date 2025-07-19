/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
// ad ogni iterazione dovrei mettere con push in un nuovo const solo le iniziali della parola con i vari indici
//mi creo semplicemente la funzione che mi trova la prima lettera di una parola di un array --> in realtà usato "chartAT"
/*
QUESTO è QUELLO CHE FA chartAt
SAREBBE ANCHE PIù VERSATILE PERCHè TI DA UNA QUALSIASI POSIZIONE CHE VUOI

function charAtFor(str, index) {
  for (let i = 0; i < str.length; i++) {
    if (i === index) {
      return str[i];
    }
  }
  return ''; // Ritorna una stringa vuota se l'indice è fuori dai limiti
}
*/
//dichiaro una const

function arrayFirstLetter(myArray) {
    const firstLetters = [];
    for (let i = 0; i < myArray.lenght; i++) {
        const firstLetter = myArray[i].charAt(0);
        firstLetters.push(firstLetter);
    }
    return firstLetters
}




// Invoca la funzione qui e stampa il risultato in console

const tryFunction = arrayFirstLetter(names);
console.log(tryFunction);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]