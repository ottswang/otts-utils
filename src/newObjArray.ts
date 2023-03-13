import { getObj } from "./getObj";
import { SetObjMapType } from "./setObj";
/**
 * @description 根据传入的数组和键值获取每个元素中的属性重新构建成一个新的数组
 * @param arr 数组
 * @param map 键值对
 * @param extraObj 额外的对象最后会与生成的item对象合并
 * @returns 构建完成后的数组
 */
export const newObjArray: <T=any>(arr: any[], map: SetObjMapType,extraObj?: object) => T[] = (
  arr,
  map,
  extraObj = {}
) => {
  try {
    const newArr: any[] = [];
    arr.forEach(e => {
      newArr.push(getObj(e, map,extraObj));
    });
    return newArr;
  } catch (error) {
    return [];
  }
};

