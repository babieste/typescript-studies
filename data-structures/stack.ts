export class Stack<T> {
  private stack: Array<T> = [];

  public push(value: T): void {
    this.stack.push(value);
  }

  public pop(): T | null {
    return this.stack.pop() ?? null;
  }

  public isEmpty(): boolean {
    return this.stack.length === 0;
  }
}
