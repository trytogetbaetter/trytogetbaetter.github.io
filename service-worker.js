if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,c,s)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return r;case"module":return d;default:return e(i)}}))).then((e=>{const i=s(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-08e0b74e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/03/23/article-title/index.html",revision:"3799a5377caeaf208c3b920658406cfd"},{url:"2021/03/23/hello-world/index.html",revision:"57d731bd6dc8fb59864b76f070bb3a5e"},{url:"archives/2021/03/index.html",revision:"5d8059a9c2f9614ffa82e46c3c2cf9fd"},{url:"archives/2021/index.html",revision:"9cb2626d200bd6b6d8974f62b100b085"},{url:"archives/index.html",revision:"daab3819d07299f042e53480b053fe45"},{url:"categories/index.html",revision:"437168f2cae213562fc37f0dd8f27cc2"},{url:"css/index.css",revision:"016d3f8939f24a8bd1e51cee9e8d43ac"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/123.png",revision:"77754b00641ccbf74183f9e1595f7a27"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/background.jpg",revision:"069c3cc800aa3e1aa568aa330cabac8c"},{url:"img/favicon..jpg",revision:"01def060217f9f9696181b5750804df9"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/preview.jpg",revision:"2f81110e7099751a3fb008818f8bed97"},{url:"index.html",revision:"80a0943b08ec10c1450f3f6cc1cfcdd4"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"190c173b7b254014b1b2b3d64955d955"},{url:"tags/index.html",revision:"a9f94473349743e2738b02ae7adf3bcc"}],{})}));
//# sourceMappingURL=service-worker.js.map
