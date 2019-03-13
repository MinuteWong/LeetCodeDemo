import { mock } from "mockjs";
import quickSort from "..";

describe("测试快排", () => {
  test("排序", () => {
    const data = mock({
      "array|200": ["@integer(10, 1000)"]
    });
    const list: number[] = data.array;
    expect(quickSort(list)).toEqual(list.sort((a, b) => a - b));
  });
});
