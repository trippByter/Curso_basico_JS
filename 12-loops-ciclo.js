// Es un manera rápida y sencilla de hacer que una tarea pueda repetirse
// Sin tener que hacerlo de forma manual
// Generamos una funcion dentro de un ciclo y mientras la condicion se cumpla
// Seguirá pasando de forma repetida, hasta que se rompa

var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel'];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`); // Por cada elemento en el array, el loop ejecuta esta
}                                       // tarea, sin tener que hacerlo manual
// Empezamos el loop
//decl init i|var menor q long. array|i + 1
for(var i = 0; i < estudiantes.length; i++){
    console.log(estudiantes[i]); // Llama el array en la posicion del indice de 'i'.
}
// Invocamos funcion conteniendo array
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]); // Llama la función que contiene el console.log
}                                       // Llama el array en la posci. 'i'
// Iniclzms una var en singular del array plural. Mientras hayan elementos, seguira ejec.
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}