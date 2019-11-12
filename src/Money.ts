class Money {
  protected amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  public equal(money: Money) {
    return this.amount === money.amount;
  }
}

export class Dollar extends Money {
  public times(multiplier: number) {
    const amount = this.amount * multiplier;
    return new Dollar(amount);
  }
}

export class Franc extends Money {
  public times(multiplier: number) {
    const amount = this.amount * multiplier;
    return new Franc(amount);
  }
}
