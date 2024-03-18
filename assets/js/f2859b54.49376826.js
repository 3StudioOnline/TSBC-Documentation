"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[7652],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(o,".").concat(m)]||p[m]||u[m]||s;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<s;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>i,h8:()=>n,qh:()=>o,y$:()=>s});r(87462),r(67294);var a=r(3905);const n=e=>{let{children:t,text:r}=e;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},s=e=>{let{children:t}=e;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:r}=e;const n="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:n,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function l(e,t,r,n){return(0,a.kt)("div",{style:{backgroundColor:n,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const o=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")}},45190:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));r(4887);const s={sidebar_position:3,title:"Wallet Address"},i=void 0,l={unversionedId:"quick-start/wallet-address",id:"version-1.0.8/quick-start/wallet-address",title:"Wallet Address",description:"Wallet Address",source:"@site/versioned_docs/version-1.0.8/quick-start/wallet-address.mdx",sourceDirName:"quick-start",slug:"/quick-start/wallet-address",permalink:"/TSBC-Documentation/docs/1.0.8/quick-start/wallet-address",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.0.8/quick-start/wallet-address.mdx",tags:[],version:"1.0.8",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Wallet Address"},sidebar:"tutorialSidebar",previous:{title:"Private and Public Keys",permalink:"/TSBC-Documentation/docs/1.0.8/quick-start/private-public-key"},next:{title:"Uint256",permalink:"/TSBC-Documentation/docs/1.0.8/quick-start/uint256"}},o={},d=[{value:"Wallet Address",id:"wallet-address",level:2},{value:"Generate Wallet Address",id:"generate-wallet-address",level:2},{value:"Ethereum Address Checksum",id:"ethereum-address-checksum",level:2},{value:"Validate Wallet Address",id:"validate-wallet-address",level:2}],c={toc:d};function u(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"wallet-address"},"Wallet Address"),(0,n.kt)("p",null,"Most generally, this represents an ",(0,n.kt)("inlineCode",{parentName:"p"},"External Owned Account"),"(EOA) or a ",(0,n.kt)("em",{parentName:"p"},"Contract")," that can receive (destination address) or send (source address) transactions\nto the blockchain. More specifically, it is the rightmost 160 bits of a ",(0,n.kt)("em",{parentName:"p"},"Keccak")," hash of an ECDSA ",(0,n.kt)("em",{parentName:"p"},"Public Key"),"."),(0,n.kt)("h2",{id:"generate-wallet-address"},"Generate Wallet Address"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Generate Ethereum Address From Public Key")," function have 2 versions, where you can specify the ",(0,n.kt)("em",{parentName:"p"},"Public Key")," either as an array of bytes or as a string.\nFor the most use cases you will be using the ",(0,n.kt)("em",{parentName:"p"},"Bytes Array")," version due to nature of other nodes outputs and simplicity of it."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Generate Ethereum Address From Public Key as Bytes",src:r(77186).Z,width:"846",height:"224"})),(0,n.kt)("p",null,"Also you can generate an ",(0,n.kt)("em",{parentName:"p"},"Address")," from a ",(0,n.kt)("em",{parentName:"p"},"Public Key")," provided to you as a string."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Generate Ethereum Address From Public Key as String",src:r(44927).Z,width:"513",height:"221"})),(0,n.kt)("h2",{id:"ethereum-address-checksum"},"Ethereum Address Checksum"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Ethereum address checksum validation")," is a cryptographic function that allows users to verify their ",(0,n.kt)("em",{parentName:"p"},"Blockchain")," addresses to ensure they are valid and don't contain any typos. Your ",(0,n.kt)("em",{parentName:"p"},"Ethereum")," address well as every other Ethereum address in existence has two versions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"One includes uppercase letters called ",(0,n.kt)("em",{parentName:"li"},"Checksummed"),", example: ",(0,n.kt)("inlineCode",{parentName:"li"},"0x07d6A8689F7f869c1B878B0A753980eAadb9379e")),(0,n.kt)("li",{parentName:"ul"},"The other version is called ",(0,n.kt)("em",{parentName:"li"},"Non-checksummed")," address, example: ",(0,n.kt)("inlineCode",{parentName:"li"},"0x07d6a8689f7f869c1b878b0a753980eaadb9379e"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"Generate Ethereum Address From Public Key")," always generates a ",(0,n.kt)("em",{parentName:"p"},"Checksummed")," address.")),(0,n.kt)("h2",{id:"validate-wallet-address"},"Validate Wallet Address"),(0,n.kt)("p",null,"To validate an ",(0,n.kt)("em",{parentName:"p"},"Ethereum")," address simply use the pure function ",(0,n.kt)("inlineCode",{parentName:"p"},"Is Ethereum Address Valid")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Validate Ethereum Address",src:r(69948).Z,width:"765",height:"213"})))}u.isMDXComponent=!0},77186:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/01_wallet_address-08918919cc4d3fd948c945e69f21e4ae.png"},44927:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/02_wallet_address_string-0c318d6410806b5a32269590965c58e9.png"},69948:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/03_address_valid-61afad05c99c7a81b167cd1f2a6a6196.png"}}]);