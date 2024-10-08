export function leastInterval(tasks: string[], n: number): number {
  const frequencyMap = new Map<string, number>();

  tasks.forEach((task) => {
    if (frequencyMap.has(task)) {
      const frequency = frequencyMap.get(task);
      frequencyMap.set(task, frequency + 1);
    } else {
      frequencyMap.set(task, 1);
    }
  });

  let maxHeap = MaxHeap.build(frequencyMap);
  let intervals = 0;

  while (maxHeap.heap.length) {
    let coolingTime = n + 1; // Represents the cooling interval plus one.
    let store = new Map<string, number>(); // Store frequencies of tasks that still need to be processed.
    let taskCounter = 0;

    while (coolingTime > 0 && maxHeap.heap.length > 0) {
      const { task, frequency } = maxHeap.extractMaximum();

      if (frequency > 1) {
        store.set(task, frequency - 1);
      }

      coolingTime--;
      taskCounter++;
    }

    // Update max heap
    for (const [task, frequency] of store) {
      maxHeap.insert({ task, frequency });
    }

    intervals += maxHeap.heap.length ? n + 1 : taskCounter;
  }

  return intervals;
}

class MaxHeap {
  public heap: { task: string; frequency: number }[] = [];

  public static build(frequencyMap: Map<string, number>): MaxHeap {
    const instance = new MaxHeap();

    for (const [task, frequency] of frequencyMap) {
      instance.heap.push({ task, frequency });
    }

    for (let i = Math.floor(instance.heap.length / 2); i >= 0; i--) {
      instance.maxHeapify(i);
    }

    return instance;
  }

  private maxHeapify(parent: number): void {
    const left = 2 * parent + 1;
    const right = 2 * parent + 2;
    let largest = -1;

    if (
      left < this.heap.length &&
      this.heap[left].frequency > this.heap[parent].frequency
    ) {
      largest = left;
    } else {
      largest = parent;
    }

    if (
      right < this.heap.length &&
      this.heap[right].frequency > this.heap[largest].frequency
    ) {
      largest = right;
    }

    if (largest !== parent) {
      const temp = this.heap[parent];
      this.heap[parent] = this.heap[largest];
      this.heap[largest] = temp;
      this.maxHeapify(largest);
    }
  }

  public extractMaximum(): { task: string; frequency: number } {
    const root = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.length = this.heap.length - 1;
    this.maxHeapify(0);
    return root;
  }

  public insert(value: { task: string; frequency: number }): void {
    this.heap.length = this.heap.length + 1;
    this.heap[this.heap.length - 1] = value;
    this.maxHeapify(this.heap.length - 1);
  }

  public peek(): { task: string; frequency: number } {
    return this.heap[0];
  }
}
