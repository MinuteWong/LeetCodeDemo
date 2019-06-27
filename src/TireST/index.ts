class Nodes {
  public val: number;
  public next: Nodes[] = [];
}

class TireST {
  private R = 256;
  private root: Nodes;

  get(key: string) {
    this._get(this.root, key, 0);
  }

  _get(node: Nodes, key: string, d: number): Nodes {
    if (!node) return undefined;
    if (d === key.length) return node;
    const code = key.charCodeAt(d);
    return this._get(node.next[code], key, d + 1);
  }

  put(key: string, val: number) {
    this._put(this.root, key, val, 0);
  }

  _put(node: Nodes, key: string, val: number, d: number) {
    if (!node) node = new Nodes();
    if (key.length === d) {
      node.val = val;
      return node;
    }
    const charCoe = key.charCodeAt(d);
    node.next[charCoe] = this._put(node.next[charCoe], key, val, d + 1);
    return node;
  }
}
