"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[3904],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),l=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=l(a),u=n,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?r.createElement(f,i(i({ref:e},p),{},{components:a})):r.createElement(f,i({ref:e},p))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4887:(t,e,a)=>{a.d(e,{UE:()=>i,V3:()=>l,h8:()=>n,qh:()=>s,y$:()=>o});a(7462),a(7294);var r=a(3905);const n=t=>{let{children:e,text:a}=t;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},a)},o=t=>{let{children:e}=t;return(0,r.kt)("span",{style:{color:"#faa"}},e)};function i(t){let{children:e,version:a}=t;const n="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:n,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},a)}function c(t,e,a,n){return(0,r.kt)("div",{style:{backgroundColor:n,color:a,border:"1px "+a+" solid",borderRadius:"5px",padding:".1rem .4rem"}},e)}const s=t=>{let{children:e}=t;return c(0,"Released","#afa","#181")},l=t=>{let{children:e}=t;return c(0,"Planned","#aff","#288")}},8412:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),o=a(4887);const i={sidebar_position:1,title:"Contract ABI Data Asset"},c=void 0,s={unversionedId:"ethereum/abi/parse-abi",id:"version-2.1.1/ethereum/abi/parse-abi",title:"Contract ABI Data Asset",description:"Smart Contract ABI",source:"@site/versioned_docs/version-2.1.1/ethereum/abi/parse-abi.mdx",sourceDirName:"ethereum/abi",slug:"/ethereum/abi/parse-abi",permalink:"/TSBC-Documentation/docs/ethereum/abi/parse-abi",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.1.1/ethereum/abi/parse-abi.mdx",tags:[],version:"2.1.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Contract ABI Data Asset"},sidebar:"tutorialSidebar",previous:{title:"Get Transaction By Hash",permalink:"/TSBC-Documentation/docs/ethereum/ethereum-functions/get-transaction-by-hash"},next:{title:"Encode Smart Contract ABI",permalink:"/TSBC-Documentation/docs/ethereum/abi/encode-abi"}},l={},p=[{value:"Smart Contract ABI",id:"smart-contract-abi",level:2},{value:"Create Contract ABI Data Asset",id:"create-contract-abi-data-asset",level:2},{value:"Configure Contract ABI Data Asset",id:"configure-contract-abi-data-asset",level:2}],d={toc:p};function m(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"smart-contract-abi"},"Smart Contract ABI"),(0,n.kt)("p",null,"To interact with a smart contract you need to be able to encode and decode the contract functions and their variables. To do so you must either\nstore the contract's ABI or get it from ",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/"},"Ether Scan")," for verified contracts.\nMore on the subject ",(0,n.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/develop/abi-spec.html"},"here"),"."),(0,n.kt)("h2",{id:"create-contract-abi-data-asset"},"Create Contract ABI Data Asset"),(0,n.kt)("p",null,"To create a ",(0,n.kt)("em",{parentName:"p"},"Contract ABI")," data asset, right-click in the ",(0,n.kt)("em",{parentName:"p"},"Content Browser")," and\nselect ",(0,n.kt)("inlineCode",{parentName:"p"},"3Studio")," ",(0,n.kt)(o.h8,{text:"1",mdxType:"Step"})," then ",(0,n.kt)("inlineCode",{parentName:"p"},"Contract ABI Data Asset")," ",(0,n.kt)(o.h8,{text:"2",mdxType:"Step"}),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create Contract ABI Data Asset",src:a(7070).Z,width:"1972",height:"1837"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For this example we will copy the ",(0,n.kt)("em",{parentName:"p"},"Smart Contract ABI")," from ",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D#code"},"Bored Apes Yacht Club")," contract address.")),(0,n.kt)("h2",{id:"configure-contract-abi-data-asset"},"Configure Contract ABI Data Asset"),(0,n.kt)("p",null,"Open the ",(0,n.kt)("em",{parentName:"p"},"Contract ABI")," data asset. It will hold data as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Contract Abi Json"),": Paste the copied ",(0,n.kt)("em",{parentName:"li"},"Smart Contract ABI")," JSON string into this field. ",(0,n.kt)(o.h8,{text:"1",mdxType:"Step"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Parse Json"),": Tries to parse the ",(0,n.kt)("em",{parentName:"li"},"Smart Contract ABI")," from the given JSON. ",(0,n.kt)(o.h8,{text:"2",mdxType:"Step"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Contract Abi Validity Status"),": Displays the status of parsing the ",(0,n.kt)("em",{parentName:"li"},"Smart Contract ABI")," JSON data. ",(0,n.kt)(o.h8,{text:"3",mdxType:"Step"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Contract Abi Functions"),": List of data needed from the ",(0,n.kt)("em",{parentName:"li"},"Smart Contract ABI")," which will be used later for encoding and decoding. ",(0,n.kt)(o.h8,{text:"4",mdxType:"Step"}))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Configure Contract ABI Data Asset",src:a(6585).Z,width:"3840",height:"1196"})),(0,n.kt)("admonition",{title:"Potential pitfall",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Whenever you make changes to the JSON in ",(0,n.kt)("inlineCode",{parentName:"p"},"Contract Abi Json")," ",(0,n.kt)(o.h8,{text:"1",mdxType:"Step"}),", don't forget to also click the ",(0,n.kt)("inlineCode",{parentName:"p"},"Parse Json")," ",(0,n.kt)(o.h8,{text:"2",mdxType:"Step"})," button.")))}m.isMDXComponent=!0},7070:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/01_contract-abi-data-asset-edc4a6bc0d5085a1d512ef2325d2e1e2.png"},6585:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/03_contract-abi-data-asset-d7baa98b5642fc7d58033c845a091007.png"}}]);