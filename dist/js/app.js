(function(t){function e(e){for(var i,a,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],i=!0,a=1;a<r.length;a++){var o=r[a];0!==s[o]&&(i=!1)}i&&(n.splice(e--,1),t=l(l.s=r[0]))}return t}var i={},a={app:0},s={app:0},n=[];function o(t){return l.p+"js/"+({examples:"examples","getting-started":"getting-started",tutorial:"tutorial"}[t]||t)+".js"}function l(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(t){var e=[],r={examples:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var i="css/"+({examples:"examples","getting-started":"getting-started",tutorial:"tutorial"}[t]||t)+".css",s=l.p+i,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var c=n[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===s))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){c=p[o],u=c.getAttribute("data-href");if(u===i||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||s,n=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=i,delete a[t],d.parentNode.removeChild(d),r(n)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[t]=0})));var i=s[t];if(0!==i)if(i)e.push(i[2]);else{var n=new Promise((function(e,r){i=s[t]=[e,r]}));e.push(i[2]=n);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var r=s[t];if(0!==r){if(r){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",p.name="ChunkLoadError",p.type=i,p.request=a,r[1](p)}s[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(r,i,function(e){return t[e]}.bind(null,i));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=u;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"1a3b":function(t,e,r){"use strict";var i=r("455e"),a=r.n(i);a.a},3654:function(t,e,r){"use strict";var i=r("caba"),a=r.n(i);a.a},"455e":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("a79d"),r("5abe");var i=r("d11d"),a=r.n(i),s=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("navbar"),r("Hero"),r("div",{staticClass:"section"},[r("div",{staticClass:"container"},[r("transition",{attrs:{name:"slide-up",mode:"out-in"}},[r("router-view")],1)],1)]),r("footer-view")],1)},o=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"navbar is-fixed-top is-primary"},[i("div",{staticClass:"navbar-brand"},[i("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[i("img",{staticClass:"bordered",attrs:{src:r("9b19"),alt:"Brain.js logo",width:"28",height:"28"}}),t._v(" Brain.js ")]),i("div",{staticClass:"navbar-burger burger",class:{"is-active":t.isNavBarOpen},on:{click:t.toggleNavbar}},[i("span"),i("span"),i("span")])],1),i("div",{staticClass:"navbar-menu",class:{"is-active":t.isNavBarOpen}},[i("div",{staticClass:"navbar-start"},[i("router-link",{staticClass:"navbar-item",attrs:{to:"/getting-started",title:"Installation & Quick Start"}},[i("i",{staticClass:"material-icons"},[t._v("flight_takeoff")]),t._v(" Getting Started ")]),i("router-link",{staticClass:"navbar-item",attrs:{to:"/tutorial",title:"Tutorials"}},[i("i",{staticClass:"material-icons"},[t._v("school")]),t._v(" Tutorials ")]),i("router-link",{staticClass:"navbar-item",attrs:{to:"/examples",title:"View Examples"}},[i("i",{staticClass:"material-icons"},[t._v("list_alt")]),t._v(" Examples ")]),t._m(0)],1),t._m(1)])])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"navbar-item",attrs:{href:"//github.com/BrainJS/brain.js#brainjs",title:"View Documentation",target:"_blank"}},[r("i",{staticClass:"material-icons"},[t._v("view_list")]),t._v(" Documentation ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar-end"},[r("div",{staticClass:"navbar-item"},[r("div",{staticClass:"field is-grouped"},[r("p",{staticClass:"control"},[r("a",{staticClass:"bd-tw-button button is-link",attrs:{target:"_blank",title:"Tweet about Brain.js",href:"//twitter.com/intent/tweet?text=Brain.js: GPU accelerated Neural networks in JavaScript&hashtags=brain.js,neuralNetworks,javascript,nodejs"}},[r("i",{staticClass:"material-icons"},[t._v("share")])])]),r("p",{staticClass:"control"},[r("a",{staticClass:"button is-link",attrs:{target:"_blank",title:"Brain.js on Github",href:"//github.com/BrainJS/brain.js"}},[t._v(" Github ")])]),r("p",{staticClass:"control"},[r("a",{staticClass:"button is-link",attrs:{title:"Be a Sponsor or Backer to this project",target:"_blank",href:"//opencollective.com/brainjs"}},[r("i",{staticClass:"material-icons"},[t._v("attach_money")]),r("span",[t._v(" Sponsor")])])])])])])}],u={data(){return{isNavBarOpen:!1}},watch:{$route(){this.toggleNavbar()}},methods:{toggleNavbar(){this.isNavBarOpen=!this.isNavBarOpen}}},p=u,d=(r("1a3b"),r("2877")),m=Object(d["a"])(p,l,c,!1,null,null,null),h=m.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"hero is-primary",class:{"is-large":"home"===t.$route.name}},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("article",{staticClass:"media"},[t._m(0),r("div",{staticClass:"media-content"},[r("div",{staticClass:"content"},[r("h1",{staticClass:"title is-1"},[t._v(" Brain.js: GPU accelerated Neural networks in JavaScript ")]),r("h2",{staticClass:"subtitle is-2"},[t._v(" for Browsers and Node.js ")]),r("div",{staticClass:"description"},[r("p",{staticClass:"is-size-5"},[t._v(" Simple, fast and easy to use. ")]),r("div",{staticClass:"field is-grouped"},[r("p",{staticClass:"control"},[r("router-link",{staticClass:"button is-light is-large",attrs:{to:"/getting-started",title:"Installation & Quick Start"}},[r("i",{staticClass:"material-icons"},[t._v("flash_on")]),r("span",[t._v("Get Started Now")])])],1)])])])])])])])])},g=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("figure",{staticClass:"media-left"},[i("p",{staticClass:"image is-128x128"},[i("img",{staticClass:"bordered",attrs:{src:r("9b19"),alt:"brain.js logo",width:"128",height:"128"}})])])}],v={},f=v,k=(r("9e70"),Object(d["a"])(f,b,g,!1,null,"45a749fd",null)),w=k.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer is-dark"},[r("div",{staticClass:"content has-text-centered"},[r("br"),r("p",[t._v(" The source code is licensed "),r("a",{attrs:{href:"//opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(". "),r("br"),t._v(" This page is open source. Noticed a typo? Or something unclear? "),r("a",{attrs:{href:"//github.com/BrainJS/brain.js.org"}},[t._v("Improve this page on GitHub")])])])])}],j={},y=j,S=Object(d["a"])(y,_,C,!1,null,null,null),x=S.exports,N={components:{Navbar:h,Hero:w,FooterView:x}},B=N,E=Object(d["a"])(B,n,o,!1,null,null,null),T=E.exports,P=(r("e1fc"),r("9483"));Object(P["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached(){console.log("Content has been cached for offline use.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var O=r("8c4f"),R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"highlight-list"},t._l(t.$store.state.highlights,(function(e){return r("article",{key:e.title,staticClass:"message is-light"},[r("div",{staticClass:"message-header"},[t._v(" "+t._s(e.title)+" ")]),r("div",{staticClass:"message-body"},[t._v(" "+t._s(e.description)+" "),r("a",{directives:[{name:"show",rawName:"v-show",value:e.link,expression:"highlight.link"}],attrs:{href:e.link}},[t._v("Details")])])])})),0)]),r("br"),r("div",{staticClass:"content has-text-centered"},[r("div",{ref:"svg-logo-animation-container",attrs:{id:"svg-logo-animation-container"}},[r("h2",{staticClass:"title is-3"},[t._v("Brain.js is Modular")]),r("h3",{staticClass:"subtitle is-5 has-text-weight-normal"},[t._v(" The Brain.js implementation is highly modular to allow easy extendability. ")]),r("div",{ref:"svg-logo-animation",attrs:{id:"svg-logo-animation"}},[r("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 200 200"}},[r("rect",{attrs:{width:"100%",height:"100%",fill:"#F3DF49"}}),r("g",{staticClass:"logo-parts"},[r("polygon",{style:t.leftPart,attrs:{fill:"#2E2E2C",points:"104.8,110.4 134.1,133.6 134.1,148.7 94.8,163.9 74.3,164.9 58.5,143.7 73.4,123.3"}}),r("polygon",{style:t.rightPart,attrs:{fill:"#2E2E2C",points:"139.4,148.7 139.4,133.6 134.3,104.4 148.4,103.5 185,126 180.5,153.6 166.4,164"}}),r("polygon",{style:t.bottomPart,attrs:{fill:"#2E2E2C",points:"163.1,167.6 137.3,153.2 101.3,166.6 142.8,177.7 148.4,186.2 155.2,186.2"}}),r("polygon",{style:t.topPart,attrs:{fill:"#2E2E2C",points:"111.1,108.3 133.5,127 128.9,105.3"}})])])])])]),r("br"),r("br"),r("div",{staticClass:"custom-tags has-text-centered"},t._l(t.$store.state.features,(function(e){return r("span",{key:e.title,staticClass:"tag is-medium is-light"},[t._v(t._s(e.title))])})),0),r("br"),r("br"),r("br"),r("div",{staticClass:"columns has-text-centered"},[r("div",{staticClass:"column"},[r("h2",{staticClass:"title is-3"},[t._v(" Ready to start? ")]),r("div",{staticClass:"content"},[r("p",[t._v(" Read "),r("a",{attrs:{href:"http://github.com/BrainJS/brain.js#brainjs"}},[t._v("Documentation")]),t._v(" or view "),r("router-link",{attrs:{to:"/examples",title:"Examples"}},[t._v(" Live Examples ")])],1),r("router-link",{staticClass:"button is-primary is-medium",attrs:{to:"/getting-started",title:"Installation & Quick Start"}},[t._v(" Get Started Now ")])],1)]),r("div",{staticClass:"column"},[r("h2",{staticClass:"title is-3"},[t._v(" Support ")]),r("div",{staticClass:"content"},[r("p",[t._v("Support this project by becoming a Sponsor or Backer.")]),r("router-link",{staticClass:"button is-primary is-medium",attrs:{to:"//opencollective.com/brainjs#sponsor",title:"Sponsor"}},[t._v(" Become a Sponsor ")])],1)]),t._m(0)]),r("br"),r("br"),r("br"),t._m(1),t._m(2),t._m(3)])},J=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"column"},[r("h2",{staticClass:"title is-3"},[t._v(" Be a Part of Brain.js ")]),r("div",{staticClass:"content"},[r("p",[t._v("Contributions are always welcome!")]),r("a",{staticClass:"button is-primary is-medium",attrs:{href:"//github.com/BrainJS/brain.js/blob/master/CONTRIBUTING.md",title:"Github Repository",target:"_blank"}},[t._v(" Contribute ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content has-text-centered"},[r("h2",{staticClass:"title is-3"},[t._v("Contributors")]),r("p",[t._v(" This project exists thanks to all the people who contribute. 🙏"),r("br"),r("br"),r("a",{attrs:{href:"https://github.com/BrainJS/brain.js/graphs/contributors",target:"_blank"}},[r("img",{attrs:{src:"https://opencollective.com/brainjs/contributors.svg?width=480&button=false",width:"480",loading:"lazy"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content has-text-centered"},[r("h2",{staticClass:"title is-3"},[t._v("Backers")]),r("p",[t._v(" Thanks to all the backers! 🙏"),r("br"),r("br"),r("a",{attrs:{href:"https://opencollective.com/brainjs#contributors",target:"_blank"}},[r("img",{attrs:{src:"https://opencollective.com/brainjs/backers.svg?width=480&button=false",width:"480",loading:"lazy"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content has-text-centered"},[r("h2",{staticClass:"title is-3"},[t._v("Sponsors")]),r("p",[t._v("Thanks to all the sponsors! 🙏"),r("br"),r("br")]),r("p",[r("a",{attrs:{href:"https://opencollective.com/brainjs",target:"_blank"}},[r("img",{attrs:{src:"https://opencollective.com/brainjs/sponsors.svg?width=480",width:"480",loading:"lazy"}})])])])}],G={components:{},data(){return{progress:0}},computed:{offset(){let t=250*Math.abs(.66-this.progress);return(t<0||this.progress>.66)&&(t=0),t},leftPart(){return{transform:`translateX(-${this.offset}px)`,opacity:""+(1.25-this.offset/80)}},rightPart(){return{transform:`translateX(${this.offset}px)`,opacity:""+(1.25-this.offset/80)}},bottomPart(){return{transform:`translateY(${this.offset}px)`,opacity:""+(1.25-this.offset/80)}},topPart(){return{transform:`translateY(-${this.offset}px)`,opacity:""+(1.25-this.offset/80)}},featureList(){return this.$store.state.features.map(t=>t.title)}},mounted(){const t=scrollama();t.setup({step:"#svg-logo-animation",progress:!0,threshold:1,offset:.66}).onStepProgress(t=>{this.progress=t.progress}),window.addEventListener("resize",t.resize)}},L=G,$=(r("3654"),Object(d["a"])(L,R,J,!1,null,null,null)),U=$.exports;s["a"].use(O["a"]);var A=new O["a"]({routes:[{path:"/",name:"home",component:U},{path:"/getting-started",name:"getting-started",component:()=>r.e("getting-started").then(r.bind(null,"94f1"))},{path:"/tutorial",name:"tutorial",component:()=>r.e("tutorial").then(r.bind(null,"818d"))},{path:"/examples",name:"examples",component:()=>r.e("examples").then(r.bind(null,"a451"))},{path:"*",redirect:"/"}],scrollBehavior(t,e){if(t.path!==e.path)return{x:0,y:0}}}),M=r("2f62");s["a"].use(M["a"]);var I=new M["a"].Store({state:{features:[{title:"GPU accelerated"},{title:"Simple & Easy "},{title:"Asynchronous API"},{title:"Export & Import Trained Models"},{title:"Cross Validation"},{title:"Stream Training"},{title:"Modular"}],highlights:[{title:"Simple To Use",description:"Brain.js is super simple to use. You do not need to know Neural Networks in details to work with this. ",link:"//github.com/BrainJS/brain.js#examples"},{title:"Fast",description:"Brain.js performs computations using GPU and gracefully fallback to pure JavaScript when GPU is not available.",link:"//github.com/gpujs/gpu.js"},{title:"Useful",description:"Brain.js provides multiple neural network implementations as different neural nets can be trained to do different things well.",link:"//github.com/BrainJS/brain.js#neural-network-types"},{title:"Easy To Integrate",description:"Easily export and import trained models using JSON format or as a function. Host pre-trained models on your website easily. ",link:"//github.com/BrainJS/brain.js#json"}],networks:[{title:"brain.NeuralNetwork",description:"Feedforward Neural Network with backpropagation",link:"https://en.wikipedia.org/wiki/Feedforward_neural_network"},{title:"brain.recurrent.RNNTimeStep",description:'Time Step Recurrent Neural Network or "RNN"',link:"https://en.wikipedia.org/wiki/Recurrent_neural_network"},{title:"brain.recurrent.LSTMTimeStep",description:'Time Step Long Short Term Memory Neural Network or "LSTM"',link:"https://en.wikipedia.org/wiki/Long_short-term_memory"},{title:"brain.recurrent.GRUTimeStep",description:'Time Step Gated Recurrent Unit or "GRU"',link:"https://en.wikipedia.org/wiki/Gated_recurrent_unit"},{title:"brain.recurrent.RNN",description:'Recurrent Neural Network or "RNN"',link:"https://en.wikipedia.org/wiki/Recurrent_neural_network"},{title:"brain.recurrent.LSTM",description:'Long Short Term Memory Neural Network or "LSTM"',link:"https://en.wikipedia.org/wiki/Long_short-term_memory"},{title:"brain.recurrent.GRU",description:'Gated Recurrent Unit or "GRU"',link:"https://en.wikipedia.org/wiki/Gated_recurrent_unit"}],tutorials:[{title:"How to create a neural net in the browser with Brain.js",description:"",author:"Per Harald Borgen",link:"https://scrimba.com/c/c36zkcb"},{title:"BRAIN.JS: NEURAL NETWORKS IN JAVASCRIPT",description:"",author:"http://badassjs.com",link:"http://badassjs.com/post/729676907/brainjs-neural-networks-in-javascript"},{title:"Neural Networks in JavaScript with Brain.js",description:"",author:"Scott Robinson",link:"https://stackabuse.com/neural-networks-in-javascript-with-brain-js/"},{title:"You can build a neural network in JavaScript",description:"",author:"Daniel Simmons",link:"https://itnext.io/you-can-build-a-neural-network-in-javascript-even-if-you-dont-really-understand-neural-networks-e63e12713a3"}],examples:[{title:"XOR function",description:"Here's an example showcasing how to approximate the XOR function.",link:"//jsfiddle.net/mubaidr/94nkLfeo/embedded/js,result/"},{title:"Simple Letter Detection",description:"Detect letters from text.",link:"//jsfiddle.net/mubaidr/efLq26xd/embedded/js,result/"},{title:"Childrens Book",description:"Writing a children's book using a recurrent neural network.",link:"//jsfiddle.net/mubaidr/79Lkqsb5/embedded/js,result/"},{title:"Color Contrast",description:"Get suitable text color for given background color.",link:"//jsfiddle.net/mubaidr/8yeo2jmd/embedded/js,result/"},{title:"Using node streams",description:"Train neural network using streams",link:"//github.com/BrainJS/brain.js/blob/master/examples/javascript/stream-example.js"},{title:"Using node streams",description:"Train neural network using streams",link:"//github.com/BrainJS/brain.js/blob/master/examples/javascript/stream-example.js"},{title:"Forecasting",description:"Predict next number, and forecast numbers",link:"//github.com/BrainJS/brain.js/blob/master/examples/javascript/predict-numbers.js"},{title:"Maths",description:"Learning math using a recurrent neural network",link:"//github.com/BrainJS/brain.js/blob/master/examples/javascript/learn-math.js"},{title:"Cross Validate",description:"Using cross validation with a feed forward net ",link:"//github.com/BrainJS/brain.js/blob/master/examples/javascript/cross-validate.js"},{title:"GPU powered AI",description:"using the gpu in a browser",link:"https://github.com/BrainJS/brain.js/blob/master/examples/javascript/gpu.html"},{title:"Cryotherapy Success Rate Prediction",description:"Predicting the Performance of Cryotherapy for Wart Treatment Using Machine Learning Algorithm.",link:"//github.com/iSumitBanik/Cryotherapy-Success-Rate"},{title:"Rock Paper Scissors",description:"This game can read the players' patterns to determine the steps the AI will take in order to win.",link:"//github.com/arifikhsan/batu-gunting-kertas-nuxt"}]},mutations:{},actions:{}});window.scrollama=a.a,s["a"].config.productionTip=!1,new s["a"]({router:A,store:I,render:t=>t(T)}).$mount("#app")},"5eb4":function(t,e,r){},"9b19":function(t,e,r){t.exports=r.p+"img/logo.svg"},"9e70":function(t,e,r){"use strict";var i=r("5eb4"),a=r.n(i);a.a},caba:function(t,e,r){},e1fc:function(t,e,r){}});