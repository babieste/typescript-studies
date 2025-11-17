/**
 * ### [1513. Number of Substrings With Only 1s](https://leetcode.com/problems/number-of-substrings-with-only-1s/)
 *
 * Given a binary string `s`, return the number of substrings with all characters `1`'s.
 * Since the answer may be too large, return it modulo `10^9 + 7`.
 *
 * #### Constraints:
 * - `1 <= s.length <= 10^5`
 * - `s[i]` is either `'0'` or `'1'`.
 *
 * #### Reasoning
 * Given a substring of length `1` ending at index `i`, there is **1** valid substring that
 * counts to the total. If `s[i + 1]` is also valid (meaning it's also `'1'`), for the new
 * substring of length `2` ending at `s[i + 1]`, there are **2** valid substrings to count
 * (both `'1'` and `'11'`). Every time we try to expand the length of a valid substring,
 * there are `length` possible new substrings that can be added to the total count. Thus
 * for each index we keep track of the substring length and add it to the total count every
 * time it expands. If `s[i]` is `0`, then we reset the substring length count.
 *
 * #### Complexity Analysis
 * - Time complexity: `O(N)` because we iterate the input string once.
 * - Space complexity: `O(1)`, because the `total` and `substringLength` variables do not
 * depend on the size of the input.
 */
function numSub(s: string): number {
    const MODULO = Math.pow(10, 9) + 7;

    let total = 0;
    let substringLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "0") {
            substringLength = 0;
        } else {
            substringLength += 1;
            total += substringLength;
            total %= MODULO;
        }
    }

    return total;
}
