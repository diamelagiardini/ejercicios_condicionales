const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
    if (pasoTests === true && tieneMultasImpagas === false && pagoImpuestos === true) {
        return true
    }
    else return false
}

puedeRenovarCarnet(true, true, true) 
puedeRenovarCarnet(true, true, false)   
puedeRenovarCarnet(true, false, true)  
puedeRenovarCarnet(true, false, false) 
puedeRenovarCarnet(false, true, true)  
puedeRenovarCarnet(false, true, false) 
puedeRenovarCarnet(false, false, true) 
puedeRenovarCarnet(false, false, false) 

console.log(puedeRenovarCarnet(true, true, true));
console.log(puedeRenovarCarnet(true, true, false) );
console.log(puedeRenovarCarnet(true, false, true));
console.log(puedeRenovarCarnet(true, false, false));
console.log(puedeRenovarCarnet(false, true, true));
console.log(puedeRenovarCarnet(false, true, false));
console.log(puedeRenovarCarnet(false, false, true));
console.log(puedeRenovarCarnet(false, false, false));