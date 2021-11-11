// O lista. Estructura de datos y un tipo objeto. Guarda distintos valores
var frutas = ['Manzana', 'Plátano', 'Cereza', 'Fresa']; // Sintaxis de un array. Accedemos mediante el nombre de la var
console.log(frutas); // Muestra por consola el contenido del array
console.log(frutas.length); // Cantidad de elementos
console.log(frutas[0]);// Acceder a cada elemento - Manzana
console.log(frutas[1]);// Acceder a cada elemento - Plátano
console.log(frutas[2]);// Acceder a cada elemento - Cereza
console.log(frutas[3]);// Acceder a cada elemento - Fresa
var masFrutas = frutas.push('Uvas'); //AGREGAR elementos AL FINAL del array
var ultimo = frutas.pop(); // ELIMINA ÚLTIMO elemento y lo GUARDA en una var
var nuevaLong = frutas.unshift('Naranja'); // AGREGAR NUEVO ELEMENTO al INICIO
var borrarFruta = frutas.shift(); // ELIMINA PRIMER ELEMENTO
var poscicion = frutas.indexOf('Cereza'); // Ayuda a saber la poscion de un elemento