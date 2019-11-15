import { Money } from '../src/Money';
import { Bank } from '../src/Bank';
import { Currency } from '../src/type';
import { Sum } from '../src/Sum';
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
  test('(5$ + 10₣) * 3 = 30$', () => {
    const sum = new Sum(fiveDollar, tenFranc).times(3);
    expect(bank.reduce(sum, Currency.USD).equal(Money.dollar(30))).toBe(true);
  });
  test('(5$ + 10₣) * 2 = 40₣', () => {
    const sum = new Sum(fiveDollar, tenFranc).times(2);
    expect(bank.reduce(sum, Currency.CHF).equal(Money.franc(40))).toBe(true);
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

describe('test money plus', () => {
  test('5$ + 5$ = 10$', () => {
    const sum = fiveDollar.plus(fiveDollar);
    expect(bank.reduce(sum, Currency.USD).equal(tenDollar)).toBe(true);
  });
  test('5$ + 5$ != 8$', () => {
    const sum = fiveDollar.plus(fiveDollar);
    expect(bank.reduce(sum, Currency.USD).equal(Money.dollar(8))).toBe(false);
  });
  test('5₣ + 5₣ = 10₣', () => {
    const sum = fiveFranc.plus(fiveFranc);
    expect(bank.reduce(sum, Currency.CHF).equal(tenFranc)).toBe(true);
  });
  test('5$ + 10₣ = 10$', () => {
    const sum = fiveDollar.plus(tenFranc);
    expect(bank.reduce(sum, Currency.USD).equal(tenDollar)).toBe(true);
  });
  test('5$ + 10₣ = 20₣', () => {
    const sum = fiveDollar.plus(tenFranc);
    expect(bank.reduce(sum, Currency.CHF).equal(Money.franc(20))).toBe(true);
  });
  test('(5$ + 10₣) + 5$ = 15$', () => {
    const sum = fiveDollar.plus(tenFranc).plus(fiveDollar);
    expect(bank.reduce(sum, Currency.USD).equal(Money.dollar(15))).toBe(true);
  });
  test('(5$ + 10₣) + (10$ + 15₣) = 55₣', () => {
    const sum = fiveDollar.plus(tenFranc).plus(tenDollar.plus(Money.franc(15)));
    expect(bank.reduce(sum, Currency.CHF).equal(Money.franc(55))).toBe(true);
  });
});
