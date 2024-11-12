/**
 * Problem [1791. Find Center of Star Graph](https://leetcode.com/problems/find-center-of-star-graph/description/).
 *
 * If an edge `B` includes vertex `u`, that exists in the edge `A`, this means that `u` is the center vertex, since it's
 * happening in at least two edges, and the center node is common to all edges. Otherwise, vertex `v`, that exists
 * in edge `A`, is the only possible option for the center vertex, since all nodes have a common edge to the center.
 */
export function findCenter(edges: number[][]): number {
  const [uA, vA] = edges[0];
  const edgeB = edges[1];
  return edgeB.includes(uA) ? uA : vA;
}
