const threeSumClosest = (nums: number[], target: number) => {
  if (nums.length < 3) return -1;
  const sortNums = nums.sort((a, b) => a - b);
  const length = sortNums.length;
  let sum;
  for (let i = 0; i < length; i++) {
    let lo = i + 1;
    let hi = length - 1;
    while (hi > lo) {
      const sumNow = sortNums[i] + sortNums[lo] + sortNums[hi];
      if (
        sum === undefined ||
        Math.abs(sum - target) > Math.abs(sumNow - target)
      ) {
        sum = sumNow;
      }
      if (sumNow - target > 0) hi--;
      else if (sumNow - target < 0) lo++;
      else return sumNow;
    }
  }
  return sum;
};

export default threeSumClosest;
