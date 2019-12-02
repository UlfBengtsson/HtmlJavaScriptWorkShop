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

ticTacBoard.style.width = "800px";
ticTacBoard.style.height = "800px";

var togglePatten = true;

for (let index = 0; index < 64; index++) {
  const element = document.createElement("div");

  element.style.width = "100px";
  element.style.height = "100px";

  element.style.float = "left";

  if (index % 8 == 0) {
    togglePatten = !togglePatten;
  }
  if (togglePatten) {
    element.classList.add("black");
  } else {
    element.classList.add("white");
  }
  togglePatten = !togglePatten;

  element.addEventListener("click", () => playerClick(element));

  ticTacBoard.appendChild(element);
}

var playerSymbol = "X";
function playerClick(element) {
  element.innerHTML = playerSymbol;

  if (playerSymbol == "X") {
    playerSymbol = "O";
  } else {
    playerSymbol = "X";
  }
}
