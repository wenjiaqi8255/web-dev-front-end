// document.addEventListener("unload", throwDice());
var player1;
var player2;
var picture=["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png",];
    
function throwDice(){
    player1=Math.floor(Math.random()*6)+1;
    player2=Math.floor(Math.random()*6)+1;

    document.querySelector(".img1").setAttribute("src",picture[player1]);
    document.querySelector(".img2").setAttribute("src",picture[player2]);

    if(player1>player2){
    document.querySelector(".container h1").textContent="Player 1 wins!";
    
    }
    else if(player1<player2){
        document.querySelector(".container h1").textContent="Player 2 wins!";
    }
    else{
        document.querySelector(".container h1").textContent="Draw";

    }
}

throwDice();