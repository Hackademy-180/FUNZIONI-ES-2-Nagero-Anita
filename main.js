
// Selfwork Funzioni 2





// Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:
// N dovra’ rappresentare il parametro formale della funzione
// tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
// tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
// e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'


// FUNZIONI,CICLI ,CONDIZIONI OPERATORE MODULO TIPI DI DATO; PER ESEGUIRE ESERCIZIO. ARGOMENTI; E PARAMETRI NEL POSTO GIUSTO.



let N = 20;


for (let i= 1; i <=N; ì++) {


    
    if( i % 15 === 0){
        console.log("frizzBuzz");
    }else if (i % 3 === 0) {
        console.log("Frizz");
    }else if (i % 5 === 0) {

        console.log("Buzz");
    } else{
        console.log(i);
    }
}