import { get, cloneDeep } from "lodash-es";
import { SetObjMapValueKeyType } from "./private";

/**
 * @description 用于根据唯一id值获取树状数组的该id所在项的映射
 * @param treeList 树状数组
 * @param value 唯一id
 * @param vKey value键值
 * @param cKey children键值
 * @returns 如果存在返回由原item组成数组,没找到的话返回[]
 */
export const getTreeItemPath = <T = any>(
  treeList: Array<T>,
  value,
  vKey: SetObjMapValueKeyType = "value",
  cKey: SetObjMapValueKeyType = "children"
) => {
  try {
    for (let i = 0; i < treeList.length; i++) {
      const e = cloneDeep(treeList[i]);
      const val = get(e, vKey);
      const children: Array<T> = get(e, cKey);
      if (value === val) {
        return [e];
      } else {
        if (children && children.length > 0) {
          const result: Array<T> = getTreeItemPath(children, value, vKey, cKey);
          if (result.length > 0) {
            return [e, ...result];
          }
        }
      }
    }
    return [];
  } catch (e) {
    return [];
  }
};
