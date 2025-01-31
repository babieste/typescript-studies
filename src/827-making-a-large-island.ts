/**
 * [827. Making a Large Island](https://leetcode.com/problems/making-a-large-island/)
 *
 * You are given an `n x n` binary matrix grid. You are allowed to change at most one `0` to be `1`.
 *
 * Return the size of the largest island in grid after applying this operation.
 *
 * An island is a 4-directionally connected group of `1`s.
 */
export function largestIsland(grid: number[][]): number {
  const n = grid.length;
  const islandSizes = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );
  const idToSizeMap = new Map<number, number>();
  let uniqueIslandId = 2;
  let islandSize = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const size = breadthFirstSearch(
          grid,
          i,
          j,
          uniqueIslandId,
          islandSizes
        );
        idToSizeMap.set(uniqueIslandId, size);
        uniqueIslandId++;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        const adjacentIslandsIds = new Set<number>();
        let potentialSize = 1;

        if (i - 1 >= 0 && grid[i - 1][j] !== 0) {
          adjacentIslandsIds.add(grid[i - 1][j]);
        }

        if (i + 1 < n && grid[i + 1][j] !== 0) {
          adjacentIslandsIds.add(grid[i + 1][j]);
        }

        if (j - 1 >= 0 && grid[i][j - 1] !== 0) {
          adjacentIslandsIds.add(grid[i][j - 1]);
        }

        if (j + 1 < n && grid[i][j + 1] !== 0) {
          adjacentIslandsIds.add(grid[i][j + 1]);
        }

        for (const islandId of adjacentIslandsIds) {
          potentialSize += idToSizeMap.get(islandId) ?? 0;
        }

        islandSize = Math.max(islandSize, potentialSize);
      }
    }
  }

  return islandSize > 0 ? islandSize : n * n;
}

function breadthFirstSearch(
  grid: number[][],
  i: number,
  j: number,
  id: number,
  sizes: number[][]
): number {
  const n = grid.length;
  const queue: number[][] = [[i, j]];
  let islandSize = 0;

  while (queue.length) {
    const [x, y] = queue.shift()!;

    if (grid[x][y] !== 1) {
      continue;
    }

    grid[x][y] = id;
    sizes[x][y] = id;

    islandSize++;

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    if (x - 1 >= 0 && grid[x - 1][y] === 1) {
      queue.push([x - 1, y]);
    }

    if (x + 1 < n && grid[x + 1][y] === 1) {
      queue.push([x + 1, y]);
    }

    if (y - 1 >= 0 && grid[x][y - 1] === 1) {
      queue.push([x, y - 1]);
    }

    if (y + 1 < n && grid[x][y + 1] === 1) {
      queue.push([x, y + 1]);
    }
  }

  return islandSize;
}
