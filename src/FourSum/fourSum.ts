const fourSum = (nums: number[], target: number): number[][] | number => {
  if (nums.length < 4) return -1;
  const sortNums = nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < sortNums.length - 4; i++) {
    if (i !== 0 && sortNums[i - 1] === sortNums[i]) continue;
    console.log(1);
    for (let j = i + 1; j < sortNums.length - 3; j++) {
      if (j !== 1 && sortNums[j - 1] === sortNums[j]) continue;
      let right = sortNums.length - 1;
      let left = j + 1;
      while (right > left) {
        const sum =
          sortNums[right] + sortNums[left] + sortNums[i] + sortNums[j];
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          res.push([sortNums[i], sortNums[j], sortNums[left], sortNums[right]]);
          left++;
          while (sortNums[left] === sortNums[left - 1]) {
            left++;
          }
        }
      }
    }
  }
  return res;
};

console.log(fourSum([0, 0, 0, 0], 0));

export default fourSum;
