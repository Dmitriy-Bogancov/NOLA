"use strict";(self.webpackChunknola=self.webpackChunknola||[]).push([[528],{9321:(e,s,t)=>{t.d(s,{u:()=>i});const a="Modal_backdrop__2bCFe",o="Modal_modal__RKlRu";var d=t(184);const i=e=>{let{children:s,handleToggleModal:t}=e;return(0,d.jsx)("div",{className:a,onClick:e=>{const{target:s,currentTarget:a}=e;s===a&&t()},children:(0,d.jsx)("div",{className:o,children:(0,d.jsx)("div",{children:s})})})}},5528:(e,s,t)=>{t.r(s),t.d(s,{default:()=>N});var a=t(1087);const o="SavedPostsPage_title__F2ODv",d="SavedPostsPage_list__NNuIS",i="SavedPostsPage_item__pAjPL",l="SavedPostsPage_img__FcHGU",c="SavedPostsPage_item_footer__qDBam",n="SavedPostsPage_logo_icon__o+dOQ",r="SavedPostsPage_item_description__7wFVZ",_="SavedPostsPage_item_btn__L8KD-",h="SavedPostsPage_container__S6930",g="SavedPostsPage_title_empty__tc2LC",m="SavedPostsPage_description__fHYxt";var v=t(2791);const u=t.p+"static/media/saved_icon.1ad2907db1b3487ea7b9246bcd25daad.svg";var x=t(463),P=t(2564),j=t(9321),p=t(184);const S="savedPost",N=()=>{const[e,s]=(0,v.useState)(!1),[t,N]=(0,v.useState)(""),[b,k]=(0,v.useState)((()=>JSON.parse(localStorage.getItem(S)))),f=e=>{N(e),s((e=>!e))};return(0,p.jsxs)("div",{children:[(0,p.jsx)(P.Ix,{}),(0,p.jsx)("h1",{className:o,children:"My saved"}),(null===b||void 0===b?void 0:b.length)>0?(0,p.jsx)("ul",{className:d,children:b.map((e=>(0,p.jsxs)("li",{className:i,children:[(0,p.jsx)(a.OL,{to:"/main/".concat(e.id),children:(0,p.jsx)("img",{src:e.url,alt:"",className:l})}),(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("div",{children:(0,p.jsx)("img",{src:"",alt:"",className:n})}),(0,p.jsx)("p",{className:"".concat(r," dark:text-white"),children:e.title}),(0,p.jsx)("button",{type:"button",className:_,onClick:()=>f(e.id),children:(0,p.jsx)("img",{src:u,alt:"saved_icon"})})]})]},e.id)))}):(0,p.jsxs)("div",{className:h,children:[(0,p.jsx)("h2",{className:"".concat(g," dark:text-white"),children:"This list is empty"}),(0,p.jsx)("p",{className:"".concat(m," dark:text-white"),children:"Add something you`ve liked from the main page"})]}),e&&(0,p.jsx)(j.u,{handleToggleModal:f,children:(0,p.jsxs)(p.Fragment,{children:['"Are you sure you want to delete?"',(0,p.jsx)("button",{type:"button",onClick:f,children:"No"}),(0,p.jsx)("button",{type:"button",onClick:()=>(e=>{const s=b.filter((s=>s.id!==e));k(s),localStorage.setItem(S,JSON.stringify(s)),(0,x.f)("Post has been deleted"),f()})(t),children:"Yes"})]})})]})}},463:(e,s,t)=>{t.d(s,{f:()=>o});var a=t(2564);t(5462);const o=e=>{(0,a.Am)("".concat(e),{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},5462:()=>{}}]);
//# sourceMappingURL=528.af27a07f.chunk.js.map