// a binary array contains only 0 and 1

// for each index i
// if i = n - 1, derived[i] = original[i] ^ original[0]
// else derived[i] = original[i] ^ original[i + 1]

// how can we verify if exists a original array that can form derived?
// if derived[i] is 0, then original[i] and original[i + 1] need to have the same value (either 0 or 1)
// if derived[i] is 1, then original[i] and original[i + 1] need to have different values

// the xor-sum of the derived array should be 0 since there is always a duplicate occurence of each element [of the original array]
// what does it mean?
// if the xor-sum is not zero does it mean that is not possible to deduce a valid original array?
// yes.

/**
 * [2683. Neighboring bitwise XOR](https://leetcode.com/problems/neighboring-bitwise-xor/description/?envType=daily-question&envId=2025-01-17)
 *
 * A 0-indexed array `derived` with length `n` is derived by computing the bitwise XOR (⊕) of adjacent values in a binary array `original` of length `n`.
 * Specifically, for each index `i` in the range `[0, n - 1]`:
 * - If `i = n - 1`, then `derived[i] = original[i] ⊕ original[0]`.
 * - Otherwise, `derived[i] = original[i] ⊕ original[i + 1]`.
 *
 * Given an array `derived`, your task is to determine whether there exists a valid binary array `original` that could have formed `derived`.
 *
 * Return `true` if such an array exists or `false` otherwise.
 */
export function doesValidArrayExist(derived: number[]): boolean {
  let result = 0;

  for (const value of derived) {
    result ^= value;
  }

  return result === 0;
}
