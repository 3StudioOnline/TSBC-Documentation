"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[26532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>o,h8:()=>r,qh:()=>l,y$:()=>i});n(87462),n(67294);var a=n(3905);const r=e=>{let{children:t,text:n}=e;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},i=e=>{let{children:t}=e;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function o(e){let{children:t,version:n}=e;const r="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:r,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function s(e,t,n,r){return(0,a.kt)("div",{style:{backgroundColor:r,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return s(0,"Released","#afa","#181")}},95939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(4887);const o={sidebar_position:5,title:"Send Raw Transaction"},s=void 0,l={unversionedId:"ethereum/ethereum-functions/send-raw-transaction",id:"version-2.5.1/ethereum/ethereum-functions/send-raw-transaction",title:"Send Raw Transaction",description:"Signing A Transaction",source:"@site/versioned_docs/version-2.5.1/ethereum/ethereum-functions/send-raw-transaction.mdx",sourceDirName:"ethereum/ethereum-functions",slug:"/ethereum/ethereum-functions/send-raw-transaction",permalink:"/TSBC-Documentation/docs/2.5.1/ethereum/ethereum-functions/send-raw-transaction",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.5.1/ethereum/ethereum-functions/send-raw-transaction.mdx",tags:[],version:"2.5.1",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Send Raw Transaction"},sidebar:"tutorialSidebar",previous:{title:"Get Transaction Count",permalink:"/TSBC-Documentation/docs/2.5.1/ethereum/ethereum-functions/get-transaction-count"},next:{title:"Call",permalink:"/TSBC-Documentation/docs/2.5.1/ethereum/ethereum-functions/eth-call"}},c={},p=[{value:"Signing A Transaction",id:"signing-a-transaction",level:2},{value:"<code>Sign Transaction</code>",id:"sign-transaction",level:3},{value:"<code>Sign Type 2 Transaction</code>",id:"sign-type-2-transaction",level:3},{value:"eth_sendRawTransaction",id:"eth_sendrawtransaction",level:2}],d={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"signing-a-transaction"},"Signing A Transaction"),(0,r.kt)("h3",{id:"sign-transaction"},(0,r.kt)("inlineCode",{parentName:"h3"},"Sign Transaction")),(0,r.kt)("p",null,"Signs a transaction that can be submitted to the network at a later time using ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendRawTransaction")," as long as the nonce and the\nsignature are correct.\nThis function requires input as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Private Key ",(0,r.kt)(i.h8,{text:"1",mdxType:"Step"})," : The ",(0,r.kt)("em",{parentName:"li"},"Private key")," to use for signing the transaction."),(0,r.kt)("li",{parentName:"ul"},"Nonce ",(0,r.kt)(i.h8,{text:"2",mdxType:"Step"})," : Must be equal to the transaction count (the returned value from ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_getTransactionCount"),")."),(0,r.kt)("li",{parentName:"ul"},"Gas Price ",(0,r.kt)(i.h8,{text:"3",mdxType:"Step"})," : The gas price used for each paid gas, in Wei(the returned value from ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_gasPrice"),")."),(0,r.kt)("li",{parentName:"ul"},"Gas Limit ",(0,r.kt)(i.h8,{text:"4",mdxType:"Step"})," : Gas limit provided for the transaction to execute.(A standard transfer of funds will have a static gas limit of 21000 Wei)."),(0,r.kt)("li",{parentName:"ul"},"To Address ",(0,r.kt)(i.h8,{text:"5",mdxType:"Step"})," : The address the transaction is directed to."),(0,r.kt)("li",{parentName:"ul"},"Value ",(0,r.kt)(i.h8,{text:"6",mdxType:"Step"})," : The amount of Ether (in Wei) to send with this transaction."),(0,r.kt)("li",{parentName:"ul"},"Data ",(0,r.kt)(i.h8,{text:"7",mdxType:"Step"})," : The hash of the invoked method signature and encoded parameters (ABI)."),(0,r.kt)("li",{parentName:"ul"},"Chain ID ",(0,r.kt)(i.h8,{text:"8",mdxType:"Step"})," : The Blockchain ID."),(0,r.kt)("li",{parentName:"ul"},"SignDeterministically ",(0,r.kt)(i.h8,{text:"9",mdxType:"Step"})," : If true, the transaction will be signed deterministically which means the same inputs result in the same output. Otherwise, the output will be randomized even for the same inputs.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Signing A Transaction",src:n(19773).Z,width:"917",height:"466"})),(0,r.kt)("p",null,"If the operation is successful, the value ",(0,r.kt)("em",{parentName:"p"},"Signed Transaction")," ",(0,r.kt)(i.h8,{text:"10",mdxType:"Step"})," will hold the encoded and signed transaction data that can be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendRawTransaction"),"."),(0,r.kt)("h3",{id:"sign-type-2-transaction"},(0,r.kt)("inlineCode",{parentName:"h3"},"Sign Type 2 Transaction")),(0,r.kt)("p",null,"Signs a type 2 transaction that can be submitted to the network at a later time using ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendRawTransaction")," as long as the nonce and the\nsignature are correct. This implementation follows EIP-1559 and uses ",(0,r.kt)("inlineCode",{parentName:"p"},"maxPriorityFeePerGas")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"maxFeePerGas")," parameters instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"gasPrice"),".\nThis function requires input as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Private Key ",(0,r.kt)(i.h8,{text:"1",mdxType:"Step"})," : The ",(0,r.kt)("em",{parentName:"li"},"Private key")," to use for signing the transaction."),(0,r.kt)("li",{parentName:"ul"},"Chain ID ",(0,r.kt)(i.h8,{text:"2",mdxType:"Step"})," : The Blockchain ID."),(0,r.kt)("li",{parentName:"ul"},"Nonce ",(0,r.kt)(i.h8,{text:"3",mdxType:"Step"})," : Must be equal to the transaction count (the returned value from ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_getTransactionCount"),")."),(0,r.kt)("li",{parentName:"ul"},"Max Priority Fee Per Gas ",(0,r.kt)(i.h8,{text:"4",mdxType:"Step"})," : The maximum amount the user is willing to pay as a tip to miners (in Wei). Incentivizes prioritization of the transaction."),(0,r.kt)("li",{parentName:"ul"},"Max Fee Per Gas ",(0,r.kt)(i.h8,{text:"5",mdxType:"Step"})," : The maximum total amount the user is willing to pay for the transaction in total (in Wei). Includes base fee and priority fee."),(0,r.kt)("li",{parentName:"ul"},"Gas Limit ",(0,r.kt)(i.h8,{text:"6",mdxType:"Step"})," : Gas limit provided for the transaction to execute.(A standard transfer of funds will have a static gas limit of 21000 Wei)."),(0,r.kt)("li",{parentName:"ul"},"To Address ",(0,r.kt)(i.h8,{text:"7",mdxType:"Step"})," : The address the transaction is directed to."),(0,r.kt)("li",{parentName:"ul"},"Value ",(0,r.kt)(i.h8,{text:"8",mdxType:"Step"})," : The amount of Ether (in Wei) to send with this transaction."),(0,r.kt)("li",{parentName:"ul"},"Data ",(0,r.kt)(i.h8,{text:"9",mdxType:"Step"})," : The hash of the invoked method signature and encoded parameters (ABI).")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Signing A Type 2 Transaction",src:n(90904).Z,width:"1321",height:"536"})),(0,r.kt)("p",null,"If the operation is successful, the value ",(0,r.kt)("em",{parentName:"p"},"Transaction")," ",(0,r.kt)(i.h8,{text:"10",mdxType:"Step"})," will hold the encoded and signed transaction data that can be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendRawTransaction"),"."),(0,r.kt)("h2",{id:"eth_sendrawtransaction"},"eth_sendRawTransaction"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendRawTransaction")," Creates new message call transaction or a contract creation for signed transactions (can be simple value transfers, contract creation, or contract invocation).\nThis function requires input as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"URL ",(0,r.kt)(i.h8,{text:"1",mdxType:"Step"}),": RPC endpoint (Blockchain URL)."),(0,r.kt)("li",{parentName:"ul"},"ID ",(0,r.kt)(i.h8,{text:"2",mdxType:"Step"}),": RPC ID(Optional), used when calling multiple asynchronous RPC calls to differentiate your response data from each other."),(0,r.kt)("li",{parentName:"ul"},"Signed Transaction Data ",(0,r.kt)(i.h8,{text:"3",mdxType:"Step"}),": The encoded and signed transaction data.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sending Raw Transaction",src:n(15262).Z,width:"468",height:"259"})),(0,r.kt)("p",null,"The returned ",(0,r.kt)("em",{parentName:"p"},"Response")," is a struct that holds the JSON- info of the header and body of the response as well as https status code."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("em",{parentName:"p"},"Success")," is ",(0,r.kt)("em",{parentName:"p"},"True")," that only means that the response from the ",(0,r.kt)("em",{parentName:"p"},"Blockchain")," was successful only.")),(0,r.kt)("p",null,"If successful, returns the ",(0,r.kt)("em",{parentName:"p"},"Transaction Hash")," ",(0,r.kt)(i.h8,{text:"4",mdxType:"Step"}),", or the zero hash if the transaction is not yet available."))}u.isMDXComponent=!0},19773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/04_sign_transaction-2c123fadc74d1b6fba679b9426ba17b7.png"},15262:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/05_eth_send_transaction-997109abaf5b615febf567029a848441.png"},90904:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sign_type_2_transaction-242791b2629398a27b27ff6f8fd79ece.png"}}]);