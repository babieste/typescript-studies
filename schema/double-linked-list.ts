export class DoubleLinkedNode {
  public constructor(
    public readonly value: string,
    public previous: DoubleLinkedNode | null = null,
    public next: DoubleLinkedNode | null = null
  ) {}
}
