function main(){
    let cadena='hola amigo'
    let alumno={
        saludar:function(){}
    }
    //letalumno =new object()
    let users=['pepe','elena','julia']
    //let users=new Array()

    console.log(typeof users)
    //en otros lenguajes tolowerCsase(cadena)
  
  
    console.log(cadena.toLowerCase()) 
   
    //let cadena temp=new string()  
    console.log(cadena.length) 
let acadena=cadena.split(' ')
 let cadenaSinespacios = acadena.join ('')
 cadena =cadena.toUpperCase().split(' ').join('').toUpperCase()
console.log(cadena)


let url='https://www.cife.es/alumnos/ingresos/pepito'

let urltem=url.slice(url.indexOf('//')+2)

let urltem=urltem.slice(0,urltem.indexOf('/'))
//console.log(urltem)

let aUrl =url.split('/')
console.log(url.split('/')[2])
console.log(url[12])


}


main()