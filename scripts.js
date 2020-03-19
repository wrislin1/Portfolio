var turn=0;
var gameState=false;
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
}};



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


}

function comp(){


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
        document.getElementById(s).innerHTML="O";
        game[s]="o";
        if(game.won("o"))
        {
          endGame();
        }

        taken=false;
      }
    }


}




function tictactoe(s){
  var cell =  document.getElementsByClassName("cell");
      var taken = true;
  if(gameState==true){
      if(game[s]!="x" && game[s]!="o")
      {
      document.getElementById(s).innerHTML="X";
      turn++;
      game[s]="x";
      taken=false;
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
