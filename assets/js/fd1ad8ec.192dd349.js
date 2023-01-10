"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[9623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,title:"Technical Info"},i=void 0,l={unversionedId:"getting-started/technical-info",id:"version-1.0.8/getting-started/technical-info",title:"Technical Info",description:"Blockchain",source:"@site/versioned_docs/version-1.0.8/getting-started/technical-info.mdx",sourceDirName:"getting-started",slug:"/getting-started/technical-info",permalink:"/TSBC-Documentation/docs/1.0.8/getting-started/technical-info",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.0.8/getting-started/technical-info.mdx",tags:[],version:"1.0.8",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Technical Info"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/TSBC-Documentation/docs/1.0.8/getting-started/introduction"},next:{title:"Installation",permalink:"/TSBC-Documentation/docs/1.0.8/getting-started/installation"}},c={},s=[{value:"Blockchain",id:"blockchain",level:2},{value:"Features",id:"features",level:2},{value:"IPFS",id:"ipfs",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"blockchain"},"Blockchain"),(0,r.kt)("p",null,"Currently Supporting Ethereum, and Polygon. "),(0,r.kt)("p",null,"We highly recommend the use of the Polygon main net network. Polygon as a network has a\nvery high throughput of transactions per second, low environmental impact due to the proof of stake consensus mechanism, and extremely high security."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To use custom blockchain you ned to know the blockchain's RPC endpoint link, chain ID, explorer and currency symbol.")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"All functions are exposed to blueprints, and you can use them directly in c++ such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ECDSA, SECP-256-K1, a private and a public key generation based on elliptic curves."),(0,r.kt)("li",{parentName:"ul"},"Keccak-256, sha-256, sha-512, ripemd-160 hashing function."),(0,r.kt)("li",{parentName:"ul"},"Ethereum Address generation and validation."),(0,r.kt)("li",{parentName:"ul"},"JSON RPC Request functionality to make JSON RPC call to any blockchain node that implements JSON RPC as a method of communication. "),(0,r.kt)("li",{parentName:"ul"},"Async nodes and event call-back version."),(0,r.kt)("li",{parentName:"ul"},"Basic ETH functions such as:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"eth_gasPrice."),(0,r.kt)("li",{parentName:"ul"},"eth_getBalance."),(0,r.kt)("li",{parentName:"ul"},"eth_sendRawTransaction."),(0,r.kt)("li",{parentName:"ul"},"eth_estimateGas."),(0,r.kt)("li",{parentName:"ul"},"More coming in future updates."))),(0,r.kt)("li",{parentName:"ul"},"Uint256 parser."),(0,r.kt)("li",{parentName:"ul"},"Hex conversion - Converters hex string to big int string, or other way around."),(0,r.kt)("li",{parentName:"ul"},"Generate and sign a transactions to send via RPC calls."),(0,r.kt)("li",{parentName:"ul"},"Base58 Parser."),(0,r.kt)("li",{parentName:"ul"},"Secure Random Bytes Library.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To get the most out of this plugin a good knowledge in ",(0,r.kt)("inlineCode",{parentName:"p"},"Solidity")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Ethereum")," is required. ")),(0,r.kt)("h2",{id:"ipfs"},"IPFS"),(0,r.kt)("p",null,"IPFS protocol is out of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Blockchain")," plugin's scope. "),(0,r.kt)("p",null,"To store data of an interactable NFT, you can store values inside a smart contract mapping."),(0,r.kt)("p",null,"We are currently working on a separate plugin that would allow for full IPFS implementation and even data parsing directly into text images or\nother commonly used forms of files."))}p.isMDXComponent=!0}}]);