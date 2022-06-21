var randomnumber1=Math.floor((Math.random()*6)+1);
var randomimage1="images/dice"+randomnumber1+".png";
document.querySelector(".img1").setAttribute("src",randomimage1);

var randomnumber2=Math.floor(Math.random()*6+1);
var randomimage2="images/dice"+randomnumber2+".png";
document.querySelector(".img2").setAttribute("src",randomimage2)

if (randomimage1>randomimage2){
  document.querySelector(".heading").innerHTML="PLAYER1 WON🚩";
  document.querySelector(".subheading").innerHTML="Refresh the page to play again";
}
else if(randomimage1<randomimage2){
  document.querySelector(".heading").innerHTML="PLAYER2 WON🚩"
  document.querySelector(".subheading").innerHTML="Refresh the page to play again";
}
else{
  document.querySelector(".heading").innerHTML="MATCH DRAW!"
  document.querySelector(".subheading").innerHTML="Refresh the page to play again";
}
