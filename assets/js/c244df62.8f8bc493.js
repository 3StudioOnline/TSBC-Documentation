"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[52701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,y=u["".concat(d,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>l,h8:()=>i,qh:()=>d,y$:()=>a});n(87462),n(67294);var r=n(3905);const i=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},a=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function l(e){let{children:t,version:n}=e;const i="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:i,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function o(e,t,n,i){return(0,r.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const d=e=>{let{children:t}=e;return o(0,"Released","#afa","#181")}},51653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=n(87462),i=(n(67294),n(3905)),a=n(4887);const l={sidebar_position:2,title:"Validation"},o=void 0,d={unversionedId:"hd-wallets/utility/validation",id:"version-3.1.1/hd-wallets/utility/validation",title:"Validation",description:"Validating an Extended Key",source:"@site/versioned_docs/version-3.1.1/hd-wallets/utility/validation.mdx",sourceDirName:"hd-wallets/utility",slug:"/hd-wallets/utility/validation",permalink:"/TSBC-Documentation/docs/3.1.1/hd-wallets/utility/validation",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-3.1.1/hd-wallets/utility/validation.mdx",tags:[],version:"3.1.1",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Validation"},sidebar:"tutorialSidebar",previous:{title:"Public Key Generation",permalink:"/TSBC-Documentation/docs/3.1.1/hd-wallets/utility/public-key-generation"},next:{title:"Identifier Generation",permalink:"/TSBC-Documentation/docs/3.1.1/hd-wallets/utility/identifier-generation"}},s={},c=[{value:"Validating an Extended Key",id:"validating-an-extended-key",level:2}],p={toc:c};function u(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"validating-an-extended-key"},"Validating an Extended Key"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Is HD Wallet Key Valid")," checks the validity of an extended key.\nThis function requires inputs as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Key ",(0,i.kt)(a.h8,{text:"1",mdxType:"Step"})," : The key to be validated.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Validating an Extended Key",src:n(54354).Z,width:"626",height:"127"})),(0,i.kt)("p",null,"The value ",(0,i.kt)("em",{parentName:"p"},"Success")," ",(0,i.kt)(a.h8,{text:"2",mdxType:"Step"})," will be ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the key is valid and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Is HD Wallet Key Valid (Error Message)")," checks the validity of an extended key and generates an error message if the key is invalid.\nThis function requires inputs as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Key ",(0,i.kt)(a.h8,{text:"1",mdxType:"Step"})," : The key to be validated.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Validating an Extended Key with Error Message",src:n(27011).Z,width:"838",height:"162"})),(0,i.kt)("p",null,"The value ",(0,i.kt)("em",{parentName:"p"},"Success")," ",(0,i.kt)(a.h8,{text:"2",mdxType:"Step"})," will be ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the key is valid and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," otherwise.",(0,i.kt)("br",null),"\nIf the key is invalid, the value ",(0,i.kt)("em",{parentName:"p"},"Error Message")," ",(0,i.kt)(a.h8,{text:"3",mdxType:"Step"})," will contain an error message explaining why the validity check failed."))}u.isMDXComponent=!0},54354:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/is_hd_wallet_key_valid-273a8358bf97e3d9fbcbf70330960e69.png"},27011:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/is_hd_wallet_key_valid_with_msg-ae533e6f819ff1688b9b73c2ec95a42c.png"}}]);