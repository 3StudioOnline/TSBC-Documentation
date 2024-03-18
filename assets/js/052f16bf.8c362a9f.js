"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[2301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=u(n),d=o,m=k["".concat(c,".").concat(d)]||k[d]||s[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>i,h8:()=>o,qh:()=>c,y$:()=>a});n(87462),n(67294);var r=n(3905);const o=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},a=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:n}=e;const o="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,o){return(0,r.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")}},38483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(4887);const i={sidebar_position:1,title:"Blockchain Configuration"},l=void 0,c={unversionedId:"quick-start/network-config",id:"version-2.4.0/quick-start/network-config",title:"Blockchain Configuration",description:"Get Blockchain Configuration",source:"@site/versioned_docs/version-2.4.0/quick-start/network-config.mdx",sourceDirName:"quick-start",slug:"/quick-start/network-config",permalink:"/TSBC-Documentation/docs/2.4.0/quick-start/network-config",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.4.0/quick-start/network-config.mdx",tags:[],version:"2.4.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Blockchain Configuration"},sidebar:"tutorialSidebar",previous:{title:"Debugging",permalink:"/TSBC-Documentation/docs/2.4.0/quick-start/debugging"},next:{title:"Private and Public Keys",permalink:"/TSBC-Documentation/docs/2.4.0/quick-start/private-public-key"}},u={},p=[{value:"Get Blockchain Configuration",id:"get-blockchain-configuration",level:2},{value:"Custom Blockchain Configuration",id:"custom-blockchain-configuration",level:2}],s={toc:p};function k(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-blockchain-configuration"},"Get Blockchain Configuration"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Get Blockchain Configuration")," is a helper function that holds default information for commonly used ",(0,o.kt)("inlineCode",{parentName:"p"},"Ethereum")," networks ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"}),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Get Blockchain Configuration",src:n(83504).Z,width:"769",height:"305"})),(0,o.kt)("p",null,"This function returns a ",(0,o.kt)("em",{parentName:"p"},"Struct")," that contains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," Network's RPC URL endpoint"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," Network's name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(a.h8,{text:"4",mdxType:"Step"})," Network's Chain ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(a.h8,{text:"5",mdxType:"Step"})," Network's Symbol.")),(0,o.kt)("p",null,"We didn't provide a block explorer link as it is unlikely to be used in a final product."),(0,o.kt)("p",null,"Currently supported networks are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Main Nets:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ethereum"),(0,o.kt)("li",{parentName:"ul"},"Polygon"),(0,o.kt)("li",{parentName:"ul"},"Avalanche"),(0,o.kt)("li",{parentName:"ul"},"Binance Smart Chain"),(0,o.kt)("li",{parentName:"ul"},"Cronos"),(0,o.kt)("li",{parentName:"ul"},"Huobi Eco Chain"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Test Nets:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ropsten"),(0,o.kt)("li",{parentName:"ul"},"Rinkeby"),(0,o.kt)("li",{parentName:"ul"},"Goerli"),(0,o.kt)("li",{parentName:"ul"},"Sepolia"),(0,o.kt)("li",{parentName:"ul"},"Avalanche FUJI C-Chain"),(0,o.kt)("li",{parentName:"ul"},"Binance Smart Chain"),(0,o.kt)("li",{parentName:"ul"},"Cronos"),(0,o.kt)("li",{parentName:"ul"},"Huobi Eco Chain")))),(0,o.kt)("h2",{id:"custom-blockchain-configuration"},"Custom Blockchain Configuration"),(0,o.kt)("p",null,"By creating a struct inherited from ",(0,o.kt)("inlineCode",{parentName:"p"},"TSBC_BlockchainConfig")," you are able to store any other network configuration for later use.\nYou can also use local ",(0,o.kt)("inlineCode",{parentName:"p"},"Blockchains")," like ",(0,o.kt)("inlineCode",{parentName:"p"},"Ganache"),", or private end points such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Infura")," to access public and private ",(0,o.kt)("inlineCode",{parentName:"p"},"Blockchains"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom Network Configuration",src:n(76471).Z,width:"641",height:"257"})))}k.isMDXComponent=!0},83504:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/01_get_blockchain_configuration-e4bf0caa08fbdd73524b7039d4388560.png"},76471:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/02_custom_network_config-1e63571ac8ca599a35a7c3fc8cb5c54b.png"}}]);