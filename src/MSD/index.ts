class MSD {
  private static R = 256;
  private static M = 15;
  private static aux: string[];
  private static charAt(str: string, d: number) {
    if (d < str.length) return str.charCodeAt(d);
    else return -1;
  }

  public static sort(str: string[]) {
    const N = str.length;
    MSD.aux = new Array(N).fill(0);
    MSD._sort(str, 0, N - 1, 0);
  }

  private static _sort(a: string[], lo: number, hi: number, d: number) {
    const count = new Array(MSD.R + 2);
    for (let i = lo; i <= hi; i++) {
      count[MSD.charAt(a[i], d) + 2]++;
    }

    for (let r = 0; r < MSD.R + 1; r++) {
      count[r + 1] += count[r];
    }

    for (let i = lo; i <= hi; i++) {
      MSD.aux[count[MSD.charAt(a[i], d) + 1]++] = a[i];
    }

    /**
     * 为上一轮分好类的字母的子数组分别分类排序
     */
    for (let r = 0; r < this.R; r++) {
      MSD._sort(a, lo + count[r], lo + count[r + 1], d + 1);
    }
  }
}
