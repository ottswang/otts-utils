import { getObj } from "./getObj";
import { ExtraObjType, SetObjMapObjType } from "./private";
import { SetObjMapType } from "./setObj";
import { forEach } from "lodash-es";
/**
 * @description 根据传入的数组和键值获取每个元素中的属性重新构建成一个新的数组
 * @param arr 数组
 * @param map 键值对
 * @param extraObj 额外的对象最后会与生成的item对象合并
 * @returns 构建完成后的数组
 */
export const newObjArray = <
  T extends SetObjMapObjType = any,
  K extends SetObjMapObjType = T
>(
  arr: Array<any>,
  map: SetObjMapType<T>,
  extraObj: ExtraObjType<K> = {}
) => {
  try {
    const newArr: Array<T & K> = [];
    forEach(arr, (e) => {
      newArr.push(getObj<T, K>(e, map, extraObj));
    });
    return newArr;
  } catch (e) {
    return [];
  }
};
