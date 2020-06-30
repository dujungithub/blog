https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115



```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta content="black" name="apple-mobile-web-app-status-bar-style">
    <meta content="telephone=no" name="format-detection">
    <meta content="email=no" name="format-detection">
    <script src="http://ggl.51caiyou.com/statics/h5/js/jq.mobi.min.js"></script>
    <title>微信JSSDK</title>
</head>
<body>
    
  这里是测试信息：经纬度：<div class="testCls"></div>
  <img src="http://ggl.51caiyou.com/statics/h5/images/ggl_logo.png" alt="">
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.4.0.js"></script>
<script type="text/javascript">  
    
        $.ajax({
          type:"get",
          url:'http://ggl.51caiyou.com/h5/port/wxapi/wxapi.php',
          data:{'url':document.location.href.split("#")[0]},
          dataType: "jsonp",
          jsonp: "callback",
          success:function(result){
            //console.log(result);
            wx.config({
              debug: false,
              appId: result.appId,
              timestamp: result.timestamp,
              nonceStr: result.nonceStr,
              signature: result.signature,
              jsApiList: ['hideMenuItems', 
                'onMenuShareTimeline', 
                'onMenuShareAppMessage',
                'updateAppMessageShareData',
                'updateTimelineShareData',
                'openLocation',
                'getLocation'] // 必填，需要使用的JS接口列表
            });
          }
        });


       var shareData = {
            title: "最新分享",
            desc: "新分享方式测试updateAppMessageShareData",
            friendcontent: "新分享方式测试updateTimelineShareData",
            imgUrl: 'http://ggl.51caiyou.com/statics/h5/images/ggl_logo.png',
            link: document.location.href.split("#")[0]
        };
        var wxCallbacks = {
            ready: function () { },
            cancel: function (resp) {},
            fail: function (resp) {},
            success: function (resp) {},
            all: function (resp) {}
        };
        wx.ready(function () {
            //判断当前客户端版本是否支持指定JS接口
            wx.checkJsApi({
                jsApiList: ['hideMenuItems', 
                    'onMenuShareTimeline', 
                    'onMenuShareAppMessage',
                    'updateAppMessageShareData',
                    'updateTimelineShareData',
                    'openLocation',
                    'getLocation'],
                success: function(res) {
                  console.log("checkJsApi");
                // 以键值对的形式返回，可用的api值true，不可用为false
                // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                }
            });
            //新分享方式-------在用户可能点击分享按钮前就先调用
            updateAppMessageShareData(shareData, wxCallbacks);
            updateTimelineShareData(shareData, wxCallbacks);
            //老分享方式
            //weixinSendAppMessage(shareData, wxCallbacks);
            //weixinShareTimeline(shareData, wxCallbacks);
            //设备信息
            /*wx.getNetworkType({
              success: function (res) {
                var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
              }
            });*/

            //获取地理位置
            getLocation();
        });
       /* function weixinSendAppMessage(data, callbacks) {
            callbacks = callbacks || {};
            wx.onMenuShareAppMessage({
                title: data.title, // 分享标题
                desc: data.desc, // 分享描述
                link: data.link, // 分享链接
                imgUrl: data.imgUrl, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数
                    callbacks.success && callbacks.success();
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                    callbacks.cancel && callbacks.cancel();
                }
            });
        }
        function weixinShareTimeline(data, callbacks) {
            callbacks = callbacks || {};
            wx.onMenuShareTimeline({
                title: data.friendcontent ? data.friendcontent:data.desc, // 分享标题
                link: data.link, // 分享链接
                imgUrl: data.imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                    callbacks.success && callbacks.success();
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                    callbacks.cancel && callbacks.cancel();
                }
            });
        }
*/
        //自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）

        //需在用户可能点击分享按钮前就先调用
        function updateAppMessageShareData(data, callbacks) {
            callbacks = callbacks || {};   
            wx.updateAppMessageShareData({ 
                title: data.title, // 分享标题
                desc: data.desc, // 分享描述
                link: data.link, // 分享链接
                imgUrl: data.imgUrl, // 分享图标
                success: function () {
                  // 用户确认分享后执行的回调函数
                    callbacks.success && callbacks.success();
                }
            });
        }
        //需在用户可能点击分享按钮前就先调用
        function updateTimelineShareData(data, callbacks) {
            callbacks = callbacks || {};   
            wx.updateTimelineShareData({ 
                title: data.title, // 分享标题
                link: data.link, // 分享链接
                imgUrl: data.imgUrl, // 分享图标
                success: function () {
                  // 用户确认分享后执行的回调函数
                    callbacks.success && callbacks.success();
                }
            });
        }

        //调起微信内置地图查看位置接口
        function openLocation(latitude,longitude) {
          wx.openLocation({
            latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
            longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
            name: '中国那嘎达', // 位置名
            address: '一角', // 地址详情说明
            scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
            infoUrl: 'http://www.baidu.com' // 在查看位置界面底部显示的超链接,可点击跳转
          });
        }
        //获取地理位置接口
        function getLocation() {
          wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
              console.log(res.latitude,res.longitude);
              var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
              var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
              var speed = res.speed; // 速度，以米/每秒计
              var accuracy = res.accuracy; // 位置精度

              //打开内置地图
              openLocation(latitude,longitude);


              $(".testCls").html(res.latitude+"--"+res.longitude);
              /*layer.open({
                style:"width:80%;text-align:center;",
                content: res.latitude+"--"+res.longitude,
                shadeClose: false,
                btn:["确定"]
              });*/
            }
          });
        }
</script>
</html>
```

以上可以实现微信内定位

以下实现浏览器内定位

```HTML
< script >
var x = document.getElementById("demo"); (function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
})();
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br />Longitude: " + position.coords.longitude;
} 
</script>
```

