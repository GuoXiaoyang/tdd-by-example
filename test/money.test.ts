import { Dollar } from '../src/Money';

test('test dollar multiplication', () => {
  const fiveDollar = new Dollar(5);
  expect(fiveDollar.times(2).equal(new Dollar(10))).toBe(true);
  expect(fiveDollar.times(3).equal(new Dollar(15))).toBe(true);
});

test('test dollar equality', () => {
  const fiveDollar = new Dollar(5);
  const anotherFiveDollar = new Dollar(5);
  expect(fiveDollar.equal(anotherFiveDollar)).toBe(true);
});
