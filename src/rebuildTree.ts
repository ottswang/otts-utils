import { forEach } from "lodash-es";
import { newClass } from "./newClass";
import { mapValueType } from "./setObj";
export class TreeItem {
    label = "";
    value = "";
    children: TreeItem[] = [];
}

export type TreeMapType = {
    children: string;
    [key: string]: mapValueType;
};

export const rebuildTree = <T>(
    treeList: any[],
    treeItemMap?: TreeMapType,
    treeItemClass?: any,
    maxLevel = -1,
    level = 1
) => {
    try {
        if (maxLevel !== -1 && level > maxLevel) return [];
        const childrenKey =
            treeItemMap === undefined ? "children" : treeItemMap.children;
        const childrenMapValue = {
            key: childrenKey,
            getValue: (val: any[]) => {
                return rebuildTree<T>(
                    val,
                    treeItemMap,
                    treeItemClass,
                    maxLevel,
                    level + 1
                );
            },
            defaultValue: []
        };
        const itemMap =
            treeItemMap === undefined
                ? {
                    label: "label",
                    value: "value",
                    children: childrenMapValue
                }
                : {
                    ...treeItemMap,
                    children: childrenMapValue
                };
        const itemClass = treeItemClass === undefined ? TreeItem : treeItemClass;
        const arr: TreeItem[] | T[] = [];
        forEach(treeList, e => {
            if (treeItemClass === undefined) {
                // @ts-ignore
                arr.push(newClass<TreeItem>(itemClass, e, itemMap));
            } else {
                // @ts-ignore
                arr.push(newClass<T>(itemClass, e, itemMap));
            }
        });
        return arr;
    } catch (error) {
        console.log(error);
        return [];
    }
};
