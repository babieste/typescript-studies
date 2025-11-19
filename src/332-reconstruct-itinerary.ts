/**
 * ### [332. Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)
 *
 * You are given a list of airline `tickets` where `tickets[i] = [from, to]` represent the
 * departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.
 *
 * All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK".
 * If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical
 * order when read as a single string. For example, the itinerary `["JFK", "LGA"]` has a smaller lexical
 * order than `["JFK", "LGB"]`.
 *
 * You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.
 *
 * #### Constraints
 * - `1 <= tickets.length <= 300`
 * - `tickets[i].length == 2`
 * - `from.length == 3`
 * - `to.length == 3`
 * - `from` and `to` consist of uppercase English letters
 * - `from != to`
 *
 * #### Reasoning
 * The problem description states that **all tickets form at least one valid itinerary** and **all tickets must
 * be used once and only once**. From the first statement we can assume that, when building an adjacency list,
 * that there are no loops. From the second statement, we can assume that we need to traverse **all** edges of this
 * graph **only once**, which indicates that we need to find an **eulerian path**.
 *
 * An eulerian path is a path that visits every edge exactly once.
 *
 * To do so, we must use [Hierholzer's Algorithm](https://cp-algorithms.com/graph/euler_path.html).
 *
 */
export function findItineraryIterative(tickets: string[][]): string[] {
    const graph: Record<string, string[]> = {};
    const itinerary: string[] = [];
    const stack: string[] = ["JFK"];

    for (const [u, v] of tickets) {
        graph[u] ??= [];
        graph[u].push(v);

        // Sort lexicographically by default.
        graph[u].sort();
    }

    while (stack.length) {
        const departureAirport = stack[stack.length - 1];

        if (graph[departureAirport] && graph[departureAirport].length > 0) {
            const smallestLexicalAirportName = graph[departureAirport].shift()!;
            stack.push(smallestLexicalAirportName);
        } else {
            const departureAirport = stack.pop()!;
            itinerary.unshift(departureAirport);
        }
    }

    return itinerary;
}

export function findItineraryRecursive(tickets: string[][]): string[] {
    const graph: Record<string, string[]> = {};
    const itinerary: string[] = [];

    function reconstruct(departureAirport: string) {
        while (graph[departureAirport] && graph[departureAirport].length > 0) {
            const smallestLexicalAirportName = graph[departureAirport].shift()!;
            reconstruct(smallestLexicalAirportName);
        }

        itinerary.unshift(departureAirport);
    }

    for (const [u, v] of tickets) {
        graph[u] ??= [];
        graph[u].push(v);

        // Sort lexicographically by default.
        graph[u].sort();
    }

    reconstruct("JFK");
    return itinerary;
}
