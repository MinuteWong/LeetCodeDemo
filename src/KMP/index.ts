class KMP {
  patter: string;
  dfa: {
    [key: string]: number[]
  };

  constructor(pat: string) {
    this.patter = pat;
    const M = pat.length;
    const R = 256;
    this.dfa[pat.charCodeAt(0)][0] = 1;
    for (let X = 0, j = 1; j < M; j++) {
      for (let c = 0; c < R; c++) {
        this.dfa[c][j] = this.dfa[c][X];
      }
      this.dfa[pat.charCodeAt(j)][j] = j + 1;
      X = this.dfa[pat.charCodeAt(j)][X];
    }
  }

  search(str: string) {
    let i, j;
    const N = str.length, M = this.patter.length;
    for (i = 0, j = 0; i < N && j < M; i++) {
      j = this.dfa[str.charCodeAt(i)][j];
    }
    if (j === M) return i - M;
    else return N;
  }
}