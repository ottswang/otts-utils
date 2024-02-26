<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  SetObjMapType,
  SetObjMapValueType,
  delArrItem,
  delObjArrItem,
  findTreeItem,
  getObj,
  getTreeItemPath,
  newArray,
  newObjArray,
  newTreeArray,
  setObj,
} from "@otts/utils";
interface TestObj {
  a: string;
  b: number;
  c: Array<{
    a: string;
    b: string;
  }>;
  d: Array<string>;
}
const cMapValue: SetObjMapValueType = {
  key: "b",
  getValue: (val) => val,
  defaultValue: [],
};
const testObjMap: SetObjMapType<TestObj> = {
  c: ["a", "b", "c", "0"],
  // c: "a.b.c.0",
  d: cMapValue,
};
export default defineComponent({
  name: "Home",
  components: {},
  mounted() {
    const obj: TestObj = { a: "12", b: 1, c: [], d: [] };

    setObj<TestObj>(
      obj,
      {
        a: {
          b: {
            c: [1],
          },
        },
      },
      testObjMap
    );
    console.log(obj);
    obj.d.push("2");
    const extraObj = {
      b: 1,
    };
    const obj1 = getObj<TestObj>(
      { a: undefined },
      {
        // b: "a",
      },
      extraObj
    );
    console.log(obj1);
    extraObj.b = 2;
    console.log(obj1);
    console.log(
      newArray<number>([1, 2], {
        getValue: (val: number) => val,
        defaultValue: 1,
      })
    );
    interface TestObjItem {
      a: string;
      b: number;
    }
    console.log(
      newObjArray<TestObjItem>(
        [1, 2],
        {
          a: {
            getValue: () => "2",
          },
          b: {
            getValue: (val) => val,
          },
        },
        extraObj
      )
    );
    interface MyTreeItem {
      label: any;
      value: number;
      children?: Array<MyTreeItem>;
    }
    console.log(
      newTreeArray<MyTreeItem>(
        [
          {
            label: "2121",
            value: 2,
            c: [
              {
                label: "2121",
                value: 3,
              },
            ],
          },
        ],
        {
          label: "label",
          value: "value",
          children: "c",
        }
      )
    );
    console.log(
      findTreeItem(
        newTreeArray<MyTreeItem>([
          {
            label: "2121",
            value: 2,
            c: [
              {
                label: "2123",
                value: 3,
              },
            ],
          },
        ]),
        (e) => e.value === 3
      )
    );
    const list = [1, 2, 3];
    delArrItem(list, 2, (e1, e2) => e1 === e2);
    console.log(list);
    const objList: Array<{
      label: string;
      value: any;
    }> = [
      {
        label: "213",
        value: 1,
      },
      {
        label: "2123",
        value: 2,
      },
      {
        label: "212322",
        value: 2,
      },
    ];
    delObjArrItem(objList, "value", 2);
    console.log(objList);
  },
});
</script>
