import { setWith, get, has, cloneDeep } from "lodash-unified";
import { defaultToUndef } from "./defaultToUndef";
import {
  SetObjMapObjType,
  SetObjMapValueKeyType,
  isSetObjMapValueKeyType,
} from "./private";

export type SetObjMapValueType<Key extends keyof T = any, T = any> =
  | SetObjMapValueKeyType
  | {
      key: SetObjMapValueKeyType;
      active?: (val) => boolean;
      getValue?: (val) => T[Key];
      defaultValue?: T[Key];
    }
  /**
   * 当不传key则val的值是data,此时必须有getValue函数
   */
  | {
      active?: (val) => boolean;
      getValue: (val) => T[Key];
      defaultValue?: T[Key];
    };

export type SetObjMapType<T extends SetObjMapObjType = any> = {
  [Key in keyof T]?: SetObjMapValueType<Key, T>;
};

/**
 * 通过映射一个对象中的属性对另一个对象内的属性进行赋值操作
 * @param obj 要操作的对象
 * @param data 被映射的对象
 * @param map 映射对象
 * @param strict 为true时是严格模式，obj的属性必须存在才能赋值
 */
export const setObj = <T extends SetObjMapObjType = any>(
  obj: T,
  data,
  map: SetObjMapType<T>,
  strict = false
) => {
  for (const key in map) {
    try {
      let result = "";
      const mapValue = map[key];
      if (isSetObjMapValueKeyType(mapValue)) {
        result = defaultToUndef(
          get(data, mapValue as SetObjMapValueKeyType),
          ""
        );
      } else {
        const dataKey = get(mapValue, "key");
        const hasKey = has(mapValue, "key") && isSetObjMapValueKeyType(dataKey);
        const defaultValue = has(mapValue, "defaultValue")
          ? typeof get(mapValue, "defaultValue") === "object"
            ? cloneDeep(get(mapValue, "defaultValue"))
            : get(mapValue, "defaultValue")
          : ""; // defaultValue类型为object时深拷贝
        const value = hasKey
          ? get(data, dataKey as SetObjMapValueKeyType)
          : data;
        if (
          has(mapValue, "active") &&
          !get(mapValue as any, "active", () => false)(value)
        ) {
          throw key + " is not activated";
        }
        if (has(mapValue, "getValue")) {
          result = defaultToUndef(
            get(mapValue, "getValue", (val) => val)(value),
            defaultValue
          );
        } else {
          result = defaultToUndef(hasKey ? value : defaultValue, defaultValue);
        }
      }
      if (has(obj, key) || !strict) {
        setWith(obj, key, result, Object);
      }
    } catch (e) {}
  }
};
