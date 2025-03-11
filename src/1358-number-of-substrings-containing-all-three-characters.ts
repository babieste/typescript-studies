/**
 * ### [1358. Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/)
 *
 * Given a string `s` consisting only of characters a, b and c.
 *
 * Return the number of substrings containing at least one occurrence of all these characters a, b and c.
 */
function numberOfSubstrings(s: string): number {
  const frequencyMap: Record<string, number> = {
    a: 0,
    b: 0,
    c: 0,
  };
  let answer = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    const char = s[right];
    frequencyMap[char] += 1;

    while (hasAllChars(frequencyMap)) {
      const leftmostChar = s[left];
      answer += s.length - right;
      frequencyMap[leftmostChar] -= 1;
      left++;
    }

    right++;
  }

  function hasAllChars(frequencyMap: Record<string, number>): boolean {
    return (
      frequencyMap["a"] > 0 && frequencyMap["b"] > 0 && frequencyMap["c"] > 0
    );
  }

  return answer;
}
