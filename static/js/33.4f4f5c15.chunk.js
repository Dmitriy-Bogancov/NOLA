"use strict";(self.webpackChunknola=self.webpackChunknola||[]).push([[33],{4032:(e,t,a)=>{a.d(t,{Z:()=>h});var s=a(2791),o=a(1087);const n="GoBackButton_goBack__sMPM4",r="GoBackButton_titleRecovery__jxfe9",c="GoBackButton_iconDark__ngklm";var i,l,d=a(3296);function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},_.apply(this,arguments)}function m(e,t){let{title:a,titleId:o,...n}=e;return s.createElement("svg",_({width:56,height:56,viewBox:"0 0 56 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},n),a?s.createElement("title",{id:o},a):null,i||(i=s.createElement("path",{d:"M16.3333 28H39.6666",stroke:"black",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),l||(l=s.createElement("path",{d:"M25.6666 18.6667L16.3333 28.0001L25.6666 37.3334",stroke:"black",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}const g=s.forwardRef(m);a.p;var u=a(184);const h=e=>{let{to:t,title:a,imgSrc:s,imgAlt:i,imgWidth:l,imgHeight:_,onClick:m}=e;const{theme:h,setTheme:v}=(0,d.a)();return(0,u.jsxs)("div",{className:n,children:[(0,u.jsx)(o.rU,{to:t,onClick:m,className:"dark"===h?c:"",children:(0,u.jsx)(g,{})}),(0,u.jsx)("h3",{className:"".concat(r," dark:text-white"),children:a})]})}},3646:(e,t,a)=>{a.d(t,{J:()=>i});var s=a(7689),o=a(463),n=a(2791),r=a(2564),c=a(184);const i=e=>{let{message:t,navigatePage:a}=e;const i=(0,s.s0)();return(0,n.useEffect)((()=>{(0,o.f)("".concat(t)),setTimeout((()=>{i(a,{replace:!0})}),3e3)}),[t,i,a]),(0,c.jsx)(r.Ix,{})}},8735:(e,t,a)=>{a.d(t,{a:()=>c});const s="MessagePostOnModeration_checked_container__2SyNn",o="MessagePostOnModeration_description__19Kgo";a(2791);const n=a.p+"static/media/checked.be3d76171987d08d22f337ee06d1e8e5.svg";var r=a(184);const c=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:s,children:[(0,r.jsx)("img",{src:n,alt:"checked"}),(0,r.jsx)("p",{className:"".concat(o," dark:text-white "),children:t})]})}},9321:(e,t,a)=>{a.d(t,{u:()=>c});const s="Modal_backdrop__2bCFe",o="Modal_modal__RKlRu",n="Modal_children__HRgbz";var r=a(184);const c=e=>{let{children:t,handleToggleModal:a}=e;return(0,r.jsx)("div",{className:s,onClick:e=>{const{target:t,currentTarget:s}=e;t===s&&a()},children:(0,r.jsx)("div",{className:"".concat(o," dark:bg-black"),children:(0,r.jsx)("div",{className:n,children:t})})})}},2033:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var s=a(2791),o=a(7689),n=a(1087),r=(a(6671),a(2564)),c=a(422);const i={top_container:"AddPostPage_top_container__cSOWd",title_back:"AddPostPage_title_back__LHaNX",btn_container:"AddPostPage_btn_container__fKhKO",btn_preview_container:"AddPostPage_btn_preview_container__LqbdR",btn_preview:"AddPostPage_btn_preview__Z8QQo",btn:"AddPostPage_btn__+D415",btn_active:"AddPostPage_btn_active__lNN3N",btn_disabled:"AddPostPage_btn_disabled__97AhZ",modal_title:"AddPostPage_modal_title__rV9cG",modal_descr:"AddPostPage_modal_descr__PM1vj",modal_btn:"AddPostPage_modal_btn__HCGce",modal_text:"AddPostPage_modal_text__wBQqR"};var l=a(2219),d=a(3646),_=a(8735),m=a(4032),g=a(9321),u=a(2078),h=a(184);const v=e=>{let{postEdit:t,setPostEdit:a,draftsEdit:v,setDraftsEdit:b}=e;(0,o.TH)();const p=(0,o.s0)(),[k,x]=(0,s.useState)(!1),[P,j]=(0,s.useState)(!1),[f,w]=(0,s.useState)(!1),[N,y]=(0,s.useState)(!1),[S,A]=(0,s.useState)((()=>{var e;return(null===(e=JSON.parse(localStorage.getItem("previewPost")))||void 0===e?void 0:e.links)||[{id:(0,c.x0)(),url:"",name:""}]})),[C,O]=(0,s.useState)((()=>{var e;return null!==(e=JSON.parse(localStorage.getItem("previewPost")))&&void 0!==e?e:{id:(0,c.x0)(),description:"",title:"",category:"",subcategory:"",callToAction:"Read more",callToActionLinks:"",banners:[]}}));(0,s.useEffect)((()=>{localStorage.setItem("previewPost",JSON.stringify(C))}),[C]);(0,s.useEffect)((()=>{""!==C.title&&""!==C.category&&""!==C.subcategory?y(!0):y(!1)}),[C.category,C.subcategory,C.title]);return(0,h.jsxs)("div",{children:[!f&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.Ix,{}),P&&(0,h.jsx)(d.J,{message:"Sucsessfull add a new advertisement",navigatePage:"/main/accountAdverticer"}),(0,h.jsxs)("div",{className:i.top_container,onClick:()=>{x((e=>!e))},children:[(0,h.jsx)(m.Z,{to:"",imgWidth:"50px",imgHeight:"50px",imgAlt:"Go back"}),(0,h.jsx)("p",{className:"".concat(i.title_back," dark:text-white"),children:"New advertisement"})]}),(0,h.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),console.log("post",C);try{w(!0),localStorage.removeItem("previewPost"),localStorage.removeItem("filterCategory"),setTimeout((()=>{p("/main")}),3e3)}catch(a){var t;(0,l.b)((null===a||void 0===a||null===(t=a.response)||void 0===t?void 0:t.statusText)||a.message)}},children:[(0,h.jsx)(u.i,{setPost:O,post:C,links:S,setLinks:A}),(0,h.jsxs)("div",{className:i.btn_container,children:[(0,h.jsx)(n.OL,{to:"/main/addPost/previewAdvertisemet",children:(0,h.jsx)("button",{type:"button",className:i.btn_preview_container,children:(0,h.jsx)("span",{className:i.btn_preview,children:" Preview"})})}),(0,h.jsx)("button",{type:"submit",className:"".concat(i.btn," ").concat(N?i.btn_active:i.btn_disabled),disabled:!N,children:(0,h.jsx)("span",{className:i.btn_back_active,children:"Publish"})})]})]})]}),k&&(0,h.jsxs)(g.u,{handleToggleModal:()=>{x((e=>!e))},children:[(0,h.jsx)("h2",{className:i.modal_title,children:"Add post to draft?"}),(0,h.jsx)("p",{className:i.modal_descr,children:"You can come back to edit later."}),(0,h.jsx)("button",{type:"button",className:i.modal_btn,onClick:async()=>{try{localStorage.setItem("backend",JSON.stringify(C)),localStorage.removeItem("previewPost"),localStorage.removeItem("filterCategory"),p("/main"),x((e=>!e))}catch(e){console.log(e)}},children:"Confirm"}),(0,h.jsx)("p",{type:"button",className:"".concat(i.modal_text," dark:text-white"),onClick:()=>{localStorage.removeItem("previewPost"),p("/main"),x((e=>!e))},children:"Cancel"})]}),f&&(0,h.jsxs)(_.a,{children:["Advertisement is under moderation. ",(0,h.jsx)("br",{}),"It will take about 15 minutes."]})]})}},463:(e,t,a)=>{a.d(t,{f:()=>o});var s=a(2564);a(5462);const o=e=>{(0,s.Am)("".concat(e),{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},5462:()=>{}}]);
//# sourceMappingURL=33.4f4f5c15.chunk.js.map