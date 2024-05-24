"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[1438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=i,m=u["".concat(d,".").concat(p)]||u[p]||f[p]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>a,h8:()=>i,qh:()=>d,y$:()=>o});n(87462),n(67294);var r=n(3905);const i=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function a(e){let{children:t,version:n}=e;const i="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:i,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,i){return(0,r.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const d=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")}},17494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var r=n(87462),i=(n(67294),n(3905)),o=n(4887);const a={sidebar_position:3,title:"Identifier Generation"},l=void 0,d={unversionedId:"hd-wallets/utility/identifier-generation",id:"version-2.4.0/hd-wallets/utility/identifier-generation",title:"Identifier Generation",description:"Generating a Key Identifier",source:"@site/versioned_docs/version-2.4.0/hd-wallets/utility/identifier-generation.mdx",sourceDirName:"hd-wallets/utility",slug:"/hd-wallets/utility/identifier-generation",permalink:"/TSBC-Documentation/docs/2.4.0/hd-wallets/utility/identifier-generation",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.4.0/hd-wallets/utility/identifier-generation.mdx",tags:[],version:"2.4.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Identifier Generation"},sidebar:"tutorialSidebar",previous:{title:"Validation",permalink:"/TSBC-Documentation/docs/2.4.0/hd-wallets/utility/validation"},next:{title:"FAQ",permalink:"/TSBC-Documentation/docs/2.4.0/faq"}},s={},c=[{value:"Generating a Key Identifier",id:"generating-a-key-identifier",level:2}],f={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"generating-a-key-identifier"},"Generating a Key Identifier"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Generate HD Wallet Key Identifier")," generates a byte array containing the identifier of an extended key. The identifier\nis the Hash160 (RIPEMD160 after SHA256) of the public key data.\nThis implementation follows ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#key-identifiers"},"BIP-32")," specification.\nThis function requires inputs as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Key ",(0,i.kt)(o.h8,{text:"1",mdxType:"Step"})," : The key for which the identifier will be generated. Invalid keys will result in an error.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generating a Key Identifier",src:n(38946).Z,width:"523",height:"189"})),(0,i.kt)("p",null,"If the operation is successful, the value ",(0,i.kt)("em",{parentName:"p"},"Identifier")," ",(0,i.kt)(o.h8,{text:"2",mdxType:"Step"})," will hold the generated identifier bytes."))}u.isMDXComponent=!0},38946:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/generate_hd_wallet_key_identifier-43969245da94d4dafc5836991d383fb5.png"}}]);