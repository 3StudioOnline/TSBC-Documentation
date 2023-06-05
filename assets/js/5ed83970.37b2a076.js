"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[9033],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(d,".").concat(m)]||p[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>i,V3:()=>l,h8:()=>o,qh:()=>d,y$:()=>a});r(7462),r(7294);var n=r(3905);const o=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},a=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:r}=e;const o="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function c(e,t,r,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const d=e=>{let{children:t}=e;return c(0,"Released","#afa","#181")},l=e=>{let{children:t}=e;return c(0,"Planned","#aff","#288")}},3725:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),a=r(4887);const i={sidebar_position:3,title:"Decode ABI"},c=void 0,d={unversionedId:"ethereum/abi/decode-abi",id:"version-1.2.0/ethereum/abi/decode-abi",title:"Decode ABI",description:"Decode ABI",source:"@site/versioned_docs/version-1.2.0/ethereum/abi/decode-abi.mdx",sourceDirName:"ethereum/abi",slug:"/ethereum/abi/decode-abi",permalink:"/TSBC-Documentation/docs/1.2.0/ethereum/abi/decode-abi",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.2.0/ethereum/abi/decode-abi.mdx",tags:[],version:"1.2.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Decode ABI"},sidebar:"tutorialSidebar",previous:{title:"Encode ABI",permalink:"/TSBC-Documentation/docs/1.2.0/ethereum/abi/encode-abi"},next:{title:"Overview",permalink:"/TSBC-Documentation/docs/1.2.0/Layer2/overview"}},l={},u=[{value:"Decode ABI",id:"decode-abi",level:2}],s={toc:u};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"decode-abi"},"Decode ABI"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Decode ABI")," Decodes the resulting data returned from an ",(0,o.kt)("em",{parentName:"p"},"Ethereum")," RPC-call. This function requires input as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Contract ABI Struct ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : The parsed object generated from ",(0,o.kt)("inlineCode",{parentName:"li"},"Parse ABI From JSON"),"."),(0,o.kt)("li",{parentName:"ul"},"Function Name ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," : The function name that was used to call the ",(0,o.kt)("em",{parentName:"li"},"Ethereum Smart Contract")," function which returned the data that should now be decoded here."),(0,o.kt)("li",{parentName:"ul"},"Data to Decode ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," : Data to decode.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Decode ABI",src:r(5120).Z,width:"593",height:"228"})),(0,o.kt)("p",null,"If the operation is successful, the value ",(0,o.kt)("em",{parentName:"p"},"Decoded ABI Values")," ",(0,o.kt)(a.h8,{text:"4",mdxType:"Step"})," will hold the decoded data returned from an ",(0,o.kt)("em",{parentName:"p"},"Ethereum")," RPC-call."))}p.isMDXComponent=!0},5120:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/04_decode_abi-1fb99f5f857994bb0ca6cee47d82f86a.png"}}]);