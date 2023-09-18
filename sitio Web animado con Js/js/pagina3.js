

////////////////////////////////                  Animacion menu            ///////////////////////////////////

var cerrar = document.getElementById("cerrarMenu");
var abrir = document.getElementById("abrirMenu");
var menu = document.getElementById("PanelMenu");

abrir.addEventListener("click", function(){
    menu.style.left="0px";    
    abrir.style.opacity=0;
    cerrar.style.zIndex=11;
    cerrar.style.opacity=1;
});

cerrar.addEventListener("click", function(){
    menu.style.left="-200px";
    abrir.style.opacity=1;
    cerrar.style.zIndex=9;
    cerrar.style.opacity=0;
});


/*//////////////////////////                   Animacion con scroll                  ////////////////////////*/

var rueda = document.querySelectorAll(".circulo"); // vectores inician en posicion 0.
 
function rodarElementos(){
    var scrollP = document.documentElement.scrollTop;
    for(var i=0; i < rueda.length; i++){
        var alturaScroll = rueda[i].offsetTop;        

        if(alturaScroll-350 < scrollP){
            rueda[i].classList.add("rodar");
        }/*else{
            rueda[i].classList.remove("rodar");
        }*/
    }
}

window.addEventListener("scroll", rodarElementos);