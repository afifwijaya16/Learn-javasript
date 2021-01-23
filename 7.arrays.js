let fruits = ['banana', 'apple', 'orange', 'pinnaple'];
// let fruits = new Array('banana', 'apple', 'orange', 'pinnaple');

// alert(fruits[0]); //access value at index first

fruits[0] = 'pear';
console.log(fruits);

for(let i =0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// array common methods

console.log('to string ', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.pop(), fruits); // remove last items
console.log(fruits.push('blackberries'), fruits); // appends
console.log(fruits[3]);
fruits[fruits.length] = 'new fruit'; //same has push
console.log(fruits);
fruits.shift(); //remove first element from a array
console.log(fruits);
fruits.unshift('kiwi'); //add first element from a array
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); //combine array
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort()); //sort string

let someNumbers = [5,10,2,25,3,1,5,6,344,555]
console.log(someNumbers.sort(function(a,b){ return a-b })); // sort number asc
console.log(someNumbers.sort(function(a,b){ return b-a })); // sort number desc

// make array 
let emptyArray = new Array();
for(let num = 0; num < 10; num++ ) {
    emptyArray.push(num);
}

console.log(emptyArray);