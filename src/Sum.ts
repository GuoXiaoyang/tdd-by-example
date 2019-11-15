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
    const amount = bank.reduce(this.augend, to).amount() + bank.reduce(this.addend, to).amount();
    return new Money(amount, to);
  }

  public plus(addend: TAddend) {
    return new Sum(this, addend);
  }

  public times(multiplier: number): Sum {
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier));
  }
}
