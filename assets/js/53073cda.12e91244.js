"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[283],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>k});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),i=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=i(t.components);return n.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=i(r),k=a,g=u["".concat(c,".").concat(k)]||u[k]||m[k]||l;return r?n.createElement(g,o(o({ref:e},d),{},{components:r})):n.createElement(g,o({ref:e},d))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=u;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4887:(t,e,r)=>{r.d(e,{AA:()=>c,V3:()=>i,h8:()=>a,qh:()=>p,y$:()=>l});r(7462),r(7294);var n=r(3905);const a=t=>{let{children:e,text:r}=t;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},l=t=>{let{children:e}=t;return(0,n.kt)("span",{style:{color:"#faa"}},e)};function o(t,e,r,a){return(0,n.kt)("div",{style:{backgroundColor:a,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},e)}const p=t=>{let{children:e}=t;return o(0,"Released","#afa","#181")},c=t=>{let{children:e}=t;return o(0,"In Progress","#ffa","#882")},i=t=>{let{children:e}=t;return o(0,"Planned","#aff","#288")}},2226:(t,e,r)=>{r.r(e),r.d(e,{contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(3905)),l=r(4887);const o={},p="Roadmap",c={type:"mdx",permalink:"/TSBC-Documentation/roadmap",source:"@site/src/pages/roadmap.mdx",title:"Roadmap",description:"| Plugin Version |    Status     | Release Date | Feature                                                                                   | UE 5.0 | UE 4.27 |",frontMatter:{}},i=[],d={toc:i};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"roadmap"},"Roadmap"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Plugin Version"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Status"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Release Date"),(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"center"},"UE 5.0"),(0,a.kt)("th",{parentName:"tr",align:"center"},"UE 4.27"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1.0.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)(l.qh,{mdxType:"Released"})),(0,a.kt)("td",{parentName:"tr",align:"center"},"2022-07-14"),(0,a.kt)("td",{parentName:"tr",align:null},"Core"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1.1.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)(l.AA,{mdxType:"InProgress"})),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"Improved working with ABIs",(0,a.kt)("br",null),"More target platforms support",(0,a.kt)("br",null),"More ETH Layer2 Networks"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1.2.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)(l.V3,{mdxType:"Planned"})),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"QR code generation"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1.3.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)(l.V3,{mdxType:"Planned"})),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"Solana Blockchain"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1.4.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)(l.V3,{mdxType:"Planned"})),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"Bitcoin Blockchain"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1.5.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)(l.V3,{mdxType:"Planned"})),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"OpenSEA Integration"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")))))}m.isMDXComponent=!0}}]);