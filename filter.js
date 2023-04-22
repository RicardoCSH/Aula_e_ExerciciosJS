let list =[

    {name: "Rodolfo", vip: true},
    {name: "Maria", vip: false},
    {name: "João", vip: true},
    {name: "Bruno", vip: true},
    {name: "Carla", vip: false},
    {name: "Ana", vip: true},
    {name: "Julio", vip: false},
    
    ];

    const justVips = list.filter (client =>{

        return client.vip
    })

    console.log(justVips)

