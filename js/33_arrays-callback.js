let numbers =[5,8,23,45,67,56,89]
let cuadrados=numbers.map(item=> item*item)

 let sumatotal=0
 for (let i = 0; i < numbers.length; i++) {
     const item = numbers[i];
     sumatotal+=item
     
 }

 let sumaCuadrados=0
 cuadrados.forEach(item => sumaCuadrados += item)
 let numberspares=numbers.filter(item =>!(item%2))
 let innumberspares=numbers.filter(item => item%2)

 let =limit =25
 let numbersGrandes=numbers.filter(item => item>=limit)

 let productoAcumulado=numbers.reduce((a,b)=>a*b)
 let sumaAcumulado=numbers.reduce((a,b)=>a+b)
 

console.log (cuadrados)
console.log(sumatotal)
console.log(numberspares)
console.log(innumberspares)
console.log(productoAcumulado)
console.log(sumaAcumulado)