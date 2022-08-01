"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[930],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{AA:()=>c,V3:()=>u,h8:()=>o,qh:()=>i,y$:()=>a});r(7462),r(7294);var n=r(3905);const o=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},a=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function l(e,t,r,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const i=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")},c=e=>{let{children:t}=e;return l(0,"In Progress","#ffa","#882")},u=e=>{let{children:t}=e;return l(0,"Planned","#aff","#288")}},4966:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));r(4887);const a={},l="Changelog",i={type:"mdx",permalink:"/TSBC-Documentation/changelog",source:"@site/src/pages/changelog.mdx",title:"Changelog",description:"1.0.1 - [2022-07-31]",frontMatter:{}},c=[{value:"1.0.1 - 2022-07-31",id:"101---2022-07-31",level:3},{value:"1.0.0 - 2022-07-14",id:"100---2022-07-14",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"changelog"},"Changelog"),(0,o.kt)("h3",{id:"101---2022-07-31"},"1.0.1 - ","[2022-07-31]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bugfix",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Transactions with a nonce of zero will no longer fail."),(0,o.kt)("li",{parentName:"ul"},"Ethereum unit conversion helper function will now output correct results even for extremely small result values (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," Wei \u2192 Tether = ",(0,o.kt)("inlineCode",{parentName:"li"},"0.000000000000000000000000000001"),").")))),(0,o.kt)("h3",{id:"100---2022-07-14"},"1.0.0 - ","[2022-07-14]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Initial release")))}p.isMDXComponent=!0}}]);