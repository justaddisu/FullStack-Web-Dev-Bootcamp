var randomOne = Math.floor(Math.random() * 6) + 1;
var randomTwo = Math.floor(Math.random() * 6) + 1;

var imageOne = "images/dice" + randomOne + ".png";
var imageTwo = "images/dice" + randomTwo + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageOne);

document.querySelectorAll("img")[1].setAttribute("src", imageTwo);

if(randomOne > randomTwo){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(randomTwo > randomOne){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}