let nombres=['Pepe','Juan','Bernardete','Penelope','Eustaquio']

//slice es una funcion inmutable
console.log(nombres.slice(3,4))

//splice es una funcion mutable


let newnombres=nombres.splice(1,1)
console.clear()
console.log(nombres)
console.log(newnombres)

// colas y pilas - todas son mutables
nombres.push()//añade al final

nombres.pop()//quita al final
nombres.shift()//permite quitar el primero
nombres.unshift()//añadir al principio

nombres.push('Aurora')




let datos=[1,70,7,5,9]
let masDatos=[1,4,6]
datos.push(masDatos)
console.log(datos)