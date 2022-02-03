const videoJs = document.querySelectorAll(".videoJs");
let delayDiapo = 5000;

window.onload = () => {
  affichage();
};
let i = 0;
let flag = 1;

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
