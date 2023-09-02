"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[8182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(n),p=a,b=g["".concat(d,".").concat(p)]||g[p]||u[p]||r;return n?i.createElement(b,o(o({ref:t},c),{},{components:n})):i.createElement(b,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>o,V3:()=>s,h8:()=>a,qh:()=>d,y$:()=>r});n(87462),n(67294);var i=n(3905);const a=e=>{let{children:t,text:n}=e;return(0,i.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},r=e=>{let{children:t}=e;return(0,i.kt)("span",{style:{color:"#faa"}},t)};function o(e){let{children:t,version:n}=e;const a="#ffffff";return(0,i.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,a){return(0,i.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const d=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")},s=e=>{let{children:t}=e;return l(0,"Planned","#aff","#288")}},25141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=n(87462),a=(n(67294),n(3905)),r=n(4887);const o={sidebar_position:1,title:"Debugging"},l=void 0,d={unversionedId:"quick-start/debugging",id:"version-2.1.2/quick-start/debugging",title:"Debugging",description:"Debugging Transactions",source:"@site/versioned_docs/version-2.1.2/quick-start/debugging.mdx",sourceDirName:"quick-start",slug:"/quick-start/debugging",permalink:"/TSBC-Documentation/docs/2.1.2/quick-start/debugging",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.1.2/quick-start/debugging.mdx",tags:[],version:"2.1.2",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Debugging"},sidebar:"tutorialSidebar",previous:{title:"Demo Project",permalink:"/TSBC-Documentation/docs/2.1.2/getting-started/demo-project"},next:{title:"Blockchain Configuration",permalink:"/TSBC-Documentation/docs/2.1.2/quick-start/network-config"}},s={},c=[{value:"Debugging Transactions",id:"debugging-transactions",level:2},{value:"Debugging <code>uint256</code>",id:"debugging-uint256",level:2},{value:"Disabled",id:"disabled",level:3},{value:"Enabled",id:"enabled",level:3}],u={toc:c};function g(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"debugging-transactions"},"Debugging Transactions"),(0,a.kt)("p",null,"Sometimes it is helpful being able to take a look at the raw data involved in the process of signing a transaction that\nshall be sent to the blockchain. This debugging feature can be enabled by going to\n",(0,a.kt)("inlineCode",{parentName:"p"},"Edit | Project Settings | 3Studio | Blockchain [User Settings]")," ",(0,a.kt)(r.h8,{text:"1",mdxType:"Step"})," and then simply activate the option\n",(0,a.kt)("inlineCode",{parentName:"p"},"Enable Debug Logging: Signed Transactions")," ",(0,a.kt)(r.h8,{text:"2",mdxType:"Step"}),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debugging Transactions",src:n(40450).Z,width:"1920",height:"1040"})),(0,a.kt)("h2",{id:"debugging-uint256"},"Debugging ",(0,a.kt)("inlineCode",{parentName:"h2"},"uint256")),(0,a.kt)("p",null,"The data type ",(0,a.kt)("inlineCode",{parentName:"p"},"uint256")," provides a debugging feature that can be enabled by going to\n",(0,a.kt)("inlineCode",{parentName:"p"},"Edit | Project Settings | 3Studio | Blockchain [User Settings]")," ",(0,a.kt)(r.h8,{text:"1",mdxType:"Step"}),". Then, activate the option\n",(0,a.kt)("inlineCode",{parentName:"p"},"Calculate decimal and hex values for each uint256 value [High performance impact]")," ",(0,a.kt)(r.h8,{text:"2",mdxType:"Step"}),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please keep in mind that when this debugging feature is enabled it may have a high performance impact."),(0,a.kt)("p",{parentName:"admonition"},"Also, when packaging with ",(0,a.kt)("em",{parentName:"p"},"Build Configuration")," set to ",(0,a.kt)("em",{parentName:"p"},"Shipping"),", this debugging feature is disabled automatically and won't affect performance.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debugging Uint256",src:n(43480).Z,width:"1920",height:"1040"})),(0,a.kt)("p",null,"In the two images below you can see that hovering over any ",(0,a.kt)("inlineCode",{parentName:"p"},"uint256")," variable in ",(0,a.kt)("em",{parentName:"p"},"Blueprints")," debugging mode will\nshow two values named ",(0,a.kt)("inlineCode",{parentName:"p"},"DebugValueHex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DebugValueDec")," in a tooltip."),(0,a.kt)("h3",{id:"disabled"},"Disabled"),(0,a.kt)("p",null,"While this debugging feature is disabled, no debug values will be calculated. Thus, you will\nsee that the value for both debug variables are just equal to zero."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debugging Uint256 Disabled",src:n(42410).Z,width:"1126",height:"691"})),(0,a.kt)("h3",{id:"enabled"},"Enabled"),(0,a.kt)("p",null,"When this debugging feature is enabled, debug values will be calculated that convert the ",(0,a.kt)("inlineCode",{parentName:"p"},"uint256")," value to hex and\ndecimal base representations.\nSince these conversion are executed ",(0,a.kt)("strong",{parentName:"p"},"for each variable")," of data type ",(0,a.kt)("inlineCode",{parentName:"p"},"uint256")," it may impact runtime performance.\nHowever, it can be a very helpful debugging tool nonetheless."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debugging Uint256 Disabled",src:n(51865).Z,width:"1123",height:"716"})))}g.isMDXComponent=!0},40450:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debugging-signed-transaction-6a37fe8ee5890cdbc39d381630650d57.png"},43480:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debugging-uint256-a398cc960d9439a44b4a6acd9fc1e522.png"},42410:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/disabled-debugging-uint256-6f168d59dd1dc765c60dc93f358491cb.png"},51865:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/enabled-debugging-uint256-c2dec610f29f24f8fe7ab8f7d8c2bcae.png"}}]);