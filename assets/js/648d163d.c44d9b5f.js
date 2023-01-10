"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[8743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{AA:()=>c,V3:()=>u,h8:()=>o,qh:()=>s,y$:()=>a});n(7462),n(7294);var r=n(3905);const o=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},a=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function i(e,t,n,o){return(0,r.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const s=e=>{let{children:t}=e;return i(0,"Released","#afa","#181")},c=e=>{let{children:t}=e;return i(0,"In Progress","#ffa","#882")},u=e=>{let{children:t}=e;return i(0,"Planned","#aff","#288")}},2292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905)),a=n(4887);const i={sidebar_position:4,title:"Get Transaction Count"},s=void 0,c={unversionedId:"ethereum/ethereum-functions/get-transaction-count",id:"version-1.0.8/ethereum/ethereum-functions/get-transaction-count",title:"Get Transaction Count",description:"eth_getTransactionCount",source:"@site/versioned_docs/version-1.0.8/ethereum/ethereum-functions/get-transaction-count.mdx",sourceDirName:"ethereum/ethereum-functions",slug:"/ethereum/ethereum-functions/get-transaction-count",permalink:"/TSBC-Documentation/docs/1.0.8/ethereum/ethereum-functions/get-transaction-count",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.0.8/ethereum/ethereum-functions/get-transaction-count.mdx",tags:[],version:"1.0.8",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Get Transaction Count"},sidebar:"tutorialSidebar",previous:{title:"Get Gas Price",permalink:"/TSBC-Documentation/docs/1.0.8/ethereum/ethereum-functions/get-gas-price"},next:{title:"Send Raw Transaction",permalink:"/TSBC-Documentation/docs/1.0.8/ethereum/ethereum-functions/send-raw-transaction"}},u={},l=[{value:"eth_getTransactionCount",id:"eth_gettransactioncount",level:2}],p={toc:l};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"eth_gettransactioncount"},"eth_getTransactionCount"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"eth_getTransactionCount")," Returns the number of transactions sent from an address. This function requires input as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"URL ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : RPC endpoint (Blockchain URL)."),(0,o.kt)("li",{parentName:"ul"},"ID ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," : RPC ID(Optional), used when calling multiple asynchronous RPC calls to differentiate your response data from each other."),(0,o.kt)("li",{parentName:"ul"},"Address ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," : The address you want a transaction count from."),(0,o.kt)("li",{parentName:"ul"},"Block Identifier(Optional) ",(0,o.kt)(a.h8,{text:"4",mdxType:"Step"})," : The block number to use which have multiple options:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Earliest")," for the earliest/genesis block."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Latest")," for the latest mined block."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Pending")," for the pending state/transactions.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Get Transaction Count",src:n(2153).Z,width:"1052",height:"304"})),(0,o.kt)("p",null,"The returned ",(0,o.kt)("em",{parentName:"p"},"Response")," is a struct that holds the JSON- info of the header and body of the response as well as https status code."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("em",{parentName:"p"},"Success")," is ",(0,o.kt)("em",{parentName:"p"},"True")," that only means that the response from the ",(0,o.kt)("em",{parentName:"p"},"Blockchain")," was successful only.")),(0,o.kt)("p",null,"If successful, returns the ",(0,o.kt)("em",{parentName:"p"},"Transaction Count")," ",(0,o.kt)(a.h8,{text:"5",mdxType:"Step"})," sent from an address as an integer."))}m.isMDXComponent=!0},2153:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/03_eth_get_transaction-732e64547de3b2a4f49fc40f0e5e164b.png"}}]);