`use strict`

//ambitos oscope de las variables

//ambito global

let var1=20;
prueba()

//muy mala paractica
//no se acede nunca a las variables globales desde las funciones
function prueba(){
    console.log(var1)
}


//lo mismo con buenas practicas
let var2 = 30;
pruebaBien(var2)

function pruebaBien (x) {
    console.log(x)
}

//nuevo en es6 usar let en lugar de var


function condicional (){
    let ext =22;
    
    if(true){
        let data=23;
        Console.log(ext)
        console.log (data)
    }
    
    Console.log(ext)
   // console.log (data) daria un error
}
condicional()

let x = 12
function otraPrueba (){
    let  x =23;
   //x=23
   console.log(`dentro de la funcion x vale `,x)
   
}

otraPrueba()

console.log ( `fuera de la funcion x vale`,x)