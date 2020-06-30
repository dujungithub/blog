E:\workspaces\h5demo\12 微信定位-浏览器定位-ip-经纬度





```HTML
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">
    <title>逆地理编码(经纬度->地址)</title>
    <link rel="stylesheet" href="https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css"/>
    <style>
        html,body,#container{
            height:100%;
            width:100%;
        }
        .btn{
            width:10rem;
            margin-left:6.8rem;   
        }
    </style>
</head>
<body>
<div id="container"></div>
<div class='info'>输入或点击地图获取经纬度。</div>
<div class="input-card" style='width:28rem;'>
    <label style='color:grey'>逆地理编码，根据经纬度获取地址信息</label>
    <div class="input-item">
        <div class="input-item-prepend"><span class="input-item-text">经纬度</span></div>
        <input id='lnglat' type="text" value='116.39,39.9'>
    </div>
    <div class="input-item">
        <div class="input-item-prepend"><span class="input-item-text" >地址</span></div>
        <input id='address' type="text" disabled>
    </div>
    <input id="regeo" type="button" class="btn" value="经纬度 -> 地址" >
</div>
<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.11&key=您申请的key值&plugin=AMap.Geocoder"></script>
<script type="text/javascript">
    var geocoder;
    function regeoCode() {
        if(!geocoder){
            geocoder = new AMap.Geocoder({ });
        }
        var pt ="116,39";
        geocoder.getAddress(pt, function(status, result) {
            if (status === 'complete'&&result.regeocode) {
                var address = result.regeocode.formattedAddress;
                console.log(address);
                document.getElementById('address').value = address;
            }
        });
    }
    
     
    document.getElementById("regeo").onclick = regeoCode;
</script>
</body>
</html>
```

账号  15901382182  389172946@qq.com    dujungaode

**经纬度获取城市地址**2018-12-04创建

| Key名称        | Key                              | 绑定服务 | 操作                                                         |
| -------------- | -------------------------------- | -------- | ------------------------------------------------------------ |
| gaodeditukey01 | baa97dd8a02622d61a0579f4b306457a | Web端    | [设置](https://lbs.amap.com/dev/key/app#)[删除](https://lbs.amap.com/dev/key/app#)**经纬度获取城市地址**2018-12-04创建 |

```HTML
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">
    <title>逆地理编码(经纬度->地址)</title>
    <link rel="stylesheet" href="https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css"/>
    <style>
        html,body,#container{
            height:100%;
            width:100%;
        }
        .btn{
            width:10rem;
            margin-left:6.8rem;   
        }
    </style>
</head>
<body>
<div id="container"></div>
<div class='info'>输入或点击地图获取经纬度。</div>
<div class="input-card" style='width:28rem;'>
    <label style='color:grey'>逆地理编码，根据经纬度获取地址信息</label>
    <div class="input-item">
        <div class="input-item-prepend"><span class="input-item-text">经纬度</span></div>
        <input id='lnglat' type="text" value=''>
    </div>
    <div class="input-item">
        <div class="input-item-prepend"><span class="input-item-text" >地址</span></div>
        <input id='address' type="text" disabled>
    </div>
    <input id="regeo" type="button" class="btn" value="经纬度 -> 地址" >
</div>
<div style="position:fixed;top:100px;left:50px;">经纬度获取<div id="demo"></div></div>
<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.11&key=baa97dd8a02622d61a0579f4b306457a&plugin=AMap.Geocoder"></script>

<script src="jquery-1.11.3.js"></script>
<script>
var x=document.getElementById("demo");
(function getLocation(){
  if (navigator.geolocation){navigator.geolocation.getCurrentPosition(showPosition);}
})();
function showPosition(position){
  x.innerHTML="Longitude: " + position.coords.longitude +"<br />Latitude: " + position.coords.latitude;
  $("#lnglat").val(position.coords.longitude+","+position.coords.latitude);
}
  
</script>
<script>
    var geocoder;
    function regeoCode() {
        if(!geocoder){
            geocoder = new AMap.Geocoder({ });
        }
		pt = $("#lnglat").val();
		//pt="116,30";
        geocoder.getAddress(pt, function(status, result) {
            if (status === 'complete'&&result.regeocode) {
                var address = result.regeocode.formattedAddress;
                console.log(address);
                document.getElementById('address').value = address;
            }
        });
    }
    setTimeout(function(){
        regeoCode()
	 },3000)

    document.getElementById("regeo").onclick = regeoCode;
</script>
</body>
</html>
```