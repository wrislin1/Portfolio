var playerAce=false;
var dealerAce=false;
var gameState=false;
var playerScore=0;
var dealerScore=0;



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function startGame(){
  playerScore=0;
  dealerScore=0;
  gameState=true;
  document.getElementById("winner").innerHTML = "";
  var player = document.getElementById("player");
  var dealer = document.getElementById("dealer");

  player.innerHTML=getCard("player");
  player.innerHTML+=getCard("player");
  dealer.innerHTML=getCard("dealer");

  document.getElementById("hit").style.display="inline";
  document.getElementById("stand").style.display="inline";
  document.getElementById("playerScore").innerHTML = "Player Total: " + playerScore;
  document.getElementById("dealerScore").innerHTML = "Dealer Total: " + dealerScore;

  if(playerScore==21){
      document.getElementById("winner").innerHTML = "Player Blackjack";
      dealerTurn();
  }
}

function endGame() {
  gameState=false;
}

function getCard(p){
var score=0;
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
  if(value>10 || value==1)
  {
  switch(value)
  {
    case 1:
    value = "A";
    if(p=="player")
    {
      playerAce=true;
    }
    else {
      dealerAce=true;
    }
    score=11;
    break;
    case 11:
    value = "J";
    score=10;
    break;
    case 12:
    value = "Q";
    score=10;
    break;
    case 13:
    value = "K";
    score=10;

  }
  }
  else {
    {
      score=value;
    }
  }


  switch(suit)
  {
    case "Hearts":
    temp += ("<td class='cards'  id ='hearts'>" + " " +value + "</td>");
    break;
    case "Spades":
    temp += ("<td class='cards'  id ='spades'>" + " " +value + "</td>");
    break;
    case "Diamonds":
    temp += ("<td class='cards'  id ='diamonds'>" + " " +value + "</td>");
    break;
    case "Clubs":
    temp += ("<td class='cards'  id ='clubs'>" + " " +value + "</td>");

  }

  if(p=="player"){
    playerScore+=score;

  }
  else if (p=="dealer") {
    dealerScore+=score;

  }

  

  return temp;

}

function playerTurn(){
  if(gameState==true)
  {
    var player = document.getElementById("player").innerHTML;
    player+=getCard("player");
    document.getElementById("player").innerHTML=player;
      document.getElementById("playerScore").innerHTML = "Player Total: " + playerScore;

      if(playerScore==21){
        document.getElementById("winner").innerHTML = "Player Blackjack";
        dealerTurn();
      }
      if(playerScore>21)
      {
        document.getElementById("winner").innerHTML = "Player Bust";
        endGame();
      }
    }



}

function dealerTurn(){
  if(gameState==true)
  {
    if(dealerScore<17)
    {
var dealer = document.getElementById("dealer").innerHTML;
dealer+=getCard("dealer");
document.getElementById("dealer").innerHTML=dealer;
document.getElementById("dealerScore").innerHTML = "Dealer Total: " + dealerScore;
    }

    if(dealerScore==playerScore)
    {
      document.getElementById("winner").innerHTML = "Tie";
      endGame();
    }

    if (dealerScore>=17 && dealerScore<21 && dealerScore>playerScore) {
      document.getElementById("winner").innerHTML = "Dealer Wins";
      endGame();
    }

    if(dealerScore >= 17 && dealerScore<playerScore){
      document.getElementById("winner").innerHTML = "Player Wins";
      endGame();
    }

    if(dealerScore>21)
    {
      document.getElementById("winner").innerHTML = "Dealer Bust";
      endGame();
    }

    if(dealerScore==21 && playerScore!= 21)
    {
      document.getElementById("winner").innerHTML = "Blackjack Dealer Wins";
      endGame();
    }
}
if(gameState==true)
{
dealerTurn();
}
}
