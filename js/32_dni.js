/**
 * programa que comprueba la letra de un dni
 * la letra se asigna a partir de un array preestablecido,
 * selecicionando la posicion correspondiente al desto del numero entre 23
 */
/**
 * funcion calculaLetraDni
 * @param dni: string
 * @returns: string
 * 
 */
function calculaLetraDni(dni) {
    letrasDni=['T','R','W','A','G','M','Y','D','X','B','N','J','Z','S',
    'Q','V','H','L','C','K','E','T'];
   // let num =dni % 23
   // return (letrasDni [num])
   return (letrasDni [dni % 23]) 
}

/**
 * function isLetraDniValida
 * @param dni :string (formato nnnnnnnn - l)
 * @returns:boolean
 * 
 */
//1r- length=2
//99.999.999r-length =9

function  isLetraDniValida (dni='') {
    r=false
   let letra = dni[dni.length -1]
   let numero = dni.slice(0,dni.length -1)
   numero=formateaNumero(numero)
   if (letra === calculaLetraDni(numero)){r=true}
   return r
   
   

    
    
}
/**
 * function formateaNumero
 * @param cadena:string
 * @returns:string
 */

 function formateaNumero(cadena) {
     let aCadena=cadena.split('')
     for (let i = 0; i < aCadena.length; i++) {
         const item = aCadena[i];
         if (isNaN(item)) {
            aCadena.splice(i,1)
             
         }
         
     }
     return aCadena.join('')
 }

 (function () {
    let miDni ='50.821.728-p'
    //console.log(calculaLetraDni (miDni))
    console.log(isLetraDniValida(miDni))
    //console.log(formateaNumero(miDni))
    
})()