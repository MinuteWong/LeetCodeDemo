const maxArea = function(height: number[]) {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const areaHeight = height[j] > height[i] ? height[i] : height[j];
      const area = areaHeight * (j - i);
      if (area > maxArea) maxArea = area;
    }
  }
  return maxArea;
};

const towPointMaxArea = function(height: number[]) {
  if (height.length <= 1) return -1;
  let i = 0;
  let j = height.length - 1;
  let area = 0;
  while (j > i) {
    const areaHeight = Math.min(height[j], height[i]);
    area = Math.max(area, areaHeight * (j - i));
    if (height[j] > height[i]) i++;
    else j--;
  }
  return area;
};

export { maxArea, towPointMaxArea };
