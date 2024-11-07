export function minRefuelStops(
  target: number,
  startFuel: number,
  stations: number[][]
): number {
  let currentFuel = startFuel;
  let currentPosition = 0;
  let stops = 0;
  let visitedGasStationsPositions: number[] = [];

  if (startFuel >= target) {
    return 0;
  }

  while (currentPosition < target) {
    const validStations = stations.filter(
      ([position, fuel]) =>
        !visitedGasStationsPositions.includes(position) &&
        position <= currentFuel + currentPosition
    );

    if (!validStations.length) {
      return -1;
    }

    const maxHeap = MaxHeap.build(JSON.parse(JSON.stringify(validStations)));
    let currentGasStation = maxHeap.extract();

    visitedGasStationsPositions.push(currentGasStation[0]);

    currentFuel =
      currentFuel -
      currentGasStation[0] +
      currentPosition +
      currentGasStation[1];
    currentPosition = currentGasStation[0];
    stops++;

    if (currentPosition + currentFuel >= target) {
      return stops;
    }
  }

  return stops;
}

class MaxHeap {
  private heap: number[][] = [];

  public static build(data: number[][]): MaxHeap {
    const it = new MaxHeap();
    it.heap = data;

    for (let i = Math.floor(it.heap.length / 2); i >= 0; i--) {
      it.maxHeapify(i);
    }

    return it;
  }

  private maxHeapify(parentIndex: number): void {
    const leftIndex = 2 * parentIndex + 1;
    const rightIndex = 2 * parentIndex + 2;
    let largest = -1;

    if (
      leftIndex < this.heap.length &&
      this.heap[leftIndex][1] > this.heap[parentIndex][1]
    ) {
      largest = leftIndex;
    } else {
      largest = parentIndex;
    }

    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex][1] > this.heap[largest][1]
    ) {
      largest = rightIndex;
    }

    if (largest !== parentIndex) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[largest];
      this.heap[largest] = temp;
      this.maxHeapify(largest);
    }
  }

  public extract() {
    const root = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.length = this.heap.length - 1;
    this.maxHeapify(0);
    return root;
  }
}
