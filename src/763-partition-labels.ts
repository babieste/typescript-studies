/**
 * ### [763. Partition Labels](https://leetcode.com/problems/partition-labels/description)
 *
 * You are given a string `s`. We want to partition the string into as many parts as
 * possible so that each letter appears in at most one part. For example, the string
 * "ababcc" can be partitioned into `["abab", "cc"]`, but partitions such as
 * `["aba", "bcc"]` or `["ab", "ab", "cc"]` are invalid.
 *
 * Note that the partition is done so that after concatenating all the parts in order,
 * the resultant string should be `s`.
 *
 * Return a list of integers representing the size of these parts.
 *
 * #### Complexity Analysis
 *
 * - Time complexity: we iterate through the entire string twice, so the time complexity
 * is `O(s.length)` or `O(N)`.
 *
 * - Space complexity: we have an auxiliary Map structure that in the worst case will
 * contain 26 entries, given that each one i for each letter of the English alphabet.
 * Thus, can we consider it's space complexity to be `O(1)`?
 * Next, we have an `answer` array. In the worst case it will have length 26, one for
 * each letter in the alphabet. Thus overall space complexity is `O(1)`.
 *
 */
function partitionLabelsWithSlidingWindow(s: string): number[] {
  const charLastOcurrenceMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charLastOcurrenceMap.set(char, i);
  }

  const answer: number[] = [];
  let start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, charLastOcurrenceMap.get(s[i])!);

    if (i === end) {
      answer.push(end - start + 1);
      start = i + 1;
    }
  }

  return answer;
}
