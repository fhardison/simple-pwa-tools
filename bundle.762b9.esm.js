!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/simple-pwa-tools/",t(t.s="mdyV")}({QfWi:function(e,t,n){"use strict";function r(e,t){Z.options.__h&&Z.options.__h(Q,e,X||t),X=0;var n=Q.__H||(Q.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function o(e){return X=1,i(v,e)}function i(e,t,n){var o=r(z++,2);return o.t=e,o.__c||(o.__=[n?n(t):v(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=Q),o.__}function l(e,t){var n=r(z++,3);!Z.options.__s&&d(n.__H,t)&&(n.__=e,n.__H=t,Q.__H.__h.push(n))}function u(e,t){var n=r(z++,4);!Z.options.__s&&d(n.__H,t)&&(n.__=e,n.__H=t,Q.__h.push(n))}function _(e){return X=5,a((function(){return{current:e}}),[])}function a(e,t){var n=r(z++,7);return d(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function c(e,t){return X=8,a((function(){return e}),t)}function s(e){var t=Q.context[e.__c],n=r(z++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(Q)),t.props.value):e.__}function f(){var e;for(Y.sort((function(e,t){return e.__v.__b-t.__v.__b}));e=Y.pop();)if(e.__P)try{e.__H.__h.forEach(p),e.__H.__h.forEach(h),e.__H.__h=[]}catch(t){e.__H.__h=[],Z.options.__e(t,e.__v)}}function p(e){var t=Q,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),Q=t}function h(e){var t=Q;e.__c=e.__(),Q=t}function d(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function v(e,t){return"function"==typeof t?t(e):t}function m(e,t){for(var n in t)e[n]=t[n];return e}function y(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}function b(e){this.props=e}function g(e){function t(t,n){var r=m({},t);return delete r.ref,e(r,(n=t.ref||n)&&("object"!=typeof n||"current"in n)?n:null)}return t.$$typeof=ue,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}function k(){this.__u=0,this.t=null,this.__b=null}function O(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function j(){this.u=null,this.o=null}function P(){}function C(){return this.cancelBubble}function S(){return this.defaultPrevented}function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function x(e){e.preventDefault(),e.returnValue=""}function E(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function A(){return Math.random().toString(36).substr(2,8)}function H(e){var t=e.pathname;t=void 0===t?"/":t;var n=e.search;return e=void 0===(e=e.hash)?"":e,(n=void 0===n?"":n)&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),e&&"#"!==e&&(t+="#"===e.charAt(0)?e:"#"+e),t}function W(e){var t={};if(e){var n=e.indexOf("#");0<=n&&(t.hash=e.substr(n),e=e.substr(0,n)),0<=(n=e.indexOf("?"))&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function D(){}function T(e){let{basename:t="/",children:n=null,location:r,navigationType:o=be.Pop,navigator:i,static:l=!1}=e;U();let u=Se(t),_=a((()=>({basename:u,navigator:i,static:l})),[u,i,l]);"string"==typeof r&&(r=W(r));let{pathname:c="/",search:s="",hash:f="",state:p=null,key:h="default"}=r,d=a((()=>{let e=V(c,u);return null==e?null:{pathname:e,search:s,hash:f,state:p,key:h}}),[u,c,s,f,p,h]);return null==d?null:Object(Z.createElement)(Oe.Provider,{value:_},Object(Z.createElement)(je.Provider,{children:n,value:{location:d,navigationType:o}}))}function L(e){U();let{basename:t,navigator:n}=s(Oe),{hash:r,pathname:o,search:i}=F(e),l=o;if("/"!==t){let n=function(e){return""===e||""===e.pathname?"/":"string"==typeof e?W(e).pathname:e.pathname}(e),r=null!=n&&n.endsWith("/");l="/"===o?t+(r?"/":""):Ce([t,o])}return n.createHref({pathname:l,search:i,hash:r})}function U(){return null!=s(je)}function N(){return U(),s(je).location}function R(){U();let{basename:e,navigator:t}=s(Oe),{matches:n}=s(Pe),{pathname:r}=N(),o=JSON.stringify(n.map((e=>e.pathnameBase))),i=_(!1);return l((()=>{i.current=!0})),c((function(n,l){if(void 0===l&&(l={}),!i.current)return;if("number"==typeof n)return void t.go(n);let u=M(n,JSON.parse(o),r);"/"!==e&&(u.pathname=Ce([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state)}),[e,t,o,r])}function F(e){let{matches:t}=s(Pe),{pathname:n}=N(),r=JSON.stringify(t.map((e=>e.pathnameBase)));return a((()=>M(e,JSON.parse(r),n)),[e,r,n])}function M(e,t,n){let r,o="string"==typeof e?W(e):e,i=""===e||""===o.pathname?"/":o.pathname;if(null==i)r=n;else{let e=t.length-1;if(i.startsWith("..")){let t=i.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}r=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"==typeof e?W(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:we(r),hash:xe(o)}}(o,r);return i&&"/"!==i&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function V(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}function B(e){let{basename:t,children:n,window:r}=e,i=_();null==i.current&&(i.current=function(e){function t(){var e=l.location,t=u.state||{};return[t.idx,ke({pathname:e.pathname,search:e.search,hash:e.hash,state:t.usr||null,key:t.key||"default"})]}function n(e){return"string"==typeof e?e:H(e)}function r(e,t){return void 0===t&&(t=null),ke(w({pathname:s.pathname,hash:"",search:""},"string"==typeof e?W(e):e,{state:t,key:A()}))}function o(e){a=e,e=t(),c=e[0],f.call({action:a,location:s=e[1]})}function i(e){u.go(e)}void 0===e&&(e={});var l=void 0===(e=e.window)?document.defaultView:e,u=l.history,_=null;l.addEventListener("popstate",(function(){if(_)p.call(_),_=null;else{var e=be.Pop,n=t(),r=n[0];if(n=n[1],p.length){if(null!=r){var l=c-r;l&&(_={action:e,location:n,retry:function(){i(-1*l)}},i(l))}}else o(e)}}));var a=be.Pop,c=(e=t())[0],s=e[1],f=E(),p=E();return null==c&&u.replaceState(w({},u.state,{idx:c=0}),""),{get action(){return a},get location(){return s},createHref:n,push:function e(t,i){var _=be.Push,a=r(t,i);if(!p.length||(p.call({action:_,location:a,retry:function(){e(t,i)}}),0)){var s=[{usr:a.state,key:a.key,idx:c+1},n(a)];a=s[0],s=s[1];try{u.pushState(a,"",s)}catch(e){l.location.assign(s)}o(_)}},replace:function e(t,i){var l=be.Replace,_=r(t,i);p.length&&(p.call({action:l,location:_,retry:function(){e(t,i)}}),1)||(_=[{usr:_.state,key:_.key,idx:c},n(_)],u.replaceState(_[0],"",_[1]),o(l))},go:i,back:function(){i(-1)},forward:function(){i(1)},listen:function(e){return f.push(e)},block:function(e){var t=p.push(e);return 1===p.length&&l.addEventListener("beforeunload",x),function(){t(),p.length||l.removeEventListener("beforeunload",x)}}}}({window:r}));let l=i.current,[a,c]=o({action:l.action,location:l.location});return u((()=>l.listen(c)),[l]),Object(Z.createElement)(T,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l})}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(){return Object(Z.h)("div",{align:"center"},Object(Z.h)("h2",null,"Simple PWA tools"),Object(Z.h)("p",null,"A collection of simple tools written as PWAs."))}function K(){return Object(Z.h)("div",{align:"center"},Object(Z.h)("h1",null,"Flashcard maker"),Object(Z.h)("form",{onSubmit:this.onSubmit},Object(Z.h)("input",{type:"text",value:this.state.value,onInput:this.onInput}),Object(Z.h)("button",{type:"submit","margin-left":"8px;"},"Set")),Object(Z.h)("p",null,Object(Z.h)("span",{type:"text",class:"newlabel"},this.state.newValue)))}n.r(t);var z,Q,G,Z=n("hosL"),X=0,Y=[],ee=Z.options.__b,te=Z.options.__r,ne=Z.options.diffed,re=Z.options.__c,oe=Z.options.unmount;Z.options.__b=function(e){Q=null,ee&&ee(e)},Z.options.__r=function(e){te&&te(e),z=0;var t=(Q=e.__c).__H;t&&(t.__h.forEach(p),t.__h.forEach(h),t.__h=[])},Z.options.diffed=function(e){ne&&ne(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==Y.push(t)&&G===Z.options.requestAnimationFrame||((G=Z.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),ie&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);ie&&(t=requestAnimationFrame(n))})(f)),Q=null},Z.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(p),e.__h=e.__h.filter((function(e){return!e.__||h(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],Z.options.__e(n,e.__v)}})),re&&re(e,t)},Z.options.unmount=function(e){oe&&oe(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{p(e)}catch(e){t=e}})),t&&Z.options.__e(t,n.__v))};var ie="function"==typeof requestAnimationFrame;(b.prototype=new Z.Component).isPureReactComponent=!0,b.prototype.shouldComponentUpdate=function(e,t){return y(this.props,e)||y(this.state,t)};var le=Z.options.__b;Z.options.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),le&&le(e)};var ue="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911,_e=Z.options.__e;Z.options.__e=function(e,t,n){if(e.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t);_e(e,t,n)};var ae=Z.options.unmount;Z.options.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),ae&&ae(e)},(k.prototype=new Z.Component).__c=function(e,t){var n=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=O(r.__v),i=!1,l=function(){i||(i=!0,n.__R=null,o?o(u):u())};n.__R=l;var u=function(){if(!--r.__u){if(r.state.__e){var e=r.state.__e;r.__v.__k[0]=function e(t,n,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map((function(t){return e(t,n,r)})),t.__c&&t.__c.__P===n&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},_=!0===t.__h;r.__u++||_||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(l,l)},k.prototype.componentWillUnmount=function(){this.t=[]},k.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function e(t,n,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),t.__c.__H=null),null!=(t=m({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=n),t.__c=null),t.__k=t.__k&&t.__k.map((function(t){return e(t,n,r)}))),t}(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__e&&Object(Z.createElement)(Z.Fragment,null,e.fallback);return o&&(o.__h=null),[Object(Z.createElement)(Z.Fragment,null,t.__e?null:e.children),o]};var ce=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(j.prototype=new Z.Component).__e=function(e){var t=this,n=O(t.__v),r=t.o.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),ce(t,e,r)):o()};n?n(i):i()}},j.prototype.render=function(e){this.u=null,this.o=new Map;var t=Object(Z.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},j.prototype.componentDidUpdate=j.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){ce(e,n,t)}))};var se="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,fe=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,pe="undefined"!=typeof document,he=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(e)};Z.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(Z.Component.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var de=Z.options.event;Z.options.event=function(e){return de&&(e=de(e)),e.persist=P,e.isPropagationStopped=C,e.isDefaultPrevented=S,e.nativeEvent=e};var ve={configurable:!0,get:function(){return this.class}},me=Z.options.vnode;Z.options.vnode=function(e){var t=e.type,n=e.props,r=n;if("string"==typeof t){var o=-1===t.indexOf("-");for(var i in r={},n){var l=n[i];pe&&"children"===i&&"noscript"===t||"value"===i&&"defaultValue"in n&&null==l||("defaultValue"===i&&"value"in n&&null==n.value?i="value":"download"===i&&!0===l?l="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!he(n.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(i)?i=i.toLowerCase():o&&fe.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===l&&(l=void 0),r[i]=l)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(Z.toChildArray)(n.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)}))),"select"==t&&null!=r.defaultValue&&(r.value=Object(Z.toChildArray)(n.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value}))),e.props=r,n.class!=n.className&&(ve.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",ve))}e.$$typeof=se,me&&me(e)};var ye=Z.options.__r;Z.options.__r=function(e){ye&&ye(e),e.__c};var be,ge=be||(be={});ge.Pop="POP",ge.Push="PUSH",ge.Replace="REPLACE";var ke=function(e){return e};const Oe=Object(Z.createContext)(null);const je=Object(Z.createContext)(null);const Pe=Object(Z.createContext)({outlet:null,matches:[]});const Ce=e=>e.join("/").replace(/\/\/+/g,"/"),Se=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),we=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",xe=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"",Ee=["onClick","reloadDocument","replace","state","target","to"];const Ae=g((function(e,t){let{onClick:n,reloadDocument:r,replace:o=!1,state:i,target:l,to:u}=e,_=I(e,Ee),a=L(u),s=function(e,t){let{target:n,replace:r,state:o}=void 0===t?{}:t,i=R(),l=N(),u=F(e);return c((t=>{if(!(0!==t.button||n&&"_self"!==n||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t))){t.preventDefault();let n=!!r||H(l)===H(u);i(e,{replace:n,state:o})}}),[l,i,u,r,o,n,e])}(u,{replace:o,state:i,target:l});return Object(Z.createElement)("a",$({},_,{href:a,onClick:function(e){n&&n(e),e.defaultPrevented||r||s(e)},ref:t,target:l}))}));let He="";He="/simple-pwa-tools";var We=He;class De extends Z.Component{constructor(...e){super(...e),q(this,"state",{value:"",newValue:"Val"}),q(this,"onInput",(e=>{this.setState({value:e.target.value})})),q(this,"onSubmit",(e=>{e.preventDefault();let t=this.state.value.replace(/\[[^\]]+\]/g,"[ ]");this.setState({newValue:t}),function(e){function t(t){t.clipboardData.setData("text/html",e),t.clipboardData.setData("text/plain",e),t.preventDefault()}"undefined"!=typeof window&&(document.addEventListener("copy",t),document.execCommand("copy"),document.removeEventListener("copy",t))}(t)}))}render(){return Object(Z.h)(B,null,Object(Z.h)("div",{align:"center"},Object(Z.h)("nav",null,Object(Z.h)("ul",null,Object(Z.h)("li",null,Object(Z.h)(Ae,{to:`${We}/`})),Object(Z.h)("li",null,Object(Z.h)(Ae,{to:`${We}/FlashcardTool`})))),Object(Z.h)(void 0,null,Object(Z.h)(D,{path:`${We}/`},Object(Z.h)(J,null)),Object(Z.h)(D,{path:`${We}/FlashcardTool`},Object(Z.h)(K,null)))))}}"undefined"!=typeof window&&Object(Z.render)(Object(Z.h)(De,null),document.body)},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,u={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:u[i]=t[i];if(arguments.length>2&&(u.children=arguments.length>3?W.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===u[i]&&(u[i]=e.defaultProps[i]);return l(e,u,r,o,null)}function l(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++T:o};return null==o&&null!=D.vnode&&D.vnode(i),i}function u(){return{current:null}}function _(e){return e.children}function a(e,t){this.props=e,this.context=t}function c(e,t){if(null==t)return e.__?c(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?c(e):null}function s(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return s(e)}}function f(e){(!e.__d&&(e.__d=!0)&&U.push(e)&&!p.__r++||R!==D.debounceRendering)&&((R=D.debounceRendering)||N)(p)}function p(){for(var e;p.__r=U.length;)e=U.sort((function(e,t){return e.__v.__b-t.__v.__b})),U=[],e.some((function(e){var t,n,o,i,l,u;e.__d&&(l=(i=(t=e).__v).__e,(u=t.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,O(u,i,o,t.__n,void 0!==u.ownerSVGElement,null!=i.__h?[l]:null,n,null==l?c(i):l,i.__h),j(n,i),i.__e!=l&&s(i)))}))}function h(e,t,n,r,o,i,u,a,s,f){var p,h,v,y,b,g,k,j=r&&r.__k||V,P=j.length;for(n.__k=[],p=0;p<t.length;p++)if(null!=(y=n.__k[p]=null==(y=t[p])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?l(null,y,null,null,y):Array.isArray(y)?l(_,{children:y},null,null,null):y.__b>0?l(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=j[p])||v&&y.key==v.key&&y.type===v.type)j[p]=void 0;else for(h=0;h<P;h++){if((v=j[h])&&y.key==v.key&&y.type===v.type){j[h]=void 0;break}v=null}O(e,y,v=v||M,o,i,u,a,s,f),b=y.__e,(h=y.ref)&&v.ref!=h&&(k||(k=[]),v.ref&&k.push(v.ref,null,y),k.push(h,y.__c||b,y)),null!=b?(null==g&&(g=b),"function"==typeof y.type&&y.__k===v.__k?y.__d=s=d(y,s,e):s=m(e,y,v,j,b,s),"function"==typeof n.type&&(n.__d=s)):s&&v.__e==s&&s.parentNode!=e&&(s=c(v))}for(n.__e=g,p=P;p--;)null!=j[p]&&("function"==typeof n.type&&null!=j[p].__e&&j[p].__e==n.__d&&(n.__d=c(r,p+1)),S(j[p],j[p]));if(k)for(p=0;p<k.length;p++)C(k[p],k[++p],k[++p])}function d(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?d(r,t,n):m(n,r,r,o,r.__e,t));return t}function v(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){v(e,t)})):t.push(e)),t}function m(e,t,n,r,o,i){var l,u,_;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),l=null;else{for(u=i,_=0;(u=u.nextSibling)&&_<r.length;_+=2)if(u==o)break e;e.insertBefore(o,i),l=i}return void 0!==l?l:o.nextSibling}function y(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||$.test(t)?n:n+"px"}function b(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||y(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||y(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?k:g,i):e.removeEventListener(t,i?k:g,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function g(e){this.l[e.type+!1](D.event?D.event(e):e)}function k(e){this.l[e.type+!0](D.event?D.event(e):e)}function O(e,t,n,o,i,l,u,c,s){var f,p,d,v,m,y,b,g,k,O,j,C=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,c=t.__e=n.__e,t.__h=null,l=[c]),(f=D.__b)&&f(t);try{e:if("function"==typeof C){if(g=t.props,k=(f=C.contextType)&&o[f.__c],O=f?k?k.props.value:f.__:o,n.__c?b=(p=t.__c=n.__c).__=p.__E:("prototype"in C&&C.prototype.render?t.__c=p=new C(g,O):(t.__c=p=new a(g,O),p.constructor=C,p.render=w),k&&k.sub(p),p.props=g,p.state||(p.state={}),p.context=O,p.__n=o,d=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=C.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,C.getDerivedStateFromProps(g,p.__s))),v=p.props,m=p.state,d)null==C.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==C.getDerivedStateFromProps&&g!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,O),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,O)||t.__v===n.__v){p.props=g,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),p.__h.length&&u.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,O),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,m,y)}))}p.context=O,p.props=g,p.state=p.__s,(f=D.__r)&&f(t),p.__d=!1,p.__v=t,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(v,m)),j=null!=f&&f.type===_&&null==f.key?f.props.children:f,h(e,Array.isArray(j)?j:[j],t,n,o,i,l,u,c,s),p.base=t.__e,t.__h=null,p.__h.length&&u.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=P(n.__e,t,n,o,i,l,u,s);(f=D.diffed)&&f(t)}catch(e){t.__v=null,(s||null!=l)&&(t.__e=c,t.__h=!!s,l[l.indexOf(c)]=null),D.__e(e,t,n)}}function j(e,t){D.__c&&D.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){D.__e(e,t.__v)}}))}function P(e,t,n,r,i,l,u,_){var a,s,f,p=n.props,d=t.props,v=t.type,m=0;if("svg"===v&&(i=!0),null!=l)for(;m<l.length;m++)if((a=l[m])&&"setAttribute"in a==!!v&&(v?a.localName===v:3===a.nodeType)){e=a,l[m]=null;break}if(null==e){if(null===v)return document.createTextNode(d);e=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),l=null,_=!1}if(null===v)p===d||_&&e.data===d||(e.data=d);else{if(l=l&&W.call(e.childNodes),s=(p=n.props||M).dangerouslySetInnerHTML,f=d.dangerouslySetInnerHTML,!_){if(null!=l)for(p={},m=0;m<e.attributes.length;m++)p[e.attributes[m].name]=e.attributes[m].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||b(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||b(e,i,t[i],n[i],r)}(e,d,p,i,_),f)t.__k=[];else if(m=t.props.children,h(e,Array.isArray(m)?m:[m],t,n,r,i&&"foreignObject"!==v,l,u,l?l[0]:n.__k&&c(n,0),_),null!=l)for(m=l.length;m--;)null!=l[m]&&o(l[m]);_||("value"in d&&void 0!==(m=d.value)&&(m!==p.value||m!==e.value||"progress"===v&&!m)&&b(e,"value",m,p.value,!1),"checked"in d&&void 0!==(m=d.checked)&&m!==e.checked&&b(e,"checked",m,p.checked,!1))}return e}function C(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){D.__e(e,n)}}function S(e,t,n){var r,i;if(D.unmount&&D.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||C(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){D.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&S(r[i],t,"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function w(e,t,n){return this.constructor(e,n)}function x(e,t,n){var r,o,l;D.__&&D.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,l=[],O(t,e=(!r&&n||t).__k=i(_,null,[e]),o||M,M,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?W.call(t.childNodes):null,l,!r&&n?n:o?o.__e:t.firstChild,r),j(l,e)}function E(e,t){x(e,t,E)}function A(e,t,n){var o,i,u,_=r({},e.props);for(u in t)"key"==u?o=t[u]:"ref"==u?i=t[u]:_[u]=t[u];return arguments.length>2&&(_.children=arguments.length>3?W.call(arguments,2):n),l(e.type,_,o||e.key,i||e.ref,null)}function H(e,t){var n={__c:t="__cC"+F++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(f)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return x})),n.d(t,"hydrate",(function(){return E})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return _})),n.d(t,"createRef",(function(){return u})),n.d(t,"isValidElement",(function(){return L})),n.d(t,"Component",(function(){return a})),n.d(t,"cloneElement",(function(){return A})),n.d(t,"createContext",(function(){return H})),n.d(t,"toChildArray",(function(){return v})),n.d(t,"options",(function(){return D}));var W,D,T,L,U,N,R,F,M={},V=[],$=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;W=V.slice,D={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},T=0,L=function(e){return null!=e&&void 0===e.constructor},a.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),f(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},a.prototype.render=_,U=[],N="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,F=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:i,hydrate:l}=r,u=e=>e&&e.default?e.default:e,_=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof u(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=u(n("QfWi")),r={};const a=document.querySelector('[type="__PREACT_CLI_DATA__"]');a&&(r=JSON.parse(decodeURI(a.innerHTML)).preRenderData||r);const c={preRenderData:r},s=r.url?_(r.url):"",f=l&&s===_(location.pathname);e=(f?l:i)(o(t,{CLI_DATA:c}),document.body,e)};0,t()}}});
//# sourceMappingURL=bundle.762b9.esm.js.map