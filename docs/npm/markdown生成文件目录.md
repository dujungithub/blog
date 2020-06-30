# markdown生成文件目录

```cmd
//任意文件目录打开cmd

npm i doctoc -g
```

```cmd
//需要生成md文件目录的文件夹，cd 打开 cmd

doctoc 文件夹中已有的文件.md
```

测试效果如下：只是在当前md文件头部增加目录导航，类似侧边栏的功能

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [vue组件之间调用方法](#vue%E7%BB%84%E4%BB%B6%E4%B9%8B%E9%97%B4%E8%B0%83%E7%94%A8%E6%96%B9%E6%B3%95)
- [父组件调用子组件的方法](#%E7%88%B6%E7%BB%84%E4%BB%B6%E8%B0%83%E7%94%A8%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E6%96%B9%E6%B3%95)
  - [子组件调用父组件方法（方式一）](#%E5%AD%90%E7%BB%84%E4%BB%B6%E8%B0%83%E7%94%A8%E7%88%B6%E7%BB%84%E4%BB%B6%E6%96%B9%E6%B3%95%E6%96%B9%E5%BC%8F%E4%B8%80)
  - [子组件调用父组件方法（方式二）](#%E5%AD%90%E7%BB%84%E4%BB%B6%E8%B0%83%E7%94%A8%E7%88%B6%E7%BB%84%E4%BB%B6%E6%96%B9%E6%B3%95%E6%96%B9%E5%BC%8F%E4%BA%8C)
  - [子组件间方法调用](#%E5%AD%90%E7%BB%84%E4%BB%B6%E9%97%B4%E6%96%B9%E6%B3%95%E8%B0%83%E7%94%A8)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# vue组件之间调用方法

# 父组件调用子组件的方法