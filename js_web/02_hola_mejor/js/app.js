/* Función manejadora de eventos (Event Handler) */
function despedirse () {
    console.log('Adios desde un fichero JS')
}


console.log('Hola desde el script')


function saludar () {
    console.log('Hola desde una funcion')
}

function onMouseOver() {
    consolelo.log('El  raton esta dentor')
}
function onMouseOut(){
    console.log ('El raton salio')
}
function cuadrados (item){return item*item}


/**
 * accesos al dom (document.querySelector)
 */
window.onload= function (){
let datos =[1,2,3,4,5]
console.log(datos.map (cuadrados))

document.querySelector('#btn-saludar').onclick = saludar
//document.querySelector('#button:nth-of-type(2)').onclick=desperdirse
document.querySelector('#btn-despedirse').onclick=desperdirse
document.querySelector('#div-raton').onMouseOver=onMouseOver
document.querySelector('#div-raton').onMouseOut=onMouseOut 
}
