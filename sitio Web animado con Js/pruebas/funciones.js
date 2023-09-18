

/*esta funcion no recibe parametro, por eso el parentesis está vacio, dentro de la funcion se obtiene el elemento con id "contenedor" que está en el HTML y a su lista de clases le AÑADE la clase "cambiaColor"*/
function color(){
    document.getElementById("contenedor").classList.add("cambiaColor");
}

/*Esta funcion busca el elemento con clase "quitar" en el HTML y añade un evento de escucha. Cuando se haga click en este elemento, se ejecuta la funcion.*/
document.getElementById("quitar").addEventListener("click", function(){

/*dentro de la funcion se obtiene el elemento con id "contenedor" que está en el HTML y a su lista de clases le QUITA la clase "cambiaColor"*/
    document.getElementById("contenedor").classList.remove("cambiaColor");
});

/*Se declara una variable "titulo" y como valor se le pone aquel elemento del HTML con id "poneQuita" */
var titulo = document.getElementById("poneQuita");

/*en esta línea lo que se hace es, con la variable creada en la línea anterior, se le añade un evento de escucha. Cuando se haga click en este elemento, se ejecuta la funcion.  */
titulo.addEventListener("click", function(){
    
    /*dentro de la funcion se obtiene el elemento con id "contenedor" que está en el HTML y con la funcion TOGGLE se QUITA y se AÑADE a su lista de clases, la clase "cambiaColor"*/
    document.getElementById("contenedor").classList.toggle("cambiaColor");
});




/*////////////////////////////////////       CON PARAMETROS            ////////////////////////////////////// */

/* se declara una variable de nombre "objeto" y como valor se pone el elemento del html cuya clase es "redondo" */
var objeto = document.getElementById("redondo");

/*En esta funcion se recibe un parametro llamado "colorcito" */
function fondo(colorcito){

    /* afecta al estilo css de la variable "objeto" y le cambia el background-color por el color que almacena "colorcito"*/
    objeto.style.backgroundColor=colorcito;
}




/*/////////////////////////////////////////      tercer circulo      //////////////////////////////////////////// */

var objetoMovil = document.getElementById("el_que_se_mueve");

function hacer_mover(){
    objetoMovil.classList.add("mover");
}


document.getElementById("quita_el_movimiento").addEventListener("click", function(){
    objetoMovil.classList.remove("mover");
})












































































// var numero1=40;
// var numero2=20;
// var resultado;

// function suma(){
//     resultado=numero1+numero2;
//     document.write("El resultado es: "+resultado+"<br>")
// }


// function suma_con_parametros(num1, num2){
//     resultado=num1+num2;
//     document.write("El resultado de la suma con parametros es: "+resultado+"<br>")
// }



