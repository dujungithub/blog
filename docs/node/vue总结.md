```
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">

	'什么是单页面应用'

		通俗点来讲就是在整个项目里浏览器至始至终没有刷新、整个项目就一个.html文件、
		里面所有的页面都是通过组件来进行路由例如.vue组件、并通过ajax请求数据来实现数据交互、因为整个项目就一个
		.html页面所以就叫单页面应用

	'单页面应用的优缺点'

		优点
			
			01、用户体验好、快，内容的改变不需要重新加载整个页面，web应用更具响应性和更令人着迷。
			02、基于上面一点，SPA(单页面应用)相对对服务器压力小。
			03、良好的前后端分离。SPA(单页面应用)和RESTful(软件架构)架构一起使用，后端不再负责模板渲染、输出页面工作，web前端和各种移动终
			端地位对等，后端API通用化。
			04、对前端人员javascript技能要求更高，促使团队技能提升。
		缺点：
			
			01、不利于SEO。
			02、初次加载耗时相对增多。
			03、导航不可用，如果一定要导航需要自行实现前进、后退。
			04、对开发人员技能水平、开发成本高。

	'什么是Vue.js ?'

		01. Vue.js 是用于构建交互式的 Web 界面的库。
		02. Vue.js 提供了 MVVM 数据绑定和一个可组合的组件系统，具有简单、灵活的 API
		03. Vue.js 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合

	'Vue.js 特点'

		01. 简洁： HTML 模板 + JSON 数据，再创建一个 Vue 实例，就这么简单。
		02. 数据驱动： 自动追踪依赖的模板表达式和计算属性。
		03. 组件化： 用解耦、可复用的组件来构造界面。
		04. 轻量： ~24kb min+gzip，无依赖。
		05. 快速： 精确有效的异步批量 DOM 更新。
		06. 模块友好： 通过 NPM 或 Bower 安装，无缝融入你的工作流。
		07. 可扩展的数据绑定机制
		08. 原生对象即模型
		09. 简洁明了的 API
		10. 组件化 UI 构建
		11. 多个轻量库搭配使用

	'Vue.js 推荐开发环境'

		01. Node.js javascript运行环境、不同系统不能直接运行各种编程语言Runtime类似于各种国际上的同声传译
		02. npm node.js下的包管理器、类似于Mac下的Homebrew
		03. webpack Vue的组件都是通过.vue或者像微信小程序.wxml和.wxss等定义的组件都都无法被浏览器直接解析、需要编译或打包成.js文件、相信大家一定用过.less
		04. vue-cli 用来生成vue的模板工程、相当于按照设计好的图来盖房子、微信小程序也是一开始也会以可视化界面的方式问你是否是否创建示例工程、其实就是封装了类似的脚手架

	'Vue 计算机CMD基本命令'  

		01. d: // 进入d盘  c、e、f盘同理
		02. ping www.lulinxueyuan.com  // 用于查看不同的网络是否通畅
		03. dir // 命令显示当前目录下的文件及文件夹
		04. cd // 进入目录命令
		05. cd..  //  返回上一级目录
		06. ipconfig/all  // 可以帮助我们本地计算机网络连接情况如ip地址等

	'Vue 安装Chrome调试工具'

		Vue Devtools

	'Vue 安装'

		01. 安装Node.js  Node.js安装包及源码下载地址为：https://nodejs.org/en/download/、64 位安装包下载地址 : https://nodejs.org/dist/v4.4.3/node-v4.4.3-x64.msi
		02. 检测一下node版本，在cmd命令框框内输入命令  node --version 查看node是否安装成功
		03. 查看npm版本 输入命令 npm -v、npm版本需要大于3.0、如果当前版本比较低可以升级它 cnpm install npm -g
		'提示' 在这里没有安装淘宝cnpm镜像的同学可以安装一下npm install -g cnpm --registry=https://registry.npm.taobao.org

		cnpm 和 npm有什么区别：因为npm安装插件是从国外服务器下载，受网络影响大，可能出现异常，如果npm的服务器在中国就好了，所以淘宝团队干了这事

		npm 可以安装node插件

		cnpm使用的是淘宝网的镜像

		04. 安装vue  cnpm install vue
		05. Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页面应用
			05.01 cnpm install --global vue-cli  // 安装vue-cli脚手架
			05.02 vue init webpack my-project    // 创建一个基于webpack的项目
			05.03 // 这里需要进行一些配置，默认回车即可
			05.04 cd my-project // 进入项目
				05.05 cnpm install  // 安装相关项目依赖
			05.06 cnpm run dev  // 运行项目  http://locahost:8080  打开项目

	'Vue 目录结构'

		├── build/          最终发布的代码存放位置
	    ├── config/         配置目录，包括端口号等。我们初学可以使用默认的
	    ├── node_modules/   npm 加载的项目依赖模块
	    ├── src/            这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件
	    │   ├── assets/     放置一些图片，如logo等
	    │   ├── components/ 目录里面放了一个组件文件，可以不用
	    │   ├── App.vue/    项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。
	    │   ├── main.js/    项目的核心文件
	    ├── static/         静态资源目录，如图片、字体等
	    ├── test/           初始测试目录，可删除
	    ├── index.html      首页入口文件，你可以添加一些 meta 信息或同统计代码啥的
	    ├── package.json    项目配置文件
	    ├── README.md       项目的说明文档，markdown 格式

	'Vue 模板语法'

		<div id="app">
			<p>{{ name }}</p>
		</div>

		<script>
		new Vue({
			el:'#app',
			data:{
				name:'小强'
			}
		})
		<script>

	'Vue 生命周期'

		'什么是Vue的生命周期'

			01. Vue实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、卸载等一系列过程，我们称这是Vue的生命周期。通俗说就是Vue实例从创建到销毁的过程，就是生命周期
			02. 在Vue的整个生命周期中，它提供了一系列的事件，可以让我们在事件触发时注册js方法，可以让我们用自己注册的js方法控制整个大局，在这些事件响应方法中的this直接指向的是vue的实例


		 new Vue({
            el:'#app',
            data:{
                title:'生命周期'
            },
            beforeCreate:function(){   //  发音：比佛儿亏唉特
                console.log('01. 在实例初始化之后，数据监听和事件配置之前被调用');
            },
            created:function(){  // 发音：亏唉忒特
                console.log('02. 实例已经创建完成之后被调用');  // 数据请求的方法可以放在这里
            },
            beforeMount:function(){  // 发音：比佛儿忙特
                console.log('03. 开始挂载编译生成的HTML到对应的钩子函数');
            },
            mounted:function(){  // 发音：忙忒特
                console.log('04. 将编译好的html挂载到页面完成后执行的钩子函数');  // 初始数据的dom渲染可以放在这里
            },
            beforeUpdate:function(){  //  发音：比佛儿啊渤嘚特
                console.log('05. 数据更新前调用，可以在这个钩子中进一步地更改状态');
            },
            updated:function(){  // 发音：啊渤嘚特
                console.log('06. 数据被更新后调用');
            },
            beforeDestroy:function(){  // 发音：比佛儿第四拽
                console.log('07. 实例销毁之前调用。在这一步，实例仍然完全可用');
            },
            destroyed:function(){  // 发音：第四拽唉的
                console.log('08. 实例销毁之后调用。')
            }

        })

	'Vue 常用指令'

		指令 (Directives) 是带有 v- 前缀的特殊属性。指令属性的值预期是单个JavaScript表达式。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM

		v-if( 显示与隐藏 )
		v-show

			v-if和v-show的区别是v-if是做了一个判断是否加载他、v-show是相当于css一样给了一个显示和隐藏
			v-if: 判断是否加载，可以减轻服务器的压力，在需要时加载。
			v-show：调整css dispaly属性，可以使客户端操作更加流畅。

		v-text( 读取文本不能解析html标签 )

			{{ name }}  // 这种模板语法当js代码报错的时候或者网速慢的时候  用户界面显示出来的东西就是{{ name }} 体验不好

		v-html( 可以解析html标签 )


		v-bind( 属性绑定 )
			语法 : v-bind:value、v-bind:src、v-href:href、v-bind:class、v-bind:id

			简写 ：:value、:src、:href、:class、:id

		v-for( 循环 )
			然后在模板中用v-for循环出来，需要注意的是，你需要那个html标签循环，v-for就写在那个上边

			<li v-for="item in array"></li>

		v-on( 事件绑定 )

			语法 : v-on:click="say"  // 简洁语法：@click="say"
			简写 : @click="say"、 @mouseover="say"、 @mouseout="say"、@dblclick="say"

			<div id="app">
				<p v-on:click="say"></p>
			</div>

			<script>
				new Vue({
					el:'#app',
					data:{

					},
					methods:{  // 事件需要在methods方法中声明  读音：迈谁值
						say:function(){
							console.log('事件触发')
						}
					}
				})
			<script>


			熟练使用Vue、Vue-cli、Vue-Directives、Vue-Router、Vue-axios、webpack、elementUI进行项目开发

			Vuex、ES6、

		v-model( 数据绑定 )

			修饰符：

				<input type="text" v-model.lazy="title">    <!-- 当鼠标失去焦点时候才加载、取代 input 监听 change 事件 -->
				<input type="text" v-model.number="title">  <!-- 只绑定数字、不绑定英文字母、必须先输入数字 -->
				<input type="text" v-model.trim="title">    <!-- 去掉首位空格 -->

		v-once( 加载一次 如果用到事件中就是事件只执行一次 )

			<p v-once>{{ title }}</p>  <!-- 添加v-once指令后只是渲染一次 -->
			<input type="text" v-model="title">
			<p>{{ title }}</p>
			注释：第一个p标签只是渲染一次、第二个p标签会在后期用户输入时候改变可以渲染多次

		v-cloak( 防闪烁 )

			举例: <p v-cloak>当页面渲染完成后才显示</p>
			注释：渲染完成后才显示

		v-pre( 把标签内部的元素原位输出 )  pre就是原样输出
			举例：<div v-pre>{{message}}</div>
			注释：没有添加v-pre指令时浏览器输出内容是编译后的message值、但是添加v-pre指令后输出的就是原始的值也就是直接输出{{message}}、也可以理解为跳过编译

	'Vue 自定义指令'

		'Vue 自定义属性的钩子函数'

	'Vue 路由'

		'简介'

			由于Vue在开发时对路由支持的不足，后来官方补充了vue-router插件，它在Vue的生态环境中非常重要，在实际开发中只要编写一个页面就会操作vue-router。要学习vue-router就要先知道这里的路由是什么？这里的路由并不是指我们平时所说的硬件路由器，这里的路由就是SPA（单页应用）的路径管理器。再通俗的说，vue-router就是我们WebApp的链接路径管理系统、在简介一点就是Vue.js 路由允许我们通过不同的 URL 访问不同的内容

		'疑问'

			有的同学可能会有疑虑，为什么我们不能像原来一样直接用<a></a>标签编写链接哪？因为我们用Vue作的都是单页应用，就相当于只有一个主的index.html页面，所以你写的<a></a>标签是不起作用的，你必须使用vue-router来进行管理

		'解读router/index.js文件'

			import Vue from 'vue'   //引入Vue
			import Router from 'vue-router'  //引入vue-router
			import Hello from '@/components/Hello'  //引入根目录下的Hello.vue组件

			 
			Vue.use(Router)  //Vue全局使用Router
			 
			export default new Router({
			  routes: [              //配置路由，这里是个数组
			    {                    //每一个链接都是一个对象
			      path: '/',         //链接路径
			      name: 'Hello',     //路由名称
			      component: Hello   //对应的组件模板
			    }
			  ]
			})

			//  组件名称Vue不可以使用内置的或保留的HTML元素作为组件ID

		<router-link to="/jiaxin">Go</router-link> // 通过router-link来进行导航
		<router-view/>  // 路由匹配到的组件将渲染在这里

		'Vue 参数传递'

			'Vue Name参数传递'

			'Vue :to参数传递'

				传递: <li><router-link :to="{name:'video',params:{username:'anyong'}}">视频教程</router-link></li>
				接收: <p>{{ $route.params.username }}</p>

	'Vue 组件参数传递'

		'父子'

			'父组件'

				<router-link :to="{name:i.src,params:{username:msg}}">{{ i.name }}</router-link>

			'子组件'

				<a>{{ $route.params.username }}</a>

		'父子'

			'父组件'

				<template>
				    <div>
				        <div>父组件</div>
				        <child :message="parentMsg"></child>
				    </div>
				</template>
				<script>
					import child from './components/caiwu'  //引入child组件
					export default {
					    data() {
					            return {
					                parentMsg: 'a message from parent'  //在data中定义需要传入的值
					            }
					        },
					        components: {
					            child
					        }
					}
				</script>

			'子组件'

				<template>
				    <div>
				        <div>接收到父组件的值：{{ message }}</div>
				    </div>
				</template>

				<script>
					export default {
					    props: {
					        message: String  // 定义传值的类型
					    }
					}
				</script>


		'子父'


			01. 定义公共桥梁文件

				import Vue from 'Vue'   // 引入注册Vue组件
				export default new Vue  // 输出Vue实例

			02. import bus from '../assets/javascript/eventBus'  // 在父子组件中都引入eventBus组件
			03. 父组件

					 mounted:function(){
					    var that = this;
					    bus.$on('postParentMsg',function(msg){   //  监听当前实例上的自定义事件
					      that.msg = msg;
					    })
					  }

			04. 子组件

					methods:{
					    onClickParentMsg:function(){
					      bus.$emit('postParentMsg','your!');   //  触发当前实例上的事件。附加参数
					    }
					}

		'兄弟'

			'兄':
				localStorage.setItem('item', '我是参数');

			'弟'
				localStorage.getItem('item');

	'Vue 组件通信'

	'Vue 数据交互'

		'vue-resource'
			简介

				vue-resource是Vue.js的一款插件，它可以通过XMLHttpRequest或JSONP发起请求并处理响应。也就是说，$.ajax能做的事情，vue-resource插件一样也能做到，而且vue-resource的API更为简洁

			发音 - 瑞搜思

			用法 - 具体就不说了、因为现在vue2.0已经不在更新vue-resource这个插件了

		'vue axios'
			简介

				vue2.0之后，就不再对vue-resource更新，而是推荐使用axios。基于 Promise 的 HTTP 请求客户端，可同时在浏览器和 Node.js 中使用

			安装 axios

				01. cnpm install axios --save  // 直接使用cnpm install来进行安装
				02. import axios from 'axios'  // 在要使用axios的地方引入axios
					'举例'

						<script>
							import axios from 'axios'
							export default{

							}
						<script>

				03. 请求服务端获取数据

					'axios.get 方式'

						<script>
							import axios from 'axios'
							export default{
								data (){

								},
								created : function (){  // created是一个生命周期钩子函数、就是一个vue实例被生成后要调用的这个函数
									axios.get('http://139.196.5.252/testsandbox/VueAxios/get_vue.php?account=18518666496&password=666496')  // 问号后面是要传送的参数
									.then( reponse => {   //  请求成功后的函数
						                console.log(reponse)
						            })
						            .catch( error=> {	  //  请求失败后的函数
						                console.log(error)
						            })
								}
							}
						<script>

					'axios.post 方式'
						
						注释：vue 集成axios之后，发送的post请求默认为payload方式。 如果想改为正常的方式，需要增加headers头，并且将发送是数据json格式改为 querystring的方式,不然会导致服务端复发接收到数据的问题

						01. cnpm install qs  // 首先安装qs依赖
						02. 导入依赖import qs from 'qs'   // 引入qs模块是为了序列化传送的参数

						<script>
							import axios from 'axios'  // 引入axios
							import qs from 'qs'	       // 引入qs
							export default{
								data (){

								},
								created : function (){  // created是一个生命周期钩子函数、就是一个vue实例被生成后要调用的这个函数
									var postData = {
						                account:18518666496,
						                password:666496
						            };
									axios.post('http://139.196.5.252/testsandbox/VueAxios/post_vue.php',
										qs.stringify({'data':JSON.stringify(postData)}))
									.then( reponse => {   //  请求成功后的函数
						                console.log(reponse)
						            })
						            .catch( error=> {	  //  请求失败后的函数
						                console.log(error)
						            })
								}
							}
						<script>

					'数据渲染'

						<template>
							<div v-for="i in testdata">  // 在这里进行数据图片渲染
				                 <img v-bind:src="i.conmmimages"/>
				            </div>
						<template>

						<script>
							import axios from 'axios'  // 引入axios
							import axios from 'qs'	   // 引入qs
							export default{
								data (){
									return : {
										testdata:[]
									}
								},
								created : function (){  // created是一个生命周期钩子函数、就是一个vue实例被生成后要调用的这个函数
									var postData = {
						                account:18518666496,
						                password:666496
						            };
									axios.post('http://139.196.5.252/testsandbox/taobao/post_vue.php',qs.stringify({'data':JSON.stringify(postData)}))
									.then( reponse => {   //  请求成功后的函数
						                console.log(reponse.data)  // 这里是服务端返回的数据
						                this.testdata = reponse.data.commodity; // 取到服务端返回数组列表的图片
						            })
						            .catch( error=> {	  //  请求失败后的函数
						                console.log(error)
						            })
								}
							}
						<script>

'怎么在别的电脑上看项目呢？'

	npm install   通过安装依赖

	npm run dev		运行项目

'怎么把  XXX.vue 整理成网页格式？ 通过打包'

	npm run build   //打包

// 部署到自己的服务器  在公众号里面用http的形式链接网页




	'Vue 跨域问题'

	'Vuex'

	'Vue 第三方插件使用、如轮播、Echarts、Element等'

	'Vue 自己封装插件上传使用'

	https://www.cnblogs.com/taylorchen/p/6083099.html   vue项目 管理系统

	</script>
</head>
<body>
	
</body>
</html>

```