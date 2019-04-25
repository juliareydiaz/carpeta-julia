/**
 * programa de calculos estadisticos como la media arimetica
 * que es la suma de los elementos/el numero de elementos
 * 
 */
/*function suma(x=0,y=0){
     return Number(x)  + Number (y)
 }

 //ES6 spread operador (agrupado)
 function sumaplus (x=0,y=0,...otros){
     if (otros){
         console.log('sinUsar' , otros)
     }
 }

 console.log(suma ('2','5') )
 console.log(suma (2) )
 
 console.log(suma (2,5,6,8) )*/
 

 /**
  * function mediaAr
  * @param datos: array |... num
  * returns : number
  */
 //[3,4,3]
 function mediaAR(datos =[],...masDatos) {
     if(!Array.isArray(datos)){
         // no es una array
         datos = [datos]
         datos=datos.contac(masDatos)
     let r=0
     //let sumatorio=0
     for (let i = 0; i < datos.length; i++) {
         const element = datos[i];+element
         r= r+element
         
        // sumatorio = sumatorio+element
      
         
     }
     r = r /datos.length
     //console.log(sumatorio)
    // console.log(datos.length)
     return r
     
 }
 let numeros=[3,5,6,4,6,2,5]
 
 console.log(mediaAR(numeros))

  console.log(mediaAR(3,5,6,4,6,2,5))