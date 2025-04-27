const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('multiplication with decimals', () => {
  expect(calculator.multiply(2.5, 4)).toBeCloseTo(10);
});

test('negative and negative is positive', () => {
  expect(calculator.multiply(-2, -5)).toBe(10); 
});

test('divide 10 / 5 to equal 2', () =>{
  expect(calculator.divide(10, 5)).toBe(2);
});

test('b = 0', () =>{
  expect(() => calculator.divide(5, 0)).toThrow('Indeterminado!');
});

test('Just two arguments', () =>{
  expect(() => calculator.divide(4)).toThrow('Solo se aceptan dos parametros!'); 
});

