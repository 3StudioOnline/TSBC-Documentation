"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[7430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>i,h8:()=>a,qh:()=>s,y$:()=>o});n(87462),n(67294);var r=n(3905);const a=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:n}=e;const a="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function c(e,t,n,a){return(0,r.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const s=e=>{let{children:t}=e;return c(0,"Released","#afa","#181")}},98555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(4887);const i={sidebar_position:7,title:"Get Transaction Receipt"},c=void 0,s={unversionedId:"ethereum/ethereum-functions/get-transaction-receipt",id:"version-2.3.1/ethereum/ethereum-functions/get-transaction-receipt",title:"Get Transaction Receipt",description:"eth_getTransactionReceipt",source:"@site/versioned_docs/version-2.3.1/ethereum/ethereum-functions/get-transaction-receipt.mdx",sourceDirName:"ethereum/ethereum-functions",slug:"/ethereum/ethereum-functions/get-transaction-receipt",permalink:"/TSBC-Documentation/docs/2.3.1/ethereum/ethereum-functions/get-transaction-receipt",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.3.1/ethereum/ethereum-functions/get-transaction-receipt.mdx",tags:[],version:"2.3.1",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Get Transaction Receipt"},sidebar:"tutorialSidebar",previous:{title:"Call",permalink:"/TSBC-Documentation/docs/2.3.1/ethereum/ethereum-functions/eth-call"},next:{title:"Get Block Number",permalink:"/TSBC-Documentation/docs/2.3.1/ethereum/ethereum-functions/get-block-number"}},p={},u=[{value:"eth_getTransactionReceipt",id:"eth_gettransactionreceipt",level:2}],l={toc:u};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"eth_gettransactionreceipt"},"eth_getTransactionReceipt"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"eth_getTransactionReceipt")," Returns the receipt of a transaction by transaction hash. This function requires input as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"URL ",(0,a.kt)(o.h8,{text:"1",mdxType:"Step"})," : RPC endpoint (Blockchain URL)."),(0,a.kt)("li",{parentName:"ul"},"ID ",(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," : RPC ID(Optional), used when calling multiple asynchronous RPC calls to differentiate your response data from each other."),(0,a.kt)("li",{parentName:"ul"},"Hash ",(0,a.kt)(o.h8,{text:"3",mdxType:"Step"})," : Transaction hash.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Eth Get Transaction Receipt",src:n(60504).Z,width:"1178",height:"778"})),(0,a.kt)("p",null,"The returned ",(0,a.kt)("em",{parentName:"p"},"Response")," ",(0,a.kt)(o.h8,{text:"4",mdxType:"Step"})," is a struct that holds the JSON- info of the header and body of the response as well as https status code."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("em",{parentName:"p"},"Success")," is ",(0,a.kt)("em",{parentName:"p"},"True")," that only means that the response from the ",(0,a.kt)("em",{parentName:"p"},"Blockchain")," was successful only."),(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("em",{parentName:"p"},"Receipt Found")," is ",(0,a.kt)("em",{parentName:"p"},"True")," that only means that the ",(0,a.kt)("em",{parentName:"p"},"Response")," was successful and the ",(0,a.kt)("em",{parentName:"p"},"Transaction Receipt")," was found.")),(0,a.kt)("p",null,"If successful, returns the ",(0,a.kt)("em",{parentName:"p"},"Transaction Receipt")," ",(0,a.kt)(o.h8,{text:"6",mdxType:"Step"})," which contains transaction receipt data of the given hash."))}m.isMDXComponent=!0},60504:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/eth_get-transaction-receipt-e20680f9fb6f41eb9dfaf75aa8ba1a01.png"}}]);