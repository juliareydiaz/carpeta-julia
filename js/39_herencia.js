//personas
//alumnos



function persona(nombre, edad) {  
    

}

User.prototype.saludar = function(aQuien ='amigo'){  
    console.log(`hola ${aQuien}, soy ${this.nombre}`)
}

function alumno(nombre,edad, curso) { 
    this.nombre = nombre
    this.edad = edad 
    this.curso = curso
}

Alumno.prototype= new persona
Alumno.prototype.constructor= alumno

const alumno1= new alumno('pepe',23,'javascritpt')
const alumno2= new alumno('Elena',22,'javascritpt')

console.log(alumno1)
alumno1.saludar()
alumno2.saludar(alumno1.nombre)
/////////////////////////////////
//basandose en la idea de que los objetos de douglas crockford
console.clear()

const person1 = {
    nombre :'Pepe', 
    edad : 33,
    saludar : function(aQuien = 'amigo'){  
        console.log(`hola ${aQuien}, soy, ${this.nombre}`)
    }
    
}
user1=Object.create(person1)
user1.clave='1234'
 

console.log(user1)
 console.log(user1.nombre)
 user1.saludar()
