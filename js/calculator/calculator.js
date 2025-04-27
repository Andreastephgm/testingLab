const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a,b){
  if(arguments.length !==2){
    throw new Error('Solo se aceptan dos parametros!');
  }if(b === 0){
    throw new Error('Indeterminado!');
  }
  return a /b ;
}

module.exports = {add: add, subtract: subtract, multiply: multiply, divide: divide};