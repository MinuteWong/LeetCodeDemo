function lsd(strArr: string[], w: number) {
  const length = lsd.length;
  const aux: string[] = [];
  const R = 256;

  for (let i = w - 1; i >= 0; i--) {
    const count = new Array(R + 1).fill(0);

    for (let j = 0; j < strArr.length; j++) {
      count[strArr[j].charCodeAt(i) + 1]++;
    }

    for (let j = 0; j < R; j++) {
      count[j + 1] += count[j];
    }

    for (let j = 0; j < strArr.length; j++) {
      aux[count[strArr[j].charCodeAt(i)]++] = strArr[j];
    }

    for (let j = 0; j < strArr.length; j++) {
      strArr[j] = aux[j];
    }
  }
}
