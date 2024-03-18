"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[4237],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>s,h8:()=>a,qh:()=>l,y$:()=>o});r(87462),r(67294);var n=r(3905);const a=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},o=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function s(e){let{children:t,version:r}=e;const a="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function i(e,t,r,a){return(0,n.kt)("div",{style:{backgroundColor:a,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return i(0,"Released","#afa","#181")}},10308:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(4887);const s={sidebar_position:2,title:"Get details of an asset"},i=void 0,l={unversionedId:"Layer2/ImmutableX/get-details-asset",id:"version-2.5.0/Layer2/ImmutableX/get-details-asset",title:"Get details of an asset",description:"Sends a REST-API call to ImmutableX to get details of an asset. This function requires input as follows:",source:"@site/versioned_docs/version-2.5.0/Layer2/ImmutableX/get-details-asset.mdx",sourceDirName:"Layer2/ImmutableX",slug:"/Layer2/ImmutableX/get-details-asset",permalink:"/TSBC-Documentation/docs/Layer2/ImmutableX/get-details-asset",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.5.0/Layer2/ImmutableX/get-details-asset.mdx",tags:[],version:"2.5.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Get details of an asset"},sidebar:"tutorialSidebar",previous:{title:"Get a list of assets",permalink:"/TSBC-Documentation/docs/Layer2/ImmutableX/get-list-assets"},next:{title:"Get users NFT balance",permalink:"/TSBC-Documentation/docs/Layer2/Loopring/get-users-nft-balance"}},d={},c=[],p={toc:c};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sends a ",(0,a.kt)("em",{parentName:"p"},"REST-API")," call to ",(0,a.kt)("inlineCode",{parentName:"p"},"ImmutableX")," to get details of an asset. This function requires input as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"URL ",(0,a.kt)(o.h8,{text:"1",mdxType:"Step"})," : The URL to send the request to."),(0,a.kt)("li",{parentName:"ul"},"TokenAddress ",(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," : ",(0,a.kt)("inlineCode",{parentName:"li"},"Required")," Address of the ERC721 contract."),(0,a.kt)("li",{parentName:"ul"},"TokenId ",(0,a.kt)(o.h8,{text:"3",mdxType:"Step"})," : ",(0,a.kt)("inlineCode",{parentName:"li"},"Required")," Either ERC721 token ID or internal IMX ID."),(0,a.kt)("li",{parentName:"ul"},"IncludeFees ",(0,a.kt)(o.h8,{text:"4",mdxType:"Step"})," : Set flag to include fees associated with the asset.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Get details of an asset",src:r(26037).Z,width:"1179",height:"721"})),(0,a.kt)("p",null,"The returned ",(0,a.kt)("em",{parentName:"p"},"Response")," ",(0,a.kt)(o.h8,{text:"5",mdxType:"Step"})," is a struct that holds the response data for the HTTP request sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"ImmutableX"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("em",{parentName:"p"},"Success")," is ",(0,a.kt)("em",{parentName:"p"},"True")," it only means that there was no error on the data transport layer (HTTP).\nYou also need to check the response body to determine the actual outcome of the call.")))}u.isMDXComponent=!0},26037:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/get-details-asset-91623799828a22d979d60387f52b3123.png"}}]);