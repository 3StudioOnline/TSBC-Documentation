"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[2566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>i,V3:()=>s,h8:()=>a,qh:()=>l,y$:()=>o});n(7462),n(7294);var r=n(3905);const a=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:n}=e;const a="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function c(e,t,n,a){return(0,r.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return c(0,"Released","#afa","#181")},s=e=>{let{children:t}=e;return c(0,"Planned","#aff","#288")}},5251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4887);const i={sidebar_position:2,title:"Encode Smart Contract ABI"},c=void 0,l={unversionedId:"ethereum/abi/encode-abi",id:"version-2.1.1/ethereum/abi/encode-abi",title:"Encode Smart Contract ABI",description:"The Encode Smart Contract ABI node generates a Function Selector with argument encoding for a specific function of an Ethereum Smart Contract.",source:"@site/versioned_docs/version-2.1.1/ethereum/abi/encode-abi.mdx",sourceDirName:"ethereum/abi",slug:"/ethereum/abi/encode-abi",permalink:"/TSBC-Documentation/docs/ethereum/abi/encode-abi",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.1.1/ethereum/abi/encode-abi.mdx",tags:[],version:"2.1.1",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Encode Smart Contract ABI"},sidebar:"tutorialSidebar",previous:{title:"Contract ABI Data Asset",permalink:"/TSBC-Documentation/docs/ethereum/abi/parse-abi"},next:{title:"Decode Smart Contract ABI",permalink:"/TSBC-Documentation/docs/ethereum/abi/decode-abi"}},s={},d=[{value:"Examples",id:"examples",level:2}],p={toc:d};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Encode Smart Contract ABI")," node generates a ",(0,a.kt)("em",{parentName:"p"},"Function Selector")," with argument encoding for a specific function of an ",(0,a.kt)("em",{parentName:"p"},"Ethereum Smart Contract"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Contract ABI Data Asset ",(0,a.kt)(o.h8,{text:"1",mdxType:"Step"})," : Data asset that holds parsed data for the ",(0,a.kt)("em",{parentName:"li"},"Smart Contract ABI"),"."),(0,a.kt)("li",{parentName:"ul"},"Function Name ",(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," : The function name to hash."),(0,a.kt)("li",{parentName:"ul"},"Successful ",(0,a.kt)(o.h8,{text:"3",mdxType:"Step"})," : Executes when encoding was successful."),(0,a.kt)("li",{parentName:"ul"},"Failed ",(0,a.kt)(o.h8,{text:"4",mdxType:"Step"})," : Executes when encoding failed."),(0,a.kt)("li",{parentName:"ul"},"Error Message ",(0,a.kt)(o.h8,{text:"5",mdxType:"Step"})," : Contains an error message in case the operation failed. Otherwise, it will be empty."),(0,a.kt)("li",{parentName:"ul"},"Function Hash And Encoded Arguments ",(0,a.kt)(o.h8,{text:"6",mdxType:"Step"})," : The ",(0,a.kt)("em",{parentName:"li"},"Function Selector")," with encoded arguments."),(0,a.kt)("li",{parentName:"ul"},"Function Arguments ",(0,a.kt)(o.h8,{text:"7",mdxType:"Step"})," : ",(0,a.kt)("inlineCode",{parentName:"li"},"Argument pins")," will be generated dynamically depending on the selected function.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Encode Smart Contract ABI",src:n(3574).Z,width:"1291",height:"661"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If the operation was successful, the output variable ",(0,a.kt)("em",{parentName:"p"},"Function Hash And Encoded Arguments")," ",(0,a.kt)(o.h8,{text:"6",mdxType:"Step"})," will hold the\nencoded data required to call the function on the ",(0,a.kt)("em",{parentName:"p"},"Smart Contract")," using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/ethereum/ethereum-functions/eth-call"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_call")," function"),".")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Here is an example of how this node will look like when selecting different smart contract functions.\nThe ",(0,a.kt)("em",{parentName:"p"},"argument pins")," are dynamically generated according to the selected function's signature. This means that\nthe number of ",(0,a.kt)("em",{parentName:"p"},"argument pins")," and their respective names and data types will be correctly reflected."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Encode Smart Contract ABI",src:n(24).Z,width:"3299",height:"1442"})),(0,a.kt)("admonition",{title:"Limitations",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Due to limitations in ",(0,a.kt)("em",{parentName:"p"},"Blueprints")," adding nested arrays to this node was not possible, so a ",(0,a.kt)("em",{parentName:"p"},"Smart Contract")," function\nwith a ",(0,a.kt)("inlineCode",{parentName:"p"},"TupleArray")," argument type can't be encoded, and a ",(0,a.kt)("em",{parentName:"p"},"Smart Contract")," function with 1 ",(0,a.kt)("inlineCode",{parentName:"p"},"Tuple")," plus any other\ntype, can't be encoded also.")))}m.isMDXComponent=!0},3574:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/04_encode-smart-contract-abi-ab281d4a82b6e57c0f8c495b6524521d.png"},24:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/05_encode-smart-contract-abi-examples-c2d96bfc0bb18581c06e0a83b5bf3eb4.png"}}]);