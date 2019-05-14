 export function main (){
      let aQuien=''
      let msg=[`hola `,`adios `]
       
    
    /** selecionar nodosdel DOM */

  let inNombre =document.querySelector('#inNombre ')
  let btnSaludar=document.querySelector('#btnSaludar')
  
  let btnDespedirse=document.querySelector('#btnDespedirse')
  


/**asignar manejadores a los nodos */
btnSaludar.addEventListener('click', saludar)   
btnDespedirse.addEventListener('click',despedirse)

function saludar(){
        aQuien=inNombre.value
        console.log(msg[0]+aQuien)
         }
  

        function despedirse(){
        
            aQuien=inNombre.value
        console.log(msg[1]+aQuien)
   
        }

}
 

  



      

    
