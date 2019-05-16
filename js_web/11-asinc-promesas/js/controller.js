export function controller() {

    console.log('Cargado el controller')

    /** Nodos del DOM */
    const btnPedir = document.querySelector('#btn-pedir') 
    const btnSaludar = document.querySelector('#btn-saludar') 
    const btnSaludar17= document.querySelector('#btn-saludar-17')
    const btnUser = document.querySelector('#btn-users') 
    
    const output = document.querySelector('#output') 
   
    
    /** Manejadores de eventos */

    btnPedir.addEventListener('click', onPedir)
    btnSaludar.addEventListener('click', onSaludar)
    btnSaludar17.addEventListener('click', onSaludar17)
    btnUser.addEventListener('click', onUser)
  
  
  let aDatos=[1,2,3,4,5]
   aDatos .map((x,indice,Array)=>{x*indice})
   
   
    /**
    * una promesa es un objeto nativo desde ES6
    * que representa la terminacion o el fracaso eventual
    * de una operacionasincrona
    * 
    * una promesa es un objeto devuelto
    * al cual encadenas las funciones caballback,
    * en vex de pasar funciones calback a una fucion
    * 
    */

    function completarPedido (){
        return new Promise((resolve,reject) => {
        setTimeout(() => {
         if  (Math.random () > 0.3) { //70%simulamos aciertos 
            resolve('toma tu hanbrugesa')
        }
        else{//el otro  30% simulamos errores
          reject('lo siento,no me quedan hambrugesas')
        }
        },2000)
    })

    }

     function onPedir() {
     
        completarPedido()
        .then((datos) => {
            output.innerHTML +='<li>'+ datos + '</li>'
        })
        .catch ((error) => {
            output.innerHTML += '<li>'+ error+ '</li>'
        })
        
    }



    /*function msgAfterTimeout (msg, nombre, tiempo, cb) {
        setTimeout(function () {
            cb(msg, nombre);
        }, tiempo);
    };
    

   
   
    

}
 
 
msgAfterTimeout( 'Juanito', 'Pepito', 3500, (msg, nombre) => {
    let saludo = (`Hola ${nombre}!`)
    let quienSoy = msg
    console.log(saludo)
    msgAfterTimeout(msg, saludo, 500, (quienSoy, saludo) => {
        console.log(`${saludo}, soy ${quienSoy}`)
    })
})        
*/ 

 

  function msgAfterTimeout(msg,nombre,tiempo){
      return new Promise((resolve) => {
          setTimeout(() => {
              let datos=[msg,nombre]
              resolve([datos])
          }, tiempo)
      })
  }

 
function onSaludar(){
    msgAfterTimeout('Juanito', 'Pepito', 3500)
     .then( ([datos]) => {
    
        let saludo = (`Hola ${datos[1]}!`)
        let quienSoy = datos[0]
        console.log(saludo)
        return msgAfterTimeout (quienSoy, saludo, 500)
     })
     .then ((datos) => {
        console.log(`${datos}, soy ${datos}`)
     })
    }
    /**
     * en ES 2017
     * 
     */
    async function onSaludarAwait(){
        let datos=[]
        datos= await msgAfterTimeout('Juanito', 'Pepito', 3500)
        let saludo = (`Hola ${datos[1]}!`)
        let quienSoy = datos[0].toUpperCase()
        console.log(saludo)
        datos = await msgAfterTimeout (quienSoy, saludo, 500)
            console.log(`${datos[1]}, soy ${datos[0]}`)
         }

         function onUser(){
             const url='http://jsonplaceholder.typicode.com/users'
             fetch(url)
             .then((response)=>{return response.json()})
             .then((data)=>{console.log})
         }
    }







/** function onSaludar(){
msgAfterTimeout('Juanito', 'Pepito', 3500)
 .then( ([msg,nombre]) => {

    let saludo = (`Hola ${nombre}!`)
    let quienSoy = msg
    console.log(saludo)
    return msgAfterTimeout (msg, saludo, 500)
 })
 .then ((quienSoy,saludo) => {
    console.log(`${saludo}, soy ${quienSoy}`)
 })
 }*/ 
//fetch().then().catch()