"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[73660],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),y=a,f=u["".concat(p,".").concat(y)]||u[y]||d[y]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>i,h8:()=>a,qh:()=>p,y$:()=>o});r(87462),r(67294);var n=r(3905);const a=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},o=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:r}=e;const a="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function c(e,t,r,a){return(0,n.kt)("div",{style:{backgroundColor:a,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const p=e=>{let{children:t}=e;return c(0,"Released","#afa","#181")}},41090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905)),o=r(4887);const i={sidebar_position:3,title:"Encrypt Data (AES)"},c=void 0,p={unversionedId:"cryptography/aes/aes-encrypt-data",id:"version-3.0.0/cryptography/aes/aes-encrypt-data",title:"Encrypt Data (AES)",description:"Encrypt Data (AES) function encrypts data using the AES-256 CBC algorithm.",source:"@site/versioned_docs/version-3.0.0/cryptography/aes/aes-encrypt-data.mdx",sourceDirName:"cryptography/aes",slug:"/cryptography/aes/aes-encrypt-data",permalink:"/TSBC-Documentation/docs/3.0.0/cryptography/aes/aes-encrypt-data",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-3.0.0/cryptography/aes/aes-encrypt-data.mdx",tags:[],version:"3.0.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Encrypt Data (AES)"},sidebar:"tutorialSidebar",previous:{title:"Generate AES Key",permalink:"/TSBC-Documentation/docs/3.0.0/cryptography/aes/generate-aes-key"},next:{title:"Decrypt Data (AES)",permalink:"/TSBC-Documentation/docs/3.0.0/cryptography/aes/aes-decrypt-data"}},s={},l=[],d={toc:l};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Encrypt Data (AES)")," function encrypts data using the AES-256 CBC algorithm.\nThis function is intended to be used to encrypt small amounts of sensitive data such as private keys."),(0,a.kt)("p",null,"This function requires the following inputs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.h8,{text:"1",mdxType:"Step"})," The data to be encrypted."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," The key used to encrypt the data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.h8,{text:"3",mdxType:"Step"})," The initial vector used with the key to encrypt the data.")),(0,a.kt)("p",null,"The function returns the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.h8,{text:"4",mdxType:"Step"})," A boolean value indicating whether the encryption was successful or not."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.h8,{text:"5",mdxType:"Step"})," An error message if encryption fails."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.h8,{text:"6",mdxType:"Step"})," The encrypted data.")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This function is specifically designed to encrypt private keys and is not suitable for encrypting large amounts of data.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AES Encrypt Data",src:r(62887).Z,width:"845",height:"603"})))}u.isMDXComponent=!0},62887:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/aes-encrypt-data-de591f521112472820531c7432fc17c6.png"}}]);