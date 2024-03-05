import { forEach, has } from "lodash-unified";
import { getObj } from "./getObj";
import { SetObjMapValueType, SetObjMapType } from "./setObj";
import { SetObjMapValueKeyType, isSetObjMapValueKeyType } from "./private";

type TreeItemType<T> = {
  children?: Array<T>;
  [key: string]: any;
};

export type TreeItem = {
  label: string;
  value: any;
  children?: Array<TreeItem>;
};

export type TreeItemSetObjMapType<T extends TreeItemType<T>> =
  | {
      children: SetObjMapValueKeyType;
    }
  | ({
      [Key in keyof T]: Key extends "children"
        ? SetObjMapValueKeyType
        : SetObjMapValueType<Key, T>;
    } & {
      children: SetObjMapValueKeyType;
    });

const newTreeArrayByLevel = <T extends TreeItemType<T>>(
  treeList: Array<any>,
  treeItemMap: TreeItemSetObjMapType<T>,
  maxLevel: number,
  level: number
) => {
  try {
    if (maxLevel !== -1 && level > maxLevel) return [];
    const childrenKey =
      has(treeItemMap, "children") &&
      isSetObjMapValueKeyType(treeItemMap.children)
        ? treeItemMap.children
        : "children";
    const itemMap: SetObjMapType<T> = {
      ...(treeItemMap as SetObjMapType<T>),
      children: {
        key: childrenKey,
        getValue: (val) =>
          newTreeArrayByLevel<T>(val, treeItemMap, maxLevel, level + 1),
        defaultValue: [],
      },
    };
    const arr: Array<T> = [];
    forEach(treeList, (e) => {
      const item = getObj(e, itemMap);
      if (
        has(item, "children") &&
        (!Array.isArray(item.children) ||
          (Array.isArray(item.children) && item.children.length === 0))
      ) {
        delete item.children;
      }
      if (Object.keys(item).length > 0) {
        arr.push(item);
      }
    });
    return arr;
  } catch (e) {
    return [];
  }
};

export const newTreeArray = <T extends TreeItemType<T>>(
  treeList: Array<any>,
  treeItemMap: TreeItemSetObjMapType<T>,
  maxLevel = -1
) => newTreeArrayByLevel<T>(treeList, treeItemMap, maxLevel, 1);
