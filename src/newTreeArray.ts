import { forEach, has } from "lodash-es";
import { getObj } from "./getObj";
import { SetObjMapValueType } from "./setObj";
export interface TreeItem {
  label: string;
  value: any;
  children: TreeItem[];
}

export type TreeItemMapType = {
  [key: string]: SetObjMapValueType;
};

export const newTreeArray: <T = TreeItem>(
  treeList: any[],
  treeItemMap?: TreeItemMapType,
  maxLevel?: number,
  level?: number
) => T[] = (
  treeList: any,
  treeItemMap = {
    label: "label",
    value: "value",
    children: "children",
  },
  maxLevel = -1,
  level = 1
) => {
  try {
    if (maxLevel !== -1 && level > maxLevel) return [];
    const childrenKey = has(treeItemMap, "children")
      ? treeItemMap.children
      : "children";
    const childrenMapValue = {
      key: childrenKey,
      getValue: (val: any[]) => {
        return newTreeArray(val, treeItemMap, maxLevel, level + 1);
      },
      defaultValue: [],
    };
    const itemMap = {
      label: "label",
      value: "value",
      ...treeItemMap,
      children: childrenMapValue,
    };
    const arr: any[] = [];
    forEach(treeList, (e) => {
      const item = getObj(e, itemMap);
      if (
        has(item, "children") &&
        (!item.children || item.children.length === 0)
      )
        delete item.children;
      arr.push(item);
    });
    return arr;
  } catch (e) {
    return [];
  }
};
