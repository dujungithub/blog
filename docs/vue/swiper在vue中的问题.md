# this.$nextTick(function(){})



**当前页面使用swiper时，渲染出现问题**

解决：

- 将swiper调用方法，放在接口回调中，使用`$nextTick `中调用即可

