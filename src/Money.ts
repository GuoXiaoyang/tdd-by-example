export class Money {
  private amount: number;
  private currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }
  public equal(money: Money) {
    return money.amount === this.amount && money.currency === this.currency;
  }

  public times(multiplier: number) {
    return new Money(this.amount * multiplier, this.currency);
  }

  static dollar(amount: number) {
    return new Money(amount, 'USD');
  }

  static franc(amount: number) {
    return new Money(amount, 'CHF');
  }
}
