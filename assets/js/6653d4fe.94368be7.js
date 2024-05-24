"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[5690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>i,h8:()=>o,qh:()=>c,y$:()=>a});n(87462),n(67294);var r=n(3905);const o=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},a=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:n}=e;const o="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function p(e,t,n,o){return(0,r.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return p(0,"Released","#afa","#181")}},2902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905)),a=n(4887);const i={sidebar_position:2,title:"Recipient"},p="Preparing the Recipient Contract",c={unversionedId:"ethereum/meta-transactions/example/recipient",id:"version-2.6.0/ethereum/meta-transactions/example/recipient",title:"Recipient",description:"We will be using Remix web IDE to compile and deploy Smart Contracts to the Blockchain.",source:"@site/versioned_docs/version-2.6.0/ethereum/meta-transactions/example/recipient.mdx",sourceDirName:"ethereum/meta-transactions/example",slug:"/ethereum/meta-transactions/example/recipient",permalink:"/TSBC-Documentation/docs/ethereum/meta-transactions/example/recipient",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.6.0/ethereum/meta-transactions/example/recipient.mdx",tags:[],version:"2.6.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Recipient"},sidebar:"tutorialSidebar",previous:{title:"Forwarder",permalink:"/TSBC-Documentation/docs/ethereum/meta-transactions/example/forwarder"},next:{title:"Unreal Engine Example",permalink:"/TSBC-Documentation/docs/ethereum/meta-transactions/example/unreal-engine"}},l={},s=[],m={toc:s};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"preparing-the-recipient-contract"},"Preparing the Recipient Contract"),(0,o.kt)("p",null,"We will be using ",(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix")," web IDE to compile and deploy Smart Contracts to the Blockchain."),(0,o.kt)("p",null,"Recipient Smart Contracts that are supposed to be called via Meta Transactions need to inherit from\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/metatx/ERC2771Context.sol"},"ERC2771Context"),"\nwhich provides a mechanism to override the sender and calldata of the execution context (msg.sender and msg.data)\nwith custom values specified by a trusted forwarder."),(0,o.kt)("h1",{id:"remix-ide"},"Remix IDE"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a new file in Remix and name it ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For demo purposes we will be using a simple counter contract."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport "@openzeppelin/contracts/metatx/ERC2771Context.sol";\n\ncontract Counter is ERC2771Context {\n    uint256 private count = 0; // A variable to hold the value of the counter\n\n    constructor(address trustedForwarder) ERC2771Context(trustedForwarder) {\n    }\n\n    // Function to increase the counter by 1\n    function incrementCounter() public {\n        count += 1;\n    }\n\n    // Function to read the current value of the counter\n    function getCount() public view returns (uint256) {\n        return count;\n    }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"As shown in the code snippet, we imported ",(0,o.kt)("inlineCode",{parentName:"p"},"ERC2771Context.sol")," from OpenZeppelin ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"}),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This contract inherits from ",(0,o.kt)("inlineCode",{parentName:"p"},"ERC2771Context")," ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"}),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We added a constructor for the contract that passes the trusted forwarder to the constructor of ",(0,o.kt)("inlineCode",{parentName:"p"},"ERC2771Context")," ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"}),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Then compile the file using compiler version 0.8.20+. After that you go to ",(0,o.kt)("em",{parentName:"p"},"DEPLOY & RUN TRANSACTIONS")," tab and select\nfrom the ",(0,o.kt)("inlineCode",{parentName:"p"},"Environment")," drop down ",(0,o.kt)("em",{parentName:"p"},"Injected Provider - MetaMask")," ",(0,o.kt)(a.h8,{text:"4",mdxType:"Step"}),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make sure the correct contract is selected in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract")," drop down which is ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," ",(0,o.kt)(a.h8,{text:"5",mdxType:"Step"}),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Lastly you need to provide the ",(0,o.kt)("em",{parentName:"p"},"Trusted Forwarder Address")," that we deployed earlier to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," constructor in\norder to deploy this contract ",(0,o.kt)(a.h8,{text:"6",mdxType:"Step"}),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Forwarder",src:n(75214).Z,width:"1098",height:"529"})))}d.isMDXComponent=!0},75214:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/recipient-802368e366de8d4950669648b5fb28cc.png"}}]);