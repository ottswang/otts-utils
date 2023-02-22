import { get } from "lodash-es";

/**
 * @description 用于根据唯一id值获取树状数组的该id所在项的映射
 * @param treeList 树状数组
 * @param value 唯一id
 * @param vKey value键值
 * @param cKey children键值
 * @returns 如果存在返回由原item组成数组,没找到的话返回undefined
 */
export const getTreeItemPath: <T = any>(
    treeList: any[],
    value: any,
    vKey?: string | string[],
    cKey?: string | string[],
) => T[] | undefined = (
    treeList,
    value,
    vKey = "value",
    cKey = "children",
) => {
        try {
            for (let i = 0; i < treeList.length; i++) {
                const e = treeList[i];
                const val = get(e, vKey);
                const children = get(e, cKey);
                if (value === val) {
                    return [e];
                } else {
                    if (children && children.length > 0) {
                        const result = getTreeItemPath(
                            children,
                            value,
                            vKey,
                            cKey,
                        );
                        if (result !== undefined) {
                            return [e, ...result];
                        }
                    }
                }
            }
            return undefined;
        } catch (error) {
            return undefined;
        }
    };
