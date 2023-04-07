"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[7945],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),y=o,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{V3:()=>s,h8:()=>o,qh:()=>c,y$:()=>i});r(7462),r(7294);var n=r(3905);const o=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},i=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function a(e,t,r,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return a(0,"Released","#afa","#181")},s=e=>{let{children:t}=e;return a(0,"Planned","#aff","#288")}},447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));r(4887);const i={sidebar_position:1,title:"Overview"},a=void 0,c={unversionedId:"encryption/aes/overview",id:"version-2.1.1/encryption/aes/overview",title:"Overview",description:"What is AES encryption",source:"@site/versioned_docs/version-2.1.1/encryption/aes/overview.mdx",sourceDirName:"encryption/aes",slug:"/encryption/aes/overview",permalink:"/TSBC-Documentation/docs/encryption/aes/overview",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.1.1/encryption/aes/overview.mdx",tags:[],version:"2.1.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Decode Smart Contract ABI",permalink:"/TSBC-Documentation/docs/ethereum/abi/decode-abi"},next:{title:"Generate AES Key",permalink:"/TSBC-Documentation/docs/encryption/aes/generate-aes-key"}},s={},l=[{value:"What is AES encryption",id:"what-is-aes-encryption",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-aes-encryption"},"What is AES encryption"),(0,o.kt)("p",null,"AES (Advanced Encryption Standard) is a widely-used symmetric encryption algorithm that is commonly used to protect\nsensitive data such as private keys, passwords, and other confidential information. AES encryption uses a secret key\nand an initialization vector (IV) to encrypt and decrypt data, making it extremely difficult for unauthorized users\nto access the original information. By using AES encryption, you can ensure that your sensitive data remains protected\nfrom potential threats such as hackers or data breaches. This makes it an essential tool for securing sensitive data\nsuch as private keys, which are often used to access valuable assets like cryptocurrency wallets."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For more detailed overview, please follow this ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"},"wikipedia-page"),".")))}d.isMDXComponent=!0}}]);