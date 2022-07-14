"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[21],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4887:function(e,t,n){n.d(t,{h8:function(){return a},qh:function(){return l},y$:function(){return r}});n(7462),n(3366),n(7294);var i=n(3905),a=function(e){e.children;var t=e.text;return(0,i.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},r=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"#faa"}},t)};function o(e,t,n,a){return(0,i.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}var l=function(e){e.children;return o(0,"Released","#afa","#181")}},9028:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=(n(4887),["components"]),l={sidebar_position:4,title:"Uint256"},u=void 0,s={unversionedId:"quick-start/uint256",id:"version-1.0.0/quick-start/uint256",title:"Uint256",description:"Why Implementing Uint256",source:"@site/versioned_docs/version-1.0.0/quick-start/uint256.mdx",sourceDirName:"quick-start",slug:"/quick-start/uint256",permalink:"/TSBC-Documentation/docs/quick-start/uint256",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.0.0/quick-start/uint256.mdx",tags:[],version:"1.0.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Uint256"},sidebar:"tutorialSidebar",previous:{title:"Wallet Address",permalink:"/TSBC-Documentation/docs/quick-start/wallet-address"},next:{title:"Ethereum Function Implementation",permalink:"/TSBC-Documentation/docs/ethereum/ethereum-functions/eth-function-implementation"}},p={},c=[{value:"Why Implementing Uint256",id:"why-implementing-uint256",level:2},{value:"Generating Uint256",id:"generating-uint256",level:2},{value:"Current Support For Uint256",id:"current-support-for-uint256",level:3},{value:"Generate Eth Value",id:"generate-eth-value",level:3},{value:"Math Operations And Comparisons",id:"math-operations-and-comparisons",level:2},{value:"Extra Math Functions",id:"extra-math-functions",level:2}],m={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"why-implementing-uint256"},"Why Implementing Uint256"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"uint256")," is a 256 bit unsigned integer (meaning this type can only represent positive integers).\nThe size of the value stored in this value type should be less than 256 bits where the maximum value stored is equal to 2^(256-1) which is represented in this\ndecimal number: ",(0,r.kt)("inlineCode",{parentName:"p"},"115792089237316195423570985008687907853269984665640564039457584007913129639935"),"."),(0,r.kt)("p",null,"It is used by ",(0,r.kt)("em",{parentName:"p"},"Ethereum")," and many other ",(0,r.kt)("em",{parentName:"p"},"Blockchains"),", also this type exists in ",(0,r.kt)("em",{parentName:"p"},"Solidity")," language to store absolute values of currencies and counters.\nIntegers (Signed or Non-Signed) are immune to data loss, however they are limited to the operations they are able to do."),(0,r.kt)("p",null,"A single unit of ",(0,r.kt)("inlineCode",{parentName:"p"},"uint256")," represents the smallest unit in ",(0,r.kt)("em",{parentName:"p"},"Ethereum")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"Wei"),"."),(0,r.kt)("h2",{id:"generating-uint256"},"Generating Uint256"),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"uint256")," is not a builtin data type you need helper functions to generate values, there are two available helper functions for now:"),(0,r.kt)("p",null,"First we have ",(0,r.kt)("inlineCode",{parentName:"p"},"Make Literal uint256 from String"),'. If the string value is prefixed with "0x" it will be interpreted as a hex value, otherwise as a decimal value.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generating Uint256",src:n(6831).Z,width:"324",height:"160"})),(0,r.kt)("p",null,"The Second function is ",(0,r.kt)("inlineCode",{parentName:"p"},"Make Literal uint256 from String with Fractional Value"),". The input string must be a decimal value.\nThe exponent describes the number of digits to move the decimal point to the left or right. A positive exponent moves the decimal point to the right while a negative exponent moves it to the left."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generating Uint256",src:n(5088).Z,width:"395",height:"142"})),(0,r.kt)("h3",{id:"current-support-for-uint256"},"Current Support For Uint256"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parse value from string:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"As decimal, if input consists of valid decimal digits (0 to 9)"),(0,r.kt)("li",{parentName:"ul"},'As hexadecimal, if input is prefixed with "0x" and the remaining part consists of valid hex digits (0 to 9, A to F).'))),(0,r.kt)("li",{parentName:"ul"},"Convert uint256 value to string:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In decimal notation"),(0,r.kt)("li",{parentName:"ul"},"In hexadecimal notation"))),(0,r.kt)("li",{parentName:"ul"},"Handle value overflow and underflow")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Current Support For Uint256",src:n(4717).Z,width:"754",height:"402"})),(0,r.kt)("h3",{id:"generate-eth-value"},"Generate Eth Value"),(0,r.kt)("p",null,"There are also 2 helper functions with fixed 18 digit exponent (Eth to Wei)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Make Eth Value from String")," Tries to parse the input string value to an ",(0,r.kt)("em",{parentName:"p"},"Ethereum")," unit stored in an uint256 data type."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generating Eth Value",src:n(7530).Z,width:"338",height:"157"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Make Eth Value from String with Fractional Value")," This function can handle fractional values as inputs but will eventually truncate the fractional part after applying the unit conversion operation."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generating Eth Value Fractional",src:n(7329).Z,width:"408",height:"185"})),(0,r.kt)("h2",{id:"math-operations-and-comparisons"},"Math Operations And Comparisons"),(0,r.kt)("p",null,"Math operations for ",(0,r.kt)("inlineCode",{parentName:"p"},"uint256"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Addition          (+)"),(0,r.kt)("li",{parentName:"ul"},"Subtraction       (-)"),(0,r.kt)("li",{parentName:"ul"},"Multiplication    (*)"),(0,r.kt)("li",{parentName:"ul"},"Division          (/)"),(0,r.kt)("li",{parentName:"ul"},"Modulo            (%)")),(0,r.kt)("p",null,"Math Comparison for ",(0,r.kt)("inlineCode",{parentName:"p"},"uint256"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Equal             (==)"),(0,r.kt)("li",{parentName:"ul"},"Unequal           (!=)"),(0,r.kt)("li",{parentName:"ul"},"Greater Than      (> )"),(0,r.kt)("li",{parentName:"ul"},"Greater or Equal  (>=)"),(0,r.kt)("li",{parentName:"ul"},"Less Than         (< )"),(0,r.kt)("li",{parentName:"ul"},"Less or Equal     (<=)")),(0,r.kt)("p",null,"Debugging"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If enabled via project settings, human-readable debug values can be calculated for easier debugging purposes. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Uint256 Math Operations",src:n(7467).Z,width:"641",height:"698"})),(0,r.kt)("h2",{id:"extra-math-functions"},"Extra Math Functions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Pow")," returns the result of the ",(0,r.kt)("em",{parentName:"p"},"Base")," argument raised to the power of the ",(0,r.kt)("em",{parentName:"p"},"Exponent")," argument stored in uint256 data type."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Uint256 Math Operations",src:n(6493).Z,width:"240",height:"140"})))}d.isMDXComponent=!0},7467:function(e,t,n){t.Z=n.p+"assets/images/01_uint256_operations-51a8690e890272a7239982bf75e875b5.png"},6831:function(e,t,n){t.Z=n.p+"assets/images/02_generate_uint256-b01824c4e84c80d070f9cce5f5f7cb90.png"},5088:function(e,t,n){t.Z=n.p+"assets/images/02_generate_uint256_fractional-dc5101b0b1b2483b879fb8818dead7a6.png"},4717:function(e,t,n){t.Z=n.p+"assets/images/03_uint256_support-d0485926cad1e5ead0dd22824a7731a8.png"},7530:function(e,t,n){t.Z=n.p+"assets/images/04_make_eth-9682a645236a02db94b3f945abfa00f0.png"},7329:function(e,t,n){t.Z=n.p+"assets/images/04_make_eth_fractional-fba7615628945d440381936c6b084c1d.png"},6493:function(e,t,n){t.Z=n.p+"assets/images/05_pow-f53cdb2de8f3a5dc783753722a61f411.png"}}]);