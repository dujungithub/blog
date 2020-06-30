# 原生scroll上拉加载

tab页面上拉加载、吸顶--scroll方法安卓有bug--处理兼容性

scrollTop需要兼容性写法
eg.
`const top= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop`

##let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

```html
<p v-for="indexs in items" v-if="index==0">item{{ indexs }}</p>
```

```js
let innerHeight = document.querySelector('#indexVue').clientHeight;
//屏幕尺寸高度
let outerHeight = document.documentElement.clientHeight;
//可滚动容器超出当前窗口显示范围的高度
//let scrollTop = document.documentElement.scrollTop;
let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop//处理兼容
//scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
//console.log(innerHeight + " " + outerHeight + " " + scrollTop);
if (innerHeight < (outerHeight + scrollTop)) {
  //加载更多操作
  if(this.items<50){
    console.log("loadmore");
    this.items += 10;
  }else{
    console.log("nomore");
  }

}
```

## 实现原生scroll上拉加载方法--多次加载问题--增加开关

```js
onoff:true,//控制开关
if (_this.onoff) {
	getdata();_this.onoff=false;
}
function getdata(){_this.onoff=true;}

/*
onoff相当于一个开关锁。
当onoff=false的时候，即没有数据的时候，关锁，禁止上拉加载更多。
当onoff=true的时候，即 有数据的时候，开锁，允许上拉加载更多
*/
```
