"use strict";(self.webpackChunknola=self.webpackChunknola||[]).push([[6601],{6645:(e,a,n)=>{n.d(a,{Z:()=>l});n(2791);const l=n.p+"static/media/addBaner.ba9dfedad53f886e44e80a37b788d3ba.svg"},5874:(e,a,n)=>{n.d(a,{Z:()=>l});n(2791);const l=n.p+"static/media/deleteLink.ec9ed3a14b19f8dd1a26b37bc4b1ea4c.svg"},6601:(e,a,n)=>{n.d(a,{i:()=>F});var l=n(2791);const t={loader:"AddBanner_loader__dsBoT",addPhoto_container:"AddBanner_addPhoto_container__fsmW3",img_menu_container:"AddBanner_img_menu_container__Q2QG0",img_menu:"AddBanner_img_menu__GH3zZ",overBanner:"AddBanner_overBanner__MD8oe",underBanner:"AddBanner_underBanner__e34W4",underBanner_description:"AddBanner_underBanner_description__D196N",addPhoto_item:"AddBanner_addPhoto_item__-W968",addPhoto:"AddBanner_addPhoto__oFUOE",banner:"AddBanner_banner__BctiS",turn:"AddBanner_turn__TPz8L"};var i=n(6645);const s=n.p+"static/media/delete.e1a28dc0bb784e2de49078deec3edb2a.svg";const o=n.p+"static/media/turn.3ba3ef99571b123ab55fe17c25914163.svg";var r=n(7162),d=n(2219),c=n(2564),u=n(6639),v=n(184);const p=e=>{let{setPost:a,post:n}=e;const[p,g]=(0,l.useState)(!1),[m,b]=(0,l.useState)(void 0!==(null===n||void 0===n?void 0:n.banners[0])),[h,_]=(0,l.useState)((()=>{var e;return void 0!==(null===n||void 0===n||null===(e=n.banners[1])||void 0===e?void 0:e.length)})),[x,k]=(0,l.useState)((()=>{var e;return void 0!==(null===n||void 0===n||null===(e=n.banners[2])||void 0===e?void 0:e.length)})),[j,f]=(0,l.useState)((()=>{var e;return(null===(e=JSON.parse(localStorage.getItem("previewPost")))||void 0===e?void 0:e.banners[0])||(null===n||void 0===n?void 0:n.banners[0])||""})),[y,N]=(0,l.useState)((()=>{var e;return(null===(e=JSON.parse(localStorage.getItem("previewPost")))||void 0===e?void 0:e.banners[1])||(null===n||void 0===n?void 0:n.banners[1])||""})),[w,P]=(0,l.useState)((()=>{var e;return(null===(e=JSON.parse(localStorage.getItem("previewPost")))||void 0===e?void 0:e.banners[2])||(null===n||void 0===n?void 0:n.banners[2])||""})),S="j0hj8hjd",C="984292171139147";(0,l.useEffect)((()=>{""===(null===n||void 0===n?void 0:n.banners[0])&&b(!1),""===(null===n||void 0===n?void 0:n.banners[1])&&_(!1),""===(null===n||void 0===n?void 0:n.banners[2])&&k(!1)}),[null===n||void 0===n?void 0:n.banners]);const A=async e=>{const a=e.target.files[0];if(a){var l;const p=null===a||void 0===a||null===(l=a.type)||void 0===l?void 0:l.split("/").splice(1,1).join();if(e.target.accept.split(",.").find((e=>e===p))){const e=new FormData;e.append("file",a),e.append("api_key",C),e.append("upload_preset",S);try{var t,i,s,o,c,u;g(!0);const a=await(0,r.I)(e);if(0===(null===n||void 0===n||null===(t=n.banners)||void 0===t?void 0:t.length)||0===(null===n||void 0===n||null===(i=n.banners[0])||void 0===i?void 0:i.length))return void I(a);if(1===(null===n||void 0===n||null===(s=n.banners)||void 0===s?void 0:s.length)||0===(null===n||void 0===n||null===(o=n.banners[1])||void 0===o?void 0:o.length))return void B(a);if(2===(null===n||void 0===n||null===(c=n.banners)||void 0===c?void 0:c.length)||0===(null===n||void 0===n||null===(u=n.banners[2])||void 0===u?void 0:u.length))return void L(a)}catch(v){(0,d.b)(v.message)}finally{g(!1)}return}(0,d.b)("Photo has not suitable format")}},I=e=>{var l,t,i;return 0===(null===n||void 0===n||null===(l=n.banners[0])||void 0===l?void 0:l.length)?(f(null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.url),b(!0),a((a=>{var l;return{...n,banners:a.banners.toSpliced(0,1,null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.url)}}))):(f(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.url),b(!0),a((a=>{var l;return{...n,banners:[...a.banners,null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.url]}})))},B=e=>{var l,t,i;return 0===(null===n||void 0===n||null===(l=n.banners[1])||void 0===l?void 0:l.length)?(N(null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.url),_(!0),a((a=>{var l;return{...n,banners:a.banners.toSpliced(1,1,null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.url)}}))):(N(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.url),_(!0),a((a=>{var l;return{...n,banners:[...a.banners,null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.url]}})))},L=e=>{var l,t,i;return 0===(null===n||void 0===n||null===(l=n.banners[2])||void 0===l?void 0:l.length)?(P(null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.url),k(!0),a((a=>{var l;return{...n,banners:a.banners.toSpliced(2,1,null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.url)}}))):(P(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.url),k(!0),a((a=>{var l;return{...n,banners:[...a.banners,null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.url]}})))},D=e=>{switch(e){case j:n.banners.filter((e=>e!==j));a((e=>({...n,banners:e.banners.toSpliced(0,1,"")}))),f(""),b(!1);break;case y:n.banners.filter((e=>e!==y));a((e=>({...n,banners:e.banners.toSpliced(1,1,"")}))),N(""),_(!1);break;case w:n.banners.filter((e=>e!==w));a((e=>({...n,banners:e.banners.toSpliced(2,1,"")}))),P(""),k(!1);break;default:n.banners[e]=""}};return(0,v.jsxs)(v.Fragment,{children:[p&&(0,v.jsx)("div",{className:t.loader,children:(0,v.jsx)(u.i,{})}),(0,v.jsx)(c.Ix,{}),(0,v.jsxs)("ul",{className:"".concat(t.addPhoto_container," dark:bg-gray"),children:[(0,v.jsx)("p",{className:"".concat(t.title," ").concat(t.overBanner),children:"Add banners"}),(0,v.jsxs)("li",{className:t.addPhoto_item,children:[(0,v.jsxs)("label",{children:[j?(0,v.jsx)("img",{src:j,alt:"addBaner",className:"".concat(t.banner," \n                    ")}):(0,v.jsx)("img",{src:i.Z,alt:"addBaner"}),!m&&(0,v.jsx)("input",{className:t.addPhoto,type:"file",accept:"image/*  ,.png,.jpg,.jpeg,.gif,.webp,.svg,.pdf",onChange:A})]}),j&&(0,v.jsxs)("div",{className:t.img_menu_container,children:[(0,v.jsx)("div",{className:t.img_menu,onClick:()=>D(j),children:(0,v.jsx)("img",{src:s,alt:"remove"})}),(0,v.jsx)("div",{className:t.img_menu,children:(0,v.jsxs)("label",{children:[(0,v.jsx)("img",{src:o,alt:"update"}),(0,v.jsx)("input",{className:t.addPhoto,type:"file",accept:"image/*  ,.png,.jpg,.jpeg,.gif,.webp,.svg,.pdf",onChange:async e=>{const l=e.target.files[0];if(l){var t;const c=null===l||void 0===l||null===(t=l.type)||void 0===t?void 0:t.split("/").splice(1,1).join();if(e.target.accept.split(",.").find((e=>e===c))){const e=new FormData;e.append("file",l),e.append("api_key",C),e.append("upload_preset",S);try{var i;g(!0);const l=await(0,r.I)(e);var s;if(0!==(null===n||void 0===n||null===(i=n.banners[0])||void 0===i?void 0:i.length))return a((e=>{var a;return{...n,banners:e.banners.toSpliced(0,1,null===l||void 0===l||null===(a=l.data)||void 0===a?void 0:a.url)}})),void f(null===l||void 0===l||null===(s=l.data)||void 0===s?void 0:s.url)}catch(o){(0,d.b)(o.message)}finally{g(!1)}return}(0,d.b)("Photo has not suitable format")}}})]})})]})]}),(0,v.jsxs)("li",{className:t.addPhoto_item,children:[(0,v.jsxs)("label",{children:[y?(0,v.jsx)("img",{src:y,alt:"addBaner",className:t.banner}):(0,v.jsx)("img",{src:i.Z,alt:"addBaner"}),!h&&(0,v.jsx)("input",{className:t.addPhoto,type:"file",accept:"image/*  ,.png,.jpg,.jpeg,.gif,.webp,.svg,.pdf",onChange:A})]}),y&&(0,v.jsxs)("div",{className:t.img_menu_container,children:[(0,v.jsx)("div",{className:t.img_menu,onClick:()=>D(y),children:(0,v.jsx)("img",{src:s,alt:"remove"})}),(0,v.jsx)("div",{className:t.img_menu,children:(0,v.jsxs)("label",{children:[(0,v.jsx)("img",{src:o,alt:"update"}),(0,v.jsx)("input",{className:t.addPhoto,type:"file",accept:"image/*  ,.png,.jpg,.jpeg,.gif,.webp,.svg,.pdf",onChange:async e=>{const l=e.target.files[0];if(l){var t;const c=null===l||void 0===l||null===(t=l.type)||void 0===t?void 0:t.split("/").splice(1,1).join();if(e.target.accept.split(",.").find((e=>e===c))){const e=new FormData;e.append("file",l),e.append("api_key",C),e.append("upload_preset",S);try{var i;g(!0);const l=await(0,r.I)(e);var s;if(0!==(null===n||void 0===n||null===(i=n.banners[1])||void 0===i?void 0:i.length))return a((e=>{var a;return{...n,banners:e.banners.toSpliced(1,1,null===l||void 0===l||null===(a=l.data)||void 0===a?void 0:a.url)}})),void N(null===l||void 0===l||null===(s=l.data)||void 0===s?void 0:s.url)}catch(o){(0,d.b)(o.message)}finally{g(!1)}return}(0,d.b)("Photo has not suitable format")}}})]})})]})]}),(0,v.jsxs)("li",{className:t.addPhoto_item,children:[(0,v.jsxs)("label",{children:[w?(0,v.jsx)("img",{src:w,alt:"addBaner",className:t.banner}):(0,v.jsx)("img",{src:i.Z,alt:"addBaner"}),!x&&(0,v.jsx)("input",{className:t.addPhoto,type:"file",accept:"image/*  ,.png,.jpg,.jpeg,.gif,.webp,.svg,.pdf",onChange:A})]}),w&&(0,v.jsxs)("div",{className:t.img_menu_container,children:[(0,v.jsx)("div",{className:t.img_menu,onClick:()=>D(w),children:(0,v.jsx)("img",{src:s,alt:"remove"})}),(0,v.jsx)("div",{className:t.img_menu,children:(0,v.jsxs)("label",{children:[(0,v.jsx)("img",{src:o,alt:"update"}),(0,v.jsx)("input",{className:t.addPhoto,type:"file",accept:"image/*  ,.png,.jpg,.jpeg,.gif,.webp,.svg,.pdf",onChange:async e=>{const l=e.target.files[0];if(l){var t;const c=null===l||void 0===l||null===(t=l.type)||void 0===t?void 0:t.split("/").splice(1,1).join();if(e.target.accept.split(",.").find((e=>e===c))){const e=new FormData;e.append("file",l),e.append("api_key",C),e.append("upload_preset",S);try{var i;g(!0);const l=await(0,r.I)(e);var s;if(0!==(null===n||void 0===n||null===(i=n.banners[2])||void 0===i?void 0:i.length))return a((e=>{var a;return{...n,banners:e.banners.toSpliced(2,1,null===l||void 0===l||null===(a=l.data)||void 0===a?void 0:a.url)}})),void P(null===l||void 0===l||null===(s=l.data)||void 0===s?void 0:s.url)}catch(o){(0,d.b)(o.message)}finally{g(!1)}return}(0,d.b)("Photo has not suitable format")}}})]})})]})]}),j||y||w?(0,v.jsx)("p",{className:"".concat(t.underBanner," dark:text-white"),children:"You first picture will be the main picture."}):(0,v.jsxs)("p",{className:"".concat(t.underBanner," dark:text-white"),children:["Supported types of images: JPEG, PNG, GIF, WEBP, SVG. ",(0,v.jsx)("br",{})," You can upload up to 3 images. Recommended image size 1080x1080"]})]})]})},g={loader:"CreatePost_loader__8KUfk",symbols:"CreatePost_symbols__qWGL-",title:"CreatePost_title__gEDyY",post_container:"CreatePost_post_container__0ByrS",post_description:"CreatePost_post_description__+58Jr",links_container:"CreatePost_links_container__Hl0+a",links_title:"CreatePost_links_title__vuzVU",supported_links:"CreatePost_supported_links__H5WkG"},m="AddSelectCategory_post_description__uPJxC";var b=n(9455);const h=JSON.parse('[{"id":"1","value":"languages","label":"Languages"},{"id":"2","value":"it_sphere","label":"It sphere"}]'),_=JSON.parse('[{"id":"1","value":"english","label":"English","categoryId":"1"},{"id":"2","value":"deutsche","label":"Deutsche","categoryId":"1"},{"id":"3","value":"polish","label":"Polish","categoryId":"1"},{"id":"4","value":"france","label":"France","categoryId":"1"},{"id":"5","value":"design","label":"Design","categoryId":"2"},{"id":"6","value":"programming","label":"Programming","categoryId":"2"},{"id":"7","value":"quality_assurance","label":"Quality Assurance","categoryId":"2"},{"id":"8","value":"digital_marketing","label":"Digital Marketing","categoryId":"2"},{"id":"9","value":"business_analysis","label":"Business analysis","categoryId":"2"}]');var x=n(3296);const k=e=>{let{setPost:a,post:n}=e;const{theme:t}=(0,x.a)(),[i,s]=(0,l.useState)([]),[o,r]=(0,l.useState)(null),[d,c]=(0,l.useState)((()=>{var e,a;return null!==(e=n.category)&&void 0!==e?e:null===(a=JSON.parse(localStorage.getItem("previewPost")))||void 0===a?void 0:a.category})),[u,p]=(0,l.useState)((()=>JSON.parse(localStorage.getItem("filterCategory"))||_)),[g,k]=(0,l.useState)(null),[j,f]=(0,l.useState)((()=>{var e,a;return null!==(e=n.subcategory)&&void 0!==e?e:null===(a=JSON.parse(localStorage.getItem("previewPost")))||void 0===a?void 0:a.subcategory})),[y,N]=(0,l.useState)(!0);(0,l.useEffect)((()=>{if(s(h),p(JSON.parse(localStorage.getItem("filterCategory"))||[]),!JSON.parse(localStorage.getItem("filterCategory"))&&n.subcategory){const e=null===i||void 0===i?void 0:i.findIndex((e=>{let{label:a}=e;return a===d}));r(e);const a=u.findIndex((e=>{let{label:a}=e;return a===(null===n||void 0===n?void 0:n.subcategory)}));return k(a),void p(u)}const e=null===i||void 0===i?void 0:i.findIndex((e=>{let{label:a}=e;return a===d}));r(e);const a=null===u||void 0===u?void 0:u.findIndex((e=>{let{label:a}=e;return a===j}));k(a)}),[i,d,j]);const w=e=>{const l=null===_||void 0===_?void 0:_.filter((a=>{let{categoryId:n}=a;return n===e.id})),t=null===i||void 0===i?void 0:i.findIndex((a=>a.label===e.label));a({...n,category:e.label}),r(t),p(l),N(!1),localStorage.setItem("filterCategory",JSON.stringify(l))},P=e=>{const l=u.findIndex((a=>a.value===e.value));a({...n,subcategory:e.label}),k(l)},S=e=>({...e,colors:{...e.colors,primary25:"transparent",primary:"#ECCD43"}}),C=i[o],A=u[g];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("label",{className:"".concat(m," dark:text-white"),children:["Category*","dark"===t?(0,v.jsx)(b.ZP,{styles:{control:e=>({...e,padding:"8px 24px",backgroundColor:"rgb(30 28 28)"}),menuList:e=>({...e,backgroundColor:"rgb(137 132 132)",color:"white"})},theme:S,onChange:w,value:C,options:i}):(0,v.jsx)(b.ZP,{styles:{control:e=>({...e,padding:"8px 24px"})},theme:S,onChange:w,value:C,options:i})]}),(0,v.jsxs)("label",{className:"".concat(m," dark:text-white"),children:["Subcategory*","dark"===t?(0,v.jsx)(b.ZP,{styles:{control:(e,a)=>({...e,padding:"8px 24px",backgroundColor:a.isDisabled?"#363232":""}),menuList:e=>({...e,backgroundColor:"rgb(137 132 132)",color:"white"})},theme:S,isDisabled:y,value:A,options:u,onChange:P}):(0,v.jsx)(b.ZP,{styles:{control:(e,a)=>({padding:"8px 24px",backgroundColor:a.isDisabled?"#e4e1e1":"",...e})},theme:S,isDisabled:y,value:A,options:u,onChange:P})]})]})},j="AddCallToAction_links_list__-v06l",f="AddCallToAction_links_list_item__nymrh",y="AddCallToAction_action_links__sjbh5",N="AddCallToAction_callToActionLinks__PfuPX",w=JSON.parse('[{"id":"2","value":"learn_more","label":"Learn more"},{"id":"3","value":"follow","label":"Follow"},{"id":"4","value":"subscribe","label":"Subscribe"},{"id":"5","value":"download","label":"Download"},{"id":"6","value":"try_for_free","label":"Try for free"},{"id":"7","value":"get_this","label":"Get this!"},{"id":"8","value":"join_now","label":"Join now!"}]'),P=e=>{let{setPost:a,post:n}=e;const{theme:t}=(0,x.a)(),[i,s]=(0,l.useState)([]),[o,r]=(0,l.useState)((()=>{var e,a;return null!==(e=n.callToAction)&&void 0!==e?e:null===(a=JSON.parse(localStorage.getItem("previewPost")))||void 0===a?void 0:a.callToAction})),[d,c]=(0,l.useState)(null);(0,l.useEffect)((()=>{s(w);const e=i.findIndex((e=>{let{label:a}=e;return a===o}));c(e)}),[i,o]);const u=e=>{const l=i.findIndex((a=>a.label===e.label));a({...n,callToAction:e.label}),c(l)},p=e=>({...e,colors:{...e.colors,primary25:"transparent",primary:"#ECCD43"}}),g=i[d];return(0,v.jsxs)("ul",{className:j,children:[(0,v.jsx)("li",{className:"".concat(f," ").concat(y),children:(0,v.jsx)("input",{name:"callToActionLinks",value:null===n||void 0===n?void 0:n.callToActionLinks,className:"".concat(N,"   dark:bg-black dark:border-white dark:text-white"),onChange:e=>{let{target:l}=e;const{value:t}=l;a({...n,callToActionLinks:t})}})}),(0,v.jsx)("li",{className:f,children:"dark"===t?(0,v.jsx)(b.ZP,{styles:{control:(e,a)=>({...e,padding:"8px 24px",backgroundColor:"rgb(30 28 28)"}),menuList:e=>({...e,backgroundColor:"rgb(137 132 132)",color:"white"})},theme:p,value:g,options:i,onChange:u}):(0,v.jsx)(b.ZP,{styles:{control:(e,a)=>({...e,padding:"8px 24px"})},className:"dark:bg-black dark:border-white dark:text-white",theme:p,value:g,options:i,onChange:u})})]})},S="AddPostLinks_links_container__J7faG",C="AddPostLinks_list__+oK+P",A="AddPostLinks_list_name__u0G1v",I="AddPostLinks_item__i+bJd",B="AddPostLinks_item_name__rgVpA",L="AddPostLinks_img__F2dEA";var D=n(5874);const J=e=>{let{links:a,onLinkChange:n,onLinkAdd:l,onLinkDelete:t}=e;const s=null===a||void 0===a?void 0:a.find((e=>e.id===a[a.length-1].id));return(0,v.jsx)(v.Fragment,{children:a&&(null===a||void 0===a?void 0:a.map((e=>{let{id:a,url:o,name:r}=e;return(0,v.jsxs)("div",{className:S,children:[(0,v.jsx)("div",{className:C,children:(0,v.jsx)("input",{value:o,placeholder:"url",className:"".concat(I,"   dark:bg-black dark:border-white dark:text-white"),onChange:e=>n(a,e.target.value,r)})}),(0,v.jsx)("div",{className:A,children:(0,v.jsx)("input",{value:r,onChange:e=>n(a,o,e.target.value),placeholder:"name",className:"".concat(I,"  ").concat(B," dark:bg-black dark:border-white dark:text-white")})}),s.id===a?(0,v.jsx)("img",{src:i.Z,alt:"add link",className:L,onClick:l}):(0,v.jsx)("img",{src:D.Z,alt:"delete link",className:L,onClick:()=>t(a)})]},a)})))})};var T=n(422);const F=e=>{var a,n,t,i;let{setPost:s,post:o,links:r,setLinks:d}=e;const[c,m]=(0,l.useState)(!1),[b,h]=(0,l.useState)(0),[_,x]=(0,l.useState)(0),j=e=>{let{target:a}=e;const{name:n,value:l}=a;s({...o,[n]:l}),h(l.length),"description"!==n||x(l.length)};return(0,v.jsxs)(v.Fragment,{children:[c&&(0,v.jsx)("div",{className:g.loader,children:(0,v.jsx)(u.i,{})}),0!==(null===o||void 0===o?void 0:o.length)&&(0,v.jsx)(p,{setPost:s,post:o}),(0,v.jsx)("p",{className:"".concat(g.title," dark:text-white"),children:"Fill in the details"}),(0,v.jsxs)("label",{className:"".concat(g.post_description," dark:text-white"),children:["Title*",(0,v.jsx)("input",{className:"".concat(g.post_container," \n          dark:bg-black dark:border-white dark:text-white\n           "),type:"text",maxLength:"35",name:"title",value:null===o||void 0===o?void 0:o.title,onChange:j,placeholder:"Friendly Study"}),(0,v.jsxs)("p",{className:"".concat(g.symbols," dark:text-white"),children:["Symbols left",(0,v.jsxs)("span",{className:g.symbols_count,children:[null!==(a=null===o||void 0===o||null===(n=o.title)||void 0===n?void 0:n.length)&&void 0!==a?a:b,"/35"]})]})]}),0!==(null===o||void 0===o?void 0:o.length)&&(0,v.jsx)(k,{setPost:s,post:o}),(0,v.jsxs)("label",{className:"".concat(g.post_description," dark:text-white "),children:["Description",(0,v.jsx)("textarea",{className:"".concat(g.post_container,"   dark:bg-black dark:border-white dark:text-white"),name:"description",maxLength:"9000",rows:"7",value:null===o||void 0===o?void 0:o.description,onChange:j}),(0,v.jsxs)("p",{className:g.symbols,children:["Symbols left",(0,v.jsxs)("span",{className:g.symbols_count,children:[null!==(t=null===o||void 0===o||null===(i=o.description)||void 0===i?void 0:i.length)&&void 0!==t?t:_,"/9000"]})]})]}),(0,v.jsxs)("div",{className:g.links_container,children:[(0,v.jsx)("p",{className:"".concat(g.title," dark:text-white"),children:"Add your links"}),(0,v.jsx)("p",{className:"".concat(g.links_title," dark:text-white"),children:"Add a link address and choose a Call-To-Action button if you want to promptly redirect a consumer to the landing page (optional):"}),0!==(null===o||void 0===o?void 0:o.length)&&(0,v.jsx)(P,{setPost:s,post:o}),(0,v.jsx)("p",{className:"".concat(g.supported_links," dark:text-white"),children:"Add a link to your social networks or webpage (at least one) and give a short title:"}),(0,v.jsx)(J,{links:r,setLinks:d,onLinkAdd:()=>{""!==r[r.length-1].name&&""!==r[r.length-1].url&&(s((e=>({...o,links:[...e.links,{id:(0,T.x0)(),url:"",name:""}]}))),d((e=>[...e,{id:(0,T.x0)(),url:"",name:""}])))},onLinkChange:(e,a,n)=>{d((l=>{const t=l.findIndex((a=>a.id===e)),i=[...l];return i.splice(t,1,{id:e,url:a,name:n}),s({...o,links:i}),null===r||void 0===r||r.map((e=>{let{name:a,url:n}=e;if(0===(null===a||void 0===a?void 0:a.length)&&0===(null===n||void 0===n?void 0:n.length)){const e=null===r||void 0===r?void 0:r.filter((e=>0!==e.url.length||0!==e.name.length));return s((a=>({...o,links:e})))}})),i}))},onLinkDelete:e=>{const a=o.links.filter((a=>{let{id:n}=a;return n!==e}));s({...o,links:a}),d(a)}}),(0,v.jsx)("p",{className:"".concat(g.supported_links," dark:text-white"),children:"Supported links: Facebook, Instagram, Pinterest, Tik-tok, Webpage"})]})]})}},2219:(e,a,n)=>{n.d(a,{b:()=>t});var l=n(2564);const t=e=>{l.Am.error("".concat(e),{position:"top-right",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},7162:(e,a,n)=>{n.d(a,{I:()=>t});var l=n(5294);const t=async e=>await l.Z.post("https://api.cloudinary.com/v1_1/".concat("dpsjhatpy","/image/upload"),e)},6639:(e,a,n)=>{n.d(a,{i:()=>i});var l=n(6457),t=n(184);const i=()=>(0,t.jsx)(l.Z1,{visible:!0,height:"100",width:"100",color:"#eccd43",ariaLabel:"three-circles-loading",wrapperStyle:{},wrapperClass:""})}}]);
//# sourceMappingURL=6601.debd41ee.chunk.js.map