// Змінні в JavaScript
// var - не використовуємо в сучасному коді :)
// const - використовуємо в першу чергу 
// let - лише тоді, коли треба переприсвоїти



// String

// Number
// 42, 53.5, 5e10, Infinity/-Infinity, NaN
// + - * / %

// Boolean
// true, false




const message = 'Hello JavaScript!';
alert(message);
const newMessage = 'Щось нове';
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const age = Number(prompt('Введіть ваш вік'));
const nextAge = add(age, 1);
console.log(nextAge);
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

if (age >= 18) { // > < <= === !== || &&
    console.log('Повнолітній');
} else {
    console.log('Неповнолітній');
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function add(a, b) {
    const sum = a + b;
    return sum;
}

const add = (a, b) => a + b;
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
