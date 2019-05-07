/**
 * comprobar si una frase sin acentos es palindromo 
 * se lee igual en ambos sentidos ,sin contar los espacios
 * la rutanosnos aporto otro pasonatural
 * atar ala rata
 */

 /**
  * function ispali
  * @param cadena :string
  * @retrun:boolean
  */
function ispalin(cadena='') {
    let r=true
    let cadenaSinEspacios=cadena.split(' ').join('').toLocaleLowerCase()
    //console.log(cadenaSinEspacios)
    let cadenainversa= cadenaSinEspacios.split('').reverse().join('')
    // console.log(cadenainversa)

     if(cadenaSinEspacios !== cadenainversa ){
          r = false
        }
     
    return r
}

(function(){
    let texto=[
    'esto no es un palindro',
    'la rutanosnos aporto otro paso natural',
    'atar ala rata'
    ]

for (let i = 0; i < texto.length; i++) {
    const texto = texto [i];
    console.log(texto)
    console.log(ispalin(texto))
}
})()
