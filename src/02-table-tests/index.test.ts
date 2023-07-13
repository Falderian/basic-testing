// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

type ITableCase = [
  { a: number | string; b: number | string; action: string },
  number | null,
];

const [a, b] = [Math.random() * 1000, Math.random() * 100];

const testCases: ITableCase[] = [
  [{ a, b, action: Action.Add }, a + b],
  [{ a, b, action: Action.Subtract }, a - b],
  [{ a, b, action: Action.Multiply }, a * b],
  [{ a, b, action: Action.Divide }, a / b],
  [{ a, b, action: Action.Exponentiate }, a ** b],
  [{ a, b, action: 'invalid action' }, null],
  [{ a, b: 'invalid argument', action: Action.Exponentiate }, null],
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test('Table Test', () => {
    testCases.forEach((tableCase) =>
      expect(simpleCalculator(tableCase[0])).toEqual(tableCase[1]),
    );
  });
  // Consider to use Jest table tests API to test all cases above
});
