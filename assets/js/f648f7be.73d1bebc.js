"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[6240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>o,V3:()=>s,h8:()=>i,qh:()=>u,y$:()=>r});n(87462),n(67294);var a=n(3905);const i=e=>{let{children:t,text:n}=e;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},r=e=>{let{children:t}=e;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function o(e){let{children:t,version:n}=e;const i="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:i,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,i){return(0,a.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const u=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")},s=e=>{let{children:t}=e;return l(0,"Planned","#aff","#288")}},12419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));n(4887);const r={sidebar_position:4,title:"Uint256"},o=void 0,l={unversionedId:"quick-start/uint256",id:"version-2.2.1/quick-start/uint256",title:"Uint256",description:"Why Implementing Uint256",source:"@site/versioned_docs/version-2.2.1/quick-start/uint256.mdx",sourceDirName:"quick-start",slug:"/quick-start/uint256",permalink:"/TSBC-Documentation/docs/quick-start/uint256",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.2.1/quick-start/uint256.mdx",tags:[],version:"2.2.1",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Uint256"},sidebar:"tutorialSidebar",previous:{title:"Wallet Address",permalink:"/TSBC-Documentation/docs/quick-start/wallet-address"},next:{title:"Ethereum Function Implementation",permalink:"/TSBC-Documentation/docs/ethereum/ethereum-functions/eth-function-implementation"}},u={},s=[{value:"Why Implementing Uint256",id:"why-implementing-uint256",level:2},{value:"Generating Uint256",id:"generating-uint256",level:2},{value:"Current Support For Uint256",id:"current-support-for-uint256",level:3},{value:"Generate Eth Value",id:"generate-eth-value",level:3},{value:"Math Operations And Comparisons",id:"math-operations-and-comparisons",level:2},{value:"Extra Math Functions",id:"extra-math-functions",level:2}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-implementing-uint256"},"Why Implementing Uint256"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"uint256")," is a 256 bit unsigned integer (meaning this type can only represent positive integers).\nThe size of the value stored in this value type should be less than 256 bits where the maximum value stored is equal to 2^(256-1) which is represented in this\ndecimal number: ",(0,i.kt)("inlineCode",{parentName:"p"},"115792089237316195423570985008687907853269984665640564039457584007913129639935"),"."),(0,i.kt)("p",null,"It is used by ",(0,i.kt)("em",{parentName:"p"},"Ethereum")," and many other ",(0,i.kt)("em",{parentName:"p"},"Blockchains"),", also this type exists in ",(0,i.kt)("em",{parentName:"p"},"Solidity")," language to store absolute values of currencies and counters.\nIntegers (Signed or Non-Signed) are immune to data loss, however they are limited to the operations they are able to do."),(0,i.kt)("p",null,"A single unit of ",(0,i.kt)("inlineCode",{parentName:"p"},"uint256")," represents the smallest unit in ",(0,i.kt)("em",{parentName:"p"},"Ethereum")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"Wei"),"."),(0,i.kt)("h2",{id:"generating-uint256"},"Generating Uint256"),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"uint256")," is not a builtin data type you need helper functions to generate values, there are two available helper functions for now:"),(0,i.kt)("p",null,"First we have ",(0,i.kt)("inlineCode",{parentName:"p"},"Make Literal uint256 from String"),'. If the string value is prefixed with "0x" it will be interpreted as a hex value, otherwise as a decimal value.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generating Uint256",src:n(22702).Z,width:"324",height:"160"})),(0,i.kt)("p",null,"The Second function is ",(0,i.kt)("inlineCode",{parentName:"p"},"Make Literal uint256 from String with Fractional Value"),". The input string must be a decimal value.\nThe exponent describes the number of digits to move the decimal point to the left or right. A positive exponent moves the decimal point to the right while a negative exponent moves it to the left."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generating Uint256",src:n(34864).Z,width:"395",height:"142"})),(0,i.kt)("h3",{id:"current-support-for-uint256"},"Current Support For Uint256"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parse value from string:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"As decimal, if input consists of valid decimal digits (0 to 9)"),(0,i.kt)("li",{parentName:"ul"},'As hexadecimal, if input is prefixed with "0x" and the remaining part consists of valid hex digits (0 to 9, A to F).'))),(0,i.kt)("li",{parentName:"ul"},"Convert uint256 value to string:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In decimal notation"),(0,i.kt)("li",{parentName:"ul"},"In hexadecimal notation"))),(0,i.kt)("li",{parentName:"ul"},"Handle value overflow and underflow")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Current Support For Uint256",src:n(45016).Z,width:"754",height:"402"})),(0,i.kt)("h3",{id:"generate-eth-value"},"Generate Eth Value"),(0,i.kt)("p",null,"There are also 2 helper functions with fixed 18 digit exponent (Eth to Wei)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Make Eth Value from String")," Tries to parse the input string value to an ",(0,i.kt)("em",{parentName:"p"},"Ethereum")," unit stored in an uint256 data type."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generating Eth Value",src:n(5746).Z,width:"338",height:"157"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Make Eth Value from String with Fractional Value")," This function can handle fractional values as inputs but will eventually truncate the fractional part after applying the unit conversion operation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generating Eth Value Fractional",src:n(66979).Z,width:"408",height:"185"})),(0,i.kt)("h2",{id:"math-operations-and-comparisons"},"Math Operations And Comparisons"),(0,i.kt)("p",null,"Math operations for ",(0,i.kt)("inlineCode",{parentName:"p"},"uint256"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Addition          (+)"),(0,i.kt)("li",{parentName:"ul"},"Subtraction       (-)"),(0,i.kt)("li",{parentName:"ul"},"Multiplication    (*)"),(0,i.kt)("li",{parentName:"ul"},"Division          (/)"),(0,i.kt)("li",{parentName:"ul"},"Modulo            (%)")),(0,i.kt)("p",null,"Math Comparison for ",(0,i.kt)("inlineCode",{parentName:"p"},"uint256"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Equal             (==)"),(0,i.kt)("li",{parentName:"ul"},"Unequal           (!=)"),(0,i.kt)("li",{parentName:"ul"},"Greater Than      (> )"),(0,i.kt)("li",{parentName:"ul"},"Greater or Equal  (>=)"),(0,i.kt)("li",{parentName:"ul"},"Less Than         (< )"),(0,i.kt)("li",{parentName:"ul"},"Less or Equal     (<=)")),(0,i.kt)("p",null,"Debugging"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If enabled via project settings, human-readable debug values can be calculated for easier debugging purposes. ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Uint256 Math Operations",src:n(99942).Z,width:"641",height:"698"})),(0,i.kt)("h2",{id:"extra-math-functions"},"Extra Math Functions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Pow")," returns the result of the ",(0,i.kt)("em",{parentName:"p"},"Base")," argument raised to the power of the ",(0,i.kt)("em",{parentName:"p"},"Exponent")," argument stored in uint256 data type."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Uint256 Math Operations",src:n(49597).Z,width:"240",height:"140"})))}d.isMDXComponent=!0},99942:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/01_uint256_operations-51a8690e890272a7239982bf75e875b5.png"},22702:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/02_generate_uint256-b01824c4e84c80d070f9cce5f5f7cb90.png"},34864:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/02_generate_uint256_fractional-dc5101b0b1b2483b879fb8818dead7a6.png"},45016:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/03_uint256_support-d0485926cad1e5ead0dd22824a7731a8.png"},5746:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/04_make_eth-9682a645236a02db94b3f945abfa00f0.png"},66979:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/04_make_eth_fractional-fba7615628945d440381936c6b084c1d.png"},49597:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/05_pow-f53cdb2de8f3a5dc783753722a61f411.png"}}]);