"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[7705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,title:"Introduction"},i=void 0,l={unversionedId:"getting-started/introduction",id:"version-1.2.0/getting-started/introduction",title:"Introduction",description:"Blockchain Plugin",source:"@site/versioned_docs/version-1.2.0/getting-started/introduction.mdx",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/TSBC-Documentation/docs/1.2.0/getting-started/introduction",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.2.0/getting-started/introduction.mdx",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Technical Info",permalink:"/TSBC-Documentation/docs/1.2.0/getting-started/technical-info"}},c={},s=[{value:"Blockchain Plugin",id:"blockchain-plugin",level:2},{value:"Why Blockchain",id:"why-blockchain",level:2},{value:"NFT support?",id:"nft-support",level:2},{value:"Play to Earn?",id:"play-to-earn",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"blockchain-plugin"},"Blockchain Plugin"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Blockchain")," Plugin is built for ",(0,a.kt)("em",{parentName:"p"},"Unreal Engine")," to allow game developers make use of the ",(0,a.kt)("em",{parentName:"p"},"Blockchain")," technology. This plugin offers the ability to\nsend transactions and interact with ",(0,a.kt)("em",{parentName:"p"},"Smart Contracts")," directly from engine via ",(0,a.kt)("em",{parentName:"p"},"JSON-RPC"),". No 3rd party libraries or dependencies are used in this plugin,\nso it can be easily packaged and deployed on ",(0,a.kt)("em",{parentName:"p"},"Dedicated Servers"),"."),(0,a.kt)("h2",{id:"why-blockchain"},"Why Blockchain"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Blockchain")," is a public database that is updated and shared across many computers in a network. This will allow to read, write data and store information inside ",(0,a.kt)("em",{parentName:"p"},"Smart Contracts")," in a decentralized platform where no one person or group has control."),(0,a.kt)("p",null,"Here are some benefits of developing on ",(0,a.kt)("em",{parentName:"p"},"Blockchain"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Zero downtime"),": Once the smart contract is deployed on the blockchain, the network as a whole will always be able to serve clients looking to interact with the contract. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Privacy"),": You don't need to provide real-world identity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Resistance to censorship"),": No single entity on the network can block users from submitting transactions, reading data from the blockchain or writing to it.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Complete data integrity"),": Data stored on the blockchain is immutable and indisputable, thanks to cryptographic primitives. Malicious actors cannot forge transactions or other data that has already been made public."))),(0,a.kt)("h2",{id:"nft-support"},"NFT support?"),(0,a.kt)("p",null,"You can mint, transfer, or use NFTs with this plugin. Either as rewards for playing or simply utilizing a pre-made project collection generated months ago.\nHere lies the most accessible gateway to the utility of NFTs."),(0,a.kt)("h2",{id:"play-to-earn"},"Play to Earn?"),(0,a.kt)("p",null,"Our plugin fully supports the play-to-earn model. You can present players with your tokens or directly by transferring or minting privileges for your game's NFTs. Play to earn, go above and beyond simple monetary value. It could work entirely without a payment model by using custom token as currency."))}u.isMDXComponent=!0}}]);