/**
 * calculo de factorial mediante recursivilidad
 */
 /**
  * funcion factorial
  * @param limite :number
  *  @returns:array[num]
  * 
  */

  //5!=5*4!=5*4*3

 function factorial(num) {
    
    if (num < 0 || parseInt (num) !== num)  {
  throw `los numeros negativos no tienen factorial`
    
   
    }  else if(num===0){
        return 1
    }
    else if (num===1){
       return num 
    }
     
     else if (num >170) {
        throw `no puedo calcular factoriales tan grandes`
       
        
    }
    return num *factorial(num-1)
}
let n=0
n=-3
n=4.6
n=1
n=5
n=6
n=170
n=171
try{
    console.log(factorial(n))
}catch (error){
    console.log(error)
}
console.log(factorial(5))