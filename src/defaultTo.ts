import { InferDefault, defaultJudgeFunc } from "./private";

/**
 * @description 检查value，以确定一个默认值是否应被返回。如果value为NaN, null,undefined, 或者 ""，那么返回defaultValue默认值。
 * @param value 要检查的值
 * @param defaultValue 默认值
 * @param judgeFunc 判断函数
 * @returns 默认值或者原来的值
 */
export const defaultTo = <T>(
  value:T,
  defaultValue?: InferDefault<T>,
  judgeFunc: (val:T) => boolean = defaultJudgeFunc
) => (judgeFunc(value) ? (defaultValue===undefined? "": typeof defaultValue==="function"&&typeof value!=='function'?defaultValue() as T:defaultValue as T) : value);