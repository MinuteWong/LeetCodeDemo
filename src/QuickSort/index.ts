const quickSort = (list: number[]): number[] => {
  if (list.length <= 1) return list;
  const basePoint = list[0];
  const leftList = [];
  const rightList = [];
  for (let i = 1; i < list.length; i++) {
    const item = list[i];
    item >= basePoint ? rightList.push(item) : leftList.push(item);
  }
  return quickSort(leftList).concat(basePoint, quickSort(rightList));
};

export default quickSort;
