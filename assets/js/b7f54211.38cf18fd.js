"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[7301],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>i,V3:()=>p,h8:()=>o,qh:()=>l,y$:()=>a});r(87462),r(67294);var n=r(3905);const o=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},a=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:r}=e;const o="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function s(e,t,r,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return s(0,"Released","#afa","#181")},p=e=>{let{children:t}=e;return s(0,"Planned","#aff","#288")}},27289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),a=r(4887);const i={sidebar_position:1,title:"Get users NFT balance"},s=void 0,l={unversionedId:"Layer2/Loopring/get-users-nft-balance",id:"version-2.3.1/Layer2/Loopring/get-users-nft-balance",title:"Get users NFT balance",description:"Sends a REST-API call to Loopring to get users NFT balance, besides amount, it also includes tokenId and nftData.",source:"@site/versioned_docs/version-2.3.1/Layer2/Loopring/get-users-nft-balance.mdx",sourceDirName:"Layer2/Loopring",slug:"/Layer2/Loopring/get-users-nft-balance",permalink:"/TSBC-Documentation/docs/Layer2/Loopring/get-users-nft-balance",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.3.1/Layer2/Loopring/get-users-nft-balance.mdx",tags:[],version:"2.3.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Get users NFT balance"},sidebar:"tutorialSidebar",previous:{title:"Get details of an asset",permalink:"/TSBC-Documentation/docs/Layer2/ImmutableX/get-details-asset"},next:{title:"Query NFT holders",permalink:"/TSBC-Documentation/docs/Layer2/Loopring/query-nft-holders"}},p={},c=[],d={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sends a ",(0,o.kt)("em",{parentName:"p"},"REST-API")," call to ",(0,o.kt)("inlineCode",{parentName:"p"},"Loopring")," to get users NFT balance, besides amount, it also includes tokenId and nftData.\nThis function requires input as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"URL ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : The URL to send the request to."),(0,o.kt)("li",{parentName:"ul"},"ApiKey ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," : API Key."),(0,o.kt)("li",{parentName:"ul"},"AccountId ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," : Account ID."),(0,o.kt)("li",{parentName:"ul"},"NftDatas ",(0,o.kt)(a.h8,{text:"4",mdxType:"Step"})," : The Loopring's NFT token data identifier which is a hash string of NFT token address and ",(0,o.kt)("em",{parentName:"li"},"NFT_ID"),"."),(0,o.kt)("li",{parentName:"ul"},"TokenAddrs ",(0,o.kt)(a.h8,{text:"5",mdxType:"Step"})," : NFT token address."),(0,o.kt)("li",{parentName:"ul"},"TokenIds ",(0,o.kt)(a.h8,{text:"6",mdxType:"Step"})," : The token slot ID in Loopring DEX."),(0,o.kt)("li",{parentName:"ul"},"Offset ",(0,o.kt)(a.h8,{text:"7",mdxType:"Step"})," : Number of records to skip."),(0,o.kt)("li",{parentName:"ul"},"Limit ",(0,o.kt)(a.h8,{text:"8",mdxType:"Step"})," : Number of records to return."),(0,o.kt)("li",{parentName:"ul"},"NonZero ",(0,o.kt)(a.h8,{text:"9",mdxType:"Step"})," : Hide 0 balance NFT token, default is true.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Get users NFT balance",src:r(44716).Z,width:"1385",height:"1123"})),(0,o.kt)("p",null,"The returned ",(0,o.kt)("em",{parentName:"p"},"Response")," ",(0,o.kt)(a.h8,{text:"10",mdxType:"Step"})," is a struct that holds the response data for the HTTP request sent to ",(0,o.kt)("inlineCode",{parentName:"p"},"Loopring"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("em",{parentName:"p"},"Success")," is ",(0,o.kt)("em",{parentName:"p"},"True")," it only means that there was no error on the data transport layer (HTTP).\nYou also need to check the response body to determine the actual outcome of the call.")))}u.isMDXComponent=!0},44716:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/get-users-nft-balance-257cd04536cb4512da67b8b7e19d941f.png"}}]);