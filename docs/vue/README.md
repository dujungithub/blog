![layui](../vue/assets/vue_logo.png)



[< 返回首页](/)

| 栏目 |    更新日期 |栏目 |    更新日期 |
| :----: | :----: |:----: |:----: |
| [node](/node/) | 2020-06-04| [jquery](/jquery/) | 2020-06-04|
| [vue](/vue/) | 2020-06-04|
| [layui](/layui/) | 2020-06-04|
| [nginx](/nginx/) | 2020-06-04|


# 笔记

1. 生成MD	

   ```
   echo > readme.md
   ```

2. 生成package.json

   ```
   npm init -y
   
   //或者有配置完善的package.json ，直接npm i 即可安装项目
   ```

3. 创建项目

   ```
   1//启动GUI
   vue ui
   
   2//cmd创建
   npm i
   
   ps:界面视窗操作，笔记使用cmd操作一遍
   ```



### 命令行创建 `vue/cli` 项目 `vue create my-demo`

1. cmd

   ```cmd
   G:\2020-框架demo\vue-cli4>node -v
   v12.16.3
   
   G:\2020-框架demo\vue-cli4>npm -v
   6.14.5
   
   G:\2020-框架demo\vue-cli4>vue/cli -V
   @vue/cli 4.3.1
   
   1. //全局安装 vue-cli  (已安装过cli,不用再次安装了)
   G:\2020-框架demo\vue-cli4>npm i -g @vue/cli
   + @vue/cli@4.4.4
   
   2. //创建项目my-demo
   G:\2020-框架demo\vue-cli4>vue create my-demo
   
   //选择依赖 （router,vuex,less,babel,eslint）
   //选择包工具  Use Yarn / Use NPM
   
   3. //启动项目
   G:\2020-框架demo\vue-cli4>cd my-demo
   G:\2020-框架demo\vue-cli4\my-demo>npm run serve
   > my-demo@0.1.0 serve G:\2020-框架demo\vue-cli4\my-demo
   > vue-cli-service serve
   
   
     App running at:
     - Local:   http://localhost:8081/
     - Network: http://192.168.70.128:8081/
   
     Note that the development build is not optimized.
     To create a production build, run npm run build.
   ```

   