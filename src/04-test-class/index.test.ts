// Uncomment the code below and write your tests
import { InsufficientFundsError, TransferFailedError, getBankAccount } from '.';

describe('BankAccount', () => {
  const initialValue = 1000;

  const newAccount = getBankAccount(initialValue);

  const secondAccount = getBankAccount(initialValue);
  test('should create account with initial balance', () => {
    expect(newAccount.getBalance()).toEqual(initialValue);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    try {
      newAccount.withdraw(1005);
    } catch (e) {
      expect(e).toBeInstanceOf(InsufficientFundsError);
    }
  });

  test('should throw error when transferring more than balance', () => {
    try {
      newAccount.transfer(1005, secondAccount);
    } catch (e) {
      expect(e).toBeInstanceOf(InsufficientFundsError);
    }
  });

  test('should throw error when transferring to the same account', () => {
    try {
      newAccount.transfer(1005, newAccount);
    } catch (e) {
      expect(e).toBeInstanceOf(TransferFailedError);
    }
  });

  test('should deposit money', () => {
    expect(newAccount.deposit(100).getBalance()).toEqual(1100);
  });

  test('should withdraw money', () => {
    expect(newAccount.withdraw(100).getBalance()).toEqual(1000);
  });

  test('should transfer money', () => {
    newAccount.transfer(100, secondAccount);
    expect(newAccount.getBalance()).toEqual(900);
    expect(secondAccount.getBalance()).toEqual(1100);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
