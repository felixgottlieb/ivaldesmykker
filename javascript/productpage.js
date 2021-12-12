document.querySelector(".burgericon").addEventListener("click", addWidth);

/* -----------------------------Menuwidthetc--------------------------------- */
function addWidth() {
  document.querySelector("#slideout-menu").classList.toggle("additionalWidth");
  document
    .querySelector("#slideout-menu")
    .classList.toggle("additionalOpacity");
  document.querySelector(".one").classList.toggle("lineOne");
  document.querySelector(".two").classList.toggle("lineTwo");
  document.querySelector(".three").classList.toggle("lineThree");
}

/* ---------------Media queries------------------ */

const mediaQuery = window.matchMedia("(max-width: 700px)");
if (mediaQuery.matches) {
  document
    .querySelector(".burgericon")
    .addEventListener("click", changeDisplay);
}

function changeDisplay() {
  document.querySelector(".logo-image").classList.toggle("changeOpacity");
  document.querySelector(".icons").classList.toggle("changeOpacity");
}

var bgImg = document.querySelector("#bg");

const mediaQuery2 = window.matchMedia("(min-width: 700px)");
if (mediaQuery2.matches) {
  document.querySelector(".asidecontainer").addEventListener("click", addWidth);
  document.querySelector(".secondhalf").addEventListener("click", addWidth);
}
