let user ={
nombre:'pepe',
edad:23,
curso: 'front'
}
console.log(user)

//let userstring = {nombre:'pepe',edad:23,curso: 'front'}
let cadena= JSON.stringify(user)

console.log(cadena)
console.log(JSON.stringify(cadena))



let alumno1={
    nombre:'elena',
    edad:28,
    curso: 'javascript'
    }
    alumno2 =JSON.parse(JSON.stringify(alumno1))
    alumno2.nombre='carlos'
    alumno2.curso='diseño'

    alumno3 =Object.assign({},alumno1)
    alumno3.nombre='raul'
    
    
    
    console.log(alumno1)
    console.log(alumno2)
    console.log(alumno3)
