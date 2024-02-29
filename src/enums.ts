import { defaultToUndef } from "./defaultToUndef";
type MyRecord<K extends string, T> = {
  [P in K]?: T;
};
export type EnumsToType<T, U extends string = ""> = keyof T | U;
export const lrEnumsMapGetValue =
  <T extends string, U>(enums: MyRecord<T, U>, defaultValue: any = "") =>
  (val: T) => {
    let result: any = defaultValue;
    for (const key in enums) {
      if (key === val) {
        result = enums[key];
      }
    }
    return result as U;
  };
export const rlEnumsMapGetValue =
  <T extends string, U>(enums: MyRecord<T, U>, defaultValue?: T) =>
  (val: U) => {
    let result = defaultToUndef(defaultValue);
    for (const key in enums) {
      if (enums[key] === val) {
        result = key;
      }
    }
    return result as T;
  };
