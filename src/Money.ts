import { Currency } from './type';

export class Money {
  private _amount: number;
  private _currency: Currency;
  constructor(amount: number, currency: Currency) {
    this._amount = amount;
    this._currency = currency;
  }
  public equal(money: Money) {
    return money.amount() === this._amount && money.currency() === this._currency;
  }

  public times(multiplier: number) {
    return new Money(this._amount * multiplier, this._currency);
  }

  public amount() {
    return this._amount;
  }

  public currency() {
    return this._currency;
  }

  static dollar(amount: number) {
    return new Money(amount, Currency.USD);
  }

  static franc(amount: number) {
    return new Money(amount, Currency.CHF);
  }
}
