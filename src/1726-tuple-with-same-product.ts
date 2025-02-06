/**
 * [1726. Tuple With Same Product](https://leetcode.com/problems/tuple-with-same-product/)
 *
 * Given an array `nums` of distinct positive integers, return the number of tuples
 * `(a, b, c, d)` such that `a * b = c * d` where `a`, `b`, `c`, and `d` are elements
 * of `nums`, and `a != b != c != d`.
 */
function tupleSameProduct(nums: number[]): number {
  if (nums.length < 4) {
    return 0;
  }

  const frequencyMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (i === j || nums[i] === nums[j]) {
        continue;
      }

      const product = nums[i] * nums[j];
      const productFrequency = frequencyMap.get(product) ?? 0;
      frequencyMap.set(product, productFrequency + 1);
    }
  }

  let possibleTuplesCount = 0;

  for (const frequency of frequencyMap.values()) {
    const pairs = ((frequency - 1) * frequency) / 2;
    possibleTuplesCount += 8 * pairs;
  }

  return possibleTuplesCount;
}
