export class Dollar {
  public amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  public times(multiplier: number): void {
    this.amount = this.amount * multiplier;
  }
}
