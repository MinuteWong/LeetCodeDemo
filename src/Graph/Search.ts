import Graph from ".";

class Search {
  edges: number[];
  constructor(public g: Graph, public s: number) {
    this.edges = this.g.adj[this.s];
  }

  market(v: number) {
    return this.edges.includes(v);
  }

  conut() {
    return this.edges.length;
  }
}
