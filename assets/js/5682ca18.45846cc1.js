"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[8745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>i,h8:()=>o,qh:()=>l,y$:()=>a});r(87462),r(67294);var n=r(3905);const o=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},a=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:r}=e;const o="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function c(e,t,r,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return c(0,"Released","#afa","#181")}},19088:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(4887);const i={sidebar_position:7,title:"HMAC"},c=void 0,l={unversionedId:"other-functionality/hmac",id:"version-2.5.1/other-functionality/hmac",title:"HMAC",description:"HMAC Generation",source:"@site/versioned_docs/version-2.5.1/other-functionality/hmac.mdx",sourceDirName:"other-functionality",slug:"/other-functionality/hmac",permalink:"/TSBC-Documentation/docs/2.5.1/other-functionality/hmac",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.5.1/other-functionality/hmac.mdx",tags:[],version:"2.5.1",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"HMAC"},sidebar:"tutorialSidebar",previous:{title:"Secp256k1",permalink:"/TSBC-Documentation/docs/2.5.1/cryptography/ecdsa/secp256k1"},next:{title:"PBKDF2",permalink:"/TSBC-Documentation/docs/2.5.1/other-functionality/pbkdf2-hmac"}},s={},p=[{value:"HMAC Generation",id:"hmac-generation",level:2}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hmac-generation"},"HMAC Generation"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Generate HMAC")," generates a ",(0,o.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc2104.html"},(0,o.kt)("em",{parentName:"a"},"Hash-based Message Authentication Code")),".\nThis function requires inputs as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Digest Type ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : Type of digest function used in creating the code."),(0,o.kt)("li",{parentName:"ul"},"Data ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," : The data used in creation of the code, first HMAC parameter."),(0,o.kt)("li",{parentName:"ul"},"Key ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," : The key used in creation of the code, second HMAC parameter.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"HMAC Generation",src:r(72981).Z,width:"682",height:"262"})),(0,o.kt)("p",null,"If the operation is successful, the value ",(0,o.kt)("em",{parentName:"p"},"Code")," ",(0,o.kt)(a.h8,{text:"4",mdxType:"Step"})," will hold the generated HMAC."))}d.isMDXComponent=!0},72981:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/generate_hmac-3db08702f9ea75e7e9e7e6062c8da723.png"}}]);