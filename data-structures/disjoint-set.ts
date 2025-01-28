export class DisjointSet {
  private readonly parent: number[];
  private readonly rank: number[];

  public constructor(size: number) {
    this.parent = new Array(size);
    this.rank = new Array(size).fill(0);

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  public find(i: number): number {
    if (this.parent[i] === i) {
      return i;
    }

    this.parent[i] = this.find(this.parent[i]);
    return this.parent[i];
  }

  public union(i: number, j: number): void {
    const rootI = this.find(i);
    const rootJ = this.find(j);

    if (rootI === rootJ) {
      return;
    }

    if (this.rank[rootI] < this.rank[rootJ]) {
      this.parent[rootI] = rootJ;
    } else if (this.rank[rootI] > this.rank[rootJ]) {
      this.parent[rootJ] = rootI;
    } else {
      this.parent[rootJ] = rootI;
      this.rank[rootI]++;
    }
  }

  public areConnected(i: number, j: number): boolean {
    return this.find(i) === this.find(j);
  }
}
