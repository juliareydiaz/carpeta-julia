let datos=[]
//let datos =new array()
datos=[1,2,3,5,7,9]
datos.push(45)

function numeroAlAzar100() {
    return parseInt(Math.random()*100)
    
    
}

/**
 * crea un array de n aliatorios ,como minimo uno
 * 
 * fuction aleatorios
 * @param:limite:number
 * @returns:array[number]
 */
function aelatorios(limite=1) {
    let r=[] 
    for (let i = 0; i < limite; i++) {
         r[i] = numeroAlAzar100()
        
    }
    return r
    
}
console.log(aelatorios(12))

function prueba(params) {
    let datos=[1,70,7,5,9]
    let masDatos=[1,4,6]
    let arrayFinal=datos.concat(masDatos)
 console.log(datos)
 console.log(arrayFinal)


 // temp =datoscopiar referencias
//clonar un array
// temp.sort()ordena alfabeticamente
 
let temp=datos.slice(0)//ordena
 
 temp.sort((a,b) => a,b)
 console.clear()
console.log('estos es temp')
console.log(temp)
 console.log('esto es datos')
 console.log(datos)
}
prueba()

/**  function dni(letra) {
     let
     
 }
console.log(59835678 % 23)**/
    
