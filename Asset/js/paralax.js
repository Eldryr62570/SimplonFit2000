const parallax1 = document.querySelector("#parallax1");
const parralax2 = document.querySelector("#parallax2");
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax1.style.backgroundPositionY = offset * 0.03 + "px";
});
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax2.style.backgroundPositionY = offset * -0.03 + "px";
});
