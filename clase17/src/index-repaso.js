//METODOS DE ARREGLOS

//arreglo.forEach() --> no devuelve nada

//arreglo.map() --> devuelve un nuevo arreglo

//funcion flecha es anaonima porque no tienen  ningun identificador

//arreglo.filter() --> devuelve un nuevo arreglo
const numeros = [1,2,3]
const nuevoArreglo = numeros.filter((numero)=>{
  return numero >1
}) 
console.log(nuevoArreglo)

// funcion find()
/*const numeros = [1,2,3]
const nuevoArreglo=numeros.find( // --> devuelve el primer elemento que cumpla la condicion 
  (numero)=>{
    return >10
  }
)
console.log(nuevoArreglo)*/


// ===========================
//          DOM Y API 
// ==========================
