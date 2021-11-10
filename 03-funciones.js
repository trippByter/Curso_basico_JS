// Conjunto de sentencias que se utiliza para
// ejecutar acciones con los valores guardados en las variables

// Funcion Declarativa
function miFuncion() { // Se utiliza el nombre de la funcion para reservar espacio en memoria 
    return 3;           // y guardar la operacion que se realiza dentro de la funcion
}
miFuncion(); // Aqui llamo a la funcion con el nombre de la funcion

// Funcion de expresion o anonima porque no tiene nombre. Pero la var q lo contiene, si.
var miFuncion = function(a, b) { // Variable que contiene  el valor de una funcion
    return a + b;            // Esta funcion tiene parametros que son llamados por la funcion
}                               // Cuando esta funcion es llamada, debe recibir los prmtrs.

miFuncion(a, b);// Aqui llamo a la funcion con el nombre de la variable

function saludarEstudiante(estudiante) { // Se declara la funcion sin un parametro definido
    console.log(estudiante);
}
saludarEstudiante("Mario Bros"); //Se llama la funcion con el parametro
//Ejemplo de Template string
function saludarEstudiante(estudiante) { // Se declara la funcion sin un parametro definido
    console.log(`Hola ${estudiante}`); //Genera un string y lo liga a una variable
}
saludarEstudiante("Mario Bros"); //Se llama la funcion con el parametro
//Obtener resultados de una funcion sin el console.log()
function sumar(a, b) { //Funcion recibe dos parametros
    var resultado = a + b; //Esta variable contiene la operacion a + b
    return resultado; //devuelve el valor de la variable resultado
}
//Obtener resultado sin generar variable que guarda el resultado
function sumar(a, b){
    return a + b; //Operacion directa
}