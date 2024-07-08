"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[5372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>c,h8:()=>o,qh:()=>l,y$:()=>a});n(87462),n(67294);var r=n(3905);const o=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},a=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function c(e){let{children:t,version:n}=e;const o="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function i(e,t,n,o){return(0,r.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return i(0,"Released","#afa","#181")}},90210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),a=n(4887);const c={sidebar_position:8,title:"Get Block Number"},i=void 0,l={unversionedId:"blockchain/ethereum-functions/methods/get-block-number",id:"version-3.1.1/blockchain/ethereum-functions/methods/get-block-number",title:"Get Block Number",description:"eth_blockNumber",source:"@site/versioned_docs/version-3.1.1/blockchain/ethereum-functions/methods/get-block-number.mdx",sourceDirName:"blockchain/ethereum-functions/methods",slug:"/blockchain/ethereum-functions/methods/get-block-number",permalink:"/TSBC-Documentation/docs/blockchain/ethereum-functions/methods/get-block-number",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-3.1.1/blockchain/ethereum-functions/methods/get-block-number.mdx",tags:[],version:"3.1.1",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Get Block Number"},sidebar:"tutorialSidebar",previous:{title:"Get Transaction Receipt",permalink:"/TSBC-Documentation/docs/blockchain/ethereum-functions/methods/get-transaction-receipt"},next:{title:"Get Transaction By Hash",permalink:"/TSBC-Documentation/docs/blockchain/ethereum-functions/methods/get-transaction-by-hash"}},s={},u=[{value:"eth_blockNumber",id:"eth_blocknumber",level:2}],m={toc:u};function p(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"eth_blocknumber"},"eth_blockNumber"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"eth_blockNumber")," Gets the number of the most recent block. This function requires input as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"URL ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : RPC endpoint (Blockchain URL)."),(0,o.kt)("li",{parentName:"ul"},"ID ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," : RPC ID(Optional), used when calling multiple asynchronous RPC calls to differentiate your response data from each other.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Eth Get Block Number",src:n(81622).Z,width:"872",height:"575"})),(0,o.kt)("p",null,"The returned ",(0,o.kt)("em",{parentName:"p"},"Response")," ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," is a struct that holds the JSON- info of the header and body of the response as well as https status code."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("em",{parentName:"p"},"Success")," is ",(0,o.kt)("em",{parentName:"p"},"True")," that only means that the response from the ",(0,o.kt)("em",{parentName:"p"},"Blockchain")," was successful only.")),(0,o.kt)("p",null,"If successful, returns an integer value of the latest ",(0,o.kt)("em",{parentName:"p"},"Block Number")," ",(0,o.kt)(a.h8,{text:"4",mdxType:"Step"}),"."))}p.isMDXComponent=!0},81622:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/eth_block-number-4789763a1c55960a540f28d243a151d9.png"}}]);