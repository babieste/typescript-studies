import { MaxHeap } from "../data-structures/max-heap";

export function findKthLargest(nums: number[], k: number): number {
  const maxHeap = MaxHeap.build(nums);
  let kthLargest = -1;

  for (let i = 0; i < k; i++) {
    kthLargest = maxHeap.extractMaximum();
  }

  return kthLargest;
}
