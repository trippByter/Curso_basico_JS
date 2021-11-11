// Juego Piedra, Papel o Tijera
var cpu = Math.floor(Math.random() * 2); // Genera un número entero aleatorio entre 0 y 2
// Se muestra mensaje al usuario para que eliga entre piedra, papel o tijera
var user = prompt('0 - Piedra\n1 - Papel\n2 - Tijera\nIngresa un numero:');
var userN = Number(user); // Se recibe dato del usuario y se transforma a número entero
// Comparativa entre
if (cpu === userN) {
    alert('Empataste.');
}else if (userN==0 && cpu==1){
    alert('Perdiste. Elegiste piedra y la máquina papel.');
}else if (userN==0 && cpu==2){
    alert('Ganaste. Elegiste piedra y la máquina tijera.');
}else if (userN==1 && cpu==0){
    alert('Ganaste. Elegiste papel y la máquina piedra.');
}else if (userN==1 && cpu==2){
    alert('Perdiste. Elegiste papel y la máquina tijera.');
}else if (userN==2 && cpu==0){
    alert('Perdiste. Elegiste tijera y a máquina piedra.');
}else if (userN==2 && cpu==1){
    alert('Ganaste. Elegiste tijera y la máquina papel.');
}else{
    alert('Elige una opción correcta.');
};