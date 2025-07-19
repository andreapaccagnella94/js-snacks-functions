/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
//provo a fare una arrow function che è più snella

/* const arrowGreeting = userName => `Ciao ${userName}` */

//funzioone normale 
function greeting(userName) {
    return `Ciao ${userName}`
}

// Invoca la funzione qui e stampa il risultato in console

console.log(arrowGreeting(userName));
console.log(greetingreeting(userName));
//Risultato atteso se si passa 'Mario': // ciao Mario
