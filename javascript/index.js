document.querySelector(".visiblemenu").addEventListener("click", addWidth);

function addWidth() {
  document.querySelector("#dropdown-menu").classList.toggle("additionalWidth");
  document.querySelector(".visiblemenu").classList.toggle("additionalOpacity");
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
