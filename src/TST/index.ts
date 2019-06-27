class Node2 {
  public val: number;
  public left: Node2;
  public middle: Node2;
  public right: Node2;
  constructor(public char: string) {}
}

class TST {
  root: Node2;

  get(key: string) {
    return this._get(this.root, key, 0);
  }

  _get(node: Node2, key: string, d: number): Node2 {
    if (!node) return undefined;
    const char = key.charAt(d);
    if (char > node.char) return this._get(node.right, key, d);
    else if (char < node.char) return this._get(node.left, key, d);
    else if (d < key.length - 1) return this._get(node.middle, key, d + 1);
    else return node;
  }

  put(key: string, val: number) {
    this._put(this.root, key, val, 0);
  }

  _put(node: Node2, key: string, val: number, d: number): Node2 {
    const char = key.charAt(d);
    if (!node) node = new Node2(char);
    if (char > node.char) node.right = this._put(node.right, key, val, d);
    else if (char < node.char) node.left = this._put(node.left, key, val, d);
    else if (d < key.length - 1)
      node.middle = this._put(node.middle, key, val, d + 1);
    else node.val = val;
    return node;
  }
}
