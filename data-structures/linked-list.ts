export class LinkedList {
  public head: LinkedListNode;
  public tail: LinkedListNode;

  public constructor(node: LinkedListNode) {
    this.head = node;
    this.tail = node;
    this.updateTail();
  }

  public insert(node: LinkedListNode): void {
    this.tail.next = node;
    this.updateTail();
  }

  private updateTail(): void {
    while (this.tail.next) {
      this.tail = this.tail.next;
    }
  }
}

export class LinkedListNode {
  public val: number;
  public next: LinkedListNode | null;

  public static fromArray(array: Array<number>): LinkedListNode {
    const head = new LinkedListNode();
    let aux: LinkedListNode | null = head;

    for (let i = 0; i < array.length; i++) {
      if (i <= array.length - 1) {
        aux.next = new LinkedListNode();
      }

      aux.val = array[i];

      if (aux.next) {
        aux = aux.next;
      }
    }

    return head;
  }

  public constructor(val?: number, next?: LinkedListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
