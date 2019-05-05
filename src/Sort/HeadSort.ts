import { exch } from './utils';

const sink = (queue: number[], k: number, N: number) => {
  while (2 * k <= N) {
    let j = 2 * k;
    if (j < N && queue[j] < queue[j + 1]) j++;
    if (queue[k] > queue[j]) break;
    exch(queue, k, j);
    k = j;
  }
};

const headSort = (arr: number[]) => {
  let N = arr.length - 1;
  for (let k = Math.floor(N / 2); k >= 1; k--) {
    sink(arr, k, N);
  }

  while (N > 1) {
    exch(arr, 1, N--);
    sink(arr, 1, N);
  }
};

const a = [undefined, 10, 5, 23, 3, 346, 8, 23, 56, 34, 4, 0, 4, 19];

headSort(a);
console.log(a);
