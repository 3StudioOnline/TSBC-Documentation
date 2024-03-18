"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[8678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>s,h8:()=>o,qh:()=>l,y$:()=>a});n(87462),n(67294);var r=n(3905);const o=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},a=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function s(e){let{children:t,version:n}=e;const o="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function i(e,t,n,o){return(0,r.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return i(0,"Released","#afa","#181")}},75744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(4887);const s={sidebar_position:10,title:"Get Logs"},i=void 0,l={unversionedId:"ethereum/ethereum-functions/get-logs",id:"version-2.5.0/ethereum/ethereum-functions/get-logs",title:"Get Logs",description:"eth_getLogs",source:"@site/versioned_docs/version-2.5.0/ethereum/ethereum-functions/get-logs.mdx",sourceDirName:"ethereum/ethereum-functions",slug:"/ethereum/ethereum-functions/get-logs",permalink:"/TSBC-Documentation/docs/ethereum/ethereum-functions/get-logs",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.5.0/ethereum/ethereum-functions/get-logs.mdx",tags:[],version:"2.5.0",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Get Logs"},sidebar:"tutorialSidebar",previous:{title:"Get Transaction By Hash",permalink:"/TSBC-Documentation/docs/ethereum/ethereum-functions/get-transaction-by-hash"},next:{title:"Contract ABI Data Asset",permalink:"/TSBC-Documentation/docs/ethereum/abi/parse-abi"}},c={},p=[{value:"eth_getLogs",id:"eth_getlogs",level:2}],u={toc:p};function m(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"eth_getlogs"},"eth_getLogs"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"eth_getLogs")," Returns an array of all logs that are records of smart contract-generated events on the network and\ncontain valuable information about transactions and smart contract interactions that match a given filter object.\nThis function requires input as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"URL ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : RPC endpoint (Blockchain URL)."),(0,o.kt)("li",{parentName:"ul"},"ID ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," : RPC ID(Optional), used when calling multiple asynchronous RPC calls to differentiate your response data from each other."),(0,o.kt)("li",{parentName:"ul"},"HttpHeaders ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," : (Optional) Additional HTTP headers that will be appended to the request."),(0,o.kt)("li",{parentName:"ul"},"LogFilterObjects ",(0,o.kt)(a.h8,{text:"4",mdxType:"Step"})," : The filter parameters to apply.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Eth Get Logs",src:n(31527).Z,width:"638",height:"388"})),(0,o.kt)("p",null,"The returned ",(0,o.kt)("em",{parentName:"p"},"Response")," ",(0,o.kt)(a.h8,{text:"5",mdxType:"Step"})," is a struct that holds the JSON- info of the header and body of the response as well as https status code."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("em",{parentName:"p"},"Success")," is ",(0,o.kt)("em",{parentName:"p"},"True")," that only means that the response from the ",(0,o.kt)("em",{parentName:"p"},"Blockchain")," was successful only."),(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("em",{parentName:"p"},"Logs Found")," ",(0,o.kt)(a.h8,{text:"6",mdxType:"Step"})," is ",(0,o.kt)("em",{parentName:"p"},"True")," that only means that the ",(0,o.kt)("em",{parentName:"p"},"Response")," was successful and the ",(0,o.kt)("em",{parentName:"p"},"Logs Data")," was found.")),(0,o.kt)("p",null,"If successful, returns the ",(0,o.kt)("em",{parentName:"p"},"Log Objects")," array ",(0,o.kt)(a.h8,{text:"7",mdxType:"Step"})," which contains the log objects."))}m.isMDXComponent=!0},31527:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/eth_get-logs-1a4e706eb34e1aeee8d240e15fb51872.png"}}]);