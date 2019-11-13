import { Money } from '../src/Money';
let fiveDollar: Money;
let tenDollar: Money;
let fiveFranc: Money;
let tenFranc: Money;

beforeEach(() => {
  fiveDollar = Money.dollar(5);
  tenDollar = Money.dollar(10);
  fiveFranc = Money.franc(5);
  tenFranc = Money.franc(10);
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
    const anotherFiveDollar = Money.dollar(5);
    expect(fiveDollar.equal(anotherFiveDollar)).toBe(true);
  });

  test('5$ != 10$', () => {
    expect(fiveDollar.equal(tenDollar)).toBe(false);
  });

  test('5₣ = 5₣', () => {
    const anotherFiveFranc = Money.franc(5);
    expect(fiveFranc.equal(anotherFiveFranc)).toBe(true);
  });

  test('5₣ != 10₣', () => {
    expect(fiveFranc.equal(tenFranc)).toBe(false);
  });

  test('5$ != 5₣', () => {
    expect(fiveDollar.equal(fiveFranc)).toBe(false);
  });
});
