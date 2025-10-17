/**
 * ### [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
 *
 * Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.
 * You may return the answer in any order.
 *
 * #### Constraints:
 * - `1 <= nums.length <= 10^5`
 * - `-10^4 <= nums[i] <= 10^4`
 * - `k` is in the range `[1, the number of unique elements in the array]`.
 * - It is guaranteed that the answer is unique.
 *
 * #### Complexity Analysis
 * - Time Complexity: O(N log N) where N is the number of unique elements in `nums`.
 * - Space Complexity: O(N) for storing the frequency map and the heap.
 */
function topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap = new Map<number, number>();

    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    const heap = new CustomMaxHeap(Array.from(frequencyMap.entries()));
    const result: number[] = [];

    for (let i = 0; i < k; i++) {
        result.push(Number(heap.extractMaximum()[0]));
    }

    return result;
}

class CustomMaxHeap {
    public heap: number[][] = [];
    public heapSize = 0;

    public constructor(array: number[][]) {
        this.heap = array;
        this.heapSize = array.length;

        for (let i = Math.floor(array.length / 2); i >= 0; i--) {
            this.maxHeapify(i);
        }
    }

    private maxHeapify(i: number) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let largest = -1;

        if (left < this.heapSize && this.heap[left][1] > this.heap[i][1]) {
            largest = left;
        } else {
            largest = i;
        }

        if (
            right < this.heapSize &&
            this.heap[right][1] > this.heap[largest][1]
        ) {
            largest = right;
        }

        if (largest !== i) {
            const temp = this.heap[i];
            this.heap[i] = this.heap[largest];
            this.heap[largest] = temp;
            this.maxHeapify(largest);
        }
    }

    public extractMaximum(): number[] {
        const root = this.heap[0];

        this.heap[0] = this.heap[this.heapSize - 1];
        this.heapSize = this.heapSize - 1;
        this.maxHeapify(0);

        return root;
    }
}
