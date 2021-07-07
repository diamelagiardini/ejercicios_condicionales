// Solo con if


// const esPositivoONegativo = (numero) => {
//     if (numero < 0) {
//        return "negativo"
//     } 
//     if (numero > 0) {
//         return "positivo"
//     }
//  }

 // Con if else 

const esPositivoONegativo = (numero) => {
    if (numero > 0) {
        return "positivo"
    } else{
        return "negativo"
    }
}


esPositivoONegativo(3)
esPositivoONegativo(-5)

console.log(esPositivoONegativo(3))
console.log(esPositivoONegativo(-5))