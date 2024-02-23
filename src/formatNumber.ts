/**
 * @description 数字格式化,整数部分每三个间隔一个逗号
 * @param num 要格式化的数字
 * @param sep 分隔符
 * @returns 格式化的数字
 */
export const formatNumber = (num: string | number, sep = ", ") => {
  return num
    .toString()
    .replace(/\d+/, (n) => n.replace(/(\d)(?=(?:\d{3})+$)/g, `$1${sep}`));
};
