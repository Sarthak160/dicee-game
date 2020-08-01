// alert('working')
var randno1 = Math.floor(Math.random() * 6) + 1;
var randimg =  "https://github.com/Sarthak160/dicee-game/blob/master/" + "dice" + randno1 + ".png"+"?raw=true";  //= 
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randimg);

// alert('working')
var randno2 = Math.floor(Math.random() * 6) + 1;
var randimg2 =  "https://github.com/Sarthak160/dicee-game/blob/master/" + "dice" + randno2 + ".png"+"?raw=true";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randimg2);

if (randno1>randno2) {
    document.querySelector("h1").innerHTML = "🚩PLayer1 Wins"

}
if (randno1<randno2) {
    document.querySelector("h1").innerHTML = "PLayer2 Wins🚩"
    
}
if (randno1==randno2) {
    document.querySelector("h1").innerHTML = "It's a Draw !!"
    
}
