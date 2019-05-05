import { exch } from './utils';
const quickSort = (arr: number[], lo = 0, he = arr.length - 1): number[] => {
  if (lo >= he) return;
  const middle = partition(arr, lo, he);
  quickSort(arr, lo, middle - 1);
  quickSort(arr, middle + 1, he);
  return arr;
};

const partition = (arr: number[], lo: number, he: number) => {
  const base = arr[lo];
  let i = lo;
  let j = he + 1;
  while (true) {
    while (arr[++i] < base) if (i === he) break;
    while (base < arr[--j]) continue;
    if (i >= j) break;
    exch(arr, i, j);
  }
  exch(arr, lo, j);
  return j;
};

const quickSort3 = (arr: number[], lo = 0, he = arr.length - 1) => {
  if (he <= lo) return;
  let lt = lo,
    i = lo + 1,
    gt = he,
    base = arr[lo];
  while (i <= gt) {
    if (base > arr[i]) exch(arr, i++, lt++);
    else if (base < arr[i]) exch(arr, i, gt--);
    else i++;
  }
  quickSort3(arr, lo, lt - 1);
  quickSort3(arr, gt + 1, he);
};

const a = [10, 5, 23, 3, 346, 8, 23, 56, 34, 4, 0, 4];

quickSort3(a);
console.log(a);
