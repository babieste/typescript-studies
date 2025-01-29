/**
 * [684. Redundand Connection](https://leetcode.com/problems/redundant-connection/)
 *
 * In this problem, a tree is an undirected graph that is connected and has no cycles.
 *
 * You are given a graph that started as a tree with `n` nodes labeled from `1` to `n`,
 * with one additional edge added. The added edge has two different vertices chosen from
 * `1` to `n`, and was not an edge that already existed. The graph is represented as an
 * array `edges` of length `n where `edges[i] = [a, b]` indicates that there is an edge
 * between nodes `a` and `b` in the graph.
 *
 * Return an edge that can be removed so that the resulting graph is a tree of `n` nodes.
 * If there are multiple answers, return the answer that occurs last in the input.
 *
 * Complexity
 * - Time complexity: since we are using a Union Find optimized algorithm (union by rank
 * and path compression), initialization is `O(edges.length)`. The find and union methods
 * have each a complexity of `O(α(edges.length))`, in which `α(n)` represents the inverse
 * Ackermann function, which is considered almost constant for considerable values of `n`.
 * We are iterating through all edges of the graph, so overall time complexity is `O(N+N⋅α(N))`,
 * which can be simplified to `O(N⋅α(N))`, with `N = edges.length`.
 *
 * - Space complexity: `disjointSet` consists of two arrays of length `edges.length`, so the
 * space complexity is `O(n)`. `lastProcessedEdge` has at most 2 elements, so it's `O(1)`.
 */
export function findRedundantConnection(edges: number[][]): number[] {
  const disjointSet = new DisjointSet(edges.length);
  let lastProcessedEdge: number[] = [];

  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];

    if (disjointSet.areConnected(a, b)) {
      lastProcessedEdge = [a, b];
    }

    disjointSet.union(a, b);
  }

  return lastProcessedEdge;
}

class DisjointSet {
  private readonly parent: number[] = [];
  private readonly rank: number[] = [];

  public constructor(size: number) {
    this.parent = new Array(size);
    this.rank = new Array(size).fill(0);

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  public find(i: number): number {
    if (this.parent[i] === i) {
      return this.parent[i];
    }

    this.parent[i] = this.find(this.parent[i]);
    return this.parent[i];
  }

  public union(i: number, j: number): void {
    const rootI = this.find(i);
    const rootJ = this.find(j);

    if (rootI === rootJ) {
      return;
    }

    if (this.rank[rootI] < this.rank[rootJ]) {
      this.parent[rootI] = rootJ;
    } else if (this.rank[rootI] > this.rank[rootJ]) {
      this.parent[rootJ] = rootI;
    } else {
      this.parent[rootJ] = rootI;
      this.rank[rootI]++;
    }
  }

  public areConnected(i: number, j: number): boolean {
    return this.find(i) === this.find(j);
  }
}
