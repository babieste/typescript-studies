export function climbStairs(n: number): number {
  const dp: number[] = [1, 2];

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1];
}
