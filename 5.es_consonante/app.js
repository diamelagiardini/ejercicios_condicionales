const esConsonante = (letra) => {
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        return false
    } 
    else {
        return true
    }
}

esConsonante('a');
esConsonante('n');

console.log(esConsonante('a'));
console.log(esConsonante('n'));