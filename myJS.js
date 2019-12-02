var myH1 = document.getElementById("changeMe");

myH1.innerHTML = "<b>Hello world wide web!</b>";
myH1.style.color = "Blue";

var myUlElements = document.getElementsByTagName("ul");

console.log(myUlElements);

var btnDont = document.getElementById("btnDont");

btnDont.addEventListener("click", giveAnimals);

function giveAnimals() {
  myUlElements[0].innerHTML = "<li>Dog</li><li>Cat</li>";

  for (let index = 0; index < myUlElements.length; index++) {
    const element = myUlElements[index];

    if (index % 2 == 0) {
      element.classList.add("evenUl"); //work with the css class as if it was a list (add, remove, contains)
    } else {
      element.className = "oddUl"; //work with the css class as if it was a field (will replace the current class string with new string)
    }
  }
}

document.getElementById("secret").addEventListener("mouseover", function() {
  document.getElementsByTagName("h2")[0].innerHTML =
    "This is a eventListener reacting to you";
});
document.getElementById("secret").addEventListener("mouseleave", function() {
  document.getElementsByTagName("h2")[0].innerHTML = "Secrets under this text";
});

var ticTacBoard = document.getElementById("ticTacBoard");

ticTacBoard.style.width = "300px";
ticTacBoard.style.height = "300px";

for (let index = 0; index < ticTacBoard.children.length; index++) {
  const element = ticTacBoard.children[index];

  element.style.width = "100px";
  element.style.height = "100px";

  element.style.float = "left";

  if (index % 2 == 0) {
    element.style.backgroundColor = "white";
  } else {
    element.style.backgroundColor = "black";
  }
}
