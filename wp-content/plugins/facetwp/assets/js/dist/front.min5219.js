!function(){"use strict";var e;window.fUtil=(()=>{class e{constructor(e){if("string"==typeof e||e instanceof String)if(""===(e=e.replace(":selected",":checked")))this.nodes=[];else if(this.isValidSelector(e))this.nodes=Array.from(document.querySelectorAll(e));else{var a=document.createElement("template");a.innerHTML=e,this.nodes=[a.content]}else Array.isArray(e)?this.nodes=e:"object"==typeof e&&e.nodeName?this.nodes=[e]:"function"==typeof e?this.ready(e):e===window?this.nodes=[window]:this.nodes=[document];t.each(t.fn,((e,t)=>{this[t]=e}))}static isset(e){return void 0!==e}static post(e,a,s){(s=Object.assign({},{dataType:"json",contentType:"application/json",headers:{},done:()=>{},fail:()=>{}},s)).headers["Content-Type"]=s.contentType,a="application/json"===s.contentType?JSON.stringify(a):t.toEncoded(a),fetch(e,{method:"POST",headers:s.headers,body:a}).then((e=>e[s.dataType]())).then((e=>s.done(e))).catch((e=>s.fail(e)))}static toEncoded(e,a,s){s=s||[],a=a||"";return Array.isArray(e)?e.length?e.forEach((e=>{t.toEncoded(e,a+"[]",s)})):t.toEncoded("",a,s):"object"==typeof e&&null!==e?Object.keys(e).forEach((n=>{var o=a?a+"["+n+"]":n;t.toEncoded(e[n],o,s)})):s.push(encodeURIComponent(a)+"="+encodeURIComponent(e)),s.join("&")}static forEach(e,t){return"object"==typeof e&&null!==e&&(Array.isArray(e)?e.forEach(((e,a)=>t.bind(e)(e,a))):Object.keys(e).forEach((a=>{var s=e[a];t.bind(s)(s,a)}))),e}isValidSelector(e){try{document.createDocumentFragment().querySelector(e)}catch(e){return!1}return!0}clone(){return t(this.nodes)}len(){return this.nodes.length}each(e){return this.nodes.forEach(((t,a)=>{e.bind(t)(t,a)})),this}ready(e){if("function"==typeof e)return"complete"===document.readyState?e():void document.addEventListener("DOMContentLoaded",e,!1)}addClass(e){return this.each((t=>t.classList.add(e))),this}removeClass(e){return this.each((t=>t.classList.remove(e))),this}hasClass(e){return t.isset(this.nodes.find((t=>t.classList.contains(e))))}toggleClass(e){return this.each((t=>t.classList.toggle(e))),this}is(e){for(let t=0;t<this.len();t++)if(this.nodes[t].matches(e))return!0;return!1}find(e){e=e.replace(":selected",":checked");let t=[],a=this.clone();return a.each((a=>{t=t.concat(Array.from(a.querySelectorAll(e)))})),a.nodes=t,a}first(){let e=this.clone();return e.len()&&(e.nodes=this.nodes.slice(0,1)),e}last(){let e=this.clone();return e.len()&&(e.nodes=this.nodes.slice(-1)),e}prev(e){let a=[],s=this.clone();return s.each((s=>{let n=s.previousElementSibling;for(;n&&t.isset(e)&&!n.matches(e);)n=n.previousElementSibling;n&&a.push(n)})),s.nodes=a,s}next(e){let a=[],s=this.clone();return s.each((s=>{let n=s.nextElementSibling;for(;n&&t.isset(e)&&!n.matches(e);)n=n.nextElementSibling;n&&a.push(n)})),s.nodes=a,s}append(e){return this.each((t=>t.insertAdjacentHTML("beforeend",e))),this}parents(e){let t=[],a=this.clone();return a.each((a=>{let s=a.parentNode;for(;s&&s!==document;)s.matches(e)&&t.push(s),s=s.parentNode})),a.nodes=[...new Set(t)],a}closest(e){let t=[],a=this.clone();return a.each((a=>{let s=a.closest(e);s&&t.push(s)})),a.nodes=t,a}remove(){return this.each((e=>e.remove())),this}on(e,a,s){if(t.isset(a)){if(!t.isset(s))s=a,a=null;var n=e=>{if(null===a||e.target.matches(a))s.bind(e.target)(e);else if(e.target.closest(a)){var t=e.target.closest(a);s.bind(t)(e)}};return this.each((o=>{t.isset(o._id)||(o._id=t.event.count,t.event.store[t.event.count]=o,t.event.count++);var c=o._id;n._str=s.toString(),t.isset(t.event.map[c])||(t.event.map[c]={}),t.isset(t.event.map[c][e])||(t.event.map[c][e]={}),t.isset(t.event.map[c][e][a])||(t.event.map[c][e][a]=[]);let i=t.event.map[c][e][a].push(n);o.addEventListener(e,t.event.map[c][e][a][i-1])})),this}}off(e,a,s){if(!t.isset(s))s=a,a=null;return this.each((n=>{var o=n._id;t.each(t.event.map[o],((c,i)=>{t.each(c,((c,r)=>{t.each(c,((c,l)=>{e&&i!==e||a&&r!==a||s&&c._str!==s.toString()||(n.removeEventListener(i,t.event.map[o][i][r][l]),delete t.event.map[o][i][r][l])}))}))}))})),this}trigger(e,t){return this.each((a=>a.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0})))),this}attr(e,a){return t.isset(a)?(this.each((t=>t.setAttribute(e,a))),this):this.len()?this.nodes[0].getAttribute(e):null}data(e,a){return t.isset(a)?(this.each((t=>t._fdata[e]=a)),this):this.len()?this.nodes[0]._fdata[e]:null}html(e){return t.isset(e)?(this.each((t=>t.innerHTML=e)),this):this.len()?this.nodes[0].innerHTML:null}text(e){return t.isset(e)?(this.each((t=>t.textContent=e)),this):this.len()?this.nodes[0].textContent:null}val(e){if(t.isset(e))return this.each((t=>t.value=e)),this;if(this.len()){var a=this.nodes[0];return"select"===a.nodeName.toLowerCase()&&a.multiple?[...a.options].filter((e=>e.selected)).map((e=>e.value)):a.value}return null}}var t=t=>new e(t);return t.fn={},t.post=e.post,t.isset=e.isset,t.each=e.forEach,t.toEncoded=e.toEncoded,t.event={map:{},store:[],count:0},t})(),(e=window).FWP=e.FWP||{},e.FWP.hooks=e.FWP.hooks||new function(){function e(e,t,a,s){var n,c,i;if(o[e][t])if(a)if(n=o[e][t],s)for(i=n.length;i--;)(c=n[i]).callback===a&&c.context===s&&n.splice(i,1);else for(i=n.length;i--;)n[i].callback===a&&n.splice(i,1);else o[e][t]=[]}function t(e,t,a,s,n){var c={callback:a,priority:s,context:n},i=o[e][t];i?(i.push(c),i=function(e){for(var t,a,s,n=1,o=e.length;n<o;n++){for(t=e[n],a=n;(s=e[a-1])&&s.priority>t.priority;)e[a]=e[a-1],--a;e[a]=t}return e}(i)):i=[c],o[e][t]=i}function a(e,t,a){var s,n,c=o[e][t];if(!c)return"filters"===e&&a[0];if(n=c.length,"filters"===e)for(s=0;s<n;s++)a[0]=c[s].callback.apply(c[s].context,a);else for(s=0;s<n;s++)c[s].callback.apply(c[s].context,a);return"filters"!==e||a[0]}var s=Array.prototype.slice,n={removeFilter:function(t,a){return"string"==typeof t&&e("filters",t,a),n},applyFilters:function(){var e=s.call(arguments),t=e.shift();return"string"==typeof t?a("filters",t,e):n},addFilter:function(e,a,s,o){return"string"==typeof e&&"function"==typeof a&&t("filters",e,a,s=parseInt(s||10,10),o),n},removeAction:function(t,a){return"string"==typeof t&&e("actions",t,a),n},doAction:function(){var e=s.call(arguments),t=e.shift();return"string"==typeof t&&a("actions",t,e),n},addAction:function(e,a,s,o){return"string"==typeof e&&"function"==typeof a&&t("actions",e,a,s=parseInt(s||10,10),o),n}},o={actions:{},filters:{}};return n},window.FWP=(e=>{class t{constructor(){this.import(),this.bindEvents()}import(){"undefined"!=typeof FWP&&e.each(FWP,((e,t)=>this[t]=e))}init(){var t=this;if(this.setDefaults(),0<e(".facetwp-sort").len()&&(t.extras.sort="default"),0<e(".facetwp-pager").len()&&(t.extras.pager=!0),0<e(".facetwp-per-page").len()&&(t.extras.per_page="default"),0<e(".facetwp-counts").len()&&(t.extras.counts=!0),0<e(".facetwp-selections").len()&&(t.extras.selections=!0),!(e(".facetwp-template").len()>0)){var a=t.helper.detectLoop(document.body);if(!a)return;e(a).addClass("facetwp-template")}var s=e(".facetwp-template").first();t.template=s.attr("data-name")?s.attr("data-name"):"wp",s.find(".facetwp-facet").len()>0&&console.error('Facets should not be inside the "facetwp-template" container'),t.hooks.doAction("facetwp/ready"),t.extras.selections&&t.hooks.addAction("facetwp/loaded",(()=>{var a="";e.each(t.facets,((s,n)=>{if(s.length<1||!e.isset(t.settings.labels[n])||"pager"==t.facet_type[n])return!0;var o=s,c=e(".facetwp-facet-"+n),i=c.attr("data-ui")||c.attr("data-type");(o=t.hooks.applyFilters("facetwp/selections/"+i,o,{el:c,selected_values:o})).length&&("string"==typeof o?o=[{value:"",label:o}]:e.isset(o[0].label)||(o=[{value:"",label:o[0]}]));var r="";e.each(o,(e=>{r+='<span class="facetwp-selection-value" data-value="'+e.value+'">'+t.helper.escapeHtml(e.label)+"</span>"})),a+='<li data-facet="'+n+'"><span class="facetwp-selection-label">'+t.settings.labels[n]+":</span> "+r+"</li>"})),""!==a&&(a="<ul>"+a+"</ul>"),e(".facetwp-selections").html(a)})),t.refresh()}setDefaults(){let t={facets:{},template:null,settings:{},is_reset:!1,is_refresh:!1,is_bfcache:!1,is_hash_click:!1,is_load_more:!1,auto_refresh:!0,soft_refresh:!1,frozen_facets:{},active_facet:null,facet_type:{},loaded:!1,extras:{},paged:1};for(var a in t)e.isset(this[a])||(this[a]=t[a])}refresh(){FWP.is_refresh=!0,FWP.toggleOverlay("on"),FWP.is_reset||FWP.parseFacets(),FWP.loaded||FWP.loadFromHash(),e().trigger("facetwp-refresh"),!FWP.loaded||FWP.is_popstate||FWP.is_load_more||FWP.setHash(),FWP.loaded||FWP.is_bfcache||!e.isset(FWP_JSON.preload_data)?FWP.fetchData():FWP.render(FWP_JSON.preload_data),e.each(FWP.frozen_facets,((e,t)=>{"hard"!==e&&delete FWP.frozen_facets[t]})),FWP.paged=1,FWP.soft_refresh=!1,FWP.is_refresh=!1,FWP.is_reset=!1}autoload(){FWP.auto_refresh&&!FWP.is_refresh&&FWP.refresh()}parseFacets(){FWP.facets={},e(".facetwp-facet").each((function(){var t=e(this),a=t.attr("data-name"),s=t.attr("data-type"),n=t.hasClass("facetwp-ignore");null!==t.attr("data-ui")&&(s=t.attr("data-ui")),FWP.facet_type[a]=s,n||FWP.hooks.doAction("facetwp/refresh/"+s,t,a)}))}buildQueryString(){var t="",a=[],s=window.location.search.replace("?","").split("&");e.each(s,(e=>{0!==e.split("=")[0].indexOf(FWP_JSON.prefix)&&a.push(e)})),a=a.join("&");var n=Object.assign({},FWP.facets);return 1<FWP.paged&&(n.paged=FWP.paged),FWP.extras.per_page&&"default"!==FWP.extras.per_page&&(n.per_page=FWP.extras.per_page),FWP.extras.sort&&"default"!==FWP.extras.sort&&(n.sort=FWP.extras.sort),n=FWP.helper.serialize(n,FWP_JSON.prefix),""!==a&&(t+=a),""!==n&&(t+=(""!==a?"&":"")+n),t}setHash(){var e=FWP.buildQueryString();""!==e&&(e="?"+e),history.pushState&&history.pushState(null,null,window.location.pathname+e),FWP_HTTP.get={},window.location.search.replace("?","").split("&").forEach((e=>{var t=e.split("=");""!=t[0]&&(FWP_HTTP.get[t[0]]=t[1])}))}loadFromHash(){var t=[],a=window.location.search.replace("?","").split("&");e.each(a,(e=>{0===e.split("=")[0].indexOf(FWP_JSON.prefix)&&t.push(e.replace(FWP_JSON.prefix,""))})),t=t.join("&"),e.each(FWP.facets,((e,t)=>{FWP.facets[t]=[]})),FWP.paged=1,FWP.extras.sort="default",""!==t&&(t=t.split("&"),e.each(t,(t=>{var a=t.split("=")[0],s=t.split("=")[1];if("paged"===a)FWP.paged=s;else if("per_page"===a||"sort"===a)FWP.extras[a]=s;else if(""!==s){var n=e.isset(FWP.facet_type[a])?FWP.facet_type[a]:"";FWP.facets[a]="search"===n||"autocomplete"===n?decodeURIComponent(s):decodeURIComponent(s).split(",")}})))}buildPostData(){return{facets:FWP.facets,frozen_facets:FWP.frozen_facets,http_params:FWP_HTTP,template:FWP.template,extras:FWP.extras,soft_refresh:FWP.soft_refresh?1:0,is_bfcache:FWP.is_bfcache?1:0,first_load:FWP.loaded?0:1,paged:FWP.paged}}fetchData(){var t="wp"===FWP.template?document.URL:FWP_JSON.ajaxurl,a={action:"facetwp_refresh",data:FWP.buildPostData()},s={dataType:"text",done:t=>{try{var a=JSON.parse(t);FWP.render(a)}catch(n){var s=t.indexOf('{"facets');if(-1<s){a=JSON.parse(t.substr(s));FWP.render(a)}else e(".facetwp-template").text("FacetWP was unable to auto-detect the post listing"),console.log(t)}},fail:e=>{console.log(e)}};s=FWP.hooks.applyFilters("facetwp/ajax_settings",s),e.post(t,a,s)}render(t){if("wp"!==FWP.template&&""!==t.template||FWP.loaded||FWP.is_bfcache){o=t.template;if("wp"===FWP.template){var a=e(t.template),s=a.find(".facetwp-template");if(s.len()<1){var n=FWP.helper.detectLoop(a.nodes[0]);n&&(s=e(n).addClass("facetwp-template"))}if(s.len()>0)o=s.html();else o=FWP_JSON.no_results_text}}else var o=!1;!1!==o&&(FWP.hooks.applyFilters("facetwp/template_html",!1,{response:t,html:o})||e(".facetwp-template").html(o)),e.each(t.facets,((t,a)=>{e(".facetwp-facet-"+a).html(t)})),e.isset(t.counts)&&e(".facetwp-counts").html(t.counts),e.isset(t.pager)&&e(".facetwp-pager").html(t.pager),e.isset(t.per_page)&&(e(".facetwp-per-page").html(t.per_page),"default"!==FWP.extras.per_page&&e(".facetwp-per-page-select").val(FWP.extras.per_page)),e.isset(t.sort)&&(e(".facetwp-sort").html(t.sort),e(".facetwp-sort-select").val(FWP.extras.sort)),e.each(t.settings,((e,t)=>{FWP.settings[t]=e})),"function"==typeof WPPlaylistView&&e(".facetwp-template .wp-playlist").each((e=>new WPPlaylistView({el:e}))),e().trigger("facetwp-loaded"),FWP.hooks.doAction("facetwp/loaded"),FWP.toggleOverlay("off"),FWP.active_facet=null,FWP.is_bfcache=!0,FWP.loaded=!0}reset(t){FWP.parseFacets();var a={};"string"==typeof t?a[t]="":Array.isArray(t)?e.each(t,(e=>{a[e]=""})):"object"==typeof t&&t&&(a=t);var s=Object.keys(a).length<1;e.each(FWP.facets,((t,n)=>{var o=e.isset(a[n]),c=Array.isArray(t)?t:[t];if(o&&-1<c.indexOf(a[n])){var i=c.indexOf(a[n]);c.splice(i,1),FWP.facets[n]=c}o&&(c.length<1||""===a[n])&&delete FWP.frozen_facets[n],(s||o&&""===a[n])&&(FWP.facets[n]=[])})),s&&(FWP.extras.sort="default",FWP.frozen_facets={}),FWP.hooks.doAction("facetwp/reset"),FWP.is_reset=!0,FWP.refresh()}toggleOverlay(t){var a="on"===t?"addClass":"removeClass";e(".facetwp-facet")[a]("is-loading")}bindEvents(){window.addEventListener("popstate",(()=>{FWP.is_bfcache&&(FWP.loaded=!1),!FWP.loaded&&!FWP.is_bfcache||FWP.is_refresh||FWP.is_hash_click||(FWP.is_popstate=!0,FWP.refresh(),FWP.is_popstate=!1),FWP.is_hash_click=!1})),e().on("click",'a[href^="#"]',(()=>{FWP.is_hash_click=!0})),e().on("click",".facetwp-selections .facetwp-selection-value",(function(){if(!FWP.is_refresh){var t=e(this).closest("li").attr("data-facet"),a=e(this).attr("data-value");if(""!=a){var s={};s[t]=a,FWP.reset(s)}else FWP.reset(t)}})),e().on("click",".facetwp-page[data-page]",(function(){e(".facetwp-page").removeClass("active"),e(this).addClass("active"),FWP.paged=e(this).attr("data-page"),FWP.soft_refresh=!0,FWP.refresh()}));var t="function"==typeof jQuery?jQuery:fUtil;t(document).on("change",".facetwp-per-page-select",(function(){FWP.extras.per_page=e(this).val(),FWP.soft_refresh=!0,FWP.autoload()})),t(document).on("change",".facetwp-sort-select",(function(){FWP.extras.sort=e(this).val(),FWP.soft_refresh=!0,FWP.autoload()})),t((()=>{this.init()}))}}return t.prototype.helper={getUrlVar:e=>{e=FWP_JSON.prefix+e;for(var t=window.location.search.replace("?","").split("&"),a=0;a<t.length;a++){var s=t[a].split("=");if(s[0]===e)return s[1]}return!1},debounce:(e,t)=>{var a;return function(...s){var n=e.bind(this,...s);clearTimeout(a),a=setTimeout(n,t)}},serialize:(t,a)=>{var s=[];a=e.isset(a)?a:"";for(var n in t)""!=t[n]&&s.push(a+encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return s.join("&")},escapeHtml:e=>{var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return e.replace(/[&<>"']/g,(e=>t[e])).trim()},detectLoop:e=>{for(var t=null,a=document.createNodeIterator(e,NodeFilter.SHOW_COMMENT,(()=>NodeFilter.FILTER_ACCEPT),!1);t=a.nextNode();)if(8===t.nodeType&&"fwp-loop"===t.nodeValue)return t.parentNode;return!1}},new t})(fUtil),function(e){function t(t){let a=e(t);return a.val()===a.attr("placeholder")?"":a.val()}FWP.logic=FWP.logic||{},e(".facetwp-facet").each((function(){this.addEventListener("click",(function(){var t=e(".facetwp-facet-"+e(this).attr("data-name"));1<t.len()&&(t.addClass("facetwp-ignore"),e(this).removeClass("facetwp-ignore")),FWP.active_facet=e(this)}),!0)})),FWP.hooks.addAction("facetwp/refresh/autocomplete",(function(e,t){var a=e.find(".facetwp-autocomplete").val()||"";FWP.facets[t]=a})),e().on("facetwp-loaded",(function(){e(".facetwp-autocomplete:not(.fcomplete-enabled)").each((function(){var t=this,a=e(t).closest(".facetwp-facet").attr("data-name"),s="wp"===FWP.template?document.URL:FWP_JSON.ajaxurl,n=FWP.settings[a];n.data=()=>e.post(s,{action:"facetwp_autocomplete_load",facet_name:a,query:t.value,data:FWP.buildPostData()},{done:e=>{this.fcomplete.render(e)}}),n.onSelect=()=>FWP.autoload(),fComplete(t,n)}))})),e().on("keyup",".facetwp-autocomplete",(function(e){13!==e.which||FWP.is_refresh||FWP.autoload()})),e().on("click",".facetwp-autocomplete-update",(function(){FWP.autoload()})),FWP.hooks.addAction("facetwp/refresh/checkboxes",(function(t,a){var s=[];t.find(".facetwp-checkbox.checked").each((function(){s.push(e(this).attr("data-value"))})),FWP.facets[a]=s})),FWP.hooks.addFilter("facetwp/selections/checkboxes",(function(t,a){var s=[];return e.each(a.selected_values,(function(t){var n=a.el.find('.facetwp-checkbox[data-value="'+t+'"]');if(n.len()){var o=e(n.html());o.find(".facetwp-counter").remove(),o.find(".facetwp-expand").remove(),s.push({value:t,label:o.text()})}})),s})),e().on("click",".facetwp-type-checkboxes .facetwp-expand",(function(t){var a=e(this).closest(".facetwp-checkbox").next(".facetwp-depth");a.toggleClass("visible");var s=a.hasClass("visible")?FWP_JSON.collapse:FWP_JSON.expand;e(this).html(s),t.stopImmediatePropagation()})),e().on("click",".facetwp-type-checkboxes .facetwp-checkbox:not(.disabled)",(function(){var t=e(this),a=!t.hasClass("checked"),s=t.closest(".facetwp-depth").len()>0;t.next().hasClass("facetwp-depth")&&t.next(".facetwp-depth").find(".facetwp-checkbox").removeClass("checked"),s&&t.parents(".facetwp-depth").each((function(){e(this).prev(".facetwp-checkbox").removeClass("checked")})),t.toggleClass("checked",a),FWP.autoload()})),e().on("click",".facetwp-type-checkboxes .facetwp-toggle",(function(){var t=e(this).closest(".facetwp-facet");t.find(".facetwp-toggle").toggleClass("facetwp-hidden"),t.find(".facetwp-overflow").toggleClass("facetwp-hidden")})),e().on("facetwp-loaded",(function(){e(".facetwp-type-checkboxes .facetwp-overflow").each((function(){var t=e(this).find(".facetwp-checkbox").len(),a=e(this).next(".facetwp-toggle");a.text(a.text().replace("{num}",t)),0<e(this).find(".facetwp-checkbox.checked").len()&&a.trigger("click")})),e(".facetwp-type-checkboxes").each((function(){var t=e(this),a=t.attr("data-name");Object.keys(FWP.settings).length<1||("yes"===FWP.settings[a].show_expanded&&t.find(".facetwp-depth").addClass("visible"),1>t.find(".facetwp-expand").len()&&(t.find(".facetwp-checkbox.checked").each((function(){e(this).parents(".facetwp-depth").addClass("visible")})),t.find(".facetwp-depth").each((function(){var t=e(this).hasClass("visible")?"collapse":"expand";e(this).prev(".facetwp-checkbox").append(' <span class="facetwp-expand">'+FWP_JSON[t]+"</span>")}))))}))})),FWP.hooks.addAction("facetwp/refresh/radio",(function(t,a){var s=[];t.find(".facetwp-radio.checked").each((function(){var t=e(this).attr("data-value");""!==t&&s.push(t)})),FWP.facets[a]=s})),FWP.hooks.addFilter("facetwp/selections/radio",(function(t,a){var s=[];return e.each(a.selected_values,(function(t){var n=a.el.find('.facetwp-radio[data-value="'+t+'"]');if(n.len()){var o=e(n.html());o.find(".facetwp-counter").remove(),s.push({value:t,label:o.text()})}})),s})),e().on("click",".facetwp-type-radio .facetwp-radio:not(.disabled)",(function(){var t=e(this).hasClass("checked");e(this).closest(".facetwp-facet").find(".facetwp-radio").removeClass("checked"),t||e(this).addClass("checked"),FWP.autoload()})),FWP.hooks.addAction("facetwp/refresh/date_range",(function(e,a){var s=e.find(".facetwp-date-min"),n=e.find(".facetwp-date-max"),o=s.len()?t(s.nodes[0]):"",c=n.len()?t(n.nodes[0]):"";FWP.facets[a]=""!==o||""!==c?[o,c]:[]})),FWP.hooks.addFilter("facetwp/selections/date_range",(function(e,t){var a=t.el,s=t.selected_values,n=a.attr("data-name"),o=FWP.settings[n].fields,c=[];if(""!==s[0]){let e=a.find(".facetwp-date-min").val();("start_date"===o||"both"===o&&""===s[1])&&(e+="..."),c.push(e)}if(""!==s[1]){let e=a.find(".facetwp-date-max").val();("end_date"===o||"both"===o&&""===s[0])&&(e="..."+e),c.push(e)}return c.length?"("+c.join("...")+")":""})),e().on("facetwp-loaded",(function(){var t=e(".facetwp-type-date_range .facetwp-date:not(.ready)");0!==t.len()&&t.each((function(){var t=e(this),a=t.closest(".facetwp-facet").attr("data-name"),s=FWP.settings[a],n={onChange:function(e){FWP.autoload()}};if(""!==s.locale&&(n.i18n=s.locale),""!==s.format&&(n.altFormat=s.format),"both"==s.fields){var o=t.hasClass("facetwp-date-min")?"min":"max";n.minDate=s.range[o].minDate,n.maxDate=s.range[o].maxDate}else n.minDate=s.range.minDate,n.maxDate=s.range.maxDate;n=FWP.hooks.applyFilters("facetwp/set_options/date_range",n,{facet_name:a,element:t}),t.addClass("ready"),new fDate(this,n)}))})),FWP.hooks.addAction("facetwp/refresh/dropdown",(function(e,t){var a=e.find(".facetwp-dropdown").val();FWP.facets[t]=a?[a]:[]})),FWP.hooks.addFilter("facetwp/selections/dropdown",(function(e,t){var a=t.el.find(".facetwp-dropdown");if(a.len()){var s=a.nodes[0];return s.options[s.selectedIndex].text.replace(/\(\d+\)$/,"")}return""})),("function"==typeof jQuery?jQuery:fUtil)(document).on("change",".facetwp-type-dropdown select",(function(){var t=e(this).closest(".facetwp-facet").attr("data-name");""!==e(this).val()&&(FWP.frozen_facets[t]="soft"),FWP.autoload()})),FWP.hooks.addAction("facetwp/refresh/fselect",(function(e,t){var a=e.find("select").val();null!==a&&""!==a||(a=[]),FWP.facets[t]=Array.isArray(a)?a:[a]})),FWP.hooks.addFilter("facetwp/selections/fselect",(function(t,a){var s=[];return e.each(a.selected_values,(e=>{var t=a.el.find('option[value="'+e+'"]');t.len()&&s.push({value:e,label:t.text()})})),s})),FWP.hooks.addAction("facetwp/loaded",(function(){if(null!==FWP.active_facet){var e=FWP.active_facet;if("fselect"==e.attr("data-type")){var t=e.find(".facetwp-dropdown").nodes[0];t.fselect.settings.multiple&&t.fselect.open()}}})),e().on("facetwp-loaded",(function(){e(".facetwp-type-fselect select:not(.fs-hidden)").each((function(){var t=e(this).closest(".facetwp-facet").attr("data-name"),a=FWP.settings[t];a.optionFormatter=function(e,t){var a=t.getAttribute("data-counter");return a?e+" ("+a+")":e};var s=FWP.hooks.applyFilters("facetwp/set_options/fselect",a,{facet_name:t});fSelect(this,s)}))})),e().on("fs:changed",(function(){FWP.autoload()})),e().on("fs:closed",(function(){FWP.active_facet=null})),FWP.hooks.addAction("facetwp/refresh/hierarchy",(function(t,a){var s=[];t.find(".facetwp-link.checked").each((function(){s.push(e(this).attr("data-value"))})),FWP.facets[a]=s})),FWP.hooks.addFilter("facetwp/selections/hierarchy",(function(e,t){var a=t.el.find(".facetwp-link.checked");return a.len()?a.text():""})),e().on("click",".facetwp-type-hierarchy .facetwp-link",(function(){e(this).closest(".facetwp-facet").find(".facetwp-link").removeClass("checked"),""!==e(this).attr("data-value")&&e(this).addClass("checked"),FWP.autoload()})),e().on("click",".facetwp-type-hierarchy .facetwp-toggle",(function(){var t=e(this).closest(".facetwp-facet");t.find(".facetwp-toggle").toggleClass("facetwp-hidden"),t.find(".facetwp-overflow").toggleClass("facetwp-hidden")})),FWP.hooks.addAction("facetwp/refresh/number_range",(function(e,t){var a=e.find(".facetwp-number-min").val()||"",s=e.find(".facetwp-number-max").val()||"";FWP.facets[t]=""!==a||""!==s?[a,s]:[]})),FWP.hooks.addFilter("facetwp/selections/number_range",(function(e,t){return t.selected_values[0]+" - "+t.selected_values[1]})),e().on("click",".facetwp-type-number_range .facetwp-submit",(function(){FWP.refresh()})),e().on("facetwp-loaded",(function(){var t=e(".facetwp-location");t.len()<1||(FWP.loaded||(window.FWP_MAP=window.FWP_MAP||{},FWP_MAP.sessionToken=new google.maps.places.AutocompleteSessionToken,FWP_MAP.autocompleteService=new google.maps.places.AutocompleteService,FWP_MAP.placesService=new google.maps.places.PlacesService(document.createElement("div")),e().on("input",".facetwp-location",FWP.helper.debounce((function(t){var a=e(t.target).val(),s=e(t.target).closest(".facetwp-facet");if(""==a||a.length<FWP_JSON.proximity.minLength)s.find(".location-results").addClass("facetwp-hidden");else{var n=FWP_JSON.proximity.autocomplete_options;n.sessionToken=FWP_MAP.sessionToken,n.input=a,FWP_MAP.autocompleteService.getPredictions(n,(function(e,t){if(t===google.maps.places.PlacesServiceStatus.OK){var a="";e.forEach((function(e,t){a+='<div class="location-result'+(0===t?" active":"")+'" data-id="'+e.place_id+'" data-index="'+t+'">',a+='<span class="result-main">'+e.structured_formatting.main_text+"</span> ",a+='<span class="result-secondary">'+e.structured_formatting.secondary_text+"</span>",a+='<span class="result-description facetwp-hidden">'+e.description+"</span>",a+="</div>"})),a+='<div class="location-attribution"><div class="powered-by-google"></div></div>',s.find(".location-results").html(a).removeClass("facetwp-hidden")}}))}}),FWP_JSON.proximity.queryDelay))),t.each((function(t,a){e(this).trigger("keyup")})))})),e().on("click",".location-result",(function(){var t=e(this).closest(".facetwp-facet"),a=e(this).attr("data-id"),s=e(this).find(".result-description").text();FWP_MAP.placesService.getDetails({placeId:a,fields:["geometry"]},(function(e,a){a===google.maps.places.PlacesServiceStatus.OK&&(t.find(".facetwp-lat").val(e.geometry.location.lat()),t.find(".facetwp-lng").val(e.geometry.location.lng()),FWP.autoload())})),e(".facetwp-location").val(s),e(".location-results").addClass("facetwp-hidden")})),e().on("click",".facetwp-type-proximity .locate-me",(function(t){var a=e(this),s=a.closest(".facetwp-facet"),n=s.find(".facetwp-location"),o=s.find(".facetwp-lat"),c=s.find(".facetwp-lng");if(a.hasClass("f-reset"))return o.val(""),c.val(""),n.val(""),void FWP.autoload();a.addClass("f-loading"),navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,i=e.coords.longitude;o.val(t),c.val(i);var r=new google.maps.Geocoder,l={lat:parseFloat(t),lng:parseFloat(i)};r.geocode({location:l},(function(e,t){t===google.maps.GeocoderStatus.OK?n.val(e[0].formatted_address):n.val("Your location"),a.addClass("f-reset"),FWP.autoload()})),a.removeClass("f-loading"),FWP.hooks.doAction("facetwp/geolocation/success",{facet:s,position:e})}),(function(e){a.removeClass("f-loading"),FWP.hooks.doAction("facetwp/geolocation/error",{facet:s,error:e})}))})),e().on("keyup",".facetwp-location",(function(t){var a=e(this).closest(".facetwp-facet"),s=""!==e(this).val()?"addClass":"removeClass";if(a.find(".locate-me")[s]("f-reset"),38===t.which||40===t.which||13===t.which)var n=parseInt(a.find(".location-result.active").attr("data-index")),o=parseInt(a.find(".location-result").last().attr("data-index"));if(38===t.which){var c=0<n?n-1:o;a.find(".location-result.active").removeClass("active"),a.find('.location-result[data-index="'+c+'"]').addClass("active")}else if(40===t.which){c=n<o?n+1:0;a.find(".location-result.active").removeClass("active"),a.find('.location-result[data-index="'+c+'"]').addClass("active")}else 13===t.which&&a.find(".location-result.active").trigger("click")}));var a=function(t){var a=e(t.target);(a.closest(".facetwp-input-wrap").len()<1||a.hasClass("f-reset"))&&e(".location-results").addClass("facetwp-hidden")};e().on("click",a),e().on("focusout",a),e().on("focusin",".facetwp-location",(function(){var t=e(this).closest(".facetwp-facet");""!=e(this).val()&&t.find(".location-results").removeClass("facetwp-hidden")})),e().on("change",".facetwp-radius",(function(){""!==e(this).closest(".facetwp-facet").find(".facetwp-location").val()&&FWP.autoload()})),e().on("input",".facetwp-radius-slider",(function(t){e(this).closest(".facetwp-facet").find(".facetwp-radius-dist").text(t.target.value)})),FWP.hooks.addAction("facetwp/refresh/proximity",(function(e,t){var a=e.find(".facetwp-lat").val(),s=e.find(".facetwp-lng").val(),n=e.find(".facetwp-radius").val(),o=encodeURIComponent(e.find(".facetwp-location").val());FWP.frozen_facets[t]="hard",FWP.facets[t]=""!==a&&void 0!==a?[a,s,n,o]:[]})),FWP.hooks.addFilter("facetwp/selections/proximity",(function(e,t){return FWP_JSON.proximity.clearText})),FWP.logic.search={delay_refresh:FWP.helper.debounce((function(e){FWP.frozen_facets[e]="soft",FWP.autoload()}),500)},FWP.hooks.addAction("facetwp/refresh/search",(function(e,t){var a=e.find(".facetwp-search");FWP.facets[t]=a.val()||"",e.find(".facetwp-icon").addClass("f-loading")})),FWP.hooks.addAction("facetwp/loaded",(function(){e(".facetwp-type-search .facetwp-icon").removeClass("f-loading")})),e().on("keyup",".facetwp-type-search .facetwp-search",(function(t){if(!FWP.is_refresh){var a=e(this).closest(".facetwp-facet").attr("data-name");void 0!==FWP.settings[a]&&("yes"===FWP.settings[a].auto_refresh?FWP.logic.search.delay_refresh(a):13===t.keyCode&&FWP.autoload())}})),e().on("click",".facetwp-type-search .facetwp-icon",(function(){FWP.is_refresh||FWP.autoload()})),FWP.hooks.addAction("facetwp/refresh/slider",(function(e,t){FWP.facets[t]=[];var a=FWP.active_facet,s=FWP.helper.getUrlVar(t);if(null!==a&&t===a.attr("data-name")){var n=a.find(".facetwp-slider").nodes[0];void 0!==n.noUiSlider&&(FWP.facets[t]=n.noUiSlider.get())}else!1!==s&&(FWP.facets[t]=s.replace("%2C",",").split(","));e.find(".facetwp-slider").attr("disabled",!0)})),FWP.hooks.addAction("facetwp/loaded",(function(){e(".facetwp-type-slider .facetwp-slider").nodes.forEach((e=>e.removeAttribute("disabled")))})),FWP.hooks.addAction("facetwp/set_label/slider",(function(e){var t=e.attr("data-name"),a=FWP.settings[t].lower,s=FWP.settings[t].upper,n=FWP.settings[t].format,o={decimal_separator:FWP.settings[t].decimal_separator,thousands_separator:FWP.settings[t].thousands_separator},c=FWP.settings[t].prefix,i=FWP.settings[t].suffix;if(a===s)var r=c+nummy(a).format(n,o)+i;else r=c+nummy(a).format(n,o)+i+" &mdash; "+c+nummy(s).format(n,o)+i;e.find(".facetwp-slider-label").html(r)})),FWP.hooks.addFilter("facetwp/selections/slider",(function(e,t){var a=t.el.find(".facetwp-slider-label");return a.len()?a.text():""})),e().on("facetwp-loaded",(function(){e(".facetwp-type-slider .facetwp-slider").each((function(){var t=e(this),a=t.closest(".facetwp-facet"),s=a.attr("data-name"),n=FWP.settings[s];if(t.hasClass("ready"))t.nodes[0].noUiSlider.updateOptions({range:FWP.settings[s].range},!1);else{if(void 0!==this.noUiSlider)return;if(null===FWP.settings[s].start[0])return;if(parseFloat(n.range.min)>=parseFloat(n.range.max))return FWP.settings[s].lower=n.range.min,FWP.settings[s].upper=n.range.max,void FWP.hooks.doAction("facetwp/set_label/slider",a);var o=FWP.hooks.applyFilters("facetwp/set_options/slider",{range:n.range,start:n.start,step:parseFloat(n.step),connect:!0},{facet_name:s}),c=this;noUiSlider.create(c,o),c.noUiSlider.on("update",(function(e,t){FWP.settings[s].lower=e[0],FWP.settings[s].upper=e[1],FWP.hooks.doAction("facetwp/set_label/slider",a)})),c.noUiSlider.on("set",(function(){FWP.active_facet=t.closest(".facetwp-facet"),FWP.autoload()})),t.addClass("ready")}})),e(".facetwp-type-slider").each((function(){var t=e(this).attr("data-name");e(this).find(".facetwp-slider-reset")[FWP.facets[t].length?"removeClass":"addClass"]("facetwp-hidden")}))})),e().on("click",".facetwp-type-slider .facetwp-slider-reset",(function(){var t=e(this).closest(".facetwp-facet").attr("data-name");FWP.reset(t)})),FWP.hooks.addAction("facetwp/refresh/rating",(function(t,a){var s=[];t.find(".facetwp-star.selected").each((function(){var t=e(this).attr("data-value");""!=t&&s.push(t)})),FWP.facets[a]=s})),e().on("mouseover",".facetwp-star",(function(){var t=e(this).closest(".facetwp-facet");if(e(this).hasClass("selected"))t.find(".facetwp-star-label").text(FWP_JSON.rating.Undo);else{var a="5"==e(this).attr("data-value")?"":FWP_JSON.rating["& up"];t.find(".facetwp-star-label").text(a),t.find(".facetwp-counter").text("("+e(this).attr("data-counter")+")")}})),e().on("mouseout",".facetwp-star",(function(){var t=e(this).closest(".facetwp-facet");t.find(".facetwp-star-label").text(""),t.find(".facetwp-counter").text("")})),e().on("click",".facetwp-star",(function(){var t=e(this).closest(".facetwp-facet"),a=e(this).hasClass("selected");t.find(".facetwp-star").removeClass("selected"),a||e(this).addClass("selected"),FWP.autoload()})),FWP.hooks.addAction("facetwp/refresh/sort",(function(e,t){var a=e.find("select").val();FWP.facets[t]=a?[a]:[]})),e().on("change",".facetwp-type-sort select",(function(){var t=e(this).closest(".facetwp-facet").attr("data-name");""!==e(this).val()&&(FWP.frozen_facets[t]="hard"),FWP.autoload()})),FWP.hooks.addAction("facetwp/refresh/pager",(function(e,t){FWP.facets[t]=[]})),FWP.hooks.addFilter("facetwp/template_html",(function(t,a){if(FWP.is_load_more){if(FWP.is_load_more=!1,0<e(".fwpl-layout").len()){var s=e(a.html).find(".fwpl-layout").html();e(".fwpl-layout").append(s)}else e(".facetwp-template").append(a.html);return!0}return t})),e().on("click",".facetwp-load-more",(function(){var t=e(this).attr("data-loading");e(this).html(t),FWP.is_load_more=!0,FWP.load_more_paged+=1,FWP.paged=FWP.load_more_paged,FWP.soft_refresh=!0,FWP.refresh()})),e().on("facetwp-loaded",(function(){var t=FWP.settings.pager.page<FWP.settings.pager.total_pages?"removeClass":"addClass";e(".facetwp-load-more")[t]("facetwp-hidden")})),e().on("facetwp-refresh",(function(){FWP.loaded&&FWP.is_load_more||(FWP.load_more_paged=1)}))}(fUtil)}();
