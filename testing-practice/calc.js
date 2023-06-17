let Calculator = function() {
  let add = (a, b) => a + b;
  let sub = (a, b) => a - b;
  let multiply = (a , b) => a * b;
  let divide = (a, b) => {
    if ( b === 0){
      throw 'divided by zero error'
    }
    return a / b;
  }
  return {
    add, sub, multiply, divide
  }
}();

module.exports = Calculator