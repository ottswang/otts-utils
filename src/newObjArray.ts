import { getObj } from "./getObj";
import { SetObjMapType } from "./setObj";
/**
 * @description 根据传入的数组和键值获取每个元素中的属性重新构建成一个新的数组
 * @param arr 数组
 * @param map 键值对
 * @returns 构建完成后的数组
 */
export const newObjArray: <T=any>(arr: any[], map: SetObjMapType) => T[] = (
  arr,
  map
) => {
  try {
    const newArr: any[] = [];
    arr.forEach(e => {
      newArr.push(getObj(e, map));
    });
    return newArr;
  } catch (error) {
    return [];
  }
};

