const BinarySearch = (nums: number[], num: number) => {
  let lo = 0;
  let hi = nums.length - 1;
  while (hi >= lo) {
    const middle = lo + Math.floor((hi - lo) / 2);
    if (num > nums[middle]) {
      lo = middle + 1;
    } else if (num < nums[middle]) {
      hi = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

export default BinarySearch;
