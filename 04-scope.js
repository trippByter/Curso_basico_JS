//Scope es el alcance que tienen las variables. Depende de donde declares e inicialices
//una variable de si vas a tener acceso a ella o no
var nombre = "Elimp Hadzy"; //Scope Global
function fun(){
    var apellido = "Tregee Natoo"; // Scope local
    return nombre + "" + apellido // Accedemos al scope global(nombre) y al local(apellido)
}
fun(); // "Elimp Hadzy Tregee Natoo"
// Ejemplo donde el scope no es del alcance de la funcion
function fun(){
    var apellido = "Tregge Natoo";
    return nombre + "" + apellido
}
console.log(apellido)// apellido is not defined