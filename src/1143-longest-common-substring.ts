function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;

  /** dp[i][j] represents the LCS of text1[0...i] and text2[0...j] */
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(-1));

  //   return topDownLcs(text1, text2, 0, 0, dp);
  //   return bottomUpLcs(text1, text2);
}

/** Top-down approach with recursion */
function topDownLcs(
  A: string,
  B: string,
  i: number,
  j: number,
  dp: number[][]
): number {
  if (i >= A.length || j >= B.length) {
    return 0;
  }

  if (dp[i][j] >= 0) {
    return dp[i][j];
  }

  if (A[i] === B[j]) {
    dp[i][j] = 1 + topDownLcs(A, B, i + 1, j + 1, dp);
  } else {
    dp[i][j] = Math.max(
      topDownLcs(A, B, i + 1, j, dp),
      topDownLcs(A, B, i, j + 1, dp)
    );
  }

  return dp[i][j];
}

/** Iterative bottom-up approach */
function bottomUpLcs(A: string, B: string): number {
  /** dp[i][j] represents the LCS of A[0...i-1] and B[0...j-1] */
  const dp = Array.from({ length: A.length + 1 }, () =>
    Array(B.length + 1).fill(0)
  );

  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[A.length][B.length];
}
