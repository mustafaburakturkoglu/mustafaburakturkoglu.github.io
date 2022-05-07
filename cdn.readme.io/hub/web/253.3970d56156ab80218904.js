"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[253],{96253:(e,t,r)=>{r.d(t,{ZP:()=>I});var n=r(2784),i=Object.prototype.hasOwnProperty;var o=new WeakMap,u=0;var a=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.cache.get(t)},e.prototype.set=function(e,t){var r=this.serializeKey(e)[0];this.cache.set(r,t),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.cache.has(t)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"==typeof e)try{e=e()}catch(t){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",r=0;r<e.length;++r)if(null!==e[r]){var n=void 0;"object"!=typeof e[r]&&"function"!=typeof e[r]?n="string"==typeof e[r]?'"'+e[r]+'"':String(e[r]):o.has(e[r])?n=o.get(e[r]):(n=u,o.set(e[r],u++)),t+="@"+n}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!=typeof e)throw new Error("Expected the listener to be a function.");var r=!0;return this.subs.push(e),function(){if(r){r=!1;var n=t.subs.indexOf(e);n>-1&&(t.subs[n]=t.subs[t.subs.length-1],t.subs.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.subs;e<t.length;e++){(0,t[e])()}},e}();var c=!0;const s={isOnline:function(){return c},isDocumentVisible:function(){return"undefined"==typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!=typeof window&&void 0!==window.addEventListener&&"undefined"!=typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!=typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){c=!0,e()}),!1),window.addEventListener("offline",(function(){return c=!1}),!1))}};var f=function(){return f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},f.apply(this,arguments)},l=new a;var d="undefined"!=typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),v=f({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,r,n,i){if(r.isDocumentVisible()&&!("number"==typeof r.errorRetryCount&&i.retryCount>r.errorRetryCount)){var o=Math.min(i.retryCount,8),u=~~((Math.random()+.5)*(1<<o))*r.errorRetryInterval;setTimeout(n,u,i)}},errorRetryInterval:1e3*(d?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(d?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,r){var n,o;if(t===r)return!0;if(t&&r&&(n=t.constructor)===r.constructor){if(n===Date)return t.getTime()===r.getTime();if(n===RegExp)return t.toString()===r.toString();if(n===Array){if((o=t.length)===r.length)for(;o--&&e(t[o],r[o]););return-1===o}if(!n||"object"==typeof t){for(n in o=0,t){if(i.call(t,n)&&++o&&!i.call(r,n))return!1;if(!(n in r)||!e(t[n],r[n]))return!1}return Object.keys(r).length===o}}return t!=t&&r!=r},isPaused:function(){return!1}},s);const h=v;var p="undefined"==typeof window||!!("undefined"!=typeof Deno&&Deno&&Deno.version&&Deno.version.deno),y=p?null:window.requestAnimationFrame?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout(e,1)},g=p?n.useEffect:n.useLayoutEffect,b=(0,n.createContext)({});b.displayName="SWRConfigContext";const w=b;var m,O=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function u(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,a)}c((n=n.apply(e,t||[])).next())}))},E=function(e,t){var r,n,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,n=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},R={},D={},T={},V={},C={},L={},S={},P=(m=0,function(){return++m});if(!p){var x=function(e){if(h.isDocumentVisible()&&h.isOnline())for(var t in e)e[t][0]&&e[t][0]()};"function"==typeof h.registerOnFocus&&h.registerOnFocus((function(){return x(T)})),"function"==typeof h.registerOnReconnect&&h.registerOnReconnect((function(){return x(V)}))}var j=function(e,t){void 0===t&&(t=!0);var r=l.serializeKey(e),n=r[0],i=r[2],o=r[3];if(!n)return Promise.resolve();var u=C[n];if(n&&u){for(var a=l.get(n),c=l.get(i),s=l.get(o),f=[],d=0;d<u.length;++d)f.push(u[d](t,a,c,s,d>0));return Promise.all(f).then((function(){return l.get(n)}))}return Promise.resolve(l.get(n))},k=function(e,t,r,n){var i=C[e];if(e&&i)for(var o=0;o<i.length;++o)i[o](!1,t,r,n)},A=function(e,t,r){return void 0===r&&(r=!0),O(void 0,void 0,void 0,(function(){var n,i,o,u,a,c,s,f,d,v,h,p,y;return E(this,(function(g){switch(g.label){case 0:if(n=l.serializeKey(e),i=n[0],o=n[2],!i)return[2];if(void 0===t)return[2,j(e,r)];if(L[i]=P()-1,S[i]=0,u=L[i],a=D[i],f=!1,t&&"function"==typeof t)try{t=t(l.get(i))}catch(e){t=void 0,s=e}if(!t||"function"!=typeof t.then)return[3,5];f=!0,g.label=1;case 1:return g.trys.push([1,3,,4]),[4,t];case 2:return c=g.sent(),[3,4];case 3:return d=g.sent(),s=d,[3,4];case 4:return[3,6];case 5:c=t,g.label=6;case 6:if((v=function(){if(u!==L[i]||a!==D[i]){if(s)throw s;return!0}})())return[2,c];if(void 0!==c&&l.set(i,c),l.set(o,s),S[i]=P()-1,!f&&v())return[2,c];if(h=C[i]){for(p=[],y=0;y<h.length;++y)p.push(h[y](!!r,c,s,void 0,y>0));return[2,Promise.all(p).then((function(){if(s)throw s;return l.get(i)}))]}if(s)throw s;return[2,c]}}))}))};Object.defineProperty(w.Provider,"default",{value:h});w.Provider;const I=function(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=t[0],o=Object.assign({},h,(0,n.useContext)(w),t.length>2?t[2]:2===t.length&&"object"==typeof t[1]?t[1]:{}),u=t.length>2||2===t.length&&"function"==typeof t[1]||null===t[1]?t[1]:o.fetcher,a=l.serializeKey(i),c=a[0],s=a[1],f=a[2],d=a[3],v=(0,n.useRef)(o);g((function(){v.current=o}));var b=function(){return o.revalidateOnMount||!o.initialData&&void 0===o.revalidateOnMount},m=function(){var e=l.get(c);return void 0===e?o.initialData:e},x=function(){return!!l.get(d)||c&&b()},j=m(),I=l.get(f),_=x(),K=(0,n.useRef)({data:!1,error:!1,isValidating:!1}),z=(0,n.useRef)({data:j,error:I,isValidating:_});(0,n.useDebugValue)(z.current.data);var W,F,M=(0,n.useState)({})[1],H=(0,n.useCallback)((function(e){var t=!1;for(var r in e)z.current[r]!==e[r]&&(z.current[r]=e[r],K.current[r]&&(t=!0));if(t){if(N.current||!B.current)return;M({})}}),[]),N=(0,n.useRef)(!1),q=(0,n.useRef)(c),B=(0,n.useRef)(!1),U=(0,n.useCallback)((function(e){for(var t,r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];N.current||B.current&&c===q.current&&(t=v.current)[e].apply(t,r)}),[c]),G=(0,n.useCallback)((function(e,t){return A(q.current,e,t)}),[]),Z=function(e,t){return e[c]?e[c].push(t):e[c]=[t],function(){var r=e[c],n=r.indexOf(t);n>=0&&(r[n]=r[r.length-1],r.pop())}},J=(0,n.useCallback)((function(t){return void 0===t&&(t={}),O(e,void 0,void 0,(function(){var e,r,n,i,a,h,p,y,g,b;return E(this,(function(w){switch(w.label){case 0:if(!c||!u)return[2,!1];if(N.current)return[2,!1];if(v.current.isPaused())return[2,!1];e=t.retryCount,r=void 0===e?0:e,n=t.dedupe,i=void 0!==n&&n,a=!0,h=void 0!==R[c]&&i,w.label=1;case 1:return w.trys.push([1,6,,7]),H({isValidating:!0}),l.set(d,!0),h||k(c,z.current.data,z.current.error,!0),p=void 0,y=void 0,h?(y=D[c],[4,R[c]]):[3,3];case 2:return p=w.sent(),[3,5];case 3:return o.loadingTimeout&&!l.get(c)&&setTimeout((function(){a&&U("onLoadingSlow",c,o)}),o.loadingTimeout),R[c]=null!==s?u.apply(void 0,s):u(c),D[c]=y=P(),[4,R[c]];case 4:p=w.sent(),setTimeout((function(){delete R[c],delete D[c]}),o.dedupingInterval),U("onSuccess",p,c,o),w.label=5;case 5:return D[c]>y?[2,!1]:L[c]&&(y<=L[c]||y<=S[c]||0===S[c])?(H({isValidating:!1}),[2,!1]):(l.set(f,void 0),l.set(d,!1),g={isValidating:!1},void 0!==z.current.error&&(g.error=void 0),o.compare(z.current.data,p)||(g.data=p),o.compare(l.get(c),p)||l.set(c,p),H(g),h||k(c,p,g.error,!1),[3,7]);case 6:return b=w.sent(),delete R[c],delete D[c],v.current.isPaused()?(H({isValidating:!1}),[2,!1]):(l.set(f,b),z.current.error!==b&&(H({isValidating:!1,error:b}),h||k(c,void 0,b,!1)),U("onError",b,c,o),o.shouldRetryOnError&&U("onErrorRetry",b,c,o,J,{retryCount:r+1,dedupe:!0}),[3,7]);case 7:return a=!1,[2,!0]}}))}))}),[c]);if(g((function(){if(c){N.current=!1;var e=B.current;B.current=!0;var t=z.current.data,r=m();q.current=c,o.compare(t,r)||H({data:r});var n=function(){return J({dedupe:!0})};(e||b())&&(void 0===r||p?n():y(n));var i=!1,u=Z(T,(function(){!i&&v.current.revalidateOnFocus&&(i=!0,n(),setTimeout((function(){return i=!1}),v.current.focusThrottleInterval))})),a=Z(V,(function(){v.current.revalidateOnReconnect&&n()})),s=Z(C,(function(e,t,r,i,u){void 0===e&&(e=!0),void 0===u&&(u=!0);var a={},c=!1;return void 0===t||o.compare(z.current.data,t)||(a.data=t,c=!0),z.current.error!==r&&(a.error=r,c=!0),void 0!==i&&z.current.isValidating!==i&&(a.isValidating=i,c=!0),c&&H(a),!!e&&(u?n():J())}));return function(){H=function(){return null},N.current=!0,u(),a(),s()}}}),[c,J]),g((function(){var t=null,r=function(){return O(e,void 0,void 0,(function(){return E(this,(function(e){switch(e.label){case 0:return z.current.error||!v.current.refreshWhenHidden&&!v.current.isDocumentVisible()||!v.current.refreshWhenOffline&&!v.current.isOnline()?[3,2]:[4,J({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return v.current.refreshInterval&&t&&(t=setTimeout(r,v.current.refreshInterval)),[2]}}))}))};return v.current.refreshInterval&&(t=setTimeout(r,v.current.refreshInterval)),function(){t&&(clearTimeout(t),t=null)}}),[o.refreshInterval,o.refreshWhenHidden,o.refreshWhenOffline,J]),o.suspense){if(W=l.get(c),F=l.get(f),void 0===W&&(W=j),void 0===F&&(F=I),void 0===W&&void 0===F){if(R[c]||J(),R[c]&&"function"==typeof R[c].then)throw R[c];W=R[c]}if(void 0===W&&F)throw F}var Q=(0,n.useMemo)((function(){var e={revalidate:J,mutate:G};return Object.defineProperties(e,{error:{get:function(){return K.current.error=!0,o.suspense?F:q.current===c?z.current.error:I},enumerable:!0},data:{get:function(){return K.current.data=!0,o.suspense?W:q.current===c?z.current.data:j},enumerable:!0},isValidating:{get:function(){return K.current.isValidating=!0,!!c&&z.current.isValidating},enumerable:!0}}),e}),[J,j,I,G,c,o.suspense,F,W]);return Q}}}]);