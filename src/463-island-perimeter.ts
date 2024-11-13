const VISITED = -1;

/**
 * Problem [463. Island Perimeter](https://leetcode.com/problems/island-perimeter/description/).
 */
function islandPerimeter(grid: number[][]): number {
  let perimeter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += depthFirstSearch(grid, i, j);
      }
    }
  }

  return perimeter;
}

function depthFirstSearch(grid: number[][], i: number, j: number) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let perimeter = 0;

  grid[i][j] = VISITED;

  for (const direction of directions) {
    const x = i + direction[0];
    const y = j + direction[1];

    // If the side of the island is out of the bounds of the grid,
    // or it is water it counts for the island perimeter.
    if (
      x < 0 ||
      y < 0 ||
      x >= grid.length ||
      y >= grid[i].length ||
      grid[x][y] === 0
    ) {
      perimeter++;
    } else if (grid[x][y] === 1) {
      perimeter += depthFirstSearch(grid, x, y);
    }
  }

  return perimeter;
}
