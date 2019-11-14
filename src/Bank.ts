import { pair } from './utils';
import { Money } from './Money';
import { Currency } from './type';

export class Bank {
  private rates: { [key: string]: number };

  public addRates(from: Currency, to: Currency, rate: number) {
    const pairKey = pair(from, to);
    this.rates[pairKey] = rate;
  }

  public rate(from: Currency, to: Currency) {
    if (from === to) {
      return 1;
    }
    const pairKey = pair(from, to);
    return this.rates[pairKey];
  }

  public reduce(money: Money, to: Currency) {
    return 1;
  }
}
