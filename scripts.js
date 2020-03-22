var turn=0;
var gameState=false;
var playerTurn=true;
var moves=1;
var currSlides=1;

var game = {one:"",two:"",three:"",
  four:"",five:"",six:"",
  seven:"",eight:"",nine:"",won: function(p){
    if((this.one==p&&this.two==p&&this.three==p)||
  (this.four==p&&this.five==p&&this.six==p)||
(this.seven==p&&this.eight==p&&this.nine==p)||
(this.one==p&&this.four==p&&this.seven==p)||
(this.two==p&&this.five==p&&this.eight==p)||
(this.three==p&&this.six==p&&this.nine==p)||
(this.one==p&&this.five==p&&this.nine==p)||
(this.three==p&&this.five==p&&this.seven==p))
{
  return true;
}
else{return false;}
},reset: function(){
  this.one="";
  this.two="";
  this.three="";
  this.four="";
  this.five="";
  this.six="";
  this.seven="";
  this.eight="";
  this.nine="";
  for(var k=0;k<this.xrows.length;k++){
    this.xrows[k]=0;
  }
},xrows:[0,0,0,0,0,0,0,0]};



show(currSlides);

function show(n) {

  var i;
  var x = document.getElementsByClassName("slides");

  var slides = document.getElementsByClassName("slides");

  if (n > slides.length) {currSlides = 1;}
  if (n < 1) {currSlides = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[currSlides-1].style.display = "block";

}

function next(n) {

show(currSlides += n);
}

function random() {
  return Math.floor(Math.random() * (9 - 1 + 1) ) + 1;
}

function startGame(){
  playerTurn=true;
  var i;
  var cell = document.getElementsByClassName("cell");
  for (i = 0; i < cell.length; i++) {
      cell[i].innerHTML="";
  }
    game.reset();
  gameState=true;
}

function endGame(){
  turn=0;
  gameState=false;
playerTurn=false;

}

function setoRows(s){
  switch (s) {
    case "one":
    game.xrows[0]=3;
    game.xrows[3]=3;
    game.xrows[6]=3;
      break;
    case "two":
    game.xrows[1]=3;
    game.xrows[3]=3;
      break;
      case "three":
      game.xrows[2]=3;
      game.xrows[3]=3;
      game.xrows[7]=3;
        break;
        case "four":
        game.xrows[0]=3;
        game.xrows[4]=3;
          break;
          case "five":
          game.xrows[1]=3;
          game.xrows[4]=3;
          game.xrows[6]=3;
          game.xrows[7]=3;
            break;
          case "six":
            game.xrows[2]=3;
            game.xrows[4]=3;
              break;
          case "seven":
              game.xrows[0]=3;
              game.xrows[5]=3;
              game.xrows[7]=3;
                break;

          case "eight":
                game.xrows[1]=3;
                game.xrows[5]=3;
                  break;
              case "nine":
                  game.xrows[2]=3;
                  game.xrows[5]=3;
                  game.xrows[6]=3;
                  break;
}
}

function checkForWin(){
for(var n=0;n<game.xrows.length;n++)
{
  if(game.xrows[n]==2)
  {
    return n;
  }
}
return 10;
}

function blockwin(){
  switch (checkForWin()) {
    case 0:
      if(game.one=="")
      {
        document.getElementById("one").innerHTML="O";
        game.one="o";
        game.xrows[0]=3;
      }

      else if (game.four=="") {
        document.getElementById("four").innerHTML="O";
        game.four="o";
        game.xrows[0]=3;
      }

      else if (game.seven=="") {
        document.getElementById("seven").innerHTML="O";
        game.seven="o";
        game.xrows[0]=3;
      }
      break;
      case 1:
      if(game.two=="")
      {
        document.getElementById("two").innerHTML="O";
        game.two="o";
        game.xrows[1]=3;
      }

      else if (game.five=="") {
        document.getElementById("five").innerHTML="O";
        game.five="o";
        game.xrows[1]=3;
      }

      else if (game.eight=="") {
        document.getElementById("eight").innerHTML="O";
        game.eight="o";
        game.xrows[1]=3;
      }
      break;
      case 2:
      if(game.three=="")
      {
        document.getElementById("three").innerHTML="O";
        game.three="o";
        game.xrows[2]=3;
      }

      else if (game.six=="") {
        document.getElementById("six").innerHTML="O";
        game.six="o";
        game.xrows[2]=3;
      }

      else if (game.nine=="") {
        document.getElementById("nine").innerHTML="O";
        game.nine="o";
        game.xrows[2]=3;
      }
      break;
      case 3:
      if(game.one=="")
      {
        document.getElementById("one").innerHTML="O";
        game.one="o";
        game.xrows[3]=3;
      }

      else if (game.two=="") {
        document.getElementById("two").innerHTML="O";
        game.two="o";
        game.xrows[3]=3;
      }

      else if (game.three=="") {
        document.getElementById("three").innerHTML="O";
        game.three="o";
        game.xrows[3]=3;
      }
      break;
      case 4:
      if(game.four=="")
      {
        document.getElementById("four").innerHTML="O";
        game.four="o";
        game.xrows[4]=3;
      }

      else if (game.five=="") {
        document.getElementById("five").innerHTML="O";
        game.five="o";
        game.xrows[4]=3;
      }

      else if (game.six=="") {
        document.getElementById("six").innerHTML="O";
        game.six="o";
        game.xrows[4]=3;
      }
      break;
      case 5:
      if(game.seven=="")
      {
        document.getElementById("seven").innerHTML="O";
        game.seven="o";
        game.xrows[5]=3;
      }

      else if (game.eight=="") {
        document.getElementById("eight").innerHTML="O";
        game.eight="o";
        game.xrows[5]=3;
      }

      else if (game.nine=="") {
        document.getElementById("nine").innerHTML="O";
        game.nine="o";
        game.xrows[5]=3;
      }
      break;
      case 6:
      if(game.one=="")
      {
        document.getElementById("one").innerHTML="O";
        game.one="o";
        game.xrows[6]=3;
      }

      else if (game.five=="") {
        document.getElementById("five").innerHTML="O";
        game.five="o";
        game.xrows[6]=3;
      }

      else if (game.nine=="") {
        document.getElementById("nine").innerHTML="O";
        game.nine="o";
        game.xrows[6]=3;
      }
      break;
      case 7:
      if(game.three=="")
      {
        document.getElementById("three").innerHTML="O";
        game.three="o";
        game.xrows[7]=3;
      }

      else if (game.five=="") {
        document.getElementById("five").innerHTML="O";
        game.five="o";
        game.xrows[7]=3;
      }

      else if (game.seven=="") {
        document.getElementById("seven").innerHTML="O";
        game.seven="o";
        game.xrows[7]=3;
      }
      break;

  }
}

function comp(){

  if(checkForWin()==10)
{
  var rand=random();
  var s;

  var taken = true;
    while(taken)
    {

      switch(rand)
      {
        case 1:
        s = "one";
        break;
        case 2:
        s = "two";
        break;
        case 3:
        s = "three";
        break;
        case 4:
        s = "four";
        break;
        case 5:
        s = "five";
        break;
        case 6:
        s = "six";
        break;
        case 7:
        s = "seven";
        break;
        case 8:
        s = "eight";
        break;
        case 9:
        s = "nine";
      }


      if(game[s]=="x" || game[s]=="o")
      {
        rand=random();
      }
      else {
        setoRows(s);
        document.getElementById(s).innerHTML="O";
        game[s]="o";


        taken=false;
      }
    }
    if(game.won("o"))
    {
      endGame();
    }
}
else {
  blockwin();
  if(game.won("o"))
  {
    endGame();
  }
}
playerTurn=true;
}


function addRow(s){
  switch (s) {
    case "one":
    game.xrows[0]++;
    game.xrows[3]++;
    game.xrows[6]++;
      break;
    case "two":
    game.xrows[1]++;
    game.xrows[3]++;
      break;
      case "three":
      game.xrows[2]++;
      game.xrows[3]++;
      game.xrows[7]++;
        break;
        case "four":
        game.xrows[0]++;
        game.xrows[4]++;
          break;
          case "five":
          game.xrows[1]++;
          game.xrows[4]++;
          game.xrows[6]++;
          game.xrows[7]++;
            break;
          case "six":
            game.xrows[2]++;
            game.xrows[4]++;
              break;
          case "seven":
              game.xrows[0]++;
              game.xrows[5]++;
              game.xrows[7]++;
                break;

          case "eight":
                game.xrows[1]++;
                game.xrows[5]++;
                  break;
              case "nine":
                  game.xrows[2]++;
                  game.xrows[5]++;
                  game.xrows[6]++;
                  break;
}

}

function tictactoe(s){
  var cell =  document.getElementsByClassName("cell");
      var taken = true;
  if(gameState==true && playerTurn==true){
      if(game[s]!="x" && game[s]!="o")
      {
      document.getElementById(s).innerHTML="X";
      turn++;
      game[s]="x";
      addRow(s);
      taken=false;
      playerTurn=false;
      }
    if(taken==false)
{
      if(game.won("x")){
        endGame();
      }

      if(turn==5)
      {
        endGame();
      }

  if(gameState==true)
    {
      setTimeout(function(){ comp(); }, 1000);
    }
  }

  }

}
