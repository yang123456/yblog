---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 首页
# titleTemplate: 选项卡描述
editLink: true
lastUpdated: true
hero:
  name: "程序小兵的博客"
  text: "专注于知识的分享,探索"
  tagline: "简单、强大、真诚、愿做你编程路上的小伙伴"
  image:
    src: /images/index/burglar.svg
    alt: Chrome 浏览器插件
  actions:
    - theme: brand
      text: 技术文摘
      link: /markdown-examples
    - theme: alt
      text: 天涯寻知
      link: /tianyaxunzhi
    - theme: brand
      text: 疑难杂症
      link: https://18055975947.github.io/extension/
      target: _blank
      rel: external
    - theme: alt
      text: 面试宝典
      link: /interview
      rel: external

features:
  - title: 技术文摘能获取什么？
    icon:
      src: /ext.svg
    details: 对互联网技术文档中的关键信息进行提取和概括，以简短的形式呈现原文的主要内容。
  - title: 天涯寻知能让你找到些什么？
    icon:
      src: /develop.svg
    details: 能让你在知识的大海中找到也许你感兴趣的内容。
  - title: 疑难杂症能为你解决些什么？
    icon:
      src: /ext-2.svg
    details: 也许你能在这里找到你对于某些问题久久不能得到的答案。
  - title: Vue 开发插件
    icon:
      src: /vue.svg
    details: 是一个使用 Vue.js 框架开发的 Chrome 插件，旨在为开发者展示如何使用 Vue.js 构建强大的浏览器扩展。
    link: https://juejin.cn/post/7330227149177028617
    linkText: 查看详情
  - title: React 开发插件
    icon:
      src: /react.svg
    details: 是一个使用 React.js 框架开发的 Chrome 插件，旨在为开发者展示如何使用 React.js 构建强大的浏览器扩展。
    link: https://juejin.cn/post/7349936384512213027
    linkText: 查看详情
  - title: 实用插件推荐
    icon:
      src: /tj.svg
    details: 推荐一些对前端开发来说实用的 Chrome 插件。
    link: https://juejin.cn/post/7327893130572824611
    linkText: 查看详情
---

## 首页模块 MD 文档

MD 文件

下面是添加 `style` 标签和引入 `md` 文件

<style module>
article>img{
  height: 48px;
}
</style>



<!--@include: ./components/test.md-->



<p style="display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;">
  <a href="https://github.com/vuejs/vue" target="_blank">
    <img src="https://img.shields.io/badge/vue-3.2.36-brightgreen.svg" alt="vue3">
  </a>
  <a href="https://gitee.com/wocwin/t-ui-plus/stargazers" target="_blank">
    <img src="https://gitee.com/wocwin/t-ui-plus/badge/star.svg?theme=dark" alt="t-ui-plus">
  </a>
   <a href="https://github.com/wocwin/t-ui-plus/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/wocwin/t-ui-plus.svg" alt="t-ui-plus">
  </a>
   <a href="https://www.npmjs.com/package/@wocwin/t-ui-plus" target="_blank">
      <img alt="npm" src="https://img.shields.io/npm/v/@wocwin/t-ui-plus.svg" />
    </a>
</p>