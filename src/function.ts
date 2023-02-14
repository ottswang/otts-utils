/**
* @desc 函数防抖
* @param func 目标函数
* @param wait 延迟执行毫秒数
* @param immediate true - 立即执行， false - 延迟执行
*/
export function debounce(func: Function, wait: number, immediate: boolean): Function {
    let timer: any;
    return function (this: any) {
        let context = this,
            args = arguments;

        if (timer) clearTimeout(timer);
        if (immediate) {
            let callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait);
            if (callNow) func.apply(context, args);
        } else {
            timer = setTimeout(() => {
                func.apply
            }, wait)
        }
    }
}

/**
* 深拷贝
* @param {*} obj 
*/

export function deepClone(obj: any): [] | Object {
    let result: any = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                result[key] = deepClone(obj[key]);   //递归复制
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}



/**
* 延迟加载方法
* @param {Function} fn
* @param {number} time
*/
export function submitTimeOut(fn: Function, time: number): void {
    setTimeout(function () {
        fn()
    }, time)
}

/**
* 函数节流
* @param {*} fn 
* @param {*} interval 
* @param {*} isImmediate 
*/
export function throttle(fn: Function, wait = 500, isImmediate = false): Function {
    let flag = true;
    let timer = null;
    if (isImmediate) {
        return function (this: any) {
            if (flag) {
                fn.apply(this, arguments);
                flag = false;
                timer = setTimeout(() => {
                    flag = true
                }, wait)
            }
        }
    }
    return function (this: any) {
        if (flag) {
            flag = false
            let timer = setTimeout((...rest: any) => {
                fn.apply(this, rest)
                flag = true
            }, wait)
        }
    }
}




