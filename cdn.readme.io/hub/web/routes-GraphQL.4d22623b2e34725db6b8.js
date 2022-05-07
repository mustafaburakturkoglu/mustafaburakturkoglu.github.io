"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[929],{17525:(e,t,r)=>{r.r(t),r.d(t,{default:()=>O});var n=r(2784),a=r(45728),o=r(7896),c=(r(73160),r(96234)),i=r(59740),l=r(50550),s=r(69777),u=r(34885),p=r(56156),f=r(23263),y=r(13980),d=r.n(y),h=r(48830),g=r(68281);const m="GraphQLPlayground35UpugpN2Rzk";var v=function(e){var t=e.docExplorerOpen,r=e.editorTheme,a=e.url,y=(0,i.Z)(e,["docExplorerOpen","editorTheme","url"]),d=(0,f.n)({url:a}),v=(0,n.useState)(null),b=(0,c.Z)(v,2),O=b[0],E=b[1],x=(0,n.useState)("{\n\n}"),j=(0,c.Z)(x,2),L=j[0],w=j[1];(0,n.useEffect)((function(){var e=document.querySelectorAll("#secondary-editor-title div");e[0].classList.add("active"),e.forEach((function(t){t.addEventListener("click",(function(t){e.forEach((function(e){return e.classList.remove("active")})),t.target.classList.add("active")}))}))}),[]),(0,n.useEffect)((function(){var e;(e={query:(0,u.K)()},fetch(a,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){try{return JSON.parse(e)}catch(t){return"AbortError"===t.name?t:e}}))).then((function(e){E((0,p.Z)(e.data))})).catch((function(e){console.error(e)}))}),[a]);var P=function(e){return w(e)};return n.createElement(h.Z,(0,o.Z)({className:m,gap:"0",justify:"start"},y),n.createElement(l.ZP,{docExplorerOpen:t,editorTheme:r,fetcher:d,headers:"{\n\n}",onEditQuery:P,query:L,schema:O}),n.createElement(s.ZP,{arrowClosed:n.createElement("span",{className:"icon icon-chevron-rightward"}),arrowOpen:n.createElement("span",{className:"icon icon-chevron-down"}),checkboxChecked:n.createElement(g.Z,{checked:!0,type:"checkbox"}),checkboxUnchecked:n.createElement(g.Z,{type:"checkbox"}),colors:{atom:"var(--GraphQL-syntax-atom)",attribute:"var(--GraphQL-syntax-attribute)",builtin:"var(--GraphQL-syntax-builtin)",def:"var(--GraphQL-syntax-def)",keyword:"var(--GraphQL-syntax-keyword)",number:"var(--GraphQL-syntax-number)",property:"var(--GraphQL-syntax-property)",qualifier:"var(--GraphQL-syntax-qualifier)",string2:"var(--GraphQL-syntax-string)",string:"var(--GraphQL-syntax-string)",variable:"var(--GraphQL-syntax-variable)"},explorerIsOpen:t,onEdit:P,query:L,schema:O,width:"200px"}))};v.propTypes={docExplorerOpen:d().bool,editorTheme:d().string,query:d().string,url:d().string.isRequired},v.defaultProps={docExplorerOpen:!0,editorTheme:"material-palenight"};const b=v;function O(){var e=(0,n.useContext)(a.xI);return n.createElement("main",null,n.createElement(b,{url:e.graphqlSchema}))}},68281:(e,t,r)=>{r.d(t,{Z:()=>f});r(66496),r(10746),r(84879),r(17305),r(85417),r(65389),r(74476);var n=r(7896),a=r(56666),o=r(2784),c=r(13980),i=r.n(c),l=r(22849);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=(0,o.useRef)(),r=e.children,a=e.className,c=e.hasTitle,i=void 0===c||c,s=e.isIndeterminate,p=void 0!==s&&s,f=e.label,y=e.size,d=e.style,h=e.type,g=(0,l.ZP)("Toggle","Toggle_".concat(h),"toggle"===h&&"Toggle_toggle_".concat(y),a);return(0,o.useEffect)((function(){"checkbox"===h&&(t.current.indeterminate=p)}),[p,h]),o.createElement("label",{className:g,style:d},o.createElement("input",(0,n.Z)({ref:t},u(u({},e),{},{children:null,style:null}),{className:"Toggle-input",type:"toggle"===e.type?"checkbox":e.type})),o.createElement("div",{className:"Toggle-display"},o.createElement("i",{className:"Toggle-display-icon icon-check-heavy"}),o.createElement("i",{className:"Toggle-display-icon icon-minus-heavy"})),(f||r)&&o.createElement("span",(0,n.Z)({className:"Toggle-label"},i?{title:f}:{}),f||r))};p.propTypes={className:i().string,hasTitle:i().bool,isIndeterminate:i().bool,label:i().string,size:i().oneOf(["md","lg"]),style:i().any,type:i().oneOf(["checkbox","radio","toggle"]),value:i().any},p.defaultProps={size:"md",type:"checkbox"};const f=o.memo(p)},22849:(e,t,r)=>{r.d(t,{xh:()=>d,ZP:()=>h});var n=r(68630),a=r.n(n),o=r(42348),c=r.n(o),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},l=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},s=["-","_"],u=function(e){return c()(e.map((function(e){return"string"==typeof e?null==e?void 0:e.split(/[\s,.]/g):e})))},p=function(e,t){return e&&t?"&"===e[0]?e.replace("&",t):s.includes(e[0])&&!e.includes("-scss")?"".concat(t).concat(e):e:e},f=function(e){return a()(e)};function y(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(!e&&!t.length)return"";var n=f(e)?e:{},a=f(e)?t:l([e],t,!0),o=(n||{}).bem,i=void 0===o?"":o,s=c()(a),y=u(s);return y.filter((function(e){return"string"==typeof e&&e})).map((function(e){return e=p(e,i),n&&n[e]&&(e=n[e]),e})).join(" ")}function d(e){var t=e||{},r=t.bem,n=void 0===r?"":r,a=t.classes,o=void 0===a?{}:a,c=t.scope,s=void 0===c?{}:c,u=i(i({},o),s);return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=y.apply(void 0,l([i({bem:n},u)],e,!1));return r||(null==u?void 0:u[n])||n}}const h=y},48830:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(2784),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};const c=(0,n.memo)((0,n.forwardRef)((function(e,t){var r,c=e.align,i=void 0===c?"start":c,l=e.className,s=e.gap,u=void 0===s?"md":s,p=e.justify,f=void 0===p?"between":p,y=e.layout,d=void 0===y?"row":y,h=e.style,g=e.tag,m=void 0===g?"div":g,v=o(e,["align","className","gap","justify","layout","style","tag"]);return n.createElement(m,a({},v,{ref:t,align:i,className:"Flex Flex_".concat(d," ").concat(l||""),justify:f,style:a({"--flex-gap":(r=u,Number(r)?"".concat(r,"px"):"string"!=typeof r||r.match(/^\d+/)?r:"var(--".concat(r,")"))},h)}),v.children)})))}}]);