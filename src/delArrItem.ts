import { findIndex } from "lodash-unified";

export const delArrItem = (
  arr: Array<any>,
  value,
  judgeFunc: (e1, e2) => boolean = (e, val) => e === val
) => {
  const index = findIndex(arr, (e) => judgeFunc(e, value));
  if (index !== -1) {
    arr.splice(index, 1);
    delArrItem(arr, value, judgeFunc);
  }
};
