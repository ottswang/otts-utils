import {mapType,setObj} from "./setObj";
import { assign } from "lodash-es";

/**
 * @description 通过映射一个对象中的属性生成一个新对象
 * @param data 被映射的对象
 * @param map 映射对象
 * @param extraObj 额外的对象最后会与生成的对象合并
 * @returns 最后生成的对象
 */
export const getObj: (data: any, map: mapType, extraObj?: object) => any = (
  data,
  map,
  extraObj = {}
) => {
  const obj = {};
  setObj(obj, data, map, false);
  return assign(obj, extraObj);
};

