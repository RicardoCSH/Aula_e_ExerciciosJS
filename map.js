
let numbers = [1,2,3,4]
let students = [


    {name:"Ricardo", age: 35},
    {name: "Maria", age: 70},
    {name: "Rael", age: 2},
    {name: "Rita", age: 34},
];


let newArray = numbers.map((number) => {

    return number * 2
})

console.log(newArray)