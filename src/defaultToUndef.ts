/**
 * @description 检查value，以确定一个默认值是否应被返回。如果value为NaN, null,undefined, 或者 ""，那么返回defaultValue默认值。
 * @param value 要检查的值
 * @param defaultValue 默认值(默认是undefined可以照顾到想要把默认值设为undefined的情况)
 * @param judgeFuc 判断函数
 * @returns 默认值或者原来的值
 */
export const defaultToUndef: (
  value: any,
  defaultValue?: any,
  judgeFuc?: (val: any) => boolean
) => any = (
  value,
  defaultValue = undefined,
  judgeFuc = val => val === undefined || val === null|| Number.isNaN(val) || val === ""
) => {
    return judgeFuc(value) ? defaultValue : value;
  };
