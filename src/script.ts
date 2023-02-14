/**
* 动态创建script
* @param {string} src 脚本地址 
* @param {string} id 唯一标识
* @param {'defer' | 'async'} load 'defer' | 'async'  加载脚本的时机,默认是同步加载 
* @example 
* createScript(...).then().catch() 
* ----or----
* try {await  createScript(...)} catch(err){console.log(err)}
* @returns {Promise<any>} Promise
*/
export function createScript(src: string, id?: string, load?: 'defer' | 'async'): Promise<any> {
    return new Promise((resolve, reject) => {
        try {
            let script = document.createElement("script");  //创建一个script标签
            script.type = "text/javascript";
            script.src = src;
            if (id) script.id = id;
            if (load) {
                script.setAttribute('load', load);
            }
            document.getElementsByTagName('head')[0].appendChild(script);
            console.log(`script id：${id} 加载中...`)
            script.onload = function () {
                console.log(`script id：${id} 加载完成`)
                resolve(null);
            }
        } catch (error) {
            reject(error);
        }
    })
}
/**
* 删除脚本
* @param {HTMLElement} dom script元素 
* @returns {Promise<any>} Promise
*/
export function removeScript(dom: HTMLElement): Promise<any> {
    return new Promise((resolve, reject) => {
        try {
            if (!dom) {
                throw new Error('请提供有效的script dom')
            }
            document.getElementsByTagName('head')[0].removeChild(dom);
            console.info(`script  id:${dom.id}删除成功`);
            resolve(null);
        } catch (error) {
            reject(error);
        }
    })
}