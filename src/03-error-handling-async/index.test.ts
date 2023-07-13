// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

console.log(rejectCustomError);

const value = 'I am the value!';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    return resolveValue(value).then((data) => {
      expect(data).toBe(value);
    });
  });
});

describe('throwError', () => {
  test('should throw error with provided message', async () => {
    try {
      throwError(value);
    } catch (error) {
      expect((error as Error).message).toEqual(value);
    }
  });

  test('should throw error with default message if message is not provided', () => {
    expect(throwError).toThrow(new Error('Oops!'));
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    try {
      throwCustomError();
    } catch (error) {
      expect(error).toBeInstanceOf(MyAwesomeError);
    }
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    try {
      throwCustomError();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
