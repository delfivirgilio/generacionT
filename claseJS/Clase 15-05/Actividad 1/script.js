// let autos = [
//     {
//         marca: "Citroen",
//         modelo: "C3",
//         año: 2013,
//         dueño: "Santiago",
//         color:{
//             capot: "negro",
//             puertas: "negro"
//         },
//         dueñosAnteriores: ["Juan"] // Lo compro 0KM
//     },
//     {
//         marca: "Honda",
//         modelo: "Fit",
//         año: 2016,
//         dueño: "Santiago",
//         color:{
//             capot: "rojo",
//             puertas: "rojo"
//         },
//         dueñosAnteriores: ["Jorge", "Iván"]
//     }
// ]

let texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error adipisci autem doloribus beatae, laudantium explicabo ut aperiam aut quam facilis corporis optio velit! Vitae itaque reiciendis incidunt accusamus culpa?";


let cadenaDeCaracteres = texto =>{
    let nuevoArray = texto.split(" ");
    console.log(nuevoArray);
    let cantidadPalabras = nuevoArray.length;
    console.log(`La cantidad de palabras que tiene el arreglo es de ${cantidadPalabras}`);
    console.log(`La primer palabra es ${nuevoArray[0]}`);
    let ultimaPalabra = nuevoArray[nuevoArray.length - 1];
    console.log(`La ultima palabra es ${ultimaPalabra}`);
}

cadenaDeCaracteres(texto);
