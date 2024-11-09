import { TrieNode } from "../data-structures";

/**
 * @see https://leetcode.com/problems/design-add-and-search-words-data-structure/description/
 *
 * Submission: @see https://leetcode.com/problems/design-add-and-search-words-data-structure/submissions/918310605/
 *
 * Design a data structure that supports adding new words and finding if a string matches any previously added string.
 *
 * Implement the `WordDictionary` class:
 * - `WordDictionary()`: Initializes the object.
 * - `void addWord(word)`: Adds `word` to the data structure, it can be matched later.
 * - `bool search(word)`: Returns `true` if there is any string in the data structure that matches word or `false` otherwise.
 * `word` may contain dots `'.'` where dots can be matched with any letter.
 *
 * Constraints:
 * - 1 <= word.length <= 25
 * - `word` in `addWord` consists of lowercase English letters.
 * - `word` in `search` consist of `'.'` or lowercase English letters.
 * - There will be at most 3 dots in word for search queries.
 * - At most 10^4 calls will be made to `addWord` and `search`.
 */
export class WordDictionary {
  private static readonly ANY_MATCH = ".";
  private readonly head: TrieNode;

  public constructor() {
    this.head = new TrieNode("");
  }

  public addWord(word: string): void {
    if (!word) {
      return;
    }

    let currentNode = this.head;

    for (let character of word) {
      if (!currentNode.children.has(character)) {
        currentNode.children.set(character, new TrieNode(character));
      }

      currentNode = currentNode.children.get(character) as TrieNode;
    }

    currentNode.isTerminal = true;
  }

  public search(word: string): boolean {
    return this.match(word, 0, this.head);
  }

  private match(word: string, index: number, node: TrieNode): boolean {
    if (index === word.length) {
      return node.isTerminal;
    }

    let character = word[index];

    if (character === WordDictionary.ANY_MATCH) {
      for (let childNode of node.children.values()) {
        if (this.match(word, index + 1, childNode)) {
          return true;
        }
      }
    } else if (node.children.has(character)) {
      return this.match(
        word,
        index + 1,
        node.children.get(character) as TrieNode
      );
    }

    return false;
  }
}
