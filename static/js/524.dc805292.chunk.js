"use strict";(self.webpackChunknola=self.webpackChunknola||[]).push([[524],{1963:(e,t,A)=>{A.d(t,{r:()=>r});var n,a,i=A(2791);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var A=arguments[t];for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&(e[n]=A[n])}return e},l.apply(this,arguments)}function o(e,t){let{title:A,titleId:o,...r}=e;return i.createElement("svg",l({width:56,height:56,viewBox:"0 0 56 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},r),A?i.createElement("title",{id:o},A):null,n||(n=i.createElement("path",{d:"M16.3333 28H39.6666",stroke:"black",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),a||(a=i.createElement("path",{d:"M25.6666 18.6667L16.3333 28.0001L25.6666 37.3334",stroke:"black",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}const r=i.forwardRef(o);A.p},7459:(e,t,A)=>{A.d(t,{Z:()=>l});A(2791);const n="Button_buttonForm__X-24B",a="Button_disabled__jvels";var i=A(184);const l=e=>{let{label:t,onClick:A,disabled:l}=e;return(0,i.jsx)("button",{className:"".concat(n," ").concat(l?a:""),onClick:A,disabled:l,children:t})}},5121:(e,t,A)=>{A.d(t,{Z:()=>c});A(2791);var n=A(1087);const a="GoBackButton_goBack__sMPM4",i="GoBackButton_titleRecovery__jxfe9",l="GoBackButton_iconDark__ngklm";var o=A(3296),r=A(1963),s=A(184);const c=e=>{let{to:t,title:A,imgSrc:c,imgAlt:d,imgWidth:B,imgHeight:E,onClick:k}=e;const{theme:h,setTheme:Q}=(0,o.a)();return(0,s.jsxs)("div",{className:a,children:[(0,s.jsx)(n.rU,{to:t,onClick:k,className:"dark"===h?l:"",children:(0,s.jsx)(r.r,{})}),(0,s.jsx)("h3",{className:"".concat(i," dark:text-white"),children:A})]})}},2524:(e,t,A)=>{A.r(t),A.d(t,{default:()=>u});const n="AddLinksPage_back_container__tgZHc",a="AddLinksPage_empty_block__Q3OOg",i="AddLinksPage_title__yZ7nw",l="AddLinksPage_form_container__Ku-Ah",o="AddLinksPage_form__CRQDp",r="AddLinksPage_input__Pm3oS",s="AddLinksPage_btn_container__xYr9d";var c=A(5121),d=A(8971),B=A(7459),E=(A(6671),A(2791)),k=A(3296),h=A(7689),Q=A(422),g=A(184);const u=()=>{var e,t;(0,h.TH)();const{token:A,setToken:u}=(0,k.a)(),[v,m]=(0,E.useState)({id:(0,Q.x0)(),url:"",nameLink:""}),[x,f]=(0,E.useState)((()=>{var e;return null!==(e=JSON.parse(localStorage.getItem("accountLink")))&&void 0!==e?e:{links:[]}})),p=e=>{const{name:t,value:A}=e.target;m((e=>({...e,id:(0,Q.x0)(),[t]:A})))};return localStorage.setItem("accountLink",JSON.stringify(x)),(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:n,children:[(0,g.jsx)(c.Z,{to:"/main/accountAdverticer/adverticerEdit/links",imgSrc:d,imgAlt:"Go back",imgWidth:"50px",imgHeight:"50px"}),(0,g.jsx)("h2",{className:i,children:"Links"}),(0,g.jsx)("p",{className:a})]}),(0,g.jsxs)("form",{className:l,onSubmit:async e=>{e.preventDefault(),0===x.length?f((e=>({links:[v]}))):f((e=>({links:[...e.links,v]})));try{m({url:"",nameLink:""})}catch(t){console.log(t)}},children:[(0,g.jsxs)("div",{className:o,children:[(0,g.jsx)("input",{type:"text",name:"nameLink",placeholder:"URL-address",value:null===v||void 0===v?void 0:v.nameLink,className:"primary_text_style ".concat(r," dark:bg-black dark:border-white dark:text-white"),onChange:p}),(0,g.jsx)("input",{type:"text",name:"url",placeholder:"Name link",value:null===v||void 0===v?void 0:v.url,className:"primary_text_style ".concat(r," dark:bg-black dark:border-white dark:text-white"),onChange:p})]}),(0,g.jsx)("div",{className:s,children:(0,g.jsx)(B.Z,{label:"Save",type:"submit",disabled:!((null===v||void 0===v||null===(e=v.url)||void 0===e?void 0:e.length)>0&&(null===v||void 0===v||null===(t=v.nameLink)||void 0===t?void 0:t.length)>0)})})]})]})}},8971:e=>{e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAA4ADgDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/igAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD4O/bo/bo8N/sfeG/Bnhjwx4M1b47/ALVnx31a88F/stfsteC7y2g8b/GPxvBbCe8v7+8nElr4F+EvgW1kTxB8WPix4gSLwz4E8MxSXNzJd6vd6Po+pgHsH7JfhT9pTwf8DPClh+138UvCvxb/AGg9Tutf8T/EHXfAPhOz8HfD3w5e+Kdcv9ds/ht8P9Nhhi1PUPBPwz0++tfBHhvxN4qkufGHirTdEh8Q+JpxquozwQAH0jQAUAFABQBVvjeiyvDpq2raiLW4Ngt80qWTXvlP9lW8e3SSdLUz+WLhoY3lWLeY0ZwFIB/Gn+wGf+Ct3/DeX7bP/Cz1/wCCc4/4KXDUlHiI/tRt+0w3idv2Rv7SU/DBv2NR4GRfBSfshf2sZ1vV8JtJ45PxEW4f9oBx45fSY0AP24/435/9Ygf/ADc+gA/435/9Ygf/ADc+gD9dLEXosrMak1q2oi1txftYrKlk175Sfams0uHknS1M/mG3WaR5Vi2CR2cFiAWqACgAoA+Dv26P2F/Df7YPhvwZ4n8MeM9W+BH7VnwI1a88afstftS+C7O2n8b/AAc8bz2wgvLC/s5zHa+OvhL46tY08P8AxY+E/iB5fDPjvwzLJbXMdpq9po+saYAexfsm+K/2kvGHwK8Jah+1z8LvC/wl/aE0248QeGPiJoPgPxVZeL/h54h1Dwtr+o6DZfEj4eanBcz6pZeB/ibpdhZeOfDnhvxXFZeMfClhrkfhvxNatqelzXd0AfR9ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAA/9k="},422:(e,t,A)=>{A.d(t,{x0:()=>n});let n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",A=crypto.getRandomValues(new Uint8Array(e));for(;e--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&A[e]];return t}}}]);
//# sourceMappingURL=524.dc805292.chunk.js.map