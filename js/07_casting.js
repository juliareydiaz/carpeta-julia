//existen los operadores arimeticos + - * / % (modulo)

let x =22
let nombre= 'pepe'
let z ='2'

z= Number (z)
// let division =10/2
let division = x / z

console.log (division)
console.log (typeof z)

//nan
division = x / nombre
console.log (division)
console.log(0/0)
console.log(-1/0)
/*nan equivale al concepto matematico de indeterminacion
0/n =0
n/0= infinito
0/0 = nan
*/

// si quiero evitar indeterminaciones devo validar los datos


function dividir (x,y){

 if ( isNaN (x ) || isNaN (y) ) {
     console.log ('operadores invalidos')
     return
 }
 console.log('la division da ', x/y ,'€')
}
 
dividir (x,z)
dividir(x,nombre)

console.log ('la suma da', x +z )


//si hay string tiene preferencia la concatenacion
console.log(x+z)

// para evitarlo tenemos que formar el casting

console.log(parseFloat (x) + parseFloat (z))

console.log(Number (x) + Number (z))
console.log(+x + +z)
console.log(true)