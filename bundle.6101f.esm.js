!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/simple-pwa-tools/",t(t.s="mdyV")}({QfWi:function(e,t,n){"use strict";function o(e){return e.type===Z.Fragment?"Fragment":"function"==typeof e.type?e.type.displayName||e.type.name:"string"==typeof e.type?e.type:"#text"}function r(){return te.length>0?te[te.length-1]:null}function i(e){return"function"==typeof e.type&&e.type!=Z.Fragment}function l(e){for(var t=[e],n=e;null!=n.__o;)t.push(n.__o),n=n.__o;return t.reduce((function(e,t){e+="  in "+o(t);var n=t.__source;return n?e+=" (at "+n.fileName+":"+n.lineNumber+")":oe||(oe=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),e+"\n"}),"")}function a(e){var t=e.props,n=o(e),r="";for(var i in t)if(t.hasOwnProperty(i)&&"children"!==i){var l=t[i];"function"==typeof l&&(l="function "+(l.displayName||l.name)+"() {}"),l=Object(l)!==l||l.toString?l+"":Object.prototype.toString.call(l),r+=" "+i+"="+JSON.stringify(l)}var a=t.children;return"<"+n+r+(a&&a.length?">..</"+n+">":" />")}function u(e,t){Z.options.__h&&Z.options.__h(ue,e,ce||t),ce=0;var n=ue.__H||(ue.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function _(e){return ce=1,c(k,e)}function c(e,t,n){var o=u(ae++,2);return o.t=e,o.__c||(o.__=[n?n(t):k(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=ue),o.__}function s(e,t){var n=u(ae++,3);!Z.options.__s&&g(n.__H,t)&&(n.__=e,n.__H=t,ue.__H.__h.push(n))}function p(e,t){var n=u(ae++,4);!Z.options.__s&&g(n.__H,t)&&(n.__=e,n.__H=t,ue.__h.push(n))}function f(e){return ce=5,h((function(){return{current:e}}),[])}function h(e,t){var n=u(ae++,7);return g(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function d(e,t){return ce=8,h((function(){return e}),t)}function v(e){var t=ue.context[e.__c],n=u(ae++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(ue)),t.props.value):e.__}function y(){var e;for(se.sort((function(e,t){return e.__v.__b-t.__v.__b}));e=se.pop();)if(e.__P)try{e.__H.__h.forEach(m),e.__H.__h.forEach(b),e.__H.__h=[]}catch(t){e.__H.__h=[],Z.options.__e(t,e.__v)}}function m(e){var t=ue,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),ue=t}function b(e){var t=ue;e.__c=e.__(),ue=t}function g(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function k(e,t){return"function"==typeof t?t(e):t}function w(e,t){for(var n in t)e[n]=t[n];return e}function O(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var o in t)if("__source"!==o&&e[o]!==t[o])return!0;return!1}function E(e){this.props=e}function C(e){function t(t,n){var o=w({},t);return delete o.ref,e(o,(n=t.ref||n)&&("object"!=typeof n||"current"in n)?n:null)}return t.$$typeof=be,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}function j(){this.__u=0,this.t=null,this.__b=null}function S(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function P(){this.u=null,this.o=null}function x(){}function T(){return this.cancelBubble}function A(){return this.defaultPrevented}function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},W.apply(this,arguments)}function H(e){e.preventDefault(),e.returnValue=""}function D(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function U(){return Math.random().toString(36).substr(2,8)}function L(e){var t=e.pathname;t=void 0===t?"/":t;var n=e.search;return e=void 0===(e=e.hash)?"":e,(n=void 0===n?"":n)&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),e&&"#"!==e&&(t+="#"===e.charAt(0)?e:"#"+e),t}function N(e){var t={};if(e){var n=e.indexOf("#");0<=n&&(t.hash=e.substr(n),e=e.substr(0,n)),0<=(n=e.indexOf("?"))&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function R(){}function F(e){let{basename:t="/",children:n=null,location:o,navigationType:r=Ae.Pop,navigator:i,static:l=!1}=e;I();let a=Re(t),u=h((()=>({basename:a,navigator:i,static:l})),[a,i,l]);"string"==typeof o&&(o=N(o));let{pathname:_="/",search:c="",hash:s="",state:p=null,key:f="default"}=o,d=h((()=>{let e=J(_,a);return null==e?null:{pathname:e,search:c,hash:s,state:p,key:f}}),[a,_,c,s,p,f]);return null==d?null:Object(Z.createElement)(De.Provider,{value:u},Object(Z.createElement)(Ue.Provider,{children:n,value:{location:d,navigationType:r}}))}function M(e){I();let{basename:t,navigator:n}=v(De),{hash:o,pathname:r,search:i}=z(e),l=r;if("/"!==t){let n=function(e){return""===e||""===e.pathname?"/":"string"==typeof e?N(e).pathname:e.pathname}(e),o=null!=n&&n.endsWith("/");l="/"===r?t+(o?"/":""):Ne([t,r])}return n.createHref({pathname:l,search:i,hash:o})}function I(){return null!=v(Ue)}function V(){return I(),v(Ue).location}function $(){I();let{basename:e,navigator:t}=v(De),{matches:n}=v(Le),{pathname:o}=V(),r=JSON.stringify(n.map((e=>e.pathnameBase))),i=f(!1);return s((()=>{i.current=!0})),d((function(n,l){if(void 0===l&&(l={}),!i.current)return;if("number"==typeof n)return void t.go(n);let a=B(n,JSON.parse(r),o);"/"!==e&&(a.pathname=Ne([e,a.pathname])),(l.replace?t.replace:t.push)(a,l.state)}),[e,t,r,o])}function z(e){let{matches:t}=v(Le),{pathname:n}=V(),o=JSON.stringify(t.map((e=>e.pathnameBase)));return h((()=>B(e,JSON.parse(o),n)),[e,o,n])}function B(e,t,n){let o,r="string"==typeof e?N(e):e,i=""===e||""===r.pathname?"/":r.pathname;if(null==i)o=n;else{let e=t.length-1;if(i.startsWith("..")){let t=i.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}o=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:o="",hash:r=""}="string"==typeof e?N(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:Fe(o),hash:Me(r)}}(r,o);return i&&"/"!==i&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function J(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Y.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t.indexOf(n=i[o])>=0||(r[n]=e[n]);return r}function K(e){let{basename:t,children:n,window:o}=e,r=f();null==r.current&&(r.current=function(e){function t(){var e=l.location,t=a.state||{};return[t.idx,He({pathname:e.pathname,search:e.search,hash:e.hash,state:t.usr||null,key:t.key||"default"})]}function n(e){return"string"==typeof e?e:L(e)}function o(e,t){return void 0===t&&(t=null),He(W({pathname:s.pathname,hash:"",search:""},"string"==typeof e?N(e):e,{state:t,key:U()}))}function r(e){_=e,e=t(),c=e[0],p.call({action:_,location:s=e[1]})}function i(e){a.go(e)}void 0===e&&(e={});var l=void 0===(e=e.window)?document.defaultView:e,a=l.history,u=null;l.addEventListener("popstate",(function(){if(u)f.call(u),u=null;else{var e=Ae.Pop,n=t(),o=n[0];if(n=n[1],f.length){if(null!=o){var l=c-o;l&&(u={action:e,location:n,retry:function(){i(-1*l)}},i(l))}}else r(e)}}));var _=Ae.Pop,c=(e=t())[0],s=e[1],p=D(),f=D();return null==c&&a.replaceState(W({},a.state,{idx:c=0}),""),{get action(){return _},get location(){return s},createHref:n,push:function e(t,i){var u=Ae.Push,_=o(t,i);if(!f.length||(f.call({action:u,location:_,retry:function(){e(t,i)}}),0)){var s=[{usr:_.state,key:_.key,idx:c+1},n(_)];_=s[0],s=s[1];try{a.pushState(_,"",s)}catch(e){l.location.assign(s)}r(u)}},replace:function e(t,i){var l=Ae.Replace,u=o(t,i);f.length&&(f.call({action:l,location:u,retry:function(){e(t,i)}}),1)||(u=[{usr:u.state,key:u.key,idx:c},n(u)],a.replaceState(u[0],"",u[1]),r(l))},go:i,back:function(){i(-1)},forward:function(){i(1)},listen:function(e){return p.push(e)},block:function(e){var t=f.push(e);return 1===f.length&&l.addEventListener("beforeunload",H),function(){t(),f.length||l.removeEventListener("beforeunload",H)}}}}({window:o}));let i=r.current,[l,a]=_({action:i.action,location:i.location});return p((()=>i.listen(a)),[i]),Object(Z.createElement)(F,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i})}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(){return Object(Z.h)("div",{align:"center"},Object(Z.h)("h2",null,"Simple PWA tools"),Object(Z.h)("p",null,"A collection of simple tools written as PWAs."))}function G(){return Object(Z.h)("div",{align:"center"},Object(Z.h)("h1",null,"Flashcard maker"),Object(Z.h)("form",{onSubmit:this.onSubmit},Object(Z.h)("input",{type:"text",value:this.state.value,onInput:this.onInput}),Object(Z.h)("button",{type:"submit","margin-left":"8px;"},"Set")),Object(Z.h)("p",null,Object(Z.h)("span",{type:"text",class:"newlabel"},this.state.newValue)))}n.r(t);var Z=n("hosL");"undefined"!=typeof window&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.6.4",Z.options,{Fragment:Z.Fragment,Component:Z.Component});var ee={},te=[],ne=[],oe=!1,re="function"==typeof WeakMap,ie=Z.Component.prototype.setState;Z.Component.prototype.setState=function(e,t){return null==this.__v?null==this.state&&console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n'+l(r())):null==this.__P&&console.warn('Can\'t call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+l(this.__v)),ie.call(this,e,t)};var le=Z.Component.prototype.forceUpdate;Z.Component.prototype.forceUpdate=function(e){return null==this.__v?console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n'+l(r())):null==this.__P&&console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+l(this.__v)),le.call(this,e)},function(){!function(){var e=Z.options.__b,t=Z.options.diffed,n=Z.options.__,o=Z.options.vnode,r=Z.options.__r;Z.options.diffed=function(e){i(e)&&ne.pop(),te.pop(),t&&t(e)},Z.options.__b=function(t){i(t)&&te.push(t),e&&e(t)},Z.options.__=function(e,t){ne=[],n&&n(e,t)},Z.options.vnode=function(e){e.__o=ne.length>0?ne[ne.length-1]:null,o&&o(e)},Z.options.__r=function(e){i(e)&&ne.push(e),r&&r(e)}}();var e=!1,t=Z.options.__b,n=Z.options.diffed,r=Z.options.vnode,u=Z.options.__e,_=Z.options.__,c=Z.options.__h,s=re?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,p=[];Z.options.__e=function(e,t,n){if(t&&t.__c&&"function"==typeof e.then){var r=e;e=new Error("Missing Suspense. The throwing component was: "+o(t));for(var i=t;i;i=i.__)if(i.__c&&i.__c.__c){e=r;break}if(e instanceof Error)throw e}try{u(e,t,n),"function"!=typeof e.then&&setTimeout((function(){throw e}))}catch(e){throw e}},Z.options.__=function(e,t){if(!t)throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");var n;switch(t.nodeType){case 1:case 11:case 9:n=!0;break;default:n=!1}if(!n){var r=o(e);throw new Error("Expected a valid HTML node as a second argument to render.\tReceived "+t+" instead: render(<"+r+" />, "+t+");")}_&&_(e,t)},Z.options.__b=function(n){var r=n.type,i=function e(t){return t?"function"==typeof t.type?e(t.__):t:{}}(n.__);if(e=!0,void 0===r)throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports"+a(n)+"\n\n"+l(n));if(null!=r&&"object"==typeof r){if(void 0!==r.__k&&void 0!==r.__e)throw new Error("Invalid type passed to createElement(): "+r+"\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My"+o(n)+" = "+a(r)+";\n  let vnode = <My"+o(n)+" />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n"+l(n));throw new Error("Invalid type passed to createElement(): "+(Array.isArray(r)?"array":r))}if("thead"!==r&&"tfoot"!==r&&"tbody"!==r||"table"===i.type?"tr"===r&&"thead"!==i.type&&"tfoot"!==i.type&&"tbody"!==i.type&&"table"!==i.type?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+a(n)+"\n\n"+l(n)):"td"===r&&"tr"!==i.type?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+a(n)+"\n\n"+l(n)):"th"===r&&"tr"!==i.type&&console.error("Improper nesting of table. Your <th> should have a <tr>."+a(n)+"\n\n"+l(n)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+a(n)+"\n\n"+l(n)),void 0!==n.ref&&"function"!=typeof n.ref&&"object"!=typeof n.ref&&!("$$typeof"in n))throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got ['+typeof n.ref+"] instead\n"+a(n)+"\n\n"+l(n));if("string"==typeof n.type)for(var u in n.props)if("o"===u[0]&&"n"===u[1]&&"function"!=typeof n.props[u]&&null!=n.props[u])throw new Error("Component's \""+u+'" property should be a function, but got ['+typeof n.props[u]+"] instead\n"+a(n)+"\n\n"+l(n));if("function"==typeof n.type&&n.type.propTypes){if("Lazy"===n.type.displayName&&s&&!s.lazyPropTypes.has(n.type)){var _="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var c=n.type();s.lazyPropTypes.set(n.type,!0),console.warn(_+"Component wrapped in lazy() is "+o(c))}catch(n){console.warn(_+"We will log the wrapped component's name once it is loaded.")}}var p=n.props;n.type.__f&&delete(p=function(e,t){for(var n in t)e[n]=t[n];return e}({},p)).ref,function(e,t,n,o,r){Object.keys(e).forEach((function(n){var i;try{i=e[n](t,n,o,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){i=e}!i||i.message in ee||(ee[i.message]=!0,console.error("Failed prop type: "+i.message+(r&&"\n"+r()||"")))}))}(n.type.propTypes,p,0,o(n),(function(){return l(n)}))}t&&t(n)},Z.options.__h=function(t,n,o){if(!t||!e)throw new Error("Hook can only be invoked from render methods.");c&&c(t,n,o)};var f=function(e,t){return{get:function(){var n="get"+e+t;p&&p.indexOf(n)<0&&(p.push(n),console.warn("getting vnode."+e+" is deprecated, "+t))},set:function(){var n="set"+e+t;p&&p.indexOf(n)<0&&(p.push(n),console.warn("setting vnode."+e+" is not allowed, "+t))}}},h={nodeName:f("nodeName","use vnode.type"),attributes:f("attributes","use vnode.props"),children:f("children","use vnode.props.children")},d=Object.create({},h);Z.options.vnode=function(e){var t=e.props;if(null!==e.type&&null!=t&&("__source"in t||"__self"in t)){var n=e.props={};for(var o in t){var i=t[o];"__source"===o?e.__source=i:"__self"===o?e.__self=i:n[o]=i}}e.__proto__=d,r&&r(e)},Z.options.diffed=function(t){if(t.__k&&t.__k.forEach((function(e){if(e&&void 0===e.type){delete e.__,delete e.__b;var n=Object.keys(e).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+n+"}.\n\n"+l(t))}})),e=!1,n&&n(t),null!=t.__k)for(var o=[],r=0;r<t.__k.length;r++){var i=t.__k[r];if(i&&null!=i.key){var u=i.key;if(-1!==o.indexOf(u)){console.error('Following component has two or more children with the same key attribute: "'+u+'". This may cause glitches and misbehavior in rendering process. Component: \n\n'+a(t)+"\n\n"+l(t));break}o.push(u)}}}}();var ae,ue,_e,ce=0,se=[],pe=Z.options.__b,fe=Z.options.__r,he=Z.options.diffed,de=Z.options.__c,ve=Z.options.unmount;Z.options.__b=function(e){ue=null,pe&&pe(e)},Z.options.__r=function(e){fe&&fe(e),ae=0;var t=(ue=e.__c).__H;t&&(t.__h.forEach(m),t.__h.forEach(b),t.__h=[])},Z.options.diffed=function(e){he&&he(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==se.push(t)&&_e===Z.options.requestAnimationFrame||((_e=Z.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),ye&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);ye&&(t=requestAnimationFrame(n))})(y)),ue=null},Z.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(m),e.__h=e.__h.filter((function(e){return!e.__||b(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],Z.options.__e(n,e.__v)}})),de&&de(e,t)},Z.options.unmount=function(e){ve&&ve(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{m(e)}catch(e){t=e}})),t&&Z.options.__e(t,n.__v))};var ye="function"==typeof requestAnimationFrame;(E.prototype=new Z.Component).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(e,t){return O(this.props,e)||O(this.state,t)};var me=Z.options.__b;Z.options.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),me&&me(e)};var be="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911,ge=Z.options.__e;Z.options.__e=function(e,t,n){if(e.then)for(var o,r=t;r=r.__;)if((o=r.__c)&&o.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t);ge(e,t,n)};var ke=Z.options.unmount;Z.options.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),ke&&ke(e)},(j.prototype=new Z.Component).__c=function(e,t){var n=t.__c,o=this;null==o.t&&(o.t=[]),o.t.push(n);var r=S(o.__v),i=!1,l=function(){i||(i=!0,n.__R=null,r?r(a):a())};n.__R=l;var a=function(){if(!--o.__u){if(o.state.__e){var e=o.state.__e;o.__v.__k[0]=function e(t,n,o){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map((function(t){return e(t,n,o)})),t.__c&&t.__c.__P===n&&(t.__e&&o.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=o)),t}(e,e.__c.__P,e.__c.__O)}var t;for(o.setState({__e:o.__b=null});t=o.t.pop();)t.forceUpdate()}},u=!0===t.__h;o.__u++||u||o.setState({__e:o.__b=o.__v.__k[0]}),e.then(l,l)},j.prototype.componentWillUnmount=function(){this.t=[]},j.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=function e(t,n,o){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),t.__c.__H=null),null!=(t=w({},t)).__c&&(t.__c.__P===o&&(t.__c.__P=n),t.__c=null),t.__k=t.__k&&t.__k.map((function(t){return e(t,n,o)}))),t}(this.__b,n,o.__O=o.__P)}this.__b=null}var r=t.__e&&Object(Z.createElement)(Z.Fragment,null,e.fallback);return r&&(r.__h=null),[Object(Z.createElement)(Z.Fragment,null,t.__e?null:e.children),r]};var we=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(P.prototype=new Z.Component).__e=function(e){var t=this,n=S(t.__v),o=t.o.get(e);return o[0]++,function(r){var i=function(){t.props.revealOrder?(o.push(r),we(t,e,o)):r()};n?n(i):i()}},P.prototype.render=function(e){this.u=null,this.o=new Map;var t=Object(Z.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},P.prototype.componentDidUpdate=P.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){we(e,n,t)}))};var Oe="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,Ee=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ce="undefined"!=typeof document,je=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(e)};Z.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(Z.Component.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var Se=Z.options.event;Z.options.event=function(e){return Se&&(e=Se(e)),e.persist=x,e.isPropagationStopped=T,e.isDefaultPrevented=A,e.nativeEvent=e};var Pe={configurable:!0,get:function(){return this.class}},xe=Z.options.vnode;Z.options.vnode=function(e){var t=e.type,n=e.props,o=n;if("string"==typeof t){var r=-1===t.indexOf("-");for(var i in o={},n){var l=n[i];Ce&&"children"===i&&"noscript"===t||"value"===i&&"defaultValue"in n&&null==l||("defaultValue"===i&&"value"in n&&null==n.value?i="value":"download"===i&&!0===l?l="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!je(n.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(i)?i=i.toLowerCase():r&&Ee.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===l&&(l=void 0),o[i]=l)}"select"==t&&o.multiple&&Array.isArray(o.value)&&(o.value=Object(Z.toChildArray)(n.children).forEach((function(e){e.props.selected=-1!=o.value.indexOf(e.props.value)}))),"select"==t&&null!=o.defaultValue&&(o.value=Object(Z.toChildArray)(n.children).forEach((function(e){e.props.selected=o.multiple?-1!=o.defaultValue.indexOf(e.props.value):o.defaultValue==e.props.value}))),e.props=o,n.class!=n.className&&(Pe.enumerable="className"in n,null!=n.className&&(o.class=n.className),Object.defineProperty(o,"className",Pe))}e.$$typeof=Oe,xe&&xe(e)};var Te=Z.options.__r;Z.options.__r=function(e){Te&&Te(e),e.__c};var Ae,We=Ae||(Ae={});We.Pop="POP",We.Push="PUSH",We.Replace="REPLACE";var He=function(e){return e};const De=Object(Z.createContext)(null);const Ue=Object(Z.createContext)(null);const Le=Object(Z.createContext)({outlet:null,matches:[]});const Ne=e=>e.join("/").replace(/\/\/+/g,"/"),Re=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Fe=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Me=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"",Ie=["onClick","reloadDocument","replace","state","target","to"];const Ve=C((function(e,t){let{onClick:n,reloadDocument:o,replace:r=!1,state:i,target:l,to:a}=e,u=q(e,Ie),_=M(a),c=function(e,t){let{target:n,replace:o,state:r}=void 0===t?{}:t,i=$(),l=V(),a=z(e);return d((t=>{if(!(0!==t.button||n&&"_self"!==n||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t))){t.preventDefault();let n=!!o||L(l)===L(a);i(e,{replace:n,state:r})}}),[l,i,a,o,r,n,e])}(a,{replace:r,state:i,target:l});return Object(Z.createElement)("a",Y({},u,{href:_,onClick:function(e){n&&n(e),e.defaultPrevented||o||c(e)},ref:t,target:l}))}));let $e="simple-pwa-tools";$e="/simple-pwa-tools";var ze=$e;class Be extends Z.Component{constructor(...e){super(...e),Q(this,"state",{value:"",newValue:"Val"}),Q(this,"onInput",(e=>{this.setState({value:e.target.value})})),Q(this,"onSubmit",(e=>{e.preventDefault();let t=this.state.value.replace(/\[[^\]]+\]/g,"[ ]");this.setState({newValue:t}),function(e){function t(t){t.clipboardData.setData("text/html",e),t.clipboardData.setData("text/plain",e),t.preventDefault()}"undefined"!=typeof window&&(document.addEventListener("copy",t),document.execCommand("copy"),document.removeEventListener("copy",t))}(t)}))}render(){return Object(Z.h)(K,null,Object(Z.h)("div",{align:"center"},Object(Z.h)("nav",null,Object(Z.h)("ul",null,Object(Z.h)("li",null,Object(Z.h)(Ve,{to:`${ze}/`},"Home")),Object(Z.h)("li",null,Object(Z.h)(Ve,{to:`${ze}/FlashcardTool`},"Flashcard Tool")))),Object(Z.h)(void 0,null,Object(Z.h)(R,{path:`${ze}/`},Object(Z.h)(X,null)),Object(Z.h)(R,{path:`${ze}/FlashcardTool`},Object(Z.h)(G,null)))))}}"undefined"!=typeof window&&Object(Z.render)(Object(Z.h)(Be,null),document.body)},hosL:function(e,t,n){"use strict";function o(e,t){for(var n in t)e[n]=t[n];return e}function r(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var o,r,i,a={};for(i in t)"key"==i?o=t[i]:"ref"==i?r=t[i]:a[i]=t[i];if(arguments.length>2&&(a.children=arguments.length>3?W.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===a[i]&&(a[i]=e.defaultProps[i]);return l(e,a,o,r,null)}function l(e,t,n,o,r){var i={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++D:r};return null==r&&null!=H.vnode&&H.vnode(i),i}function a(){return{current:null}}function u(e){return e.children}function _(e,t){this.props=e,this.context=t}function c(e,t){if(null==t)return e.__?c(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?c(e):null}function s(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return s(e)}}function p(e){(!e.__d&&(e.__d=!0)&&L.push(e)&&!f.__r++||R!==H.debounceRendering)&&((R=H.debounceRendering)||N)(f)}function f(){for(var e;f.__r=L.length;)e=L.sort((function(e,t){return e.__v.__b-t.__v.__b})),L=[],e.some((function(e){var t,n,r,i,l,a;e.__d&&(l=(i=(t=e).__v).__e,(a=t.__P)&&(n=[],(r=o({},i)).__v=i.__v+1,w(a,i,r,t.__n,void 0!==a.ownerSVGElement,null!=i.__h?[l]:null,n,null==l?c(i):l,i.__h),O(n,i),i.__e!=l&&s(i)))}))}function h(e,t,n,o,r,i,a,_,s,p){var f,h,v,m,b,g,k,O=o&&o.__k||I,E=O.length;for(n.__k=[],f=0;f<t.length;f++)if(null!=(m=n.__k[f]=null==(m=t[f])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?l(null,m,null,null,m):Array.isArray(m)?l(u,{children:m},null,null,null):m.__b>0?l(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=O[f])||v&&m.key==v.key&&m.type===v.type)O[f]=void 0;else for(h=0;h<E;h++){if((v=O[h])&&m.key==v.key&&m.type===v.type){O[h]=void 0;break}v=null}w(e,m,v=v||M,r,i,a,_,s,p),b=m.__e,(h=m.ref)&&v.ref!=h&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(h,m.__c||b,m)),null!=b?(null==g&&(g=b),"function"==typeof m.type&&m.__k===v.__k?m.__d=s=d(m,s,e):s=y(e,m,v,O,b,s),"function"==typeof n.type&&(n.__d=s)):s&&v.__e==s&&s.parentNode!=e&&(s=c(v))}for(n.__e=g,f=E;f--;)null!=O[f]&&("function"==typeof n.type&&null!=O[f].__e&&O[f].__e==n.__d&&(n.__d=c(o,f+1)),j(O[f],O[f]));if(k)for(f=0;f<k.length;f++)C(k[f],k[++f],k[++f])}function d(e,t,n){for(var o,r=e.__k,i=0;r&&i<r.length;i++)(o=r[i])&&(o.__=e,t="function"==typeof o.type?d(o,t,n):y(n,o,o,r,o.__e,t));return t}function v(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){v(e,t)})):t.push(e)),t}function y(e,t,n,o,r,i){var l,a,u;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||r!=i||null==r.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(r),l=null;else{for(a=i,u=0;(a=a.nextSibling)&&u<o.length;u+=2)if(a==r)break e;e.insertBefore(r,i),l=i}return void 0!==l?l:r.nextSibling}function m(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||V.test(t)?n:n+"px"}function b(e,t,n,o,r){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||m(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||m(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o||e.addEventListener(t,i?k:g,i):e.removeEventListener(t,i?k:g,i);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function g(e){this.l[e.type+!1](H.event?H.event(e):e)}function k(e){this.l[e.type+!0](H.event?H.event(e):e)}function w(e,t,n,r,i,l,a,c,s){var p,f,d,v,y,m,b,g,k,w,O,C=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,c=t.__e=n.__e,t.__h=null,l=[c]),(p=H.__b)&&p(t);try{e:if("function"==typeof C){if(g=t.props,k=(p=C.contextType)&&r[p.__c],w=p?k?k.props.value:p.__:r,n.__c?b=(f=t.__c=n.__c).__=f.__E:("prototype"in C&&C.prototype.render?t.__c=f=new C(g,w):(t.__c=f=new _(g,w),f.constructor=C,f.render=S),k&&k.sub(f),f.props=g,f.state||(f.state={}),f.context=w,f.__n=r,d=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=C.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=o({},f.__s)),o(f.__s,C.getDerivedStateFromProps(g,f.__s))),v=f.props,y=f.state,d)null==C.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==C.getDerivedStateFromProps&&g!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(g,w),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(g,f.__s,w)||t.__v===n.__v){f.props=g,f.state=f.__s,t.__v!==n.__v&&(f.__d=!1),f.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),f.__h.length&&a.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(g,f.__s,w),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,y,m)}))}f.context=w,f.props=g,f.state=f.__s,(p=H.__r)&&p(t),f.__d=!1,f.__v=t,f.__P=e,p=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(r=o(o({},r),f.getChildContext())),d||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(v,y)),O=null!=p&&p.type===u&&null==p.key?p.props.children:p,h(e,Array.isArray(O)?O:[O],t,n,r,i,l,a,c,s),f.base=t.__e,t.__h=null,f.__h.length&&a.push(f),b&&(f.__E=f.__=null),f.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=E(n.__e,t,n,r,i,l,a,s);(p=H.diffed)&&p(t)}catch(e){t.__v=null,(s||null!=l)&&(t.__e=c,t.__h=!!s,l[l.indexOf(c)]=null),H.__e(e,t,n)}}function O(e,t){H.__c&&H.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){H.__e(e,t.__v)}}))}function E(e,t,n,o,i,l,a,u){var _,s,p,f=n.props,d=t.props,v=t.type,y=0;if("svg"===v&&(i=!0),null!=l)for(;y<l.length;y++)if((_=l[y])&&"setAttribute"in _==!!v&&(v?_.localName===v:3===_.nodeType)){e=_,l[y]=null;break}if(null==e){if(null===v)return document.createTextNode(d);e=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),l=null,u=!1}if(null===v)f===d||u&&e.data===d||(e.data=d);else{if(l=l&&W.call(e.childNodes),s=(f=n.props||M).dangerouslySetInnerHTML,p=d.dangerouslySetInnerHTML,!u){if(null!=l)for(f={},y=0;y<e.attributes.length;y++)f[e.attributes[y].name]=e.attributes[y].value;(p||s)&&(p&&(s&&p.__html==s.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,t,n,o,r){var i;for(i in n)"children"===i||"key"===i||i in t||b(e,i,null,n[i],o);for(i in t)r&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||b(e,i,t[i],n[i],o)}(e,d,f,i,u),p)t.__k=[];else if(y=t.props.children,h(e,Array.isArray(y)?y:[y],t,n,o,i&&"foreignObject"!==v,l,a,l?l[0]:n.__k&&c(n,0),u),null!=l)for(y=l.length;y--;)null!=l[y]&&r(l[y]);u||("value"in d&&void 0!==(y=d.value)&&(y!==f.value||y!==e.value||"progress"===v&&!y)&&b(e,"value",y,f.value,!1),"checked"in d&&void 0!==(y=d.checked)&&y!==e.checked&&b(e,"checked",y,f.checked,!1))}return e}function C(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){H.__e(e,n)}}function j(e,t,n){var o,i;if(H.unmount&&H.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||C(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){H.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&j(o[i],t,"function"!=typeof e.type);n||null==e.__e||r(e.__e),e.__e=e.__d=void 0}function S(e,t,n){return this.constructor(e,n)}function P(e,t,n){var o,r,l;H.__&&H.__(e,t),r=(o="function"==typeof n)?null:n&&n.__k||t.__k,l=[],w(t,e=(!o&&n||t).__k=i(u,null,[e]),r||M,M,void 0!==t.ownerSVGElement,!o&&n?[n]:r?null:t.firstChild?W.call(t.childNodes):null,l,!o&&n?n:r?r.__e:t.firstChild,o),O(l,e)}function x(e,t){P(e,t,x)}function T(e,t,n){var r,i,a,u=o({},e.props);for(a in t)"key"==a?r=t[a]:"ref"==a?i=t[a]:u[a]=t[a];return arguments.length>2&&(u.children=arguments.length>3?W.call(arguments,2):n),l(e.type,u,r||e.key,i||e.ref,null)}function A(e,t){var n={__c:t="__cC"+F++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,o;return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(p)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return P})),n.d(t,"hydrate",(function(){return x})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return u})),n.d(t,"createRef",(function(){return a})),n.d(t,"isValidElement",(function(){return U})),n.d(t,"Component",(function(){return _})),n.d(t,"cloneElement",(function(){return T})),n.d(t,"createContext",(function(){return A})),n.d(t,"toChildArray",(function(){return v})),n.d(t,"options",(function(){return H}));var W,H,D,U,L,N,R,F,M={},I=[],V=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;W=I.slice,H={__e:function(e,t){for(var n,o,r;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return n.__E=n}catch(t){e=t}throw e}},D=0,U=function(e){return null!=e&&void 0===e.constructor},_.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof e&&(e=e(o({},n),this.props)),e&&o(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),p(this))},_.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),p(this))},_.prototype.render=u,L=[],N="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f.__r=0,F=0},mdyV:function(e,t,n){"use strict";n.r(t);var o=n("hosL");const{h:r,render:i,hydrate:l}=o,a=e=>e&&e.default?e.default:e,u=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof a(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=a(n("QfWi")),o={};const _=document.querySelector('[type="__PREACT_CLI_DATA__"]');_&&(o=JSON.parse(decodeURI(_.innerHTML)).preRenderData||o);const c={preRenderData:o},s=o.url?u(o.url):"",p=l&&s===u(location.pathname);e=(p?l:i)(r(t,{CLI_DATA:c}),document.body,e)};0,t()}}});
//# sourceMappingURL=bundle.6101f.esm.js.map