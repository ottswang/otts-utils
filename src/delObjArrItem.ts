import {  findIndex, get } from "lodash-es";

export const delObjArrItem:(arr:any[],path:string|string[],value:any,judgeFunc?:(...data:any)=>boolean)=>void = (arr,path,value,judgeFunc=(e,path,val)=>get(e,path)===val)=>{
    const index = findIndex(arr,e=>judgeFunc(e,path,value));
    if(index!==-1) {
        arr.splice(index,1);
        delObjArrItem(arr,path,value,judgeFunc);
    }
}