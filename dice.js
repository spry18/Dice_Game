var randomnum1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice" + randomnum1 + ".png";
var randomImageSrc = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src",randomImageSrc)

var randomnum2 = Math.floor(Math.random()*6)+1;
var randomDiceImageSrc = "images/dice" + randomnum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImageSrc)

if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML = "🏁Palyer 1 Wins";
}
else if(randomnum1<randomnum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins🏁";
}
else{
    document.querySelector("h1").innerHTML = "Draw👍";
}
