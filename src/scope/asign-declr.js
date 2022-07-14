var firstName; //undefined
firstName = 'Kevin';
console.log(firstName);

var lastName = 'Ken';  //declarar / asignar
lastName = 'Ron';   //reasignar
console.log(lastName);

var secondName = 'Gold';   //declarado /asignado
var secondName = 'Goldy';  //reasignado
console.log(secondName);

// let
let fruit = 'apple'; // declara y asigna
fruit = 'kiwi';      //reasignar
console.log(fruit);

let fruit = 'banana';  //syntax-error has already been declared
console.log(fruit);

// const
const animal = 'gato';  //declarado y asignado
animal = 'dog';  //reasignado type-error
console.log(animal);

const vehicles = ["jaguar", "toyota"];
vehicles.push("horse");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);