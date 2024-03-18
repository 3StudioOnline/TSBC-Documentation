"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[7064],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,m=u["".concat(l,".").concat(y)]||u[y]||p[y]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>o,h8:()=>a,qh:()=>l,y$:()=>i});r(87462),r(67294);var n=r(3905);const a=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},i=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function o(e){let{children:t,version:r}=e;const a="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function s(e,t,r,a){return(0,n.kt)("div",{style:{backgroundColor:a,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return s(0,"Released","#afa","#181")}},25065:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),i=r(4887);const o={sidebar_position:2,title:"Keypair Generation"},s=void 0,l={unversionedId:"hd-wallets/master-key-generation/keypair-generation",id:"version-2.4.0/hd-wallets/master-key-generation/keypair-generation",title:"Keypair Generation",description:"Generating the Master Keypair",source:"@site/versioned_docs/version-2.4.0/hd-wallets/master-key-generation/keypair-generation.mdx",sourceDirName:"hd-wallets/master-key-generation",slug:"/hd-wallets/master-key-generation/keypair-generation",permalink:"/TSBC-Documentation/docs/2.4.0/hd-wallets/master-key-generation/keypair-generation",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.4.0/hd-wallets/master-key-generation/keypair-generation.mdx",tags:[],version:"2.4.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Keypair Generation"},sidebar:"tutorialSidebar",previous:{title:"Seed Generation",permalink:"/TSBC-Documentation/docs/2.4.0/hd-wallets/master-key-generation/seed-generation"},next:{title:"Private Key",permalink:"/TSBC-Documentation/docs/2.4.0/hd-wallets/child-key-derivation/private-key"}},c={},d=[{value:"Generating the Master Keypair",id:"generating-the-master-keypair",level:2}],p={toc:d};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"generating-the-master-keypair"},"Generating the Master Keypair"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Generate HD Wallet Master Keypair")," generates new public and private extended master keys (child number 0). These keys\ncan be used to derive child extended keys and create an inheritance structure.\nThis function requires inputs as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Seed ",(0,a.kt)(i.h8,{text:"1",mdxType:"Step"})," : The seed used in master key generation. Usually created using a mnemonic sentence converted into a seed."),(0,a.kt)("li",{parentName:"ul"},"Version ",(0,a.kt)(i.h8,{text:"2",mdxType:"Step"})," : The version of the generated key. The type of blockchain the key is associated with. Generated keys work only in matching blockchains.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Generating the Master Keypair",src:r(56048).Z,width:"595",height:"247"})),(0,a.kt)("p",null,"If the operation is successful, the values ",(0,a.kt)("em",{parentName:"p"},"Public Key")," ",(0,a.kt)(i.h8,{text:"3",mdxType:"Step"})," and ",(0,a.kt)("em",{parentName:"p"},"Private Key")," ",(0,a.kt)(i.h8,{text:"4",mdxType:"Step"})," will hold the generated valid master keypair.\nThese keys can then be used for child key derivation."))}u.isMDXComponent=!0},56048:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/generate_hd_wallet_master_keypair-58dfa800d042b27a1945a4b7d09ce323.png"}}]);