const coches = [ 
    { id: 1, marca: "Chevrolet", modelo: "Corsa", anio: 2011}, 
    { id: 2, marca: "Ford", modelo: "F100", anio: 2001 },
    { id: 3, marca: "Chevrolet", modelo: "Agile", anio: 2013 },
    { id: 4, marca: "Fiat", modelo: "Palio", anio: 2013 }
];

let obtenerPorMarca = coches.findIndex( (item) => item.marca === "Chevrolet");
console.log(obtenerPorMarca);

let elementoEliminado = coches.shift();
console.log(elementoEliminado);

let nuevo = { marca: "Peugeot", modelo: "206", anio: "2013" }

coches.unshift(nuevo);
console.log(coches);

coches.forEach( (item) => {
    let i=1;
    if(item.id === undefined) {
        console.log(item);
        item.id=i;
        i++;
    }else{
        i++;
    }
})

console.log(coches);



