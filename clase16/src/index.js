// metodos de arreglos 
const numeros = [2,8,4,6,12]

const numerosConIncremento = []

numeros.forEach((numero, indice, arregloCompleto)=>{
  // const incremento = numero + 1
  // numerosConIncremento.push(incremento)
  numeros[indice] = numero + 1
})

console.log(numerosConIncremento)

// .foreach(cb){
//    cb(cadaElementoDelArreglo)
// }

const numeroConIncremento = numero.map((numero)=>{
    return numero + 1
})

console.log(numeroConIncremento)

//Investigar filter y fine 
