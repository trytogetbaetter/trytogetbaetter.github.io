if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,c,d)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=d(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-08e0b74e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/03/23/article-title/index.html",revision:"3799a5377caeaf208c3b920658406cfd"},{url:"2021/03/23/hello-world/index.html",revision:"57d731bd6dc8fb59864b76f070bb3a5e"},{url:"archives/2021/03/index.html",revision:"bd4490bddef1366d8028b8e9ab18b3bf"},{url:"archives/2021/index.html",revision:"20d8ca585c23759ecb5453b7aded98ae"},{url:"archives/index.html",revision:"902f03331b9c8d8dc985e8105d0ed6bd"},{url:"categories/index.html",revision:"52e4edce43a3eec8ff2ddd8c6b1b74b0"},{url:"css/index.css",revision:"016d3f8939f24a8bd1e51cee9e8d43ac"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"d49ad214db3ecc4608d37d62ae97697c"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"23ad82d60bfc10287ce5e8a717fa946d"},{url:"tags/index.html",revision:"e38e64cc7a952cc35735aa3aa2ea5895"}],{})}));
//# sourceMappingURL=service-worker.js.map
