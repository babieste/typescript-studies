export function binarySearch(array: number[], key: number, low: number, high: number): number {
    if (low > high) {
        return -1
    }

    const middle = Math.floor((low + (high - low)) / 2);

    if (array[middle] > key) {
        return binarySearch(array, key, low, middle - 1);
    } else if (array[middle] < key) {
        return binarySearch(array, key, middle + 1, high);
    }

    return middle;
}