(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,s=1;s<r.length;s++){var o=r[s];0!==i[o]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=r[0]))}return t}var a={},s={app:0},i={app:0},n=[];function o(t){return l.p+"js/"+({examples:"examples","getting-started":"getting-started",tutorial:"tutorial"}[t]||t)+".js"}function l(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(t){var e=[],r={examples:1};s[t]?e.push(s[t]):0!==s[t]&&r[t]&&e.push(s[t]=new Promise(function(e,r){for(var a="css/"+({examples:"examples","getting-started":"getting-started",tutorial:"tutorial"}[t]||t)+".css",i=l.p+a,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var c=n[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){c=p[o],u=c.getAttribute("data-href");if(u===a||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||i,n=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=a,delete s[t],d.parentNode.removeChild(d),r(n)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){s[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,r){a=i[t]=[e,r]});e.push(a[2]=n);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var r=i[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",p.name="ChunkLoadError",p.type=a,p.request=s,r[1](p)}i[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(r,a,function(e){return t[e]}.bind(null,a));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=u;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"1bca":function(t,e,r){},3654:function(t,e,r){"use strict";var a=r("4f44"),s=r.n(a);s.a},"4f44":function(t,e,r){},5675:function(t,e,r){"use strict";var a=r("1bca"),s=r.n(a);s.a},"56d7":function(t,e,r){"use strict";r.r(e);var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("navbar"),r("Hero"),r("div",{staticClass:"section"},[r("div",{staticClass:"container"},[r("transition",{attrs:{name:"slide-up",mode:"out-in"}},[r("router-view")],1)],1)]),r("footer-view")],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar is-fixed-top is-default"},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[a("img",{staticClass:"bordered",attrs:{src:r("9b19"),alt:"Brain.js logo",width:"28",height:"28"}}),t._v("\n        Brain.js\n    ")]),a("div",{staticClass:"navbar-burger burger",class:{"is-active":t.isNavBarOpen},on:{click:t.toggleNavbar}},[a("span"),a("span"),a("span")])],1),a("div",{staticClass:"navbar-menu",class:{"is-active":t.isNavBarOpen}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/",title:"Home"}},[a("i",{staticClass:"material-icons"},[t._v("home")]),t._v("\n         Home\n      ")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/getting-started",title:"Installation & Quick Start"}},[a("i",{staticClass:"material-icons"},[t._v("flight_takeoff")]),t._v("\n         Getting Started\n      ")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/tutorial",title:"Tutorials"}},[a("i",{staticClass:"material-icons"},[t._v("school")]),t._v("\n         Tutorials\n      ")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/examples",title:"View Examples"}},[a("i",{staticClass:"material-icons"},[t._v("list_alt")]),t._v("\n         Examples\n      ")]),t._m(0)],1),t._m(1)])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"navbar-item",attrs:{href:"//github.com/BrainJS/brain.js#brainjs",title:"View Documentation",target:"_blank"}},[r("i",{staticClass:"material-icons"},[t._v("view_list")]),t._v("\n         Documentation\n      ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar-end"},[r("div",{staticClass:"navbar-item"},[r("div",{staticClass:"field is-grouped"},[r("p",{staticClass:"control"},[r("a",{staticClass:"bd-tw-button button is-light",attrs:{target:"_blank",title:"Tweet about Brain.js",href:"//twitter.com/intent/tweet?text=Brain.js: GPU accelerated Neural networks in JavaScript&hashtags=brain.js,neuralNetworks,javascript,nodejs"}},[r("i",{staticClass:"material-icons"},[t._v("share")])])]),r("p",{staticClass:"control"},[r("a",{staticClass:"button is-light",attrs:{target:"_blank",title:"Brain.js on Github",href:"//github.com/BrainJS/brain.js"}},[t._v("\n              Github\n            ")])]),r("p",{staticClass:"control"},[r("a",{staticClass:"button is-primary",attrs:{title:"Be a Sponsor or Backer to this project",target:"_blank",href:"//opencollective.com/brainjs"}},[r("i",{staticClass:"material-icons"},[t._v("attach_money")]),r("span",[t._v("  Support")])])])])])])}],l={data(){return{isNavBarOpen:!1}},watch:{$route(){this.toggleNavbar()}},methods:{toggleNavbar(){this.isNavBarOpen=!this.isNavBarOpen}}},c=l,u=r("2877"),p=Object(u["a"])(c,n,o,!1,null,null,null),d=p.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"hero is-dark is-bold",class:{"is-large":"home"===t.$route.name}},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("article",{staticClass:"media"},[t._m(0),r("div",{staticClass:"media-content"},[r("div",{staticClass:"content"},[t._m(1),r("div",{staticClass:"description"},[r("hr"),r("p",{staticClass:"is-size-5"},[t._v("\n                Brain.js is a GPU accelerated library of Neural Networks\n                written in JavaScript for Browsers and Node.js. It is simple,\n                fast and easy to use.\n              ")]),r("div",{staticClass:"field is-grouped"},[r("p",{staticClass:"control"},[r("router-link",{staticClass:"button is-light",attrs:{to:"/getting-started",title:"Installation & Quick Start"}},[r("i",{staticClass:"material-icons"},[t._v("flash_on")]),r("span",[t._v("Get Started Now")])])],1),t._m(2)])])])])])])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",{staticClass:"media-left"},[a("p",{staticClass:"image is-128x128"},[a("img",{staticClass:"bordered",attrs:{src:r("9b19"),alt:"brain.js logo",width:"128",height:"128"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("span",{staticClass:"title is-1"},[t._v("Brain.js")]),r("br"),r("span",{staticClass:"subtitle is-2"},[t._v("GPU accelerated Neural networks in JavaScript")]),r("br"),t._v("\n              for Browsers and Node.js\n            ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"control npm"},[r("a",{staticStyle:{"border-bottom":"none"},attrs:{href:"https://nodei.co/npm/brain.js"}},[r("img",{attrs:{src:"https://nodei.co/npm/brain.js.png/?compact=true"}})])])}],v={},f=v,b=(r("5675"),Object(u["a"])(f,h,m,!1,null,"660ee0e0",null)),g=b.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer is-dark"},[r("div",{staticClass:"content has-text-centered"},[r("br"),r("p",[t._v("\n      The source code is licensed\n      "),r("a",{attrs:{href:"//opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(". "),r("br"),t._v("\n      This page is open source. Noticed a typo? Or something unclear?\n      "),r("a",{attrs:{href:"//github.com/BrainJS/brain.js"}},[t._v("Improve this page on GitHub")])])])])}],k={},C=k,y=Object(u["a"])(C,_,w,!1,null,null,null),j=y.exports,S={components:{Navbar:d,Hero:g,FooterView:j}},x=S,N=Object(u["a"])(x,s,i,!1,null,null,null),B=N.exports,E=r("8c4f"),T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"highlight-list"},t._l(t.$store.state.highlights,function(e){return r("article",{key:e.title,staticClass:"message is-dark"},[r("div",{staticClass:"message-header"},[t._v("\n          "+t._s(e.title)+"\n        ")]),r("div",{staticClass:"message-body"},[t._v("\n          "+t._s(e.description)+"\n        ")]),r("div",{staticClass:"message-footer"},[r("a",{directives:[{name:"show",rawName:"v-show",value:e.link,expression:"highlight.link"}],attrs:{href:e.link}},[t._v("Details")])])])}),0)]),r("br"),r("br"),r("br"),r("div",{staticClass:"content has-text-centered"},[r("div",{ref:"svg-logo-animation-container",attrs:{id:"svg-logo-animation-container"}},[r("h2",{staticClass:"title is-3"},[t._v("Brain.js is Modular")]),r("h3",{staticClass:"subtitle is-5 has-text-weight-normal"},[t._v("\n        Brain.js implmentation is highly modular to easily allow\n        extendability.\n      ")]),r("div",{ref:"svg-logo-animation",attrs:{id:"svg-logo-animation"}},[r("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 200 200"}},[r("rect",{attrs:{width:"100%",height:"100%",fill:"#F3DF49"}}),r("g",{staticClass:"logo-parts"},[r("polygon",{style:t.leftPart,attrs:{fill:"#2E2E2C",points:"104.8,110.4 134.1,133.6 134.1,148.7 94.8,163.9 74.3,164.9 58.5,143.7 73.4,123.3"}}),r("polygon",{style:t.rightPart,attrs:{fill:"#2E2E2C",points:"139.4,148.7 139.4,133.6 134.3,104.4 148.4,103.5 185,126 180.5,153.6 166.4,164"}}),r("polygon",{style:t.bottomPart,attrs:{fill:"#2E2E2C",points:"163.1,167.6 137.3,153.2 101.3,166.6 142.8,177.7 148.4,186.2 155.2,186.2"}}),r("polygon",{style:t.topPart,attrs:{fill:"#2E2E2C",points:"111.1,108.3 133.5,127 128.9,105.3"}})])])])])]),r("br"),r("br"),r("div",{staticClass:"custom-tags has-text-centered"},t._l(t.$store.state.features,function(e){return r("span",{key:e.title,staticClass:"tag is-medium is-dark"},[t._v(t._s(e.title))])}),0),r("br"),r("hr"),r("br"),r("div",{staticClass:"columns has-text-centered"},[r("div",{staticClass:"column"},[r("h2",{staticClass:"title is-3"},[t._v("\n        Ready to start?\n      ")]),r("div",{staticClass:"content"},[r("p",[t._v("\n          Read\n          "),r("a",{attrs:{href:"http://github.com/BrainJS/brain.js#brainjs"}},[t._v("Documentation")]),t._v("\n          or view\n          "),r("router-link",{attrs:{to:"/examples",title:"Examples"}},[t._v("\n            Live Examples\n          ")])],1),r("router-link",{staticClass:"button is-primary is-large",attrs:{to:"/getting-started",title:"Installation & Quick Start"}},[t._v("\n          Get Started Now\n        ")])],1)]),r("div",{staticClass:"column"},[r("h2",{staticClass:"title is-3"},[t._v("\n        Support\n      ")]),r("div",{staticClass:"content"},[r("p",[t._v("Support this project by becoming a Sponsor or Backer.")]),r("router-link",{staticClass:"button is-primary is-large",attrs:{to:"//opencollective.com/brainjs#sponsor",title:"Sponsor"}},[t._v("\n          Become a Sponsor\n        ")])],1)]),t._m(0)]),r("br"),r("hr"),r("br"),t._m(1),t._m(2),t._m(3)])},O=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"column"},[r("h2",{staticClass:"title is-3"},[t._v("\n        Be a Part of Brain.js\n      ")]),r("div",{staticClass:"content"},[r("p",[t._v("Contrinutions are always welcome!")]),r("a",{staticClass:"button is-primary is-large",attrs:{href:"//github.com/BrainJS/brain.js/blob/master/CONTRIBUTING.md",title:"Github Repository",target:"_blank"}},[t._v("\n          Contribute\n        ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content has-text-centered"},[r("h2",{staticClass:"title is-3"},[t._v("Contributors")]),r("p",[t._v("\n      This project exists thanks to all the people who contribute. 🙏"),r("br"),r("br"),r("a",{attrs:{href:"https://github.com/BrainJS/brain.js/graphs/contributors",target:"_blank"}},[r("img",{attrs:{src:"https://opencollective.com/brainjs/contributors.svg?width=480&button=false",width:"480",loading:"lazy"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content has-text-centered"},[r("h2",{staticClass:"title is-3"},[t._v("Backers")]),r("p",[t._v("\n      Thank you all the backers! 🙏"),r("br"),r("br"),r("a",{attrs:{href:"https://opencollective.com/brainjs#contributors",target:"_blank"}},[r("img",{attrs:{src:"https://opencollective.com/brainjs/backers.svg?width=480&button=false",width:"480",loading:"lazy"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content has-text-centered"},[r("h2",{staticClass:"title is-3"},[t._v("Sponsors")]),r("p",[t._v("Thank you all the sponsors! 🙏"),r("br"),r("br")]),r("p",[r("a",{attrs:{href:"https://opencollective.com/brainjs",target:"_blank"}},[r("img",{attrs:{src:"https://opencollective.com/brainjs/sponsors.svg?width=480",width:"480",loading:"lazy"}})])])])}],P={components:{},data(){return{progress:0}},computed:{offset(){let t=250*Math.abs(.66-this.progress);return(t<0||this.progress>.66)&&(t=0),t},leftPart(){return{transform:`translateX(-${this.offset}px)`,opacity:`${1.25-this.offset/80}`}},rightPart(){return{transform:`translateX(${this.offset}px)`,opacity:`${1.25-this.offset/80}`}},bottomPart(){return{transform:`translateY(${this.offset}px)`,opacity:`${1.25-this.offset/80}`}},topPart(){return{transform:`translateY(-${this.offset}px)`,opacity:`${1.25-this.offset/80}`}},featureList(){return this.$store.state.features.map(t=>{return t.title})}},mounted(){const t=scrollama();t.setup({step:"#svg-logo-animation",progress:!0,threshold:1,offset:.66}).onStepProgress(t=>{this.progress=t.progress}),window.addEventListener("resize",t.resize)}},$=P,R=(r("3654"),Object(u["a"])($,T,O,!1,null,null,null)),G=R.exports;a["a"].use(E["a"]);var L=new E["a"]({routes:[{path:"/",name:"home",component:G},{path:"/getting-started",name:"getting-started",component:()=>r.e("getting-started").then(r.bind(null,"94f1"))},{path:"/tutorial",name:"tutorial",component:()=>r.e("tutorial").then(r.bind(null,"818d"))},{path:"/examples",name:"examples",component:()=>r.e("examples").then(r.bind(null,"a451"))},{path:"*",redirect:"/"}],scrollBehavior(t,e){if(t.path!==e.path)return{x:0,y:0}}}),J=r("2f62");a["a"].use(J["a"]);var U=new J["a"].Store({state:{features:[{title:"GPU accelerated"},{title:"Simple & Easy "},{title:"Asynchronous API"},{title:"Export & Import Trained Models"},{title:"Cross Validation"},{title:"Stream Training"},{title:"Modular"}],highlights:[{title:"Simple To Use",description:"Brain.js is super simple to use. You do not need to know Neural Networks in details to work with this. ",link:"//github.com/BrainJS/brain.js#examples"},{title:"Fast",description:"Brain.js performs computations using GPU and gracefully fallback to pure JavaScript when GPU is not available.",link:"//github.com/gpujs/gpu.js"},{title:"Useful",description:"Brain.js provided multiple neural network implementations as different neural nets can be trained to do different things well.",link:"//github.com/BrainJS/brain.js#neural-network-types"},{title:"Easy To Integrate",description:"Easily export and import trained models to JSON format and as a function. Host pre-trained models on your website easily. ",link:"//github.com/BrainJS/brain.js#json"}],networks:[{title:"brain.NeuralNetwork",description:"Feedforward Neural Network with backpropagation",link:"https://en.wikipedia.org/wiki/Feedforward_neural_network"},{title:"brain.recurrent.RNNTimeStep",description:'Time Step Recurrent Neural Network or "RNN"',link:"https://en.wikipedia.org/wiki/Recurrent_neural_network"},{title:"brain.recurrent.LSTMTimeStep",description:'Time Step Long Short Term Memory Neural Network or "LSTM"',link:"https://en.wikipedia.org/wiki/Long_short-term_memory"},{title:"brain.recurrent.GRUTimeStep",description:'Time Step Gated Recurrent Unit or "GRU"',link:"https://en.wikipedia.org/wiki/Gated_recurrent_unit"},{title:"brain.recurrent.RNN",description:'Recurrent Neural Network or "RNN"',link:"https://en.wikipedia.org/wiki/Recurrent_neural_network"},{title:"brain.recurrent.LSTM",description:'Long Short Term Memory Neural Network or "LSTM"',link:"https://en.wikipedia.org/wiki/Long_short-term_memory"},{title:"brain.recurrent.GRU",description:'Gated Recurrent Unit or "GRU"',link:"https://en.wikipedia.org/wiki/Gated_recurrent_unit"}],tutorials:[{title:"How to create a neural net in the browser with Brain.js",description:"",author:"Per Harald Borgen",link:"https://scrimba.com/c/c36zkcb"},{title:"BRAIN.JS: NEURAL NETWORKS IN JAVASCRIPT",description:"",author:"http://badassjs.com",link:"http://badassjs.com/post/729676907/brainjs-neural-networks-in-javascript"},{title:"Neural Networks in JavaScript with Brain.js",description:"",author:"Scott Robinson",link:"https://stackabuse.com/neural-networks-in-javascript-with-brain-js/"},{title:"You can build a neural network in JavaScript",description:"",author:"Daniel Simmons",link:"https://itnext.io/you-can-build-a-neural-network-in-javascript-even-if-you-dont-really-understand-neural-networks-e63e12713a3"}],examples:[{title:"XOR function",description:"Here's an example showcasing how to approximate the XOR function.",link:"//jsfiddle.net/mubaidr/94nkLfeo/embedded/js,result/"},{title:"Simple Letter Detection",description:"Detect letters from text.",link:"//jsfiddle.net/mubaidr/efLq26xd/embedded/js,result/"},{title:"Childrens Book",description:"Writing a children's book using a recurrent neural network.",link:"//jsfiddle.net/mubaidr/79Lkqsb5/embedded/js,result/"},{title:"Color Contrast",description:"Get suitable text color for given background color.",link:"//jsfiddle.net/mubaidr/8yeo2jmd/embedded/js,result/"}]},mutations:{},actions:{}}),A=r("9483");Object(A["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached(){console.log("Content has been cached for offline use.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});r("5abe");var I=r("d11d"),M=r.n(I);r("e1fc");window.scrollama=M.a,a["a"].config.productionTip=!1,new a["a"]({router:L,store:U,render:t=>t(B)}).$mount("#app")},"9b19":function(t,e,r){t.exports=r.p+"img/logo.svg"},e1fc:function(t,e,r){}});