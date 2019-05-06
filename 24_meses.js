/**
 * creamos un objeto con los nombres de los meses en español como propiedades
 * y sus equibalentes en otro idioma (e.g ingles)como valor
 * y añadimos una funcion que muestre por consola la frase 
 * "el mes...en ingles de dice ..."
 */
let meses= {
Enero :'January',
Febrero :'Februar' ,
Marzo :'March' ,
Abril :'April' ,
Mayo : 'May' ,
Junio : 'June',
Julio :'July',
Agosto:'Augus',
Septiembre:'September',	
Octubre:'October',	
Noviembre:'	November',
Diciembre:'December',	

toString: function() {
    let output = ''
    for (const key in this) {
        const element = this[key]
        if (typeof element === 'function') {
            continue
        }
        output += `El mes ${key} en ruso se dice ${element}` + '\n'
    }
    return output
},
mostrar: function() {
    console.log(this.toString())
},    
}
meses.mostrar()