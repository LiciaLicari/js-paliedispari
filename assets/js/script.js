/*

*****************Pari e Dispari****************


 
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.


*******************Palidroma*******************
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma

************************************************************************************
*/

// console.log("Miao");

//L’utente sceglie pari o dispari 

const choosingBattlefield = prompt ("Even or odd?");
console.log(choosingBattlefield);

document.getElementById('playerNumber').innerHTML = choosingBattlefield;

//inserisce un numero da 1 a 5.
const chooseNum = prompt ("Choose a number between 1 to 5");
console.log(chooseNum);

document.getElementById('playerNumber').innerHTML = chooseNum;

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)

function randomBotNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let botNumber = randomBotNumber(1, 5);
console.log(botNumber);

// Sommiamo i due numeri 

 function sumBotPlayer(botNumber, playerNumber) {
        return botNumber + playerNumber; 
    }

    let sum = sumBotPlayer(botNumber, playerNumber);
    console.log(sumBotPlayer);

    

    let isEven = sum % 2 === 0;
  

    // if ((botNumber + playerNumber) % 2 == 0 )  {
    //      sum = isEven
    //  } else {
    //      sum = odd
    //  }

    //  console.log(sum);

    //chi ha vinto?

    if(sum = isEven){
        console.log('Hai vinto!');
        document.querySelector('.outcome').innerHTML = 'You win!'
    }else {
        console.log('Hai perso!');
        document.querySelector('.outcome').innerHTML = 'You lose!'
    }