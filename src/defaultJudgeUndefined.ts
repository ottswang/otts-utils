/**
 * @description 根据条件来返回默认值或者原来的值
 * @param value 判断的数据(任意类型)
 * @param defaultValue 默认值(任意类型)
 * @param judgeFuc 判断函数(默认判断是undefined和null)
 * @returns 默认值或者原来的值
 */
export const defaultJudgeUndefined: (
  value: any,
  defaultValue?: any,
  judgeFuc?: (val: any) => boolean
) => any = (
  value,
  defaultValue = undefined,
  judgeFuc = val => val === undefined || val === null || val === ""
) => {
  return judgeFuc(value) ? defaultValue : value;
};
