/**
 * [1790. Check if One String Swap Can Make Strings Equal](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/description/)
 *
 * You are given two strings `s1` and `s2` of equal length. A string swap is an operation where
 * you choose two indices in a string (not necessarily different) and swap the characters at
 * these indices.
 *
 * Return `true` if it is possible to make both strings equal by performing at most one string
 * swap on exactly one of the strings. Otherwise, return `false`.
 *
 * Complexity
 * - Time complexity: O(n), because we iterate over the strings once.
 * - Space complexity: O(1), because we use only three integer variables that don't depend on
 * input.
 */
function areAlmostEqual(s1: string, s2: string): boolean {
  // For two strings to be made equal by performing at most one swap, they need to:
  // 1) Have equal length
  // 2) Have the same chars
  // 3) Have length - 2 characters in the same place

  if (s1.length !== s2.length) {
    false;
  }

  const n = s1.length;
  let firstIncorrectCharIndex = -1;
  let secondIncorrectCharIndex = -1;

  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) {
      if (firstIncorrectCharIndex === -1) {
        firstIncorrectCharIndex = i;
      } else if (secondIncorrectCharIndex === -1) {
        secondIncorrectCharIndex = i;
      } else {
        // There are more than two misplaced characters.
        return false;
      }
    }
  }

  if (firstIncorrectCharIndex > -1 && secondIncorrectCharIndex > -1) {
    return (
      s2[secondIncorrectCharIndex] === s1[firstIncorrectCharIndex] &&
      s2[firstIncorrectCharIndex] === s1[secondIncorrectCharIndex]
    );
  }

  return firstIncorrectCharIndex === -1;
}
