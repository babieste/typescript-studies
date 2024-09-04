export class MaxHeap {
  public heap: Array<number> = [];
  public heapSize = 0;

  public static build(array: Array<number>): MaxHeap {
    const instance = new MaxHeap();
    instance.heap = array;
    instance.heapSize = array.length;

    for (let i = Math.floor(instance.heap.length / 2); i >= 0; i--) {
      instance.maxHeapify(i);
    }

    return instance;
  }

  public static heapsort(array: Array<number>): Array<number> {
    const instance = MaxHeap.build(array);

    for (let i = instance.heapSize - 1; i > 0; i--) {
      const temp = instance.heap[0];
      instance.heap[0] = instance.heap[i];
      instance.heap[i] = temp;
      instance.heapSize = instance.heapSize - 1;
      instance.maxHeapify(0);
    }

    return instance.heap;
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

    if (left < this.heapSize && this.heap[left] > this.heap[index]) {
      largest = left;
    } else {
      largest = index;
    }

    if (right < this.heapSize && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      const temp = this.heap[index];
      this.heap[index] = this.heap[largest];
      this.heap[largest] = temp;
      this.maxHeapify(largest);
    }
  }
}
