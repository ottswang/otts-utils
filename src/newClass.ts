import { mapType, setObj } from "./setObj";

export const newClass: <T>(_class: any, data: any, map: mapType) => T = (
  _class,
  data,
  map
) => {
  try {
    const newObj = new _class();
    setObj(newObj, data, map);
    return newObj;
  } catch (e) {
    return new _class();
  }
};
