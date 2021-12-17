document.querySelector(".burgericon").addEventListener("click", addWidth);

/* -----------------------------Menuwidthetc--------------------------------- */
function addWidth() {
  document.querySelector("#slideout-menu").classList.toggle("additionalWidth");
  document
    .querySelector("#slideout-menu")
    .classList.toggle("additionalOpacity");
  document.querySelector("main").classList.toggle("additionalOpacityWelcome");

  document.querySelector(".logo-image").classList.toggle("noClickEvents");
  document.querySelector(".icons").classList.toggle("noClickEvents");
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

const mediaQuery2 = window.matchMedia("(min-width: 700px)");
if (mediaQuery2.matches) {
  document.querySelector(".asidecontainer").addEventListener("click", addWidth);
  document.querySelector(".secondhalf").addEventListener("click", addWidth);
  document
    .querySelector(".asidecontainer")
    .addEventListener("click", LogoandIconOpac);
  document
    .querySelector(".secondhalf")
    .addEventListener("click", LogoandIconOpac);
  document
    .querySelector(".burgericon")
    .addEventListener("click", LogoandIconOpac);

  function LogoandIconOpac() {
    document
      .querySelector(".logo-image")
      .classList.toggle("additionalOpacityWelcome");
    document
      .querySelector(".icons")
      .classList.toggle("additionalOpacityWelcome");
  }
}
