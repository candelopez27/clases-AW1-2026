console.log("Hello, JS!"); //log es un metodo  
//JS ES TIPADO DINAMICO Y DEBIL

//Tipo de datos primitivos: numero, cadenas y boleanos //LITERALES
//no primitivos: OBJETOS Y ARREGLOS

//--------------------variables y constantes
///string <nombreDeVariable> se llama un identificador
//declarar: existir
//
let nombre = 'Andy'  //SCOPE SERIA GLOBAL
// nombre = 1

//----------------AMBITO DE DECLARACION DE VARIABLES = SCOPE
//SCOPE LOCAL --> FUNCION

const nombre1= 'A'

//---------------- OPERACIONES

const sume = 15 + 20
//+,-,*,/, %
const numero1 = 10;
const suma = numero1+20 // --> expresion

//true / false
const edad = 18;
const mayoriaDeEdad =18;
let esMayorDeEdad = edad>=mayoriaDeEdad; //true

//controles de flujo: if, else, switch, while, for
if(edad>mayoriaDeEdad){
  console.log('Es mayor de edad');
} else if(edad === '18'){ //TRABAJAR CON ===. TENEMOS OTROS >,<, 
  console.log('Tiene 18 anios');
}
else{
  console.log('Es menor de edad');
}


//estructura de datos> arreglos 

