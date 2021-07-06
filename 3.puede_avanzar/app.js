
const puedeAvanzar = (colorSemaforo) => {
    if (colorSemaforo == "verde") {
        return true
    } if (colorSemaforo == "amarillo") {
        return false
    } if (colorSemaforo == "rojo") {
        return false
    }
}

puedeAvanzar('verde');  
puedeAvanzar('amarillo');
puedeAvanzar('rojo');
puedeAvanzar('lila');

console.log(puedeAvanzar('verde'));
console.log(puedeAvanzar('amarillo'));
console.log(puedeAvanzar('rojo'));
console.log(puedeAvanzar('lila'));