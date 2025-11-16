/**
 * ### [329. Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)
 *
 * Given an `m x n` integers matrix, return the length of the longest increasing path in matrix.
 *
 * From each cell, you can either move in four directions: left, right, up, or down.
 * You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).
 *
 * #### Constraints
 * - `m == matrix.length`
 * - `n == matrix[i].length`
 * - `1 <= m, n <= 200`
 * - `0 <= matrix[i][j] <= 2^31 - 1`
 *
 * #### Reasoning
 * The main idea is to perform a depth-first search for each cell in the matrix, with the
 * condition that we can only enter an adjacent cell if it's value is bigger than the
 * current cell's value. The problem is that this is not performatic because for each
 * starting cell the algorithm computes all possible lengths to every adjacent cell.
 *
 * To solve this problem we can memoize each cell longest path, starting from it. So
 * whenever a cell is visited again, if it's longest path is already calculated, we
 * just sum it to the current path being validated.
 *
 * #### Complexity Analysis
 * - Time complexity: `O(M x N)`, since the algorithm is optmized, the algorithm visits
 * each cell only once.
 * - Space complexity: `O(M x N)` because we are using an auxiliary memoization matrix
 * of `M` rows and `N` columns.
 */
function longestIncreasingPath(matrix: number[][]): number {
    const m = matrix.length;
    const n = matrix[0].length;
    const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    let longestPath = 0;

    function calculateIncreasingPath(i: number, j: number): number {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return 0;
        }

        if (dp[i][j] > 0) {
            return dp[i][j];
        }

        let leftPath = 0;
        if (j - 1 >= 0 && matrix[i][j - 1] > matrix[i][j]) {
            leftPath = calculateIncreasingPath(i, j - 1);
        }

        let rightPath = 0;
        if (j + 1 < n && matrix[i][j + 1] > matrix[i][j]) {
            rightPath = calculateIncreasingPath(i, j + 1);
        }

        let upPath = 0;
        if (i - 1 >= 0 && matrix[i - 1][j] > matrix[i][j]) {
            upPath = calculateIncreasingPath(i - 1, j);
        }

        let downPath = 0;
        if (i + 1 < m && matrix[i + 1][j] > matrix[i][j]) {
            downPath = calculateIncreasingPath(i + 1, j);
        }

        dp[i][j] = 1 + Math.max(leftPath, rightPath, upPath, downPath);
        return dp[i][j];
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const localMaxPath = calculateIncreasingPath(i, j);

            if (localMaxPath > longestPath) {
                longestPath = localMaxPath;
            }
        }
    }

    return longestPath;
}
