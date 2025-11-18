export class DisjointSet {
    private readonly parent: Record<number, number> = {};
    private readonly rank: Record<number, number> = {};

    public constructor(size: number) {
        for (let i = 0; i < size; i++) {
            this.parent[i] = i;
            this.rank[i] = 0;
        }
    }

    public find(i: number): number {
        if (this.parent[i] === i) {
            return i;
        }

        this.parent[i] = this.find(this.parent[i]);
        return this.parent[i];
    }

    public union(u: number, v: number): void {
        this.link(this.find(u), this.find(v));
    }

    private link(u: number, v: number): void {
        if (u === v) {
            return;
        }

        if (this.rank[u] > this.rank[v]) {
            this.parent[v] = u;
        } else {
            this.parent[u] = v;

            if (this.rank[u] === this.rank[v]) {
                this.rank[v]++;
            }
        }
    }

    public areConnected(i: number, j: number): boolean {
        return this.find(i) === this.find(j);
    }
}
