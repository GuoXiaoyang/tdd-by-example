import { Dollar } from '../src/Money';

test('test dollar multiplication', () => {
  const fiveDollar = new Dollar(5);
  const tenDollar = fiveDollar.times(2);
  expect(tenDollar.amount).toEqual(10);
});

test('test dollar equality', () => {
  const fiveDollar = new Dollar(5);
  const anotherFiveDollar = new Dollar(5);
  expect(fiveDollar.equal(anotherFiveDollar)).toBe(true);
});
