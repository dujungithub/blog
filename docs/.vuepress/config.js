module.exports = {
  title : 'Du-vLog',  // 设置网站标题
  description : 'Vuepress-dujun',
  //host : '192.168.70.128',
  //port : 8080,
  base : '/',
  //base : '/vuepress/',//升级上线路径，升级到sayfocus上面时
  head : [
    ['link', { rel: 'icon', href: 'https://vuepress.docschina.org/logo.png' /*href: '/logo.jpg'*/ }]
  ],
  markdown : {
    toc: { includeLevel: [1,2,3,4] },//配置目录级别，当有1,2,3,4个#号的标题都会出现在列表内
	/*config: md => {
      md.set({ breaks: true });
	  md.use(require("markdown-it-anchor"));
      md.use(require('markdown-it-table-of-contents'));
    },*/
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
	  {
        text: '笔记',
        items: [
          { text: 'node', link: '/node/' },
          { text: 'vue', link: '/vue/' },
		  { text: 'layui', link: '/layui/' },
		  { text: 'nginx', link: '/nginx/' },
		  { text: 'jquery', link: '/jquery/' },
		  { text: 'npm', link: '/npm/' },
		  { text: 'js', link: '/js/' },
		  { text: 'Modernizr.wiki', link: '/Modernizr.wiki/' },
        ]
      },
	  { text: '文档', link: '/important/' },
      { text: '主页', link: 'http://sayfocus.com' },
    ],
	/*sidebar: [
		{
			title: '开发指南',
			collapsable: false, //是否展开
		},
		['./guide/install/install','安装'],
		['./guide/started/started','快速上手'],
		{
			title: '组件',
			collapsable: false
		},
		['./guide/icon/icon','icon'],
    ],
	sidebar: 'auto',
	'/': {
       sidebar: 'auto'
    },*/
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {}
  }
}