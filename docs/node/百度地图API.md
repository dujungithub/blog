```HTML

<script src="http://api.map.baidu.com/api?v=2.0&ak=QXv4SinnM2UPzXMwir1qtq5L"></script>
<script type="text/javascript">
  // 百度地图API功能
  function getCityFn(){
    var point = new BMap.Point(116,39);
    var geoc = new BMap.Geocoder();
    geoc.getLocation(point, function(rs){
      var addComp = rs.addressComponents;
      console.log(addComp);
        document.getElementById("showCity").innerHTML = addComp.province+"省"+addComp.city+" 市"+addComp.district+" 区";
    });
  };
</script>
```

账号  DBSODD  du ** ** ** du



