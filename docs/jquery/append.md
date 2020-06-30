```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>js中常用追加元素的几种方法</title>
		<link rel="stylesheet" href="css/rest.css" />
		<style>
			.container {
				width: 1200px;
				padding: 10px;
				margin: 50px auto;
				border: 1px solid lightcoral;
			}
			#wrap{
				border: 1px solid lightseagreen;
			}			
			.container p{
				height: 30px;
				line-height: 30px;
			}
			.btn-group{
				margin-top: 20px;
			}
			button{
				width: 80px;
				height: 32px;
				margin-right: 10px;
				line-height: 32px;
				text-align: center;
				border: 0px;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div id="wrap">
				<p class="first">我是第一个子元素</p>
				<p class="second">我是第二个子元素</p>
			</div>
			<div class="btn-group">
				<button class="append">append</button>
				<button class="appendTo">appendTo</button>
				<button class="prepend">prepend</button>
				<button class="prependTo">prependTo</button>
				<button class="after">after</button>
				<button class="before">before</button>
				<button class="appendChild" onclick="appChild()">appendChild</button>
				<button class="insertAfter">insertAfter</button>
				<button class="insertBefore">insertBefore</button>
			</div>
			
		</div>
		
	</body>
</html>
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
<script>
	$(function(){
		//append(),在父级最后追加一个子元素
		$(".append").click(function(){
			$("#wrap").append("<p class='three'>我是子元素append</p>");
		});
		
		//appendTo(),将子元素追加到父级的最后
		$(".appendTo").click(function(){
			$("<p class='three'>我是子元素appendTo</p>").appendTo($("#wrap"));
		});
		
		//prepend(),在父级最前面追加一个子元素
		$(".prepend").click(function(){
			$("#wrap").prepend("<p class='three'>我是子元素prepend</p>");
		});
		
		//prependTo(),将子元素追加到父级的最前面
		$(".prependTo").click(function(){
			$("<p class='three'>我是子元素prependTo</p>").prependTo($("#wrap"));
		});
		
		//after(),在当前元素之后追加（是同级关系）
		$(".after").click(function(){
			$("#wrap").after("<p class='siblings'>我是同级元素after</p>");
		});
		
		//before(),在当前元素之前追加（是同级关系）
		$(".before").click(function(){
			$("#wrap").before("<p class='siblings'>我是同级元素before</p>");
		});
		
		//insertAfter(),将元素追加到指定对象的后面（是同级关系）
		$(".insertAfter").click(function(){
			$("<p class='three'>我是同级元素insertAfter</p>").insertAfter($("#wrap"));
		});
		//insertBefore(),将元素追加到指定对象的前面（是同级关系）
		$(".insertBefore").click(function(){
			$("<p class='three'>我是同级元素insertBefore</p>").insertBefore($("#wrap"));
		});
	});	
	
	//appendChild(),在节点的最后追加子元素
	function appChild(){
			// 创建p节点
			var para=document.createElement("p");
			// 创建文本节点
			var node=document.createTextNode("我是子集appendChild新段落。");
			// 把文本节点添加到p节点里
			para.appendChild(node);
			 
			// 查找div1
			var element=document.getElementById("wrap");
			// 把p节点添加到div1里
			element.appendChild(para);
	}
</script>
```

