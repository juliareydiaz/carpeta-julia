export function controller() {

  console.log('Cargado el controller')

  /** Nodos del DOM */

 const btnSaludar =document.querySelector('#btn-saludar')
  const btnHell=document.querySelector('#btn-hell')
  
  
  /** Manejadores de eventos */
  btnHell.addEventListener('click',onSaludar)
  btnSaludar .addEventListener('click',onHell)

  function msgAfterTineout (msg,nombre,tiempo,cb) {
      
    setTimeout(function () {
          cb(msg,nombre);
      },tiempo);
};


  function onSaludar(){
      msgAfterTineout('hola','pepito',2000,(msg,nombre)=>
 {console.log(msg,nombre)
    })

msgAfterTineout('hola que tal','juanito',3000,(msg,nombre)=> {
    document.querySelector('#output').innerHTML = msg + ' ' + nombre.toUperCase() 
    })
  }
  
  function onHell(){
       msgAfterTineout('juanito','pepito',3500,(msg,nombre) =>{
      let saludo=(`hola ${nombre}!`)
      let quienSoy=msg
      console.log(saludo)
      msgAfterTineout (msg,saludo,500 ,(quienSoy,saludo) => {
          console.log(`${saludo},soy ${quienSoy}`)
      })
  })
  
  }
 
 


 

  
}