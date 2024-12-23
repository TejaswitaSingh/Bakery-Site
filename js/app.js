const bars=document.querySelector("#bars")
const navRight=document.querySelector(".nav-right")
const navbarOverlay = document.querySelector(".navbar-overlay")
const cross=document.querySelector("#cross")

bars.addEventListener(
    "click",
    function(){
        navRight.classList.add("open")
        navbarOverlay.classList.add("open-navbar-overlay")
        bars.style.display="none"
        cross.style.display="block"
    }
)

navbarOverlay.addEventListener(
    "click",
    function(){
        navRight.classList.remove("open")
        navbarOverlay.classList.remove("open-navbar-overlay")
        bars.style.display="block"
        cross.style.display="none"
    }
)

document.addEventListener(
    "scroll",
    function(){
        if(window.scrollY>52){
            document.body.classList.add("stick")
        }else{
            document.body.classList.remove("stick")
        }
    }
)