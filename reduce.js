


let list = [1,2,3,4]


let newList = list.reduce ((acc, current) => { 

    return acc + current

       
}, 0)

console.log(newList)