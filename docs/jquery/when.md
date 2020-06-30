# 回调 `$.when $.then`

**挂钩到jQuery.remove(),以便一个函数可以在之前/之后调用？**

```js
$.when(
	$("#container"+index).remove()//先移除
).then(
	inputImgVal()//再处理
);
```

