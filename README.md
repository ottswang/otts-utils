#  js-utils 工具库

[![npm](https://img.shields.io/npm/v/@maybecode/js-utils.svg)](https://www.npmjs.com/package/@maybecode/js-utils)
[![npm](https://img.shields.io/npm/dt/@maybecode/js-utils.svg)](https://www.npmjs.com/package/@maybecode/js-utils)

- 封装了常用的工具函数，开箱即用

- 喜欢记得给个star, 持续更新

## 兼容
***
> 兼容 ie9+  firefox   chrome 

## npm
***
> https://www.npmjs.com/package/@maybecode/js-utils

## 码云
***
> https://gitee.com/null_639_5368/js-utils

## 安装
***
``` 
npm i @maybecode/js-utils
```

### commonjs
***
``` 
const MaybeUtils = require('@maybecode/js-utils')

or

const { throttle, isInViewPort }= require('@maybecode/js-utils')

```

### es6
***
``` 
import * as  MaybeUtils from "@maybecode/js-utils";

or 

import { throttle, isInViewPort } from "@maybecode/js-utils";

```

### 浏览器script
***
``` 
   <script src="https://cdn.jsdelivr.net/npm/@maybecode/js-utils/dist/index.min.js"></script>
    <script>
        // MaybeUtils 是工具库全局导出的变量
        let a = { b: { val: 'test' } }
        let c = MaybeUtils.deepClone(a)
        console.log(c)
    </script>

```

### 目前收录的函数
> 😋 dist/types 文件夹中每个函数都有相应的方法注释