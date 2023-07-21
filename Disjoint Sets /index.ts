class DisjointSet {
    parent: { [key: number]: number };
    rank: { [key: number]: number };
  
    constructor() {
      this.parent = {};
      this.rank = {};
    }
  
    makeSet(x: number) {
      if (!this.parent[x]) {
        this.parent[x] = x;
        this.rank[x] = 0;
      }
    }
  
    find(x: number): number {
      if (this.parent[x] !== x) {
        this.parent[x] = this.find(this.parent[x]); // Path compression
      }
      return this.parent[x];
    }
  
    union(x: number, y: number) {
      const rootX = this.find(x);
      const rootY = this.find(y);
  
      if (rootX !== rootY) {
        if (this.rank[rootX] > this.rank[rootY]) {
          this.parent[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
          this.parent[rootX] = rootY;
        } else {
          this.parent[rootY] = rootX;
          this.rank[rootX]++;
        }
      }
    }
  }
  
  const ds = new DisjointSet();
  
  ds.makeSet(1);
  ds.makeSet(2);
  ds.makeSet(3);
  ds.makeSet(4);
  
  console.log(ds.find(1)); // Output: 1
  console.log(ds.find(2)); // Output: 2
  
  ds.union(1, 2);
  console.log(ds.find(1)); // Output: 1
  console.log(ds.find(2)); // Output: 1
  