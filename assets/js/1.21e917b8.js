(window.webpackJsonp=window.webpackJsonp||[]).push([[1,34,35,60,61,69],{245:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return r})),n.d(e,"i",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return f})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return m})),n.d(e,"j",(function(){return v}));n(90);const s=/#.*$/,i=/\.(md|html)$/,r=/\/$/,o=/^[a-z]+:/i;function a(t){return decodeURI(t).replace(s,"").replace(i,"")}function l(t){return o.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;const e=t.match(s),n=e?e[0]:"",i=a(t);return r.test(i)?t:i+".html"+n}function f(t,e){const n=decodeURIComponent(t.hash),i=function(t){const e=t.match(s);if(e)return e[0]}(e);if(i&&n!==i)return!1;return a(t.path)===a(e)}function p(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const r=t.replace(/^\//,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const s=a(e);for(let e=0;e<t.length;e++)if(a(t[e].regularPath)===s)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,s){const{pages:i,themeConfig:r}=n,o=s&&r.locales&&r.locales[s]||r;if("auto"===(t.frontmatter.sidebar||o.sidebar||r.sidebar))return g(t);const a=o.sidebar||r.sidebar;if(a){const{base:n,config:s}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const s in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(s)))return{base:s,config:e[s]};var n;return{}}(e,a);return"auto"===s?g(t):s?s.map(t=>function t(e,n,s,i=1){if("string"==typeof e)return p(n,e,s);if(Array.isArray(e))return Object.assign(p(n,e[0],s),{title:e[1]});{const r=e.children||[];return 0===r.length&&e.path?Object.assign(p(n,e.path,s),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:r.map(e=>t(e,n,s,i+1)),collapsable:!1!==e.collapsable}}}(t,i,n)):[]}return[]}function g(t){const e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function m(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},246:function(t,e,n){},247:function(t,e,n){"use strict";n.r(e);var s=n(245),i={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(s.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(s.g)(this.link)||Object(s.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(s.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(s.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},r=n(10),o=Object(r.a)(i,(function(){var t=this,e=t._self._c;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.default=o.exports},248:function(t,e,n){"use strict";n.r(e);var s={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},i=(n(249),n(10)),r=Object(i.a)(s,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},249:function(t,e,n){"use strict";n(246)},250:function(t,e,n){},254:function(t,e,n){"use strict";var s=TypeError;t.exports=function(t,e){if(t<e)throw new s("Not enough arguments");return t}},255:function(t,e,n){},259:function(t,e,n){"use strict";n(250)},262:function(t,e,n){"use strict";n.r(e);var s=n(247),i=n(248),r=n(93),o=n.n(r),a={name:"DropdownLink",components:{NavLink:s.default,DropdownTransition:i.default},props:{item:{required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>o()(e)===t,handleDropdown(){0===event.detail&&this.setOpen(!this.open)}}},l=(n(259),n(10)),u=Object(l.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow down"})]),t._v(" "),e("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,s){return e("li",{key:n.link||s,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v("\n          "+t._s(n.text)+"\n        ")]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(s){return e("li",{key:s.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:s},on:{focusout:function(e){t.isLastItemOfArray(s,n.items)&&t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0):e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=u.exports},266:function(t,e,n){"use strict";var s=n(91),i=n(2),r=n(92),o=n(254),a=URLSearchParams,l=a.prototype,u=i(l.append),c=i(l.delete),h=i(l.forEach),f=i([].push),p=new a("a=1&a=2&b=3");p.delete("a",1),p.delete("b",void 0),p+""!="a=2"&&s(l,"delete",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return c(this,t);var s=[];h(this,(function(t,e){f(s,{key:e,value:t})})),o(e,1);for(var i,a=r(t),l=r(n),p=0,d=0,g=!1,m=s.length;p<m;)i=s[p++],g||i.key===a?(g=!0,c(this,i.key)):d++;for(;d<m;)(i=s[d++]).key===a&&i.value===l||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},267:function(t,e,n){"use strict";var s=n(91),i=n(2),r=n(92),o=n(254),a=URLSearchParams,l=a.prototype,u=i(l.getAll),c=i(l.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||s(l,"has",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return c(this,t);var s=u(this,t);o(e,1);for(var i=r(n),a=0;a<s.length;)if(s[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},268:function(t,e,n){"use strict";var s=n(4),i=n(2),r=n(269),o=URLSearchParams.prototype,a=i(o.forEach);s&&!("size"in o)&&r(o,"size",{get:function(){var t=0;return a(this,(function(){t++})),t},configurable:!0,enumerable:!0})},269:function(t,e,n){"use strict";var s=n(94),i=n(15);t.exports=function(t,e,n){return n.get&&s(n.get,e,{getter:!0}),n.set&&s(n.set,e,{setter:!0}),i.f(t,e,n)}},270:function(t,e,n){"use strict";n(255)},272:function(t,e,n){},273:function(t,e,n){},281:function(t,e,n){"use strict";n.r(e);n(90),n(266),n(267),n(268);var s={name:"AlgoliaSearchBox",props:["options"],data:()=>({placeholder:void 0}),watch:{$lang(t){this.update(this.options,t)},options(t){this.update(t,this.$lang)}},mounted(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize(t,e){Promise.all([Promise.all([n.e(0),n.e(11)]).then(n.t.bind(null,666,7)),Promise.all([n.e(0),n.e(11)]).then(n.t.bind(null,667,7))]).then(([n])=>{n=n.default;const{algoliaOptions:s={}}=t;n(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:{...s,facetFilters:["lang:"+e].concat(s.facetFilters||[])},handleSelected:(t,e,n)=>{const{pathname:s,hash:i}=new URL(n.url),r=s.replace(this.$site.base,"/"),o=decodeURIComponent(i);this.$router.push(`${r}${o}`)}}))})},update(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}}},i=(n(270),n(10)),r=Object(i.a)(s,(function(){var t=this._self._c;return t("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[t("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);e.default=r.exports},283:function(t,e,n){"use strict";n(90);var s=n(96),i=n.n(s),r=(t,e,n=null)=>{let s=i()(e,"title","");return i()(e,"frontmatter.tags")&&(s+=" "+e.frontmatter.tags.join(" ")),n&&(s+=" "+n),o(t,s)};const o=(t,e)=>{const n=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),s=new RegExp("[^\0-]"),i=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(s.test(t))return i.some(t=>e.toLowerCase().indexOf(t)>-1);{const s=t.endsWith(" ");return new RegExp(i.map((t,e)=>i.length!==e+1||s?`(?=.*\\b${n(t)}\\b)`:`(?=.*\\b${n(t)})`).join("")+".+","gi").test(e)}};var a={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,n=this.$site.themeConfig.searchMaxSuggestions||5,s=this.$localePath,i=[];for(let o=0;o<e.length&&!(i.length>=n);o++){const a=e[o];if(this.getPageLocalePath(a)===s&&this.isSearchable(a))if(r(t,a))i.push(a);else if(a.headers)for(let e=0;e<a.headers.length&&!(i.length>=n);e++){const n=a.headers[e];n.title&&r(t,a,n.title)&&i.push(Object.assign({},a,{path:a.path+"#"+n.slug,header:n}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},l=(n(287),n(10)),u=Object(l.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(n,s){return e("li",{key:s,staticClass:"suggestion",class:{focused:s===t.focusIndex},on:{mousedown:function(e){return t.go(s)},mouseenter:function(e){return t.focus(s)}}},[e("a",{attrs:{href:n.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(n.title||n.path))]),t._v(" "),n.header?e("span",{staticClass:"header"},[t._v("> "+t._s(n.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=u.exports},287:function(t,e,n){"use strict";n(272)},288:function(t,e,n){"use strict";n(273)},294:function(t,e,n){"use strict";n.r(e);n(288);var s=n(10),i=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.default=i.exports}}]);