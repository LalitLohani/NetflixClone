let fight = document.getElementById("fight");
let prestige = document.getElementById("prestige");
let network = document.getElementById("network");
let revenant = document.getElementById("revenant");
let speech = document.getElementById("speech");

let fightcard = document.getElementsByClassName("fight__card");
let prestigecard = document.getElementsByClassName("prestige__card");
let networkcard = document.getElementsByClassName("network__card");
let revenantcard = document.getElementsByClassName("revenant__card");
let speechcard = document.getElementsByClassName("speech__card");

fight.addEventListener("click", function () {

  fightcard[0].classList.remove("hid");
  prestigecard[0].classList.add("hid");
  networkcard[0].classList.add("hid");
  revenantcard[0].classList.add("hid");
  speechcard[0].classList.add("hid");
});

prestige.addEventListener("click", function () {

  fightcard[0].classList.add("hid");
  prestigecard[0].classList.remove("hid");
  networkcard[0].classList.add("hid");
  revenantcard[0].classList.add("hid");
  speechcard[0].classList.add("hid");
});


network.addEventListener("click", function () {

  fightcard[0].classList.add("hid");
  prestigecard[0].classList.add("hid");
  networkcard[0].classList.remove("hid");
  revenantcard[0].classList.add("hid");
  speechcard[0].classList.add("hid");
});


revenant.addEventListener("click", function () {

  fightcard[0].classList.add("hid");
  prestigecard[0].classList.add("hid");
  networkcard[0].classList.add("hid");
  revenantcard[0].classList.remove("hid");
  speechcard[0].classList.add("hid");
});


speech.addEventListener("click", function () {

  fightcard[0].classList.add("hid");
  prestigecard[0].classList.add("hid");
  networkcard[0].classList.add("hid");
  revenantcard[0].classList.add("hid");
  speechcard[0].classList.remove("hid");
});