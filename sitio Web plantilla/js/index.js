document.getElementById("cont1").addEventListener("click", function(){
    document.getElementById("v1").classList.add("aparecer");
    document.getElementById("c1").style.opacity=1;
});

document.getElementById("cont2").addEventListener("click", function(){
    abrir("v2", "c2");
});

let objeto3 = document.getElementById("cont3");
objeto3.addEventListener("click", function(){
    abrir("v3", "c3");
});

function abrir(id, c){
    document.getElementById(id).classList.add("aparecer");
    document.getElementById(c).style.opacity=1;

}

document.getElementById("cancel1").addEventListener("click", function(){
    cerrar("v1", "c1");
});
document.getElementById("cancel2").addEventListener("click", function(){
    cerrar("v2", "c2");
});
document.getElementById("cancel3").addEventListener("click", function(){
    cerrar("v3", "c3");
});
document.getElementById("cancel4").addEventListener("click", function(){
    cerrar("v4", "c4");
});

function cerrar(id, c){
    document.getElementById(id).classList.remove("aparecer");
    document.getElementById(c).style.opacity=0;

}



/** **************************************************************************     Función Scroll */
var contenedor = document.getElementById("cont_art");

function mostrarElementos(){
    var scrollPant = document.documentElement.scrollTop;
        var alturaElemento = contenedor.offsetTop;

        if((alturaElemento-250 < scrollPant) && (alturaElemento > scrollPant-350)){
            document.getElementById("art1").style.opacity=1;
            document.getElementById("art1").style.transform="translateX(0rem)";
            document.getElementById("art2").style.opacity=1;
            document.getElementById("art2").style.transform="scale(1)";
            document.getElementById("art3").style.opacity=1;
            document.getElementById("art3").style.transform="translateX(0rem)";
        }else{
            document.getElementById("art1").style.opacity=0;
            document.getElementById("art1").style.transform="translateX(8rem)";
            document.getElementById("art2").style.opacity=0;
            document.getElementById("art2").style.transform="scale(0.8)";
            document.getElementById("art3").style.opacity=0;
            document.getElementById("art3").style.transform="translateX(-8rem)";
        }
}
window.addEventListener("scroll", mostrarElementos);