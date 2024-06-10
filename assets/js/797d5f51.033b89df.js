"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[85610],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>i,h8:()=>o,qh:()=>c,y$:()=>a});r(87462),r(67294);var n=r(3905);const o=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},a=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:r}=e;const o="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function s(e,t,r,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return s(0,"Released","#afa","#181")}},25512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905)),a=r(4887);const i={sidebar_position:3,title:"Get Gas Price"},s=void 0,c={unversionedId:"ethereum/ethereum-functions/get-gas-price",id:"version-2.2.1/ethereum/ethereum-functions/get-gas-price",title:"Get Gas Price",description:"eth_gasPrice",source:"@site/versioned_docs/version-2.2.1/ethereum/ethereum-functions/get-gas-price.mdx",sourceDirName:"ethereum/ethereum-functions",slug:"/ethereum/ethereum-functions/get-gas-price",permalink:"/TSBC-Documentation/docs/2.2.1/ethereum/ethereum-functions/get-gas-price",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.2.1/ethereum/ethereum-functions/get-gas-price.mdx",tags:[],version:"2.2.1",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Get Gas Price"},sidebar:"tutorialSidebar",previous:{title:"Get Balance",permalink:"/TSBC-Documentation/docs/2.2.1/ethereum/ethereum-functions/get-balance"},next:{title:"Get Transaction Count",permalink:"/TSBC-Documentation/docs/2.2.1/ethereum/ethereum-functions/get-transaction-count"}},u={},l=[{value:"eth_gasPrice",id:"eth_gasprice",level:2}],p={toc:l};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"eth_gasprice"},"eth_gasPrice"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"eth_gasPrice")," Returns the current gas price on the network in wei. This function requires input as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"URL ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : RPC endpoint (Blockchain URL)."),(0,o.kt)("li",{parentName:"ul"},"ID ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," : RPC ID(Optional), used when calling multiple asynchronous RPC calls to differentiate your response data from each other.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Eth Get Gas Price",src:r(80862).Z,width:"812",height:"256"})),(0,o.kt)("p",null,"The returned ",(0,o.kt)("em",{parentName:"p"},"Response")," is a struct that holds the JSON- info of the header and body of the response as well as https status code."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("em",{parentName:"p"},"Success")," is ",(0,o.kt)("em",{parentName:"p"},"True")," that only means that the response from the ",(0,o.kt)("em",{parentName:"p"},"Blockchain")," was successful only.")),(0,o.kt)("p",null,"If successful, returns the current ",(0,o.kt)("em",{parentName:"p"},"Gas Price")," ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," on the network in wei."))}m.isMDXComponent=!0},80862:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/02_eth_get_gas_price-2ace81a8d7d55022503b4ff71e3a6094.png"}}]);