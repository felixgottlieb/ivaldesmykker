codocument.querySelector(".visiblemenu").addEventListener("click", addWidth);

var bgImg = document.querySelector("#bg");

/* -----------------------------Menuwidthetc--------------------------------- */
function addWidth() {
  document.querySelector("#dropdown-menu").classList.toggle("additionalWidth");
  document.querySelector(".visiblemenu").classList.toggle("additionalOpacity");
  document.querySelector(".visiblemenu").classList.toggle("additionalMargin");
  document.querySelector(".visiblemenu").classList.remove(".visiblemenu:hover");
  document
    .querySelector(".welcome")
    .classList.toggle("additionalOpacityWelcome");
}

/* ----------------Burgermenu animation------------------- */
document
  .querySelector(".visiblemenu")
  .addEventListener("click", burgermenuAnimation);

function burgermenuAnimation() {
  console.log("mojn");
  document.querySelector(".one").classList.toggle("lineOne");
  document.querySelector(".two").classList.toggle("lineTwo");
  document.querySelector(".three").classList.toggle("lineThree");
  document.querySelector(".visiblemenu").classList.toggle("additionPadding");
}
/* ---------------Media queries------------------ */

const mediaQuery = window.matchMedia("(max-width: 700px)");
if (mediaQuery.matches) {
  document.querySelector(".visiblemenu").addEventListener("click", addWidth2);
}

function addWidth2() {
  document.querySelector("#dropdown-menu").classList.toggle("additionalWidth2");
  document.querySelector(".visiblemenu").classList.toggle("additionalMargin2");
}
const mediaQuery2 = window.matchMedia("(min-width: 700px)");
if (mediaQuery2.matches) {
  console.log("query2");
  bgImg.setAttribute("src", "assets/homepage_bgimg_mobile_resized3.jpg");
}
