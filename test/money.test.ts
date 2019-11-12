import { Dollar } from '../src/Money';

test('test dollar multiplication', () => {
  const fiveDollar = new Dollar(5);
  const tenDollar = fiveDollar.times(2);
  expect(tenDollar.amount).toEqual(10);
});
