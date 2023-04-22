let list =[

    {name: "Rodolfo", testGrade: 7},
    {name: "Maria", testGrade: 5},
    {name: "João", testGrade: 8},
    {name: "Bruno", testGrade: 9},
    {name: "Carla", testGrade: 3},
    {name: "Ana", testGrade: 2},
    {name: "Julio", testGrade: 10},
    
    ]

   let newList = list.map(clientes =>{

    let listaCliente = {
        name: clientes.name,
        testGrade: clientes.testGrade >=7 ? "Aprovado": "Reprovado"

     } 
     return listaCliente


   })

   console.log(newList)