const exch = (arr: string[], i: number, j: number) => {
  const cache = arr[i];
  arr[i] = arr[j];
  arr[j] = cache;
};

class Quick3string {
  private static charAt(str: string, d: number) {
    if (d < str.length) return str.charCodeAt(d);
    else return -1;
  }

  public static sort(str: string[]) {
    Quick3string._sort(str, 0, str.length, 0);
  }

  private static _sort(a: string[], lo: number, hi: number, d: number) {
    if (lo >= hi) return;
    let lt = lo,
      gt = hi,
      i = lo + 1;

    const v = this.charAt(a[lo], d);
    while (i < gt) {
      const t = this.charAt(a[i], d);
      if (t < v) exch(a, lt++, i++);
      else if (t > v) exch(a, i, gt--);
      else i++;
    }
    this._sort(a, lo, lt - 1, d);
    if (v >= 0) this._sort(a, lt, gt, d + 1);
    this._sort(a, gt + 1, hi, d);
  }
}
