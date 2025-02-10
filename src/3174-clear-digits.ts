/**
 * (3174. Clear Digits)[https://leetcode.com/problems/clear-digits/]
 *
 * You are given a string `s`.
 *
 * Your task is to remove all digits by doing this operation repeatedly:
 * - Delete the first digit and the closest non-digit character to its left.
 *
 * Return the resulting string after removing all digits.
 */
export function clearDigits(s: string): string {
  const digits = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  const invalidIndexes = new Set<number>();
  let i = 0;
  let j = 0;
  let answer = "";

  while (j < s.length) {
    if (digits.has(s[j])) {
      // Remove the digit
      invalidIndexes.add(j);

      while (i >= 0) {
        if (invalidIndexes.has(i)) {
          i--;
        } else {
          invalidIndexes.add(i);
          break;
        }
      }
    } else {
      // j contains a char
      i = j;
    }

    j++;
  }

  for (let k = 0; k < s.length; k++) {
    if (!invalidIndexes.has(k)) {
      answer += s[k];
    }
  }

  return answer;
}
