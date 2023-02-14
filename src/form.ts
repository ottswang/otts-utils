import { serialize, Options } from 'object-to-formdata';
/**
* 数组插入到Formdata
* @example 1.在上传多张图片的时候会用到
* @description 该方法会改变原formdata
* @param {FormData} formData 源formdata
* @param {string} key 数组key值
* @param {Array} arr 数组
*/
export const formatArrToFormData = (formData: FormData, key: string, arr: Array<any>): void => {
    arr.forEach((file, index) => {
        formData.append(`${key}[${index}]`, file);
    });
};

/**
 * objToFormData
 * @license https://github.com/therealparmesh/object-to-formdata
 * @param object 
 * @param options 
 * @param existingFormData 
 * @param keyPrefix 
 * @returns 
 */
export const objToFormData = <T = {}>(object: T, options?: Options, existingFormData?: FormData, keyPrefix?: string) => {
    const formData = serialize(
        object,
        options, // optional
        existingFormData, // optional
        keyPrefix, // optional
    );
    return formData;
}