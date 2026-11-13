
// 2.1. Verificador de edad
let edad = 18; 

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}


// 2.3. Verificador de número par o impar
let numero = 7; 

if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}


// 2.5. Comprobador de notas
let nota = 8; 

if (nota < 4) {
    console.log("Reprobado");
} else if (nota >= 4 && nota <= 7) {
    console.log("Aprobado");
} else {
    console.log("Excelente");
}

// 4.1. Números del 1 al 10
console.log("--- Números del 1 al 10 ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("--- Números del 10 al 1 (descendente) ---");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("--- 20 iteraciones con Template Literals ---");
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}