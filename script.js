const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const scoreTotal1 = document.getElementById("scoreTotal1");
const scoreTotal2 = document.getElementById("scoreTotal2");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

const reset = document.getElementById("reset");
const lancer = document.getElementById("lancer");
const save = document.getElementById("save");

const dice = document.getElementById("dice");

activePlayer = player1;

function jeter() {

    let number = Math.floor(Math.random() * (6 - 1 +1) +1);
    dice.textContent = number;
    console.log(dice);

    if(number == 1){
        if(activePlayer == player1){
            score1.textContent = 0;
            nextPlayer();
        }else{
            score2.textContent = 0;
            nextPlayer();
        }
    }else {
        if(activePlayer == player1){
            score1.textContent = parseInt(score1.textContent) + number;
    } else{
            score2.textContent = parseInt(score2.textContent) + number;
    }
}};


function nextPlayer() {

activePlayer = activePlayer == player1 ? player2 : player1;

score1.textContent = 0;
score2.textContent = 0;

};

function credit () {
    if(activePlayer == player1){
        scoreTotal1.textContent = parseInt(score1.textContent);
        nextPlayer();
    }else {
        scoreTotal2.textContent = parseInt(score2.textContent);
        nextPlayer();
    }
}

lancer.addEventListener("click", jeter);
save.addEventListener("click", credit);