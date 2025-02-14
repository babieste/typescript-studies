/**
 * [3066. Minimum Operations To Exceed Threshold Value II](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/)
 *
 * You are given a 0-indexed integer array `nums`, and an integer `k`.
 *
 * You are allowed to perform some operations on `nums`, where in a single operation, you can:
 * - Select the two smallest integers `x` and `y` from `nums`;
 * - Remove `x` and `y` from `nums`;
 * - Insert `(min(x, y) * 2 + max(x, y))` at any position in the array.
 *
 * Note that you can only apply the described operation if nums contains at least two elements.
 *
 * Return the minimum number of operations needed so that all elements of the array are greater than or equal to `k`.
 */
export function minOperations(nums: number[], k: number): number {
  let heapSize = nums.length;

  function minHeapify(index: number): void {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = -1;

    if (left < heapSize && nums[left] < nums[index]) {
      smallest = left;
    } else {
      smallest = index;
    }

    if (right < heapSize && nums[right] < nums[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      const aux = nums[index];
      nums[index] = nums[smallest];
      nums[smallest] = aux;
      minHeapify(smallest);
    }
  }

  function extractMinimum(): number {
    const root = nums[0];

    nums[0] = nums[heapSize - 1];
    heapSize = heapSize - 1;
    minHeapify(0);

    return root;
  }

  function insert(value: number): void {
    heapSize = heapSize + 1;
    nums[heapSize - 1] = value;
    bubbleUp(heapSize - 1);
  }

  function bubbleUp(index: number): void {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (nums[parent] < nums[index]) {
        break;
      }

      const aux = nums[parent];
      nums[parent] = nums[index];
      nums[index] = aux;
      index = parent;
    }
  }

  // Build min heap
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    minHeapify(i);
  }

  let operations = 0;

  while (nums[0] < k && heapSize >= 2) {
    const x = extractMinimum();
    const y = extractMinimum();
    const z = Math.min(x, y) * 2 + Math.max(x, y);
    insert(z);
    operations++;
  }

  return operations;
}
