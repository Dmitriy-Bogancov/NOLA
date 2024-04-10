"use strict";(self.webpackChunknola=self.webpackChunknola||[]).push([[658],{3658:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var n=r(1087);var o=r(2791),i=r(463),s=r(2219),a=r(2564),c=Object.defineProperty,l=(e,t,r)=>(((e,t,r)=>{t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),d=new Map,u=new WeakMap,h=0,g=void 0;function m(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return"".concat(t,"_").concat("root"===t?(r=e.root)?(u.has(r)||(h+=1,u.set(r,h.toString())),u.get(r)):"0":e[t]);var r})).toString()}function f(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:g;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const o=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof r.threshold?r.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:i,elements:s}=function(e){const t=m(e);let r=d.get(t);if(!r){const n=new Map;let o;const i=new IntersectionObserver((t=>{t.forEach((t=>{var r;const i=t.isIntersecting&&o.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=i),null==(r=n.get(t.target))||r.forEach((e=>{e(i,t)}))}))}),e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:i,elements:n},d.set(t,r)}return r}(r),a=s.get(e)||[];return s.has(e)||s.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),0===a.length&&(s.delete(e),i.unobserve(e)),0===s.size&&(i.disconnect(),d.delete(o))}}o.Component;const v={img:"Posts_img__Nl3kO",card:"Posts_card__GhwqZ",action:"Posts_action__OR1Gq"};var p=(e,t)=>{var r=e.map((e=>{var r=Array.isArray(e)?e:e.split(",").map(Number);return"hex"===t.format?y(r):r}));return 1===t.amount||1===r.length?r[0]:r},b=(e,t)=>{var r=Math.round(e/t)*t;return Math.min(r,255)},y=e=>"#"+e.map((e=>{var t=e.toString(16);return 1===t.length?"0"+t:t})).join(""),w=(e,t)=>{for(var r=4*t.sample,n={},o=0;o<e.length;o+=r){var i=[b(e[o],t.group),b(e[o+1],t.group),b(e[o+2],t.group)].join();n[i]=n[i]?n[i]+1:1}return p(Object.entries(n).sort(((e,t)=>{let[r,n]=e,[o,i]=t;return n>i?-1:1})).slice(0,t.amount).map((e=>{let[t]=e;return t})),t)},j=(e,t,r)=>new Promise(((n,o)=>{return(i=(e=>"string"===typeof e?e:e.src)(t),new Promise(((e,t)=>{var r=document.createElement("canvas"),n=r.getContext("2d"),o=new Image;o.onload=()=>{r.height=o.height,r.width=o.width,n.drawImage(o,0,0);var t=n.getImageData(0,0,o.width,o.height).data;e(t)},o.onerror=()=>t(Error("Image loading failed.")),o.crossOrigin="",o.src=i}))).then((t=>n(e(t,function(){let{amount:e=3,format:t="array",group:r=20,sample:n=10}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{amount:e,format:t,group:r,sample:n}}(r))))).catch((e=>o(e)));var i})),x=r(184);const S=e=>{let{id:t,url:r,title:i,handleSavePost:s}=e;const{ref:a,inView:c}=function(){let{threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:i,triggerOnce:s,skip:a,initialInView:c,fallbackInView:l,onChange:d}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var u;const[h,g]=o.useState(null),m=o.useRef(),[v,p]=o.useState({inView:!!c,entry:void 0});m.current=d,o.useEffect((()=>{if(a||!h)return;let o;return o=f(h,((e,t)=>{p({inView:e,entry:t}),m.current&&m.current(e,t),t.isIntersecting&&s&&o&&(o(),o=void 0)}),{root:i,rootMargin:n,threshold:e,trackVisibility:r,delay:t},l),()=>{o&&o()}}),[Array.isArray(e)?e.toString():e,h,i,n,s,a,r,l,t]);const b=null==(u=v.entry)?void 0:u.target,y=o.useRef();h||!b||s||a||y.current===b||(y.current=b,p({inView:!!c,entry:void 0}));const w=[g,v.inView,v.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}({threshold:.5,triggerOnce:!0}),[l,d]=(0,o.useState)(""),[u,h]=(0,o.useState)("");return(0,o.useEffect)((()=>{var e,t;(e=r,t={format:"hex"},j(w,e,t)).then((e=>{d(e[2]),h(e[0])})).catch((e=>console.log(e)))}),[r]),(0,x.jsx)("li",{ref:a,className:"".concat(v.card," ").concat(v.container),children:c&&(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{children:i}),(0,x.jsx)("div",{className:v.post_header,children:(0,x.jsx)("button",{type:"button",onClick:()=>s(t),className:v.save_btn,children:"SAVE"})}),(0,x.jsxs)(n.OL,{to:"".concat(t),className:v.link,children:[(0,x.jsx)("img",{src:r,alt:"",className:v.img}),(0,x.jsx)("div",{className:v.description}),(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:v.action,style:{backgroundColor:u||"#faf5f5",color:l||"#080808"},children:"Learn more"})})]})]})})})};var O=r(6671);const k="savedPost",I=()=>{const[e,t]=(0,o.useState)((()=>{var e;return null!==(e=JSON.parse(localStorage.getItem(k)))&&void 0!==e?e:""})),[r,c]=(0,o.useState)([]),[l,d]=(0,o.useState)(!1);(0,o.useEffect)((()=>{d(!0);(async()=>{try{const{data:e}=await(0,O.Yr)();console.log(e),c(e),d(!1)}catch(e){d(!1),(0,s.b)("Error! Try later")}})()}),[]),(0,o.useEffect)((()=>{localStorage.setItem(k,JSON.stringify(e))}),[e]);const u=n=>{const o=r.filter((e=>{let{id:t}=e;return t===n}));if(e){if(e.find((e=>e.id===n)))return void(0,s.b)("This post has already been saved");(0,i.f)("Post successfully saved")}t((e=>[...e,...o]))};(0,o.useEffect)((()=>{localStorage.removeItem("pathname")}),[]);return(0,x.jsxs)("div",{children:[(0,x.jsx)(a.Ix,{}),(0,x.jsx)(n.OL,{to:"setting",children:(0,x.jsx)("button",{type:"button",onClick:()=>{localStorage.setItem("pathname","/main")},children:"Setting"})}),l&&(0,x.jsx)("h2",{children:"LOADING..."}),(0,x.jsx)("ul",{children:r.map((e=>{let{id:t,title:n,banner:o}=e;return(0,x.jsx)(S,{data:r,url:o,title:n,id:t,handleSavePost:u},t)}))})]})}},2219:(e,t,r)=>{r.d(t,{b:()=>o});var n=r(2564);const o=e=>{n.Am.error("".concat(e),{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},463:(e,t,r)=>{r.d(t,{f:()=>o});var n=r(2564);r(5462);const o=e=>{(0,n.Am)("".concat(e),{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},5462:()=>{}}]);
//# sourceMappingURL=658.7153531b.chunk.js.map