"use strict";(self.webpackChunknola=self.webpackChunknola||[]).push([[712],{5121:(e,t,s)=>{s.d(t,{Z:()=>o});s(2791);var i=s(1087);const n="GoBackButton_goBack__sMPM4",a="GoBackButton_titleRecovery__jxfe9";var c=s(184);const o=e=>{let{to:t,title:s,imgSrc:o,imgAlt:l,imgWidth:r,imgHeight:A,onClick:d}=e;return(0,c.jsxs)("div",{className:n,children:[(0,c.jsx)(i.rU,{to:t,onClick:d,children:(0,c.jsx)("img",{src:o,alt:l,width:r,height:A})}),(0,c.jsx)("h3",{className:a,children:s})]})}},9321:(e,t,s)=>{s.d(t,{u:()=>c});const i="Modal_backdrop__2bCFe",n="Modal_modal__RKlRu";var a=s(184);const c=e=>{let{children:t,handleToggleModal:s}=e;return(0,a.jsx)("div",{className:i,onClick:e=>{const{target:t,currentTarget:i}=e;t===i&&s()},children:(0,a.jsx)("div",{className:"".concat(n," dark:bg-black"),children:(0,a.jsx)("div",{children:t})})})}},7560:(e,t,s)=>{s.d(t,{I:()=>l});const i="PostsAdverticerMenu_post_menu__om+8g",n="PostsAdverticerMenu_container_menu__q8Ojw",a="PostsAdverticerMenu_select__tUmP+";var c=s(1087),o=s(184);const l=e=>{let{setShowMenuActive:t=!0,getPost:s,id:l,isPostStopped:r,postMenuActive:A,handlePostArchivationMessage:d,handlePostStoppingMessage:h,handlePostLaunchAgainMessage:u,handleRecoverePostMessage:g,handleDeletePostMessage:x}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:i,children:[(0,o.jsx)("p",{children:"213"}),(0,o.jsx)("p",{children:"7"}),(0,o.jsxs)("div",{className:"".concat(n," "),onClick:()=>A(l),children:["***",t&&(0,o.jsxs)("div",{className:"".concat(a," "),children:[(0,o.jsx)(c.OL,{to:"/main/addPost/".concat(l),children:(0,o.jsx)("button",{children:"Edit"})}),(0,o.jsx)("p",{children:(0,o.jsx)("button",{type:"button",onClick:d,children:"Archivation"})}),(0,o.jsx)("p",{children:(0,o.jsx)("button",{type:"button",disabled:r,onClick:h,children:"Stopping"})}),(0,o.jsx)("p",{children:(0,o.jsx)("button",{type:"button",disabled:!r,onClick:u,children:"To launch post again"})})]}),!t&&(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"".concat(a," "),children:[(0,o.jsx)(c.OL,{to:"/main/addPost/".concat(l),children:(0,o.jsx)("button",{children:"Edit"})}),(0,o.jsx)("p",{children:(0,o.jsx)("button",{onClick:g,children:"Recovere post"})}),(0,o.jsx)("p",{children:(0,o.jsx)("button",{onClick:x,children:"Delete"})})]})})]})]})})}},6209:(e,t,s)=>{s.d(t,{M:()=>u});const i="PostsAdverticer_logo_container__plN2m",n="PostsAdverticer_logo__bwPbY",a="PostsAdverticer_logo_description__t9XCM",c="PostsAdverticer_title__R1CmQ",o="PostsAdverticer_descriptionTest__RJCdn",l="PostsAdverticer_links__z8L7M",r="PostsAdverticer_links_item__1YETU",A="PostsAdverticer_link_img__Z-5q4",d="PostsAdverticer_url__+Q35s";s(5121),s(8971);var h=s(184);const u=e=>{var t;let{data:s}=e;return(0,h.jsx)(h.Fragment,{children:s&&(null===(t=[s])||void 0===t?void 0:t.map((e=>{var t;let{description:u,title:g}=e;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:i,children:[(0,h.jsx)("img",{src:"",alt:"",className:n}),(0,h.jsx)("p",{className:"".concat(a," dark:text-white"),children:g})]}),(0,h.jsx)("p",{className:"".concat(c," dark:text-white"),children:g}),(0,h.jsx)("p",{className:"".concat(o," dark:text-white"),children:u}),(null===s||void 0===s?void 0:s.links)&&(0,h.jsx)("p",{className:"".concat(l," dark:text-white"),children:"Links:"}),(0,h.jsx)("ul",{children:null===s||void 0===s||null===(t=s.links)||void 0===t?void 0:t.map((e=>{let{id:t,url:s,name:i}=e;return 0!==i.length?(0,h.jsxs)("li",{className:"".concat(r),children:[(0,h.jsx)("img",{src:"",alt:"",className:A}),(0,h.jsxs)("a",{href:s,className:"".concat(d," dark:text-white"),children:[" ",i]})]},t):""}))})]})})))})}},712:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var i=s(2791),n=s(6671),a=s(3296),c=s(9321),o=s(2564),l=(s(5462),s(463)),r=s(6209),A=s(5121),d=s(8971);const h="AdverticerPublicationsPage_top_container__6cnPS",u="AdverticerPublicationsPage_return__9ypvf",g="AdverticerPublicationsPage_container__LSPHh",x="AdverticerPublicationsPage_title__jsyAu",v="AdverticerPublicationsPage_card__TUZc2",p="AdverticerPublicationsPage_post_container__81mox",B="AdverticerPublicationsPage_img__VUouX";var E=s(7560),j=s(184);const m=()=>{const{token:e,setToken:t}=(0,a.a)(),[s,m]=(0,i.useState)([]),[Q,_]=(0,i.useState)(!1),[P,b]=(0,i.useState)(!1),[k,C]=(0,i.useState)(!1),[f,w]=(0,i.useState)({archived:!1,stopped:!1,deleted:!1,launchAgain:!1}),[N,M]=(0,i.useState)(!1),[S,R]=(0,i.useState)(!1),[D,F]=(0,i.useState)(""),[U,H]=(0,i.useState)(!1);(0,i.useEffect)((()=>{(async()=>{try{const{data:t}=await(0,n.Yr)(e);m(t)}catch(t){console.log(t)}})()}),[e]);const L=()=>{R(!1)},y=e=>{b((e=>!e)),C(e)},K=()=>{y("Are you sure you want to archive?"),w({archived:!0,stopped:!1,deleted:!1,launchAgain:!1})},W=()=>{y("Are you sure you want to stop?"),w({archived:!1,stopped:!0,deleted:!1,launchAgain:!1})},Y=()=>{y("Are you sure you want to launch aagin?"),w({archived:!1,stopped:!1,deleted:!1,launchAgain:!0})},Z=e=>{F(e)};return(0,j.jsxs)("div",{className:g,children:[console.log(s),(0,j.jsx)(o.Ix,{}),(0,j.jsxs)("ul",{className:v,children:[!S&&(null===s||void 0===s?void 0:s.map((e=>{let{id:t,title:i,description:n,banner:a}=e;return(0,j.jsxs)("li",{className:p,children:[(0,j.jsx)("img",{src:a,alt:"",className:B,onClick:()=>(e=>{R(s.filter((t=>t.id===e)))})(t)}),(0,j.jsx)("h2",{className:x,children:i}),(0,j.jsx)(E.I,{getPost:s,id:t,postMenuActive:Z,handlePostArchivationMessage:K,handlePostStoppingMessage:W,handlePostLaunchAgainMessage:Y,isPostStopped:N})]},t)}))),P&&(0,j.jsxs)(c.u,{handleToggleModal:y,children:[f.archived&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("p",{children:k}),(0,j.jsx)("button",{type:"button",onClick:()=>{return e=D,m(s.filter((t=>t.id!==e))),y(),void(0,l.f)("Curent post has been archived!");var e},children:"Yes"})]}),f.stopped&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("p",{children:k}),(0,j.jsx)("button",{type:"button",onClick:()=>{return e=D,m(s.filter((t=>t.id===e))),y(),M(!0),void(0,l.f)("Current post stopping!");var e},children:"Yes"})]}),f.launchAgain&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("p",{children:k}),(0,j.jsx)("button",{type:"button",onClick:()=>{return e=D,m(s.filter((t=>t.id===e))),y(),M(!1),void(0,l.f)("Post has been launched");var e},children:"Yes"})]}),(0,j.jsx)("button",{type:"button",onClick:y,children:"No"})]})]}),(0,j.jsx)("ul",{children:S&&(null===S||void 0===S?void 0:S.map((e=>{let{id:t,title:s,description:i,banner:n}=e;return(0,j.jsxs)("li",{children:[(0,j.jsxs)("div",{className:h,children:[(0,j.jsx)(A.Z,{imgSrc:d,imgAlt:"Go back",imgWidth:"50px",imgHeight:"50px",onClick:L}),(0,j.jsx)("p",{className:u,children:"Return to the feed"})]}),(0,j.jsx)("img",{src:n,alt:"",className:B}),(0,j.jsx)(r.M,{id:t,name:s,description:i,banner:n,setShowPost:R})]},t)})))})]})}},463:(e,t,s)=>{s.d(t,{f:()=>n});var i=s(2564);s(5462);const n=e=>{(0,i.Am)("".concat(e),{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},5462:()=>{},8971:e=>{e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAA4ADgDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/igAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD4O/bo/bo8N/sfeG/Bnhjwx4M1b47/ALVnx31a88F/stfsteC7y2g8b/GPxvBbCe8v7+8nElr4F+EvgW1kTxB8WPix4gSLwz4E8MxSXNzJd6vd6Po+pgHsH7JfhT9pTwf8DPClh+138UvCvxb/AGg9Tutf8T/EHXfAPhOz8HfD3w5e+Kdcv9ds/ht8P9Nhhi1PUPBPwz0++tfBHhvxN4qkufGHirTdEh8Q+JpxquozwQAH0jQAUAFABQBVvjeiyvDpq2raiLW4Ngt80qWTXvlP9lW8e3SSdLUz+WLhoY3lWLeY0ZwFIB/Gn+wGf+Ct3/DeX7bP/Cz1/wCCc4/4KXDUlHiI/tRt+0w3idv2Rv7SU/DBv2NR4GRfBSfshf2sZ1vV8JtJ45PxEW4f9oBx45fSY0AP24/435/9Ygf/ADc+gA/435/9Ygf/ADc+gD9dLEXosrMak1q2oi1txftYrKlk175Sfams0uHknS1M/mG3WaR5Vi2CR2cFiAWqACgAoA+Dv26P2F/Df7YPhvwZ4n8MeM9W+BH7VnwI1a88afstftS+C7O2n8b/AAc8bz2wgvLC/s5zHa+OvhL46tY08P8AxY+E/iB5fDPjvwzLJbXMdpq9po+saYAexfsm+K/2kvGHwK8Jah+1z8LvC/wl/aE0248QeGPiJoPgPxVZeL/h54h1Dwtr+o6DZfEj4eanBcz6pZeB/ibpdhZeOfDnhvxXFZeMfClhrkfhvxNatqelzXd0AfR9ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAA/9k="}}]);
//# sourceMappingURL=712.25e3cb85.chunk.js.map