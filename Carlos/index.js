"use strict";
let edad = 23;
let alturac = 1.92;
let estudiosc = 'primarios';
let activoc = true;
let arreglo = [2, 3, 4, 5];
arreglo.push(6);
for (let elem of arreglo) {
    console.log(elem);
}
var Operacion;
(function (Operacion) {
    Operacion[Operacion["Suma"] = 0] = "Suma";
    Operacion[Operacion["Resta"] = 1] = "Resta";
    Operacion[Operacion["Multiplicacion"] = 2] = "Multiplicacion";
    Operacion[Operacion["Division"] = 3] = "Division";
})(Operacion || (Operacion = {}));
;
let actual = Operacion.Division;
switch (actual) {
    case Operacion.Suma: {
        console.log('Operación actual: Suma ');
        break;
    }
    case Operacion.Resta: {
        console.log('Operación actual: Resta ');
        break;
    }
    case Operacion.Multiplicacion: {
        console.log('Operación actual: Multiplicacion ');
        break;
    }
    case Operacion.Division: {
        console.log('Operación actual: Division ');
        break;
    }
}
let algo;
algo = 1;
algo = true;
algo = "asdasd";
let employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
for (let elem in employee) {
    console.log(employee[elem]);
}
let usuarios = {
    Nombre: "carlos",
    Gustos: ["peliculas", "musica", "futbol"],
    Edad: 18
};
for (let ele in usuarios) {
    console.table(usuarios);
}
usuarios.Gustos.push("sadasd");
function leera(usuarios1, usuarios2) {
    usuarios1.forEach(elem => {
        console.table(elem);
    });
}
function sumar(...valores) {
    let suma = 0;
    for (let x = 0; x < valores.length; x++)
        suma += valores[x];
    return suma;
}
leera(usuarios.Gustos);
