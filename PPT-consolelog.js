// cond ? true : false
// var user 
// 0-Piedra | 1-Papel | 2-Tijera 

var cpu = Math.floor(Math.random() * 2); // Genera un número entero aleatorio entre 0 y 2
var user = prompt('0 - Piedra\n1 - Papel\n2 - Tijera\nIngresa un numero:');
var userN = Number(user);

if (cpu === userN) {
    console.log('Empataste.');
}else if (userN==0 && cpu==1){
    console.log('Perdiste. Elegiste piedra y la máquina papel.')
}else if (userN==0 && cpu==2){
    console.log('Ganaste. Elegiste piedra y la máquina tijera.')
}else if (userN==1 && cpu==0){
    console.log('Ganaste. Elegiste papel y la máquina piedra.')
}else if (userN==1 && cpu==2){
    console.log('Perdiste. Elegiste papel y la máquina tijera.')
}else if (userN==2 && cpu==0){
    console.log('Perdiste. Elegiste tijera y a máquina piedra.')
}else if (userN==2 && cpu==1){
    console.log('Ganaste. Elegiste tijera y la máquina papel.')
}else{
    console.log('Elige una opción correcta.')
};
