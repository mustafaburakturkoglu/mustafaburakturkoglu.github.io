(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[97],{1852:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>P});t(37029),t(80061),t(88982);var r=t(2784),a=t(4517),s=t(13980),i=t.n(s),o=t(19545),c=t(45728),l=(t(66496),t(10746),t(84879),t(17305),t(85417),t(65389),t(74476),t(73160),t(56666)),u=t(59740);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.isEnabled,t=void 0===n||n,a=(0,u.Z)(e,["isEnabled"]),s=(0,r.useContext)(c.xI),i=s.intercom,l=s.intercom_secure_emailonly,d=(0,o.Z)(),m=d.isDev,h=(0,r.useContext)(c.St),v=h.id,f=h.name,g=h.email,_=h.intercom_hash,b=h._id,y=h.user,w=void 0===y?{}:y,D=h.intercom,x=(D=void 0===D?{}:D).intercom_hash,B=(0,r.useMemo)((function(){return p(p({app_id:m?"wxdunptb":i,email:g||(null==w?void 0:w.email),name:f||(null==w?void 0:w.adminName),user_hash:_||x},l?{}:{user_id:v||b}),a)}),[m,i,g,null==w?void 0:w.email,null==w?void 0:w.adminName,f,_,x,l,v,b,a]);return(0,r.useEffect)((function(){if(t&&B.app_id){window.intercomSettings=B;var e=document.createElement("script");e.onload=function(){"function"==typeof window.Intercom&&(window.Intercom("reattach_activator"),window.Intercom("update",B))},e.type="module",e.defer=!0,e.src="https://widget.intercom.io/widget/".concat(B.app_id),document.head.prepend(e)}}),[B.app_id]),function(){"function"==typeof window.Intercom&&(window.Intercom("boot",p(p({},B),{},{hide_default_launcher:!1})),window.Intercom("show"))}};var h=t(96253),v=t(42134),f=t(82805),g=function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))},_=function(e){var n=e.baseUrl,t=e.healthCheck,a=void 0===t?{}:t,s=e.planTrial,i=(0,v.Z)(s,"healthCheck")&&(null==a?void 0:a.provider)?"".concat("/"===n?"":n,"/api/health-check"):null,o=(0,h.ZP)(i,g,{refreshInterval:6e4}),c=o.data;return!o.error&&void 0!==c&&!c.healthy&&!c.error&&r.createElement(f.Z,{"data-testid":"health-check",icon:"icon-warning"},"We’re currently having some issues with our infrastructure. Please check back soon to see if this has been resolved. ",c.url&&r.createElement("a",{"data-testid":"health-url",href:c.url},"Learn more"))};_.propTypes={baseUrl:i().string.isRequired,healthCheck:i().object,planTrial:i().string.isRequired};const b=r.memo(_);var y=function(e){return e.isActive?null:r.createElement(f.Z,{"data-testid":"inactive-banner",icon:"icon-warning"},"This site is only viewable by admins.",r.createElement("a",{href:"/dash?to=plans"},"Launch it to make it public."))};y.propTypes={isActive:i().bool};const w=y;var D=function(e){return e.isPreview?r.createElement(f.Z,{"data-testid":"suggested-edits-preview"},"You are previewing a suggested edit."):null};D.propTypes={isPreview:i().bool};const x=D;var B=function(e){return e.isStage?r.createElement(f.Z,{"data-testid":"staging-notif"},"This is your staging environment."):null};B.propTypes={isStage:i().bool};const j=B;function E(e){var n=e.isDetachedProductionSite,t=(0,o.Z)(),s=t.isProd,i=t.isPlayground,l=(0,r.useContext)(c.cr),u=(0,r.useContext)(c.xI),d=u.is_active,p=(0,a.TH)().pathname,h=p.includes("/preview")&&p.includes("/suggested-edits/"),v=u.parent?u.parent.flags.staging:u.flags.staging,f=(0,r.useContext)(c.St).is_god;return m({isEnabled:!s||!f}),r.createElement("footer",{className:"AppFooter"},r.createElement(b,{baseUrl:l,healthCheck:u.healthCheck,planTrial:u.planTrial}),!i&&r.createElement(r.Fragment,null,r.createElement(w,{isActive:d}),r.createElement(j,{isStage:!n&&v})),r.createElement(x,{isPreview:h}))}E.propTypes={isDetachedProductionSite:i().bool};const P=E},42134:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});t(73160);var r=t(66678),a=t.n(r);const s=function(e,n){var t,r={free:{name:"Inactive Project",members:0,is_active:!0,cost:0,createdAt:new Date("January 1, 2010"),endDate:void 0,versions:1,api_access:!0,custom_domain:!1,custom_pages:!1,whitelabel:!1,errors:!1,password:!1,glossary:!1,landing_page:!1,usability:!1,stylesheet:!1,javascript:!1,html:!1,extra_html:!1,user_analytics:!1,doc_metrics:!1,pages:!1,reference:!0,guides:!1,admins:!1,jwt:!0},startup:{name:"Startup",members:10,is_active:!0,cost:59,createdAt:new Date("January 1, 2010"),endDate:new Date("August 28, 2018"),versions:1e4,api_access:!0,custom_domain:!0,custom_pages:!0,whitelabel:!1,errors:!1,password:!0,glossary:!0,landing_page:!0,usability:!0,stylesheet:!0,javascript:!1,html:!0,extra_html:!1,user_analytics:!1,doc_metrics:!0,variables:!0,jwt:!0,pages:!0,reference:!0,guides:!0,admins:!0},business:{name:"Business",is_active:!0,members:1e3,cost:199,createdAt:new Date("January 1, 2010"),endDate:new Date("August 28, 2018"),versions:1e4,api_access:!0,custom_domain:!0,custom_pages:!0,whitelabel:!0,errors:!0,password:!0,glossary:!0,landing_page:!0,usability:!0,stylesheet:!0,javascript:!0,html:!0,extra_html:!0,user_analytics:!0,doc_metrics:!0,variables:!0,jwt:!0,pages:!0,reference:!0,guides:!0,admins:!0,healthCheck:!0}};return r.freelaunch=a()(r.free),r.freelaunch.cost=0,r.freelaunch.stylesheet=!1,r.freelaunch.createdAt=new Date("May 4, 2020"),r.freelaunch.endDate=void 0,r.freelaunch.members=5,r.freelaunch.admins=!0,r.freelaunch.versions=3,r.freelaunch.name="Free",r.startup2018=a()(r.startup),r.startup2018.cost=99,r.startup2018.stylesheet=!1,r.startup2018.createdAt=new Date("August 28, 2018"),r.startup2018.endDate=void 0,r.business2018=a()(r.business),r.business2018.cost=399,r.business2018.javascript=!1,r.business2018.createdAt=new Date("August 28, 2018"),r.business2018.endDate=void 0,r.enterprise=a()(r.business),r.enterprise.cost=0,r.enterprise.members=1e4,r.enterprise.javascript=!0,r.enterprise.pdf=!0,r.enterprise.name="Enterprise",r.enterprise.createdAt=new Date("January 1, 2010"),r.enterprise.endDate=void 0,r.opensource=a()(r.startup),r.opensource.name="Open Source",r.opensource.is_active=!0,r.opensource.password=!1,r.opensource.custom_domain=!1,r.opensource.cost=0,r.opensource.createdAt=new Date("January 1, 2010"),r.opensource.endDate=void 0,n?null==r||null===(t=r[e])||void 0===t?void 0:t[n]:e?null==r?void 0:r[e]:r}},82805:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});var r=t(7896),a=t(96234),s=t(59740),i=t(2784),o=t(13980),c=t.n(o),l=t(22849);const u={Banner:"Banner2qY-Hhfqm_Gx",Banner_md:"Banner_md3gfmP6WvLxyy",Banner_sm:"Banner_smUPcJRlth4_Dl",Banner_xs:"Banner_xs1V3kPVsh40hS",Banner_secondary:"Banner_secondary1reFai47T0j4",Banner_primary:"Banner_primary2XsRmFJh0WNk",Banner_warn:"Banner_warn2mXPeLXtaCnJ",Banner_alert:"Banner_alert28druE7Pw9n0",Banner_fixed:"Banner_fixeda1mFpjcc1TJ6",Banner_dismissible:"Banner_dismissible3EORPSrPvj-V","Banner-Dismiss":"Banner-Dismiss7HAnthajjRfa"};var d=function(e){var n=e.children,t=e.className,o=e.dismissible,c=void 0!==o&&o,d=e.icon,p=void 0===d?"icon-alert-circle":d,m=e.isFixed,h=void 0===m||m,v=e.kind,f=void 0===v?"secondary":v,g=e.size,_=void 0===g?"sm":g,b=(0,s.Z)(e,["children","className","dismissible","icon","isFixed","kind","size"]),y=(0,i.useState)(!1),w=(0,a.Z)(y,2),D=w[0],x=w[1],B=(0,i.useCallback)((function(){c&&x(!0)}),[c]),j=(0,i.useCallback)((function(e){c&&"Enter"===e.key&&B()}),[B,c]);return D?null:i.createElement("div",(0,r.Z)({},b,{className:(0,l.ZP)(t,u.Banner,u["Banner_".concat(f)],u["Banner_".concat(_)],h&&u.Banner_fixed,c&&u.Banner_dismissible)}),p&&i.createElement("i",{className:p}),n,c&&i.createElement("i",{className:(0,l.ZP)(u["Banner-Dismiss"],"icon-x-circle"),onClick:B,onKeyPress:j,role:"button",tabIndex:"0"}))};d.propTypes={children:c().node.isRequired,dismissible:c().bool,icon:c().string,isFixed:c().bool,kind:c().oneOf(["primary","secondary","alert","warn"]),size:c().oneOf(["xs","sm","md"])};const p=d},22849:(e,n,t)=>{"use strict";t.d(n,{xh:()=>h,ZP:()=>v});var r=t(68630),a=t.n(r),s=t(42348),i=t.n(s),o=function(){return o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},o.apply(this,arguments)},c=function(e,n,t){if(t||2===arguments.length)for(var r,a=0,s=n.length;a<s;a++)!r&&a in n||(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return e.concat(r||Array.prototype.slice.call(n))},l=["-","_"],u=function(e){return i()(e.map((function(e){return"string"==typeof e?null==e?void 0:e.split(/[\s,.]/g):e})))},d=function(e,n){return e&&n?"&"===e[0]?e.replace("&",n):l.includes(e[0])&&!e.includes("-scss")?"".concat(n).concat(e):e:e},p=function(e){return a()(e)};function m(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];if(!e&&!n.length)return"";var r=p(e)?e:{},a=p(e)?n:c([e],n,!0),s=(r||{}).bem,o=void 0===s?"":s,l=i()(a),m=u(l);return m.filter((function(e){return"string"==typeof e&&e})).map((function(e){return e=d(e,o),r&&r[e]&&(e=r[e]),e})).join(" ")}function h(e){var n=e||{},t=n.bem,r=void 0===t?"":t,a=n.classes,s=void 0===a?{}:a,i=n.scope,l=void 0===i?{}:i,u=o(o({},s),l);return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=m.apply(void 0,c([o({bem:r},u)],e,!1));return t||(null==u?void 0:u[r])||r}}const v=m},34963:e=>{e.exports=function(e,n){for(var t=-1,r=null==e?0:e.length,a=0,s=[];++t<r;){var i=e[t];n(i,t,e)&&(s[a++]=i)}return s}},62488:e=>{e.exports=function(e,n){for(var t=-1,r=n.length,a=e.length;++t<r;)e[a+t]=n[t];return e}},21078:(e,n,t)=>{var r=t(62488),a=t(37285);e.exports=function e(n,t,s,i,o){var c=-1,l=n.length;for(s||(s=a),o||(o=[]);++c<l;){var u=n[c];t>0&&s(u)?t>1?e(u,t-1,s,i,o):r(o,u):i||(o[o.length]=u)}return o}},37285:(e,n,t)=>{var r=t(62705),a=t(35694),s=t(1469),i=r?r.isConcatSpreadable:void 0;e.exports=function(e){return s(e)||a(e)||!!(i&&e&&e[i])}},66678:(e,n,t)=>{var r=t(85990);e.exports=function(e){return r(e,4)}},42348:(e,n,t)=>{var r=t(21078);e.exports=function(e){return(null==e?0:e.length)?r(e,Infinity):[]}}}]);