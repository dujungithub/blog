# JS



## 内置类型

JS 中分为七种内置类型，七种内置类型分为两大类型：基本类型和对象（Object）。

基本类型有六种：`null` , `undefined `, `boolean` , `number` , `string` , `symbol` 。

其中 JS 的数字类型是浮点类型的，没有整型。并且浮点类型基于 IEEE754标准实现，
NaN 也属于 `number` 类型 , 不等于自身。

对于基础类型，只有在必要的时候才会由字面量转换为对应的类型。

```js
let a = 111 //这只是字面量，不是number类型
a.toString() //使用时会转换为对象类型
```
对象Object是引用类型，在使用时有浅拷贝和深拷贝的问题。

```js
let a = {n:'1'}
console.log(a.n)//1
let b = a
b.n = '2'
console.log(a.n)//2
```

## Typeof

`typeof` 检测当前所属类型，除了 `null` 都可以正确显示

```js
typeof 1 			// number
typeof '1'			//string
typeof undefined	//undefined
typeof true			//boolean
typeof Symbol()		//symbol
typeof null			//object
typeof Number		//function
typeof a			//a 没有声明，显示 undefined

typeof []			//object
typeof {}			//object
typeof 任意函数		 //function
```

`null` 是最初设计时系统是32位系统，存储变量类型信息，000开头代表对象，但是`null`全部为零，所以也认为是 `object` 了。 现在储存变量方式改变了，但是这个问题bug一直保留了。

**如何获取正确类型**
通过 `Object.prototype.toString.call(***)`

```js
Object.prototype.toString.call(null)
控制台："[object Null]"
```

```
判断 undefined
// 因为 void 后面随便跟上一个组成表达式
// 返回就是 undefined
let a
a === undefined
a === void 0  //true
```

## 类型转换

	### 转Boolean

为 `false` 的值有：	`undefined   null   false   NaN  ' '  0  -0  `

其余都为 `true`

### 对象转基本类型



## this

this 指向 window 

如果外层是-->

​	-->箭头函数，继续向上找，

​		-->找到方法，是不是对象中的 ，

​			-->是对象中的方法就是对象本身，

​			-->如果不是对象，那就是指向window



## 闭包

定义：函数A return 函数B ， 函数B 用了函数A 内部的变量 ，函数B 就是闭包

```
function A(){
	let str = "内部参数"
	function B(){
		console.log(str)
	}
	return B
}
A()();//内部参数
```

