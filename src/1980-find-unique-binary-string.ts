/**
 * ### Description
 * [1980. Find Unique Binary String](https://leetcode.com/problems/find-unique-binary-string/)
 *
 * Given an array of strings `nums` containing `n` unique binary strings each of length `n`,
 * return a binary string of length `n` that does not appear in `nums`. If there are multiple
 * answers, you may return any of them.
 *
 * ### Complexity
 * - Time complexity: At each position, there are two possible candidates: `0` or `1`. The
 * `backtrack`function verify all `n` positions in the array, so the resulting time complexity
 * for this part is O(2^n).
 *
 * But at each position we first transform our binary array in a binary string, using the`join`
 * method, and then verify if there is such a string in the `nums` array using `some`. Both methods
 * are O(n) so the overall time complexity is going to beO(2^n × n^2). Very inefficient. But works!
 *
 * - Space complexity: We are using a auxiliary array of lengthn, so the space complexity isO(n).
 */
function findDifferentBinaryString(nums: string[]): string {
  const n = nums.length;
  const binary = new Array(n).fill(0);

  function backtrack(currentPosition: number) {
    if (currentPosition > n) {
      return false;
    }

    const binaryString = binary.join("");

    if (!nums.some((it) => it === binaryString)) {
      return true;
    }

    const candidates = [0, 1];
    const previousValue = binary[currentPosition];

    for (const candidate of candidates) {
      binary[currentPosition] = candidate;

      if (backtrack(currentPosition + 1)) {
        return true;
      }

      binary[currentPosition] = previousValue;
    }

    return false;
  }

  backtrack(0);
  return binary.join("");
}
