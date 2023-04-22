/*

[ ] Escreva um programa onde, você chame uma função enviando um número 
(aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

*/

function tabuada (valor){

    if(valor > 10 || valor < 1){
        console.log ("somente numero de 1 a 10")
        return

    }

    for(i=0; 10 >= i; i++){

        result = valor * i

        console.log(`${valor} X ${i} = ${result}`)




    }




}


tabuada(0)