/**
 * ### [133. Clone Graph](https://leetcode.com/problems/clone-graph/)
 *
 * Given a reference of a node in a connected undirected graph. Return
 * a deep copy (clone) of the graph. Each node in the graph contains a
 * value (int) and a list (List[Node]) of its neighbors.
 *
 * #### Constraints
 * - The number of nodes in the graph is in the range [0, 100].
 * - `1 <= Node.val <= 100`
 * - `Node.val` is unique for each node.
 * - `There are no repeated edges and no self-loops in the graph.
 * - The Graph is connected and all nodes can be visited starting from
 * the given node.
 *
 * #### Time Complexity
 * - Time complexity: the algorithm uses BFS to create a new graph, thus
 * the time complexity is `O(V + E)`, where V is the number of vertices
 * and E is the number of edges;
 * - Space complexity: `O(V)`, where V is the number of vertices, since
 * we are creating a new graph.
 */
export function cloneGraph(node: _Node | null): _Node | null {
    if (!node) {
        return null;
    }

    const clonesReference = new Map<_Node, _Node>();
    const newNode = new _Node(node.val);
    const queue: _Node[] = [node];

    clonesReference.set(node, newNode);

    while (queue.length) {
        const node = queue.shift()!;
        const newNode = clonesReference.get(node)!;

        for (let neighbor of node.neighbors) {
            if (!clonesReference.has(neighbor)) {
                const newNeighbor = new _Node(neighbor.val);
                clonesReference.set(neighbor, newNeighbor);
                newNode.neighbors.push(newNeighbor);
                queue.push(neighbor);
            } else {
                const newNeighbor = clonesReference.get(neighbor)!;
                newNode.neighbors.push(newNeighbor);
            }
        }
    }

    return newNode;
}

class _Node {
    public constructor(
        public readonly val: number = 0,
        public readonly neighbors: _Node[] = []
    ) {}
}
