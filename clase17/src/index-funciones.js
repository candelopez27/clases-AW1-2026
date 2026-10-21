//FUNCIONES

//Funcion traadicion/Declaracion
function suma(a, b) {
    return a + b;
}

/*const resultado = suma(2, 3)
console.log(resultado); */

const modulo = function(a,b){
  return a%b
}

//flecha o fatArrow = son anonimas 
const resta = (a,b)=>{
  return a-b
}

const multiplicar = (a,b) => a*b
const dividirPor2 = a=> a/2

const saludo = ()=> 'hola'

let resultado = resta(20,10)
console.log(resultado)

modulo()

//Callback
const b = (cb) =>{
  cb()
}

//funcion a pasar como argumento de b
const cb = ()=>{
  console.log('Se ejecuto el callback')
}

b(cb) 
//funcion que se pasa como argumente de otra funcion