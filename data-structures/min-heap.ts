export class MinHeap {
  public heap: Array<number> = [];
  public heapSize = 0;

  public static build(array: Array<number>): MinHeap {
    const instance = new MinHeap();
    instance.heap = array;
    instance.heapSize = array.length;

    for (let i = Math.floor(instance.heap.length / 2); i >= 0; i--) {
      instance.minHeapify(i);
    }

    return instance;
  }

  protected constructor() {}

  public extractMinimum(): number {
    const root = this.heap[0];

    this.heap[0] = this.heap[this.heapSize - 1];
    this.heapSize = this.heapSize - 1;
    this.minHeapify(0);

    return root;
  }

  public parent(index: number): number {
    if (index <= 0) {
      return -1;
    }

    return Math.floor(index / 2);
  }

  public left(index: number): number {
    if (index < 0) {
      return -1;
    }

    return 2 * index + 1;
  }

  public right(index: number): number {
    if (index < 0) {
      return -1;
    }

    return 2 * index + 2;
  }

  public minHeapify(parent: number): void {
    const left = this.left(parent);
    const right = this.right(parent);
    let smallest = -1;

    if (left < this.heapSize && this.heap[left] < this.heap[parent]) {
      smallest = left;
    } else {
      smallest = parent;
    }

    if (right < this.heapSize && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== parent) {
      const temp = this.heap[parent];
      this.heap[parent] = this.heap[smallest];
      this.heap[smallest] = temp;
      this.minHeapify(smallest);
    }
  }
}
