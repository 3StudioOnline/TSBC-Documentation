"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[438],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4887:function(e,t,r){r.d(t,{h8:function(){return a},qh:function(){return c},y$:function(){return o}});r(7462),r(3366),r(7294);var n=r(3905),a=function(e){e.children;var t=e.text;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},o=function(e){var t=e.children;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function i(e,t,r,a){return(0,n.kt)("div",{style:{backgroundColor:a,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}var c=function(e){e.children;return i(0,"Released","#afa","#181")}},7606:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(4887),c=["components"],s={sidebar_position:1,title:"Parse ABI From JSON"},u=void 0,l={unversionedId:"ethereum/abi/parse-abi",id:"version-1.0.0/ethereum/abi/parse-abi",title:"Parse ABI From JSON",description:"Contract ABI",source:"@site/versioned_docs/version-1.0.0/ethereum/abi/parse-abi.mdx",sourceDirName:"ethereum/abi",slug:"/ethereum/abi/parse-abi",permalink:"/TSBC-Documentation/docs/ethereum/abi/parse-abi",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.0.0/ethereum/abi/parse-abi.mdx",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Parse ABI From JSON"},sidebar:"tutorialSidebar",previous:{title:"Call",permalink:"/TSBC-Documentation/docs/ethereum/ethereum-functions/eth-call"},next:{title:"Encode ABI",permalink:"/TSBC-Documentation/docs/ethereum/abi/encode-abi"}},p={},d=[{value:"Contract ABI",id:"contract-abi",level:2},{value:"Parse ABI From JSON",id:"parse-abi-from-json",level:2}],m={toc:d};function f(e){var t=e.components,s=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"contract-abi"},"Contract ABI"),(0,o.kt)("p",null,"To interact with a smart contract you need to be able to encode and decode the contract functions and their variables. To do so you must either\nstore the contracts ABI or get it from ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/"},"Ether Scan")," for verified contracts.\nMore on the subject ",(0,o.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/develop/abi-spec.html"},"here"),"."),(0,o.kt)("h2",{id:"parse-abi-from-json"},"Parse ABI From JSON"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Parse ABI from JSON")," Tries to parse an Ethereum Smart Contract ABI from the given JSON. This function requires input as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Contract ABI JSON ",(0,o.kt)(i.h8,{text:"1",mdxType:"Step"})," : The Ethereum Smart Contract ABI in JSON format to parse.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Parse ABI From JSON",src:r(4462).Z,width:"516",height:"228"})),(0,o.kt)("p",null,"If the operation is successful, the value ",(0,o.kt)("em",{parentName:"p"},"Contract ABI")," ",(0,o.kt)(i.h8,{text:"2",mdxType:"Step"})," will hold the function names with it's required arguments and it's return values."),(0,o.kt)("p",null,"Example of how the ABI looks like, this if from ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D#code"},"Bored Apes Yacht Club")," contract address."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Contract ABI Example",src:r(5197).Z,width:"1619",height:"1002"})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It's recommended to store the value ",(0,o.kt)("em",{parentName:"p"},"Contract ABI"),", since it will be used for encoding and decoding function arguments."))))}f.isMDXComponent=!0},4462:function(e,t,r){t.Z=r.p+"assets/images/01_parse_json-364021a7f7d7f87086c92321e02d75d6.png"},5197:function(e,t,r){t.Z=r.p+"assets/images/02_contract_abi-180572ec6545d203d3855b32b83e0fe6.png"}}]);