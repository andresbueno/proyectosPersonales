let ObjetoParallax = document.getElementById("parallax");

function ScrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    ObjetoParallax.style.transform = "translateY(" + scrollTop*-0.5 +"px)";
}

window.addEventListener("scroll", ScrollParallax);


















//************************************************************************************ Carrusel/Slider */

let Slider = document.getElementById("Slider");
let ImgS = document.querySelectorAll(".SliderImage");
let ImgSLast= ImgS[ImgS.length-1];

const btnA = document.getElementById("btnAnterior");
const btnS = document.getElementById("btnSiguiente");

btnA.addEventListener("click", anterior);
btnS.addEventListener("click", siguiente);

Slider.insertAdjacentElement("afterbegin", ImgSLast);

function siguiente(){
    let ImgSFirst = document.querySelectorAll(".SliderImage")[0];
    Slider.style.transform = "translateX(-200%)";
    Slider.style.transition = "all .5s";    

    setTimeout(function(){
        Slider.style.transition = "none"; 
        Slider.insertAdjacentElement("beforeend", ImgSFirst);
        Slider.style.transform = "translateX(-100%)";
    }, 500);
}

function anterior(){
    let ImgS = document.querySelectorAll(".SliderImage");
    let ImgSLast= ImgS[ImgS.length-1];
    Slider.style.transform = "translateX(0)";
    Slider.style.transition = "all .5s";    

    setTimeout(function(){
        Slider.style.transition = "none"; 
        Slider.insertAdjacentElement("afterbegin", ImgSLast);
        Slider.style.transform = "translateX(-100%)";
    }, 500);
}

setInterval(siguiente, 5000);