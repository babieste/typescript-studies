/**
 * [39. Combination Sum](https://leetcode.com/problems/combination-sum/)
 *
 * Given an array of distinct integers `candidates` and a target integer `target`,
 * return a list of all unique combinations of candidates where the chosen numbers
 * sum to `target`. You may return the combinations in any order.
 *
 * The same number may be chosen from `candidates` an unlimited number of times.
 * Two combinations are unique if the frequency of at least one of the chosen
 * numbers is different.
 */
export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  candidates.sort((a, b) => a - b); // O(n)
  let result: number[][] = [];

  function backtrack(
    partialSolution: number[],
    partialSum: number,
    index: number
  ) {
    if (partialSum === target) {
      result.push(structuredClone(partialSolution));
    } else if (partialSum > target) {
      return;
    } else {
      while (partialSum <= target) {
        partialSolution.push(candidates[index]);
        partialSum += candidates[index];
        backtrack(partialSolution, partialSum, index);
        partialSum -= candidates[index];
        partialSolution.pop();
        index += 1;
      }
    }
  }

  backtrack([], 0, 0);

  return result;
}
