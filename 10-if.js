// Las condicionales son reglas que se aplican para validar si algo es true or false
if (true){ // En los parentesis va la condición
    console.log('hola'); // Lo que se realiza si se cumple la condicion
}
//
if (true){ // En los parentesis va la condición
    console.log('hola'); // Lo que se realiza si se cumple la condicion
}else{ // Va sin parentesis porque no hay nada que validar
    console.log('es falso');
}
//
var edad = 18;
if (edad === 18){ // En los parentesis va la condición
    console.log('Puedes votar. 1ra votacion'); // Lo que se realiza si se cumple la condicion
}else if (edad > 18){ // Validar más de una condicion, si la primera no es true
    console.log('Puedes votar de nuevo.');
}else{
    console.log('Aun no puedes votar');
}
// Operador ternario. Genera un if y else en una sola línea
conditon ? true : false;

var numero = 1;
// En la var resultado, almacenamos el true o false
//              ||condicion   ||true           ||false
var resultado = numero === 1 ? 'Si, soy uno' : 'No soy uno';
resultado;