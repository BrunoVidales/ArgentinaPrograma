// EJERCICIO 3

const readlineSync = require('readline-sync');

let numero = readlineSync.question("Ingresa un numero entero ");

numero = Number(numero);
numero =  parseInt(numero);

if(numero > 0 && numero % 2 == 0){
    console.log("El numero es positivo y par");
} else if(numero > 0 && numero % 2 !== 0){
    console.log("El numero es positivo e impar");
}else if(numero < 0){
    console.log("El numero es negativo");
}else{
    console.log("El numero es cero");
}