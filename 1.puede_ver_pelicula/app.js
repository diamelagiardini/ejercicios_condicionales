const puedeVerPelicula = (edad, tieneAutorizacion) => {
    if(edad >= 15 || tieneAutorizacion === true) {
        return true
    }
    else {
        return false
    }
}

puedeVerPelicula(12, false)
puedeVerPelicula(12, true)
puedeVerPelicula(16, false)
puedeVerPelicula(18, true)

console.log(puedeVerPelicula(12, false));
console.log(puedeVerPelicula(12, true));
console.log(puedeVerPelicula(16, false));
console.log(puedeVerPelicula(18, true));