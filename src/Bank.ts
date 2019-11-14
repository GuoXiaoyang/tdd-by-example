import { pair } from './utils';
import { Money } from './Money';
import { Currency, TAddend } from './type';

export class Bank {
  private rates: { [key: string]: number } = {};

  public addRates(from: Currency, to: Currency, rate: number) {
    const pairKey = pair(from, to);
    const pairKeyReverse = pair(to, from);
    this.rates[pairKey] = rate;
    this.rates[pairKeyReverse] = 1 / rate;
  }

  public rate(from: Currency, to: Currency) {
    if (from === to) {
      return 1;
    }
    const pairKey = pair(from, to);
    return this.rates[pairKey];
  }

  public reduce(moneyOrSum: TAddend, to: Currency): Money {
    return moneyOrSum.reduce(this, to);
  }
}
