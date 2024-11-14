/**
 * Problem [322. Coin Change](https://leetcode.com/problems/coin-change/).
 *
 * This problem can be solved with dynamic programming, but the approach
 * used here is a breadth-first search. Using [this solution](https://leetcode.com/problems/coin-change/solutions/2065921/python-bfs-solution-with-explanation-most-intuitive-for-beginners)
 * as a help tool, the idea is that BFS give us the shortest path to achieve
 * the desired amount, i. e. the minimum number of coins.
 */
function coinChange(coins: number[], amount: number): number {
  const visited = new Set<number>();

  // At the beginning we have the whole amount and zero coins.
  const queue: number[][] = [[amount, 0]];

  while (queue.length) {
    const [currentAmount, coinsCount] = queue.shift() as number[];

    if (currentAmount === 0) {
      return coinsCount;
    }

    for (const coin of coins) {
      const newAmount = currentAmount - coin;

      if (visited.has(newAmount) || newAmount < 0) {
        continue;
      }

      queue.push([newAmount, coinsCount + 1]);
      visited.add(newAmount);
    }
  }

  return -1;
}
