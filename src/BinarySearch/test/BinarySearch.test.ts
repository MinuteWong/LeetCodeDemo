import binarySearch from '../BinarySearch';
describe('binarySearch', () => {
  const arr = [-1, 0, 1, 5, 6, 7, 9];
  test('find num', () => {
    expect(binarySearch(arr, 0)).toBe(1);
  });

  test('find num2', () => {
    expect(binarySearch(arr, 1)).toBe(2);
  });

  test('can not find', () => {
    expect(binarySearch(arr, 10)).toBe(-1);
  });
});
