/**
* 存储localStorage
* @param name 
* @param content 
*/
export function setStore(name: string, content: any): void {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}
/**
* 获取localStorage
* @param name 
* @returns {string} 
*/
export function getStore(name: string) {
    if (!name) return
    return window.localStorage.getItem(name)
}
/**
* 删除localStorage
* @param name 
*/
export function removeStore(name: string): void {
    if (!name) return
    window.localStorage.removeItem(name)
}