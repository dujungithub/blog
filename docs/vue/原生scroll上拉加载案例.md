# 原生上拉加载--商城中代码案例

```html
<div id="indexVue" v-cloak>
<ul>
<li
v-for="(item,index) in 50"
:key="index"
@click="tab(index)"
>
{{item}}
</li>
</ul>
<div class="h-ts" v-show="onoff"> <span></span>已经到底了，客官手下留情<span></span> </div>
<div class="h-ts" v-show="!onoff"> <span></span>加载中<span></span> </div>

</div>
```



```js
//关键功能在onoff参数
let indexVue = new Vue({
	el: "#indexVue",
  	data:{
  		onoff:true,//控制scroll加载开关
  	},
    created() {
    	window.addEventListener('scroll', this.onScroll);
    },
    mounted: function () {
    	this.init();
  	},
  	methods: {
        init:function () {
          var _this = this;
          _this.cartListFn(1,10);
        },
        onScroll() {
          let _this = this;
          //可滚动容器的高度
          let innerHeight = document.querySelector('#indexVue').clientHeight;
          //屏幕尺寸高度
          let outerHeight = document.documentElement.clientHeight;
          //可滚动容器超出当前窗口显示范围的高度
          //let scrollTop = document.documentElement.scrollTop;
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          //scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
          //console.log(innerHeight + " " + outerHeight + " " + scrollTop);
          if (innerHeight < (outerHeight + scrollTop)) {
            //上拉加载更多操作
            let pageNum = parseInt(_this.tabBoxlist[_this.tabCurrent].data.pageNum);
            let pages = parseInt(_this.tabBoxlist[_this.tabCurrent].data.pages);
            if(pageNum<pages){
              console.log("loadmore");
              if (_this.onoff) {
                _this.onoff=false;
                setTimeout(function () {
                  _this.cartListFn(pageNum + 1, 10);
                }, 500)
              }
            }else{
              console.log("nomore");
            }

          }

          /*选项卡吸顶处理*/
          let hCdHeight = document.querySelector(".h-cd").offsetTop;
          if(scrollTop>hCdHeight){
            this.tabXdStatus=true;
          }else{
            this.tabXdStatus=false;
          }
        },
        cartListFn:function(pageNum,pageSize){
          let _this = this;
          let url = _this.portUrl+"/cart/list";
          let param = {
            "pageNum":pageNum,
            "pageSize":pageSize,
          }
          axios.post(url,param).then(function (response) {
            if(response.data.resCode=="000000"){
              if(pageNum==1){
                _this.cartList = response.data.data;
              }else{
                _this.cartList.data = _this.cartList.data.concat(response.data.data.data);
                _this.cartList.pageNum = response.data.data.pageNum;
                _this.cartList.pageSize = response.data.data.pageSize;
                _this.cartList.pages = response.data.data.pages;
                _this.cartList.total = response.data.data.total;
                _this.onoff=true;
              }

            }else{
              _this.onoff=false;
            }
          }).catch(function (error) {
            console.log(error);
          });
        },
  	},
    destroyed () {
    	window.removeEventListener('scroll', this.onScroll)
    }
});

```

