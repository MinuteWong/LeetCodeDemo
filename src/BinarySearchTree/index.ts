interface Comparable<Key> {
  compareTo(key: Key): number;
}

class Point<Key extends Comparable<Key>> {
  constructor(
    public key: Key,
    public value: any,
    public N: number,
    public left: Point<Key> | null = null,
    public right: Point<Key> | null = null
  ) {}
}

class BinarySearchTree<Key extends Comparable<Key>> {
  private root: Point<Key> | null;
  min() {
    return this._min(this.root).key;
  }

  deleteMin(point: Point<Key>) {
    return this._deleteMin(point);
  }

  _deleteMin(point?: Point<Key>) {
    if (!point.left) return null;
    point.left = this._deleteMin(point.left);
    point.N = this.size(point.left) + this.size(point.right) + 1;
    return point;
  }

  delete(key: Key) {
    this._delete(key, this.root);
  }

  _delete(key: Key, point?: Point<Key>) {
    if (!point) return null;
    if (key.compareTo(point.key) > 0)
      point.right = this._delete(key, point.right);
    else if (key.compareTo(point.key) < 0)
      point.left = this._delete(key, point.left);
    else {
      if (!point.right) return point.left;
      if (!point.left) return point.right;
      const cachePoint = point;
      point = this._min(point);
      point.left = cachePoint.left;
      point.right = this._deleteMin(cachePoint);
    }
    point.N = this.size(point.left) + this.size(point.right) + 1;
    return point;
  }

  private _min(x: Point<Key>): Point<Key> {
    if (x.right) return this._min(x.right);
    return x;
  }

  floor(key: Key) {
    const x = this._floor(this.root, key);
    if (!x) return null;
    return x.key;
  }

  private _floor(point: Point<Key>, key: Key): Point<Key> {
    if (!point) return null;
    const cmp = key.compareTo(point.key);
    if (cmp === 0) return point;
    if (cmp < 0) return this._floor(point.left, key);
    const t = this._floor(point.right, key);
    if (!t) return t;
    return point;
  }

  size(point?: Point<Key>) {
    if (!point) return 0;
    return point.N;
  }

  get(key: Key) {
    return this._get(key, this.root);
  }

  private _get(key: Key, point?: Point<Key>): Point<Key> {
    if (!point) return null;
    if (key.compareTo(point.key) > 0) return this._get(key, point.right);
    else if (key.compareTo(point.key) < 0) return this._get(key, point.left);
    else return point;
  }

  put(key: Key, value: any) {
    this.root = this._put(key, value, this.root);
    console.log('eee', this.root);
  }

  private _put(key: Key, value: any, point?: Point<Key>) {
    if (!point) return new Point(key, value, 1);
    if (key.compareTo(point.key) > 0) {
      point.right = this._put(key, value, point.right);
      console.log('right', point.right);
    } else if (key.compareTo(point.key) < 0)
      point.left = this._put(key, value, point.left);
    else point.value = value;
    point.N = this.size(point.left) + this.size(point.right) + 1;
    return point;
  }
}

class Comparables {
  constructor(public value: number) {}
  compareTo(comparables: Comparables) {
    const { value } = comparables;
    if (this.value > value) return 1;
    else if (this.value < value) return -1;
    return 0;
  }
}

const a = new BinarySearchTree();
