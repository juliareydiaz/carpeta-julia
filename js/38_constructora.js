const user1 = {
    nombre :'Pepe', 
    edad : 33,
    saludar : function(aQuien = 'amigo'){  //funcion para que user1 salude
        console.log(`hola ${aQuien}, soy, ${this.nombre}`)
    }
    
}

function User(nombre, edad) {  
    this.nombre = nombre
    this.edad = edad
   this.mascotas=[]
}
//podemos añadir metodos al prototipo de nuestras funciones constructoras


User.prototype.saludar = function(aQuien = 'amigo'){  
    console.log(`hola ${aQuien}, soy ,${this.nombre}`)
}

user.prototype.adoptarMascota=function(aQuien= new Mascota()){
    this.mascotas.push(mascota)
}



/*User.prototype.saludar = function(aQuien = 'amigo'){  
    console.log(`hola ${aQuien}, soy ,${this.nombre}`)
}*/

function Mascota(nombre, especie, raza = ''){

    this.nombre = nombre
    this.especie = especie
    this.raza = raza

}

   

let user2 = new User('elena', 23)
let user3 = new User ( 'Hugo', 40)
let mascota1 = new Mascota ('Cesar', 'Perro')
let mascota2 = new Mascota ('Titus',  'gato', 'persa')


mascota2.edad=2
delete mascota1.raza


console.log(user1)
console.log(user2)
console.log(user3)
console.log(mascota1)

user1.saludar('David')
user2.saludar('Sandra')
user3.saludar(user2.nombre)
user1.saludar(mascota1.raza  +  ''  + mascota1.nombre)
user3.saludar(mascota2.raza  +  ''  + mascota2.nombre)

user1.saludar(mascota2.raza+''+mascota2.nombre)



/* function saludar(user2){   /////////////FUNCION SUELTA////////////
    console.log(`hola, soy ${user}`)
}
saludar('Pepe') */
let aDatos=[2,4]
let aNombres=['pepe','juan']


//diferencia entre prototipos y clases

//dependencia.metodo doptarMascota

//Asociacion:atributomascota=new mascota

user.mascotas[0]=new Mascota('piolin','canario')
console.log(user3.mascotas[o].nombre)