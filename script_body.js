const mainbackground = document.getElementById("paralax");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    mainbackground.style.backgroundPositionY = offset * 0.7 + "px";
})

var cadre_sport1 = document.getElementById("item1");
var cadre_sport2 = document.getElementById("item2");
var cadre_sport3 = document.getElementById("item3");
var cadre_sport4 = document.getElementById("item4");
var cadre_sport5 = document.getElementById("item5");
var cadre_sport6 = document.getElementById("item6");
var cadre_sport7 = document.getElementById("item7");

var cadre_sportList = [cadre_sport1, cadre_sport2, cadre_sport3, cadre_sport4, cadre_sport5, cadre_sport6, cadre_sport7]

const wrapper = document.getElementById("wrapper")

window.onload = function(){

    for (let i = 0; i < cadre_sportList.length; i++) {
        cadre_sportList[i].onmouseenter = function(){
            cadre_sportList[i].firstElementChild.style.transition = "all 0.5s";
            cadre_sportList[i].firstElementChild.style.marginBottom = "0px";
        }
        cadre_sportList[i].onmouseleave = function(){
            cadre_sportList[i].firstElementChild.style.transition = "all 0.5s";
            cadre_sportList[i].firstElementChild.style.marginBottom = "-70px";
        }
      }
      

}