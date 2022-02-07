const parallax1 = document.querySelector("#parallax1");
const parrallax2 = document.querySelector("#parallax2");
const parallax3 = document.querySelector("#parallax3");
const parallax4 = document.querySelector("#parallax4");

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
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax4.style.backgroundPositionY = offset * -0.03 + "px";
});
