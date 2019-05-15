export function main () {

  let aQuien = ''
  let msg = [`Hola `, `Adios `]

  /** Seleccionar nodos del DOM */
  let inNombre = document.querySelector('#in-nombre')
  let btnSaludar = document.querySelector('#btn-saludar')
  let btnDespedirse = document.querySelector('#btn-despedirse')
  let btnborrar=document.querySelector('#btnborrar')
  let output=document.querySelector('#output')

  
  /**Asignar manejadores a los nodos */
  btnSaludar.addEventListener('click', saludar)
  btnDespedirse.addEventListener('click', despedirse)
  btnborrar.addEventListener('click',borrar )   
  /* btnSaludar.addEventListener('click', () => {
          aQuien = inNombre.value
          console.log(msg[0] + aQuien)
  }) */
  
  function saludar () {
    if(inNombre.value){
      aQuien = <b>+ inNombre.value+ </b>
     output.innerHTML=msg[0]+aQuien
    }
  }

  function despedirse() {
    if( inNombre.value){
      aQuien = <b>+ inNombre.value+ </b>
       output.innerHTML=msg[1]+aQuien
    }
  }
  borrar(){
    let.output.innerHTML=''
    let.inNombre.value=''
  }


}




      

    
