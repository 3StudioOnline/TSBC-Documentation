"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[6604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>o,h8:()=>r,qh:()=>l,y$:()=>i});n(87462),n(67294);var a=n(3905);const r=e=>{let{children:t,text:n}=e;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},i=e=>{let{children:t}=e;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function o(e){let{children:t,version:n}=e;const r="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:r,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function s(e,t,n,r){return(0,a.kt)("div",{style:{backgroundColor:r,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return s(0,"Released","#afa","#181")}},44070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(4887);const o={sidebar_position:2,title:"Sign Meta Transaction"},s="Sign Meta Transaction",l={unversionedId:"ethereum/meta-transactions/sign-meta-transaction",id:"version-2.6.0/ethereum/meta-transactions/sign-meta-transaction",title:"Sign Meta Transaction",description:"Sign Meta Transaction function signs a meta transaction that is compatible with EIP-712.",source:"@site/versioned_docs/version-2.6.0/ethereum/meta-transactions/sign-meta-transaction.mdx",sourceDirName:"ethereum/meta-transactions",slug:"/ethereum/meta-transactions/sign-meta-transaction",permalink:"/TSBC-Documentation/docs/2.6.0/ethereum/meta-transactions/sign-meta-transaction",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.6.0/ethereum/meta-transactions/sign-meta-transaction.mdx",tags:[],version:"2.6.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Sign Meta Transaction"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/TSBC-Documentation/docs/2.6.0/ethereum/meta-transactions/overview"},next:{title:"Forwarder",permalink:"/TSBC-Documentation/docs/2.6.0/ethereum/meta-transactions/example/forwarder"}},c={},m=[{value:"Unix Timestamp",id:"unix-timestamp",level:2},{value:"Example",id:"example",level:3}],p={toc:m};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sign-meta-transaction"},"Sign Meta Transaction"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Sign Meta Transaction")," function signs a meta transaction that is compatible with EIP-712."),(0,r.kt)("p",null,"This function requires the following inputs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Private Key")," ",(0,r.kt)(i.h8,{text:"1",mdxType:"Step"})," The private key to use for signing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Domain")," requires the following:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Name ",(0,r.kt)(i.h8,{text:"2",mdxType:"Step"})," The domain name provided to the Forwarder contract (EIP-2771) when it was deployed."),(0,r.kt)("li",{parentName:"ul"},"Chain ID ",(0,r.kt)(i.h8,{text:"3",mdxType:"Step"})," The chain id of the Blockchain."),(0,r.kt)("li",{parentName:"ul"},"Verifying Contract ",(0,r.kt)(i.h8,{text:"4",mdxType:"Step"})," The Forwarder contract address (EIP-2771) that will verify the transaction."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Message")," requires the following:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"From ",(0,r.kt)(i.h8,{text:"5",mdxType:"Step"})," An address to operate on behalf of. It is required to be equal to the request signer."),(0,r.kt)("li",{parentName:"ul"},"To ",(0,r.kt)(i.h8,{text:"6",mdxType:"Step"})," The address that should be called."),(0,r.kt)("li",{parentName:"ul"},"Value ",(0,r.kt)(i.h8,{text:"7",mdxType:"Step"})," The amount of native token to attach with the requested call."),(0,r.kt)("li",{parentName:"ul"},"Gas ",(0,r.kt)(i.h8,{text:"8",mdxType:"Step"})," The amount of gas limit that will be Forwarder with the requested call."),(0,r.kt)("li",{parentName:"ul"},"Nonce ",(0,r.kt)(i.h8,{text:"9",mdxType:"Step"})," A unique transaction ordering identifier to avoid replayability and request invalidation."),(0,r.kt)("li",{parentName:"ul"},"Deadline ",(0,r.kt)(i.h8,{text:"10",mdxType:"Step"})," A ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.6.0/ethereum/meta-transactions/sign-meta-transaction#unix-timestamp"},"Unix Timestamp")," after which the request is not executable anymore."),(0,r.kt)("li",{parentName:"ul"},"Data ",(0,r.kt)(i.h8,{text:"11",mdxType:"Step"})," Encoded msg.data to send with the requested call.")))),(0,r.kt)("p",null,"The function returns the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(i.h8,{text:"12",mdxType:"Step"})," A boolean value indicating whether the meta transaction signing was successful or not."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(i.h8,{text:"13",mdxType:"Step"})," An error message if meta transaction signing fails."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(i.h8,{text:"14",mdxType:"Step"})," The signed meta transaction.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sign Meta Transaction",src:n(36744).Z,width:"1094",height:"769"})),(0,r.kt)("h2",{id:"unix-timestamp"},"Unix Timestamp"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Unix Timestamp from Date Time")," helper function that takes date time struct and converts it to a Unix Timestamp."),(0,r.kt)("p",null,"This helper function will make it easier for developers to specify a deadline for the Meta Transaction using Unreal\nEngine's date time struct."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Unix Timestamp",src:n(51309).Z,width:"1154",height:"385"})))}u.isMDXComponent=!0},36744:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sign_meta_transaction-451d5f7206c4e99a281fd763456ec206.png"},51309:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unix_timestamp-038fcbc58768506becf46c729337258d.png"}}]);