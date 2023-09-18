/*Para la imagen 1 y 2*/

function abrir(ventana){
    document.getElementById(ventana).style.display="block";
}

function cerrar(ventana){
    document.getElementById(ventana).style.display="none";
}


/* ////////////////////////////                 Animado con funciones            //////////////////////*/

function abrirAnimado(numVentana){
    var vent = document.getElementById(numVentana);

    vent.classList.add('activa');

}

function cerrarAnimado(numVentana){
    var vent = document.getElementById(numVentana);

    vent.classList.remove('activa');

}



/*//////////////////////////                    Animacion con scroll            /////////////////////////*/

var cajon = document.querySelectorAll(".contenedores");

function mostrarElementos(){
    var scrollPant = document.documentElement.scrollTop;
    for(var i=0; i < cajon.length; i++){
        var alturaElemento = cajon[i].offsetTop;

        if((alturaElemento-200 < scrollPant) && (alturaElemento > scrollPant-350)){
            cajon[i].classList.add("centro");
           /* document.getElementById('caja1').classList.add("izquierda");
            document.getElementById('caja2').classList.add("centro");
            document.getElementById('caja3').classList.add("derecha");*/
        }else{
            cajon[i].classList.remove("centro");
           /* document.getElementById('caja1').classList.remove("izquierda");
            document.getElementById('caja2').classList.remove("centro");
            document.getElementById('caja3').classList.remove("derecha");*/
        }
    }
}

// window.addEventListener("scroll", mostrarElementos);


var contenedor = document.getElementById("contend");

function llegoAlDiv(){
    var scrollPant = document.documentElement.scrollTop;
    var alturaElemento = contenedor.offsetTop;

        if((alturaElemento-200 < scrollPant) && (alturaElemento > scrollPant-350)){
            document.getElementById('caja1').classList.add("izquierda");
            document.getElementById('caja2').classList.add("centro");
            document.getElementById('caja3').classList.add("derecha");
        }else{
            document.getElementById('caja1').classList.remove("izquierda");
            document.getElementById('caja2').classList.remove("centro");
            document.getElementById('caja3').classList.remove("derecha");
        }
}

window.addEventListener("scroll", llegoAlDiv);