export const search = (str: string, pattern: string) => {
  const M = pattern.length;
  const N = str.length;

  for (let i = 0; i < N - M; i++) {
    let j;
    for (j = 0; j < M; j++) {
      if (pattern[j] !== str[i + j]) break;
    }
    if (j === M) return i;
    return N;
  }
};

export const search2 = (str: string, pattern: string) => {
  const M = pattern.length;
  const N = str.length;
  let i, j;

  for (i = 0, j = 0; i < N && j < M; i++) {
    if (str.charAt(i) === pattern.charAt(j)) j++;
    else {
      i -= j;
      j = 0;
    }
  }

  if (j === M) return i - M;
  else return N;
};

export class KMP {
  private R = 256;
  private dfa: number[][];
  constructor(private pat: string) {
    const M = pat.length;
    this.dfa = new Array(this.R).fill(new Array(M).fill(0));
    this.dfa[pat.charCodeAt(0)][0] = 1;
    for (let j = 1, x = 0; j < M; j++) {
      for (let c = 0; c < this.R; c++) {
        this.dfa[pat.charCodeAt(c)][j] = this.dfa[pat.charCodeAt(c)][x];
      }
      this.dfa[pat.charCodeAt(j)][j] = j + 1;
      x = this.dfa[pat.charCodeAt(j)][x];
    }
  }

  search(txt: string) {
    const N = txt.length;
    const M = this.pat.length;
    let i, j;
    for (i = 0, j = 0; i < N && j < M; i++) {
      j = this.dfa[txt.charCodeAt(i)][j];
    }
    if (j === M) return i - M;
    else return N;
  }
}
