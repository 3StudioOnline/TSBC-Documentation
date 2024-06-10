"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[82803],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4887:(e,n,t)=>{t.d(n,{UE:()=>i,h8:()=>a,qh:()=>l,y$:()=>o});t(87462),t(67294);var r=t(3905);const a=e=>{let{children:n,text:t}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},o=e=>{let{children:n}=e;return(0,r.kt)("span",{style:{color:"#faa"}},n)};function i(e){let{children:n,version:t}=e;const a="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},t)}function s(e,n,t,a){return(0,r.kt)("div",{style:{backgroundColor:a,color:t,border:"1px "+t+" solid",borderRadius:"5px",padding:".1rem .4rem"}},n)}const l=e=>{let{children:n}=e;return s(0,"Released","#afa","#181")}},53258:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(87462),a=(t(67294),t(3905)),o=t(4887);const i={sidebar_position:1,title:"Seed Generation"},s=void 0,l={unversionedId:"hd-wallets/master-key-generation/seed-generation",id:"version-2.4.0/hd-wallets/master-key-generation/seed-generation",title:"Seed Generation",description:"Seed that is used in master keypair generation can be generated using mnemonic sentences specified in BIP-39.",source:"@site/versioned_docs/version-2.4.0/hd-wallets/master-key-generation/seed-generation.mdx",sourceDirName:"hd-wallets/master-key-generation",slug:"/hd-wallets/master-key-generation/seed-generation",permalink:"/TSBC-Documentation/docs/2.4.0/hd-wallets/master-key-generation/seed-generation",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.4.0/hd-wallets/master-key-generation/seed-generation.mdx",tags:[],version:"2.4.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Seed Generation"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/TSBC-Documentation/docs/2.4.0/hd-wallets/introduction"},next:{title:"Keypair Generation",permalink:"/TSBC-Documentation/docs/2.4.0/hd-wallets/master-key-generation/keypair-generation"}},c={},d=[{value:"Generating a Mnemonic Sentence",id:"generating-a-mnemonic-sentence",level:2},{value:"Generating a Seed from Mnemonic Sentence",id:"generating-a-seed-from-mnemonic-sentence",level:2}],p={toc:d};function m(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Seed that is used in master keypair generation can be generated using mnemonic sentences specified in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"},"BIP-39"),"."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Mnemonic Sentences, the Seed as well as the optional passphrase should all be kept secret. Knowledge of this data may result\nin compromised wallet security.")),(0,a.kt)("h2",{id:"generating-a-mnemonic-sentence"},"Generating a Mnemonic Sentence"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Generate Mnemonic")," generates a new mnemonic sentence that can be used for master key seed generation.\nThis function requires inputs as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Language ",(0,a.kt)(o.h8,{text:"1",mdxType:"Step"})," : The language to be used."),(0,a.kt)("li",{parentName:"ul"},"Sentence Length ",(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," : Predefined sentence word length.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Generating a Mnemonic Sentence",src:t(56685).Z,width:"519",height:"232"})),(0,a.kt)("p",null,"If the operation is successful, the value ",(0,a.kt)("em",{parentName:"p"},"Mnemonic Sentence")," ",(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," will hold the generated sentence."),(0,a.kt)("h2",{id:"generating-a-seed-from-mnemonic-sentence"},"Generating a Seed from Mnemonic Sentence"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Convert Mnemonic to Seed")," generates a seed from the provided mnemonic sentence. The result can be used for master key generation.\nThis function requires inputs as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mnemonic Sentence ",(0,a.kt)(o.h8,{text:"1",mdxType:"Step"})," : The sentence that will be converted into a seed.")),(0,a.kt)("p",null,"Optionally additional inputs may be provided:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Passphrase ",(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," : An optional passphrase, that secures the key generated from seed. If unused, should be left empty.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Generating a Seed from Mnemonic Sentence",src:t(18960).Z,width:"567",height:"186"})))}m.isMDXComponent=!0},18960:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/convert_mnemonic_to_seed-e3505f2f24e4f63a0af3a830fb84ee36.png"},56685:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/generate_mnemonic-23372d0e94c044bbfead039bde634e62.png"}}]);