import { isNumber } from "lodash-es";
import { formatNumber } from "./formatNumber";

function format(str: any) {
  return `¥ ${str}`;
}
/**
 * @description 将数字格式成带百分比
 * @param price 传入的价格
 * @param addUnit 是否添加单位
 * @param defaultIsEmpty 当传入的数字不是数字格式时是否返回空字符串
 * @returns 格式化之后的值
 */
export const parsePrice: (
  price: any,
  addUnit?: boolean,
  defaultIsEmpty?: boolean
) => string = (price, addUnit = false, defaultIsEmpty = true) => {
  if (isNumber(price)) {
    const result = `${formatNumber(price.toFixed(2))}`;
    return addUnit ? format(result) : result;
  } else {
    const result = `0.00`;
    return defaultIsEmpty ? "" : addUnit ? format(result) : result;
  }
};

