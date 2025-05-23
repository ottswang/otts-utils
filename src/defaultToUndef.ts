import { defaultJudgeFunc } from "./private";

/**
 * @description 检查value，以确定一个默认值是否应被返回。如果value为NaN, null,undefined, 或者 ""，那么返回defaultValue默认值。
 * @param value 要检查的值
 * @param defaultValue 默认值(默认是undefined可以照顾到想要把默认值设为undefined的情况)
 * @param judgeFunc 判断函数
 * @returns 默认值或者原来的值
 */
export const defaultToUndef = (
  value,
  defaultValue = undefined,
  judgeFunc: (val: any) => boolean = defaultJudgeFunc
) => (judgeFunc(value) ? defaultValue : value);
