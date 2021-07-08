const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => {
    if(asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada === true) {
        return true
    }
    else {
        return false
    }
}

puedeGraduarse(80, 50, true)  // true
console.log(puedeGraduarse(80, 50, true) );
puedeGraduarse(80, 50, false) // false
console.log(puedeGraduarse(80, 50, false));
puedeGraduarse(80, 45, true)  // false
console.log(puedeGraduarse(80, 45, true));
puedeGraduarse(80, 45, false) // false
console.log(puedeGraduarse(80, 45, false));
puedeGraduarse(65, 50, true)  // false
console.log(puedeGraduarse(65, 50, true));
puedeGraduarse(33, 55, false) // false
console.log(puedeGraduarse(33, 55, false));
puedeGraduarse(42, 45, true)  // false
console.log(puedeGraduarse(42, 45, true));
puedeGraduarse(28, 45, false) // false
console.log(puedeGraduarse(28, 45, false));

