parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"u2QS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.delay=void 0;const e=e=>new Promise((t,o)=>{setTimeout(()=>{t(e)},e)});exports.delay=e;const t=e=>console.log(`Resolved after ${e}ms`);e(2e3).then(t),e(1e3).then(t),e(1500).then(t);
},{}],"n9ff":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toggleUserState=void 0;const e=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],t=(e,t)=>new Promise((a,o)=>{a(e.map(e=>e.name===t?{...e,active:!e.active}:e))});exports.toggleUserState=t;const a=e=>console.table(e);t(e,"Mango").then(a),t(e,"Lux").then(a);
},{}],"T9OW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeTransaction=void 0;const t={},e=(t,e)=>Math.floor(Math.random()*(e-t+1)+t),o=o=>{const n=e(200,500);return new Promise((e,a)=>{setTimeout(()=>{const r=Math.random()>.3;t.id=o.id,t.time=n,r?e(t):a(o.id)},n)})};exports.makeTransaction=o;const n=({id:t,time:e})=>{console.log(`Transaction ${t} processed in ${e} ms`)},a=t=>{console.warn(`Error processing transaction ${t}. Please try again later.`)};o({id:70,amount:150}).then(n).catch(a),o({id:71,amount:230}).then(n).catch(a),o({id:72,amount:75}).then(n).catch(a),o({id:73,amount:100}).then(n).catch(a);
},{}],"Focm":[function(require,module,exports) {
"use strict";var r=require("./js/task1"),s=require("./js/task2"),e=require("./js/task3");
},{"./js/task1":"u2QS","./js/task2":"n9ff","./js/task3":"T9OW"}]},{},["Focm"], null)
//# sourceMappingURL=/promosofocation/src.d9250604.js.map