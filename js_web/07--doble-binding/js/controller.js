export function controller(){
    
    console.log ('controller cargado')
   
    let nombre=''
    let msgInicial=''

     /**nodos del DON */

    const inNombre =document.querySelector('#in-nombre')
    const btnBorrar = document.querySelector('#btn-borrar')
    const output =document.querySelector('#output')

    msgInicial=output.innerHTML + ''

/**asignar manejador de eventos */
inNombre.addEventListener('input', onInputNombre)
btnBorrar.addEventListener('click',borrar)

function onInputNombre (){
nombre = inNombre.value
output.innerHTML = msgInicial + nombre.toUpperCase()

}

function borrar(){

}



}