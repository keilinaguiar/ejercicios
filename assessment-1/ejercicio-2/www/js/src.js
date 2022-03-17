'use strict';
let nombre = '';
let apellido = '';
let cafe = '';

nombre = prompt('Cúal es tu nombre ?');
apellido = prompt('Dime tu primer apellido');
cafe = prompt('Te apetece café?');
if (cafe === 'si') {
    console.log(`¡Bienvenid@ ${nombre} ${apellido} ! En breves recibirá su café calentito en casa`);

} else {
    console.log(`¡Bienvenid@ ${nombre} ${apellido}! Hoy no hay café.`);
}
