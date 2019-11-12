export class Dollar {
  public amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  public times(multiplier: number) {
    const amount = this.amount * multiplier;
    return new Dollar(amount);
  }

  public equal(dollar: Dollar) {
    return this.amount === dollar.amount;
  }
}
