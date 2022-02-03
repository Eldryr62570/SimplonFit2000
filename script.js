const navbar = document.getElementById("navbar")
const tap_dropdown = document.getElementById("tap_dropdown")
const dropdown = document.getElementById("dropdown")
var dropdown_dropped = false


window.onload = function(){
    set_dropdown()
    bonjour.style = 7;
}

function set_dropdown(){
    if (dropdown_dropped == false){
        dropdown.style.opacity = "0"
        dropdown.style.height = "0"
    }else{
        dropdown.style.opacity = "1"
        dropdown.style.height = "40vh"
    }
}

window.addEventListener("scroll", event => {

    if (window.scrollY > window.innerHeight*0.07){
        var opacity = 1 + (window.innerHeight*0.07-window.scrollY)/100;

        if (opacity>0.5){
            navbar.style.backgroundColor = "rgb(0,0,0,"+String(opacity)+")"
        }else{
            navbar.style.backgroundColor = "rgb(0,0,0,0.5)"
        }
    }else{navbar.style.backgroundColor = "rgb(0,0,0,1)"}

}, { passive: true });

window.addEventListener('click', function(e){
	
	if (!dropdown.contains(e.target) && !tap_dropdown.contains(e.target)){
        dropdown_dropped = false; set_dropdown(); // Si on clique en dehors de la box ET du tap_dropdown
  }
  
})

tap_dropdown.onclick = function(){
    dropdown_dropped = !dropdown_dropped; set_dropdown();
}