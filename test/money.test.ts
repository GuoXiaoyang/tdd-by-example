import { Money } from '../src/Money';
import { Bank } from '../src/Bank';
import { Currency } from '../src/type';
let fiveDollar: Money;
let tenDollar: Money;
let fiveFranc: Money;
let tenFranc: Money;
let bank: Bank;

beforeEach(() => {
  fiveDollar = Money.dollar(5);
  tenDollar = Money.dollar(10);
  fiveFranc = Money.franc(5);
  tenFranc = Money.franc(10);
  bank = new Bank();
  bank.addRates(Currency.CHF, Currency.USD, 2);
});

describe('test money multiplication', () => {
  test('5$ * 2 = 10$ ', () => {
    expect(fiveDollar.times(2).equal(tenDollar)).toBe(true);
  });
  test('5$ * 3 = 15$ ', () => {
    expect(fiveDollar.times(3).equal(Money.dollar(15))).toBe(true);
  });
  test('5$ * 3 != 10$ ', () => {
    expect(fiveDollar.times(3).equal(tenDollar)).toBe(false);
  });
});

describe('test money equality', () => {
  test('5$ = 5$', () => {
    expect(fiveDollar.equal(fiveDollar)).toBe(true);
  });

  test('5$ != 10$', () => {
    expect(fiveDollar.equal(tenDollar)).toBe(false);
  });

  test('5₣ = 5₣', () => {
    expect(fiveFranc.equal(fiveFranc)).toBe(true);
  });

  test('5₣ != 10₣', () => {
    expect(fiveFranc.equal(tenFranc)).toBe(false);
  });

  test('5$ != 5₣', () => {
    expect(fiveDollar.equal(fiveFranc)).toBe(false);
  });
});

describe('test money reduce', () => {
  test('reduced 5$ = 5$', () => {
    expect(bank.reduce(fiveDollar, Currency.USD).equal(fiveDollar)).toBe(true);
  });
  test('reduced 5₣ = 5₣', () => {
    expect(bank.reduce(fiveFranc, Currency.CHF).equal(fiveFranc)).toBe(true);
  });
  test('reduced 10₣ != 6$', () => {
    expect(bank.reduce(tenFranc, Currency.USD).equal(Money.dollar(6))).toBe(false);
  });
  test('reduced 10₣ = 5$', () => {
    expect(bank.reduce(tenFranc, Currency.USD).equal(fiveDollar)).toBe(true);
  });
  test('reduced 5$ = 10₣', () => {
    expect(bank.reduce(fiveDollar, Currency.CHF).equal(tenFranc)).toBe(true);
  });
});
