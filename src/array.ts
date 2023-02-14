/**
 * 数组去重
 * @param arr 需要去重的数组
 * @returns {Array} 去重后的数组
 */
export function removeArrRepeat(arr: any[]) {
    return Array.from(new Set(arr));
}

/**
 * 分割数组subGroupLength份
 * @param array 
 * @param subGroupLength 
 */
export function groupArray(array: any[], subGroupLength: number) {
    let index = 0;
    let newArray = [];
    while (index < array.length) {
        newArray.push(array.slice(index, index += subGroupLength));
    }
    return newArray;
}