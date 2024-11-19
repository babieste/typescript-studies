function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const adjacencyMap = buildAdjacencyMap(numCourses, prerequisites);
  const courseSchedule: number[] = [];
  const visited: number[] = Array(numCourses + 1).fill(0);

  function depthFirstSearch(course: number) {
    if (visited[course] !== 2) {
      // Cycle detected.
      if (visited[course] === 1) {
        throw new Error();
      }

      visited[course] = 1;

      for (const prerequisite of adjacencyMap.get(course) ?? []) {
        depthFirstSearch(prerequisite);
      }

      visited[course] = 2;
      courseSchedule.push(course);
    }
  }

  try {
    for (let i = 0; i < numCourses; i++) {
      depthFirstSearch(i);
    }

    return courseSchedule;
  } catch {
    return [];
  }
}

function buildAdjacencyMap(
  n: number,
  edges: number[][]
): Map<number, number[]> {
  const adjacencyMap = new Map<number, number[]>();

  for (const [u, v] of edges) {
    if (adjacencyMap.has(u)) {
      const adjacencyList: number[] = adjacencyMap.get(u) as number[];
      adjacencyList.push(v);
      adjacencyMap.set(u, adjacencyList);
    } else {
      adjacencyMap.set(u, [v]);
    }
  }

  return adjacencyMap;
}
