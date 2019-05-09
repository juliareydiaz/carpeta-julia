class Persona {
    constructor( nombre,edad){
        this.nombre = nombre
        this.edad = edad
        this.alma=true
    }
    saludar (aQuien ='amigo') {
        console.log(`hola ${aQuien},soy ${this.nombre}`)
    }
}
person1= new persona('pepe',23)
person1.altura=175
console.log(person1)
person1.saludar()


class alumno extends persona{
    constructor(nombre,edad,curso){
        super(nombre,edad)
        this.curso =curso
    }
    saludar(aQuien='amigo')
    console.log()


}
alumno1('elena',22,'worpress')
console.log(alumno1)
alumno1.saludar()