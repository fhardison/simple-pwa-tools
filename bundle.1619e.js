!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/simple-pwa-tools/",t(t.s="mdyV")}({QfWi:function(e,t,n){"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function r(e){return e.type===W.b?"Fragment":"function"==typeof e.type?e.type.displayName||e.type.name:"string"==typeof e.type?e.type:"#text"}function i(){return H.length>0?H[H.length-1]:null}function u(e){return"function"==typeof e.type&&e.type!=W.b}function l(e){for(var t=[e],n=e;null!=n.__o;)t.push(n.__o),n=n.__o;return t.reduce((function(e,t){e+="  in "+r(t);var n=t.__source;return n?e+=" (at "+n.fileName+":"+n.lineNumber+")":V||(V=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),e+"\n"}),"")}function a(e){var t=e.props,n=r(e),o="";for(var i in t)if(t.hasOwnProperty(i)&&"children"!==i){var u=t[i];"function"==typeof u&&(u="function "+(u.displayName||u.name)+"() {}"),u=Object(u)!==u||u.toString?u+"":Object.prototype.toString.call(u),o+=" "+i+"="+JSON.stringify(u)}var l=t.children;return"<"+n+o+(l&&l.length?">..</"+n+">":" />")}function c(e,t){for(var n in t)e[n]=t[n];return e}function _(e,t,n){var o,r=/(?:\?([^#]*))?(#.*)?$/,i=e.match(r),u={};if(i&&i[1])for(var l=i[1].split("&"),a=0;a<l.length;a++){var c=l[a].split("=");u[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}e=s(e.replace(r,"")),t=s(t||"");for(var _=Math.max(e.length,t.length),f=0;f<_;f++)if(t[f]&&":"===t[f].charAt(0)){var p=t[f].replace(/(^:|[+*?]+$)/g,""),d=(t[f].match(/[+*?]+$/)||K)[0]||"",h=~d.indexOf("+"),y=~d.indexOf("*"),v=e[f]||"";if(!v&&!y&&(d.indexOf("?")<0||h)){o=!1;break}if(u[p]=decodeURIComponent(v),h||y){u[p]=e.slice(f).map(decodeURIComponent).join("/");break}}else if(t[f]!==e[f]){o=!1;break}return(!0===n.default||!1!==o)&&u}function f(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function p(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,s(t).map(d).join(""));var t}(e),e.props}function s(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function d(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}function h(){var e;return""+((e=Y&&Y.location?Y.location:Y&&Y.getCurrentLocation?Y.getCurrentLocation():"undefined"!=typeof location?location:Q).pathname||"")+(e.search||"")}function y(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=q.length;t--;)if(q[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),Y&&Y[t]?Y[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),v(e)}function v(e){for(var t=!1,n=0;n<q.length;n++)!0===q[n].routeTo(e)&&(t=!0);for(var o=J.length;o--;)J[o](e);return t}function m(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return y(t)}}function b(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return m(e.currentTarget||e.target||this),g(e)}function g(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function w(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(m(t))return g(e)}}while(t=t.parentNode)}}function k(e,t){W.g.__h&&W.g.__h(ee,e,oe||t),oe=0;var n=ee.__H||(ee.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function O(e){return oe=1,function(e,t,n){var o=k(Z++,2);return o.t=e,o.__c||(o.__=[n?n(t):T(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=ee),o.__}(T,e)}function S(){var e;for(re.sort((function(e,t){return e.__v.__b-t.__v.__b}));e=re.pop();)if(e.__P)try{e.__H.__h.forEach(j),e.__H.__h.forEach(E),e.__H.__h=[]}catch(t){e.__H.__h=[],W.g.__e(t,e.__v)}}function j(e){var t=ee,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),ee=t}function E(e){var t=ee;e.__c=e.__(),ee=t}function T(e,t){return"function"==typeof t?t(e):t}function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var o,r,i=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);u=!0);}catch(e){l=!0,r=e}finally{try{u||null==n.return||n.return()}finally{if(l)throw r}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function U(e,t){return U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},U(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=L(e);if(t){var r=L(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return I(this,n)}}function I(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function M(){return Object(W.e)("div",{align:"center"},Object(W.e)("h2",null,"Simple PWA tools"),Object(W.e)("p",null,"A collection of simple tools written as PWAs."))}function R(){var e=C(O({value:"",newValue:"Val"}),2),t=e[0],n=e[1];return onInput=function(e){n({value:e.target.value,newValue:t.newValue})},onSubmit=function(e){e.preventDefault();var o=t.value.replace(/\[[^\]]+\]/g,"[ ]");n({value:t.value,newValue:o}),function(e){function t(t){t.clipboardData.setData("text/html",e),t.clipboardData.setData("text/plain",e),t.preventDefault()}"undefined"!=typeof window&&(document.addEventListener("copy",t),document.execCommand("copy"),document.removeEventListener("copy",t))}(o)},Object(W.e)("div",{align:"center"},Object(W.e)("h1",null,"Flashcard maker"),Object(W.e)("form",{onSubmit:onSubmit},Object(W.e)("input",{type:"text",value:t.value,onInput:onInput}),Object(W.e)("button",{type:"submit","margin-left":"8px;"},"Set")),Object(W.e)("p",null,Object(W.e)("span",{type:"text",class:"newlabel"},t.newValue)))}n.r(t);var W=n("hosL");"undefined"!=typeof window&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.6.4",W.g,{Fragment:W.b,Component:W.a});var N={},H=[],F=[],V=!1,$="function"==typeof WeakMap,z=W.a.prototype.setState;W.a.prototype.setState=function(e,t){return null==this.__v?null==this.state&&console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n'+l(i())):null==this.__P&&console.warn('Can\'t call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+l(this.__v)),z.call(this,e,t)};var B=W.a.prototype.forceUpdate;W.a.prototype.forceUpdate=function(e){return null==this.__v?console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n'+l(i())):null==this.__P&&console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+l(this.__v)),B.call(this,e)},function(){!function(){var e=W.g.__b,t=W.g.diffed,n=W.g.__,o=W.g.vnode,r=W.g.__r;W.g.diffed=function(e){u(e)&&F.pop(),H.pop(),t&&t(e)},W.g.__b=function(t){u(t)&&H.push(t),e&&e(t)},W.g.__=function(e,t){F=[],n&&n(e,t)},W.g.vnode=function(e){e.__o=F.length>0?F[F.length-1]:null,o&&o(e)},W.g.__r=function(e){u(e)&&F.push(e),r&&r(e)}}();var e=!1,t=W.g.__b,n=W.g.diffed,i=W.g.vnode,c=W.g.__e,_=W.g.__,f=W.g.__h,p=$?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,s=[];W.g.__e=function(e,t,n){if(t&&t.__c&&"function"==typeof e.then){var o=e;e=new Error("Missing Suspense. The throwing component was: "+r(t));for(var i=t;i;i=i.__)if(i.__c&&i.__c.__c){e=o;break}if(e instanceof Error)throw e}try{c(e,t,n),"function"!=typeof e.then&&setTimeout((function(){throw e}))}catch(e){throw e}},W.g.__=function(e,t){if(!t)throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");var n;switch(t.nodeType){case 1:case 11:case 9:n=!0;break;default:n=!1}if(!n){var o=r(e);throw new Error("Expected a valid HTML node as a second argument to render.\tReceived "+t+" instead: render(<"+o+" />, "+t+");")}_&&_(e,t)},W.g.__b=function(n){var i=n.type,u=function e(t){return t?"function"==typeof t.type?e(t.__):t:{}}(n.__);if(e=!0,void 0===i)throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports"+a(n)+"\n\n"+l(n));if(null!=i&&"object"==o(i)){if(void 0!==i.__k&&void 0!==i.__e)throw new Error("Invalid type passed to createElement(): "+i+"\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My"+r(n)+" = "+a(i)+";\n  let vnode = <My"+r(n)+" />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n"+l(n));throw new Error("Invalid type passed to createElement(): "+(Array.isArray(i)?"array":i))}if("thead"!==i&&"tfoot"!==i&&"tbody"!==i||"table"===u.type?"tr"===i&&"thead"!==u.type&&"tfoot"!==u.type&&"tbody"!==u.type&&"table"!==u.type?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+a(n)+"\n\n"+l(n)):"td"===i&&"tr"!==u.type?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+a(n)+"\n\n"+l(n)):"th"===i&&"tr"!==u.type&&console.error("Improper nesting of table. Your <th> should have a <tr>."+a(n)+"\n\n"+l(n)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+a(n)+"\n\n"+l(n)),void 0!==n.ref&&"function"!=typeof n.ref&&"object"!=o(n.ref)&&!("$$typeof"in n))throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got ['+o(n.ref)+"] instead\n"+a(n)+"\n\n"+l(n));if("string"==typeof n.type)for(var c in n.props)if("o"===c[0]&&"n"===c[1]&&"function"!=typeof n.props[c]&&null!=n.props[c])throw new Error("Component's \""+c+'" property should be a function, but got ['+o(n.props[c])+"] instead\n"+a(n)+"\n\n"+l(n));if("function"==typeof n.type&&n.type.propTypes){if("Lazy"===n.type.displayName&&p&&!p.lazyPropTypes.has(n.type)){var _="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var f=n.type();p.lazyPropTypes.set(n.type,!0),console.warn(_+"Component wrapped in lazy() is "+r(f))}catch(n){console.warn(_+"We will log the wrapped component's name once it is loaded.")}}var s=n.props;n.type.__f&&delete(s=function(e,t){for(var n in t)e[n]=t[n];return e}({},s)).ref,function(e,t,n,o,r){Object.keys(e).forEach((function(n){var i;try{i=e[n](t,n,o,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){i=e}!i||i.message in N||(N[i.message]=!0,console.error("Failed prop type: "+i.message+(r&&"\n"+r()||"")))}))}(n.type.propTypes,s,0,r(n),(function(){return l(n)}))}t&&t(n)},W.g.__h=function(t,n,o){if(!t||!e)throw new Error("Hook can only be invoked from render methods.");f&&f(t,n,o)};var d=function(e,t){return{get:function(){var n="get"+e+t;s&&s.indexOf(n)<0&&(s.push(n),console.warn("getting vnode."+e+" is deprecated, "+t))},set:function(){var n="set"+e+t;s&&s.indexOf(n)<0&&(s.push(n),console.warn("setting vnode."+e+" is not allowed, "+t))}}},h={nodeName:d("nodeName","use vnode.type"),attributes:d("attributes","use vnode.props"),children:d("children","use vnode.props.children")},y=Object.create({},h);W.g.vnode=function(e){var t=e.props;if(null!==e.type&&null!=t&&("__source"in t||"__self"in t)){var n=e.props={};for(var o in t){var r=t[o];"__source"===o?e.__source=r:"__self"===o?e.__self=r:n[o]=r}}e.__proto__=y,i&&i(e)},W.g.diffed=function(t){if(t.__k&&t.__k.forEach((function(e){if(e&&void 0===e.type){delete e.__,delete e.__b;var n=Object.keys(e).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+n+"}.\n\n"+l(t))}})),e=!1,n&&n(t),null!=t.__k)for(var o=[],r=0;r<t.__k.length;r++){var i=t.__k[r];if(i&&null!=i.key){var u=i.key;if(-1!==o.indexOf(u)){console.error('Following component has two or more children with the same key attribute: "'+u+'". This may cause glitches and misbehavior in rendering process. Component: \n\n'+a(t)+"\n\n"+l(t));break}o.push(u)}}}}();var K={},Y=null,q=[],J=[],Q={},X=!1,G=function(e){function t(t){e.call(this,t),t.history&&(Y=t.history),this.state={url:t.url||h()},X||("function"==typeof addEventListener&&(Y||addEventListener("popstate",(function(){v(h())})),addEventListener("click",w)),X=!0)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(W.i)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){q.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;Y&&(this.unlisten=Y.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),q.splice(q.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(p).sort(f).map((function(e){var o=_(t,e.props.path,e.props);if(o){if(!1!==n){var r={url:t,matches:o};return c(r,o),delete r.ref,delete r.key,Object(W.c)(e,r)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,o=e.onChange,r=t.url,i=this.getMatchingChildren(Object(W.i)(n),r,!0),u=i[0]||null,l=this.previousUrl;return r!==l&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:l,active:i,current:u})),u},t}(W.a);G.subscribers=J,G.getCurrentUrl=h,G.route=y,G.Router=G,G.Route=function(e){return Object(W.d)(e.component,e)},G.Link=function(e){return Object(W.d)("a",c({onClick:b},e))},G.exec=_;var Z,ee,te,ne="/".concat("simple-pwa-tools"),oe=0,re=[],ie=W.g.__b,ue=W.g.__r,le=W.g.diffed,ae=W.g.__c,ce=W.g.unmount;W.g.__b=function(e){ee=null,ie&&ie(e)},W.g.__r=function(e){ue&&ue(e),Z=0;var t=(ee=e.__c).__H;t&&(t.__h.forEach(j),t.__h.forEach(E),t.__h=[])},W.g.diffed=function(e){le&&le(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==re.push(t)&&te===W.g.requestAnimationFrame||((te=W.g.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),_e&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);_e&&(t=requestAnimationFrame(n))})(S)),ee=null},W.g.__c=function(e,t){t.some((function(e){try{e.__h.forEach(j),e.__h=e.__h.filter((function(e){return!e.__||E(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],W.g.__e(n,e.__v)}})),ae&&ae(e,t)},W.g.unmount=function(e){ce&&ce(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{j(e)}catch(e){t=e}})),t&&W.g.__e(t,n.__v))};var _e="function"==typeof requestAnimationFrame,fe=function(e){function t(){return i.apply(this,arguments)}!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&U(e,t)}(t,e);var n,o,r,i=D(t);return n=t,(o=[{key:"render",value:function(){return Object(W.e)("div",{align:"center"},Object(W.e)("nav",null,Object(W.e)("ul",null,Object(W.e)("li",null,Object(W.e)("a",{href:"".concat(ne,"/")},"Home")),Object(W.e)("li",null,Object(W.e)("a",{href:"".concat(ne,"/FlashcardTool")},"Flashcard Tool")))),Object(W.e)(G,null,Object(W.e)(M,{path:"".concat(ne,"/")}),Object(W.e)(R,{path:"".concat(ne,"/FlashcardTool")})))}}])&&A(n.prototype,o),r&&A(n,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(W.a);"undefined"!=typeof window&&Object(W.h)(Object(W.e)(fe,null),document.body)},hosL:function(e,t,n){"use strict";function o(e,t){for(var n in t)e[n]=t[n];return e}function r(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var o,r,i,l={};for(i in t)"key"==i?o=t[i]:"ref"==i?r=t[i]:l[i]=t[i];if(arguments.length>2&&(l.children=arguments.length>3?P.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return u(e,l,o,r,null)}function u(e,t,n,o,r){var i={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++U:r};return null==r&&null!=A.vnode&&A.vnode(i),i}function l(e){return e.children}function a(e,t){this.props=e,this.context=t}function c(e,t){if(null==t)return e.__?c(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?c(e):null}function _(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return _(e)}}function f(e){(!e.__d&&(e.__d=!0)&&D.push(e)&&!p.__r++||L!==A.debounceRendering)&&((L=A.debounceRendering)||I)(p)}function p(){for(var e;p.__r=D.length;)e=D.sort((function(e,t){return e.__v.__b-t.__v.__b})),D=[],e.some((function(e){var t,n,r,i,u,l;e.__d&&(u=(i=(t=e).__v).__e,(l=t.__P)&&(n=[],(r=o({},i)).__v=i.__v+1,w(l,i,r,t.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?c(i):u,i.__h),k(n,i),i.__e!=u&&_(i)))}))}function s(e,t,n,o,r,i,a,_,f,p){var s,h,v,m,b,g,k,O=o&&o.__k||R,E=O.length;for(n.__k=[],s=0;s<t.length;s++)if(null!=(m=n.__k[s]=null==(m=t[s])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(l,{children:m},null,null,null):m.__b>0?u(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=O[s])||v&&m.key==v.key&&m.type===v.type)O[s]=void 0;else for(h=0;h<E;h++){if((v=O[h])&&m.key==v.key&&m.type===v.type){O[h]=void 0;break}v=null}w(e,m,v=v||M,r,i,a,_,f,p),b=m.__e,(h=m.ref)&&v.ref!=h&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(h,m.__c||b,m)),null!=b?(null==g&&(g=b),"function"==typeof m.type&&m.__k===v.__k?m.__d=f=d(m,f,e):f=y(e,m,v,O,b,f),"function"==typeof n.type&&(n.__d=f)):f&&v.__e==f&&f.parentNode!=e&&(f=c(v))}for(n.__e=g,s=E;s--;)null!=O[s]&&("function"==typeof n.type&&null!=O[s].__e&&O[s].__e==n.__d&&(n.__d=c(o,s+1)),j(O[s],O[s]));if(k)for(s=0;s<k.length;s++)S(k[s],k[++s],k[++s])}function d(e,t,n){for(var o,r=e.__k,i=0;r&&i<r.length;i++)(o=r[i])&&(o.__=e,t="function"==typeof o.type?d(o,t,n):y(n,o,o,r,o.__e,t));return t}function h(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){h(e,t)})):t.push(e)),t}function y(e,t,n,o,r,i){var u,l,a;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(null==n||r!=i||null==r.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(r),u=null;else{for(l=i,a=0;(l=l.nextSibling)&&a<o.length;a+=2)if(l==r)break e;e.insertBefore(r,i),u=i}return void 0!==u?u:r.nextSibling}function v(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||W.test(t)?n:n+"px"}function m(e,t,n,o,r){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||v(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||v(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o||e.addEventListener(t,i?g:b,i):e.removeEventListener(t,i?g:b,i);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function b(e){this.l[e.type+!1](A.event?A.event(e):e)}function g(e){this.l[e.type+!0](A.event?A.event(e):e)}function w(e,t,n,r,i,u,c,_,f){var p,d,h,y,v,m,b,g,w,k,S,j=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(f=n.__h,_=t.__e=n.__e,t.__h=null,u=[_]),(p=A.__b)&&p(t);try{e:if("function"==typeof j){if(g=t.props,w=(p=j.contextType)&&r[p.__c],k=p?w?w.props.value:p.__:r,n.__c?b=(d=t.__c=n.__c).__=d.__E:("prototype"in j&&j.prototype.render?t.__c=d=new j(g,k):(t.__c=d=new a(g,k),d.constructor=j,d.render=E),w&&w.sub(d),d.props=g,d.state||(d.state={}),d.context=k,d.__n=r,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=j.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=o({},d.__s)),o(d.__s,j.getDerivedStateFromProps(g,d.__s))),y=d.props,v=d.state,h)null==j.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==j.getDerivedStateFromProps&&g!==y&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(g,k),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(g,d.__s,k)||t.__v===n.__v){d.props=g,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),d.__h.length&&c.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(g,d.__s,k),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(y,v,m)}))}d.context=k,d.props=g,d.state=d.__s,(p=A.__r)&&p(t),d.__d=!1,d.__v=t,d.__P=e,p=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(r=o(o({},r),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(m=d.getSnapshotBeforeUpdate(y,v)),S=null!=p&&p.type===l&&null==p.key?p.props.children:p,s(e,Array.isArray(S)?S:[S],t,n,r,i,u,c,_,f),d.base=t.__e,t.__h=null,d.__h.length&&c.push(d),b&&(d.__E=d.__=null),d.__e=!1}else null==u&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=O(n.__e,t,n,r,i,u,c,f);(p=A.diffed)&&p(t)}catch(e){t.__v=null,(f||null!=u)&&(t.__e=_,t.__h=!!f,u[u.indexOf(_)]=null),A.__e(e,t,n)}}function k(e,t){A.__c&&A.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){A.__e(e,t.__v)}}))}function O(e,t,n,o,i,u,l,a){var _,f,p,d=n.props,h=t.props,y=t.type,v=0;if("svg"===y&&(i=!0),null!=u)for(;v<u.length;v++)if((_=u[v])&&"setAttribute"in _==!!y&&(y?_.localName===y:3===_.nodeType)){e=_,u[v]=null;break}if(null==e){if(null===y)return document.createTextNode(h);e=i?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),u=null,a=!1}if(null===y)d===h||a&&e.data===h||(e.data=h);else{if(u=u&&P.call(e.childNodes),f=(d=n.props||M).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!a){if(null!=u)for(d={},v=0;v<e.attributes.length;v++)d[e.attributes[v].name]=e.attributes[v].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,t,n,o,r){var i;for(i in n)"children"===i||"key"===i||i in t||m(e,i,null,n[i],o);for(i in t)r&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||m(e,i,t[i],n[i],o)}(e,h,d,i,a),p)t.__k=[];else if(v=t.props.children,s(e,Array.isArray(v)?v:[v],t,n,o,i&&"foreignObject"!==y,u,l,u?u[0]:n.__k&&c(n,0),a),null!=u)for(v=u.length;v--;)null!=u[v]&&r(u[v]);a||("value"in h&&void 0!==(v=h.value)&&(v!==d.value||v!==e.value||"progress"===y&&!v)&&m(e,"value",v,d.value,!1),"checked"in h&&void 0!==(v=h.checked)&&v!==e.checked&&m(e,"checked",v,d.checked,!1))}return e}function S(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){A.__e(e,n)}}function j(e,t,n){var o,i;if(A.unmount&&A.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||S(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){A.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&j(o[i],t,"function"!=typeof e.type);n||null==e.__e||r(e.__e),e.__e=e.__d=void 0}function E(e,t,n){return this.constructor(e,n)}function T(e,t,n){var o,r,u;A.__&&A.__(e,t),r=(o="function"==typeof n)?null:n&&n.__k||t.__k,u=[],w(t,e=(!o&&n||t).__k=i(l,null,[e]),r||M,M,void 0!==t.ownerSVGElement,!o&&n?[n]:r?null:t.firstChild?P.call(t.childNodes):null,u,!o&&n?n:r?r.__e:t.firstChild,o),k(u,e)}function x(e,t){T(e,t,x)}function C(e,t,n){var r,i,l,a=o({},e.props);for(l in t)"key"==l?r=t[l]:"ref"==l?i=t[l]:a[l]=t[l];return arguments.length>2&&(a.children=arguments.length>3?P.call(arguments,2):n),u(e.type,a,r||e.key,i||e.ref,null)}n.d(t,"h",(function(){return T})),n.d(t,"f",(function(){return x})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return C})),n.d(t,"i",(function(){return h})),n.d(t,"g",(function(){return A}));var P,A,U,D,I,L,M={},R=[],W=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;P=R.slice,A={__e:function(e,t){for(var n,o,r;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return n.__E=n}catch(t){e=t}throw e}},U=0,a.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof e&&(e=e(o({},n),this.props)),e&&o(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),f(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},a.prototype.render=l,D=[],I="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0},mdyV:function(e,t,n){"use strict";n.r(t);var o=n("hosL"),r=o.e,i=o.h,u=o.f,l=function(e){return e&&e.default?e.default:e},a=function(e){return"/"===e[e.length-1]?e:e+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw.js"),"function"==typeof l(n("QfWi"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var e=l(n("QfWi")),t={},o=document.querySelector('[type="__PREACT_CLI_DATA__"]');o&&(t=JSON.parse(decodeURI(o.innerHTML)).preRenderData||t);var _={preRenderData:t},f=t.url?a(t.url):"",p=u&&f===a(location.pathname);c=(p?u:i)(r(e,{CLI_DATA:_}),document.body,c)}()}}});
//# sourceMappingURL=bundle.1619e.js.map