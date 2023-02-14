
### 所有导出模块方式必须是按需导出方式(方便直接挂载函数到全局对象)

```
// xx.ts
export function xx ()

// index.ts
export * from './xx'


```