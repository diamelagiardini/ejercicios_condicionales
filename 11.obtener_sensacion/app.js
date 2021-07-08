const obtenerSensacion = (temperatura) => {
    if (temperatura <= 0) {
        return "¡Está helando!"
    } 
    else if (temperatura >= 0 && temperatura <= 15) {
        return "¡Hace frío!"
    } 
    else if (temperatura >= 15 && temperatura <= 25) {
        return "Está lindo"
    } 
    else if (temperatura >= 25 && temperatura <= 30) {
        return "Hace calor"
    } 
    else if (temperatura >= 30) {
        return "¡Hace mucho calor!"
    }
}

obtenerSensacion(33);
console.log(obtenerSensacion(33));