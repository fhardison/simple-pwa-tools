!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/simple-pwa-tools/",t(t.s="mdyV")}({QfWi:function(e,t,n){"use strict";function o(e){return e.type===x.Fragment?"Fragment":"function"==typeof e.type?e.type.displayName||e.type.name:"string"==typeof e.type?e.type:"#text"}function r(){return S.length>0?S[S.length-1]:null}function i(e){return"function"==typeof e.type&&e.type!=x.Fragment}function l(e){for(var t=[e],n=e;null!=n.__o;)t.push(n.__o),n=n.__o;return t.reduce((function(e,t){e+="  in "+o(t);var n=t.__source;return n?e+=" (at "+n.fileName+":"+n.lineNumber+")":A||(A=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),e+"\n"}),"")}function u(e){var t=e.props,n=o(e),r="";for(var i in t)if(t.hasOwnProperty(i)&&"children"!==i){var l=t[i];"function"==typeof l&&(l="function "+(l.displayName||l.name)+"() {}"),l=Object(l)!==l||l.toString?l+"":Object.prototype.toString.call(l),r+=" "+i+"="+JSON.stringify(l)}var u=t.children;return"<"+n+r+(u&&u.length?">..</"+n+">":" />")}function a(e,t){for(var n in t)e[n]=t[n];return e}function c(e,t,n){var o,r=/(?:\?([^#]*))?(#.*)?$/,i=e.match(r),l={};if(i&&i[1])for(var u=i[1].split("&"),a=0;a<u.length;a++){var c=u[a].split("=");l[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}e=p(e.replace(r,"")),t=p(t||"");for(var _=Math.max(e.length,t.length),s=0;s<_;s++)if(t[s]&&":"===t[s].charAt(0)){var f=t[s].replace(/(^:|[+*?]+$)/g,""),d=(t[s].match(/[+*?]+$/)||L)[0]||"",h=~d.indexOf("+"),y=~d.indexOf("*"),m=e[s]||"";if(!m&&!y&&(d.indexOf("?")<0||h)){o=!1;break}if(l[f]=decodeURIComponent(m),h||y){l[f]=e.slice(s).map(decodeURIComponent).join("/");break}}else if(t[s]!==e[s]){o=!1;break}return(!0===n.default||!1!==o)&&l}function _(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function s(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,p(t).map(f).join(""));var t}(e),e.props}function p(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function f(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}function d(){var e;return""+((e=M&&M.location?M.location:M&&M.getCurrentLocation?M.getCurrentLocation():"undefined"!=typeof location?location:R).pathname||"")+(e.search||"")}function h(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=W.length;t--;)if(W[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),M&&M[t]?M[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),y(e)}function y(e){for(var t=!1,n=0;n<W.length;n++)!0===W[n].routeTo(e)&&(t=!0);for(var o=I.length;o--;)I[o](e);return t}function m(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return h(t)}}function v(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return m(e.currentTarget||e.target||this),b(e)}function b(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function g(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(m(t))return b(e)}}while(t=t.parentNode)}}function k(){var e;for(K.sort((function(e,t){return e.__v.__b-t.__v.__b}));e=K.pop();)if(e.__P)try{e.__H.__h.forEach(w),e.__H.__h.forEach(C),e.__H.__h=[]}catch(t){e.__H.__h=[],x.options.__e(t,e.__v)}}function w(e){var t=$,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),$=t}function C(e){var t=$;e.__c=e.__(),$=t}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(){return Object(x.h)("div",{align:"center"},Object(x.h)("h2",null,"Simple PWA tools"),Object(x.h)("p",null,"A collection of simple tools written as PWAs."))}n.r(t);var x=n("hosL");"undefined"!=typeof window&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.6.4",x.options,{Fragment:x.Fragment,Component:x.Component});var j={},S=[],T=[],A=!1,P="function"==typeof WeakMap,U=x.Component.prototype.setState;x.Component.prototype.setState=function(e,t){return null==this.__v?null==this.state&&console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n'+l(r())):null==this.__P&&console.warn('Can\'t call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+l(this.__v)),U.call(this,e,t)};var D=x.Component.prototype.forceUpdate;x.Component.prototype.forceUpdate=function(e){return null==this.__v?console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n'+l(r())):null==this.__P&&console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+l(this.__v)),D.call(this,e)},function(){!function(){var e=x.options.__b,t=x.options.diffed,n=x.options.__,o=x.options.vnode,r=x.options.__r;x.options.diffed=function(e){i(e)&&T.pop(),S.pop(),t&&t(e)},x.options.__b=function(t){i(t)&&S.push(t),e&&e(t)},x.options.__=function(e,t){T=[],n&&n(e,t)},x.options.vnode=function(e){e.__o=T.length>0?T[T.length-1]:null,o&&o(e)},x.options.__r=function(e){i(e)&&T.push(e),r&&r(e)}}();var e=!1,t=x.options.__b,n=x.options.diffed,r=x.options.vnode,a=x.options.__e,c=x.options.__,_=x.options.__h,s=P?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,p=[];x.options.__e=function(e,t,n){if(t&&t.__c&&"function"==typeof e.then){var r=e;e=new Error("Missing Suspense. The throwing component was: "+o(t));for(var i=t;i;i=i.__)if(i.__c&&i.__c.__c){e=r;break}if(e instanceof Error)throw e}try{a(e,t,n),"function"!=typeof e.then&&setTimeout((function(){throw e}))}catch(e){throw e}},x.options.__=function(e,t){if(!t)throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");var n;switch(t.nodeType){case 1:case 11:case 9:n=!0;break;default:n=!1}if(!n){var r=o(e);throw new Error("Expected a valid HTML node as a second argument to render.\tReceived "+t+" instead: render(<"+r+" />, "+t+");")}c&&c(e,t)},x.options.__b=function(n){var r=n.type,i=function e(t){return t?"function"==typeof t.type?e(t.__):t:{}}(n.__);if(e=!0,void 0===r)throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports"+u(n)+"\n\n"+l(n));if(null!=r&&"object"==typeof r){if(void 0!==r.__k&&void 0!==r.__e)throw new Error("Invalid type passed to createElement(): "+r+"\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My"+o(n)+" = "+u(r)+";\n  let vnode = <My"+o(n)+" />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n"+l(n));throw new Error("Invalid type passed to createElement(): "+(Array.isArray(r)?"array":r))}if("thead"!==r&&"tfoot"!==r&&"tbody"!==r||"table"===i.type?"tr"===r&&"thead"!==i.type&&"tfoot"!==i.type&&"tbody"!==i.type&&"table"!==i.type?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+u(n)+"\n\n"+l(n)):"td"===r&&"tr"!==i.type?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+u(n)+"\n\n"+l(n)):"th"===r&&"tr"!==i.type&&console.error("Improper nesting of table. Your <th> should have a <tr>."+u(n)+"\n\n"+l(n)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+u(n)+"\n\n"+l(n)),void 0!==n.ref&&"function"!=typeof n.ref&&"object"!=typeof n.ref&&!("$$typeof"in n))throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got ['+typeof n.ref+"] instead\n"+u(n)+"\n\n"+l(n));if("string"==typeof n.type)for(var a in n.props)if("o"===a[0]&&"n"===a[1]&&"function"!=typeof n.props[a]&&null!=n.props[a])throw new Error("Component's \""+a+'" property should be a function, but got ['+typeof n.props[a]+"] instead\n"+u(n)+"\n\n"+l(n));if("function"==typeof n.type&&n.type.propTypes){if("Lazy"===n.type.displayName&&s&&!s.lazyPropTypes.has(n.type)){var c="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var _=n.type();s.lazyPropTypes.set(n.type,!0),console.warn(c+"Component wrapped in lazy() is "+o(_))}catch(n){console.warn(c+"We will log the wrapped component's name once it is loaded.")}}var p=n.props;n.type.__f&&delete(p=function(e,t){for(var n in t)e[n]=t[n];return e}({},p)).ref,function(e,t,n,o,r){Object.keys(e).forEach((function(n){var i;try{i=e[n](t,n,o,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){i=e}!i||i.message in j||(j[i.message]=!0,console.error("Failed prop type: "+i.message+(r&&"\n"+r()||"")))}))}(n.type.propTypes,p,0,o(n),(function(){return l(n)}))}t&&t(n)},x.options.__h=function(t,n,o){if(!t||!e)throw new Error("Hook can only be invoked from render methods.");_&&_(t,n,o)};var f=function(e,t){return{get:function(){var n="get"+e+t;p&&p.indexOf(n)<0&&(p.push(n),console.warn("getting vnode."+e+" is deprecated, "+t))},set:function(){var n="set"+e+t;p&&p.indexOf(n)<0&&(p.push(n),console.warn("setting vnode."+e+" is not allowed, "+t))}}},d={nodeName:f("nodeName","use vnode.type"),attributes:f("attributes","use vnode.props"),children:f("children","use vnode.props.children")},h=Object.create({},d);x.options.vnode=function(e){var t=e.props;if(null!==e.type&&null!=t&&("__source"in t||"__self"in t)){var n=e.props={};for(var o in t){var i=t[o];"__source"===o?e.__source=i:"__self"===o?e.__self=i:n[o]=i}}e.__proto__=h,r&&r(e)},x.options.diffed=function(t){if(t.__k&&t.__k.forEach((function(e){if(e&&void 0===e.type){delete e.__,delete e.__b;var n=Object.keys(e).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+n+"}.\n\n"+l(t))}})),e=!1,n&&n(t),null!=t.__k)for(var o=[],r=0;r<t.__k.length;r++){var i=t.__k[r];if(i&&null!=i.key){var a=i.key;if(-1!==o.indexOf(a)){console.error('Following component has two or more children with the same key attribute: "'+a+'". This may cause glitches and misbehavior in rendering process. Component: \n\n'+u(t)+"\n\n"+l(t));break}o.push(a)}}}}();var L={},M=null,W=[],I=[],R={},F=!1,N=function(e){function t(t){e.call(this,t),t.history&&(M=t.history),this.state={url:t.url||d()},F||("function"==typeof addEventListener&&(M||addEventListener("popstate",(function(){y(d())})),addEventListener("click",g)),F=!0)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(x.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){W.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;M&&(this.unlisten=M.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),W.splice(W.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(s).sort(_).map((function(e){var o=c(t,e.props.path,e.props);if(o){if(!1!==n){var r={url:t,matches:o};return a(r,o),delete r.ref,delete r.key,Object(x.cloneElement)(e,r)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,o=e.onChange,r=t.url,i=this.getMatchingChildren(Object(x.toChildArray)(n),r,!0),l=i[0]||null,u=this.previousUrl;return r!==u&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:u,active:i,current:l})),l},t}(x.Component);N.subscribers=I,N.getCurrentUrl=d,N.route=h,N.Router=N,N.Route=function(e){return Object(x.createElement)(e.component,e)},N.Link=function(e){return Object(x.createElement)("a",a({onClick:v},e))},N.exec=c;let H="";H="/simple-pwa-tools";var $,V,z=H,K=[],B=x.options.__b,Y=x.options.__r,q=x.options.diffed,J=x.options.__c,Q=x.options.unmount;x.options.__b=function(e){$=null,B&&B(e)},x.options.__r=function(e){Y&&Y(e),0;var t=($=e.__c).__H;t&&(t.__h.forEach(w),t.__h.forEach(C),t.__h=[])},x.options.diffed=function(e){q&&q(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==K.push(t)&&V===x.options.requestAnimationFrame||((V=x.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),X&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);X&&(t=requestAnimationFrame(n))})(k)),$=null},x.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(w),e.__h=e.__h.filter((function(e){return!e.__||C(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],x.options.__e(n,e.__v)}})),J&&J(e,t)},x.options.unmount=function(e){Q&&Q(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{w(e)}catch(e){t=e}})),t&&x.options.__e(t,n.__v))};var X="function"==typeof requestAnimationFrame;class G extends x.Component{render(){return Object(x.h)("div",{align:"center"},Object(x.h)("nav",null,Object(x.h)("ul",null,Object(x.h)("li",null,Object(x.h)("a",{href:`${z}/`},"Home")),Object(x.h)("li",null,Object(x.h)("a",{href:`${z}/FlashcardTool`},"Flashcard Tool")))),Object(x.h)(N,null,Object(x.h)(E,{path:`${z}/`}),Object(x.h)(Z,{path:`${z}/FlashcardTool`})))}}class Z extends x.Component{constructor(...e){super(...e),O(this,"state",{value:"",newValue:""}),O(this,"onInput",(e=>{this.setState({value:e.target.value})})),O(this,"onSubmit",(e=>{e.preventDefault();let t=this.state.value.replace(/\[[^\]]+\]/g,"[ ]");this.setState({newValue:t}),function(e){function t(t){t.clipboardData.setData("text/html",e),t.clipboardData.setData("text/plain",e),t.preventDefault()}"undefined"!=typeof window&&(document.addEventListener("copy",t),document.execCommand("copy"),document.removeEventListener("copy",t))}(t)}))}render(){return Object(x.h)("div",{align:"center"},Object(x.h)("h1",null,"Flashcard maker"),Object(x.h)("form",{onSubmit:this.onSubmit},Object(x.h)("input",{type:"text",value:this.state.value,onInput:this.onInput}),Object(x.h)("button",{type:"submit","margin-left":"8px;"},"Set")),Object(x.h)("p",null,Object(x.h)("span",{type:"text",class:"newlabel"},this.state.newValue)))}}"undefined"!=typeof window&&Object(x.render)(Object(x.h)(G,null),document.body)},hosL:function(e,t,n){"use strict";function o(e,t){for(var n in t)e[n]=t[n];return e}function r(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var o,r,i,u={};for(i in t)"key"==i?o=t[i]:"ref"==i?r=t[i]:u[i]=t[i];if(arguments.length>2&&(u.children=arguments.length>3?U.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===u[i]&&(u[i]=e.defaultProps[i]);return l(e,u,o,r,null)}function l(e,t,n,o,r){var i={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++L:r};return null==r&&null!=D.vnode&&D.vnode(i),i}function u(){return{current:null}}function a(e){return e.children}function c(e,t){this.props=e,this.context=t}function _(e,t){if(null==t)return e.__?_(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?_(e):null}function s(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return s(e)}}function p(e){(!e.__d&&(e.__d=!0)&&W.push(e)&&!f.__r++||R!==D.debounceRendering)&&((R=D.debounceRendering)||I)(f)}function f(){for(var e;f.__r=W.length;)e=W.sort((function(e,t){return e.__v.__b-t.__v.__b})),W=[],e.some((function(e){var t,n,r,i,l,u;e.__d&&(l=(i=(t=e).__v).__e,(u=t.__P)&&(n=[],(r=o({},i)).__v=i.__v+1,w(u,i,r,t.__n,void 0!==u.ownerSVGElement,null!=i.__h?[l]:null,n,null==l?_(i):l,i.__h),C(n,i),i.__e!=l&&s(i)))}))}function d(e,t,n,o,r,i,u,c,s,p){var f,d,y,v,b,g,k,C=o&&o.__k||H,O=C.length;for(n.__k=[],f=0;f<t.length;f++)if(null!=(v=n.__k[f]=null==(v=t[f])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?l(null,v,null,null,v):Array.isArray(v)?l(a,{children:v},null,null,null):v.__b>0?l(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(y=C[f])||y&&v.key==y.key&&v.type===y.type)C[f]=void 0;else for(d=0;d<O;d++){if((y=C[d])&&v.key==y.key&&v.type===y.type){C[d]=void 0;break}y=null}w(e,v,y=y||N,r,i,u,c,s,p),b=v.__e,(d=v.ref)&&y.ref!=d&&(k||(k=[]),y.ref&&k.push(y.ref,null,v),k.push(d,v.__c||b,v)),null!=b?(null==g&&(g=b),"function"==typeof v.type&&v.__k===y.__k?v.__d=s=h(v,s,e):s=m(e,v,y,C,b,s),"function"==typeof n.type&&(n.__d=s)):s&&y.__e==s&&s.parentNode!=e&&(s=_(y))}for(n.__e=g,f=O;f--;)null!=C[f]&&("function"==typeof n.type&&null!=C[f].__e&&C[f].__e==n.__d&&(n.__d=_(o,f+1)),x(C[f],C[f]));if(k)for(f=0;f<k.length;f++)E(k[f],k[++f],k[++f])}function h(e,t,n){for(var o,r=e.__k,i=0;r&&i<r.length;i++)(o=r[i])&&(o.__=e,t="function"==typeof o.type?h(o,t,n):m(n,o,o,r,o.__e,t));return t}function y(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){y(e,t)})):t.push(e)),t}function m(e,t,n,o,r,i){var l,u,a;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||r!=i||null==r.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(r),l=null;else{for(u=i,a=0;(u=u.nextSibling)&&a<o.length;a+=2)if(u==r)break e;e.insertBefore(r,i),l=i}return void 0!==l?l:r.nextSibling}function v(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||$.test(t)?n:n+"px"}function b(e,t,n,o,r){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||v(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||v(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o||e.addEventListener(t,i?k:g,i):e.removeEventListener(t,i?k:g,i);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function g(e){this.l[e.type+!1](D.event?D.event(e):e)}function k(e){this.l[e.type+!0](D.event?D.event(e):e)}function w(e,t,n,r,i,l,u,_,s){var p,f,h,y,m,v,b,g,k,w,C,E=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,_=t.__e=n.__e,t.__h=null,l=[_]),(p=D.__b)&&p(t);try{e:if("function"==typeof E){if(g=t.props,k=(p=E.contextType)&&r[p.__c],w=p?k?k.props.value:p.__:r,n.__c?b=(f=t.__c=n.__c).__=f.__E:("prototype"in E&&E.prototype.render?t.__c=f=new E(g,w):(t.__c=f=new c(g,w),f.constructor=E,f.render=j),k&&k.sub(f),f.props=g,f.state||(f.state={}),f.context=w,f.__n=r,h=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=E.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=o({},f.__s)),o(f.__s,E.getDerivedStateFromProps(g,f.__s))),y=f.props,m=f.state,h)null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==E.getDerivedStateFromProps&&g!==y&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(g,w),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(g,f.__s,w)||t.__v===n.__v){f.props=g,f.state=f.__s,t.__v!==n.__v&&(f.__d=!1),f.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),f.__h.length&&u.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(g,f.__s,w),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(y,m,v)}))}f.context=w,f.props=g,f.state=f.__s,(p=D.__r)&&p(t),f.__d=!1,f.__v=t,f.__P=e,p=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(r=o(o({},r),f.getChildContext())),h||null==f.getSnapshotBeforeUpdate||(v=f.getSnapshotBeforeUpdate(y,m)),C=null!=p&&p.type===a&&null==p.key?p.props.children:p,d(e,Array.isArray(C)?C:[C],t,n,r,i,l,u,_,s),f.base=t.__e,t.__h=null,f.__h.length&&u.push(f),b&&(f.__E=f.__=null),f.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=O(n.__e,t,n,r,i,l,u,s);(p=D.diffed)&&p(t)}catch(e){t.__v=null,(s||null!=l)&&(t.__e=_,t.__h=!!s,l[l.indexOf(_)]=null),D.__e(e,t,n)}}function C(e,t){D.__c&&D.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){D.__e(e,t.__v)}}))}function O(e,t,n,o,i,l,u,a){var c,s,p,f=n.props,h=t.props,y=t.type,m=0;if("svg"===y&&(i=!0),null!=l)for(;m<l.length;m++)if((c=l[m])&&"setAttribute"in c==!!y&&(y?c.localName===y:3===c.nodeType)){e=c,l[m]=null;break}if(null==e){if(null===y)return document.createTextNode(h);e=i?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),l=null,a=!1}if(null===y)f===h||a&&e.data===h||(e.data=h);else{if(l=l&&U.call(e.childNodes),s=(f=n.props||N).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!a){if(null!=l)for(f={},m=0;m<e.attributes.length;m++)f[e.attributes[m].name]=e.attributes[m].value;(p||s)&&(p&&(s&&p.__html==s.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,t,n,o,r){var i;for(i in n)"children"===i||"key"===i||i in t||b(e,i,null,n[i],o);for(i in t)r&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||b(e,i,t[i],n[i],o)}(e,h,f,i,a),p)t.__k=[];else if(m=t.props.children,d(e,Array.isArray(m)?m:[m],t,n,o,i&&"foreignObject"!==y,l,u,l?l[0]:n.__k&&_(n,0),a),null!=l)for(m=l.length;m--;)null!=l[m]&&r(l[m]);a||("value"in h&&void 0!==(m=h.value)&&(m!==f.value||m!==e.value||"progress"===y&&!m)&&b(e,"value",m,f.value,!1),"checked"in h&&void 0!==(m=h.checked)&&m!==e.checked&&b(e,"checked",m,f.checked,!1))}return e}function E(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){D.__e(e,n)}}function x(e,t,n){var o,i;if(D.unmount&&D.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||E(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){D.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&x(o[i],t,"function"!=typeof e.type);n||null==e.__e||r(e.__e),e.__e=e.__d=void 0}function j(e,t,n){return this.constructor(e,n)}function S(e,t,n){var o,r,l;D.__&&D.__(e,t),r=(o="function"==typeof n)?null:n&&n.__k||t.__k,l=[],w(t,e=(!o&&n||t).__k=i(a,null,[e]),r||N,N,void 0!==t.ownerSVGElement,!o&&n?[n]:r?null:t.firstChild?U.call(t.childNodes):null,l,!o&&n?n:r?r.__e:t.firstChild,o),C(l,e)}function T(e,t){S(e,t,T)}function A(e,t,n){var r,i,u,a=o({},e.props);for(u in t)"key"==u?r=t[u]:"ref"==u?i=t[u]:a[u]=t[u];return arguments.length>2&&(a.children=arguments.length>3?U.call(arguments,2):n),l(e.type,a,r||e.key,i||e.ref,null)}function P(e,t){var n={__c:t="__cC"+F++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,o;return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(p)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return S})),n.d(t,"hydrate",(function(){return T})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return a})),n.d(t,"createRef",(function(){return u})),n.d(t,"isValidElement",(function(){return M})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return A})),n.d(t,"createContext",(function(){return P})),n.d(t,"toChildArray",(function(){return y})),n.d(t,"options",(function(){return D}));var U,D,L,M,W,I,R,F,N={},H=[],$=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;U=H.slice,D={__e:function(e,t){for(var n,o,r;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return n.__E=n}catch(t){e=t}throw e}},L=0,M=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof e&&(e=e(o({},n),this.props)),e&&o(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),p(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),p(this))},c.prototype.render=a,W=[],I="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f.__r=0,F=0},mdyV:function(e,t,n){"use strict";n.r(t);var o=n("hosL");const{h:r,render:i,hydrate:l}=o,u=e=>e&&e.default?e.default:e,a=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof u(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=u(n("QfWi")),o={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(o=JSON.parse(decodeURI(c.innerHTML)).preRenderData||o);const _={preRenderData:o},s=o.url?a(o.url):"",p=l&&s===a(location.pathname);e=(p?l:i)(r(t,{CLI_DATA:_}),document.body,e)};0,t()}}});
//# sourceMappingURL=bundle.7bfda.esm.js.map