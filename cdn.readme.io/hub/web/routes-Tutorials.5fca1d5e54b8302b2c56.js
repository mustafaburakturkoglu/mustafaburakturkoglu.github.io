(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[815],{2367:(e,t,n)=>{var r=n(34406),o=n(51788),i=n(99251).Integrations;e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dash",t=arguments.length>1?arguments[1]:void 0;if(!(t.sentry&&t.sentry.enabled&&t.sentry.dsn&&e))return o;var n=r&&r.env?"production":"development";return o.init({dsn:t.sentry.dsn,environment:n,release:t.releaseVersion||"",tracesSampleRate:t.sentry.tracesSampleRate,integrations:[new i.BrowserTracing],allowUrls:["".concat(t.asset_url,"/*"),"".concat(t.legacy_asset_url,"/*")],initialScope:{tags:{"readme-component":e}}}),o}},75322:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(59740),o=n(2784),i=n(19545);const a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.target,s=(0,r.Z)(n,["target"]),c=(0,i.Z)(),l=c.isServer,u=a||(l?void 0:window),d=(0,o.useRef)();(0,o.useEffect)((function(){d.current=t}),[t]),(0,o.useEffect)((function(){if(!Boolean(u&&u.addEventListener))return function(){};var t=function(e){return d.current(e)};return u.addEventListener(e,t,s),function(){u.removeEventListener(e,t)}}),[e,u])}},23862:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});n(73160);var r=n(2784),o=n(2367),i=n.n(o),a=n(45728);const s=function(e){var t=(0,r.useContext)(a.E_),n=(0,r.useContext)(a.St),o=(0,r.useContext)(a.xI),s=(0,r.useMemo)((function(){var r=i()(e,t);return r.setUser({id:(null==n?void 0:n._id)||(null==n?void 0:n.id)||"",name:(null==n?void 0:n.name)||""}),r.setContext("project",{name:(null==o?void 0:o.name)||""}),r}),[]);return(0,r.useCallback)((function(e,t){console.error(e),s.withScope((function(n){t&&t.supportErrorCode&&n.setTag("support-code",t.supportErrorCode),s.captureException(e)}))}),[s])}},44261:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(7896),o=n(59740),i=n(2784),a=n(13980),s=n.n(a),c=n(22849),l=function(e){var t=e.size,n=e.strokeWidth,a=void 0===n?2:n,s=e.className,l=void 0===s?"":s,u=(0,o.Z)(e,["size","strokeWidth","className"]);return i.createElement("div",{className:(0,c.ZP)("Spinner",t&&"Spinner_".concat(t),l),role:"progressbar"},i.createElement("svg",(0,r.Z)({className:"Spinner-icon",viewBox:"0 0 16 16"},u),i.createElement("title",null,"Loading"),i.createElement("path",{d:"M15 8a7 7 0 10-7 7",stroke:"currentColor",strokeLinecap:"round",strokeWidth:a,vectorEffect:"non-scaling-stroke"})),i.createElement("span",{className:"Spinner-label"},"Loading…"))};l.propTypes={size:s().oneOf(["sm","md","lg"]),strokeWidth:s().number};const u=l},14914:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(2784),o=n(22849);const i=function(e,t){return(0,r.useMemo)((function(){return(0,o.xh)({classes:e,bem:t})}),[e,t])}},22849:(e,t,n)=>{"use strict";n.d(t,{xh:()=>v,ZP:()=>m});var r=n(68630),o=n.n(r),i=n(42348),a=n.n(i),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},c=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},l=["-","_"],u=function(e){return a()(e.map((function(e){return"string"==typeof e?null==e?void 0:e.split(/[\s,.]/g):e})))},d=function(e,t){return e&&t?"&"===e[0]?e.replace("&",t):l.includes(e[0])&&!e.includes("-scss")?"".concat(t).concat(e):e:e},f=function(e){return o()(e)};function p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!e&&!t.length)return"";var r=f(e)?e:{},o=f(e)?t:c([e],t,!0),i=(r||{}).bem,s=void 0===i?"":i,l=a()(o),p=u(l);return p.filter((function(e){return"string"==typeof e&&e})).map((function(e){return e=d(e,s),r&&r[e]&&(e=r[e]),e})).join(" ")}function v(e){var t=e||{},n=t.bem,r=void 0===n?"":n,o=t.classes,i=void 0===o?{}:o,a=t.scope,l=void 0===a?{}:a,u=s(s({},i),l);return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=p.apply(void 0,c([s({bem:r},u)],e,!1));return n||(null==u?void 0:u[r])||r}}const m=p},72190:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(2784),o=n(47933),i=n(44261),a=n(14914),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const l=(0,r.memo)((0,r.forwardRef)((function(e,t){var n=e.bem,l=e.children,u=e.circular,d=e.className,f=e.disabled,p=e.dropdown,v=e.fullWidth,m=void 0!==v&&v,g=e.href,h=e.is,y=e.kind,_=void 0===y?"primary":y,b=e.ghost,E=e.link,O=e.loading,w=e.outline,x=e.size,k=void 0===x?"md":x,S=e.text,Z=e.to,j=e.type,L=void 0===j?"button":j,N=c(e,["bem","children","circular","className","disabled","dropdown","fullWidth","href","is","kind","ghost","link","loading","outline","size","text","to","type"]),C=h||(g?"a":Z?o.rU:"button"),A=(0,a.Z)({},"Button"),B=r.Children.toArray(l),P="object"==typeof n?Object.keys(n)[0]:null,z=A("&",P&&"_".concat(P),!E&&"_".concat(k),d,u&&"_circular",m&&"_full-width",b&&"_".concat(_,"_ghost"),_&&"_".concat(_),E&&"_".concat(_,"_link"),O&&"_loading","string"==typeof O&&"_loading_withText",w&&"_".concat(_,"_outline"),S&&"_".concat(_,"_text"));return r.createElement(C,s({ref:t,href:g},N,{className:z,disabled:O||f,type:g?void 0:L}),O&&r.createElement(i.Z,{className:"Button-spinner",size:void 0}),"string"==typeof O&&O,"string"!=typeof O&&B.map((function(e){return B.length>1&&"string"==typeof e||p?r.createElement("span",{key:"1_".concat(e)},e):e})),p&&r.createElement("i",{className:"icon-chevron-down"}))})))}}]);