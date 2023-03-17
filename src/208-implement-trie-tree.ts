import { TrieNode } from "../schema";

class Trie {
  private head = new TrieNode("");

  insert(word: string): void {
    if (!word) {
      return;
    }

    let currentNode = this.head;

    [...word].forEach((char) => {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode(char));
      }

      currentNode = currentNode.children.get(char) as TrieNode;
    });

    currentNode.isTerminal = true;
  }

  search(word: string): boolean {
    if (!word) {
      return false;
    }

    let currentNode = this.head;
    for (let char of word) {
      if (!currentNode.children.has(char)) {
        return false;
      }

      currentNode = currentNode.children.get(char) as TrieNode;
    }

    return currentNode.isTerminal;
  }

  startsWith(prefix: string): boolean {
    if (!prefix) {
      return false;
    }

    let currentNode = this.head;

    for (let char of prefix) {
      if (!currentNode.children.has(char)) {
        return false;
      }

      currentNode = currentNode.children.get(char) as TrieNode;
    }

    // If we got this far, means that the prefix is in the tree
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
