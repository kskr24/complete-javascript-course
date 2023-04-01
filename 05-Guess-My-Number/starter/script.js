'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; 

function matchNumber() {
    const guessString = document.querySelector('.guess').value;
    const guessNumber = Number(guessString);
    if(guessString === ""){
        document.querySelector('.message').textContent = "⛔ No Number";
    }else if(guessNumber === secretNumber){
        document.querySelector('.message').textContent = "🎉 Correct Number";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;
    }else if(guessNumber < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "📉 Too Low";
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "😢 You Lost!";
        } 
    }else if(guessNumber > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "📈 Too High";
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "😢 You Lost!";
        }
    }
    
}

const check_button = document.querySelector('.check');
check_button.addEventListener('click', matchNumber);


document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = '🤔 Start Guessing...';
    document.querySelector('.guess').value='';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});
