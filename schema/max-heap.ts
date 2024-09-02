export class MaxHeap {
  private heap: Array<number> = [];
  private heapSize = 0;

  public static from(array: Array<number>): MaxHeap {
    const instance = new MaxHeap();
    instance.heap = array;
    instance.heapSize = array.length;
    instance.buildMaxHeap();
    return instance;
  }

  protected constructor() {}

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

  public maxHeapify(index: number): void {
    const left = this.left(index);
    const right = this.right(index);
    let largest = -1;

    if (left <= this.heapSize && this.heap[left] > this.heap[index]) {
      largest = left;
    } else {
      largest = index;
    }

    if (right <= this.heapSize && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      const temp = this.heap[index];
      this.heap[index] = this.heap[largest];
      this.heap[largest] = temp;
      this.maxHeapify(largest);
    }
  }

  protected buildMaxHeap(): void {
    for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
      this.maxHeapify(i);
    }
  }
}
