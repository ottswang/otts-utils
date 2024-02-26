import { ExtraObjType, SetObjMapObjType } from "./private";
import { SetObjMapType, setObj } from "./setObj";
import { assign } from "lodash-es";

/**
 * @description 通过映射一个对象中的属性生成一个新对象
 * @param data 被映射的对象
 * @param map 映射
 * @param extraObj 额外的对象会与作为对象的初始值被合并
 * @returns 最后生成的对象
 */
export const getObj = <
  T extends SetObjMapObjType = any,
  K extends SetObjMapObjType = T
>(
  data,
  map: SetObjMapType<T>,
  extraObj: ExtraObjType<K> = {}
) => {
  const obj = {};
  if (typeof extraObj === "object") {
    assign(obj, extraObj);
  }
  setObj<T>(obj as T, data, map, false);
  return obj as T & K;
};
