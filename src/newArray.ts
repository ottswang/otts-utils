import { getObj } from "./getObj";

import { SetObjMapValueType } from "./setObj";
/**
 * @description 根据传入的数组和键值获取每个元素中的属性重新构建成一个新的数组
 * @param arr 数组
 * @param key 键值
 * @returns 构建完成后的数组
 */
export const newArray = <T = any>(
  arr: Array<any>,
  mapValue: SetObjMapValueType<
    "value",
    {
      value: T;
    }
  >
) => {
  try {
    const newArr: Array<T> = [];
    arr.forEach((e) => {
      newArr.push(
        getObj<{
          value: T;
        }>(e, {
          value: mapValue,
        }).value
      );
    });
    return newArr;
  } catch (e) {
    return [];
  }
};
