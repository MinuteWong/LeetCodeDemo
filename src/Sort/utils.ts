export const exch = (arr: number[], i: number, j: number) => {
  const cache = arr[i];
  arr[i] = arr[j];
  arr[j] = cache;
};
