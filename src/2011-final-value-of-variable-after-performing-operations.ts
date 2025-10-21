/**
 * ### [2011. Final Value of Variable After Performing Operations](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/)
 *
 * There is a programming language with only four operations and one variable `X`:
 * - `++X` and `X++` increments the value of the variable `X` by `1`.
 * - `--X` and `X--` decrements the value of the variable `X` by `1`.
 *
 * Initially, the value of X is 0.
 *
 * Given an array of strings `operations` containing a list of operations, return
 * the final value of `X` after performing all the operations.
 *
 * #### Constraints
 * - `1 <= operations.length <= 100`
 * - operations[i] will be either "++X", "X++", "--X", or "X--"
 *
 * #### Complexity Analysis
 * - Time Complexity: `O(n)` because we need to iterate the operations array entirely.
 * - Space Complexity: `O(1)` because we are using only a variable to calculate the
 * final result.
 */
function finalValueAfterOperations(operations: string[]): number {
    let x = 0;

    for (const operation of operations) {
        if (operation === "X++" || operation === "++X") {
            x++;
        } else {
            x--;
        }
    }

    return x;
}
