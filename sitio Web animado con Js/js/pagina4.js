/*Variables de las imagenes*/
var img1=document.getElementById('imagen1');
var img2=document.getElementById('imagen2');
var img3=document.getElementById('imagen3');
var img4=document.getElementById('imagen4');

/* Evento a realizar con cada variable */

img1.addEventListener('click', function(){ abrirGaleria(1) });
img2.addEventListener('click', function(){ abrirGaleria(2) });
img3.addEventListener('click', function(){ abrirGaleria(3) });
img4.addEventListener('click', function(){ abrirGaleria(4) });

document.getElementById('imagen5').addEventListener('click', function(){ abrirGaleria(5) });
document.getElementById('imagen6').addEventListener('click', function(){ abrirGaleria(6) });
document.getElementById('imagen7').addEventListener('click', function(){ abrirGaleria(7) });
document.getElementById('imagen8').addEventListener('click', function(){ abrirGaleria(8) });

/* Función que abre la ventana modal */

function abrirGaleria(numImagen){
    var visor=document.getElementById("galeria");
    var image= document.getElementById("imagen");
    
    visor.style.opacity=1;
    visor.style.height="100%";
    visor.style.zIndex=100;
    image.style.opacity=1;
    image.style.height="500px"
    image.src="images/city"+numImagen+".jpg";

    cerrar.style.opacity=1;

    num=numImagen;
}

var cerrar= document.getElementById("cerrarGaleria");

cerrar.addEventListener("click", function(){
    var visor=document.getElementById("galeria");
    var img= document.getElementById("imagen");
    
    visor.style.opacity=0;
    visor.style.height=0;
    visor.style.zIndex=-10;
    cerrar.style.zIndex=-1;
    
    img.style.opacity=0;
    img.style.height=0;
    
});


////////////////////////////////                Pasar imagenes en el modal          ////////////////////////////////

var num;
var cantidadImagenes=8;

function siguiente(){
    num++;

    if(num>cantidadImagenes){
        num=1;
    }
    var imagen= document.getElementById("imagen");
    imagen.src="images/city"+num+".jpg";
}


function anterior(){
    num--;

    if(num<1){
        num=cantidadImagenes;
    }
    var img= document.getElementById("imagen");
    img.src="images/city"+num+".jpg";
}

