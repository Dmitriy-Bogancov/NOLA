"use strict";(self.webpackChunknola=self.webpackChunknola||[]).push([[238],{908:(e,o,s)=>{s.d(o,{Z:()=>a});s(2791);const a=s.p+"static/media/circle-exclamation-mark.17ba79873a47e9a43cf4f3584ca4f5b5.svg"},7459:(e,o,s)=>{s.d(o,{Z:()=>n});s(2791);const a="Button_buttonForm__X-24B";var r=s(184);const n=e=>{let{label:o,onClick:s,disabled:n}=e;return(0,r.jsx)("button",{className:a,onClick:s,disabled:n,children:o})}},7402:(e,o,s)=>{s.d(o,{Z:()=>m});s(2791);var a=s(2202),r=s(2715);const n="GoogleAndAppleButton_buttonContainer__zj53l",t="GoogleAndAppleButton_buttonForm__oc1w0",l="GoogleAndAppleButton_separatorLine__cnFHu",i="GoogleAndAppleButton_orText__Z9Coz",c="GoogleAndAppleButton_icon__lP+55";var d=s(184);const m=()=>(0,d.jsxs)("div",{className:n,children:[(0,d.jsx)("div",{className:l}),(0,d.jsx)("div",{className:"".concat(i," dark:bg-black"),children:"or"}),(0,d.jsxs)("button",{className:t,onClick:()=>{console.log("Continue with Apple clicked")},children:[(0,d.jsx)(a.oPZ,{className:c}),"Continue with Apple"]}),(0,d.jsxs)("button",{className:t,onClick:()=>{console.log("Continue with Google clicked")},children:[(0,d.jsx)(r.JM8,{className:c}),"Continue with Google"]})]})},3353:(e,o,s)=>{s.r(o),s.d(o,{default:()=>j});var a=s(7402),r=s(2791),n=s(7689),t=s(7459);const l={inputForm:"LoginForm_inputForm__pKZga",textForgot:"LoginForm_textForgot__-W3Qn",inputContainer:"LoginForm_inputContainer__h6NNr",passwordInputContainer:"LoginForm_passwordInputContainer__-BjXP",img_error:"LoginForm_img_error__r+umH",eyeIcon:"LoginForm_eyeIcon__kWAbN",error:"LoginForm_error__SKm7v",errorText:"LoginForm_errorText__1anjM",btn_text:"LoginForm_btn_text__bxMvl",btn_valid:"LoginForm_btn_valid__-sQUL"};var i=s(1087),c=s(8007),d=s(2202),m=s(2564),u=s(2219),p=s(4420),v=s(2007),_=s(463),g=s(908),h=s(184);const x=c.Ry().shape({email:c.Z_().matches(/^[^\s]*$/,"Please enter valid characters").matches(/^[^\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404]*$/,"Please enter valid characters").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Please enter a valid email address").required("Email is required"),password:c.Z_().required("Password is required").min(8,"Password must be at least 8 characters")}),b=()=>{var e,o;const s=(0,p.I0)(),a=(0,n.s0)(),[c,b]=(0,r.useState)({email:"",password:""}),[j,w]=(0,r.useState)(!1),[C,F]=(0,r.useState)({}),[N,k]=(0,r.useState)(!1),A=e=>{var o,s,a,r;const{name:n,value:t}=e.target;b({...c,[n]:t}),F({...C,[n]:""}),0!==(null===c||void 0===c||null===(o=c.email)||void 0===o?void 0:o.length)&&(null===c||void 0===c||null===(s=c.password)||void 0===s?void 0:s.length)>6&&0===(null===C||void 0===C||null===(a=C.email)||void 0===a?void 0:a.length)&&0===(null===C||void 0===C||null===(r=C.password)||void 0===r?void 0:r.length)&&k(!0)},y=async e=>{try{await x.validateAt(e,c),F((o=>({...o,[e]:""})))}catch(o){F((s=>({...s,[e]:o.message}))),k(!1)}},f=e=>C[e]&&"#ff0000";return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m.Ix,{}),(0,h.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x.validate(c,{abortEarly:!1}).then((async()=>{console.log("Form submitted with data:",c);try{await s((0,v.Fv)(c)).unwrap(),(0,_.f)("SignIn sucsessfull"),a("/main/accountAdverticer")}catch(e){(0,u.b)(e)}b({email:"",password:""}),F({}),k(!1)})).catch((e=>{const o={};e.inner.forEach((e=>{o[e.path]=e.message})),F(o)}))},children:[(0,h.jsxs)("div",{className:l.inputContainer,children:[(0,h.jsx)("div",{className:l.errorText,children:C.email}),(0,h.jsx)("input",{className:l.inputForm,type:"email",name:"email",placeholder:"Username or Email",value:c.email,onChange:A,onBlur:()=>y("email"),style:{borderColor:f("email"),color:f("email")}}),(null===C||void 0===C||null===(e=C.email)||void 0===e?void 0:e.length)>1?(0,h.jsx)("img",{src:g.Z,alt:"",className:l.img_error}):""]}),(0,h.jsxs)("div",{className:l.inputContainer,children:[(0,h.jsx)("div",{className:l.errorText,children:C.password}),(0,h.jsxs)("div",{className:l.passwordInputContainer,children:[(0,h.jsx)("input",{className:"".concat(l.inputForm," ").concat(l.passwordInput),type:j?"text":"password",name:"password",placeholder:"Password",value:c.password,onChange:A,onBlur:()=>y("password"),style:{borderColor:f("password"),color:f("password")}}),(0,h.jsx)("div",{className:"".concat(l.eyeIcon," ").concat((null===C||void 0===C||null===(o=C.password)||void 0===o?void 0:o.length)>1?l.error:""),onClick:()=>{w(!j)},children:j?(0,h.jsx)(d.tgn,{}):(0,h.jsx)(d.dSq,{})})]})]}),(0,h.jsx)("div",{children:(0,h.jsx)(i.rU,{to:"/recovery",children:(0,h.jsx)("p",{className:l.textForgot,children:"Forgot password?"})})}),(0,h.jsx)("div",{className:"".concat(l.btn_text," ").concat(N?l.btn_valid:""),children:(0,h.jsx)(t.Z,{label:"Sign In",type:"submit"})})]})]})},j=()=>(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)(b,{}),(0,h.jsx)(a.Z,{})]})},2219:(e,o,s)=>{s.d(o,{b:()=>r});var a=s(2564);const r=e=>{a.Am.error("".concat(e),{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},463:(e,o,s)=>{s.d(o,{f:()=>r});var a=s(2564);s(5462);const r=e=>{(0,a.Am)("".concat(e),{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}}}]);
//# sourceMappingURL=238.00d895ac.chunk.js.map