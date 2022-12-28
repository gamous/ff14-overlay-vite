import{bq as P,b$ as de,d as oe,v as j,x as U,y as he,o as pe,s as K,a as ve,p as ye,C as ge,M as k,K as $,L as Ce,l as me,T as A,m as z,a$ as we,c0 as _e,bX as Z,S as be,U as X}from"./index.js";/* empty css                     */var T={},Fe={get exports(){return T},set exports(r){T=r}},V,Q;function xe(){if(Q)return V;Q=1;var r=1e3,i=r*60,e=i*60,f=e*24,m=f*7,v=f*365.25;V=function(t,n){n=n||{};var u=typeof t;if(u==="string"&&t.length>0)return w(t);if(u==="number"&&isFinite(t))return n.long?a(t):C(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function w(t){if(t=String(t),!(t.length>100)){var n=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(n){var u=parseFloat(n[1]),h=(n[2]||"ms").toLowerCase();switch(h){case"years":case"year":case"yrs":case"yr":case"y":return u*v;case"weeks":case"week":case"w":return u*m;case"days":case"day":case"d":return u*f;case"hours":case"hour":case"hrs":case"hr":case"h":return u*e;case"minutes":case"minute":case"mins":case"min":case"m":return u*i;case"seconds":case"second":case"secs":case"sec":case"s":return u*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}function C(t){var n=Math.abs(t);return n>=f?Math.round(t/f)+"d":n>=e?Math.round(t/e)+"h":n>=i?Math.round(t/i)+"m":n>=r?Math.round(t/r)+"s":t+"ms"}function a(t){var n=Math.abs(t);return n>=f?l(t,n,f,"day"):n>=e?l(t,n,e,"hour"):n>=i?l(t,n,i,"minute"):n>=r?l(t,n,r,"second"):t+" ms"}function l(t,n,u,h){var y=n>=u*1.5;return Math.round(t/u)+" "+h+(y?"s":"")}return V}function ke(r){e.debug=e,e.default=e,e.coerce=a,e.disable=v,e.enable=m,e.enabled=w,e.humanize=xe(),e.destroy=l,Object.keys(r).forEach(t=>{e[t]=r[t]}),e.names=[],e.skips=[],e.formatters={};function i(t){let n=0;for(let u=0;u<t.length;u++)n=(n<<5)-n+t.charCodeAt(u),n|=0;return e.colors[Math.abs(n)%e.colors.length]}e.selectColor=i;function e(t){let n,u=null,h,y;function p(...c){if(!p.enabled)return;const _=p,s=Number(new Date),o=s-(n||s);_.diff=o,_.prev=n,_.curr=s,n=s,c[0]=e.coerce(c[0]),typeof c[0]!="string"&&c.unshift("%O");let d=0;c[0]=c[0].replace(/%([a-zA-Z%])/g,(b,F)=>{if(b==="%%")return"%";d++;const x=e.formatters[F];if(typeof x=="function"){const B=c[d];b=x.call(_,B),c.splice(d,1),d--}return b}),e.formatArgs.call(_,c),(_.log||e.log).apply(_,c)}return p.namespace=t,p.useColors=e.useColors(),p.color=e.selectColor(t),p.extend=f,p.destroy=e.destroy,Object.defineProperty(p,"enabled",{enumerable:!0,configurable:!1,get:()=>u!==null?u:(h!==e.namespaces&&(h=e.namespaces,y=e.enabled(t)),y),set:c=>{u=c}}),typeof e.init=="function"&&e.init(p),p}function f(t,n){const u=e(this.namespace+(typeof n>"u"?":":n)+t);return u.log=this.log,u}function m(t){e.save(t),e.namespaces=t,e.names=[],e.skips=[];let n;const u=(typeof t=="string"?t:"").split(/[\s,]+/),h=u.length;for(n=0;n<h;n++)u[n]&&(t=u[n].replace(/\*/g,".*?"),t[0]==="-"?e.skips.push(new RegExp("^"+t.slice(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function v(){const t=[...e.names.map(C),...e.skips.map(C).map(n=>"-"+n)].join(",");return e.enable(""),t}function w(t){if(t[t.length-1]==="*")return!0;let n,u;for(n=0,u=e.skips.length;n<u;n++)if(e.skips[n].test(t))return!1;for(n=0,u=e.names.length;n<u;n++)if(e.names[n].test(t))return!0;return!1}function C(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}function a(t){return t instanceof Error?t.stack||t.message:t}function l(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}var Be=ke;(function(r,i){i.formatArgs=f,i.save=m,i.load=v,i.useColors=e,i.storage=w(),i.destroy=(()=>{let a=!1;return()=>{a||(a=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),i.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function e(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function f(a){if(a[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+a[0]+(this.useColors?"%c ":" ")+"+"+r.exports.humanize(this.diff),!this.useColors)return;const l="color: "+this.color;a.splice(1,0,l,"color: inherit");let t=0,n=0;a[0].replace(/%[a-zA-Z%]/g,u=>{u!=="%%"&&(t++,u==="%c"&&(n=t))}),a.splice(n,0,l)}i.log=console.debug||console.log||(()=>{});function m(a){try{a?i.storage.setItem("debug",a):i.storage.removeItem("debug")}catch{}}function v(){let a;try{a=i.storage.getItem("debug")}catch{}return!a&&typeof process<"u"&&"env"in process&&(a={}.DEBUG),a}function w(){try{return localStorage}catch{}}r.exports=Be(i);const{formatters:C}=r.exports;C.j=function(a){try{return JSON.stringify(a)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}}})(Fe,T);const Ae=T;var D={},Le={get exports(){return D},set exports(r){D=r}};(function(r){var i=Object.prototype.hasOwnProperty,e="~";function f(){}Object.create&&(f.prototype=Object.create(null),new f().__proto__||(e=!1));function m(a,l,t){this.fn=a,this.context=l,this.once=t||!1}function v(a,l,t,n,u){if(typeof t!="function")throw new TypeError("The listener must be a function");var h=new m(t,n||a,u),y=e?e+l:l;return a._events[y]?a._events[y].fn?a._events[y]=[a._events[y],h]:a._events[y].push(h):(a._events[y]=h,a._eventsCount++),a}function w(a,l){--a._eventsCount===0?a._events=new f:delete a._events[l]}function C(){this._events=new f,this._eventsCount=0}C.prototype.eventNames=function(){var l=[],t,n;if(this._eventsCount===0)return l;for(n in t=this._events)i.call(t,n)&&l.push(e?n.slice(1):n);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(t)):l},C.prototype.listeners=function(l){var t=e?e+l:l,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var u=0,h=n.length,y=new Array(h);u<h;u++)y[u]=n[u].fn;return y},C.prototype.listenerCount=function(l){var t=e?e+l:l,n=this._events[t];return n?n.fn?1:n.length:0},C.prototype.emit=function(l,t,n,u,h,y){var p=e?e+l:l;if(!this._events[p])return!1;var c=this._events[p],_=arguments.length,s,o;if(c.fn){switch(c.once&&this.removeListener(l,c.fn,void 0,!0),_){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,u),!0;case 5:return c.fn.call(c.context,t,n,u,h),!0;case 6:return c.fn.call(c.context,t,n,u,h,y),!0}for(o=1,s=new Array(_-1);o<_;o++)s[o-1]=arguments[o];c.fn.apply(c.context,s)}else{var d=c.length,g;for(o=0;o<d;o++)switch(c[o].once&&this.removeListener(l,c[o].fn,void 0,!0),_){case 1:c[o].fn.call(c[o].context);break;case 2:c[o].fn.call(c[o].context,t);break;case 3:c[o].fn.call(c[o].context,t,n);break;case 4:c[o].fn.call(c[o].context,t,n,u);break;default:if(!s)for(g=1,s=new Array(_-1);g<_;g++)s[g-1]=arguments[g];c[o].fn.apply(c[o].context,s)}}return!0},C.prototype.on=function(l,t,n){return v(this,l,t,n,!1)},C.prototype.once=function(l,t,n){return v(this,l,t,n,!0)},C.prototype.removeListener=function(l,t,n,u){var h=e?e+l:l;if(!this._events[h])return this;if(!t)return w(this,h),this;var y=this._events[h];if(y.fn)y.fn===t&&(!u||y.once)&&(!n||y.context===n)&&w(this,h);else{for(var p=0,c=[],_=y.length;p<_;p++)(y[p].fn!==t||u&&!y[p].once||n&&y[p].context!==n)&&c.push(y[p]);c.length?this._events[h]=c.length===1?c[0]:c:w(this,h)}return this},C.prototype.removeAllListeners=function(l){var t;return l?(t=e?e+l:l,this._events[t]&&w(this,t)):(this._events=new f,this._eventsCount=0),this},C.prototype.off=C.prototype.removeListener,C.prototype.addListener=C.prototype.on,C.prefixed=e,C.EventEmitter=C,r.exports=C})(Le);var S=null;typeof WebSocket<"u"?S=WebSocket:typeof MozWebSocket<"u"?S=MozWebSocket:typeof P<"u"?S=P.WebSocket||P.MozWebSocket:typeof window<"u"?S=window.WebSocket||window.MozWebSocket:typeof self<"u"&&(S=self.WebSocket||self.MozWebSocket);var Y=S,W={},Pe={get exports(){return W},set exports(r){W=r}};function Re(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var N={},Ie={get exports(){return N},set exports(r){N=r}};const Se={},Me=Object.freeze(Object.defineProperty({__proto__:null,default:Se},Symbol.toStringTag,{value:"Module"})),Oe=de(Me);var ee;function ie(){return ee||(ee=1,function(r,i){(function(e,f){r.exports=f()})(P,function(){var e=e||function(f,m){var v;if(typeof window<"u"&&window.crypto&&(v=window.crypto),typeof self<"u"&&self.crypto&&(v=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(v=globalThis.crypto),!v&&typeof window<"u"&&window.msCrypto&&(v=window.msCrypto),!v&&typeof P<"u"&&P.crypto&&(v=P.crypto),!v&&typeof Re=="function")try{v=Oe}catch{}var w=function(){if(v){if(typeof v.getRandomValues=="function")try{return v.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof v.randomBytes=="function")try{return v.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},C=Object.create||function(){function s(){}return function(o){var d;return s.prototype=o,d=new s,s.prototype=null,d}}(),a={},l=a.lib={},t=l.Base=function(){return{extend:function(s){var o=C(this);return s&&o.mixIn(s),(!o.hasOwnProperty("init")||this.init===o.init)&&(o.init=function(){o.$super.init.apply(this,arguments)}),o.init.prototype=o,o.$super=this,o},create:function(){var s=this.extend();return s.init.apply(s,arguments),s},init:function(){},mixIn:function(s){for(var o in s)s.hasOwnProperty(o)&&(this[o]=s[o]);s.hasOwnProperty("toString")&&(this.toString=s.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),n=l.WordArray=t.extend({init:function(s,o){s=this.words=s||[],o!=m?this.sigBytes=o:this.sigBytes=s.length*4},toString:function(s){return(s||h).stringify(this)},concat:function(s){var o=this.words,d=s.words,g=this.sigBytes,b=s.sigBytes;if(this.clamp(),g%4)for(var F=0;F<b;F++){var x=d[F>>>2]>>>24-F%4*8&255;o[g+F>>>2]|=x<<24-(g+F)%4*8}else for(var B=0;B<b;B+=4)o[g+B>>>2]=d[B>>>2];return this.sigBytes+=b,this},clamp:function(){var s=this.words,o=this.sigBytes;s[o>>>2]&=4294967295<<32-o%4*8,s.length=f.ceil(o/4)},clone:function(){var s=t.clone.call(this);return s.words=this.words.slice(0),s},random:function(s){for(var o=[],d=0;d<s;d+=4)o.push(w());return new n.init(o,s)}}),u=a.enc={},h=u.Hex={stringify:function(s){for(var o=s.words,d=s.sigBytes,g=[],b=0;b<d;b++){var F=o[b>>>2]>>>24-b%4*8&255;g.push((F>>>4).toString(16)),g.push((F&15).toString(16))}return g.join("")},parse:function(s){for(var o=s.length,d=[],g=0;g<o;g+=2)d[g>>>3]|=parseInt(s.substr(g,2),16)<<24-g%8*4;return new n.init(d,o/2)}},y=u.Latin1={stringify:function(s){for(var o=s.words,d=s.sigBytes,g=[],b=0;b<d;b++){var F=o[b>>>2]>>>24-b%4*8&255;g.push(String.fromCharCode(F))}return g.join("")},parse:function(s){for(var o=s.length,d=[],g=0;g<o;g++)d[g>>>2]|=(s.charCodeAt(g)&255)<<24-g%4*8;return new n.init(d,o)}},p=u.Utf8={stringify:function(s){try{return decodeURIComponent(escape(y.stringify(s)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(s){return y.parse(unescape(encodeURIComponent(s)))}},c=l.BufferedBlockAlgorithm=t.extend({reset:function(){this._data=new n.init,this._nDataBytes=0},_append:function(s){typeof s=="string"&&(s=p.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes},_process:function(s){var o,d=this._data,g=d.words,b=d.sigBytes,F=this.blockSize,x=F*4,B=b/x;s?B=f.ceil(B):B=f.max((B|0)-this._minBufferSize,0);var I=B*F,R=f.min(I*4,b);if(I){for(var O=0;O<I;O+=F)this._doProcessBlock(g,O);o=g.splice(0,I),d.sigBytes-=R}return new n.init(o,R)},clone:function(){var s=t.clone.call(this);return s._data=this._data.clone(),s},_minBufferSize:0});l.Hasher=c.extend({cfg:t.extend(),init:function(s){this.cfg=this.cfg.extend(s),this.reset()},reset:function(){c.reset.call(this),this._doReset()},update:function(s){return this._append(s),this._process(),this},finalize:function(s){s&&this._append(s);var o=this._doFinalize();return o},blockSize:16,_createHelper:function(s){return function(o,d){return new s.init(d).finalize(o)}},_createHmacHelper:function(s){return function(o,d){return new _.HMAC.init(s,d).finalize(o)}}});var _=a.algo={};return a}(Math);return e})}(Ie)),N}(function(r,i){(function(e,f){r.exports=f(ie())})(P,function(e){return function(f){var m=e,v=m.lib,w=v.WordArray,C=v.Hasher,a=m.algo,l=[],t=[];(function(){function h(_){for(var s=f.sqrt(_),o=2;o<=s;o++)if(!(_%o))return!1;return!0}function y(_){return(_-(_|0))*4294967296|0}for(var p=2,c=0;c<64;)h(p)&&(c<8&&(l[c]=y(f.pow(p,1/2))),t[c]=y(f.pow(p,1/3)),c++),p++})();var n=[],u=a.SHA256=C.extend({_doReset:function(){this._hash=new w.init(l.slice(0))},_doProcessBlock:function(h,y){for(var p=this._hash.words,c=p[0],_=p[1],s=p[2],o=p[3],d=p[4],g=p[5],b=p[6],F=p[7],x=0;x<64;x++){if(x<16)n[x]=h[y+x]|0;else{var B=n[x-15],I=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,R=n[x-2],O=(R<<15|R>>>17)^(R<<13|R>>>19)^R>>>10;n[x]=I+n[x-7]+O+n[x-16]}var ae=d&g^~d&b,ce=c&_^c&s^_&s,le=(c<<30|c>>>2)^(c<<19|c>>>13)^(c<<10|c>>>22),ue=(d<<26|d>>>6)^(d<<21|d>>>11)^(d<<7|d>>>25),J=F+ue+ae+t[x]+n[x],fe=le+ce;F=b,b=g,g=d,d=o+J|0,o=s,s=_,_=c,c=J+fe|0}p[0]=p[0]+c|0,p[1]=p[1]+_|0,p[2]=p[2]+s|0,p[3]=p[3]+o|0,p[4]=p[4]+d|0,p[5]=p[5]+g|0,p[6]=p[6]+b|0,p[7]=p[7]+F|0},_doFinalize:function(){var h=this._data,y=h.words,p=this._nDataBytes*8,c=h.sigBytes*8;return y[c>>>5]|=128<<24-c%32,y[(c+64>>>9<<4)+14]=f.floor(p/4294967296),y[(c+64>>>9<<4)+15]=p,h.sigBytes=y.length*4,this._process(),this._hash},clone:function(){var h=C.clone.call(this);return h._hash=this._hash.clone(),h}});m.SHA256=C._createHelper(u),m.HmacSHA256=C._createHmacHelper(u)}(Math),e.SHA256})})(Pe);const te=W;var G={},$e={get exports(){return G},set exports(r){G=r}};(function(r,i){(function(e,f){r.exports=f(ie())})(P,function(e){return function(){var f=e,m=f.lib,v=m.WordArray,w=f.enc;w.Base64={stringify:function(a){var l=a.words,t=a.sigBytes,n=this._map;a.clamp();for(var u=[],h=0;h<t;h+=3)for(var y=l[h>>>2]>>>24-h%4*8&255,p=l[h+1>>>2]>>>24-(h+1)%4*8&255,c=l[h+2>>>2]>>>24-(h+2)%4*8&255,_=y<<16|p<<8|c,s=0;s<4&&h+s*.75<t;s++)u.push(n.charAt(_>>>6*(3-s)&63));var o=n.charAt(64);if(o)for(;u.length%4;)u.push(o);return u.join("")},parse:function(a){var l=a.length,t=this._map,n=this._reverseMap;if(!n){n=this._reverseMap=[];for(var u=0;u<t.length;u++)n[t.charCodeAt(u)]=u}var h=t.charAt(64);if(h){var y=a.indexOf(h);y!==-1&&(l=y)}return C(a,l,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function C(a,l,t){for(var n=[],u=0,h=0;h<l;h++)if(h%4){var y=t[a.charCodeAt(h-1)]<<h%4*2,p=t[a.charCodeAt(h)]>>>6-h%4*2,c=y|p;n[u>>>2]|=c<<24-u%4*8,u++}return v.create(n,u)}}(),e.enc.Base64})})($e);const ne=G;function q(){return q=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var f in e)Object.prototype.hasOwnProperty.call(e,f)&&(r[f]=e[f])}return r},q.apply(this,arguments)}function He(r,i){if(r==null)return{};var e={},f=Object.keys(r),m,v;for(v=0;v<f.length;v++)m=f[v],!(i.indexOf(m)>=0)&&(e[m]=r[m]);return e}var L;(function(r){r[r.Hello=0]="Hello",r[r.Identify=1]="Identify",r[r.Identified=2]="Identified",r[r.Reidentify=3]="Reidentify",r[r.Event=5]="Event",r[r.Request=6]="Request",r[r.RequestResponse=7]="RequestResponse",r[r.RequestBatch=8]="RequestBatch",r[r.RequestBatchResponse=9]="RequestBatchResponse"})(L||(L={}));var re;(function(r){r[r.None=0]="None",r[r.General=1]="General",r[r.Config=2]="Config",r[r.Scenes=4]="Scenes",r[r.Inputs=8]="Inputs",r[r.Transitions=16]="Transitions",r[r.Filters=32]="Filters",r[r.Outputs=64]="Outputs",r[r.SceneItems=128]="SceneItems",r[r.MediaInputs=256]="MediaInputs",r[r.Vendors=512]="Vendors",r[r.Ui=1024]="Ui",r[r.All=1023]="All",r[r.InputVolumeMeters=65536]="InputVolumeMeters",r[r.InputActiveStateChanged=131072]="InputActiveStateChanged",r[r.InputShowStateChanged=262144]="InputShowStateChanged",r[r.SceneItemTransformChanged=524288]="SceneItemTransformChanged"})(re||(re={}));var se;(function(r){r[r.None=-1]="None",r[r.SerialRealtime=0]="SerialRealtime",r[r.SerialFrame=1]="SerialFrame",r[r.Parallel=2]="Parallel"})(se||(se={}));function Ee(r,i,e){const f=ne.stringify(te(e+r));return ne.stringify(te(f+i))}const qe=["authentication","rpcVersion"],H=Ae("obs-websocket-js");class E extends Error{constructor(i,e){super(e),this.code=void 0,this.code=i}}class M extends D{constructor(...i){super(...i),this._identified=!1,this.internalListeners=new D,this.socket=void 0}static generateMessageId(){return String(M.requestCounter++)}get identified(){return this._identified}async connect(i="ws://127.0.0.1:4455",e,f={}){var m=this;this.socket&&await this.disconnect();try{const v=this.internalEventPromise("ConnectionClosed"),w=this.internalEventPromise("ConnectionError");return await Promise.race([async function(){const C=await m.createConnection(i);return m.emit("Hello",C),m.identify(C,e,f)}(),new Promise((C,a)=>{w.then(l=>{l.message&&a(l)}),v.then(l=>{a(l)})})])}catch(v){throw await this.disconnect(),v}}async disconnect(){if(!this.socket||this.socket.readyState===Y.CLOSED)return;const i=this.internalEventPromise("ConnectionClosed");this.socket.close(),await i}async reidentify(i){const e=this.internalEventPromise(`op:${L.Identified}`);return await this.message(L.Reidentify,i),e}async call(i,e){const f=M.generateMessageId(),m=this.internalEventPromise(`res:${f}`);await this.message(L.Request,{requestId:f,requestType:i,requestData:e});const{requestStatus:v,responseData:w}=await m;if(!v.result)throw new E(v.code,v.comment);return w}async callBatch(i,e={}){const f=M.generateMessageId(),m=this.internalEventPromise(`res:${f}`);await this.message(L.RequestBatch,q({requestId:f,requests:i},e));const{results:v}=await m;return v}cleanup(){this.socket&&(this.socket.onopen=null,this.socket.onmessage=null,this.socket.onerror=null,this.socket.onclose=null,this.socket=void 0,this._identified=!1,this.internalListeners.removeAllListeners())}async createConnection(i){var e;const f=this.internalEventPromise("ConnectionOpened"),m=this.internalEventPromise(`op:${L.Hello}`);this.socket=new Y(i,this.protocol),this.socket.onopen=this.onOpen.bind(this),this.socket.onmessage=this.onMessage.bind(this),this.socket.onerror=this.onError.bind(this),this.socket.onclose=this.onClose.bind(this),await f;const v=(e=this.socket)==null?void 0:e.protocol;if(!v)throw new E(-1,"Server sent no subprotocol");if(v!==this.protocol)throw new E(-1,"Server sent an invalid subprotocol");return m}async identify(i,e,f={}){let{authentication:m,rpcVersion:v}=i,w=He(i,qe);const C=q({rpcVersion:v},f);m&&e&&(C.authentication=Ee(m.salt,m.challenge,e));const a=this.internalEventPromise(`op:${L.Identified}`);await this.message(L.Identify,C);const l=await a;return this._identified=!0,this.emit("Identified",l),q({rpcVersion:v},w,l)}async message(i,e){if(!this.socket)throw new Error("Not connected");if(!this.identified&&i!==1)throw new Error("Socket not identified");const f=await this.encodeMessage({op:i,d:e});this.socket.send(f)}async internalEventPromise(i){return new Promise(e=>{this.internalListeners.once(i,e)})}onOpen(i){H("socket.open"),this.emit("ConnectionOpened"),this.internalListeners.emit("ConnectionOpened",i)}async onMessage(i){try{const{op:e,d:f}=await this.decodeMessage(i.data);if(H("socket.message: %d %j",e,f),e===void 0||f===void 0)return;switch(e){case L.Event:{const{eventType:m,eventData:v}=f;this.emit(m,v);return}case L.RequestResponse:case L.RequestBatchResponse:{const{requestId:m}=f;this.internalListeners.emit(`res:${m}`,f);return}default:this.internalListeners.emit(`op:${e}`,f)}}catch(e){H("error handling message: %o",e)}}onError(i){H("socket.error: %o",i);const e=new E(-1,i.message);this.emit("ConnectionError",e),this.internalListeners.emit("ConnectionError",e)}onClose(i){H("socket.close: %s (%d)",i.reason,i.code);const e=new E(i.code,i.reason);this.emit("ConnectionClosed",e),this.internalListeners.emit("ConnectionClosed",e),this.cleanup()}}M.requestCounter=1;typeof exports<"u"&&Object.defineProperty(exports,"__esModule",{value:!0});class ze extends M{constructor(...i){super(...i),this.protocol="obswebsocket.json"}async encodeMessage(i){return JSON.stringify(i)}async decodeMessage(i){return JSON.parse(i)}}const Te={class:"markdown-body"},De=he('<h1>OBS自动录制</h1><h2>依赖</h2><ul><li>OBS版本 最新版（28.0.0+）</li><li>如果你正确安装最新版OBS，他会自带 <code class="">obs-websocket 5.0.1</code></li></ul><h2>使用</h2><ol><li><code class="">OBS</code> - <code class="">菜单</code> - <code class="">obs-websocket设置</code></li><li>勾选 <code class="">开启 WebSocket 服务器</code></li><li>勾选 <code class="">开启鉴权</code></li><li>点击 <code class="">生成密码</code></li><li>点击 <code class="">显示连接信息</code></li><li>记住服务器端口, 复制服务器密码</li><li>填写至网页的输入框中</li><li>点击连接</li></ol>',5),Ne=[De],Ve=oe({__name:"README",setup(r,{expose:i}){return i({frontmatter:{},excerpt:void 0}),(e,f)=>(j(),U("div",Te,Ne))}}),je={key:0,id:"container","bg-white":""},Ue=A("br",null,null,-1),We=["type"],Ge=A("br",null,null,-1),Je={style:{"user-select":"none"},for:"auto"},Ke={style:{"user-select":"none"},for:"partyLength"},Ze=["disabled"],Xe=["disabled"],et=oe({__name:"index",setup(r){let i=!1;const e=pe("obs-data",K({port:"4455",password:"",autoConnect:!0,partyLength:!0})),f=ve(!0),[m,v]=ye(!1),w=K({connect:!1,status:"空闲",passowrdShow:!1}),C={party:[]},a=new ze;a.on("ExitStarted",l),a.on("ConnectionClosed",l),a.on("ConnectionError",l),addOverlayListener("onLogEvent",_),addOverlayListener("onInCombatChangedEvent",c),addOverlayListener("PartyChanged",s),startOverlayEvents(),setTimeout(async()=>{e.value.autoConnect&&e.value.password.length>0&&await t()},1e3);function l(){w.status="closed",w.connect=!1}async function t(){try{const{obsWebSocketVersion:o,negotiatedRpcVersion:d}=await a.connect(`ws://127.0.0.1:${e.value.port}`,e.value.password,{rpcVersion:1});w.status="成功",w.connect=!0,Promise.resolve()}catch(o){w.status=`失败 ${o.code} ${o.message}`,w.connect=!1}}async function n(){await t()}async function u(){await a.disconnect().catch(()=>{})}async function h(){w.connect?e.value.partyLength?C.party.length<=8&&C.party.length>=5&&a.call("StartRecord").catch(()=>{}):a.call("StartRecord").catch(()=>{}):await t().then(()=>a.call("StartRecord")).catch(()=>{})}async function y(){await a.call("StopRecord").catch(()=>{})}function p(){a.call("GetRecordStatus").then(async o=>{o.outputActive&&o.outputDuration<=5e3?await y().then(()=>setTimeout(()=>p(),1e3)).catch(()=>{}):h()}).catch(()=>{t()})}async function c(o){!i&&o.detail.inACTCombat&&h(),i&&!o.detail.inACTCombat&&y(),i=o.detail.inACTCombat}async function _(o){for(const d of o.detail.logs)/^.{14} \w+ 00:(?:00B9|0[12]39)::?(?:距离战斗开始还有|Battle commencing in |戦闘開始まで)\d+[^（(]+[（(]/i.test(d)?p():(/^.{14} Director 21:.{8}:4000000F/.test(d)||/^.{14} ChatLog 00:0038::end$/i.test(d))&&y()}function s(o){C.party=(o==null?void 0:o.party)??[]}return ge(async()=>{await a.disconnect()}),(o,d)=>k(f)?(j(),U("div",je,[$(me(k(Ve),null,null,512),[[Ce,k(m)]]),A("form",null,[z(" 端口"),$(A("input",{type:"text","onUpdate:modelValue":d[0]||(d[0]=g=>k(e).port=g)},null,512),[[we,k(e).port]]),Ue,z(" 密码"),$(A("input",{type:k(w).passowrdShow?"text":"password","onUpdate:modelValue":d[1]||(d[1]=g=>k(e).password=g),autocomplete:"on"},null,8,We),[[_e,k(e).password]]),A("button",{onClick:d[2]||(d[2]=g=>k(w).passowrdShow=!k(w).passowrdShow)}," 👀 "),Ge,A("label",Je,[$(A("input",{type:"checkbox",id:"auto","onUpdate:modelValue":d[3]||(d[3]=g=>k(e).autoConnect=g)},null,512),[[Z,k(e).autoConnect]]),z(" 自动连接 ")]),A("label",Ke,[$(A("input",{type:"checkbox",id:"partyLength","onUpdate:modelValue":d[4]||(d[4]=g=>k(e).partyLength=g)},null,512),[[Z,k(e).partyLength]]),z(" 仅5~8人时录制 ")])]),A("p",null,"状态："+be(k(w).status),1),A("button",{disabled:k(w).connect,onClick:n},"连接",8,Ze),A("button",{disabled:!k(w).connect,onClick:u},"断开",8,Xe),A("button",{onClick:d[5]||(d[5]=g=>f.value=!1)},"隐藏页面"),k(w).connect?X("",!0):(j(),U("button",{key:0,onClick:d[6]||(d[6]=g=>k(v)())},"查看帮助"))])):X("",!0)}});export{et as default};
