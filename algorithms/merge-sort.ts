export function mergeSort(array: number[], left: number, right: number): void {
  if (left < right) {
    const middle = (left + right) >> 1;
    mergeSort(array, left, middle);
    mergeSort(array, middle + 1, right);
    merge(array, left, middle, right);
  }
}

function merge(
  array: number[],
  left: number,
  middle: number,
  right: number
): void {
  const leftQueue = [];
  const rightQueue = [];

  for (let i = left; i <= middle; i++) {
    leftQueue.push(array[i]);
  }

  for (let i = middle + 1; i <= right; i++) {
    rightQueue.push(array[i]);
  }

  let i = left;
  while (leftQueue.length > 0 && rightQueue.length > 0) {
    if (leftQueue[0] <= rightQueue[0]) {
      array[i++] = leftQueue.shift() as number;
    } else {
      array[i++] = rightQueue.shift() as number;
    }
  }

  while (leftQueue.length > 0) {
    array[i++] = leftQueue.shift() as number;
  }

  while (rightQueue.length > 0) {
    array[i++] = rightQueue.shift() as number;
  }
}
