/**
 *
 * [1718. Construct the Lexicographically Largest Valid Sequence](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/description/)
 *
 * Given an integer `n`, find a sequence that satisfies all of the following:
 * - The integer 1 occurs once in the sequence;
 * - Each integer between 2 and `n` occurs twice in the sequence;
 * - For every integer `i` between 2 and `n`, the distance between the two occurrences of `i` is exactly `i`.
 *
 * The distance between two numbers on the sequence, `a[i]` and `a[j]`, is the absolute difference of their indices, `|j - i|`.
 *
 * Return the lexicographically largest sequence. It is guaranteed that under the given constraints, there is always a solution.
 *
 * A sequence a `is` lexicographically larger than a sequence `b` (of the same length) if in the first position where `a` and `b`
 * differ, sequence `a` has a number greater than the corresponding number in `b`. For example, `[0, 1, 9, 0]` is lexicographically
 * larger than `[0, 1, 5, 6]` because the first position they differ is at the third number, and 9 is greater than 5.
 *
 */
export function constructDistancedSequenceWithBacktracking(
  n: number
): number[] {
  // if n = x, sequence length is ((n - 1) * 2) + 1
  const len = (n - 1) * 2 + 1;
  const sequence = Array(len).fill(-1);
  const usedValues = Array(n + 1).fill(false);

  function findValidSequence(currentPosition: number) {
    // We managed to fill a sequence of ((n - 1) * 2) + 1 values
    if (currentPosition === len) {
      return true;
    }

    // If `currentPosition` is already defined, move to the next position
    if (sequence[currentPosition] !== -1) {
      return findValidSequence(currentPosition + 1);
    }

    // Given a position `currentPosition` in the sequence, we need to fill
    // all possible candidades for this position. We start from n to
    // find the largest lexicographically value
    for (let i = n; i > 0; i--) {
      // Already used the occurrences limit for this value
      if (usedValues[i]) {
        continue;
      }

      if (i === 1) {
        sequence[currentPosition] = i;
        usedValues[i] = true;

        if (findValidSequence(currentPosition + 1)) {
          return true;
        }

        // Backtrack
        sequence[currentPosition] = -1;
        usedValues[i] = false;
      } else {
        if (currentPosition + i < len && sequence[currentPosition + i] === -1) {
          sequence[currentPosition] = i;
          sequence[currentPosition + i] = i;
          usedValues[i] = true;

          if (findValidSequence(currentPosition + 1)) {
            return true;
          }

          // Backtrack
          sequence[currentPosition] = -1;
          sequence[currentPosition + i] = -1;
          usedValues[i] = false;
        }
      }
    }

    // We didn't manage to find a valid sequence
    return false;
  }

  findValidSequence(0);
  return sequence;
}
