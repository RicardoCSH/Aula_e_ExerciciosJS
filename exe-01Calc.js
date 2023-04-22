/*

-Function
- calculadora

*/


function calc (number1,number2,operador){
    
    let result


    switch (operador){

        case "+":
       result = number1 + number2
       break;

       case "-":
        result = number1 - number2
        break;

       default:
        break;

    }
    return result

}

console.log(calc(2,4,"-"))