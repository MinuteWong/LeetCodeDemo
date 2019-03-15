import threeSumClosest from '../ThreeSumClosest';

describe('最接近的三数之和', () => {
  test('双指针', () => {
    expect(threeSumClosest([-3, 0, 1, 2], 1)).toEqual(0);
  });
});
