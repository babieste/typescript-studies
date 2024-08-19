export function quicksort(
  array: Array<number>,
  low: number,
  high: number
): void {
  if (high - low > 0) {
    const pivot = partition(array, low, high);
    quicksort(array, low, pivot - 1);
    quicksort(array, pivot + 1, high);
  }
}

function partition(array: Array<number>, low: number, high: number): number {
  let pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      i = i + 1;
      const aux = array[i];
      array[i] = array[j];
      array[j] = aux;
    }
  }

  const aux = array[i + 1];
  array[i + 1] = array[high];
  array[high] = aux;
  return i + 1;
}
