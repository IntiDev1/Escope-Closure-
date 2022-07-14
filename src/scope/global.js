// variable

var a; //declarado
var b = 'b'; //declaramos / asignamos
b = 'bb'; //reasignacion
var a = 'aa' //redeclaracion

// global scope
var fruit = 'apple'; //global

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = 'New York'; //global
    console.log(country);
}

countries();
console.log(country);