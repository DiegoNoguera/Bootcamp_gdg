var nombre = "Diego David";
var apellido = "NOguera Armoa"
//console.log(nombre);
//alert(nombre);
var altura = 3;
var anchura = 2;
nombre += apellido;
console.log(nombre);

function suma() {
  var x = 1;
  var y = 3;
  console.log(x+y);
}
suma();
function restart(x, y) {
  var resultados = x - y;
  console.log(resultados);
}
restart(16,5);

function miFuncion(nombre, apellido){
  var nombreCompleto = nombre +" "+apellido;
  return nombreCompleto;
}

var nombreCompleto = miFuncion("Diego", "Noguera");
console.log(nombreCompleto);
console.log(typeof(nombreCompleto));

//Funciones Anonimas

var miFuncion = function () {
  return 5+4;
}
console.log(miFuncion());

console.log(function(a,b) { return a-b}(5,1));
//Funcion Anonima ES6
//let miVariable ="Hello";
//(a,b) => {return "Arrow function"}
