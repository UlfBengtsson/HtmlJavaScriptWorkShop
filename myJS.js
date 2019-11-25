var myH1 = document.getElementById("changeMe");

myH1.innerHTML = "<b>Hello world wide web!</b>";
myH1.style.color = "Blue";

var myUlElements = document.getElementsByTagName("ul");

console.log(myUlElements);

function giveAnimals() {
  myUlElements[0].innerHTML = "<li>Dog</li><li>Cat</li>";
}
