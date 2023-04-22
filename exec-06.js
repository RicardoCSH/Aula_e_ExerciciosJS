/**
 * 
 * 
 * [ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos.
 *   A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário;
 *  - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!
 */




/* let pessoa1 = {

    nome: "Ricardo",
    salario: 2000,
    filhos: 1

}

let pessoa2 = {

    nome: "Rita",
    salario: 2500,
    filhos: 1

}

let pessoa3 = {

    nome: "Pedro",
    salario: 1500,
    filhos: 2

} */

let pessoa = [
    {

    nome: "Ricardo",
    salary: 3500,
    numberofChildren: 2



},
{

    nome: "Rita",
    salary: 3400,
    numberofChildren: 2




},
{

    nome: "Rael",
    salary: 2100,
    numberofChildren: 0


},
{
    nome: "Ana",
    salary: -2000,
    numberofChildren: 2


}]

function buscartotalpessoas(pessoainfo) {

    let averageSalary = 0
    let averageChildren = 0
    let highestSalary = 0

    for (let i = 0; i <= pessoainfo.length; i++) { 

        let salary = pessoainfo[i].salary //3500
        let children = pessoainfo[i].numberofChildren //2


        if (salary > highestSalary) highestSalary = salary //highestSalary = 3500

        if (salary < 0) { //salario = 3500 é menor que zero (não) -- Pula --

            console.log(`Media de salario R$${(averageSalary / i).toFixed(0)}`)
            console.log(`Media de Filhos ${(averageChildren / i).toFixed(0)}`)
            console.log(`Maior Salario ${highestSalary}`)

            break

        } else {

            averageSalary = averageSalary + salary;  // 3500 + 0
            averageChildren += children

        }


    }

}

buscartotalpessoas(pessoa)


