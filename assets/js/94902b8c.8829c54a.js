"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[5992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=u(n),m=a,d=h["".concat(c,".").concat(m)]||h[m]||p[m]||o;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>s,V3:()=>u,h8:()=>a,qh:()=>c,y$:()=>o});n(87462),n(67294);var r=n(3905);const a=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function s(e){let{children:t,version:n}=e;const a="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function i(e,t,n,a){return(0,r.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return i(0,"Released","#afa","#181")},u=e=>{let{children:t}=e;return i(0,"Planned","#aff","#288")}},5057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905)),o=n(4887);const s={sidebar_position:9,title:"Get Transaction By Hash"},i=void 0,c={unversionedId:"ethereum/ethereum-functions/get-transaction-by-hash",id:"version-2.2.1/ethereum/ethereum-functions/get-transaction-by-hash",title:"Get Transaction By Hash",description:"eth_getTransactionByHash",source:"@site/versioned_docs/version-2.2.1/ethereum/ethereum-functions/get-transaction-by-hash.mdx",sourceDirName:"ethereum/ethereum-functions",slug:"/ethereum/ethereum-functions/get-transaction-by-hash",permalink:"/TSBC-Documentation/docs/ethereum/ethereum-functions/get-transaction-by-hash",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.2.1/ethereum/ethereum-functions/get-transaction-by-hash.mdx",tags:[],version:"2.2.1",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Get Transaction By Hash"},sidebar:"tutorialSidebar",previous:{title:"Get Block Number",permalink:"/TSBC-Documentation/docs/ethereum/ethereum-functions/get-block-number"},next:{title:"Contract ABI Data Asset",permalink:"/TSBC-Documentation/docs/ethereum/abi/parse-abi"}},u={},l=[{value:"eth_getTransactionByHash",id:"eth_gettransactionbyhash",level:2}],p={toc:l};function h(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"eth_gettransactionbyhash"},"eth_getTransactionByHash"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"eth_getTransactionByHash")," Gets the information about a transaction requested by transaction hash. This function requires input as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"URL ",(0,a.kt)(o.h8,{text:"1",mdxType:"Step"})," : RPC endpoint (Blockchain URL)."),(0,a.kt)("li",{parentName:"ul"},"ID ",(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," : RPC ID(Optional), used when calling multiple asynchronous RPC calls to differentiate your response data from each other."),(0,a.kt)("li",{parentName:"ul"},"Hash ",(0,a.kt)(o.h8,{text:"3",mdxType:"Step"})," : Transaction hash.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Eth Get Transaction By Hash",src:n(10131).Z,width:"981",height:"681"})),(0,a.kt)("p",null,"The returned ",(0,a.kt)("em",{parentName:"p"},"Response")," ",(0,a.kt)(o.h8,{text:"4",mdxType:"Step"})," is a struct that holds the JSON- info of the header and body of the response as well as https status code."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("em",{parentName:"p"},"Success")," is ",(0,a.kt)("em",{parentName:"p"},"True")," that only means that the response from the ",(0,a.kt)("em",{parentName:"p"},"Blockchain")," was successful only."),(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("em",{parentName:"p"},"Transaction Found")," is ",(0,a.kt)("em",{parentName:"p"},"True")," that only means that the ",(0,a.kt)("em",{parentName:"p"},"Response")," was successful and the ",(0,a.kt)("em",{parentName:"p"},"Transaction Info")," was found.")),(0,a.kt)("p",null,"If successful, returns the ",(0,a.kt)("em",{parentName:"p"},"Transaction Info")," ",(0,a.kt)(o.h8,{text:"6",mdxType:"Step"})," which contains transaction data of the given hash."))}h.isMDXComponent=!0},10131:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/eth_get-transaction-by-hash-e5ee93cf63d191fffd1b2921d122b9a0.png"}}]);