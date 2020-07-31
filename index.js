// alert('working')
var randno1 = Math.floor(Math.random() * 6) + 1;
var randimg = "images/" + "dice" + randno1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randimg);

// alert('working')
var randno2 = Math.floor(Math.random() * 6) + 1;
var randimg2 = "images/" + "dice" + randno2 + ".png";
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