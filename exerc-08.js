function descont (cliente,valorTotalCompra,primeiraCompra,avista){

    if(primeiraCompra==='sim' && avista ==='sim' && valorTotalCompra >= 1000){

        console.log(`${cliente} terá desconto de`)
        console.log((valorTotalCompra * 30) / 100 + ' de desconto')
    

    }else if (primeiraCompra==='sim' && avista ==='sim' && valorTotalCompra <= 1000 && valorTotalCompra >= 500){

        console.log(`${cliente} terá desconto de`)
        console.log((valorTotalCompra * 25) / 100 + ' de desconto')

    }

}

descont('Ricardo',800,'sim','sim')