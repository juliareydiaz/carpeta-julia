/**
 * dada una cadena de caracteres hay que indicar si esta formada
 * solo por letras mayusculas 
 * solo por letras minusculas
 * pola combinacion de ambas
 */
/**
 * fuction probarcadena
 * @param cadena:string
 * @returns:number
 * - 0 =solo por letras mayusculas ,
 * - 1 = solo por letras minusculas,
 * - 2 = por la combinacion de ambas,
 */

 function probarCadena(cadena=''){
     let r = 2
     if( cadena ===cadena.toUpperCase() ){
         r = 0
     }else if (cadena === cadena.toLowerCase()) {
         r=1
     }
     return r
}
/**
 * fuction comoEsLaCadena
 * @param:cadena:string
 * @returns:void
 * 
 */
function comoEsLaCadena (cadena ='') {
let mensajes=[

   'la cadena esta formada solo por letras mayusculas' ,
   'la cadena esta formada solo por letras minusculas' ,
   'la cadena esta formada por la combinacion de ambas' ,
]
console.log(mensajes[probarCadena(cadena)])
}

let texto 
texto ='LO QUE OS DE LA GANA'
comoEsLaCadena(texto)
texto='otra cosa que se os ocurra'
comoEsLaCadena(texto)
texto='Una ultima prueba'
comoEsLaCadena(texto)