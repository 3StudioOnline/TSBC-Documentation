"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[5106],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>a,V3:()=>p,h8:()=>i,qh:()=>l,y$:()=>o});r(87462),r(67294);var n=r(3905);const i=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},o=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function a(e){let{children:t,version:r}=e;const i="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:i,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function c(e,t,r,i){return(0,n.kt)("div",{style:{backgroundColor:i,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return c(0,"Released","#afa","#181")},p=e=>{let{children:t}=e;return c(0,"Planned","#aff","#288")}},41203:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905)),o=r(4887);const a={sidebar_position:8,title:"PBKDF2"},c=void 0,l={unversionedId:"other-functionality/pbkdf2-hmac",id:"version-2.4.0/other-functionality/pbkdf2-hmac",title:"PBKDF2",description:"Password-Based Key Derivation Function 2 is used in deriving cryptographic keys.",source:"@site/versioned_docs/version-2.4.0/other-functionality/pbkdf2-hmac.mdx",sourceDirName:"other-functionality",slug:"/other-functionality/pbkdf2-hmac",permalink:"/TSBC-Documentation/docs/other-functionality/pbkdf2-hmac",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.4.0/other-functionality/pbkdf2-hmac.mdx",tags:[],version:"2.4.0",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"PBKDF2"},sidebar:"tutorialSidebar",previous:{title:"HMAC",permalink:"/TSBC-Documentation/docs/other-functionality/hmac"},next:{title:"Overview",permalink:"/TSBC-Documentation/docs/Layer2/overview"}},p={},s=[{value:"Deriving a Key Using PBKDF2-HMAC",id:"deriving-a-key-using-pbkdf2-hmac",level:2}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc2898.html"},(0,i.kt)("em",{parentName:"a"},"Password-Based Key Derivation Function 2"))," is used in deriving cryptographic keys."),(0,i.kt)("h2",{id:"deriving-a-key-using-pbkdf2-hmac"},"Deriving a Key Using PBKDF2-HMAC"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Derive Key (PBKDF2-HMAC)")," generates a derived key using the PBKDF2 algorithm, applying ",(0,i.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc2104.html"},"HMAC"),"\nas its pseudorandom function.\nThis function requires inputs as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Digest Type ",(0,i.kt)(o.h8,{text:"1",mdxType:"Step"})," : Type of digest function used in HMAC."),(0,i.kt)("li",{parentName:"ul"},"Password ",(0,i.kt)(o.h8,{text:"2",mdxType:"Step"})," : The password used as master for derived key."),(0,i.kt)("li",{parentName:"ul"},"Salt ",(0,i.kt)(o.h8,{text:"3",mdxType:"Step"})," : The ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Salt_(cryptography)"},"cryptographic salt"),"."),(0,i.kt)("li",{parentName:"ul"},"Iterations ",(0,i.kt)(o.h8,{text:"4",mdxType:"Step"})," : Number of iterations performed."),(0,i.kt)("li",{parentName:"ul"},"Derived Length ",(0,i.kt)(o.h8,{text:"5",mdxType:"Step"})," : Length of the derived key.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deriving a Key Using PBKDF2-HMAC",src:r(18168).Z,width:"696",height:"321"})),(0,i.kt)("p",null,"If the operation is successful, the value ",(0,i.kt)("em",{parentName:"p"},"Derived Key")," ",(0,i.kt)(o.h8,{text:"6",mdxType:"Step"})," will hold the generated key, of specified length."))}u.isMDXComponent=!0},18168:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pbkdf2_hmac-4a55b28001d0b6cdb32fe8e7d719ae89.png"}}]);