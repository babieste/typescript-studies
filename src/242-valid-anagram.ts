/**
 * ### [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)
 *
 * Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.
 *
 * #### Complexity Analysis
 * - Time Complexity: `O(m)`, where `m` is the length of the strings being compared.
 * - Space Complexity: `O(1)` since the frequency map will have at most 26 entries
 * for lowercase English letters.
 */
export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const frequencyMap = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        frequencyMap.set(s[i], (frequencyMap.get(s[i]) ?? 0) + 1);
        frequencyMap.set(t[i], (frequencyMap.get(t[i]) ?? 0) - 1);
    }

    for (const count of frequencyMap.values()) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
}
