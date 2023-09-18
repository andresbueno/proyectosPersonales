let input = document.getElementById("input");


//numeros
let cero = document.getElementById("cero");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let punto = document.getElementById("punto");


//operaciones
let clear = document.getElementById("clear");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");
let igual = document.getElementById("igual");

//variables auxiliares

let num1=0;
let num2=0;
let operacion="";

//funciones
const escribir=(number)=>{
    input.value += number;
};

const guardarNum1 = ()=>{
    num1=parseFloat(input.value);
    input.value=" ";
}

//al precionar un número
cero.addEventListener("click", function(){
    escribir(0);
})
uno.addEventListener("click", function(){
    escribir(1);
})
dos.addEventListener("click", function(){
    escribir(2);
})
tres.addEventListener("click", function(){
    escribir(3);
})
cuatro.addEventListener("click", function(){
    escribir(4);
})
cinco.addEventListener("click", function(){
    escribir(5);
})
seis.addEventListener("click", function(){
    escribir(6);
})
siete.addEventListener("click", function(){
    escribir(7);
})
ocho.addEventListener("click", function(){
    escribir(8);
})
nueve.addEventListener("click", function(){
    escribir(9);
})
punto.addEventListener("click", function(){
    escribir(".");
})


// Al precionar operaciones

clear.addEventListener("click", function(){
    input.value="";
});
suma.addEventListener("click", function(){
    guardarNum1();
    operacion="+";
});
resta.addEventListener("click", function(){
    guardarNum1();
    operacion="-";
});
multiplicacion.addEventListener("click", function(){
    guardarNum1();
    operacion="*";
});
division.addEventListener("click", function(){
    guardarNum1();
    operacion="/";
});
igual.addEventListener("click", function(){
    num2=parseFloat(input.value);

    if(operacion=="+"){
        input.value=num1+num2;
    }
    else if(operacion=="-"){
        input.value=num1-num2;
    }
    else if(operacion=="*"){
        input.value=num1*num2;
    }
    else if(operacion=="/"){
        input.value=num1/num2;
    }else if(operacion==""){
        input.value=" ";
    }
    operacion="";
});