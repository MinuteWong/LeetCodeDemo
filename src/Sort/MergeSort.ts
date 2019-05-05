const mergeSort = (arr: number[], lo = 0, hi = arr.length - 1) => {
  if (lo >= hi) return;
  const middle = Math.floor(lo + (hi - lo) / 2);
  mergeSort(arr, lo, middle);
  mergeSort(arr, middle + 1, hi);
  merge(arr, lo, middle, hi);
};

const mergeSort2 = (arr: number[], lo = 0, hi = arr.length - 1) => {
  for (let k = 0; k < arr.length; k = k + k) {}
};

const merge = (arr: number[], lo: number, mid: number, hi: number) => {
  let i = lo,
    j = mid + 1;
  const cache = new Array(hi).fill(undefined);
  for (let k = lo; k <= hi; k++) cache[k] = arr[k];
  for (let k = lo; k <= hi; k++) {
    if (i > mid) arr[k] = cache[j++];
    else if (j > hi) arr[k] = cache[i++];
    else if (cache[i] < cache[j]) arr[k] = cache[i++];
    else arr[k] = cache[j++];
  }
};
