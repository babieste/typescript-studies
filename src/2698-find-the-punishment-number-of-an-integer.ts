/**
 * [2698. Find the Punishment Number of an Integer](https://leetcode.com/problems/find-the-punishment-number-of-an-integer/)
 *
 * Given a positive integer `n`, return the punishment number of `n`.
 * The punishment number of `n` is defined as the sum of the squares of all integers `i` such that:
 * - `1 <= i <= n`;
 * - The decimal representation of `i * i` can be partitioned into **contiguous substrings**
 * such that the sum of the integer values of these substrings equals `i`.
 */
export function punishmentNumberWithBacktracking(n: number): number {
  let answer = 0;

  function backtrack(
    i: number,
    currentSum: number,
    target: number,
    decimalRepresentation: string
  ): boolean {
    // We reached the end of the string
    if (i === decimalRepresentation.length) {
      // We managed to find a valid partition?
      return currentSum === target;
    }

    // Try all possible splits, starting from i
    for (let j = i + 1; j <= decimalRepresentation.length; j++) {
      // Extract the substring in the interval [i, j(.
      const substring = decimalRepresentation.substring(i, j);

      if (
        backtrack(
          j,
          currentSum + parseInt(substring),
          target,
          decimalRepresentation
        )
      ) {
        return true;
      }
    }

    return false;
  }

  for (let i = 1; i <= n; i++) {
    const squared = i * i;

    if (backtrack(0, 0, i, squared.toString())) {
      answer += squared;
    }
  }

  return answer;
}

export function punishmentNumberWithDynamicProgramming(n: number): number {
  function isValidPartition(
    i: number,
    currentSum: number,
    target: number,
    decimalRepresentation: string,
    memoization: number[][]
  ): boolean {
    // We reached the end of the string
    if (i === decimalRepresentation.length) {
      // We managed to find a valid partition?
      return currentSum === target;
    }

    // If the result for this state was already calculated, return it
    if (memoization[i][currentSum] !== -1) {
      return memoization[i][currentSum] === 1;
    }

    // Try all possible splits, starting from i
    for (let j = i + 1; j <= decimalRepresentation.length; j++) {
      // Extract the substring in the interval [i, j(.
      const substring = decimalRepresentation.substring(i, j);
      const newSum = currentSum + parseInt(substring);

      if (newSum > target) {
        break;
      }

      if (
        isValidPartition(j, newSum, target, decimalRepresentation, memoization)
      ) {
        memoization[i][currentSum] = 1;
        return true;
      }
    }

    memoization[i][currentSum] = 0;
    return false;
  }

  let answer = 0;

  for (let i = 1; i <= n; i++) {
    const squared = i * i;
    const memo: number[][] = Array.from(
      { length: squared.toString().length },
      () => new Array(i + 1).fill(-1)
    );

    if (isValidPartition(0, 0, i, squared.toString(), memo)) {
      answer += squared;
    }
  }

  return answer;
}
