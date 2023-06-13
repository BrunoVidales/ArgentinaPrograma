// EJERCICIOS 2

const readlineSync = require('readline-sync');

// a.

let numero = readlineSync.question("Ingresa un numero del 1 al 12: ");

numero = Number(numero);

let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

let dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

switch(numero){
    case 1:
        console.log("La cantidad de dias del mes de %s es %i", meses[numero -1], dias[numero -1]);
        break;
    case 2:
        console.log("La cantidad de dias del mes de %s es %i", meses[numero -1], dias[numero -1]);
        break;
    case 3:
        console.log("La cantidad de dias del mes de %s es %i", meses[numero -1], dias[numero -1]);
        break;
    case 4:
        console.log("La cantidad de dias del mes de %s es %i", meses[numero -1], dias[numero -1]);
        break;
    case 5:
        console.log("La cantidad de dias del mes de %s es %i", meses[numero -1], dias[numero -1]);
        break;
    case 6:
        console.log("La cantidad de dias del mes de %s es %i", meses[numero -1], dias[numero -1]);
        break;
    case 7:
        console.log("La cantidad de dias del mes de %s es %i", meses[numero -1], dias[numero -1]);
        break;
    case 8:
        console.log("La cantidad de dias del mes de %s es %i", meses[numero -1], dias[numero -1]);
        break;
    case 9:
        console.log("La cantidad de dias del mes de %s es %i", meses[numero -1], dias[numero -1]);
        break;
    case 10:
        console.log("La cantidad de dias del mes de %s es %i", meses[numero -1], dias[numero -1]);
        break;
    case 11:
        console.log("La cantidad de dias del mes de %s es %i", meses[numero -1], dias[numero -1]);
        break;
    case 12:
        console.log("La cantidad de dias del mes de %s es %i", meses[numero -1], dias[numero -1]);
        break;
    default:
        console.log("Hubo un ERROR en el ingreso del valor solicitado.");
}






