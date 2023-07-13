// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  const [a, b] = [Math.random() * 1000, Math.random() * 100];
  test('should add two numbers', () => {
    expect(simpleCalculator({ a, b, action: Action.Add })).toBe(a + b);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a, b, action: Action.Subtract })).toBe(a - b);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a, b, action: Action.Multiply })).toBe(a * b);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a, b, action: Action.Divide })).toBe(a / b);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a, b, action: Action.Exponentiate })).toBe(
      a ** b,
    );
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a, b, action: 'invalid' })).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const [a, b] = [null, {}];
    expect(simpleCalculator({ a, b, action: Action.Exponentiate })).toBe(null);
  });
});
