export class TrieNode {
  public constructor(
    public readonly char: string,
    public isTerminal: boolean = false,
    public readonly children: Map<string, TrieNode> = new Map()
  ) {}
}
