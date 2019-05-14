export class saludador{
    constructor(){
         this.aQuien=''
        this.msg=[`hola `,`adios `]
       
    
    /** selecionar nodosdel DOM */

  this.inNombre =document.querySelector('#inNombre ')
  this. btnSaludar=document.querySelector('#btnSaludar')
  this.btnDespedirse=document.querySelector('#btnDespedirse')
  this.btnborrar=document.querySelector('#btnborrar')
  this.output=document.querySelector('#output')

  

/**asignar manejadores a los nodos */
this.btnSaludar.addEventListener('click', this.saludar.bind(this))   
this.btnDespedirse.addEventListener('click', this.despedirse.bind(this))
this.btnborrar.addEventListener('click', this.borrar.bind(this))   

}
    saludar(){
        if(this.inNombre.value){
        this.aQuien=' <b>'+ this.inNombre.value +'<b>'
       // console.log(this.msg[0]+this.aQuien)
       this.output.innerHTML=this.msg[0]+this.aQuien
    }
}
    despedirse(){
        if(this.inNombre.value){
        this.aQuien=' <b>'+ this.inNombre.value +'<b>'
       // console.log(this.msg[1]+this.aQuien)
        this.output.innerHTML=this.msg[1]+this.aQuien
   } 
}
    borrar(){
        this.output.innerHTML=''
        this.inNombre.value=''


    }
}
