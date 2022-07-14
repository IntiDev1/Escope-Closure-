'use strict';  //reference-error pi is not defined
pi = 3.1416;
console.log(pi);


function myFunction() {
    'use strict'    //reference-error pi is not defined
    return pi = 3.1416;
}

console.log(myFunction());