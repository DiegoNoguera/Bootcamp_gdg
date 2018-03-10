var dias = []; //Array vacio
var marcasAutos = ["Suzuki","Mazda", "Toyota","Mercedes","Nissan","Kia","Hyundai"];
console.log(marcasAutos);
console.log(marcasAutos.length);
console.log(marcasAutos[5]);

console.log(marcasAutos.sort());
console.log(marcasAutos.sort().reverse());

var x = [4,5,8,2,1,3,3,32];
console.log(x.sort());
console.log(x.sort().reverse());

//Agregar elemento al Array
marcasAutos.push("Ferrari");
console.log(marcasAutos);
//Eliminar el ultimo elemento al Array
marcasAutos.pop();
console.log(marcasAutos);
//Eliminar el primer elemento al Array
marcasAutos.shift();
console.log(marcasAutos);


//Setear elemento del array conociendo el index
marcasAutos[0] = "XXX";
console.log(marcasAutos);

//Borrar elemetno conociendo el index
delete marcasAutos[0];
console.log(marcasAutos);
