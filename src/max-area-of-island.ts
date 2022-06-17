/**
 * @see https://leetcode.com/problems/max-area-of-island/
 * 
 * You are given an m x n binary matrix grid. An island is a group of 1's (representing land)
 * connected 4-directionally (horizontal or vertical.) You may assume all four edges of the
 * grid are surrounded by water. The area of an island is the number of cells with a value 1
 * in the island. Return the maximum area of an island in grid. If there is no island, return 0.
 * 
 * Constraints:
 * - m == grid.length
 * - n == grid[i].length
 * - 1 <= m, n <= 50
 * - grid[i][j] is either 0 or 1
 * 
 * Time and space complexity analysis:
 * 1) In the worst case scenario, the time complexity will be O(n x m), because we visit
 * each cell at least once (when no islands are present).
 * 2) For space complexity, we use the grid itself to mark the seen cells (by turning them to zero),
 * but the dfs stack size implies in O(|V|), where |V| is the number of vertices in the incidence matrix.
 */
function maxAreaOfIsland(grid: number[][]): number {
    let maxArea = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, dfs(grid, i, j));
            }
        }
    }
    
    return maxArea;
};

function dfs(grid: number[][], i: number, j: number): number {
    if (i < 0 || i >= grid.length) return 0;
    if (j < 0 || j >= grid[0].length) return 0;
    if (grid[i][j] === 0) return 0;
    
    grid[i][j] = 0;
    
    return (1 + dfs(grid, i+1, j) + dfs(grid, i-1, j) + dfs(grid, i, j+1) + dfs(grid, i, j-1));   
}
