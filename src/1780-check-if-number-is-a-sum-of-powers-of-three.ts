/**
 * ## (1780. Check if Number is a Sum of Powers of Three)[https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/description/]
 *
 * Given an integer `n`, return `true` if it is possible to represent
 * `n` as the sum of distinct powers of three. Otherwise, return `false`.
 *
 * An integer `y` is a power of three if there exists an integer `x` such that `y == 3^x`.
 */
function checkPowersOfThreeWithBacktracking(n: number): boolean {
  let i = 0;

  while (Math.pow(3, i) <= n) {
    i++;
  }

  function backtrack(j: number, sum: number) {
    if (sum === n) {
      return true;
    } else if (j === 0) {
      return false;
    } else {
      for (let k = j - 1; k >= 0; k--) {
        sum += Math.pow(3, k);

        if (backtrack(k, sum)) {
          return true;
        }

        sum -= Math.pow(3, k);
      }
    }

    return false;
  }

  return backtrack(i, 0);
}
