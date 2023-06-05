"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[6795],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>i,V3:()=>l,h8:()=>o,qh:()=>p,y$:()=>a});r(7462),r(7294);var n=r(3905);const o=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},a=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:r}=e;const o="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function s(e,t,r,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const p=e=>{let{children:t}=e;return s(0,"Released","#afa","#181")},l=e=>{let{children:t}=e;return s(0,"Planned","#aff","#288")}},2794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905)),a=r(4887);const i={sidebar_position:3,title:"Query NFT info"},s=void 0,p={unversionedId:"Layer2/Loopring/query-nft-info",id:"version-1.1.0/Layer2/Loopring/query-nft-info",title:"Query NFT info",description:"Sends a REST-API call to Loopring to query NFT info by Loopring's nftData. This function requires input as follows:",source:"@site/versioned_docs/version-1.1.0/Layer2/Loopring/query-nft-info.mdx",sourceDirName:"Layer2/Loopring",slug:"/Layer2/Loopring/query-nft-info",permalink:"/TSBC-Documentation/docs/1.1.0/Layer2/Loopring/query-nft-info",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.1.0/Layer2/Loopring/query-nft-info.mdx",tags:[],version:"1.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Query NFT info"},sidebar:"tutorialSidebar",previous:{title:"Query NFT holders",permalink:"/TSBC-Documentation/docs/1.1.0/Layer2/Loopring/query-nft-holders"},next:{title:"FAQ",permalink:"/TSBC-Documentation/docs/1.1.0/faq"}},l={},c=[],u={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sends a ",(0,o.kt)("em",{parentName:"p"},"REST-API")," call to ",(0,o.kt)("inlineCode",{parentName:"p"},"Loopring")," to query NFT info by ",(0,o.kt)("inlineCode",{parentName:"p"},"Loopring's")," nftData. This function requires input as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"URL ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : The URL to send the request to."),(0,o.kt)("li",{parentName:"ul"},"ApiKey ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," : API Key."),(0,o.kt)("li",{parentName:"ul"},"NftData ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," : The Loopring's NFT token data identifier which is a hash string of NFT token address and ",(0,o.kt)("em",{parentName:"li"},"NFT_ID"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Query NFT holders",src:r(5696).Z,width:"1368",height:"622"})),(0,o.kt)("p",null,"The returned ",(0,o.kt)("em",{parentName:"p"},"Response")," ",(0,o.kt)(a.h8,{text:"4",mdxType:"Step"})," is a struct that holds the response data for the HTTP request sent to ",(0,o.kt)("inlineCode",{parentName:"p"},"Loopring"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("em",{parentName:"p"},"Success")," is ",(0,o.kt)("em",{parentName:"p"},"True")," it only means that there was no error on the data transport layer (HTTP).\nYou also need to check the response body to determine the actual outcome of the call.")))}d.isMDXComponent=!0},5696:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/query-nft-info-302f9a1ffac80227c02d7a68acde69d4.png"}}]);