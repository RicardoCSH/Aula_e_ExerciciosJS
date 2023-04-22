let students = [


    {name:"Ricardo", age: 35},
    {name: "Maria", age: 70},
    {name: "Rael", age: 2},
    {name: "Rita", age: 34},
];


let allStudentsAge = 0

students.forEach((student, idade)=>{

    allStudentsAge += student.age
    

})


let averageAge = allStudentsAge / students.length

console.log(averageAge.toFixed(0))