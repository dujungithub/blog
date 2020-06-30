![An image](./logo.jpg)



| 栏目 |    更新日期 |栏目 |    更新日期 |
| :----: | :----: |:----: |:----: |
| [node](/node/) | 2020-06-04| [jquery](/jquery/) | 2020-06-04|
| [vue](/vue/) | 2020-06-04| [js](/js/) | 2020-06-28|
| [layui](/layui/) | 2020-06-04| [npm](/npm/) | 2020-06-28|
| [nginx](/nginx/) | 2020-06-04| [important](/important/) | 2020-06-28|

## 侧边栏配置

::: tip README
栏目所在文件夹下所有md文件都需要正确填写才可改变侧边栏的展示
README.md 是当前文件夹入口文件，第一个展示
其余.md文件中，第一行定义一个# ，侧边栏标题由默认路径展示为#号后面填写的，即默认第一行
定义2个## ，侧边栏将出现二级栏目标题

侧边栏展示顺序：.md文件目录顺序

:::

```
禁用当前页面侧边栏
---
sidebar: false
---
```



## 图片使用

截图拖拽到当前编辑器，产生的链接，直接定义为相对当前文件的路径即可

```
![1591241165283](G:\新-dujun-博客\vuepress\docs\layerUi\assets\1591241165283.png)
或者
![An image](assets/1591241165283.png)

修改为  []自定义文件名称
![layui](../layui/assets/1591241165283.png)
```

## 目录代码

[[toc]]

:tada: :100:

```text
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

::: tip 启动
docsify   docsify serve

hexo  hexo server
:::


``` js
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
::: tip 导入js文件
输入<<< @/docs/.vuepress/config.js{3} 高亮行号
:::
<<< @/docs/.vuepress/config.js{3}


vuepress	安装

```bash
# 全局安装

cnpm install -g vuepress

2.然后把VuePress仓库克隆到你的电脑

git clone git@github.com:docschina/vuepress.git
```

```bash
#任意项目文件夹 创建一个 markdown 文件
echo '# Hello VuePress' > README.md
echo '这里是内容' > 123.md
```

> 

```
#快速初始化package.json
npm init -y
```

启动项目开始编写文档了：

```bash
yarn docs:dev # 或 npm run docs:dev
```

要生成静态资源，请运行：

```bash
yarn docs:build # 或 npm run docs:build
```

构建的文件会位于 `docs/.vuepress/dist` 中

#### 每个文件夹下面的README.MD相当于路由器，编写跳转链接列表等等:tada:

类似docsify结构

[Home](/) <!-- 将根目录下的 README.md 发送给用户 -->
[foo](/foo/) <!-- 将 foo 目录下的 README.md 发送给用户 -->
[foo 标题锚点](/foo/#heading) <!-- 跳转到 foo 目录下的 README.md 文件中的特定锚点位置 -->
[foo - one](/foo/one.html) <!-- 追加 .html -->
[foo - two](/foo/two.md) <!-- 或者追加 .md -->




## 安装 markdown-it



```
npm i markdown-it --save
```

## 安装 vuepress-plugin-auto-sidebar :100:

**vuepress-plugin-auto-sidebar** 是用于为 vuepress 自动生成侧边栏[分组](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/questions.html#_1-它的作用是生成侧边栏吗？)的插件。

```bash
npm i vuepress-plugin-auto-sidebar -D
```

```js
// **/.vuepress/config.js
module.exports = {
  plugins: {
    "vuepress-plugin-auto-sidebar": {}
  }
}
```