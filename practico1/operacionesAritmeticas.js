                        /*PARTE 2: COMANDOS BÁSICOS
                        3. Operadores aritméticos:*/

//a. Crea cuatro variables que contengan valores numéricos.
let num1 = 2;

let num2 = 0;

let num3 = 44;

let num4 = 22;

//b. Suma las dos primeras variables y guarda el resultado en otra variable.
let suma = num1 + num2;
//console.log("El resultado es", suma);

//c. Resta la cuarta variable de la tercera y almacena el resultado en otra variable.
let resta = num3 - num4;
//console.log("EL resultado es", resta);

/* d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el
resultado en una variable llamada resultadoFinal. El producto debe ser
44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales. */
let resultadoFinal = suma * resta;
//console.log("El resultado es", resultadoFinal);

//e. Escribe un cálculo que verifique si resultadoFinal es un número par. Almacene el resultado en una variable llamada esPar.
let esPar = resultadoFinal % 2 === 0;

//f. Imprima por consola un mensaje con el siguiente formato:
console.log("Mis variables iniciales fueron %i, %i, %i y %i. La respuesta a verificar si el resultado final es par es:",
num1, num2, num3, num4, esPar);


