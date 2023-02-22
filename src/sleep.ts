/**
 * @description 进行延时，以达到可以简写代码的目的 比如: await uni.$u.sleep(20)将会阻塞20ms
 * @param {number} ms 堵塞时间 单位ms 毫秒
 * @returns {Promise<void>} 返回promise
 */
export const sleep= (ms: number = 300): Promise<void> =>
    new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
