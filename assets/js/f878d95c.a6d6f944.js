"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[6190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>i,h8:()=>a,qh:()=>s,y$:()=>o});n(87462),n(67294);var r=n(3905);const a=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:n}=e;const a="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,a){return(0,r.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const s=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")}},71488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(4887);const i={sidebar_position:6,title:"Call"},l=void 0,s={unversionedId:"ethereum/ethereum-functions/eth-call",id:"version-1.2.0/ethereum/ethereum-functions/eth-call",title:"Call",description:"eth_call",source:"@site/versioned_docs/version-1.2.0/ethereum/ethereum-functions/eth-call.mdx",sourceDirName:"ethereum/ethereum-functions",slug:"/ethereum/ethereum-functions/eth-call",permalink:"/TSBC-Documentation/docs/1.2.0/ethereum/ethereum-functions/eth-call",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.2.0/ethereum/ethereum-functions/eth-call.mdx",tags:[],version:"1.2.0",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Call"},sidebar:"tutorialSidebar",previous:{title:"Send Raw Transaction",permalink:"/TSBC-Documentation/docs/1.2.0/ethereum/ethereum-functions/send-raw-transaction"},next:{title:"Get Transaction Receipt",permalink:"/TSBC-Documentation/docs/1.2.0/ethereum/ethereum-functions/get-transaction-receipt"}},c={},u=[{value:"eth_call",id:"eth_call",level:2}],p={toc:u};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"eth_call"},"eth_call"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"eth_call")," Executes a new message call immediately without creating a transaction on the block chain. This function requires input as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"URL ",(0,a.kt)(o.h8,{text:"1",mdxType:"Step"})," : RPC endpoint (Blockchain URL)."),(0,a.kt)("li",{parentName:"ul"},"ID ",(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," : RPC ID(Optional), used when calling multiple asynchronous RPC calls to differentiate your response data from each other."),(0,a.kt)("li",{parentName:"ul"},"From Address ",(0,a.kt)(o.h8,{text:"3",mdxType:"Step"})," : The address the transaction is sent from."),(0,a.kt)("li",{parentName:"ul"},"To Address ",(0,a.kt)(o.h8,{text:"4",mdxType:"Step"})," : The address the transaction is directed to."),(0,a.kt)("li",{parentName:"ul"},"Data ",(0,a.kt)(o.h8,{text:"5",mdxType:"Step"})," : The hash of the invoked method signature and encoded parameters (ABI)."),(0,a.kt)("li",{parentName:"ul"},"Block Identifier(Optional) ",(0,a.kt)(o.h8,{text:"6",mdxType:"Step"})," : The block number to use which have multiple options:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Earliest")," for the earliest/genesis block."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Latest")," for the latest mined block."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Pending")," for the pending state/transactions.")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Eth Call",src:n(25071).Z,width:"1054",height:"336"})),(0,a.kt)("p",null,"The returned ",(0,a.kt)("em",{parentName:"p"},"Response")," is a struct that holds the JSON- info of the header and body of the response as well as https status code."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("em",{parentName:"p"},"Success")," is ",(0,a.kt)("em",{parentName:"p"},"True")," that only means that the response from the ",(0,a.kt)("em",{parentName:"p"},"Blockchain")," was successful only.")),(0,a.kt)("p",null,"If successful, returns the ",(0,a.kt)("em",{parentName:"p"},"Response Data")," ",(0,a.kt)(o.h8,{text:"5",mdxType:"Step"})," which is the value of executed contract."))}d.isMDXComponent=!0},25071:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/06_eth_call-f63c7e26c76416606c02dada9d1c334e.png"}}]);