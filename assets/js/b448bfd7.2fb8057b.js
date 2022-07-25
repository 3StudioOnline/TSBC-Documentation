"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[142],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=d(r),f=o,m=s["".concat(u,".").concat(f)]||s[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4887:function(e,t,r){r.d(t,{V3:function(){return u},h8:function(){return o},qh:function(){return c},y$:function(){return a}});r(7462),r(3366),r(7294);var n=r(3905),o=function(e){e.children;var t=e.text;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},a=function(e){var t=e.children;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function i(e,t,r,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}var c=function(e){e.children;return i(0,"Released","#afa","#181")},u=function(e){e.children;return i(0,"Planned","#aff","#288")}},7776:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=r(4887),c=["components"],u={sidebar_position:3,title:"Decode ABI"},d=void 0,l={unversionedId:"ethereum/abi/decode-abi",id:"version-1.0.0/ethereum/abi/decode-abi",title:"Decode ABI",description:"Decode ABI",source:"@site/versioned_docs/version-1.0.0/ethereum/abi/decode-abi.mdx",sourceDirName:"ethereum/abi",slug:"/ethereum/abi/decode-abi",permalink:"/TSBC-Documentation/docs/ethereum/abi/decode-abi",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.0.0/ethereum/abi/decode-abi.mdx",tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Decode ABI"},sidebar:"tutorialSidebar",previous:{title:"Encode ABI",permalink:"/TSBC-Documentation/docs/ethereum/abi/encode-abi"},next:{title:"FAQ",permalink:"/TSBC-Documentation/docs/faq"}},p={},s=[{value:"Decode ABI",id:"decode-abi",level:2}],f={toc:s};function m(e){var t=e.components,u=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"decode-abi"},"Decode ABI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Decode ABI")," Decodes the resulting data returned from an ",(0,a.kt)("em",{parentName:"p"},"Ethereum")," RPC-call. This function requires input as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Contract ABI Struct ",(0,a.kt)(i.h8,{text:"1",mdxType:"Step"})," : The parsed object generated from ",(0,a.kt)("inlineCode",{parentName:"li"},"Parse ABI From JSON"),"."),(0,a.kt)("li",{parentName:"ul"},"Function Name ",(0,a.kt)(i.h8,{text:"2",mdxType:"Step"})," : The function name that was used to call the ",(0,a.kt)("em",{parentName:"li"},"Ethereum Smart Contract")," function which returned the data that should now be decoded here."),(0,a.kt)("li",{parentName:"ul"},"Data to Decode ",(0,a.kt)(i.h8,{text:"3",mdxType:"Step"})," : Data to decode.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Decode ABI",src:r(5289).Z,width:"593",height:"228"})),(0,a.kt)("p",null,"If the operation is successful, the value ",(0,a.kt)("em",{parentName:"p"},"Decoded ABI Values")," ",(0,a.kt)(i.h8,{text:"4",mdxType:"Step"})," will hold the decoded data returned from an ",(0,a.kt)("em",{parentName:"p"},"Ethereum")," RPC-call."))}m.isMDXComponent=!0},5289:function(e,t,r){t.Z=r.p+"assets/images/04_decode_abi-1fb99f5f857994bb0ca6cee47d82f86a.png"}}]);