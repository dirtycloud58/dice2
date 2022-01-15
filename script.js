const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
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
    dice.innerHTML = "<img src=./IMG/dice/dice-" + number + ".png>";


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
            score1.textContent = parseInt(score1.textContent) + parseInt(number);
    } else{
            score2.textContent = parseInt(score2.textContent) + parseInt(number);
    }
}};


function nextPlayer() {

activePlayer = activePlayer == player1 ? player2 : player1;

score1.textContent = 0;
score2.textContent = 0;

player1.classList.toggle("active");
player2.classList.toggle("active");

};

function credit () {
    if(activePlayer == player1){

            scoreTotal1.textContent = parseInt(scoreTotal1.textContent) + parseInt(score1.textContent);
            scoreTotal1.textContent >= 100 ? winGame() : nextPlayer();

        } else{
            scoreTotal2.textContent = parseInt(scoreTotal2.textContent) + parseInt(score2.textContent);
            scoreTotal2.textContent >= 100 ? winGame() : nextPlayer();
        }};


function winGame() {

    if(scoreTotal1 >= 100){
        alert ('le joueur 1 remporte la partie !!');
    }else {
        alert ('le joueur 2 remporte la partie !!');
    }
    stop();
};

function stop() {

    dice.innerHTML = "<img src=./IMG/dice/dice-" + number + ".png>";
    score1.textContent = 0;
    score2.textContent = 0;
    scoreTotal1.textContent = 0;
    scoreTotal2.textContent = 0;
    player1.classList.add("active");
    player2.classList.remove("active");
    
};

lancer.addEventListener("click", jeter);
save.addEventListener("click", credit);
reset.addEventListener("click", stop);