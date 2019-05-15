export function controller () {

    console.log('Controller cargado')
    
    
    /**nodos del  DOM */

    let btnMostrar=document.querySelector( '#btn-Mostrar')
    let btnSaludar=document.querySelector( '#btn-saludar')
    let btnLeer=document.querySelector( '#btn-leer')

/**manejadores de eventos */

    btnMostrar.addEventListener('click',mostrar)
    btnSaludar.addEventListener('click',saludar)
    btnLeer.addEventListener('click',leer)
   
   
   
   
   
   
   
   
   function mostrar(){

     //setTimeout(saludar,1000)
   /**function saludar() {
        Console.log('hola amigo')
        
    }*/
    
    
    setTimeout(()=>console.log('Item1'),0)
    
    console.log('Item2')
    
    setTimeout(()=>console.log('Item3'),2000)
    
    console.log('Item4')
    
    setTimeout(()=>console.log('Item5'),1000)
    
    
    
    
    
    //setTimeout(() =>console.log ('Item 3'),2000)
   }
   
   
   function saludar(){
       console.log('hola amigo')
   }
        function leerdatos(){
            let i 
           setTimeout(() =>{
           i=33    
            mostrarDato()
          },
          1000),
       
       
   

        function mostrarDato(){
            console.log( i )  }

}
}   