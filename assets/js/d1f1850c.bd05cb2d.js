"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[44168],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=i,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>a,h8:()=>i,qh:()=>s,y$:()=>o});r(87462),r(67294);var n=r(3905);const i=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},o=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function a(e){let{children:t,version:r}=e;const i="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:i,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function c(e,t,r,i){return(0,n.kt)("div",{style:{backgroundColor:i,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const s=e=>{let{children:t}=e;return c(0,"Released","#afa","#181")}},64104:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));r(4887);const o={sidebar_position:1,title:"Overview"},a=void 0,c={unversionedId:"cryptography/ecdsa/overview",id:"version-3.0.0/cryptography/ecdsa/overview",title:"Overview",description:"What is ECDSA",source:"@site/versioned_docs/version-3.0.0/cryptography/ecdsa/overview.mdx",sourceDirName:"cryptography/ecdsa",slug:"/cryptography/ecdsa/overview",permalink:"/TSBC-Documentation/docs/3.0.0/cryptography/ecdsa/overview",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-3.0.0/cryptography/ecdsa/overview.mdx",tags:[],version:"3.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Decrypt Data (AES)",permalink:"/TSBC-Documentation/docs/3.0.0/cryptography/aes/aes-decrypt-data"},next:{title:"Secp256k1",permalink:"/TSBC-Documentation/docs/3.0.0/cryptography/ecdsa/secp256k1"}},s={},l=[{value:"What is ECDSA",id:"what-is-ecdsa",level:2}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-ecdsa"},"What is ECDSA"),(0,i.kt)("p",null,"ECDSA (Elliptic Curve Digital Signature Algorithm) is a cryptographic algorithm used to generate digital signatures\nfor data integrity and authentication. It is based on the mathematics of elliptic curves over finite fields and is\nwidely used in various security protocols and applications, including blockchain technology, digital certificates,\nand secure communications."),(0,i.kt)("p",null,"ECDSA offers several advantages, including shorter key lengths compared to traditional algorithms like RSA for equivalent\nsecurity, making it more efficient in terms of computational resources. This makes ECDSA particularly suitable for\nresource-constrained environments, such as embedded systems and mobile devices."),(0,i.kt)("p",null,"It's worth noting that ECDSA is widely used in blockchain technologies, including cryptocurrencies like Bitcoin\nand Ethereum, where it plays a crucial role in securing transactions and ensuring the integrity of the blockchain."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For more detailed overview, please follow this ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm"},"wikipedia-page"),".")))}p.isMDXComponent=!0}}]);