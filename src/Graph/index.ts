export default class Graph {
  public V: number;
  public E: number = 0;
  public adj: number[][];

  constructor(v: number) {
    this.V = v;
    this.adj = new Array(v);
  }

  addEdge(s: number, e: number) {
    if (!this.adj[s]) this.adj[s] = [];
    if (!this.adj[e]) this.adj[e] = [];
    if (this.adj[s].includes(e)) return;
    this.adj[s].push(e);
    this.adj[e].push(s);
    this.E++;
  }

  randomGraph(fre: number): void {
    if (0 < fre--) {
      const s = Math.floor(Math.random() * this.V);
      const e = Math.floor(Math.random() * this.V);
      this.addEdge(s, e);
      return this.randomGraph(fre);
    }
  }
}

const graph = new Graph(5);
graph.randomGraph(10);
console.log(graph);
