// En ES6 se utizan let y const para declarar variables

let nombre // Declarar
nombre = 'Pepe' // Inicializar

let edad = 34 // Declarar e inicializar

// Tipos de datos
/* en otros lenguajes hay declaracion explicita y obligatoria de tipos
int "x"-> variable x de tipo entero sin valos

En js los tipos son 
-debiles -no se declaran explicitamente :son implicitos al valor
-dinamicos-:pueden cambiar

*/


// undefined
let data
console.log(data)
console.log(typeof data)


// A - DATAS Primitivos

// strings
data = 'Hola amigos'
console.log(data)
console.log(typeof data)

// numbers
data = 35
console.log(data)
console.log(typeof data)

// booleans
data = true
data = false
console.log(data)
console.log(typeof data)

// B - Datos referenciados

// object
data = { name: 'Pepe', age: 34}
console.log(data)
console.log(typeof data)

// object tipo array
data = [23, 45, 78]
data = ['Lunes', 'Martes', 23, 78, true, undefined, {}]
console.log(data)
console.log(typeof data)

function mostrar() {}

console.log(mostrar)
console.log(typeof mostrar)
mostrar()