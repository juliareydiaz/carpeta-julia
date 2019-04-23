let data = 11
console.log(duplicar(data))
console.log(data)

// Los datos primitivos pasan a la función como valores
function duplicar(x) {
    x = x * 2
    return x
}
ref1={nombre: 'Pepe', edad: 23}

let user1 = ref1
matricular(user1,'html')
console.log(user1)
let user2={nombre: 'rosa'}
matricular(user2)
console.log(user2)
function matricular(obj , curso='JavaScript') {
    obj.curso = curso
}