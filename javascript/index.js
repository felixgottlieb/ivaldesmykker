document.querySelector(".burgericon").addEventListener("click", addWidth);

/* -----------------------------Menuwidthetc--------------------------------- */
function addWidth() {
  console.log("eow");

  document.querySelector("#dropdown-menu").classList.toggle("additionalWidth");
  document
    .querySelector("#dropdown-menu")
    .classList.toggle("additionalOpacity");
  document.querySelector(".secondhalf").classList.toggle("additionalMargin");
  document
    .querySelector(".welcome")
    .classList.toggle("additionalOpacityWelcome");
}

/* ----------------Burgermenu animation------------------- */
document
  .querySelector(".burgericon")
  .addEventListener("click", burgermenuAnimation);

function burgermenuAnimation() {
  document.querySelector(".one").classList.toggle("lineOne");
  document.querySelector(".two").classList.toggle("lineTwo");
  document.querySelector(".three").classList.toggle("lineThree");
}
/* ---------------Media queries------------------ */

const mediaQuery = window.matchMedia("(max-width: 700px)");
if (mediaQuery.matches) {
  document.querySelector(".secondhalf").addEventListener("click", addWidth2);
  document
    .querySelector(".burgericon")
    .addEventListener("click", changeDisplay);
}

function addWidth2() {
  document.querySelector(".dropdown").classList.toggle("additionalWidth2");
}
function changeDisplay() {
  document.querySelector(".logo-image").classList.toggle("changeOpacity");
  document.querySelector(".icons").classList.toggle("changeOpacity");
}
var bgImg = document.querySelector("#bg");
const mediaQuery2 = window.matchMedia("(min-width: 700px)");
if (mediaQuery2.matches) {
  console.log("query2");
  bgImg.setAttribute("src", "assets/bgimg_desktop.jpg");
}
