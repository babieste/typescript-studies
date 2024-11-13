const VISITED = "x";

/**
 * Problem [200. Number of Islands](https://leetcode.com/problems/number-of-islands/).
 */
export function numIslands(grid: string[][]): number {
  let islandCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        markLandAsVisited(grid, i, j);
        islandCount++;
      }
    }
  }

  return islandCount;
}

function markLandAsVisited(grid: string[][], i: number, j: number): void {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) {
    return;
  }

  if (grid[i][j] === "0" || grid[i][j] === VISITED) {
    return;
  }

  grid[i][j] = VISITED;
  markLandAsVisited(grid, i - 1, j);
  markLandAsVisited(grid, i + 1, j);
  markLandAsVisited(grid, i, j - 1);
  markLandAsVisited(grid, i, j + 1);
}
