"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[6106],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(r),c=n,f=d["".concat(l,".").concat(c)]||d[c]||u[c]||s;return r?a.createElement(f,o(o({ref:t},m),{},{components:r})):a.createElement(f,o({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>o,h8:()=>n,qh:()=>l,y$:()=>s});r(87462),r(67294);var a=r(3905);const n=e=>{let{children:t,text:r}=e;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},s=e=>{let{children:t}=e;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function o(e){let{children:t,version:r}=e;const n="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:n,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function i(e,t,r,n){return(0,a.kt)("div",{style:{backgroundColor:n,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return i(0,"Released","#afa","#181")}},83753:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),s=r(4887);const o={sidebar_position:1,title:"Get a list of assets"},i=void 0,l={unversionedId:"Layer2/ImmutableX/get-list-assets",id:"version-2.3.1/Layer2/ImmutableX/get-list-assets",title:"Get a list of assets",description:"Sends a REST-API call to ImmutableX to get a list of assets. This function requires input as follows:",source:"@site/versioned_docs/version-2.3.1/Layer2/ImmutableX/get-list-assets.mdx",sourceDirName:"Layer2/ImmutableX",slug:"/Layer2/ImmutableX/get-list-assets",permalink:"/TSBC-Documentation/docs/2.3.1/Layer2/ImmutableX/get-list-assets",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.3.1/Layer2/ImmutableX/get-list-assets.mdx",tags:[],version:"2.3.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Get a list of assets"},sidebar:"tutorialSidebar",previous:{title:"Get Layer 2 Configuration",permalink:"/TSBC-Documentation/docs/2.3.1/Layer2/get-layer2-config"},next:{title:"Get details of an asset",permalink:"/TSBC-Documentation/docs/2.3.1/Layer2/ImmutableX/get-details-asset"}},p={},m=[],u={toc:m};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Sends a ",(0,n.kt)("em",{parentName:"p"},"REST-API")," call to ",(0,n.kt)("inlineCode",{parentName:"p"},"ImmutableX")," to get a list of assets. This function requires input as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"URL ",(0,n.kt)(s.h8,{text:"1",mdxType:"Step"})," : The URL to send the request to."),(0,n.kt)("li",{parentName:"ul"},"PageSize ",(0,n.kt)(s.h8,{text:"2",mdxType:"Step"})," : Page size of the result."),(0,n.kt)("li",{parentName:"ul"},"Cursor ",(0,n.kt)(s.h8,{text:"3",mdxType:"Step"})," : Cursor."),(0,n.kt)("li",{parentName:"ul"},"OrderBy ",(0,n.kt)(s.h8,{text:"4",mdxType:"Step"})," : Property to sort by."),(0,n.kt)("li",{parentName:"ul"},"Direction ",(0,n.kt)(s.h8,{text:"5",mdxType:"Step"})," : Direction to sort (asc/desc)."),(0,n.kt)("li",{parentName:"ul"},"User ",(0,n.kt)(s.h8,{text:"6",mdxType:"Step"})," : Ethereum address of the user who owns these assets."),(0,n.kt)("li",{parentName:"ul"},"Status ",(0,n.kt)(s.h8,{text:"7",mdxType:"Step"})," : Status of these assets."),(0,n.kt)("li",{parentName:"ul"},"Name ",(0,n.kt)(s.h8,{text:"8",mdxType:"Step"})," : Name of the asset to search."),(0,n.kt)("li",{parentName:"ul"},"Metadata ",(0,n.kt)(s.h8,{text:"9",mdxType:"Step"})," : URL JSON-encoded metadata filters for these assets."),(0,n.kt)("li",{parentName:"ul"},"SellOrders ",(0,n.kt)(s.h8,{text:"10",mdxType:"Step"})," : Set flag to true to fetch an array of sell order details with accepted status associated with the asset."),(0,n.kt)("li",{parentName:"ul"},"BuyOrders ",(0,n.kt)(s.h8,{text:"11",mdxType:"Step"})," : Set flag to true to fetch an array of buy order details  with accepted status associated with the asset."),(0,n.kt)("li",{parentName:"ul"},"IncludeFees ",(0,n.kt)(s.h8,{text:"12",mdxType:"Step"})," : Set flag to include fees associated with the asset."),(0,n.kt)("li",{parentName:"ul"},"Collection ",(0,n.kt)(s.h8,{text:"13",mdxType:"Step"})," : Collection contract address."),(0,n.kt)("li",{parentName:"ul"},"UpdatedMinTimestamp ",(0,n.kt)(s.h8,{text:"14",mdxType:"Step"})," : Minimum timestamp for when these assets were last updated, in ISO 8601 UTC format."),(0,n.kt)("li",{parentName:"ul"},"UpdatedMaxTimestamp ",(0,n.kt)(s.h8,{text:"15",mdxType:"Step"})," : Maximum timestamp for when these assets were last updated, in ISO 8601 UTC format."),(0,n.kt)("li",{parentName:"ul"},"AuxiliaryFeePercentages ",(0,n.kt)(s.h8,{text:"16",mdxType:"Step"})," : Comma separated string of fee percentages that are to be paired with auxiliary_fee_recipients."),(0,n.kt)("li",{parentName:"ul"},"AuxiliaryFeeRecipients ",(0,n.kt)(s.h8,{text:"17",mdxType:"Step"})," : Comma separated string of fee recipients that are to be paired with auxiliary_fee_percentages.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Get a list of assets",src:r(15651).Z,width:"1588",height:"1337"})),(0,n.kt)("p",null,"The returned ",(0,n.kt)("em",{parentName:"p"},"Response")," ",(0,n.kt)(s.h8,{text:"18",mdxType:"Step"})," is a struct that holds the response data for the HTTP request sent to ",(0,n.kt)("inlineCode",{parentName:"p"},"ImmutableX"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If ",(0,n.kt)("em",{parentName:"p"},"Success")," is ",(0,n.kt)("em",{parentName:"p"},"True")," it only means that there was no error on the data transport layer (HTTP).\nYou also need to check the response body to determine the actual outcome of the call.")))}d.isMDXComponent=!0},15651:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/get-list-assets-06ab0887ba1b1a9f29e2be39be3cfe9d.png"}}]);