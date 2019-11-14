import { Currency } from './type';

export const pair = (from: Currency, to: Currency) => {
  return `${from}-${to}`;
};
