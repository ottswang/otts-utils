import { findIndex, get } from "lodash-es";
import { SetObjMapValueKeyType } from "./private";

export const delObjArrItem = (
  arr: Array<any>,
  path: SetObjMapValueKeyType,
  value,
  judgeFunc: (e, path: SetObjMapValueKeyType, val) => void = (e, path, val) =>
    get(e, path) === val
) => {
  const index = findIndex(arr, (e) => judgeFunc(e, path, value));
  if (index !== -1) {
    arr.splice(index, 1);
    delObjArrItem(arr, path, value, judgeFunc);
  }
};
