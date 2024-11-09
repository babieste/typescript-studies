export class TrieNode {
  public readonly children: Map<string, TrieNode> = new Map();

  public constructor(
    public readonly char: string,
    public isTerminal: boolean = false
  ) {}
}
