```
<!DOCTYPE html> 
<head>
	<meta charset="UTF-8">
	<title>map</title>
</head>
<body>
	<img src="https://image.zhangxinxu.com/image/study/s/s256/mm1.jpg" usemap="#Map" width="256" height="191">
	<map id="mapArea" name="Map">
		<area shape="rect" coords="20,20,80,80" data-rel="矩形">
		<area shape="circle" coords="200,50,50" href="#circle" data-rel="圆形">
		<area shape="poly" coords="150,100,200,120,180,130,190,180,150,150,100,160,140,120,100,110" href="#poly" data-rel="多边形">
	</map>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
	$("#mapArea area").hover(function(){
		console.log($(this).attr("data-rel"));
	});
</script>
</HTML>
```

