module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/simple-pwa-tools/",n(n.s="QfWi")}({HteQ:function(t,e){t.exports=require("preact")},QfWi:function(t,e,n){"use strict";n.r(e);var o=n("HteQ");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}"undefined"!=typeof window&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.6.4",o.options,{Fragment:o.Fragment,Component:o.Component});var i={};function a(t){return t.type===o.Fragment?"Fragment":"function"==typeof t.type?t.type.displayName||t.type.name:"string"==typeof t.type?t.type:"#text"}var u=[],c=[];function p(){return u.length>0?u[u.length-1]:null}var l=!1;function s(t){return"function"==typeof t.type&&t.type!=o.Fragment}function f(t){for(var e=[t],n=t;null!=n.__o;)e.push(n.__o),n=n.__o;return e.reduce((function(t,e){t+="  in "+a(e);var n=e.__source;return n?t+=" (at "+n.fileName+":"+n.lineNumber+")":l||(l=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),t+"\n"}),"")}var d="function"==typeof WeakMap,h=o.Component.prototype.setState;o.Component.prototype.setState=function(t,e){return null==this.__v?null==this.state&&console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n'+f(p())):null==this.__P&&console.warn('Can\'t call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+f(this.__v)),h.call(this,t,e)};var y=o.Component.prototype.forceUpdate;function m(t){var e=t.props,n=a(t),o="";for(var r in e)if(e.hasOwnProperty(r)&&"children"!==r){var i=e[r];"function"==typeof i&&(i="function "+(i.displayName||i.name)+"() {}"),i=Object(i)!==i||i.toString?i+"":Object.prototype.toString.call(i),o+=" "+r+"="+JSON.stringify(i)}var u=e.children;return"<"+n+o+(u&&u.length?">..</"+n+">":" />")}o.Component.prototype.forceUpdate=function(t){return null==this.__v?console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n'+f(p())):null==this.__P&&console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+f(this.__v)),y.call(this,t)},function(){!function(){var t=o.options.__b,e=o.options.diffed,n=o.options.__,r=o.options.vnode,i=o.options.__r;o.options.diffed=function(t){s(t)&&c.pop(),u.pop(),e&&e(t)},o.options.__b=function(e){s(e)&&u.push(e),t&&t(e)},o.options.__=function(t,e){c=[],n&&n(t,e)},o.options.vnode=function(t){t.__o=c.length>0?c[c.length-1]:null,r&&r(t)},o.options.__r=function(t){s(t)&&c.push(t),i&&i(t)}}();var t=!1,e=o.options.__b,n=o.options.diffed,p=o.options.vnode,l=o.options.__e,h=o.options.__,y=o.options.__h,b=d?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,v=[];o.options.__e=function(t,e,n){if(e&&e.__c&&"function"==typeof t.then){var o=t;t=new Error("Missing Suspense. The throwing component was: "+a(e));for(var r=e;r;r=r.__)if(r.__c&&r.__c.__c){t=o;break}if(t instanceof Error)throw t}try{l(t,e,n),"function"!=typeof t.then&&setTimeout((function(){throw t}))}catch(t){throw t}},o.options.__=function(t,e){if(!e)throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");var n;switch(e.nodeType){case 1:case 11:case 9:n=!0;break;default:n=!1}if(!n){var o=a(t);throw new Error("Expected a valid HTML node as a second argument to render.\tReceived "+e+" instead: render(<"+o+" />, "+e+");")}h&&h(t,e)},o.options.__b=function(n){var o=n.type,u=function t(e){return e?"function"==typeof e.type?t(e.__):e:{}}(n.__);if(t=!0,void 0===o)throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports"+m(n)+"\n\n"+f(n));if(null!=o&&"object"==r(o)){if(void 0!==o.__k&&void 0!==o.__e)throw new Error("Invalid type passed to createElement(): "+o+"\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My"+a(n)+" = "+m(o)+";\n  let vnode = <My"+a(n)+" />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n"+f(n));throw new Error("Invalid type passed to createElement(): "+(Array.isArray(o)?"array":o))}if("thead"!==o&&"tfoot"!==o&&"tbody"!==o||"table"===u.type?"tr"===o&&"thead"!==u.type&&"tfoot"!==u.type&&"tbody"!==u.type&&"table"!==u.type?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+m(n)+"\n\n"+f(n)):"td"===o&&"tr"!==u.type?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+m(n)+"\n\n"+f(n)):"th"===o&&"tr"!==u.type&&console.error("Improper nesting of table. Your <th> should have a <tr>."+m(n)+"\n\n"+f(n)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+m(n)+"\n\n"+f(n)),void 0!==n.ref&&"function"!=typeof n.ref&&"object"!=r(n.ref)&&!("$$typeof"in n))throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got ['+r(n.ref)+"] instead\n"+m(n)+"\n\n"+f(n));if("string"==typeof n.type)for(var c in n.props)if("o"===c[0]&&"n"===c[1]&&"function"!=typeof n.props[c]&&null!=n.props[c])throw new Error("Component's \""+c+'" property should be a function, but got ['+r(n.props[c])+"] instead\n"+m(n)+"\n\n"+f(n));if("function"==typeof n.type&&n.type.propTypes){if("Lazy"===n.type.displayName&&b&&!b.lazyPropTypes.has(n.type)){var p="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var l=n.type();b.lazyPropTypes.set(n.type,!0),console.warn(p+"Component wrapped in lazy() is "+a(l))}catch(n){console.warn(p+"We will log the wrapped component's name once it is loaded.")}}var s=n.props;n.type.__f&&delete(s=function(t,e){for(var n in e)t[n]=e[n];return t}({},s)).ref,function(t,e,n,o,r){Object.keys(t).forEach((function(n){var a;try{a=t[n](e,n,o,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(t){a=t}!a||a.message in i||(i[a.message]=!0,console.error("Failed prop type: "+a.message+(r&&"\n"+r()||"")))}))}(n.type.propTypes,s,0,a(n),(function(){return f(n)}))}e&&e(n)},o.options.__h=function(e,n,o){if(!e||!t)throw new Error("Hook can only be invoked from render methods.");y&&y(e,n,o)};var _=function(t,e){return{get:function(){var n="get"+t+e;v&&v.indexOf(n)<0&&(v.push(n),console.warn("getting vnode."+t+" is deprecated, "+e))},set:function(){var n="set"+t+e;v&&v.indexOf(n)<0&&(v.push(n),console.warn("setting vnode."+t+" is not allowed, "+e))}}},g={nodeName:_("nodeName","use vnode.type"),attributes:_("attributes","use vnode.props"),children:_("children","use vnode.props.children")},w=Object.create({},g);o.options.vnode=function(t){var e=t.props;if(null!==t.type&&null!=e&&("__source"in e||"__self"in e)){var n=t.props={};for(var o in e){var r=e[o];"__source"===o?t.__source=r:"__self"===o?t.__self=r:n[o]=r}}t.__proto__=w,p&&p(t)},o.options.diffed=function(e){if(e.__k&&e.__k.forEach((function(t){if(t&&void 0===t.type){delete t.__,delete t.__b;var n=Object.keys(t).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+n+"}.\n\n"+f(e))}})),t=!1,n&&n(e),null!=e.__k)for(var o=[],r=0;r<e.__k.length;r++){var i=e.__k[r];if(i&&null!=i.key){var a=i.key;if(-1!==o.indexOf(a)){console.error('Following component has two or more children with the same key attribute: "'+a+'". This may cause glitches and misbehavior in rendering process. Component: \n\n'+m(e)+"\n\n"+f(e));break}o.push(a)}}}}();var b={};function v(t,e){for(var n in e)t[n]=e[n];return t}function _(t,e,n){var o,r=/(?:\?([^#]*))?(#.*)?$/,i=t.match(r),a={};if(i&&i[1])for(var u=i[1].split("&"),c=0;c<u.length;c++){var p=u[c].split("=");a[decodeURIComponent(p[0])]=decodeURIComponent(p.slice(1).join("="))}t=O(t.replace(r,"")),e=O(e||"");for(var l=Math.max(t.length,e.length),s=0;s<l;s++)if(e[s]&&":"===e[s].charAt(0)){var f=e[s].replace(/(^:|[+*?]+$)/g,""),d=(e[s].match(/[+*?]+$/)||b)[0]||"",h=~d.indexOf("+"),y=~d.indexOf("*"),m=t[s]||"";if(!m&&!y&&(d.indexOf("?")<0||h)){o=!1;break}if(a[f]=decodeURIComponent(m),h||y){a[f]=t.slice(s).map(decodeURIComponent).join("/");break}}else if(e[s]!==t[s]){o=!1;break}return(!0===n.default||!1!==o)&&a}function g(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function w(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,O(e).map(j).join(""));var e}(t),t.props}function O(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function j(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var S=null,k=[],C=[],E={};function x(){var t;return""+((t=S&&S.location?S.location:S&&S.getCurrentLocation?S.getCurrentLocation():"undefined"!=typeof location?location:E).pathname||"")+(t.search||"")}function T(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=k.length;e--;)if(k[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),S&&S[e]?S[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),P(t)}function P(t){for(var e=!1,n=0;n<k.length;n++)!0===k[n].routeTo(t)&&(e=!0);for(var o=C.length;o--;)C[o](t);return e}function U(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return T(e)}}function A(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return U(t.currentTarget||t.target||this),R(t)}function R(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function I(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(U(e))return R(t)}}while(e=e.parentNode)}}var M=!1;var D=function(t){function e(e){t.call(this,e),e.history&&(S=e.history),this.state={url:e.url||x()},M||("function"==typeof addEventListener&&(S||addEventListener("popstate",(function(){P(x())})),addEventListener("click",I)),M=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(o.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){k.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;S&&(this.unlisten=S.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),k.splice(k.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(w).sort(g).map((function(t){var r=_(e,t.props.path,t.props);if(r){if(!1!==n){var i={url:e,matches:r};return v(i,r),delete i.ref,delete i.key,Object(o.cloneElement)(t,i)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,i=e.url,a=this.getMatchingChildren(Object(o.toChildArray)(n),i,!0),u=a[0]||null,c=this.previousUrl;return i!==c&&(this.previousUrl=i,"function"==typeof r&&r({router:this,url:i,previous:c,active:a,current:u})),u},e}(o.Component);D.subscribers=C,D.getCurrentUrl=x,D.route=T,D.Router=D,D.Route=function(t){return Object(o.createElement)(t.component,t)},D.Link=function(t){return Object(o.createElement)("a",v({onClick:A},t))},D.exec=_;var L="/".concat("simple-pwa-tools");function W(t){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function N(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function K(t,e){return(K=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=V(t);if(e){var r=V(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return $(this,n)}}function $(t,e){if(e&&("object"===W(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return H(t)}function H(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function V(t){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function B(t){function e(e){e.clipboardData.setData("text/html",t),e.clipboardData.setData("text/plain",t),e.preventDefault()}"undefined"!=typeof window&&(document.addEventListener("copy",e),document.execCommand("copy"),document.removeEventListener("copy",e))}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(t,"prototype",{value:Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),writable:!1}),e&&K(t,e)}(a,t);var e,n,r,i=z(a);function a(){var t;F(this,a);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return Y(H(t=i.call.apply(i,[this].concat(n))),"state",{value:"",newValue:"Val"}),Y(H(t),"onInput",(function(e){t.setState({value:e.target.value})})),Y(H(t),"onSubmit",(function(e){e.preventDefault();var n=t.state.value.replace(/\[[^\]]+\]/g,"[ ]");t.setState({newValue:n}),B(n)})),t}return e=a,(n=[{key:"render",value:function(){return Object(o.h)("div",{align:"center"},Object(o.h)("nav",null,Object(o.h)("ul",null,Object(o.h)("li",null,Object(o.h)("a",{href:"".concat(L,"/")},"Home")),Object(o.h)("li",null,Object(o.h)("a",{href:"".concat(L,"/FlashcardTool")},"Flashcard Tool")))),Object(o.h)(D,null,Object(o.h)(Q,{path:"".concat(L,"/")}),Object(o.h)(X,{path:"".concat(L,"/FlashcardTool")})))}}])&&N(e.prototype,n),r&&N(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(o.Component);function Q(){return Object(o.h)("div",{align:"center"},Object(o.h)("h2",null,"Simple PWA tools"),Object(o.h)("p",null,"A collection of simple tools written as PWAs."))}function X(){return Object(o.h)("div",{align:"center"},Object(o.h)("h1",null,"Flashcard maker"),Object(o.h)("form",{onSubmit:this.onSubmit},Object(o.h)("input",{type:"text",value:this.state.value,onInput:this.onInput}),Object(o.h)("button",{type:"submit","margin-left":"8px;"},"Set")),Object(o.h)("p",null,Object(o.h)("span",{type:"text",class:"newlabel"},this.state.newValue)))}"undefined"!=typeof window&&Object(o.render)(Object(o.h)(J,null),document.body)}});
//# sourceMappingURL=ssr-bundle.js.map