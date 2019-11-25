var myH1 = document.getElementById("changeMe");

myH1.innerHTML = "<b>Hello world wide web!</b>";
myH1.style.color = "Blue";

var myUlElements = document.getElementsByTagName("ul");

console.log(myUlElements);

var btnDont = document.getElementById("btnDont");

btnDont.addEventListener("click", giveAnimals);

function giveAnimals() {
  myUlElements[0].innerHTML = "<li>Dog</li><li>Cat</li>";
}

document.getElementById("secret").addEventListener("mouseover", function() {
  document.getElementsByTagName("h2")[0].innerHTML =
    "This is a eventListener reacting to you";
});
document.getElementById("secret").addEventListener("mouseleave", function() {
  document.getElementsByTagName("h2")[0].innerHTML = "Secrets under this text";
});
