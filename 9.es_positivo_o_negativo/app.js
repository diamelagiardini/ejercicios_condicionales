const esPositivoONegativo = (numero) => {
    if (numero < 0) {
        return "Negativo"
    } if (numero > 0) {
        return "Positivo"
    }
}

esPositivoONegativo(3)
esPositivoONegativo(-5)

console.log(esPositivoONegativo(3))
console.log(esPositivoONegativo(-5))