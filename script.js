'use strict';
let answer = Math.trunc(Math.random()*20+1);
// document.querySelector('.number').textContent = answer;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function(){
    const enteredNumber = Number(document.querySelector('.guess').value);
    console.log(enteredNumber);
    if(!enteredNumber){
        // document.querySelector('.message').textContent = 'Please enter a number ?';
        displayMessage('Please enter a number ?');
        document.querySelector('.message').style.color = '#fe9c8f';
    }else if(enteredNumber === answer){
        if(highscore < score){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // document.querySelector('.message').textContent = ' 👑 Correct Answer 👑 ';
        displayMessage(' 👑 Correct Answer 👑 ');
        document.querySelector('body').style.backgroundColor = '#a8e6cf ';
        document.querySelector('.number').textContent = answer;
        document.querySelector('.number').style.borderRadius = '2rem';
        
    }else if(enteredNumber !== answer){
        if(score>0){
            // document.querySelector('.message').textContent = '🔺 Your number is greater then the target number 🔙';
            (enteredNumber > answer) ? displayMessage('🔺 Your number is greater then the target number 🔙'):displayMessage('🔺 Your number is less then the target number 🔙');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            // document.querySelector('.message').textContent = 'Game Over';
            displayMessage('Game Over');
        }
    }
    // else if(enteredNumber < answer){
    //     if(score>0){
    //         document.querySelector('.message').textContent = '🔻Your number is less then the target number 🔜';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'Game Over';
    //     }

    // }
})

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.guess').value ='';
    answer = Math.trunc(Math.random()*20+1);;
    document.querySelector('.number').textContent = '?';
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#adcbe3' ;
    document.querySelector('.number').style.borderRadius = '6rem';
    // document.querySelector('.message').textContent = 'Start Guessing ...';
    displayMessage('Start Guessing ...');
})