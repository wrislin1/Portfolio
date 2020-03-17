var gameState=false;
var playerScore=0;
var dealerScore=0;



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function startGame(){
if(gameState==false)
{
  gameState=true;
  var player = document.getElementById("player");
  var dealer = document.getElementById("dealer");

  player.innerHTML=getCard("player");
  player.innerHTML+=getCard("player");
  dealer.innerHTML=getCard("dealer");

  document.getElementById("hit").style.display="inline";
    document.getElementById("stand").style.display="inline";
  }

}

function getCard(p){

  var temp = "";
  var suit;
  var rand  = random(0,3);
  switch(rand){
    case 0:
    suit = "Hearts";
    break;
    case 1:
    suit = "Spades";
    break;
    case 2:
    suit = "Diamonds";
    break;
    case 3:
    suit = "Clubs";
  }

  var value = random(1,13);
  switch(value){
    case 10:

  }
  var hit = [suit,value];

  switch(suit)
  {
    case "Hearts":
    temp += ("<td class='cards'  id ='hearts'>" + " " +hit[1] + "</td>");
    break;
    case "Spades":
    temp += ("<td class='cards'  id ='spades'>" + " " +hit[1] + "</td>");
    break;
    case "Diamonds":
    temp += ("<td class='cards'  id ='diamonds'>" + " " +hit[1] + "</td>");
    break;
    case "Clubs":
    temp += ("<td class='cards'  id ='clubs'>" + " " +hit[1] + "</td>");

  }

  if(p=="player"){
    playerScore+=hit[1];

  }
  else if (p=="dealer") {
    dealerScore+=hit[1];

  }

  return temp;

}

function playerTurn(){
    var player = document.getElementById("player").innerHTML;
    player+=getCard("player");
    document.getElementById("player").innerHTML=player;



}

function dealerTurn(){
var dealer = document.getElementById("dealer").innerHTML;
dealer+=getCard("dealer");
document.getElementById("dealer").innerHTML=dealer;

}
