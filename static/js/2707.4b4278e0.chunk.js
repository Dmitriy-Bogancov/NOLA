"use strict";(self.webpackChunknola=self.webpackChunknola||[]).push([[2707],{2707:(e,a,s)=>{s.r(a),s.d(a,{default:()=>x});var t=s(7689),c=s(1087);const r="SearchPage_title__zGNRa",l="SearchPage_input_container__ci37J",i="SearchPage_search_icon__UPkKV",n="SearchPage_input__dZVc-",h="SearchPage_list__1tole",_="SearchPage_item__7j7Iq",o="SearchPage_img__7s+H+",d="SearchPage_description__q1-5f";var u=s(2791),g=s(6671),m=s(184);const x=()=>{const e=(0,t.TH)(),[a,s]=(0,c.lr)(),[x,j]=(0,u.useState)([]),[p,S]=(0,u.useState)(""),v=a.get("search");(0,u.useEffect)((()=>{(async()=>{const{data:e}=await(0,g.Yr)();j(e)})()}),[]);const N=x.filter((e=>{let{title:a}=e;return a.toLowerCase().trim().includes(p.toLowerCase().trim())}));return(0,m.jsxs)("div",{children:[(0,m.jsx)("form",{children:(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("label",{children:(0,m.jsx)("input",{type:"text",value:v||"",placeholder:"Searching",onChange:e=>{let{target:a}=e;s({search:a.value}),S(a.value)},className:n})}),(0,m.jsx)("svg",{width:"24",height:"24",className:i,children:(0,m.jsx)("use",{})})]})}),(0,m.jsx)("h2",{className:r,children:"Categories"}),(0,m.jsx)("ul",{className:h,children:x&&(null===N||void 0===N?void 0:N.map((a=>{let{category:s,idx:t,title:r}=a;return(0,m.jsx)("li",{className:_,children:(0,m.jsxs)(c.OL,{to:"categories",state:e,children:[(0,m.jsx)("img",{src:"",alt:"",className:o}),(0,m.jsx)("p",{className:d,children:r})]})},t)})))})]})}}}]);
//# sourceMappingURL=2707.4b4278e0.chunk.js.map