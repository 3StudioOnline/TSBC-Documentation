"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[619],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{AA:()=>c,V3:()=>l,h8:()=>o,qh:()=>s,y$:()=>a});r(7462),r(7294);var n=r(3905);const o=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},a=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function i(e,t,r,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const s=e=>{let{children:t}=e;return i(0,"Released","#afa","#181")},c=e=>{let{children:t}=e;return i(0,"In Progress","#ffa","#882")},l=e=>{let{children:t}=e;return i(0,"Planned","#aff","#288")}},4013:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905)),a=r(4887);const i={sidebar_position:1,title:"Parse ABI From JSON"},s=void 0,c={unversionedId:"ethereum/abi/parse-abi",id:"version-1.0.7/ethereum/abi/parse-abi",title:"Parse ABI From JSON",description:"Contract ABI",source:"@site/versioned_docs/version-1.0.7/ethereum/abi/parse-abi.mdx",sourceDirName:"ethereum/abi",slug:"/ethereum/abi/parse-abi",permalink:"/TSBC-Documentation/docs/ethereum/abi/parse-abi",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.0.7/ethereum/abi/parse-abi.mdx",tags:[],version:"1.0.7",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Parse ABI From JSON"},sidebar:"tutorialSidebar",previous:{title:"Call",permalink:"/TSBC-Documentation/docs/ethereum/ethereum-functions/eth-call"},next:{title:"Encode ABI",permalink:"/TSBC-Documentation/docs/ethereum/abi/encode-abi"}},l={},p=[{value:"Contract ABI",id:"contract-abi",level:2},{value:"Parse ABI From JSON",id:"parse-abi-from-json",level:2}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"contract-abi"},"Contract ABI"),(0,o.kt)("p",null,"To interact with a smart contract you need to be able to encode and decode the contract functions and their variables. To do so you must either\nstore the contracts ABI or get it from ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/"},"Ether Scan")," for verified contracts.\nMore on the subject ",(0,o.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/develop/abi-spec.html"},"here"),"."),(0,o.kt)("h2",{id:"parse-abi-from-json"},"Parse ABI From JSON"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Parse ABI from JSON")," Tries to parse an Ethereum Smart Contract ABI from the given JSON. This function requires input as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Contract ABI JSON ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : The Ethereum Smart Contract ABI in JSON format to parse.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Parse ABI From JSON",src:r(3549).Z,width:"516",height:"228"})),(0,o.kt)("p",null,"If the operation is successful, the value ",(0,o.kt)("em",{parentName:"p"},"Contract ABI")," ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," will hold the function names with it's required arguments and it's return values."),(0,o.kt)("p",null,"Example of how the ABI looks like, this if from ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D#code"},"Bored Apes Yacht Club")," contract address."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Contract ABI Example",src:r(6349).Z,width:"1619",height:"1002"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"It's recommended to store the value ",(0,o.kt)("em",{parentName:"p"},"Contract ABI"),", since it will be used for encoding and decoding function arguments.")))}d.isMDXComponent=!0},3549:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/01_parse_json-364021a7f7d7f87086c92321e02d75d6.png"},6349:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/02_contract_abi-180572ec6545d203d3855b32b83e0fe6.png"}}]);