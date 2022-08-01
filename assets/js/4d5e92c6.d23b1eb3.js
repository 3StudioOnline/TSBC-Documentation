"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),k=o,m=d["".concat(l,".").concat(k)]||d[k]||p[k]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{AA:()=>l,V3:()=>u,h8:()=>o,qh:()=>c,y$:()=>i});n(7462),n(7294);var r=n(3905);const o=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},i=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function a(e,t,n,o){return(0,r.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return a(0,"Released","#afa","#181")},l=e=>{let{children:t}=e;return a(0,"In Progress","#ffa","#882")},u=e=>{let{children:t}=e;return a(0,"Planned","#aff","#288")}},5082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905)),i=n(4887);const a={sidebar_position:1,title:"Blockchain Configuration"},c=void 0,l={unversionedId:"quick-start/network-config",id:"version-1.0.1/quick-start/network-config",title:"Blockchain Configuration",description:"Get Blockchain Configuration",source:"@site/versioned_docs/version-1.0.1/quick-start/network-config.mdx",sourceDirName:"quick-start",slug:"/quick-start/network-config",permalink:"/TSBC-Documentation/docs/quick-start/network-config",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.0.1/quick-start/network-config.mdx",tags:[],version:"1.0.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Blockchain Configuration"},sidebar:"tutorialSidebar",previous:{title:"Demo Project",permalink:"/TSBC-Documentation/docs/getting-started/demo-project"},next:{title:"Private and Public Keys",permalink:"/TSBC-Documentation/docs/quick-start/private-public-key"}},u={},s=[{value:"Get Blockchain Configuration",id:"get-blockchain-configuration",level:2},{value:"Custom Blockchain Configuration",id:"custom-blockchain-configuration",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-blockchain-configuration"},"Get Blockchain Configuration"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Get Blockchain Configuration")," is a helper function that holds default information for commonly used ",(0,o.kt)("inlineCode",{parentName:"p"},"Ethereum")," networks ",(0,o.kt)(i.h8,{text:"1",mdxType:"Step"}),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Get Blockchain Configuration",src:n(1768).Z,width:"769",height:"305"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Additional networks will be added in future updates.")),(0,o.kt)("p",null,"This function returns a ",(0,o.kt)("em",{parentName:"p"},"Struct")," that contains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(i.h8,{text:"2",mdxType:"Step"})," Network's RPC URL endpoint"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(i.h8,{text:"3",mdxType:"Step"})," Network's name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(i.h8,{text:"4",mdxType:"Step"})," Network's Chain ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(i.h8,{text:"5",mdxType:"Step"})," Network's Symbol.")),(0,o.kt)("p",null,"We didn't provide a block explorer link as it is unlikely to be used in a final product."),(0,o.kt)("p",null,"Current networks supported for now are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ethereum"),(0,o.kt)("li",{parentName:"ul"},"Polygon"),(0,o.kt)("li",{parentName:"ul"},"Ropsten "),(0,o.kt)("li",{parentName:"ul"},"Rinkeby")),(0,o.kt)("p",null,"The Last two networks are ",(0,o.kt)("inlineCode",{parentName:"p"},"Ethereum")," test nets."),(0,o.kt)("h2",{id:"custom-blockchain-configuration"},"Custom Blockchain Configuration"),(0,o.kt)("p",null,"By creating a struct inherited from ",(0,o.kt)("inlineCode",{parentName:"p"},"TSBC_BlockchainConfig")," you are able to store any other network configuration for later use.\nYou can also use local ",(0,o.kt)("inlineCode",{parentName:"p"},"Blockchains")," like ",(0,o.kt)("inlineCode",{parentName:"p"},"Ganache"),", or private end points such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Infura")," to access public and private ",(0,o.kt)("inlineCode",{parentName:"p"},"Blockchains"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom Network Configuration",src:n(3201).Z,width:"641",height:"257"})))}d.isMDXComponent=!0},1768:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/01_get_blockchain_configuration-e4bf0caa08fbdd73524b7039d4388560.png"},3201:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/02_custom_network_config-1e63571ac8ca599a35a7c3fc8cb5c54b.png"}}]);