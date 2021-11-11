//Otra forma de validar, de generar una condicion. Se valida ciertas cosas
//Funciona por casos. Si el caso es verdad, sucede esa parte, sino se genera otros casos
//Si nada de los casos es verdad, entramos en default
var numero = 1;
switch (numero){ //Aquí de valida algo. No es condicion. Es validar
    case 1: // Si el parametro corresponde al case, se ejecuta
        console.log('Soy uno!');
        break; // Rompe la validación y nos regresa los que solicitamos de la validación
    case 10: //Si el parametro es diez
        console.log('Soy un diez!');
        break;
    case 100: //Si el parametro es cien
        console.log('Soy un cien!');
        break;
    default: //Si el parametro no corresponde a ningun caso
        console.log('No ni uno ni diez ni cien');
}