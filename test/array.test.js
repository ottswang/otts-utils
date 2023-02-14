/**
 * array.test.ts
 */
const MaybeUtils = require('../dist/index.umd')


test('removeArrRepeat test', () => {
    const arr = [1, 1, 2, 2, 3, 3]
    const resultArr = MaybeUtils.removeArrRepeat(arr);
    expect(resultArr).toStrictEqual([1, 2, 3]);
});
