/**
 * [1267. Count Servers That Comunicate](https://leetcode.com/problems/count-servers-that-communicate/description/)
 *
 * You are given a map of a server center, represented as a `m * n` integer matrix `grid`, where 1 means
 * that on that cell there is a server and 0 means that it is no server. Two servers are said to
 * communicate if they are on the same row or on the same column.
 *
 * Return the number of servers that communicate with any other server.
 */
export function countServers(grid: number[][]): number {
  function depthFirstSearch(x: number, y: number): number {
    if (grid[x][y] === 0) {
      return 0;
    }

    grid[x][y] = 0;

    let serverConnections = 1;

    for (let row = 0; row < grid.length; row++) {
      serverConnections += depthFirstSearch(row, y);
    }

    for (let col = 0; col < grid[0].length; col++) {
      serverConnections += depthFirstSearch(x, col);
    }

    return serverConnections;
  }

  let answer = 0;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === 1) {
        const connectedServers = depthFirstSearch(x, y);
        if (connectedServers > 1) {
          answer += connectedServers;
        }
      }
    }
  }

  return answer;
}
