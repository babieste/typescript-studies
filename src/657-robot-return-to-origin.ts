/**
 * ### [657. Robot Return to Origin](https://leetcode.com/problems/robot-return-to-origin/description/)
 *
 * There is a robot starting at the position `(0, 0)`, the origin, on a 2D plane.
 * Given a sequence of its moves, judge if this robot ends up at `(0, 0)` after
 * it completes its moves.
 *
 * You are given a string `moves` that represents the move sequence of the robot
 * where `moves[i]` represents its `ith` move. Valid moves are `'R'` (right),
 * `'L'` (left), `'U'` (up), and `'D'` (down).
 *
 * Return `true` if the robot returns to the origin after it finishes all of its
 * moves, or `false` otherwise.
 *
 * #### Reasoning
 *
 * Verifying if the robot returned to the origin means verifying if the delta of
 * it's moves is zero. This can be verifyied by having two counter variables, one
 * for each axis of the 2D plane, and adding/subtracting to those counters whenever
 * the robot moves.
 *
 * #### Complexity Analysis
 *
 * - Time Complexity: `O(N)` where `N` is the length of the string `moves`,
 * since we need to consult each move once.
 * - Space Complexity `O(1)` since we are using two auxiliary variables to
 * calculate the movement delta over each move.
 *
 */
function judgeCircle(moves: string): boolean {
    let x = 0;
    let y = 0;

    for (const move of moves) {
        switch (move) {
            case "L":
                y--;
                break;
            case "R":
                y++;
                break;
            case "U":
                x++;
                break;
            default:
                x--;
        }
    }

    return x === 0 && y === 0;
}
