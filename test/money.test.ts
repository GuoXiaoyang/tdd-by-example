import { Dollar, Franc } from '../src/Money';

test('test money multiplication', () => {
  const fiveDollar = new Dollar(5);
  expect(fiveDollar.times(2).equal(new Dollar(10))).toBe(true);
  expect(fiveDollar.times(3).equal(new Dollar(15))).toBe(true);
  const fiveFranc = new Franc(5);
  expect(fiveFranc.times(2).equal(new Franc(10))).toBe(true);
  expect(fiveFranc.times(3).equal(new Franc(15))).toBe(true);
});

test('test money equality', () => {
  const fiveDollar = new Dollar(5);
  const anotherFiveDollar = new Dollar(5);
  const tenDollar = new Dollar(10);
  expect(fiveDollar.equal(anotherFiveDollar)).toBe(true);
  expect(fiveDollar.equal(tenDollar)).toBe(false);
  const fiveFranc = new Dollar(5);
  const anotherFiveFranc = new Dollar(5);
  const tenFranc = new Franc(10);
  expect(fiveFranc.equal(anotherFiveFranc)).toBe(true);
  expect(fiveFranc.equal(tenFranc)).toBe(false);
});
