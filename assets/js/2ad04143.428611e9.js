"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[8733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>i,h8:()=>a,qh:()=>c,y$:()=>o});n(87462),n(67294);var r=n(3905);const a=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:n}=e;const a="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,a){return(0,r.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")}},51912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(4887);const i={sidebar_position:2,title:"Get Balance"},l=void 0,c={unversionedId:"ethereum/ethereum-functions/get-balance",id:"version-1.0.8/ethereum/ethereum-functions/get-balance",title:"Get Balance",description:"eth_getBalance",source:"@site/versioned_docs/version-1.0.8/ethereum/ethereum-functions/get-balance.mdx",sourceDirName:"ethereum/ethereum-functions",slug:"/ethereum/ethereum-functions/get-balance",permalink:"/TSBC-Documentation/docs/1.0.8/ethereum/ethereum-functions/get-balance",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.0.8/ethereum/ethereum-functions/get-balance.mdx",tags:[],version:"1.0.8",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Get Balance"},sidebar:"tutorialSidebar",previous:{title:"Ethereum Function Implementation",permalink:"/TSBC-Documentation/docs/1.0.8/ethereum/ethereum-functions/eth-function-implementation"},next:{title:"Get Gas Price",permalink:"/TSBC-Documentation/docs/1.0.8/ethereum/ethereum-functions/get-gas-price"}},s={},u=[{value:"eth_getBalance",id:"eth_getbalance",level:2}],p={toc:u};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"eth_getbalance"},"eth_getBalance"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"eth_getBalance")," Returns the balance of given account address in wei. This function requires input as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"URL ",(0,a.kt)(o.h8,{text:"1",mdxType:"Step"})," : RPC endpoint (Blockchain URL)."),(0,a.kt)("li",{parentName:"ul"},"ID ",(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," : RPC ID(Optional), used when calling multiple asynchronous RPC calls to differentiate your response data from each other."),(0,a.kt)("li",{parentName:"ul"},"Account Address ",(0,a.kt)(o.h8,{text:"3",mdxType:"Step"})," : The address to check for balance."),(0,a.kt)("li",{parentName:"ul"},"Block Identifier(Optional) ",(0,a.kt)(o.h8,{text:"4",mdxType:"Step"})," : The block number to use which have multiple options:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Earliest")," for the earliest/genesis block."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Latest")," for the latest mined block."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Pending")," for the pending state/transactions.")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Eth Get Balance",src:n(64277).Z,width:"1009",height:"355"})),(0,a.kt)("p",null,"The returned ",(0,a.kt)("em",{parentName:"p"},"Response")," is a struct that holds the JSON- info of the header and body of the response as well as https status code."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("em",{parentName:"p"},"Success")," is ",(0,a.kt)("em",{parentName:"p"},"True")," that only means that the response from the ",(0,a.kt)("em",{parentName:"p"},"Blockchain")," was successful only.")),(0,a.kt)("p",null,"If successful, returns the ",(0,a.kt)("em",{parentName:"p"},"Balance")," ",(0,a.kt)(o.h8,{text:"5",mdxType:"Step"})," balance of given account address in wei."))}m.isMDXComponent=!0},64277:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/02_eth_get_balance-feea8d0a34eb6d2785decc34217c1658.png"}}]);