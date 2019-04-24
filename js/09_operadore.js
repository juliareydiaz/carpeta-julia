//asignacion

let x=23
//x=x+1
x++
//x= x-1
x--

//aritmeticos

let y = 2

let 
r= x + y //25
r= x - y //21
r= x * y //46
r= x / y //11.5
r=parseInt(x/y) //11
//r=Math.round()
//r=Math.ceil()
//r=Math.floor()
r=x % y

console.log('resultado',r)
 y =2
y+=3
//y=y+3
y-=3
// y =y-3
y*=2
y/=3
y%=3

//operador ternario

let edad = 15
let i 
if(edad >=18){
    i=0
}
else{
    i=1
}
edad=25
 i=(edad >=18)?0:1
 console.log ('indice',i)

 //objetos en notacion json
  let user ={
     nombre:'pepe',
     edad:23,
 }
console.log (user)

 //arrays muy importante
  let numeros=[12,25,67]
  let usuarios=['pepe','juan','rosa','maria']
  console.log(usuarios[0])
  usuarios[usuarios.length]='ramon'
  usuarios[usuarios.length]='carolina'
  usuarios[100]='ernesto'
console.log (usuarios.length)

//mensajes al usuarios

let mensajes=[
    'bienvenido al casino',
    'no se admiten menores',
]
console.log(mensajes[1])

//ejemplo de booleano 
//let=23
//Boolean(x)
//!!x

//var1 && (var2 || var3)