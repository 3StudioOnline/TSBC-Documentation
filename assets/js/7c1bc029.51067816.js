"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[520],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{V3:()=>l,h8:()=>o,qh:()=>s,y$:()=>a});n(7462),n(7294);var r=n(3905);const o=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},a=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function i(e,t,n,o){return(0,r.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const s=e=>{let{children:t}=e;return i(0,"Released","#afa","#181")},l=e=>{let{children:t}=e;return i(0,"Planned","#aff","#288")}},9565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905)),a=n(4887);const i={sidebar_position:1,title:"Get users NFT balance"},s=void 0,l={unversionedId:"Layer2/Loopring/get-users-nft-balance",id:"version-2.1.1/Layer2/Loopring/get-users-nft-balance",title:"Get users NFT balance",description:"Sends a REST-API call to Loopring to get users NFT balance, besides amount, it also includes tokenId and nftData.",source:"@site/versioned_docs/version-2.1.1/Layer2/Loopring/get-users-nft-balance.mdx",sourceDirName:"Layer2/Loopring",slug:"/Layer2/Loopring/get-users-nft-balance",permalink:"/TSBC-Documentation/docs/Layer2/Loopring/get-users-nft-balance",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.1.1/Layer2/Loopring/get-users-nft-balance.mdx",tags:[],version:"2.1.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Get users NFT balance"},sidebar:"tutorialSidebar",previous:{title:"Get details of an asset",permalink:"/TSBC-Documentation/docs/Layer2/ImmutableX/get-details-asset"},next:{title:"Query NFT holders",permalink:"/TSBC-Documentation/docs/Layer2/Loopring/query-nft-holders"}},p={},c=[],u={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sends a ",(0,o.kt)("em",{parentName:"p"},"REST-API")," call to ",(0,o.kt)("inlineCode",{parentName:"p"},"Loopring")," to get users NFT balance, besides amount, it also includes tokenId and nftData.\nThis function requires input as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"URL ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : The URL to send the request to."),(0,o.kt)("li",{parentName:"ul"},"ApiKey ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," : API Key."),(0,o.kt)("li",{parentName:"ul"},"AccountId ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," : Account ID."),(0,o.kt)("li",{parentName:"ul"},"NftDatas ",(0,o.kt)(a.h8,{text:"4",mdxType:"Step"})," : The Loopring's NFT token data identifier which is a hash string of NFT token address and ",(0,o.kt)("em",{parentName:"li"},"NFT_ID"),"."),(0,o.kt)("li",{parentName:"ul"},"TokenAddrs ",(0,o.kt)(a.h8,{text:"5",mdxType:"Step"})," : NFT token address."),(0,o.kt)("li",{parentName:"ul"},"TokenIds ",(0,o.kt)(a.h8,{text:"6",mdxType:"Step"})," : The token slot ID in Loopring DEX."),(0,o.kt)("li",{parentName:"ul"},"Offset ",(0,o.kt)(a.h8,{text:"7",mdxType:"Step"})," : Number of records to skip."),(0,o.kt)("li",{parentName:"ul"},"Limit ",(0,o.kt)(a.h8,{text:"8",mdxType:"Step"})," : Number of records to return."),(0,o.kt)("li",{parentName:"ul"},"NonZero ",(0,o.kt)(a.h8,{text:"9",mdxType:"Step"})," : Hide 0 balance NFT token, default is true.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Get users NFT balance",src:n(8410).Z,width:"1385",height:"1123"})),(0,o.kt)("p",null,"The returned ",(0,o.kt)("em",{parentName:"p"},"Response")," ",(0,o.kt)(a.h8,{text:"10",mdxType:"Step"})," is a struct that holds the response data for the HTTP request sent to ",(0,o.kt)("inlineCode",{parentName:"p"},"Loopring"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("em",{parentName:"p"},"Success")," is ",(0,o.kt)("em",{parentName:"p"},"True")," it only means that there was no error on the data transport layer (HTTP).\nYou also need to check the response body to determine the actual outcome of the call.")))}d.isMDXComponent=!0},8410:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/get-users-nft-balance-257cd04536cb4512da67b8b7e19d941f.png"}}]);