"use strict";(self.webpackChunknola=self.webpackChunknola||[]).push([[714],{1963:(e,s,t)=>{t.d(s,{r:()=>d});var o,a,n=t(2791);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function i(e,s){let{title:t,titleId:i,...d}=e;return n.createElement("svg",r({width:56,height:56,viewBox:"0 0 56 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":i},d),t?n.createElement("title",{id:i},t):null,o||(o=n.createElement("path",{d:"M16.3333 28H39.6666",stroke:"black",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),a||(a=n.createElement("path",{d:"M25.6666 18.6667L16.3333 28.0001L25.6666 37.3334",stroke:"black",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}const d=n.forwardRef(i);t.p},7459:(e,s,t)=>{t.d(s,{Z:()=>r});t(2791);const o="Button_buttonForm__X-24B",a="Button_disabled__jvels";var n=t(184);const r=e=>{let{label:s,onClick:t,disabled:r}=e;return(0,n.jsx)("button",{className:"".concat(o," ").concat(r?a:""),onClick:t,disabled:r,children:s})}},5121:(e,s,t)=>{t.d(s,{Z:()=>c});t(2791);var o=t(1087);const a="GoBackButton_goBack__sMPM4",n="GoBackButton_titleRecovery__jxfe9",r="GoBackButton_iconDark__ngklm";var i=t(3296),d=t(1963),l=t(184);const c=e=>{let{to:s,title:t,imgSrc:c,imgAlt:v,imgWidth:h,imgHeight:u,onClick:m}=e;const{theme:g,setTheme:w}=(0,i.a)();return(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)(o.rU,{to:s,onClick:m,className:"dark"===g?r:"",children:(0,l.jsx)(d.r,{})}),(0,l.jsx)("h3",{className:"".concat(n," dark:text-white"),children:t})]})}},8735:(e,s,t)=>{t.d(s,{a:()=>i});const o="MessagePostOnModeration_checked_container__2SyNn",a="MessagePostOnModeration_description__19Kgo";t(2791);const n=t.p+"static/media/checked.be3d76171987d08d22f337ee06d1e8e5.svg";var r=t(184);const i=e=>{let{children:s}=e;return(0,r.jsxs)("div",{className:o,children:[(0,r.jsx)("img",{src:n,alt:"checked"}),(0,r.jsx)("p",{className:"".concat(a," dark:text-white "),children:s})]})}},9714:(e,s,t)=>{t.r(s),t.d(s,{default:()=>x});const o="RecoverPasswordPage_formContainer__gocZX",a="RecoverPasswordPage_inputContainer__EyeJk",n="RecoverPasswordPage_inputForm__P5t2M",r="RecoverPasswordPage_active__ee93P",i="RecoverPasswordPage_eyeIcon__UrJw-";var d=t(7689),l=t(2791),c=t(2202),v=t(5121),h=t(7459),u=t(8735),m=t(2219),g=t(2564),w=t(6671),p=t(3296),k=t(184);const x=()=>{var e,s;const{email:t,token:x}=(0,d.UO)(),_=null===t||void 0===t?void 0:t.slice(6),b=null===x||void 0===x?void 0:x.slice(6),j=(0,d.s0)(),{theme:f,setTheme:P}=(0,p.a)(),[y,C]=(0,l.useState)(!1),[N,B]=(0,l.useState)(!1),[S,M]=(0,l.useState)(!1),[O,R]=(0,l.useState)(!1),[E,L]=(0,l.useState)({token:b,email:_,password:"",confirmPassword:""});(0,l.useEffect)((()=>{var e,s;((null===E||void 0===E||null===(e=E.confirmPassword)||void 0===e?void 0:e.length)>0||(null===E||void 0===E||null===(s=E.password)||void 0===s?void 0:s.length)>0)&&((null===E||void 0===E?void 0:E.password)===(null===E||void 0===E?void 0:E.confirmPassword)?R(!0):R(!1))}),[null===E||void 0===E?void 0:E.confirmPassword,null===E||void 0===E?void 0:E.password]);const F=e=>{"confirmPassword"!==e?"password"!==e||B(!N):M(!S)},T=e=>{const{name:s,value:t}=e.target;L({...E,[s]:t})};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(g.Ix,{}),(0,k.jsxs)("div",{children:[!y&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(v.Z,{imgAlt:"Go back",imgWidth:"50px",imgHeight:"50px",title:"Password recovery",to:"/recovery"}),(0,k.jsxs)("form",{className:o,onSubmit:async e=>{e.preventDefault();try{console.log("Form submitted with data:",E);await(0,w.PQ)(E);C(!0),setTimeout((()=>{j("/main/authorization")}),3e3)}catch(a){var s,t,o;console.log(a),(0,m.b)((null===a||void 0===a||null===(s=a.response)||void 0===s||null===(t=s.data)||void 0===t||null===(o=t.errors)||void 0===o?void 0:o.Password[0])||a.response.statusText)}},children:[(0,k.jsxs)("div",{className:a,children:[(0,k.jsx)("input",{className:"".concat(n," ").concat((null===E||void 0===E||null===(e=E.password)||void 0===e?void 0:e.length)>0&&"light"===f?r:"","\n                secondary_text_style\n                 dark:bg-black dark:border-white dark:text-white\n                "),type:N?"text":"password",name:"password",placeholder:"New password",value:E.password,onChange:T}),(0,k.jsxs)("div",{className:i,onClick:()=>F("password"),children:[" ",N?(0,k.jsx)(c.dSq,{}):(0,k.jsx)(c.tgn,{})]})]}),(0,k.jsxs)("div",{className:a,children:[(0,k.jsx)("input",{className:"".concat(n," ").concat((null===E||void 0===E||null===(s=E.confirmPassword)||void 0===s?void 0:s.length)>0&&"light"===f?r:"","\n                secondary_text_style\n                 dark:bg-black dark:border-white dark:text-white\n                "),type:S?"text":"password",name:"confirmPassword",placeholder:"Confirm password",value:E.confirmPassword,onChange:T}),(0,k.jsxs)("div",{className:i,onClick:()=>F("confirmPassword"),children:[" ",S?(0,k.jsx)(c.dSq,{}):(0,k.jsx)(c.tgn,{})]})]}),(0,k.jsx)(h.Z,{label:"Confirm",type:"submit",disabled:!O})]})]}),y&&(0,k.jsx)(u.a,{children:"The new password has been saved."})]})]})}},2219:(e,s,t)=>{t.d(s,{b:()=>a});var o=t(2564);const a=e=>{o.Am.error("".concat(e),{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}}}]);
//# sourceMappingURL=714.b5d483ec.chunk.js.map