"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[545],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4887:function(e,t,n){n.d(t,{V3:function(){return c},h8:function(){return o},qh:function(){return u},y$:function(){return i}});n(7462),n(3366),n(7294);var r=n(3905),o=function(e){e.children;var t=e.text;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},i=function(e){var t=e.children;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function a(e,t,n,o){return(0,r.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}var u=function(e){e.children;return a(0,"Released","#afa","#181")},c=function(e){e.children;return a(0,"Planned","#aff","#288")}},5778:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=(n(4887),["components"]),u={sidebar_position:1,title:"Ethereum Function Implementation"},c=void 0,s={unversionedId:"ethereum/ethereum-functions/eth-function-implementation",id:"version-1.0.0/ethereum/ethereum-functions/eth-function-implementation",title:"Ethereum Function Implementation",description:"General Functions Implementation",source:"@site/versioned_docs/version-1.0.0/ethereum/ethereum-functions/eth-function-implementation.mdx",sourceDirName:"ethereum/ethereum-functions",slug:"/ethereum/ethereum-functions/eth-function-implementation",permalink:"/TSBC-Documentation/docs/ethereum/ethereum-functions/eth-function-implementation",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.0.0/ethereum/ethereum-functions/eth-function-implementation.mdx",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Ethereum Function Implementation"},sidebar:"tutorialSidebar",previous:{title:"Uint256",permalink:"/TSBC-Documentation/docs/quick-start/uint256"},next:{title:"Get Balance",permalink:"/TSBC-Documentation/docs/ethereum/ethereum-functions/get-balance"}},l={},m=[{value:"General Functions Implementation",id:"general-functions-implementation",level:2}],p={toc:m};function f(e){var t=e.components,u=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"general-functions-implementation"},"General Functions Implementation"),(0,i.kt)("p",null,"All ",(0,i.kt)("em",{parentName:"p"},"Ethereum")," functions that are supported in the plugin have 2 versions of them as shown in the image below.\nThe first one have a ",(0,i.kt)("em",{parentName:"p"},"Response Delegate")," as ",(0,i.kt)("em",{parentName:"p"},"Call-back"),",and the other one have ",(0,i.kt)("em",{parentName:"p"},"Response Delegate")," as ",(0,i.kt)("em",{parentName:"p"},"Async Task"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"General Functions Implementation",src:n(2201).Z,width:"529",height:"476"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Async")," functions works better for use cases where there is no parallel calls. While ",(0,i.kt)("em",{parentName:"p"},"Call-backs")," works best if you're querying multiple calls at the\nsame time and not putting them in queue."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Both versions take the same input and returns the same output."))))}f.isMDXComponent=!0},2201:function(e,t,n){t.Z=n.p+"assets/images/01_eth_general_functions-bfa9586e33a8537b66cbe87e0e294338.png"}}]);