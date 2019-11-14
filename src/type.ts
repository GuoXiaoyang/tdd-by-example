import { Sum } from './Sum';
import { Money } from './Money';
export enum Currency {
  USD = 'USD',
  CHF = 'CHF',
}

export type TAddend = Sum | Money;
