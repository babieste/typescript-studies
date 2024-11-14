/**
 * Problem [2101. Detonate the Maximum Bombs](https://leetcode.com/problems/detonate-the-maximum-bombs/description/).
 */
function improvedMaximumDetonation(bombs: number[][]): number {
  const graph: number[][] = Array.from({ length: bombs.length }, () => []);

  // Build graph adjacency list
  for (let i = 0; i < bombs.length; i++) {
    const [x0, y0, r] = bombs[i];

    for (let j = 0; j < bombs.length; j++) {
      if (i === j) {
        continue;
      }

      const [x, y] = bombs[j];

      if (isBombWithinRange(x0, y0, r, x, y)) {
        graph[i].push(j);
      }
    }
  }

  function dfs(graph: number[][], u: number, visited: boolean[]): number {
    const [x0, y0, r] = bombs[u];
    let count = 1;
    visited[u] = true;

    for (const v of graph[u]) {
      const [x, y] = bombs[v];
      if (!visited[v] && isBombWithinRange(x0, y0, r, x, y)) {
        count += dfs(graph, v, visited);
      }
    }

    return count;
  }

  let maxBombsExploded = 0;

  for (let u = 0; u < graph.length; u++) {
    const visited = Array(bombs.length).fill(false);
    maxBombsExploded = Math.max(maxBombsExploded, dfs(graph, u, visited));
  }

  return maxBombsExploded;
}

/**
 * O(n^3) solution
 */
function maximumDetonation(bombs: number[][]): number {
  // O(n^3)
  let maxBombsExploded = 0;

  // O(n^2)
  function bombsExploded(index: number, visited: boolean[]) {
    const [x0, y0, r] = bombs[index];
    let counter = 1;

    visited[index] = true;

    // O(n)
    for (let i = 0; i < bombs.length; i++) {
      if (
        visited[i] === false &&
        isBombWithinRange(x0, y0, r, bombs[i][0], bombs[i][1])
      ) {
        visited[i] = true;
        counter += bombsExploded(i, visited); // O(n)
      }
    }

    return counter;
  }

  // O(n)
  for (let i = 0; i < bombs.length; i++) {
    const visited: boolean[] = Array(bombs.length + 1).fill(false);
    maxBombsExploded = Math.max(maxBombsExploded, bombsExploded(i, visited));
  }

  return maxBombsExploded;
}

// O(1)
function isBombWithinRange(
  x0: number,
  y0: number,
  r: number,
  x: number,
  y: number
): boolean {
  return Math.pow(x - x0, 2) + Math.pow(y - y0, 2) <= Math.pow(r, 2);
}
