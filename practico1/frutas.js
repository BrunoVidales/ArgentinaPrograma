                            //5. Manejo de arreglos:

//a. Crea un arreglo vacío con el nombre de frutas.
let frutas = [];

//b. Agrega cinco frutas distintas al arreglo. Puede ser mediante el uso de variables o no.
frutas.push('Manzana', 'Banana', 'Pera', 'Melon', 'Naranja');
console.log( frutas);

/* c. Deberás obtener la última fruta agregada y guardarla en la variable
ultima. Además deberás imprimir su valor por consola, respetando el
siguiente formato */

let ultima = frutas.pop();
console.log("La ultima fruta agregada  fue %s", ultima);

/* d. Deberás obtener la primera fruta agregada y guardarla en la variable
primera. Además deberás imprimir su valor por consola, respetando el
siguiente formato */

let primera = frutas.shift();
console.log("La primera fruta agregada fue %s", primera);