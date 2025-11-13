enum State {
    NOT_VISITED = 0,
    VISITED = 1,
    FINISHED = 2,
}

/**
 * ### (207. Course Schedule)[https://leetcode.com/problems/course-schedule/description/]
 *
 * There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`.
 * You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you
 * must take course `bi` first if you want to take course `ai`.
 *
 * For example, the pair `[0, 1]`, indicates that to take course 0 you have to first take course 1.
 * Return `true` if you can finish all courses. Otherwise, return `false`.
 *
 * #### Reasoning
 * To solve this problem, the idea is to visualize that the prerequisites array represent the
 * edges of a directed graph. If the graph has cycles, this means that is not possible to finish
 * all courses.
 *
 * #### Complexity Analysis
 * - Time complexity: Given it's a depth-first search algorithm, the time complexity is `O(V + E)`,
 * where V is the number of nodes and E is the number of endges in the graph.
 * - Space complexity:
 *      - The `adjacencyList` record stores the adjency for every vertex V. There are E edges
 *      in the `prerequisites` array, thus it consumes `O(V + E)` space.
 *      - The `visited` array stores the state for each V vertices, so the space complexity is `O(V)`.
 *      - The `hasCircularDependency` function implements a recursive DFS algorithm and, in the worst
 *      case scenario, the dependency graph is a list, which would cause the call stack to have a space
 *      space complexity of `O(V)`.
 *      - Overall, the space complexity is `O(V + E)`, which is the dominant factor over `O(V)`.
 */
export function canFinish(
    numCourses: number,
    prerequisites: number[][]
): boolean {
    if (!prerequisites.length) {
        return true;
    }

    const visited: Record<number, number> = {};
    const adjacencyList = buildAdjacencyList(numCourses, prerequisites);

    function hasCircularDependency(course: number): boolean {
        if (visited[course] === State.FINISHED) {
            // Course was already visited and the traversal finalized,
            // meaning no dependency was detected.
            return false;
        }

        if (visited[course] === State.VISITED) {
            // This course depends on some other course that we've already
            // traversed, meaning that there is a circular dependency.
            return true;
        }

        visited[course] = State.VISITED;

        for (const requiredCourse of adjacencyList[course]) {
            if (hasCircularDependency(requiredCourse)) {
                return true;
            }
        }

        visited[course] = State.FINISHED;
        return false;
    }

    for (let course = 0; course < numCourses; course++) {
        visited[course] = State.NOT_VISITED;
    }

    for (let i = 0; i < numCourses; i++) {
        if (visited[i] === State.NOT_VISITED) {
            if (hasCircularDependency(i)) {
                return false;
            }
        }
    }

    return true;
}

function buildAdjacencyList(
    numCourses: number,
    prerequisites: number[][]
): Record<number, number[]> {
    const adjacencyList: Record<number, number[]> = {};

    for (let i = 0; i < numCourses; i++) {
        adjacencyList[i] = [];
    }

    for (const [a, b] of prerequisites) {
        adjacencyList[a].push(b);
    }

    return adjacencyList;
}
