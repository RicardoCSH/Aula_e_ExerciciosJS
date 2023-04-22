/**
 * 
 * 
 * 
 * [ ] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.
 */


function taxaMensal (valorAtual,valorInicialInvestido, tempo){



   let juros = (valorInicialInvestido - valorAtual) / (valorAtual * tempo)
   console.log((juros * 100).toFixed(2) + '%')

}


(taxaMensal(1000,1200,10))