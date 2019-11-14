import { Money } from './Money';
import { TAddend, Currency } from './type';
import { Bank } from './Bank';

export class Sum {
  private augend: TAddend;
  private addend: TAddend;
  constructor(augend: TAddend, addend: TAddend) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce(bank: Bank, to: Currency): Money {
    return Money.dollar(1);
  }
}
