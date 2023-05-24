const jeepWrangler = {
  make: 'Jeep',
  model: 'Wrangler',
  price: 50_000,                   // _ it is = 50000
  beep: function () {
    console.log('beep!');
  }
};
console.log(jeepWrangler.price);
jeepWrangler.beep();
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function Car(make, model, price) {
  // this = {};
  this.make = make;
  this.model = model;
  this.price = price;
  // return this;
}
Car.prototype.beep = function () {
  console.log(this.model + 'beep');
}
const fordF150 = new Car('Ford', 'F150', 40000);
console.log(fordF150);
fordF150.beep();
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

class SuperCar {                    // syntactic sugar
  constructor(make, model, price) {
    this.make = make;
    this.model = model;
    this.price = price;
  }
  beep() {
    console.log(this.model + 'beep');
  }
}

const ferrariLaFerrari = new SuperCar('Ferrari', 'LaFerrari', 3_000_000);
console.log(ferrariLaFerrari);
ferrariLaFerrari.beep();

class EVSuperCar extends SuperCar {
  #field = secret;                             // secret field, visibility only here
  constructor(make, model, price, batt) {
    super(make, model, price);
    this.batt = batt;
  }
  charge() {
    console.log(this.model + ' charging!');
  }
}
const hummerEV = new EVSuperCar('GM', 'Hummer', 100000, 200);
console.log(hummerEV);
hummerEV.beep();
hummerEV.charge();
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^








const circle = {
  center: {
    x: 42,
    y: 24
  },
  radius: 4224
}


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Circle extends Point {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }
  circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
  }
}


//-------------------------------------------------------------------------------------
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age);
    this.status = status;
    this.legs = 0;
    this.species = "shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age);
    this.status = status;
    this.legs = 4;
    this.species = "cat";
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age);
    this.status = status;
    this.master = master;
    this.legs = 4;
    this.species = "dog";

  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

// ---------another variant -------
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}