var edad = 23;
var alturac = 1.92;
var estudiosc = 'primarios';
var activoc = true;
var arreglo = [2, 3, 4, 5];
arreglo.push(6);
for (var _i = 0, arreglo_1 = arreglo; _i < arreglo_1.length; _i++) {
    var elem = arreglo_1[_i];
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
var actual = Operacion.Division;
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
