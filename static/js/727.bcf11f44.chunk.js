"use strict";(self.webpackChunknola=self.webpackChunknola||[]).push([[727],{3646:(e,t,s)=>{s.d(t,{J:()=>l});var a=s(7689),n=s(463),c=s(2791),i=s(2564),o=s(184);const l=e=>{let{message:t,navigatePage:s}=e;const l=(0,a.s0)();return(0,c.useEffect)((()=>{(0,n.f)("".concat(t)),setTimeout((()=>{l(s,{replace:!0})}),3e3)}),[t,l,s]),(0,o.jsx)(i.Ix,{})}},4727:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});const a="EditPostPage_btn_container__5Gfsr",n="EditPostPage_btn__Ehyf4",c="EditPostPage_btn_active__jEvhf",i="EditPostPage_btn_back__ldWV9",o="EditPostPage_btn_back_active__FQlUF";var l=s(2791),r=s(7689),d=s(1087),u=s(6671),g=s(2564),h=s(3646),P=s(2219),b=s(2078),_=s(184);const m=()=>{(0,r.TH)(),(0,r.s0)();const e=(0,r.UO)(),[t,s]=(0,l.useState)(!1),[m,v]=(0,l.useState)([]),[p,x]=(0,l.useState)(0!==m.length||{description:"",title:"",category:{index:null,title:""},subcategory:{index:null,title:""},callToAction:"Read more",callToActionLinks:"",banners:[]});(0,l.useEffect)((()=>{(async()=>{try{const t=await(0,u.MZ)(e.editPostId);v(t)}catch(t){console.log(t)}})();localStorage.setItem("previewPost",JSON.stringify(p))}),[e,p]);return(0,_.jsxs)("div",{children:["EditPostPage",(0,_.jsx)(g.Ix,{}),t&&(0,_.jsx)(h.J,{message:"Current post has been edited",navigatePage:"/main/accountAdverticer"}),(0,_.jsx)("div",{children:(0,_.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),s(!0),console.log("editPost",p);try{await(0,u.Ux)(p.id,p)}catch(t){(0,P.b)(t.message)}},children:[(0,_.jsx)(b.i,{post:p,setPost:x}),(0,_.jsxs)("div",{className:a,children:[(0,_.jsx)(d.OL,{to:"/main/addPost/previewAdvertisemet",children:(0,_.jsx)("button",{type:"button",className:n,children:(0,_.jsx)("span",{className:i,children:" Preview"})})}),(0,_.jsx)("button",{type:"submit",className:"".concat(n," ").concat(c),children:(0,_.jsx)("span",{className:o,children:"Publish"})})]})]})})]})}},463:(e,t,s)=>{s.d(t,{f:()=>n});var a=s(2564);s(5462);const n=e=>{(0,a.Am)("".concat(e),{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},5462:()=>{}}]);
//# sourceMappingURL=727.bcf11f44.chunk.js.map