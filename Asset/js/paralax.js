const parallax1 = document.querySelector("#parallax1");
const parrallax2 = document.querySelector("#parallax2");
const parramlax2 = document.querySelector("#parallax3");

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax1.style.backgroundPositionY = offset * 0.03 + "px";
});
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax2.style.backgroundPositionY = offset * -0.03 + "px";
});
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax3.style.backgroundPositionY = offset * -0.03 + "px";
});
