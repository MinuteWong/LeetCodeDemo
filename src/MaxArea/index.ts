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

export default maxArea;