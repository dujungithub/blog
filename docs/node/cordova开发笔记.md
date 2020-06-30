# cordova 

> cordova  project

## cordova install 

node目录下
	npm install -g cordova

自定义目录下：
	cordova create MyApp
	
定位到新建目录下cmd查看可添加平台
	cordova platform

添加
	cordova platform add android
	
查看平台状态
	cordova platform ls
	
运行当前
	cordova run andriod

https://blog.csdn.net/love4399/article/details/77164500
https://blog.csdn.net/qq_36663951/article/details/79002445
运行之前准备：
	java JDK
	android SDK   http://www.androiddevtools.cn/

java jdk 安装参考
	http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html


android sdk安装参考
	https://blog.csdn.net/love4399/article/details/77164500

	ANDROID_HOME   D:\SDK\android-sdk-windows
	path	%ANDROID_HOME%\platform-tools
	path	%ANDROID_HOME%\tools
	
	配置完成 全局cmd中输入adb回车检测
	
	项目目录下运行cordova run android 检测
	
	***尽量全的安装Android SDK Manager 里面的配置
	（各种安卓引擎）

cradle 配置
	https://www.jianshu.com/p/60e98587ae89
	https://www.cnblogs.com/linkstar/p/7899191.html
	安装http://services.gradle.org/distributions/
	GRADLE_HOME 
	path

	cmd中 gradle -v即可


PS E:\workspaces\2017--------------testdemo\cordova\MyAppAndroid> keytool -genkey -v -keystore release-key.keystore -alias cordova-demo -keyalg RSA -keysize 2048 -val
idity 10000

输入密钥库口令:123456
您的名字与姓氏是什么?
[Unknown]:  du
您的组织单位名称是什么?
[Unknown]:  zhcw
您的组织名称是什么?
[Unknown]:  h5
您所在的城市或区域名称是什么?
[Unknown]:  bj
您所在的省/市/自治区名称是什么?
[Unknown]:  bj
该单位的双字母国家/地区代码是什么?
[Unknown]:  bj

正在为以下对象生成 2,048 位RSA密钥对和自签名证书 (SHA256withRSA) (有效期为 10,000 天):
         CN=du, OU=zhcw, O=h5, L=bj, ST=bj, C=bj
输入 <cordova-demo> 的密钥口令
        (如果和密钥库口令相同, 按回车):
[正在存储release-key.keystore]

资源文件项目目录
E:\workspaces\2017--------------testdemo\cordova\MyAppAndroid\www
E:\workspaces\2017--------------testdemo\cordova\MyAppAndroid\res

https://www.cnblogs.com/a418120186/p/5856371.html

打包成功后的apk文件目录

E:\workspaces\2017--------------testdemo\cordova\MyAppAndroid\platforms\android\app\build\outputs\apk\debug


命令

打包apk    cordova build android
页面浏览   cordova run borwser

cordova install android //将编译好的应用程序安装到模拟器上。
cordova emulate android //在模拟器上运行（前提是创建好AVD）
cordova serve android //在浏览器运行
cordova build android //打包cordova项目到android平台。
cordova run android //通过USB直接安装到真机（该语句已经包括了build命令）