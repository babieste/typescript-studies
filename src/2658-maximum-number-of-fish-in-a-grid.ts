import { DisjointSet } from "../data-structures/disjoint-set";

/**
 * [2658. Maximum Number of Fish in a Grid](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/description/)
 *
 * You are given a 0-indexed 2D matrix `grid` of size `m x n`, where `(r, c)` represents:
 * - A land cell if `grid[r][c] = 0`, or
 * - A water cell containing `grid[r][c]` fish, if `grid[r][c] > 0`.
 *
 * A fisher can start at any water cell `(r, c)` and can do the following operations any number of times:
 * - Catch all the fish at cell `(r, c)`, or
 * - Move to any adjacent water cell.
 *
 * Return the maximum number of fish the fisher can catch if he chooses his starting cell optimally, or 0 if
 * no water cell exists. An adjacent cell of the cell `(r, c)`, is one of the cells `(r, c + 1)`, `(r, c - 1)`,
 * `(r + 1, c)` or `(r - 1, c)` if it exists.
 */
export function findMaxFish(grid: number[][]): number {
  const rowCount = grid.length;
  const colCount = grid[0].length;
  const itemsCount = rowCount * colCount;
  const disjointSet = new DisjointSet(itemsCount);
  const gridCopy = structuredClone(grid);

  function index(r: number, c: number): number {
    return r * colCount + c;
  }

  function values(i: number): number[] {
    return [Math.floor(i / colCount), i % colCount];
  }

  for (let r = 0; r < rowCount; r++) {
    for (let c = 0; c < colCount; c++) {
      if (grid[r][c] > 0) {
        // Mark cell as "visited".
        grid[r][c] = 0;

        const i = index(r, c);

        if (r - 1 >= 0 && grid[r - 1][c] > 0) {
          const adjIndex = index(r - 1, c);
          disjointSet.union(i, adjIndex);
        }

        if (r + 1 < rowCount && grid[r + 1][c] > 0) {
          const adjIndex = index(r + 1, c);
          disjointSet.union(i, adjIndex);
        }

        if (c - 1 >= 0 && grid[r][c - 1] > 0) {
          const adjIndex = index(r, c - 1);
          disjointSet.union(i, adjIndex);
        }

        if (c + 1 < colCount && grid[r][c + 1] > 0) {
          const adjIndex = index(r, c + 1);
          disjointSet.union(i, adjIndex);
        }
      }
    }
  }

  const s = new Array(itemsCount).fill(0);
  for (let i = 0; i < itemsCount; i++) {
    const [r, c] = values(i);
    s[disjointSet.find(i)] += gridCopy[r][c];
  }

  return Math.max(...s);
}
