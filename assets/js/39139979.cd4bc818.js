"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[62335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>i,h8:()=>o,qh:()=>l,y$:()=>a});r(87462),r(67294);var n=r(3905);const o=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},a=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:r}=e;const o="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function s(e,t,r,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return s(0,"Released","#afa","#181")}},23675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),a=r(4887);const i={sidebar_position:2,title:"Query NFT holders"},s=void 0,l={unversionedId:"Layer2/Loopring/query-nft-holders",id:"version-2.4.0/Layer2/Loopring/query-nft-holders",title:"Query NFT holders",description:"Sends a REST-API call to Loopring to query NFT holders by Loopring's nftData. This function requires input as follows:",source:"@site/versioned_docs/version-2.4.0/Layer2/Loopring/query-nft-holders.mdx",sourceDirName:"Layer2/Loopring",slug:"/Layer2/Loopring/query-nft-holders",permalink:"/TSBC-Documentation/docs/2.4.0/Layer2/Loopring/query-nft-holders",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.4.0/Layer2/Loopring/query-nft-holders.mdx",tags:[],version:"2.4.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Query NFT holders"},sidebar:"tutorialSidebar",previous:{title:"Get users NFT balance",permalink:"/TSBC-Documentation/docs/2.4.0/Layer2/Loopring/get-users-nft-balance"},next:{title:"Query NFT info",permalink:"/TSBC-Documentation/docs/2.4.0/Layer2/Loopring/query-nft-info"}},p={},u=[],c={toc:u};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sends a ",(0,o.kt)("em",{parentName:"p"},"REST-API")," call to ",(0,o.kt)("inlineCode",{parentName:"p"},"Loopring")," to query NFT holders by ",(0,o.kt)("inlineCode",{parentName:"p"},"Loopring's")," nftData. This function requires input as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"URL ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : The URL to send the request to."),(0,o.kt)("li",{parentName:"ul"},"ApiKey ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," : API Key."),(0,o.kt)("li",{parentName:"ul"},"NftData ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," : The Loopring's NFT token data identifier which is a hash string of NFT token address and ",(0,o.kt)("em",{parentName:"li"},"NFT_ID"),"."),(0,o.kt)("li",{parentName:"ul"},"Offset ",(0,o.kt)(a.h8,{text:"4",mdxType:"Step"})," : Number of records to skip."),(0,o.kt)("li",{parentName:"ul"},"Limit ",(0,o.kt)(a.h8,{text:"5",mdxType:"Step"})," : Number of records to return.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Query NFT holders",src:r(1885).Z,width:"1426",height:"827"})),(0,o.kt)("p",null,"The returned ",(0,o.kt)("em",{parentName:"p"},"Response")," ",(0,o.kt)(a.h8,{text:"6",mdxType:"Step"})," is a struct that holds the response data for the HTTP request sent to ",(0,o.kt)("inlineCode",{parentName:"p"},"Loopring"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("em",{parentName:"p"},"Success")," is ",(0,o.kt)("em",{parentName:"p"},"True")," it only means that there was no error on the data transport layer (HTTP).\nYou also need to check the response body to determine the actual outcome of the call.")))}d.isMDXComponent=!0},1885:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/query-nft-holders-d77300a878efe2764bf0fc4e88e7d293.png"}}]);