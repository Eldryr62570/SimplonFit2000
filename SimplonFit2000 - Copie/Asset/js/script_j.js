const navbar = document.getElementById("navbar");
const tap_dropdown = document.getElementById("tap_dropdown");
const dropdown = document.getElementById("dropdown");
var dropdown_dropped = false;
const videoJs = document.querySelectorAll(".videoJs");
let delayDiapo = 5000;
let i = 1;
let flag = 1;

window.onload = function () {
  videoJs[0].classList.toggle("display");
  set_dropdown();
  affichage();

  //prendre le dernier caractère du lien
var sportID = window.location.href;
sportID = sportID.slice(-1)

//Si on entre  aucune idée, la fin du lien est ".../page.html", donc la denier caractère est l, on le transforme en 0
if (sportID == "l"){sportID = "0"}

  if(sportID==1){
  window.scrollTo(0,500);
  }
};

//Fonction d'affichage
const affichage = () => {
  setInterval(() => {
    //arrivé à 4 on retourne i à 0, et on met flag à 0
    if (i == 4) {
      i = 0;
      flag = 0;
    }
    if (i == 0) {
      //Si on à déja fait un tour on retire le dernier pour revenir dans le setup du début
      if (flag == 0) {
        videoJs[3].classList.toggle("display");
        flag = 1;
      }
    }
    //On enléve l'affichage de celui d'avant sauf si c'est déja 0
    if (i != 0) {
      videoJs[i - 1].classList.toggle("display");
    }
    videoJs[i].classList.toggle("display");

    i++;
  }, delayDiapo);
};

function set_dropdown() {
  if (dropdown_dropped == false) {
    dropdown.style.opacity = "0";
    dropdown.style.height = "0";
  } else {
    dropdown.style.opacity = "1";
    dropdown.style.height = "40vh";
  }
}

/*

window.addEventListener(
  "scroll",
  (event) => {
    if (window.scrollY > window.innerHeight * 0.07) {
      var opacity = 1 + (window.innerHeight * 0.07 - window.scrollY) / 100;

      if (opacity > 0.5) {
        navbar.style.backgroundColor = "rgb(0,0,0," + String(opacity) + ")";
      } else {
        navbar.style.backgroundColor = "rgb(0,0,0,0.5)";
      }
    } else {
      navbar.style.backgroundColor = "rgb(0,0,0,1)";
    }
  },
  { passive: true }
);*/

window.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target) && !tap_dropdown.contains(e.target)) {
    dropdown_dropped = false;
    set_dropdown(); // Si on clique en dehors de la box ET du tap_dropdown
  }
});

tap_dropdown.onclick = function () {
  dropdown_dropped = !dropdown_dropped;
  set_dropdown();
};
/*--------*/
