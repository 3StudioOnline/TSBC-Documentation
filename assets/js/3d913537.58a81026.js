"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[2084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,f=m["".concat(d,".").concat(u)]||m[u]||s[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>i,h8:()=>a,qh:()=>d,y$:()=>o});n(87462),n(67294);var r=n(3905);const a=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:n}=e;const a="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function c(e,t,n,a){return(0,r.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const d=e=>{let{children:t}=e;return c(0,"Released","#afa","#181")}},78626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(4887);const i={sidebar_position:3,title:"Decode Smart Contract ABI"},c=void 0,d={unversionedId:"ethereum/abi/decode-abi",id:"version-2.0.4/ethereum/abi/decode-abi",title:"Decode Smart Contract ABI",description:"The Decode Smart Contract ABI node generates a Function Selector with argument decoding for a specific function of an Ethereum Smart Contract.",source:"@site/versioned_docs/version-2.0.4/ethereum/abi/decode-abi.mdx",sourceDirName:"ethereum/abi",slug:"/ethereum/abi/decode-abi",permalink:"/TSBC-Documentation/docs/2.0.4/ethereum/abi/decode-abi",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.0.4/ethereum/abi/decode-abi.mdx",tags:[],version:"2.0.4",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Decode Smart Contract ABI"},sidebar:"tutorialSidebar",previous:{title:"Encode Smart Contract ABI",permalink:"/TSBC-Documentation/docs/2.0.4/ethereum/abi/encode-abi"},next:{title:"Overview",permalink:"/TSBC-Documentation/docs/2.0.4/Layer2/overview"}},l={},p=[{value:"Examples",id:"examples",level:2}],s={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Decode Smart Contract ABI")," node generates a ",(0,a.kt)("em",{parentName:"p"},"Function Selector")," with argument decoding for a specific function of an ",(0,a.kt)("em",{parentName:"p"},"Ethereum Smart Contract"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Contract ABI Data Asset ",(0,a.kt)(o.h8,{text:"1",mdxType:"Step"})," : Data asset that holds parsed data for the ",(0,a.kt)("em",{parentName:"li"},"Smart Contract ABI"),"."),(0,a.kt)("li",{parentName:"ul"},"Function Name ",(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," : The function name to hash."),(0,a.kt)("li",{parentName:"ul"},"Data to Decode ",(0,a.kt)(o.h8,{text:"3",mdxType:"Step"})," : The data to decode."),(0,a.kt)("li",{parentName:"ul"},"Successful ",(0,a.kt)(o.h8,{text:"4",mdxType:"Step"})," : Executes when decoding was successful."),(0,a.kt)("li",{parentName:"ul"},"Failed ",(0,a.kt)(o.h8,{text:"5",mdxType:"Step"})," : Executes when decoding failed."),(0,a.kt)("li",{parentName:"ul"},"Error Message ",(0,a.kt)(o.h8,{text:"6",mdxType:"Step"})," : Contains an error message in case the operation failed. Otherwise, it will be empty."),(0,a.kt)("li",{parentName:"ul"},"Outputs ",(0,a.kt)(o.h8,{text:"7",mdxType:"Step"})," : ",(0,a.kt)("inlineCode",{parentName:"li"},"Output pins")," will be generated dynamically depending on the selected function.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Decode Smart Contract ABI",src:n(98199).Z,width:"1241",height:"681"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If the operation was successful, the value in the generated ",(0,a.kt)("em",{parentName:"p"},"Output pins")," ",(0,a.kt)(o.h8,{text:"7",mdxType:"Step"})," will hold the decoded data returned from an ",(0,a.kt)("em",{parentName:"p"},"Ethereum")," RPC-call.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Here is an example of how the node will look like when selecting different smart contract functions to generate ",(0,a.kt)("em",{parentName:"p"},"Output pins"),"."),(0,a.kt)("p",null,"Here is an example of how this node will look like when selecting different smart contract functions.\nThe ",(0,a.kt)("em",{parentName:"p"},"output pins")," are dynamically generated according to the selected function's signature. This means that\nthe number of ",(0,a.kt)("em",{parentName:"p"},"output pins")," and their respective names and data types will be correctly reflected."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Decode Smart Contract ABI",src:n(24692).Z,width:"2636",height:"1108"})),(0,a.kt)("admonition",{title:"Limitations",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Due to limitations in ",(0,a.kt)("em",{parentName:"p"},"Blueprints")," adding nested arrays to this node was not possible, so a ",(0,a.kt)("em",{parentName:"p"},"Smart Contract")," function\nwith a ",(0,a.kt)("inlineCode",{parentName:"p"},"TupleArray")," output type can't be decoded, and a ",(0,a.kt)("em",{parentName:"p"},"Smart Contract")," function with 1 ",(0,a.kt)("inlineCode",{parentName:"p"},"Tuple")," plus any other\ntype, can't be decoded also.")))}m.isMDXComponent=!0},98199:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/06_decode-smart-contract-abi-7b1d45bf0287b16f71d5db831949d201.png"},24692:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/07_decode-smart-contract-abi-examples-3768f65ee157f7fce8e255923771184b.png"}}]);