"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[8751],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{AA:()=>c,V3:()=>s,h8:()=>o,qh:()=>l,y$:()=>a});r(7462),r(7294);var n=r(3905);const o=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},a=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function i(e,t,r,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return i(0,"Released","#afa","#181")},c=e=>{let{children:t}=e;return i(0,"In Progress","#ffa","#882")},s=e=>{let{children:t}=e;return i(0,"Planned","#aff","#288")}},7150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),a=r(4887);const i={sidebar_position:2,title:"Get Layer 2 Configuration"},l=void 0,c={unversionedId:"Layer2/get-layer2-config",id:"version-1.1.0/Layer2/get-layer2-config",title:"Get Layer 2 Configuration",description:"Get Layer 2 Configuration is a helper function that gets configuration data for a specific Layer 2 network needed",source:"@site/versioned_docs/version-1.1.0/Layer2/get-layer2-config.mdx",sourceDirName:"Layer2",slug:"/Layer2/get-layer2-config",permalink:"/TSBC-Documentation/docs/Layer2/get-layer2-config",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.1.0/Layer2/get-layer2-config.mdx",tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Get Layer 2 Configuration"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/TSBC-Documentation/docs/Layer2/overview"},next:{title:"Get a list of assets",permalink:"/TSBC-Documentation/docs/Layer2/ImmutableX/get-list-assets"}},s={},u=[],p={toc:u};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Get Layer 2 Configuration")," is a helper function that gets configuration data for a specific Layer 2 network needed\nto send HTTP calls to ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"}),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Get Layer 2 Configuration",src:r(2813).Z,width:"1783",height:"480"})),(0,o.kt)("p",null,"This function returns a ",(0,o.kt)("em",{parentName:"p"},"Struct")," that contains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," Network's RPC URL endpoint."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," Network's name.")),(0,o.kt)("p",null,"Currently supported networks are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://loopring.io/"},"Loopring")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.immutable.com/"},"ImmutableX"))))}d.isMDXComponent=!0},2813:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/L2-config-1f29c78e15c90c3747a1e31e55675594.png"}}]);