var search = function(nums: number[], target: number) {
  let lo = 0;
  let hi = nums.length - 1;
  while (hi >= lo) {
    const middle = lo + Math.floor((hi - lo) / 2);
    if (target > nums[0]) {
      if (target > nums[middle]) {
        if (nums[middle] > nums[0]) {
          lo = middle + 1;
        } else {
          hi = middle - 1;
        }
      } else if (target < nums[middle]) {
        hi = middle - 1;
      } else {
        return middle;
      }
    } else if (target < nums[0]) {
      if (target > nums[middle]) {
        lo = middle + 1;
      } else if (target < nums[middle]) {
        if (nums[middle] > nums[0]) {
          lo = middle + 1;
        } else {
          hi = middle - 1;
        }
      } else {
        return middle;
      }
    } else {
      return 0;
    }
  }
  return -1;
};

console.log(search([6, 7, 8, 9, 1, 2, 3, 4, 5], 2));
