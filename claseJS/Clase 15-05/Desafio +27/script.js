let personas = [
    {
        nombre : "Ana",
        edad: 23
    },
    {
        nombre : "Juan",
        edad: 30
    },
    {
        nombre : "Camila",
        edad: 27
    },
    {
        nombre : "Juana",
        edad: 21
    }

];

let personasConMasDe27 = personas.filter( persona => persona.edad >= 27);


console.log(personasConMasDe27);
