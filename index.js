
function foo() {
    return 'bar';
}

const foo = function() {
    return 'bar';
};


//Declare a Function Using An Arrow Function
const foo = () => {
    return 'bar';
};


const add = (parameter1, parameter2) => parameter1 + parameter2;
add(2,3); //=> 5


//Describe Situations Where Arrow Functions Are Used
//1. When you want to return a function from a function
const add = (parameter1, parameter2) => {
    return function() {
        return parameter1 + parameter2;
    }
}
add(2,3)(); //=> 5
