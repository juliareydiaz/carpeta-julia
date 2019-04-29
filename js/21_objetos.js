/**
 * notacion litera o json
 */
//user1=new usuario
//user2=new usuario

let user1={
    nombre: 'pepe',
    edad:24,
    isAlumno:true,
    direccion:{
        calle: `pez`,
        num:"3",
        poblacion:`Madrid`,
    },
    saludar:function(){
        console.log(`hola, soy ${this.nombre} y tengo ${this.edad} años`)
    },altura:179
}
let user2={
    nombre:`rosa`,
    edad:27,
    curso:`front`,
}
user1.nobre=`jose`,
user1.curso=`back`,

user1.saludar()