import { maxArea, towPointMaxArea } from '..';

describe('盛最多水的容器', () => {
  test('暴力遍历', () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    expect(maxArea(height)).toBe(49);
  });

  test('双指针', () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    expect(towPointMaxArea(height)).toBe(49);
  });
});
