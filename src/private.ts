export type SetObjMapValueKeyType = string | number | Array<string | number>;
function isNumberStringArray(arr: any[]): boolean {
  if (!Array.isArray(arr)) return false;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" && typeof arr[i] !== "string") {
      return false;
    }
  }
  return true;
}

export function isSetObjMapValueKeyType(val) {
  const type = typeof val;
  return type === "string" || type === "number" || isNumberStringArray(val);
}

export type SetObjMapObjType = Record<string, any>;

export type ExtraObjType<T extends SetObjMapObjType> = {
  [Key in keyof T]?: T[Key];
};

export const defaultJudgeFunc = (val) =>
  val === undefined || val === null || Number.isNaN(val) || val === "";

type NativeType = null | number | string | boolean | symbol | Function;
export type InferDefault<T> = (() => T & {}) | (T extends NativeType ? T : never);