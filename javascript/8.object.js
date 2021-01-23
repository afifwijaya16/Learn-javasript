// objects in javacript 

let student = {
    first: 'afif',
    last:'wijaya',
    age: 23,
    height:173,
    studentInfo: function() {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};
console.log(student.first);
console.log(student.last);
student.first = 'awi'; //change value;
console.log(student.first);
student.age++;
console.log(student.age);

console.log(student.studentInfo())