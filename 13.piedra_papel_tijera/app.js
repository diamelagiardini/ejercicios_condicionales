const jugarPiedraPapelTijera = (a, b) => {
    if (a === "tijera" && b === "piedra") {
        return "¡Ganó piedra!"
    } 
    else if (a === "piedra" && b === "tijera") {
        return "¡Ganó piedra!"
    } 
    else if (a === "papel" && b === "piedra") {
        return "¡Ganó papel!" 
    }  
    else if (a === "piedra" && b === "papel") {
        return "¡Ganó papel!"
    }
    else if(a === "papel" && b === "tijera") {
        return "¡Ganó tijera!"
    }
    else if (a === "tijera" && b === "papel") {
        return "¡Ganó tijera!"
    }
    else if (a === "piedra" && b === "piedra") {
        return "¡Empate!"
    }
    else if (a === "papel" && b === "papel") {
        return "¡Empate!"
    }
    else if (a === "tijera" && b === "tijera") {
        return "¡Empate!"
    }
}

jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!


console.log(jugarPiedraPapelTijera('tijera', 'piedra'));
console.log(jugarPiedraPapelTijera('piedra', 'tijera'));
console.log(jugarPiedraPapelTijera('papel', 'piedra'));
console.log(jugarPiedraPapelTijera('piedra', 'papel'));
console.log(jugarPiedraPapelTijera('papel', 'tijera'));
console.log(jugarPiedraPapelTijera('tijera', 'papel'));
console.log(jugarPiedraPapelTijera('piedra', 'piedra'));
console.log(jugarPiedraPapelTijera('papel', 'papel'));
console.log(jugarPiedraPapelTijera('tijera', 'tijera'));