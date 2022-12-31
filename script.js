'use strict';

console.log(document.querySelector('.message'));  //a method that avaliable on the document objects...DOM manipulation
/*
DOM?(Document Object Model)
-->Structured representation of html doucments.
-->Allows js to access html elements and styles manipulate them.
-->Web APIs(Application programming Interface)
-> (are like libraries that browser implement) that we interct with js(ecma inetercation).
-->Also DOM is not a part of js or connected with js

*/

// document.querySelector('.message').textContent='Content Number!';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;
// document.querySelector('.guess').value=23;
//Eventlisner:wait for a event to happen and react to it.

                                        //<------------------->
/*
//random number
let secretNumber= Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;

const displayMessage=function(message)
{
document.querySelector('.message').textContent=message;
}

//addEvenlistener
document.querySelector('.check').addEventListener('click',function()
{
const guess=Number(document.querySelector('.guess').value ) ;
// console.log(guess);

//when there is no input
if(!guess)
{
    document.querySelector('.message').textContent='⛔ no number!';
}

//when the guess is right
else if ( guess === secretNumber)
{
    displayMessage('🎉correct number!');
    
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.number').textContent=secretNumber;
    if(score> highScore)
    {
        highScore=score;
        document.querySelector('.highscore').textContent= highScore;
    }
}
//when the score id different
else if( guess !== secretNumber)
{
   
        if(score > 1)
        {
            displayMessage(guess > secretNumber ?'📈 number is too high!' :'📈 number is too low!');
            score-- ;
            document.querySelector('.score').textContent=score;
        }
    //when score is zero
        else
        { displayMessage('🎮 you lost the game!'); 
            document.querySelector('.score').textContent=0;
        }
}
//when the guess is high
// else if ( guess > secretNumber)
// {
//     if(score > 1)
//     {
//         document.querySelector('.message').textContent='📈 number is too high!';
//         score--;
//         document.querySelector('.score').textContent=score;
//     }
// //when score is zero
//     else
//     {
//         document.querySelector('.message').textContent='🎮 you lost the game!'; 
//         document.querySelector('.score').textContent=0;
//     }
  
// }

// //when the guess is low
// else if ( guess < secretNumber)
// {
//     if(score >1)
//     {
//         document.querySelector('.message').textContent='📉 number is too low!';
//         score--;
//         document.querySelector('.score').textContent=score;
//     }
// //when score is zero
//     else
//     {
//         document.querySelector('.message').textContent='🎮 you lost the game!'; 
//         document.querySelector('.score').textContent=0;
       
//     }
// }
});
document.querySelector('.again').addEventListener('click',function()
{
    secretNumber= Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=20;
    document.querySelector('.number').textContent='?';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';

});

//               /* 
//                                   Coding Challenge #1

//                 Implement a game rest functionality, so that the player can make a new guess!
//                 Your tasks:
//                 1. Select the element with the 'again' class and attach a click event handler
//                 2. In the handler function, restore initial values of the 'score' and 
//                 'secretNumber' variables
//                 3. Restore the initial conditions of the message, number, score and guess input 
//                 fields
//                 4. Also restore the original background color (#222) and number width (15rem)
//                                                                                                  */