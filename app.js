//menu
let menuVisible = false
let menu = document.getElementById("nav")

function mostrarOcultarMenu(){
    if(menuVisible==false){
        menu.style.display = "block"
        menuVisible = true
    }else{
        menu.style.display = "none"
        menuVisible = false
    }
}

let links =document.querySelectorAll("nav a")
for(let x = 0; x< links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none"
        menuVisible = false
    }
}