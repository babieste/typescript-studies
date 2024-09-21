export function kClosest(points: number[][], k: number): number[][] {
  const minHeap = MinHeap.build(points);
  const kClosestPoints = [];

  for (let i = 0; i < k; i++) {
    kClosestPoints.push(minHeap.extractMinimum().points);
  }

  return kClosestPoints;
}

function distanceFromCenter(x: number, y: number): number {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

class MinHeap {
  public heap: { distance: number; points: number[] }[] = [];

  public static build(array: number[][]): MinHeap {
    const instance = new MinHeap();

    instance.heap = array.map((points) => ({
      distance: distanceFromCenter(points[0], points[1]),
      points,
    }));

    for (let i = Math.floor(instance.heap.length / 2); i >= 0; i--) {
      instance.minHeapify(i);
    }

    return instance;
  }

  public extractMinimum(): { distance: number; points: number[] } {
    const root = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.length = this.heap.length - 1;
    this.minHeapify(0);
    return root;
  }

  private minHeapify(parent: number): void {
    const left = 2 * parent + 1;
    const right = 2 * parent + 2;
    let smallest = -1;

    if (
      left < this.heap.length &&
      this.heap[left].distance < this.heap[parent].distance
    ) {
      smallest = left;
    } else {
      smallest = parent;
    }

    if (
      right < this.heap.length &&
      this.heap[right].distance < this.heap[smallest].distance
    ) {
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
