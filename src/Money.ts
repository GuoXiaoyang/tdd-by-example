export class Dollar {
  public amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  public times(multiplier: number): Dollar {
    const amount = this.amount * multiplier;
    return new Dollar(amount);
  }
}
