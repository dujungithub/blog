[X-BUILD](https://github.com/codexu/x-build)一套基于[Webpack](https://webpack.docschina.org/concepts/)(v4.21.0)快速搭建H5场景开发环境的脚手架



E:\workspaces\2018--------------testdemo\X-Build>**npm -v**
5.6.0

E:\workspaces\2018--------------testdemo\X-Build>**npm install -g x-build-cli**
C:\Users\dujun-zhcw\AppData\Roaming\npm\x -> C:\Users\dujun-zhcw\AppData\Roaming\npm\node_modules\x-build-cli\bin\x-build.js
C:\Users\dujun-zhcw\AppData\Roaming\npm\x-build -> C:\Users\dujun-zhcw\AppData\Roaming\npm\node_modules\x-build-cli\bin\x-build.js

+ x-build-cli@1.3.16
  added 182 packages in 85.491s

E:\workspaces\2018--------------testdemo\X-Build>**x-build --version**
1.3.16

E:\workspaces\2018--------------testdemo\X-Build>**x-build create demo1**


X-BUILD-CLI v1.3.16

? 默认端口:  8008
? 移动端开发? Yes
? 选择包管理器:  npm
? 选择安装插件:  (Press <space> to select, <a> to toggle all, <i> to invert sele? 选择安装插件:  normalize.css

---------------------------------------

√ 模板文件下载完成.

E:\workspaces\2018--------------testdemo\X-Build\demo1>**npm run serve**

> demo1@0.0.0 serve E:\workspaces\2018--------------testdemo\X-Build\demo1
> rimraf dist & webpack-dev-server --config build/webpack.dev.js

i ｢wds｣: Project is running at http://localhost:8080/
i ｢wds｣: webpack output is served from /
i ｢wdm｣: Hash: 54fffef34096e6bd003a
Version: webpack 4.26.0
Time: 3413ms
Built at: 2018-11-20 15:29:59
​             Asset       Size  Chunks             Chunk Names
bundle.54fffef3.js    976 KiB  bundle  [emitted]  bundle
​        index.html  438 bytes          [emitted]
Entrypoint bundle = bundle.54fffef3.js
i ｢wdm｣: Compiled successfully.



E:\workspaces\2018--------------testdemo\X-Build\demo1>npm run build

> demo1@0.0.0 build E:\workspaces\2018--------------testdemo\X-Build\demo1
> rimraf dist && webpack --config build/webpack.prod.js

Hash: 5d266dc4e4ead031c36e
Version: webpack 4.26.0
Time: 8002ms







https://segmentfault.com/a/1190000006198621



