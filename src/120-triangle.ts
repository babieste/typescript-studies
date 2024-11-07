/** Problem: [120. Triangle](https://leetcode.com/problems/triangle/) */
export function minimumTotal(triangle: number[][]): number {
  const N = triangle.length;
  const memo: number[] = Array(N).fill(0);

  // A soma para cada índice da última linha é o próprio valor do índice.
  for (let index = 0; index < N; index++) {
    memo[index] = triangle[N - 1][index];
  }

  for (let row = N - 2; row >= 0; row--) {
    for (let index = 0; index < triangle[row].length; index++) {
      if (index + 1 >= triangle[row + 1].length) {
        memo[index] = triangle[row][index] + memo[index];
      } else {
        memo[index] =
          triangle[row][index] + Math.min(memo[index], memo[index + 1]);
      }
    }
  }

  return memo[0];
}
