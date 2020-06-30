# YDUI框架使用

## 弹框使用方式：

```js
_this.$dialog.toast({mes: '已加入购物车', timeout: 1000});
_this.$dialog.confirm({
    title: ' ',
    mes: '您选择的配送地址，订单中有货物无法配送。',
    opts: [
      {
        txt: '地址更换',
        color: false,
        callback: () => {
          _this.$dialog.toast({mes: '你点了取消', timeout: 1000});
        }
      },
      {
        txt: '调整订单',
        color: true,
        callback: () => {
          _this.$dialog.toast({mes: '你点了确定', timeout: 1000});
          _this.$router.push({ path: "/cart/" });
        }
      }
    ]
});
```

## 轮播图props属性使用

```js
<yd-slider 
	autoplay="3000" 
	:show-pagination=false 
	pagination-color="#000" .
	pagination-active-color="#FFF" 
	:callback=carouseFn
>
   <yd-slider-item
       v-for="(item, index) in pmDetail.itemImages"
       :key="index"
   >
        <img :src="item.imgUrl"/>
   </yd-slider-item>
</yd-slider>

轮播分页小点不好用，用自己的
<div class="h-jd">
        <span :class="{on:activeSlider==index}" v-for="(item, index) in carouselsList" :key="index"></span>
      </div>
      carouseFn:function(res){
      this.activeSlider = parseInt(res);
    },
```

## 倒计时使用

```js
<yd-countdown
    :time="1000"
    timetype="second"
    format="{%m}:{%s}"
    done-text="00:00"
    :callback=cancelOrderFn
></yd-countdown>

cancelOrderFn:function () {
      console.log(11111)
}
```



