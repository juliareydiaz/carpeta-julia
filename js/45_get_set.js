// Ejemplo de 'pseudopropiedad' getter

let persona = {
    nombre: 'Pepe',
    nacim : new Date(1965, 8, 31),
    calcularEdad:function(){
      return parseInt(((new Date() - this.nacim )/(1000*60*60*24*365)))

    },
    get edad () {
        return parseInt(((new Date() - this.nacim )/(1000*60*60*24*365)))
    },
    amigos: [],
    set nuevoAmigo(amigo) {
      this.amigos.push(amigo);
    }   
}

persona.nuevoAmigo = 'Antonio'
console.log(persona)
console.log(persona.edad)


/**
 * 
 * en java,c#
 * class persona{
 * private edad
 * }
 * p1=new persona()
 * p1.edad=23//error por que la propiedad es privada
 * console log(p1.edad)//error no se puede ver
 */