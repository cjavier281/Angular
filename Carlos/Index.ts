let edad:number=23;
let alturac: number = 1.92;
let estudiosc:string = 'primarios';
let activoc: boolean = true;

let  arreglo:number[] =[2,3,4,5];
arreglo.push(6);

for(let elem of arreglo  ){

    console.log(elem);
}


enum Operacion {Suma, Resta, Multiplicacion, Division};

    let actual:number = Operacion.Division;

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