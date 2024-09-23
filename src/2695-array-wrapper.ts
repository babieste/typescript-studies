class ArrayWrapper {
  constructor(private readonly nums: number[]) {}

  public valueOf() {
    return this.nums.reduce((acc, currentValue) => (acc += currentValue), 0);
  }

  public toString() {
    return `[${this.nums.toString()}]`;
  }
}
