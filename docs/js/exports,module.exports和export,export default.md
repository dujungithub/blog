# exports、module.exports 和 export、export default



## node模块

​	导出：exports  或者  module.exports

​	引入：require

​	// 为了避免糊涂，尽量都用 `module.exports` 导出，然后用`require`导入



## ES6模块

​	导出：export  或者 export default

​	引入：import



聊聊到底咋回事

:::tip 💁‍♂

require ：node 和 es6 都支持的引入

export / import : 只有es6支持导出和引入

module.exports / exports : 只有 node 支持的导出

:::

**vue-cli中可使用如下：export ，export default , module.exports , exports / import , require **

### 导出（4中方式）

```js
//1
export const a = b.a;
export function foo(){console.log(a)}
//2
export default{
    a:'这是准备导入的参数a',
    foo2:function(){
        console.log(a)
    },
},
//3
let obj = {
a:'这是准备导入的参数a',
    foo2:function(){
        console.log(a)
    },
};
module.exports = obj;

//4
exports.a = 1000;
exports.foo = function(){};
```

```js
exports = module.exports = {};
exports = module.exports = obj;
```



### 引入（2种方式）

```js
import obj from '../../assets/js/export';
import {a,foo} from '../../assets/js/export';

let obj = require('../../assets/js/export');
```



## exports 和 module.exports

1. `exports` 只是 `module.exports`的引用，辅助后者添加内容用的

2. `require ` 导出的内容是`module.exports`的指向的内存块内容

3. `exports`只辅助`module.exports`操作内存中的数据

4. 真正被`require`出去的内容还是`module.exports`的

   ![内存结构示意图](../js/assets/aHR0cHM6.jpg)

## export 和 export default

1. export与export default均可用于导出常量、函数、文件、模块等
2. 在一个文件或模块中，export、import可以有多个，export default仅有一个
3. 通过export方式导出，在导入时要加{ }，export default则不需要
4. export能直接导出变量表达式，export default不行。