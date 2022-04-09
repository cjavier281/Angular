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

    let algo:any;
  
    algo=1;
    algo=true;
    algo="asdasd";
    


let employee:any = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};


for(let elem in employee  ){
  console.log(employee[elem]);
}

let usuarios={
  Nombre:"carlos",
  Gustos:["peliculas","musica","futbol"],
  Edad:18
};

for(let ele in usuarios){

}
usuarios.Gustos.push("sadasd");


function leera(usuarios1: any[], usuarios2?:number):void{

  usuarios1.forEach(elem => {
    console.table(elem);
  });
   
}


function sumar(...valores:number[]) {
  let suma=0;
  for(let x=0;x<valores.length;x++)
    suma+=valores[x];
  return suma;
}

leera(usuarios.Gustos);