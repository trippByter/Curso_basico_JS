// Coerción: cambiar el tipado de un valor
// Coerción implícita es cuando el lenguaje nos ayuda y cambia de un tipo de valor a otro
// Coeción explícita es cuando nosotros obligamos a cambiar el tipado

// Coerción implícita
var a = 4 + '7'; // 47 - Concat los dos tipos de valores en un string. Operación suma
typeof a; // String

4 * '7'; // 28 - Hace la operación multiplicación. Convierte el '7' en número
typeof b; // Number

// Coerción explícita
var a = 20; // Number
var b = a + ""; // Coerción explícita a través d concat con ""
typeof b //String 
var c = String(a); // Coerción explícita a través d método String
typeof c; //String
var d = Number(c); // Coercin explícita a través d método Number
typeof d; // Number