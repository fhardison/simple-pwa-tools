!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/simple-pwa-tools/",t(t.s="mdyV")}({QfWi:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var o=n("hosL");class l extends o.Component{constructor(...e){super(...e),r(this,"state",{value:"",newValue:"Val"}),r(this,"onInput",(e=>{this.setState({value:e.target.value})})),r(this,"onSubmit",(e=>{e.preventDefault();let t=this.state.value.replace(/\[[^\]]+\]/g,"[ ]");this.setState({newValue:t}),function(e){function t(t){t.clipboardData.setData("text/html",e),t.clipboardData.setData("text/plain",e),t.preventDefault()}"undefined"!=typeof window&&(document.addEventListener("copy",t),document.execCommand("copy"),document.removeEventListener("copy",t))}(t)}))}render(){return Object(o.h)("div",{align:"center"},Object(o.h)("h1",null,"Flashcard maker"),Object(o.h)("form",{onSubmit:this.onSubmit},Object(o.h)("input",{type:"text",value:this.state.value,onInput:this.onInput}),Object(o.h)("button",{type:"submit","margin-left":"8px;"},"Set")),Object(o.h)("p",null,Object(o.h)("span",{type:"text",class:"newlabel"},this.state.newValue)))}}"undefined"!=typeof window&&Object(o.render)(Object(o.h)(l,null),document.body)},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function l(e,t,n){var r,o,l,u={};for(l in t)"key"==l?r=t[l]:"ref"==l?o=t[l]:u[l]=t[l];if(arguments.length>2&&(u.children=arguments.length>3?A.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===u[l]&&(u[l]=e.defaultProps[l]);return _(e,u,r,o,null)}function _(e,t,n,r,o){var l={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++U:o};return null==o&&null!=L.vnode&&L.vnode(l),l}function u(){return{current:null}}function i(e){return e.children}function c(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function f(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return f(e)}}function a(e){(!e.__d&&(e.__d=!0)&&M.push(e)&&!p.__r++||N!==L.debounceRendering)&&((N=L.debounceRendering)||I)(p)}function p(){for(var e;p.__r=M.length;)e=M.sort((function(e,t){return e.__v.__b-t.__v.__b})),M=[],e.some((function(e){var t,n,o,l,_,u;e.__d&&(_=(l=(t=e).__v).__e,(u=t.__P)&&(n=[],(o=r({},l)).__v=l.__v+1,x(u,l,o,t.__n,void 0!==u.ownerSVGElement,null!=l.__h?[_]:null,n,null==_?s(l):_,l.__h),C(n,l),l.__e!=_&&f(l)))}))}function d(e,t,n,r,o,l,u,c,f,a){var p,d,v,m,b,g,k,C=r&&r.__k||F,S=C.length;for(n.__k=[],p=0;p<t.length;p++)if(null!=(m=n.__k[p]=null==(m=t[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?_(null,m,null,null,m):Array.isArray(m)?_(i,{children:m},null,null,null):m.__b>0?_(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=C[p])||v&&m.key==v.key&&m.type===v.type)C[p]=void 0;else for(d=0;d<S;d++){if((v=C[d])&&m.key==v.key&&m.type===v.type){C[d]=void 0;break}v=null}x(e,m,v=v||V,o,l,u,c,f,a),b=m.__e,(d=m.ref)&&v.ref!=d&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(d,m.__c||b,m)),null!=b?(null==g&&(g=b),"function"==typeof m.type&&m.__k===v.__k?m.__d=f=h(m,f,e):f=y(e,m,v,C,b,f),"function"==typeof n.type&&(n.__d=f)):f&&v.__e==f&&f.parentNode!=e&&(f=s(v))}for(n.__e=g,p=S;p--;)null!=C[p]&&("function"==typeof n.type&&null!=C[p].__e&&C[p].__e==n.__d&&(n.__d=s(r,p+1)),P(C[p],C[p]));if(k)for(p=0;p<k.length;p++)w(k[p],k[++p],k[++p])}function h(e,t,n){for(var r,o=e.__k,l=0;o&&l<o.length;l++)(r=o[l])&&(r.__=e,t="function"==typeof r.type?h(r,t,n):y(n,r,r,o,r.__e,t));return t}function v(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){v(e,t)})):t.push(e)),t}function y(e,t,n,r,o,l){var _,u,i;if(void 0!==t.__d)_=t.__d,t.__d=void 0;else if(null==n||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),_=null;else{for(u=l,i=0;(u=u.nextSibling)&&i<r.length;i+=2)if(u==o)break e;e.insertBefore(o,l),_=l}return void 0!==_?_:o.nextSibling}function m(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||H.test(t)?n:n+"px"}function b(e,t,n,r,o){var l;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||m(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||m(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])l=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=n,n?r||e.addEventListener(t,l?k:g,l):e.removeEventListener(t,l?k:g,l);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function g(e){this.l[e.type+!1](L.event?L.event(e):e)}function k(e){this.l[e.type+!0](L.event?L.event(e):e)}function x(e,t,n,o,l,_,u,s,f){var a,p,h,v,y,m,b,g,k,x,C,w=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(f=n.__h,s=t.__e=n.__e,t.__h=null,_=[s]),(a=L.__b)&&a(t);try{e:if("function"==typeof w){if(g=t.props,k=(a=w.contextType)&&o[a.__c],x=a?k?k.props.value:a.__:o,n.__c?b=(p=t.__c=n.__c).__=p.__E:("prototype"in w&&w.prototype.render?t.__c=p=new w(g,x):(t.__c=p=new c(g,x),p.constructor=w,p.render=D),k&&k.sub(p),p.props=g,p.state||(p.state={}),p.context=x,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=w.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,w.getDerivedStateFromProps(g,p.__s))),v=p.props,y=p.state,h)null==w.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==w.getDerivedStateFromProps&&g!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,x),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,x)||t.__v===n.__v){p.props=g,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),p.__h.length&&u.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,x),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=x,p.props=g,p.state=p.__s,(a=L.__r)&&a(t),p.__d=!1,p.__v=t,p.__P=e,a=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),C=null!=a&&a.type===i&&null==a.key?a.props.children:a,d(e,Array.isArray(C)?C:[C],t,n,o,l,_,u,s,f),p.base=t.__e,t.__h=null,p.__h.length&&u.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==_&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=S(n.__e,t,n,o,l,_,u,f);(a=L.diffed)&&a(t)}catch(e){t.__v=null,(f||null!=_)&&(t.__e=s,t.__h=!!f,_[_.indexOf(s)]=null),L.__e(e,t,n)}}function C(e,t){L.__c&&L.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){L.__e(e,t.__v)}}))}function S(e,t,n,r,l,_,u,i){var c,f,a,p=n.props,h=t.props,v=t.type,y=0;if("svg"===v&&(l=!0),null!=_)for(;y<_.length;y++)if((c=_[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){e=c,_[y]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=l?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),_=null,i=!1}if(null===v)p===h||i&&e.data===h||(e.data=h);else{if(_=_&&A.call(e.childNodes),f=(p=n.props||V).dangerouslySetInnerHTML,a=h.dangerouslySetInnerHTML,!i){if(null!=_)for(p={},y=0;y<e.attributes.length;y++)p[e.attributes[y].name]=e.attributes[y].value;(a||f)&&(a&&(f&&a.__html==f.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(function(e,t,n,r,o){var l;for(l in n)"children"===l||"key"===l||l in t||b(e,l,null,n[l],r);for(l in t)o&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||b(e,l,t[l],n[l],r)}(e,h,p,l,i),a)t.__k=[];else if(y=t.props.children,d(e,Array.isArray(y)?y:[y],t,n,r,l&&"foreignObject"!==v,_,u,_?_[0]:n.__k&&s(n,0),i),null!=_)for(y=_.length;y--;)null!=_[y]&&o(_[y]);i||("value"in h&&void 0!==(y=h.value)&&(y!==p.value||y!==e.value||"progress"===v&&!y)&&b(e,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==e.checked&&b(e,"checked",y,p.checked,!1))}return e}function w(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){L.__e(e,n)}}function P(e,t,n){var r,l;if(L.unmount&&L.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||w(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){L.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&P(r[l],t,"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function D(e,t,n){return this.constructor(e,n)}function O(e,t,n){var r,o,_;L.__&&L.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,_=[],x(t,e=(!r&&n||t).__k=l(i,null,[e]),o||V,V,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?A.call(t.childNodes):null,_,!r&&n?n:o?o.__e:t.firstChild,r),C(_,e)}function E(e,t){O(e,t,E)}function j(e,t,n){var o,l,u,i=r({},e.props);for(u in t)"key"==u?o=t[u]:"ref"==u?l=t[u]:i[u]=t[u];return arguments.length>2&&(i.children=arguments.length>3?A.call(arguments,2):n),_(e.type,i,o||e.key,l||e.ref,null)}function T(e,t){var n={__c:t="__cC"+R++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(a)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return O})),n.d(t,"hydrate",(function(){return E})),n.d(t,"createElement",(function(){return l})),n.d(t,"h",(function(){return l})),n.d(t,"Fragment",(function(){return i})),n.d(t,"createRef",(function(){return u})),n.d(t,"isValidElement",(function(){return W})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return j})),n.d(t,"createContext",(function(){return T})),n.d(t,"toChildArray",(function(){return v})),n.d(t,"options",(function(){return L}));var A,L,U,W,M,I,N,R,V={},F=[],H=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;A=F.slice,L={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},U=0,W=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),a(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),a(this))},c.prototype.render=i,M=[],I="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,R=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:l,hydrate:_}=r,u=e=>e&&e.default?e.default:e,i=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof u(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=u(n("QfWi")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const s={preRenderData:r},f=r.url?i(r.url):"",a=_&&f===i(location.pathname);e=(a?_:l)(o(t,{CLI_DATA:s}),document.body,e)};0,t()}}});
//# sourceMappingURL=bundle.bdebf.esm.js.map