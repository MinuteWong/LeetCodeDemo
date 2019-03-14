import threeSum from "../ThreeSum";

describe("三数之和", () => {
  test("双指针", () => {
    expect(threeSum([-1, 1, 0, 0])).toEqual([[-1, 0, 1]]);
  });
});