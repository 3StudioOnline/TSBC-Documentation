"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[94358],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=i.createContext({}),c=function(e){var t=i.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,y=u["".concat(d,".").concat(h)]||u[h]||p[h]||a;return r?i.createElement(y,o(o({ref:t},s),{},{components:r})):i.createElement(y,o({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>o,h8:()=>n,qh:()=>d,y$:()=>a});r(87462),r(67294);var i=r(3905);const n=e=>{let{children:t,text:r}=e;return(0,i.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},a=e=>{let{children:t}=e;return(0,i.kt)("span",{style:{color:"#faa"}},t)};function o(e){let{children:t,version:r}=e;const n="#ffffff";return(0,i.kt)("span",{style:{backgroundColor:"#414141",color:n,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function l(e,t,r,n){return(0,i.kt)("div",{style:{backgroundColor:n,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const d=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")}},98401:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var i=r(87462),n=(r(67294),r(3905)),a=r(4887);const o={sidebar_position:1,title:"Private Key"},l=void 0,d={unversionedId:"hd-wallets/child-key-derivation/private-key",id:"version-2.4.0/hd-wallets/child-key-derivation/private-key",title:"Private Key",description:"Child private keys can only be derived from private keys. The child can be hardened. Non-hardened keys are still useful,",source:"@site/versioned_docs/version-2.4.0/hd-wallets/child-key-derivation/private-key.mdx",sourceDirName:"hd-wallets/child-key-derivation",slug:"/hd-wallets/child-key-derivation/private-key",permalink:"/TSBC-Documentation/docs/2.4.0/hd-wallets/child-key-derivation/private-key",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.4.0/hd-wallets/child-key-derivation/private-key.mdx",tags:[],version:"2.4.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Private Key"},sidebar:"tutorialSidebar",previous:{title:"Keypair Generation",permalink:"/TSBC-Documentation/docs/2.4.0/hd-wallets/master-key-generation/keypair-generation"},next:{title:"Public Key",permalink:"/TSBC-Documentation/docs/2.4.0/hd-wallets/child-key-derivation/public-key"}},c={},s=[{value:"Deriving a Child Private Key",id:"deriving-a-child-private-key",level:2}],p={toc:s};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Child private keys can only be derived from private keys. The child can be ",(0,n.kt)("em",{parentName:"p"},"hardened"),". ",(0,n.kt)("em",{parentName:"p"},"Non-hardened")," keys are still useful,\nbut need to be handled carefully to avoid security risks.\nFor more information about the concept of a ",(0,n.kt)("em",{parentName:"p"},"hardened")," child read ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#implications"},"BIP-32"),"."),(0,n.kt)("h2",{id:"deriving-a-child-private-key"},"Deriving a Child Private Key"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Derive HD Wallet Private Key")," uses an extended private key to create a child key with specified parameters.\nThis function requires inputs as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Key ",(0,n.kt)(a.h8,{text:"1",mdxType:"Step"})," : The private key used in the derivation process. Invalid and public keys will cause the operation to fail."),(0,n.kt)("li",{parentName:"ul"},"Child Type ",(0,n.kt)(a.h8,{text:"2",mdxType:"Step"})," : Type of child to create. This allows for the child key to be ",(0,n.kt)("em",{parentName:"li"},"hardened")," if needed."),(0,n.kt)("li",{parentName:"ul"},"Child Index ",(0,n.kt)(a.h8,{text:"3",mdxType:"Step"})," : The number of the child. It is an index between 0 and 2",(0,n.kt)("sup",null,"31"),"-1.\n",(0,n.kt)("em",{parentName:"li"},"Hardened")," child keys will have their index shifted by 2",(0,n.kt)("sup",null,"31")," when serialized to match BIP-32 specification.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Deriving a Child Private Key",src:r(88697).Z,width:"688",height:"256"})),(0,n.kt)("p",null,"If the operation is successful, the value ",(0,n.kt)("em",{parentName:"p"},"Derived Key")," ",(0,n.kt)(a.h8,{text:"4",mdxType:"Step"})," will hold the generated valid child private key."))}u.isMDXComponent=!0},88697:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/derive_hd_wallet_private_key-6b501b4dab8e1449a42a4dfe4cfd2653.png"}}]);