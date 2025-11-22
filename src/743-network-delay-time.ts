/**
 * ### [743. Network Delivery Time](https://leetcode.com/problems/network-delay-time/)
 *
 * You are given a network of `n` nodes, labeled from `1` to `n`. You are also given `times`,
 * a list of travel times as directed edges `times[i]` = `(u, v, w)`, where `u` is the source
 * node, `v` is the target node, and `w` is the time it takes for a signal to travel from
 * source to target.
 *
 * We will send a signal from a given node `k`. Return the **minimum time** it takes for all the
 * `n` nodes to receive the signal. If it is impossible for all the n nodes to receive the
 * signal, return `-1`.
 *
 * #### Constraints
 * - `1 <= k <= n <= 100`
 * - `1 <= times.length <= 6000`
 * - `times[i].length == 3`
 * - `1 <= u, v <= n`
 * - `u != v`
 * - `0 <= w <= 100`
 * - All the pairs `(u, v)` are unique.
 *
 * #### Complexity Analysis
 * - Time complexity: to initialize the `timeToReach` array takes `O(V)`.
 * To create the adjacency list `graph` takes `O(E)`. To insert node `k`
 * into the queue takes `O(1)`, because the queue is initially empty. Thus,
 * initialization takes `O(V + E)`. The main algorithm is based on a
 * min-heap implementation. Every node is going to be visited at most once.
 * The dequeue method is going to be called for every item inserted into the
 * queue. An insertion happens every time a shorter path is found, which happens
 * at most `E` times. The cost of extracting an element from a min-heap is `O(log N)`,
 * where `N` is the size of the heap. Since we have `E + 1`, (`E` edges + 1 inital node
 * `k`), the total cost of extracting all elements in the queue is `(E + 1) * O(log E)`,
 * which simplifies to `O(E log E)`. Since `E` is at most `V^2`, this can be transformed
 * into `O(E log V)`. The final result for finding the maximum value in `timeToReach`
 * takes `O(V)`. Combining all the terms, the complexity is `O(V + E) + O(E log V) + O(V)`,
 * which can be simplified to `O(E log V)`, which is the dominant term.
 */
export function networkDelayTime(
    times: number[][],
    n: number,
    k: number
): number {
    const graph: Record<number, number[][]> = {};
    const timeToReach: Record<number, number> = {};

    // Min-priority queue ordered by time to reach from k.
    const queue = new MinPriorityQueue<{ time: number; node: number }>(
        (it) => it.time
    );

    // Build adjacency list
    for (let i = 1; i <= n; i++) {
        graph[i] ??= [];
        timeToReach[i] ??= Number.POSITIVE_INFINITY;
    }

    for (const [u, v, w] of times) {
        graph[u].push([v, w]);
    }

    timeToReach[k] = 0;
    queue.enqueue({ time: 0, node: k });

    while (queue.size() > 0) {
        const { node: u, time } = queue.dequeue();

        // If we've found a shorter path to 'u', ignore this entry.
        if (time > timeToReach[u]) {
            continue;
        }

        for (const [v, w] of graph[u]) {
            if (timeToReach[v] > timeToReach[u] + w) {
                // We've found a shorter path from u to v.
                timeToReach[v] = timeToReach[u] + w;
                queue.enqueue({ time: timeToReach[v], node: v });
            }
        }
    }

    const minimumTime = Math.max(...Object.values(timeToReach));
    // If minimumTime is infinity, this means a node is not reachable from k.
    return minimumTime === Number.POSITIVE_INFINITY ? -1 : minimumTime;
}
