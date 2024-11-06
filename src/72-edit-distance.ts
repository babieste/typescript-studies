/**
 * Problem: 72. Edit Distance (https://leetcode.com/problems/edit-distance/)
 */
export function minDistance(word1: string, word2: string): number {
  if (word1.length === 0 && word2.length === 0) {
    return 0;
  }

  /**
   * There can only be `|word1|x|word2|` possible unique recursive
   * calls, since there are only this many distinct `(i, j)` pairs
   * to serve as the argument parameters of recursive calls.
   *
   * `dp[i][j]` represents the minimum number of diferences
   * between `word1[0], word1[1], ... word1[i]` and the segment
   * of `word2` ending at `j`.
   */
  const dp: number[][] = Array.from({ length: word1.length + 1 }, () =>
    Array(word2.length + 1).fill(0)
  );

  /**
   * Initializes the first row and column. For the string edit distance problem,
   * cells `(i, 0)` and `(0, i)` correspond to matching length-i strings
   * against the empty string. This requires exactly `i` insertions/deletions.
   */
  for (let j = 0; j <= word2.length; j++) {
    dp[0][j] = j;
  }

  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = i;
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        const replacingCost = dp[i - 1][j - 1] + 1;
        const insertionCost = dp[i][j - 1] + 1;
        const deletionCost = dp[i - 1][j] + 1;

        dp[i][j] = Math.min(replacingCost, insertionCost, deletionCost);
      }
    }
  }

  return dp[word1.length][word2.length];
}
