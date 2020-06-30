# **shim**和**polyfill**

- **针对JavaScript 的浏览器兼容性问题，不同的解决方案。**

- shim 和 polyfill 都是为了解决环境兼容性，利用**旧环境的API** 实现一些新的、当前环境不支持的特性。 其中 polyfill 特指新 API 是遵循标准的

::: tip

1. shim是一个小的类库（lib），提供独立的API，`jQuery就可以看成一个 shim`
2. polyfill也是一个小的类库（lib），用于实现浏览器并不支持的原生API的代码

:::



## 什么是shim?

1. **shim 是一个库,将不同 api封装成一种，比如 jQuery的 $.ajax 封装了 XMLHttpRequest和 IE用ActiveXObject方式创建xhr对象。它将一个新的 API 引入到一个旧的环境中,而且仅靠旧环境中已有的手段实现,**

2. **polyfill 是 shim 的一种,它的 API 是遵循标准的。polyfill 的做法通常是:先检查浏览器是否支持某个标准 API,如果不支持,就使用旧的技术对浏览器做兼容处理,这样就可以在旧的浏览器上使用新的标准 API。**

但在实际情况下,我们一般说 shim,会特指**它的 API 不是遵循标准的,与 polyfill 对立**。



## 比如：请求接口方法

:::tip shim解决兼容方式

旧版本的 IE 不支持标准的 XMLHttpRequest,但支持自家的 ActiveXObject 方法

jQuery 的做法是,把两种方法封装成 $.ajax 函数。使用时,只要熟悉 $.ajax 方法就可以了,不用考虑浏览器的兼容问题。

`$.ajax = function(url) { if (isIE) {XMLHttpRequest(url) } else {ActiveXObject(url) }}`

- **jQuery 没有遵循标准**

:::

:::tip polyfill解决兼容方式

判断浏览器是否支持 XMLHttpRequest,如果不支持,就用 ActiveXObject 实现一个功能跟 XMLHttpRequest 完全一样的函数。

`if (!XMLHttpRequest) { XMLHttpRequest = function(url) {ActiveXObject(url) }}`

- **polyfill 是 shim 的一种,它的 API 是遵循标准的**

:::

- **polyfill 的设计理念更值得去推崇，思想更加先进**



## 比如：ES6 的 Array.prototype.find 方法

**项目中使用 Array.prototype.find,只要 polyfill 就行了,而不是封装一个新的方法**

```js
// 应该这么做
	if (!Array.prototype.find) { Array.prototype.find = function() { ... }} 
// 而不是这么做
	function arrayFind() { if (Array.prototype.find) { ... } else { ... }}
```

## 什么是Polyfill?  

**Polyfill是一个js库，主要抚平不同浏览器之间对js实现的差异**。比如，html5 storage(session,local), 不同浏览器，不同版本，有些支持，有些不支持。

Polyfill（Polyfill有很多，在GitHub上<https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills>），帮你把这些差异化抹平，不支持的变得支持了**（典型做法是在IE浏览器中增加 window.XMLHttpRequest ，内部实现使用 ActiveXObject。）**

其实一个polyfill的意思就是，比如开发者想要一个格式化时间的函数，然后现有的api都没有，于是作者自创一个stringDate的方法，那么这个方法就成为一个polyfill。

## 如何使用 Polyfill ？

直接引入项目，最简单就是CDN:

<https://github.com/es-shims/es5-shim>

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.14/es5-shim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.14/es5-sham.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.5/es6-shim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.5/es6-sham.min.js"></script>
<script src="other-libs.js"></script>
```



## 参考

https://github.com/es-shims/es5-shim

<https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills>

Vue响应式原理中说道：Object.defineProperty是Es5中无法shim的特性，shim可以将新的API引入到旧的环境中，而且仅靠就环境中已有的手段实现，Object.defineProperty这个特性是无法使用低级浏览器中的方法来实现的，所以Vue不支持IE8以及更低版本的浏览器。

