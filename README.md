<!-- Funzione: blocco riusabile di codice.


parametri( valori IMPUT) QUALI POSSONO RESTITUZIONE DI UN VALORE; 
CICLI(LOOP)
:   permettono di eseguire un blocco di codice ripetutamente per un numero specificato di volte o finché una condizione non è più vera


let i = 1: Questa è l'inizializzazione. Dichiara e inizializza una variabile contatore i a 1. Questo è il punto di partenza del nostro conteggio.
i <= N: Questa è la condizione di continuazione. Il blocco di codice all'interno del ciclo verrà eseguito finché questa condizione è vera. Il ciclo si fermerà quando i diventerà maggiore di N.
i++: Questo è l'aggiornamento. Dopo ogni esecuzione del blocco di codice, il valore di i viene incrementato di 1 (i++ è una scorciatoia per i = i + 1).


Condizioni (Istruzioni if/else if/else)
Le istruzioni condizionali consentono di eseguire blocchi di codice diversi in base alla verità o falsità di una o più espressioni.

L'operatore modulo (%) è un operatore aritmetico che restituisce il resto della divisione tra due numeri. 
ESEMPIO: numero % 5 === 0: Questa espressione è vera se numero è un multiplo di 5.




TIPI DI DATO= NUMERI CON PARAMETRO N; ( ESEMPIO N =1,2,3,)
"Fizz", "Buzz" e "FizzBuzz"  ( STRINGHE - IN SOSTITUZIONE DEI NUMERI!!!!!) -->



<!-- ALTRO METODO//

 -->

 <!-- VIDEO-PILLOLA -->
<!-- inizio scrivemdo :


// funzione con parametro: n ciclo for: stampa i numeri da 1 a N( 100 ; poi con ciclo if, else ,;... sostituiamo valori e con modulo capiamo se sono divisibili o meno)
 function FrizzBuzz(n) {

    for(let i = 0; i <= n; i++){


console.log(i);
    }

 }


// parametro reale, cambiabile.
 FrizzBuzz(50);
 -->





  <!-- Ora aggiungo cicli e condizioni x numeri  divisibili / stringhe->

 function FrizzBuzz(n) {

    for(let i = 0; i <= n; i++){


if( i% 15 == 0){

console.log("FrizzBuzz");


 }else if( 1 % 5 == 0 ){
 console.loG(frizz);
    }else if( 1 % 3 == 0 ){
    cvonsole.log( "Buzz);

    //esplusione se nn divis. x 3, 5 e 15;...
    }else 
{
console.log(i);
}
}
}