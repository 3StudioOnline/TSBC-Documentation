"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[5212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=u(n),m=a,d=k["".concat(c,".").concat(m)]||k[m]||s[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{AA:()=>c,V3:()=>u,h8:()=>a,qh:()=>l,y$:()=>o});n(7462),n(7294);var r=n(3905);const a=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function i(e,t,n,a){return(0,r.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return i(0,"Released","#afa","#181")},c=e=>{let{children:t}=e;return i(0,"In Progress","#ffa","#882")},u=e=>{let{children:t}=e;return i(0,"Planned","#aff","#288")}},3502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(4887);const i={sidebar_position:1,title:"Blockchain Configuration"},l=void 0,c={unversionedId:"quick-start/network-config",id:"version-1.2.0/quick-start/network-config",title:"Blockchain Configuration",description:"Get Blockchain Configuration",source:"@site/versioned_docs/version-1.2.0/quick-start/network-config.mdx",sourceDirName:"quick-start",slug:"/quick-start/network-config",permalink:"/TSBC-Documentation/docs/1.2.0/quick-start/network-config",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.2.0/quick-start/network-config.mdx",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Blockchain Configuration"},sidebar:"tutorialSidebar",previous:{title:"Debugging",permalink:"/TSBC-Documentation/docs/1.2.0/quick-start/debugging"},next:{title:"Private and Public Keys",permalink:"/TSBC-Documentation/docs/1.2.0/quick-start/private-public-key"}},u={},p=[{value:"Get Blockchain Configuration",id:"get-blockchain-configuration",level:2},{value:"Custom Blockchain Configuration",id:"custom-blockchain-configuration",level:2}],s={toc:p};function k(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-blockchain-configuration"},"Get Blockchain Configuration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Get Blockchain Configuration")," is a helper function that holds default information for commonly used ",(0,a.kt)("inlineCode",{parentName:"p"},"Ethereum")," networks ",(0,a.kt)(o.h8,{text:"1",mdxType:"Step"}),". "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Get Blockchain Configuration",src:n(6140).Z,width:"769",height:"305"})),(0,a.kt)("p",null,"This function returns a ",(0,a.kt)("em",{parentName:"p"},"Struct")," that contains:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," Network's RPC URL endpoint"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.h8,{text:"3",mdxType:"Step"})," Network's name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.h8,{text:"4",mdxType:"Step"})," Network's Chain ID"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.h8,{text:"5",mdxType:"Step"})," Network's Symbol.")),(0,a.kt)("p",null,"We didn't provide a block explorer link as it is unlikely to be used in a final product."),(0,a.kt)("p",null,"Currently supported networks are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Main Nets:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ethereum"),(0,a.kt)("li",{parentName:"ul"},"Polygon"),(0,a.kt)("li",{parentName:"ul"},"Avalanche"),(0,a.kt)("li",{parentName:"ul"},"Binance Smart Chain"),(0,a.kt)("li",{parentName:"ul"},"Cronos"),(0,a.kt)("li",{parentName:"ul"},"Huobi Eco Chain"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Test Nets:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ropsten"),(0,a.kt)("li",{parentName:"ul"},"Rinkeby"),(0,a.kt)("li",{parentName:"ul"},"Goerli"),(0,a.kt)("li",{parentName:"ul"},"Sepolia"),(0,a.kt)("li",{parentName:"ul"},"Avalanche FUJI C-Chain"),(0,a.kt)("li",{parentName:"ul"},"Binance Smart Chain"),(0,a.kt)("li",{parentName:"ul"},"Cronos"),(0,a.kt)("li",{parentName:"ul"},"Huobi Eco Chain")))),(0,a.kt)("h2",{id:"custom-blockchain-configuration"},"Custom Blockchain Configuration"),(0,a.kt)("p",null,"By creating a struct inherited from ",(0,a.kt)("inlineCode",{parentName:"p"},"TSBC_BlockchainConfig")," you are able to store any other network configuration for later use.\nYou can also use local ",(0,a.kt)("inlineCode",{parentName:"p"},"Blockchains")," like ",(0,a.kt)("inlineCode",{parentName:"p"},"Ganache"),", or private end points such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Infura")," to access public and private ",(0,a.kt)("inlineCode",{parentName:"p"},"Blockchains"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Custom Network Configuration",src:n(9606).Z,width:"641",height:"257"})))}k.isMDXComponent=!0},6140:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/01_get_blockchain_configuration-e4bf0caa08fbdd73524b7039d4388560.png"},9606:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/02_custom_network_config-1e63571ac8ca599a35a7c3fc8cb5c54b.png"}}]);