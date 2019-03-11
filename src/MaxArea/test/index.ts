import maxArea from "..";

describe("盛最多水的容器", () => {
  test("功能测试", () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    expect(maxArea(height)).toBe(49);
  });
});