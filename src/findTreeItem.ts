import { cloneDeep, get } from "lodash-unified";
import { SetObjMapValueKeyType } from "./private";

/**
 * @description 用于根据唯一id值获取树状数组的该id所在项的映射
 * @param treeList 树状数组
 * @param iteratee 唯一id
 * @returns 如果存在返回由原item,没找到的话返回undefined
 */
export const findTreeItem = <T = any>(
  treeList: Array<T>,
  iteratee: (e: T) => boolean,
  cKey: SetObjMapValueKeyType = "children"
) => {
  try {
    for (let i = 0; i < treeList.length; i++) {
      const e = cloneDeep(treeList[i]);
      const children = get(e, cKey);
      if (iteratee(e)) {
        return e;
      } else {
        const result: T = findTreeItem(children, iteratee, cKey);
        if (result !== undefined) return result;
      }
    }
  } catch (e) {}
};
