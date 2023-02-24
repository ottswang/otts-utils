import {  findIndex, get } from "lodash-es";

export const delArrItem:(arr:any[],value:any,judgeFunc?:(...data:any)=>boolean)=>void = (arr,value,judgeFunc=(e,val)=>e===val)=>{
    const index = findIndex(arr,e=>judgeFunc(e,value));
    if(index!==-1) {
        arr.splice(index,1);
        delArrItem(arr,value,judgeFunc);
    }
}