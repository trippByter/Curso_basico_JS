// Se usan en condiciones. Se usan para validar si algo es verdadero o falso

// Estos valores darán false
Boolean(); // false
Boolean(0); // false. Si estamos trabajando con números, el cero dará 'false'
Boolean(-0); // false
Boolean(+0); // false
Boolean(null); // false
Boolean(NaN); // false
Boolean(undefined); // false
Boolean(false); // false
Boolean(""); // false

// Estos valores darán true
Boolean(" "); // true. Contiene el caracter espacio
Boolean("a"); // true.
Boolean(-1); //true. contiene un valor numérico distinto de cero, ya sea negtv o postv
Boolean([]); // true. Los arrays vacios dan true
Boolean({}); // true. Los objetos vacios dan true
Boolean(function(){}); // true. Las funciones vacias dan true
Boolean(true); // true