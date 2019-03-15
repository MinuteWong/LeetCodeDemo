const threeSumClosest = (nums: number[], target: number) => {
  if (nums.length < 3) return -1;
  const sortNums = nums.sort((a, b) => a - b);
  const length = sortNums.length;
  let sum = Math.abs(sortNums[0] + sortNums[1] + sortNums[length - 1]);
  const res = [sortNums[0], sortNums[1], sortNums[length - 1]];
  for (let i = 1; i < length; i++) {
    const lo = i + 1;
    const hi = length - 1;
    while (hi > lo) {
      const sumNow = Math.abs(sortNums[i] + sortNums[lo] + sortNums[hi]);
      if (sum > sumNow) {
        sum = sumNow;
      }
    }
  }
  return res;
};