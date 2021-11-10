// Es cuando se declaran las variables y las funciones
// antes que se procese cualquier tipo de codigo.
// Solo ocurre con versiones pasadas de JS. De EMACS5 hacia abajo

//Aqui estamos mandando un var sin declararla ni inicializarla,
//Al pasar por el compilador, este la declara SIN NINGUN VALOR, por eso devuelve un undefined
console.log(miNombre);
miNombre = 'Deghien';

//Aqui imprime por consola, primero el undefined y luego el valor de la variable
//porque cambiamos el valor a una var ya declarada e inicializada
var miNombre = undefined;
console.log(miNombre + 'soy ese hoisting');
miNombre = 'Felipe';

//Aqui se llama la funcion antes de declararla. Las funciones de declaran antes q las var
//Lleva la funcion 'hey()' hasta arriba, la declara y despues declara las var
//Luego lleva la var miNombre y la declara como undefined y luego continua con el codigo
//BUENAS PRACTICAS:  T o d a s  las func. se declaran al  i n i c i o  del codigo.
hey();
function hey(){
    console.log('hola ' + miNombre);
}
var miNombre = 'Vittorio'; 