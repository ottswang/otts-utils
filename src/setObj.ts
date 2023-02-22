import { setWith, get, has } from "lodash-es";
import { defaultToUndef } from "./defaultToUndef";
export type SetObjMapValueType =
  | string
  | {
      key: string | string[];
      defaultValue?: any;
      getValue?: (val: any) => any;
    }
  /**
   * 当不传key则val的值是data,此时必须有getValue函数
   */
  | {
      getValue: (val: any) => any;
      defaultValue?: any;
    };
export type SetObjMapType = {
  [key: string]: SetObjMapValueType;
};


/**
 * 通过映射一个对象中的属性对另一个对象内的属性进行赋值操作
 * @param obj 要操作的对象
 * @param data 被映射的对象
 * @param map 映射对象
 * @param strict 为true时是严格模式，obj的属性必须存在才能赋值
 */
export const setObj: (obj: any, data: any, map: SetObjMapType, strict?: boolean) => void = (
  obj,
  data,
  map,
  strict = false
) => {
  for (const key in map) {
    try {
      let dataKey: any = "";
      let result = "";
      if (typeof map[key] === "string") {
        dataKey = map[key];
        result = get(data, dataKey, "");
      } else {
        const hasKey = has(map[key], "key");
        dataKey = get(map[key], "key", false);
        const defaultValue = has(map[key], "defaultValue")
          ? get(map[key], "defaultValue")
          : "";
        const value = hasKey ? get(data, dataKey, defaultValue) : data;
        result = has(map[key], "getValue")
          ? defaultToUndef(
            get(map[key], "getValue", (val: any) => val)(value),
            defaultValue,
            val => val === undefined
          )
          : hasKey
            ? value
            : defaultValue;
      }
      if (has(obj, key) || !strict) {
        setWith(obj, key, result, Object);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
