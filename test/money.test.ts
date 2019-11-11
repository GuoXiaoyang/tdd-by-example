import { Dollar } from '../src/Money';

test('test dollar multiplication', () => {
  const fiveDollar = new Dollar(5);
  fiveDollar.times(2);
  expect(fiveDollar.amount).toEqual(10);
});
