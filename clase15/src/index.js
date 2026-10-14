//Estructuras de control de Bucle 
for(let i=0; i<=10; i++){
  console.log(i);
}

//Arreglos
// no primirivos
const numeros =[10, [21,20], 30]
console.log(numeros[1][0]);


//primitivos son literales 
//almacena literales 
let numero = 5
let numero1 = 5
numero ===numero1

//no primitivos almacenan como referencia (accede a un lugar en la memoria)
let numero2 = [1]
let numero3 = [1]
numero2===numero3 //false porque son diferentes arrays

console.log(numero2[0]===numero3[0]); //true porque compara estrictamente el valor

for(let i=0; i< numeros.length; i++){
  console.log(numeros[i]);
}

//objeto lo organiza por clave:valor accede por su clave
//arreglo lo organiza o accede por indice 

//======================
//OBJETOS

const persona = {
  nombre:'Andres',
  edad:20,
  estudia: true,
  redes: [
    'instagram',
    'tiktok'
  ],
  otros: {
    mascotas:2
  }
}

console.log(persona.otros.mascotas)

