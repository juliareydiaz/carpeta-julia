let data=11;
console.log (duplicar (data))
console.log(data)
//los datos primitivos pasan la funcion

function duplicar (x){
  x= x * 2
  return x

}

let user= {nombre : `pepe`,edad: 23}
matricular (user)
console.log (user)

function matricular (obj){
    
    obj.curso=`javascript`
}