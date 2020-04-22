var turn=0;
var gstate=false;
var pTurn=true;
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
    this.orows[k]=0;
  }
},xrows:[0,0,0,0,0,0,0,0],orows:[0,0,0,0,0,0,0,0]};



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

function getRandom() {
  return Math.floor(Math.random() * (9 - 1 + 1) ) + 1;
}

function newGame(){
  turn=0;

  var i;
  var cell = document.getElementsByClassName("cell");
  for (i = 0; i < cell.length; i++) {
      cell[i].innerHTML="";
  }
    game.reset();
  gstate=true;
    pTurn=true;

}

function finishGame(){
  turn=0;
  gstate=false;
pTurn=false;

}

function setoRows(s){

  switch (s) {
    case "one":
    game.xrows[0]=3;
    game.xrows[3]=3;
    game.xrows[6]=3;
    game.orows[0]++;
    game.orows[3]++;
    game.orows[6]++;
      break;
    case "two":
    game.xrows[1]=3;
    game.xrows[3]=3;
    game.orows[1]++;
    game.orows[3]++;
      break;
      case "three":
      game.xrows[2]=3;
      game.xrows[3]=3;
      game.xrows[7]=3;
      game.orows[2]++;
      game.orows[3]++;
      game.orows[7]++;
        break;
        case "four":
        game.xrows[0]=3;
        game.xrows[4]=3;
        game.orows[0]++;
        game.orows[4]++;
          break;
          case "five":
          game.xrows[1]=3;
          game.xrows[4]=3;
          game.xrows[6]=3;
          game.xrows[7]=3;
          game.orows[1]++;
          game.orows[4]++;
          game.orows[6]++;
          game.orows[7]++;
            break;
          case "six":
            game.xrows[2]=3;
            game.xrows[4]=3;
            game.orows[2]++;
            game.orows[4]++;
              break;
          case "seven":
              game.xrows[0]=3;
              game.xrows[5]=3;
              game.xrows[7]=3;
              game.orows[0]++;
              game.orows[5]++;
              game.orows[7]++;
                break;

          case "eight":
                game.xrows[1]=3;
                game.xrows[5]=3;
                game.orows[1]++;
                game.orows[5]++;
                  break;
              case "nine":
                  game.xrows[2]=3;
                  game.xrows[5]=3;
                  game.xrows[6]=3;
                  game.orows[2]++;
                  game.orows[5]++;
                  game.orows[6]++;
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
  var s = checkForWin();

  switch (s) {

    case 0:
      if(game.one=="")
      {
        document.getElementById("one").innerHTML="O";
        game.one="o";
        game.xrows[0]=3;
        game.xrows[3]=3;
        game.xrows[6]=3;
        game.orows[0]++;
        game.orows[3]++;
        game.orows[6]++;
      }

      else if (game.four=="") {
        document.getElementById("four").innerHTML="O";
        game.four="o";
        game.xrows[0]=3;
        game.xrows[4]=3;
        game.orows[0]++;
        game.orows[4]++;
      }

      else if (game.seven=="") {
        document.getElementById("seven").innerHTML="O";
        game.seven="o";
        game.xrows[0]=3;
        game.xrows[5]=3;
        game.xrows[7]=3;
        game.orows[0]++;
        game.orows[5]++;
        game.orows[7]++;
      }
      else {
        game.xrows[0]=3;
      }
      break;
      case 1:
      if(game.two=="")
      {
        document.getElementById("two").innerHTML="O";
        game.two="o";
        game.xrows[1]=3;
        game.xrows[3]=3;
        game.orows[1]++;
        game.orows[3]++;
      }

      else if (game.five=="") {
        document.getElementById("five").innerHTML="O";
        game.five="o";
        game.xrows[1]=3;
        game.xrows[4]=3;
        game.xrows[6]=3;
        game.xrows[7]=3;
        game.orows[1]++;
        game.orows[4]++;
        game.orows[6]++;
        game.orows[7]++;
      }

      else if (game.eight=="") {
        document.getElementById("eight").innerHTML="O";
        game.eight="o";
        game.xrows[1]=3;
        game.xrows[5]=3;
        game.orows[1]++;
        game.orows[5]++;
      }
      else {
        game.xrows[1]=3;
      }
      break;
      case 2:
      if(game.three=="")
      {
        document.getElementById("three").innerHTML="O";
        game.three="o";
        game.xrows[2]=3;
        game.xrows[3]=3;
        game.xrows[7]=3;
        game.orows[2]++;
        game.orows[3]++;
        game.orows[7]++;
      }

      else if (game.six=="") {
        document.getElementById("six").innerHTML="O";
        game.six="o";
        game.xrows[2]=3;
        game.xrows[4]=3;
        game.orows[2]++;
        game.orows[4]++;
      }

      else if (game.nine=="") {
        document.getElementById("nine").innerHTML="O";
        game.nine="o";
        game.xrows[2]=3;
        game.xrows[5]=3;
        game.xrows[6]=3;
        game.orows[2]++;
        game.orows[5]++;
        game.orows[6]++;
      }
      else {
        game.xrows[2]=3;
      }
      break;
      case 3:
      if(game.one=="")
      {
        document.getElementById("one").innerHTML="O";
        game.one="o";
        game.xrows[0]=3;
        game.xrows[3]=3;
        game.xrows[6]=3;
        game.orows[0]++;
        game.orows[3]++;
        game.orows[6]++;
      }

      else if (game.two=="") {
        document.getElementById("two").innerHTML="O";
        game.two="o";
        game.xrows[1]=3;
        game.xrows[3]=3;
        game.orows[1]++;
        game.orows[3]++;
      }

      else if (game.three=="") {
        document.getElementById("three").innerHTML="O";
        game.three="o";
        game.xrows[2]=3;
        game.xrows[3]=3;
        game.xrows[7]=3;
        game.orows[2]++;
        game.orows[3]++;
        game.orows[7]++;
      }
      else {
        game.xrows[3]=3;
      }
      break;
      case 4:
      if(game.four=="")
      {
        document.getElementById("four").innerHTML="O";
        game.four="o";
        game.xrows[0]=3;
        game.xrows[4]=3;
        game.orows[0]++;
        game.orows[4]++;
      }

      else if (game.five=="") {
        document.getElementById("five").innerHTML="O";
        game.five="o";
        game.xrows[1]=3;
        game.xrows[4]=3;
        game.xrows[6]=3;
        game.xrows[7]=3;
        game.orows[1]++;
        game.orows[4]++;
        game.orows[6]++;
        game.orows[7]++;
      }

      else if (game.six=="") {
        document.getElementById("six").innerHTML="O";
        game.six="o";
        game.xrows[2]=3;
        game.xrows[4]=3;
        game.orows[2]++;
        game.orows[4]++;
      }
      else {
        game.xrows[4]=3;
      }
      break;
      case 5:
      if(game.seven=="")
      {
        document.getElementById("seven").innerHTML="O";
        game.seven="o";
        game.xrows[0]=3;
        game.xrows[5]=3;
        game.xrows[7]=3;
        game.orows[0]++;
        game.orows[5]++;
        game.orows[7]++;
      }

      else if (game.eight=="") {
        document.getElementById("eight").innerHTML="O";
        game.eight="o";
        game.xrows[1]=3;
        game.xrows[5]=3;
        game.orows[1]++;
        game.orows[5]++;
      }

      else if (game.nine=="") {
        document.getElementById("nine").innerHTML="O";
        game.nine="o";
        game.xrows[2]=3;
        game.xrows[5]=3;
        game.xrows[6]=3;
        game.orows[2]++;
        game.orows[5]++;
        game.orows[6]++;
      }
      else {
        game.xrows[5]=3;
      }
      break;
      case 6:
      if(game.one=="")
      {
        document.getElementById("one").innerHTML="O";
        game.one="o";
        game.xrows[0]=3;
        game.xrows[3]=3;
        game.xrows[6]=3;
        game.orows[0]++;
        game.orows[3]++;
        game.orows[6]++;
      }

      else if (game.five=="") {
        document.getElementById("five").innerHTML="O";
        game.five="o";
        game.xrows[1]=3;
        game.xrows[4]=3;
        game.xrows[6]=3;
        game.xrows[7]=3;
        game.orows[1]++;
        game.orows[4]++;
        game.orows[6]++;
        game.orows[7]++;
      }

      else if (game.nine=="") {
        document.getElementById("nine").innerHTML="O";
        game.nine="o";
        game.xrows[2]=3;
        game.xrows[5]=3;
        game.xrows[6]=3;
        game.orows[2]++;
        game.orows[5]++;
        game.orows[6]++;
      }
      else {
        game.xrows[6]=3;
      }
      break;
      case 7:
      if(game.three=="")
      {
        document.getElementById("three").innerHTML="O";
        game.three="o";
        game.xrows[2]=3;
        game.xrows[3]=3;
        game.xrows[7]=3;
        game.orows[2]++;
        game.orows[3]++;
        game.orows[7]++;
      }

      else if (game.five=="") {
        document.getElementById("five").innerHTML="O";
        game.five="o";
        game.xrows[1]=3;
        game.xrows[4]=3;
        game.xrows[6]=3;
        game.xrows[7]=3;
        game.orows[1]++;
        game.orows[4]++;
        game.orows[6]++;
        game.orows[7]++;
      }

      else if (game.seven=="") {
        document.getElementById("seven").innerHTML="O";
        game.seven="o";
        game.xrows[0]=3;
        game.xrows[5]=3;
        game.xrows[7]=3;
        game.orows[0]++;
        game.orows[5]++;
        game.orows[7]++;
      }
      else {
        game.xrows[7]=3;
      }
      break;

  }
}

function checkForWinO() {

  for(var l=0;l<game.orows.length;l++)
  {

    if(game.orows[l]==2)
    {
      return l;
    }
  }
  return 10;

}

function compWin() {
  switch (checkForWinO()) {
    case 0:
      if(game.one=="")
      {
        document.getElementById("one").innerHTML="O";
        game.one="o";
        game.orows[0]=3;
      }

      else if (game.four=="") {
        document.getElementById("four").innerHTML="O";
        game.four="o";
        game.orows[0]=3;
      }

      else if (game.seven=="") {
        document.getElementById("seven").innerHTML="O";
        game.seven="o";
        game.orows[0]=3;
      }
      else{
        game.orows[0]=3;
      }
      break;
      case 1:
      if(game.two=="")
      {
        document.getElementById("two").innerHTML="O";
        game.two="o";
        game.orows[1]=3;
      }

      else if (game.five=="") {
        document.getElementById("five").innerHTML="O";
        game.five="o";
        game.orows[1]=3;
      }

      else if (game.eight=="") {
        document.getElementById("eight").innerHTML="O";
        game.eight="o";
        game.orows[1]=3;
      }
      else{
        game.orows[1]=3;
      }
      break;
      case 2:
      if(game.three=="")
      {
        document.getElementById("three").innerHTML="O";
        game.three="o";
        game.orows[2]=3;
      }

      else if (game.six=="") {
        document.getElementById("six").innerHTML="O";
        game.six="o";
        game.orows[2]=3;
      }

      else if (game.nine=="") {
        document.getElementById("nine").innerHTML="O";
        game.nine="o";
        game.orows[2]=3;
      }
      else{
        game.orows[2]=3;
      }
      break;
      case 3:
      if(game.one=="")
      {
        document.getElementById("one").innerHTML="O";
        game.one="o";
        game.orows[3]=3;
      }

      else if (game.two=="") {
        document.getElementById("two").innerHTML="O";
        game.two="o";
        game.orows[3]=3;
      }

      else if

      (game.three=="") {
        document.getElementById("three").innerHTML="O";
        game.three="o";
        game.orows[3]=3;
      }
      else{
        game.orows[3]=3;
      }
      break;
      case 4:
      if(game.four=="")
      {
        document.getElementById("four").innerHTML="O";
        game.four="o";
        game.orows[4]=3;
      }

      else if (game.five=="") {
        document.getElementById("five").innerHTML="O";
        game.five="o";
        game.orows[4]=3;
      }

      else if (game.six=="") {
        document.getElementById("six").innerHTML="O";
        game.six="o";
        game.orows[4]=3;
      }
      else{
        game.orows[4]=3;
      }
      break;
      case 5:
      if(game.seven=="")
      {
        document.getElementById("seven").innerHTML="O";
        game.seven="o";
        game.orows[5]=3;
      }

      else if (game.eight=="") {
        document.getElementById("eight").innerHTML="O";
        game.eight="o";
        game.orows[5]=3;
      }

      else if (game.nine=="") {
        document.getElementById("nine").innerHTML="O";
        game.nine="o";
        game.orows[5]=3;
      }
      else{
        game.orows[5]=3;
      }
      break;
      case 6:
      if(game.one=="")
      {
        document.getElementById("one").innerHTML="O";
        game.one="o";
        game.orows[6]=3;
      }

      else if (game.five=="") {
        document.getElementById("five").innerHTML="O";
        game.five="o";
        game.orows[6]=3;
      }

      else if (game.nine=="") {
        document.getElementById("nine").innerHTML="O";
        game.nine="o";
        game.orows[6]=3;
      }
      else{
        game.orows[6]=3;
      }
      break;
      case 7:
      if(game.three=="")
      {
        document.getElementById("three").innerHTML="O";
        game.three="o";
        game.orows[7]=3;
      }

      else if (game.five=="") {
        document.getElementById("five").innerHTML="O";
        game.five="o";
        game.orows[7]=3;
      }

      else if (game.seven=="") {
        document.getElementById("seven").innerHTML="O";
        game.seven="o";
        game.orows[7]=3;
      }
      else{
        game.orows[7]=3;
      }
      break;

  }
}

function comp(){
  if(checkForWinO()==10)
{

  if(checkForWin()==10)
{
  var seed=getRandom();
  var s;

  var taken = true;
    while(taken)
    {

      switch(seed)
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
        seed=getRandom();
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
      finishGame();
    }
}
else {
  blockwin();
  if(game.won("o"))
  {
    finishGame();
  }
}

}
else {
  compWin();
  if(game.won("o"))
  {
    finishGame();
  }
}
pTurn=true;
}


function addRow(s){
  switch (s) {
    case "one":
    game.xrows[0]++;
    game.xrows[3]++;
    game.xrows[6]++;
    game.orows[0]=3;
    game.orows[3]=3;
    game.orows[6]=3;

      break;
    case "two":
    game.xrows[1]++;
    game.xrows[3]++;
    game.orows[1]=3;
    game.orows[3]=3;
      break;
      case "three":
      game.xrows[2]++;
      game.xrows[3]++;
      game.xrows[7]++;
      game.orows[2]=3;
      game.orows[3]=3;
      game.orows[7]=3;
        break;
        case "four":
        game.xrows[0]++;
        game.xrows[4]++;
        game.orows[0]=3;
        game.orows[4]=3;
          break;
          case "five":
          game.xrows[1]++;
          game.xrows[4]++;
          game.xrows[6]++;
          game.xrows[7]++;
          game.orows[1]=3;
          game.orows[4]=3;
          game.orows[6]=3;
          game.orows[7]=3;
            break;
          case "six":
            game.xrows[2]++;
            game.xrows[4]++;
            game.orows[2]=3;
            game.orows[4]=3;
              break;
          case "seven":
              game.xrows[0]++;
              game.xrows[5]++;
              game.xrows[7]++;
              game.orows[0]=3;
              game.orows[5]=3;
              game.orows[7]=3;
                break;

          case "eight":
                game.xrows[1]++;
                game.xrows[5]++;
                game.orows[1]=3;
                game.orows[5]=3;
                  break;
              case "nine":
                  game.xrows[2]++;
                  game.xrows[5]++;
                  game.xrows[6]++;
                  game.orows[2]=3;
                  game.orows[5]=3;
                  game.orows[6]=3;
                  break;
}

}

function tictactoe(s){

      var taken = true;
  if(gstate==true && pTurn==true){
      if(game[s]!="x" && game[s]!="o")
      {
      document.getElementById(s).innerHTML="X";
      turn++;
      game[s]="x";
      addRow(s);
      taken=false;
      pTurn=false;
      }
    if(taken==false)
{
      if(game.won("x")){
        finishGame();
      }

      if(turn==5)
      {
        finishGame();
      }

  if(gstate==true)
    {
      setTimeout(function(){comp();},500);
    }
var cell =  document.getElementsByClassName("cell");
  }

  }

}
