import { Currency } from './type';
import { Bank } from './Bank';
import { Sum } from './Sum';

export class Money {
  private _amount: number;
  private _currency: Currency;
  constructor(amount: number, currency: Currency) {
    this._amount = amount;
    this._currency = currency;
  }
  public equal(money: Money) {
    return money.amount() === this.amount() && money.currency() === this.currency();
  }

  public times(multiplier: number) {
    return new Money(this.amount() * multiplier, this.currency());
  }

  public amount() {
    return this._amount;
  }

  public currency() {
    return this._currency;
  }

  public reduce(bank: Bank, to: Currency) {
    const rate = bank.rate(this.currency(), to);
    return new Money(this.amount() / rate, to);
  }

  public plus(money: Money) {
    return new Sum(this, money);
  }

  static dollar(amount: number) {
    return new Money(amount, Currency.USD);
  }

  static franc(amount: number) {
    return new Money(amount, Currency.CHF);
  }
}
