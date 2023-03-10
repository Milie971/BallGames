document.getElementById("title").style.color = "blue";
const titre = document.getElementById("title");

let score = 0;
score = score + 1;

//Compter

const btnRed = document.getElementById("btn-red");
const btnBlue = document.getElementById("btn-blue");
const btnGreen = document.getElementById("btn-green");

let compte = 0;

btnRed.addEventListener("click", function () {
  add();
});

btnBlue.addEventListener("click", function () {
  add();
});

btnGreen.addEventListener("click", function () {
  sup();
});

let point = document.getElementById("compteur");
function add() {
  compte = compte + 1;
  point.innerText = compte;
}

setTimeout(function () {
  alert("Fin du chrono !");
}, 30000);
setTimeout(function () {
  btnBlue.remove();
  btnGreen.remove();
  btnRed.remove();
  point.remove();
}, 30000);

function sup() {
  compte = compte - 1;
  point.innerText = compte;
}
const tip = document.getElementById("start");
tip.addEventListener("click", function () {
  go();
});
// function go(){
//   tip= start
//   tip.innerHTML=
// }
