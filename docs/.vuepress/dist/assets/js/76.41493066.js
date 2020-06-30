(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{446:function(t,e,a){"use strict";a.r(e);var n=a(43),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-clipboard2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-clipboard2"}},[t._v("#")]),t._v(" vue-clipboard2")]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install --save vue-clipboard2\n")])])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("For vue-cli user:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import Vue from 'vue'\nimport VueClipboard from 'vue-clipboard2'\n \nVue.use(VueClipboard)\n")])])]),a("p",[t._v("For standalone usage:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<script src="vue.min.js"><\/script>\n\x3c!-- must place this line after vue.js --\x3e\n<script src="dist/vue-clipboard.min.js"><\/script>\n')])])]),a("h2",{attrs:{id:"sample"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample"}},[t._v("#")]),t._v(" Sample")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<div id="app"></div>\n \n<template id="t">\n  <div class="container">\n    <input type="text" v-model="message">\n    <button type="button"\n      v-clipboard:copy="message"\n      v-clipboard:success="onCopy"\n      v-clipboard:error="onError">Copy!</button>\n  </div>\n</template>\n \n<script>\nnew Vue({\n  el: \'#app\',\n  template: \'#t\',\n  data: function () {\n    return {\n      message: \'Copy These Text\'\n    }\n  },\n  methods: {\n    onCopy: function (e) {\n      alert(\'You just copied: \' + e.text)\n    },\n    onError: function (e) {\n      alert(\'Failed to copy texts\')\n    }\n  }\n})\n<\/script> \n')])])]),a("h2",{attrs:{id:"sample-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-2"}},[t._v("#")]),t._v(" Sample 2")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<div id="app"></div>\n \n  <template id="t">\n    <div class="container">\n    <input type="text" v-model="message">\n    <button type="button" @click="doCopy">Copy!</button>\n    </div>\n  </template>\n \n  <script>\n  new Vue({\n    el: \'#app\',\n    template: \'#t\',\n    data: function () {\n      return {\n        message: \'Copy These Text\'\n      }\n    },\n    methods: {\n      doCopy: function () {\n        this.$copyText(this.message).then(function (e) {\n          alert(\'Copied\')\n          console.log(e)\n        }, function (e) {\n          alert(\'Can not copy\')\n          console.log(e)\n        })\n      }\n    }\n  })\n  <\/script> \n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);