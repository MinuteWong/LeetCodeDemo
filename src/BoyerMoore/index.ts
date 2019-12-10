class BoyerMoore {
  right: number[];
  patter: string;
  constructor(patter: string) {
    this.patter = patter;
    for (let i = 0; i < patter.length; i++) {
      this.right[patter.charCodeAt(i)] = i;
    }
  }

  search(str: string) {
    const N = str.length;
    const M = this.patter.length;
    let skip = 0;
    for (let i = 0; i <= N - M; i += skip) {
      skip = 0;
      for (let j = 0; j < M; j++) {
        if (str.charAt(i + j) !== this.patter.charAt(i)) {
          skip = j - (this.right[this.patter.charCodeAt(i)] || -1);
          if (skip < 0) skip = 1;
        }
      }
      if (skip = 0) return i;
    }
    return M;
  }
}