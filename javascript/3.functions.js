// functions
/*
    1. Create a function
    2. call the function
*/
// create
function fun() {
    console.log('this is a function')
    alert('this is a function');
}
// call function
// fun();

function greeting() {
    var name = prompt('what is your name?')
    console.log("hellow " + name);
}
// greeting()

// how do argument works in functions
function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
// number
sumNumbers(30,3);
// string
sumNumbers("hello" , "world");