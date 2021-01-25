let student = [
    {
        "name":"afif",
        "age" : 23,
        "height" : 172
    },
    {
        "name":"wijaya",
        "age" : 22,
        "height" : 175
    }
]

console.log(student);
// with parse
let students = `[
    {
        "name":"afif",
        "age" : 23,
        "height" : 172
    },
    {
        "name":"wijaya",
        "age" : 22,
        "height" : 175
    }
]`

console.log(JSON.parse(students));
console.log(JSON.parse(students)[0]);
console.log(JSON.parse(students)[0].name);