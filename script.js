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

function jeter() {

    let number = Math.floor(Math.random() * (6 - 1 +1) +1)
    dice.textContent = number;
    console.log(dice);
};

jeter();