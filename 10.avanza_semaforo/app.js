const avanzarSemaforo = (colorActual) => {
    if (colorActual === "verde") {
        return "amarillo"
    } 
    else if (colorActual === "amarillo") {
        return "rojo"
    } 
    else if (colorActual === "rojo") {
        return "verde"
    }
}

avanzarSemaforo('verde');
avanzarSemaforo('amarillo');
avanzarSemaforo('rojo');

console.log(avanzarSemaforo('verde'));
console.log(avanzarSemaforo('amarillo'));
console.log(avanzarSemaforo('rojo'));
