const threeSum = (nums: number[]): number[][] | number => {
  if (nums.length < 3) return -1;
  const sortNums = nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < sortNums.length - 2; i++) {
    if (i !== 0 && sortNums[i - 1] === sortNums[i]) continue;
    let right = sortNums.length - 1;
    let left = i + 1;

    while (right > left) {
      const sum = sortNums[right] + sortNums[left] + sortNums[i];
      if (sum < 0) {
        left++;
        while (sortNums[left] === sortNums[left + 1]) {
          left++;
        }
      } else if (sum > 0) {
        right--;
        while (sortNums[right] === sortNums[right - 1]) {
          right--;
        }
      } else {
        res.push([sortNums[i], sortNums[left], sortNums[right]]);
        left++;
        while (sortNums[left] === sortNums[left - 1]) {
          left++;
        }
      }
    }
  }
  return res;
};

export default threeSum;
