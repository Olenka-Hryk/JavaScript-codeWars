let counterN = 1;
while (counterN <= 5) {
  console.log(counterN);
  counterN++;  
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


let counter = 100;
do {
  console.log(counter);
  counter++;  
} while (counter <= 5) 
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


let number;
do {
  number = parseFloat(prompt('Enter a number'));
  // number = Number(prompt('Enter a number'));
} while (Number.isNaN(number))
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// Факторіал  5 = 5 * 4 * 3 * 2 * 1
function fact(n) {
  if (n === 1 || n === 0) return 1;
  return n * fact(n-1);
}
fact(5);
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


//Завдання - написати код, що виводить парні числа від 100 до 42
function doSomething() {
  for(let i = 100; i >= 42; i-=2) {
        console.log(i);      
  }
}
doSomething();
console.log(i);

// for (let i = 100; i >= 42; i--) {
//   if (i % 2 === 1) continue;
//   console.log(i);
   // if (i === 42 ) break;
// }
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


for (const key in obj) {}
for (const item of array) {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



const cars = ['Mazda 3', 'Corvette C8', 'Audi RS6', 'Jeep Grand Cheerokee'];
cars[4] = 'LR RR';
console.log(cars);
console.log(cars.length);

cars[cars.length] = 'LR RR';
cars.push('Tesla Model 3');
cars.unshift('Ford F-150');
console.log(cars[3]);
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


for (let i = cars.length - 1; i < cars.length; i++) {
    console.log(cars[i]);
}

// for (let i = cars.length - 1; i >= 0; i--) {
//   console.log(cars[i]);
// }

for (const car of cars) {
  console.log(car);
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


cars.forEach(printElement);
function printElement(el) {
    console.log(el);
}

cars.forEach(function (el) {
    console.log(el);
});

cars.forEach((el) => {
    console.log(el);
});

cars.forEach( el => console.log(el));
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const starCars = cars.map( el => '*' + el + '*');
starCars.forEach( el => console.log(el));
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


const evenCars = starCars.filter( car => car.length % 2 === 0);
evenCars.forEach( el => console.log(el) );
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


starCars.reduce( (acc, el) => acc + el.length, 0);

const letters = starCars.reduce( (acc, el) => acc + el.length, 0);
console.log(letters);
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



cars.sort();
console.log(cars);
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



const nums = [1, 3, 5, 55, 42, 4, 100];
nums.sort();
console.log(nums);

nums.sort( (a, b) => b - a );

nums.sort( () => Math.random() - 0.5 );

