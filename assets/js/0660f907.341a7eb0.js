"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[4389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>a,V3:()=>c,h8:()=>o,qh:()=>u,y$:()=>i});n(87462),n(67294);var r=n(3905);const o=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},i=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function a(e){let{children:t,version:n}=e;const o="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,o){return(0,r.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const u=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")},c=e=>{let{children:t}=e;return l(0,"Planned","#aff","#288")}},54038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));n(4887);const i={sidebar_position:1,title:"Ethereum Function Implementation"},a=void 0,l={unversionedId:"ethereum/ethereum-functions/eth-function-implementation",id:"version-2.2.0/ethereum/ethereum-functions/eth-function-implementation",title:"Ethereum Function Implementation",description:"General Functions Implementation",source:"@site/versioned_docs/version-2.2.0/ethereum/ethereum-functions/eth-function-implementation.mdx",sourceDirName:"ethereum/ethereum-functions",slug:"/ethereum/ethereum-functions/eth-function-implementation",permalink:"/TSBC-Documentation/docs/ethereum/ethereum-functions/eth-function-implementation",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.2.0/ethereum/ethereum-functions/eth-function-implementation.mdx",tags:[],version:"2.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Ethereum Function Implementation"},sidebar:"tutorialSidebar",previous:{title:"Uint256",permalink:"/TSBC-Documentation/docs/quick-start/uint256"},next:{title:"Get Balance",permalink:"/TSBC-Documentation/docs/ethereum/ethereum-functions/get-balance"}},u={},c=[{value:"General Functions Implementation",id:"general-functions-implementation",level:2}],s={toc:c};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"general-functions-implementation"},"General Functions Implementation"),(0,o.kt)("p",null,"All ",(0,o.kt)("em",{parentName:"p"},"Ethereum")," functions that are supported in the plugin have 2 versions of them as shown in the image below.\nThe first one have a ",(0,o.kt)("em",{parentName:"p"},"Response Delegate")," as ",(0,o.kt)("em",{parentName:"p"},"Call-back"),",and the other one have ",(0,o.kt)("em",{parentName:"p"},"Response Delegate")," as ",(0,o.kt)("em",{parentName:"p"},"Async Task"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"General Functions Implementation",src:n(12319).Z,width:"529",height:"476"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Async")," functions works better for use cases where there is no parallel calls. While ",(0,o.kt)("em",{parentName:"p"},"Call-backs")," works best if you're querying multiple calls at the\nsame time and not putting them in queue."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Both versions take the same input and returns the same output.")))}m.isMDXComponent=!0},12319:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/01_eth_general_functions-bfa9586e33a8537b66cbe87e0e294338.png"}}]);