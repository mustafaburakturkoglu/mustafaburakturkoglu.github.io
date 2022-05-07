"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[141],{82172:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(2784),r=s(45728);const o=function(){var e=(0,n.useContext)(r.St)||{},t=e.user,s=e.permissions;return{isLoggedIn:!!t,isAdminUser:t&&s.length>0&&"admin"===s[0].userType}}},84141:(e,t,s)=>{s.d(t,{Z:()=>J});var n=s(96234),r=s(59740),o=s(2784),a=s(13980),c=s.n(a),i=s(45728),u=(s(73160),s(52277),s(47933)),l=s(19545),d=s(82336),m=s(20150),p=s(72190),f=s(88643),g=function(e){var t=e.answered,s=e.comments,n=e.userVote,r=e.setUserVote,a=e.userId,c=e.discussUrl,i=e.permissions;return o.createElement("div",null,o.createElement("div",{className:f.Z["DiscussPost-metabox"]},o.createElement(p.Z,{className:"".concat(f.Z["DiscussPost-button"]," ").concat(n.hasVoted?f.Z["DiscussPost-button_voted"]:""),onClick:function(e){return e.preventDefault(),(0,d.Zl)({permissions:i,userVote:n,setUserVote:r,userId:a,discussUrl:c})},outline:!0,size:"md"},o.createElement("i",{className:"".concat(f.Z["DiscussPost-button_icon"]," icon-thumbs-up-2")})," ",n.voteCount||0),o.createElement(p.Z,{className:f.Z["DiscussPost-button"],outline:!0,size:"md"},o.createElement("i",{className:"".concat(f.Z["DiscussPost-button_icon"]," icon-discussions")})," ",(null==s?void 0:s.length)||0)),t&&o.createElement("div",{className:f.Z["DiscussPost-metabox_answered"]},o.createElement("span",{className:"".concat(f.Z.DiscussPost_icon," icon-check-circle")}),"ANSWERED"))},E=function(e){var t;return o.createElement(o.Fragment,null,null===(t=e.tags)||void 0===t?void 0:t.map((function(e,t){return o.createElement("span",{key:"tag-".concat(e,"-").concat(t),className:f.Z.DiscussPostActions_wrapper},o.createElement(p.Z,{className:f.Z.DiscussPostActions_button,kind:"secondary",outline:!0,size:"sm"},e))})))},v=function(e){return o.createElement(o.Fragment,null,o.createElement("div",{className:f.Z["DiscussPost-abbrbody"]},e.body),o.createElement("div",{className:f.Z.DiscussPostActions},o.createElement(E,{tags:e.tags})))},b=function(e){var t=e.postUser.name,s=e.createdAt;return o.createElement(m.Z,{className:f.Z["DiscussPost-date"],prefix:"Posted by ".concat(t),time:s})},y=function(e){var t=e.baseUrl,s=e.post,n=e.userVote,r=e.setUserVote,a=s.effective_user,c=s.body,d=s.title,m=s.id,p=s.tags,E=s.solved,y=s.comments,h=s.createdAt,D=l.Z.isClient,Z=(0,o.useContext)(i.St),P=Z.permissions,U=Z._id,N="".concat(D?window.location.pathname:"".concat(t,"/discuss/").concat(s.id));return o.createElement(u.rU,{className:"".concat(f.Z.DiscussPost," ").concat(f.Z["DiscussPost-abbreviated"]),to:"/discuss/".concat(m)},o.createElement(g,{answered:E,comments:y,userVote:n,setUserVote:r,userId:U,discussUrl:N,permissions:P}),o.createElement("div",{className:f.Z["DiscussPost-content"]},o.createElement("h2",{className:f.Z["DiscussPost-title"]},d),o.createElement(v,{body:c,tags:p}),h&&o.createElement(b,{postUser:a,createdAt:h})))};y.propTypes={baseUrl:c().string,post:c().object,setUserVote:c().func,userVote:c().shape({hasVoted:c().bool,voteCount:c().number,voters:c().array})},g.propTypes={answered:c().bool,comments:c().array,discussUrl:c().string,permissions:c().array,setUserVote:c().func,userId:c().oneOfType([c().string,c().object]),userVote:c().shape({hasVoted:c().bool,voteCount:c().number})},v.propTypes={body:c().string,tags:c().array},b.propTypes={createdAt:c().string,postUser:c().shape({name:c().string})},E.propTypes={tags:c().array};const h=y;s(66496),s(10746),s(84879),s(17305),s(85417),s(65389),s(74476);var D=s(56666),Z=(s(37029),s(4517)),P=s(82172),U=s(22650),N=s(87076),O=s(95369),A=s(90908),C=s(96796),k=s(70603),j=s(19650),T=s(89368),V=s(11342),_=s(22084);function w(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function S(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?w(Object(s),!0).forEach((function(t){(0,D.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):w(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var I=function(e){var t=e.userVote,s=e.setUserVote,n=e.discussUrl,r=e.permissions,a=e.setErrorMessage,c=e.userId;return o.createElement("div",{className:f.Z["DiscussPost-metabox"]},o.createElement(p.Z,{className:"".concat(f.Z["DiscussPost-button"]," ").concat(t.hasVoted?f.Z["DiscussPost-button_voted"]:""),onClick:function(e){return e.preventDefault(),(0,d.Zl)({permissions:r,setErrorMessage:a,userVote:t,setUserVote:s,userId:c,discussUrl:n})},outline:!0,size:"md"},o.createElement("span",{className:"".concat(f.Z["DiscussPost-button_icon"]," icon-thumbs-up-2")})," ",t.voteCount||0))},x=function(e){var t=e.isAdminUser,s=e.isLoggedIn,n=e.postUser,r=n.name,a=n.email,c=e.post.edited,i=e.createdAt,u=function(){return o.createElement(m.Z,{className:f.Z["DiscussPost-date"],icon:"icon-clock",suffix:"by ".concat(r),tag:"span",time:i})},l=function(){return o.createElement("span",{className:f.Z["DiscussPost-email"]},o.createElement("span",{className:"".concat(f.Z.icon," icon-lock1")}),o.createElement("span",null,a))};return o.createElement("div",{className:f.Z["DiscussPost-details"]},o.createElement(u,null),s&&t&&a&&o.createElement(l,null),c&&o.createElement("span",{className:f.Z["DiscussPost-edited"]},"(edited)"))},M=function(e){var t,s=e.discussUrl,n=e.isAdminUser,r=e.isLoggedIn,a=e.post,c=e.postData,i=e.setErrorMessage,u=e.setPostData,l=e.setIsEditing,m=e.user,g=r&&(null===(t=a.hub2user)||void 0===t?void 0:t.user.email)===m.email,E=(0,Z.k6)(),v=(0,o.useRef)(),b=function(){return o.createElement(p.Z,{className:f.Z["DiscussPostActions-action"],kind:"secondary",onClick:function(){return(0,d.CB)({discussUrl:s,postData:c,setErrorMessage:i,setPostData:u})},outline:!0,size:"sm"},o.createElement("i",{className:"".concat(f.Z.DiscussPost_icon," ").concat(c.isFAQ?"icon-cross":"icon-plus1")}),c.isFAQ?"Remove from FAQ":"Add to FAQ")},y=function(){return o.createElement(p.Z,{className:f.Z["DiscussPostActions-action"],kind:"secondary",onClick:function(){return l(!0)},outline:!0,size:"sm"},o.createElement("i",{className:"".concat(f.Z.DiscussPost_icon," icon-edit-2")}),"Edit")},h=function(){return o.createElement(p.Z,{className:f.Z["DiscussPostActions-action"],kind:"secondary",onClick:function(){v.current.toggle(!0)},outline:!0,size:"sm"},o.createElement("i",{className:"".concat(f.Z.DiscussPost_icon," icon-trash1")}),"Delete")},D=function(){return o.createElement(N.Z,{ref:v,size:"sm",target:"#delete-discussion-post-modal-target",verticalCenter:!0},o.createElement(O.Z,null,o.createElement(C.Z,{className:f.Z["DiscussPost-delete_text"],level:6},"Are you sure you want to delete this post?")),o.createElement(A.Z,{justify:"center"},o.createElement(p.Z,{kind:"secondary",onClick:function(){v.current.toggle(!1)}},"Cancel"),o.createElement(p.Z,{kind:"secondary",onClick:function(){(0,d.fn)({url:s,redirect:function(){return E.push("/discuss")},setErrorMessage:i}),v.current.toggle(!1)}},"Delete")))};return o.createElement("div",null,o.createElement(V.Z,{className:f.Z["DiscussPost-fullbody"]},c.body),o.createElement("div",{className:f.Z.DiscussPostActions},o.createElement(L,{discussUrl:s,postData:c,setPostData:u,isAdminUser:n,setErrorMessage:i}),n&&o.createElement(b,null),(n||g)&&o.createElement(y,null),(n||g)&&o.createElement(o.Fragment,null,o.createElement(h,null),o.createElement(D,null))))},F=function(e){var t=e.discussUrl,s=e.setPostData,r=e.setIsEditing,a=e.setErrorMessage,c=e.postData.body,u=(0,o.useRef)(),l=(0,o.useContext)(i.xI).flags.newEditor,m=(0,o.useContext)(i.cr),g=(0,o.useContext)(i.E_).domainFull,E=(0,_.sZ)(c),v=(0,n.Z)(E,3),b=v[0],y=v[2].serialize;return o.createElement(o.Fragment,null,l?o.createElement(U.Z,{bem:[["rule"]],className:f.Z.DiscussEditorWrapper},o.createElement(_.ZP,{basic:!0,className:f.Z["DiscussPost-fullbody"],domainFull:g,editorState:E,imageUpload:!1,projectBaseUrl:m})):o.createElement(k.Z,{ref:u,className:f.Z["DiscussPost-fullbody"],value:c}),o.createElement("div",{className:f.Z["DiscussPost-edit"]},o.createElement(p.Z,{className:"".concat(f.Z["Discuss-question_button"]," ").concat(f.Z["DiscussPost-edit_button"]),onClick:function(){var e,n,o=l?y(b):null==u||null===(e=u.current)||void 0===e||null===(n=e.state)||void 0===n?void 0:n.value;return(0,d.He)({url:t,editedBody:o,setErrorMessage:a,updateSuccess:function(){s((function(e){return S(S({},e),{},{body:o})})),r(!1)}})},size:"sm"},"Save"),o.createElement(p.Z,{kind:"secondary",onClick:function(){return r(!1)},outline:!0,size:"sm"},"Cancel")))},L=function(e){var t,s=e.discussUrl,r=e.postData,a=e.setPostData,c=e.isAdminUser,i=e.setErrorMessage,u=(0,o.useState)(""),l=(0,n.Z)(u,2),m=l[0],g=l[1],E=(0,o.useState)(!1),v=(0,n.Z)(E,2),b=v[0],y=v[1],h=function(){return o.createElement(p.Z,{className:f.Z["DiscussPostActions-action"],kind:"secondary",onClick:function(){return y(!0)},outline:!0,size:"sm"},o.createElement("i",{className:"".concat(f.Z.DiscussPost_icon," icon-plus1")}),"Tag")};return o.createElement(o.Fragment,null,null===(t=r.tags)||void 0===t?void 0:t.map((function(e,t){return o.createElement("span",{key:"tag-".concat(e,"-").concat(t),className:f.Z.DiscussPostActions_wrapper},c&&o.createElement("span",{className:"".concat(f.Z.DiscussPostActions_delete," icon-cross"),onClick:function(){return(0,d.DI)({tag:e,discussUrl:s,setErrorMessage:i,setPostData:a,postData:r})},onKeyDown:function(t){return(0,d.DI)({e:t,tag:e,discussUrl:s,setErrorMessage:i,setPostData:a,postData:r})},role:"button",tabIndex:0}),o.createElement(p.Z,{className:f.Z.DiscussPostActions_button,href:"/discuss?tag=".concat(e),kind:"secondary",outline:!0,size:"sm"},e))})),c&&(b?o.createElement(j.Z,{autoFocus:!0,className:f.Z.DiscussPostActions_button,onBlur:function(){return y(!1)},onChange:function(e){return g(e.target.value)},onKeyUp:function(e){return(0,d.u7)({e,discussUrl:s,newTag:m,setNewTag:g,setErrorMessage:i,setIsAddingTag:y,setPostData:a,postData:r})},placeholder:"Enter Tag",value:m}):o.createElement(h,null)))},z=function(e){var t=e.baseUrl,s=e.post,r=e.userVote,a=e.setUserVote,c=s.effective_user,u=s.body,d=s.title,m=s.id,p=s.tags,g=s.isFAQ,E=s.createdAt,v=l.Z.isClient,b=(0,o.useContext)(i.St),y=b.permissions,h=b._id,D=b.user,Z=(0,P.Z)(),U=Z.isLoggedIn,N=Z.isAdminUser,O=(0,o.useState)({body:u,isFAQ:g,tags:p}),A=(0,n.Z)(O,2),C=A[0],k=A[1],j=(0,o.useState)(!1),V=(0,n.Z)(j,2),_=V[0],w=V[1],S=(0,o.useState)(null),L=(0,n.Z)(S,2),z=L[0],Q=L[1];(0,o.useEffect)((function(){var e,t,s=(null==z||null===(e=z.errors)||void 0===e||null===(t=e.title)||void 0===t?void 0:t.message)||(null==z?void 0:z.message);return s?(0,T.h4)(o.createElement(T.lt,{color:"red"},s)):void 0}),[z]);var B="".concat(v?window.location.pathname:"".concat(t,"/discuss/").concat(m));return o.createElement("div",{className:f.Z.DiscussPost},o.createElement(I,{userVote:r,setUserVote:a,discussUrl:B,permissions:y,setErrorMessage:Q,userId:h}),o.createElement("div",{className:f.Z["DiscussPost-content"]},o.createElement("h2",{className:f.Z["DiscussPost-title"]},d),E&&o.createElement(x,{isAdminUser:N,isLoggedIn:U,postUser:c,post:s,createdAt:E}),_?o.createElement(F,{discussUrl:B,setPostData:k,setIsEditing:w,postData:C,setErrorMessage:Q}):o.createElement(M,{discussUrl:B,isAdminUser:N,isLoggedIn:U,post:s,postData:C,setPostData:k,setIsEditing:w,user:D,setErrorMessage:Q})),o.createElement("div",{className:"ModalWrapper",id:"delete-discussion-post-modal-target"}))};z.propTypes={baseUrl:c().string,post:c().object,setUserVote:c().func,userVote:c().shape({hasVoted:c().bool,voteCount:c().number,voters:c().array})},I.propTypes={discussUrl:c().string,permissions:c().array,setErrorMessage:c().func,setUserVote:c().func,userId:c().oneOfType([c().string,c().object]),userVote:c().shape({hasVoted:c().bool,voteCount:c().number,voters:c().array})},M.propTypes={discussUrl:c().string,isAdminUser:c().bool,isLoggedIn:c().bool,post:c().object,postData:c().shape({body:c().string,isFAQ:c().bool}),setErrorMessage:c().func,setIsEditing:c().func,setPostData:c().func,user:c().object},F.propTypes={discussUrl:c().string,postData:c().shape({body:c().string}),setErrorMessage:c().func,setIsEditing:c().func,setPostData:c().func},x.propTypes={createdAt:c().oneOfType([c().string,c().instanceOf(Date)]),isAdminUser:c().bool,isLoggedIn:c().bool,post:c().shape({edited:c().bool}),postUser:c().shape({email:c().string,name:c().string})},L.propTypes={discussUrl:c().string,isAdminUser:c().bool,postData:c().shape({tags:c().array}),setErrorMessage:c().func,setPostData:c().func};const Q=z;var B=function(e){var t=e.post,s=e.excerpt,a=t.hub2voters,c=(0,r.Z)(t,["hub2voters"]),u=(0,o.useContext)(i.St)._id,l=(0,o.useContext)(i.cr);l="/"===l?"":l;var d=(0,o.useState)({voteCount:null==c?void 0:c.vote_count,hasVoted:-1!==a.indexOf(u),voters:a}),m=(0,n.Z)(d,2),p=m[0],f=m[1];return s?o.createElement(h,{baseUrl:l,post:t,userVote:p,setUserVote:f}):o.createElement(Q,{baseUrl:l,post:t,userVote:p,setUserVote:f})};B.propTypes={excerpt:c().bool,post:c().object},B.defaultProps={excerpt:!1};const J=B},82336:(e,t,s)=>{s.d(t,{fq:()=>l,u7:()=>d,fn:()=>m,DI:()=>p,CB:()=>f,He:()=>g,EB:()=>E,Zl:()=>v,gs:()=>b});s(66496),s(84879),s(73160),s(17305),s(85417),s(65389),s(74476),s(10746);var n=s(68079),r=s(77162),o=s.n(r),a=(s(25047),s(34795)),c=s(56666);function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function u(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){(0,c.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var l=function(e){var t=e.recaptchaResponse,s=void 0===t?"":t,n=e.url,r=e.anonymous,c=e.body,i=e.parent,l=e.commentReopened,d=void 0!==l&&l,m=e.commentSolved,p=void 0!==m&&m,f=e.user,g=e.setErrorMessage,E=e.updateSuccess;return fetch(n,{body:JSON.stringify(u(u(u(u({body:c,anonymous:r,parent:i},s&&{"g-recaptcha-response":s}),d&&{reopened:d}),p&&{solved:p}),{},{user:f})),headers:{"Content-Type":"application/json"},method:"POST"}).then(function(){var e=(0,a.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=8;break}return e.t0=E,e.next=4,t.json();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 8:return e.t2=g,e.next=11,t.json();case 11:e.t3=e.sent,(0,e.t2)(e.t3);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return g({message:e})}))},d=function(e){var t=e.e,s=e.discussUrl,r=e.newTag,o=e.setErrorMessage,a=e.setNewTag,c=e.setIsAddingTag,i=e.setPostData,l=e.postData;return 13===t.keyCode&&r.length>0?fetch(s,{body:JSON.stringify({tags:[].concat((0,n.Z)(l.tags),[r])}),headers:{"Content-Type":"application/json"},method:"PUT"}).then((function(e){e.ok&&(i((function(e){return u(u({},e),{},{tags:[].concat((0,n.Z)(l.tags),[r])})})),a(""),c(!1))})).catch((function(e){return o({message:e})})):(27===t.keyCode&&(a(""),c(!1)),null)},m=function(e){var t=e.url,s=e.redirect,n=e.setErrorMessage,r=e.setPostComments,o=e.updatedPostComments;return fetch(t,{headers:{"Content-Type":"application/json"},method:"DELETE"}).then((function(e){e.ok&&(s?s():r(o))})).catch((function(e){return n({message:e})}))},p=function(e){var t=e.tag,s=e.e,n=e.discussUrl,r=e.setErrorMessage,o=e.setPostData,a=e.postData;if(null!=s&&s.keyCode&&13!==(null==s?void 0:s.keyCode))return null;var c=a.tags.filter((function(e){return e!==t}));return fetch(n,{body:JSON.stringify({tags:c}),headers:{"Content-Type":"application/json"},method:"PUT"}).then((function(e){e.ok&&o((function(e){return u(u({},e),{},{tags:c})}))})).catch((function(e){return r({message:e})}))},f=function(e){var t=e.discussUrl,s=e.postData,n=e.setErrorMessage,r=e.setPostData;return fetch(t,{body:JSON.stringify({isFAQ:!s.isFAQ}),headers:{"Content-Type":"application/json"},method:"PUT"}).then((function(e){e.ok&&r((function(e){return u(u({},e),{},{isFAQ:!s.isFAQ})}))})).catch((function(e){return n({message:e})}))},g=function(e){var t=e.url,s=e.editedBody,n=e.setErrorMessage,r=e.updateSuccess;return fetch(t,{body:JSON.stringify({body:s}),headers:{"Content-Type":"application/json"},method:"PUT"}).then((function(e){e.ok&&r()})).catch((function(e){return n({message:e})}))},E=function(e){var t,s=e.url,n=e.permissions,r=e.voteType,o=e.voteData,a=e.setErrorMessage,c=e.setVoteData,i=e.userId;if(!n)return window.location.assign("/login?redirect_uri=".concat(window.location.pathname)),null;var l=!0,d="",m="".concat(s,"/destroy"),p={};if(Object.keys(o).forEach((function(e){p[e]=o[e].filter((function(e){return e.user!==i}))})),o[r].length===(null===(t=p[r])||void 0===t?void 0:t.length)){l=!1;var f="upVote"===r?1:-1;p[r].push({user:i,value:f}),d={body:JSON.stringify({voted:f})}}return fetch(l?m:s,u(u({},d),{},{headers:{"Content-Type":"application/json"},method:l?"DELETE":"POST"})).then((function(e){e.ok&&c(p)})).catch((function(e){return a({message:e})}))},v=function(e){var t=e.permissions,s=e.userVote,n=e.setErrorMessage,r=e.setUserVote,o=e.userId,a=e.discussUrl;if(!t)return window.location.assign("/login?redirect_uri=".concat(window.location.pathname)),null;var c=s.voters;s.hasVoted?c=c.filter((function(e){return e!==o})):c.push(o);var i="".concat(a,"/vote");return fetch(i,{body:JSON.stringify({hub2voters:c,voted:!s.hasVoted}),headers:{"Content-Type":"application/json"},method:"POST"}).then((function(e){e.ok&&r({voteCount:c.length,hasVoted:!s.hasVoted,voters:c})})).catch((function(e){return n({message:e})}))},b=function(e){var t=e.csrfToken,s=e.post,n=e.loggedOutUser,r=void 0===n?{}:n,c=e.url,i=e.recaptchaResponse,l=void 0===i?"":i,d=e.setErrorMessage,m=e.redirect;return fetch(c,{body:JSON.stringify(u(u({_csrf:t,title:s.title,body:s.body},r&&{name:r.name,email:r.email}),l&&{"g-recaptcha-response":l})),headers:{"Content-Type":"application/json"},method:"POST"}).then(function(){var e=(0,a.Z)(o().mark((function e(t){var s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=7;break}return e.next=3,t.json();case 3:s=e.sent,m(s._id),e.next=12;break;case 7:return e.t0=d,e.next=10,t.json();case 10:e.t1=e.sent,(0,e.t0)(e.t1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return d({message:e})}))}}}]);