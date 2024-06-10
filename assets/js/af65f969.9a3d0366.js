"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[18508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>l,h8:()=>r,qh:()=>s,y$:()=>i});n(87462),n(67294);var a=n(3905);const r=e=>{let{children:t,text:n}=e;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},i=e=>{let{children:t}=e;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function l(e){let{children:t,version:n}=e;const r="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:r,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function o(e,t,n,r){return(0,a.kt)("div",{style:{backgroundColor:r,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const s=e=>{let{children:t}=e;return o(0,"Released","#afa","#181")}},85378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));n(4887);const i={sidebar_position:3,title:"Unreal Engine Example"},l="Unreal Engine Example",o={unversionedId:"ethereum/meta-transactions/example/unreal-engine",id:"version-2.5.1/ethereum/meta-transactions/example/unreal-engine",title:"Unreal Engine Example",description:"This is an example demonstrating how to make Meta Transactions inside Unreal Engine using this plugin.",source:"@site/versioned_docs/version-2.5.1/ethereum/meta-transactions/example/unreal-engine.mdx",sourceDirName:"ethereum/meta-transactions/example",slug:"/ethereum/meta-transactions/example/unreal-engine",permalink:"/TSBC-Documentation/docs/2.5.1/ethereum/meta-transactions/example/unreal-engine",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.5.1/ethereum/meta-transactions/example/unreal-engine.mdx",tags:[],version:"2.5.1",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Unreal Engine Example"},sidebar:"tutorialSidebar",previous:{title:"Recipient",permalink:"/TSBC-Documentation/docs/2.5.1/ethereum/meta-transactions/example/recipient"},next:{title:"Smart Contract Standards",permalink:"/TSBC-Documentation/docs/2.5.1/ethereum/smart-contract-standards"}},s={},c=[{value:"Prepare Meta Transaction Data for the User to Sign",id:"prepare-meta-transaction-data-for-the-user-to-sign",level:2},{value:"Nonce",id:"nonce",level:3},{value:"Data",id:"data",level:3},{value:"Deadline",id:"deadline",level:3},{value:"Private Key",id:"private-key",level:3},{value:"Domain",id:"domain",level:3},{value:"Message",id:"message",level:3},{value:"Relayer Execution",id:"relayer-execution",level:2},{value:"Prepare Relayer Signing",id:"prepare-relayer-signing",level:3},{value:"Relayer Signing and Sending",id:"relayer-signing-and-sending",level:3}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unreal-engine-example"},"Unreal Engine Example"),(0,r.kt)("p",null,"This is an example demonstrating how to make Meta Transactions inside Unreal Engine using this plugin."),(0,r.kt)("h2",{id:"prepare-meta-transaction-data-for-the-user-to-sign"},"Prepare Meta Transaction Data for the User to Sign"),(0,r.kt)("h3",{id:"nonce"},"Nonce"),(0,r.kt)("p",null,"First of all we want to get the user's nonce from the ",(0,r.kt)("inlineCode",{parentName:"p"},"CounterForwarder")," contract that we deployed ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.5.1/ethereum/meta-transactions/example/forwarder"},"earlier"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Nonce",src:n(87511).Z,width:"2178",height:"930"})),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"Save the encoded data of the ",(0,r.kt)("inlineCode",{parentName:"p"},"incrementCounter")," function that we are going to call using a Meta Transaction."),(0,r.kt)("h3",{id:"deadline"},"Deadline"),(0,r.kt)("p",null,"In our case we will set the deadline to the current time plus 1 day from when the user signs the Meta Transaction in Unix Timestamp."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data_Deadline",src:n(44432).Z,width:"1769",height:"917"})),(0,r.kt)("h3",{id:"private-key"},"Private Key"),(0,r.kt)("p",null,"The user's private key that will be used to sign the Meta Transaction."),(0,r.kt)("h3",{id:"domain"},"Domain"),(0,r.kt)("p",null,"The domain struct should contain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: The name of the Forwarder that will be processing the transaction, in our case it is\n",(0,r.kt)("inlineCode",{parentName:"li"},"CounterForwarder"),"."),(0,r.kt)("li",{parentName:"ul"},"Chain ID: The chain id of the Blockchain that the ",(0,r.kt)("inlineCode",{parentName:"li"},"CounterForwarder")," contract is deployed on."),(0,r.kt)("li",{parentName:"ul"},"Verifying contract: This is the ",(0,r.kt)("inlineCode",{parentName:"li"},"CounterForwarder")," contract address.")),(0,r.kt)("h3",{id:"message"},"Message"),(0,r.kt)("p",null,"The message struct should contain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From : The address of the user that will be signing this message."),(0,r.kt)("li",{parentName:"ul"},"To : The address of the deployed ",(0,r.kt)("inlineCode",{parentName:"li"},"Counter")," contract."),(0,r.kt)("li",{parentName:"ul"},"Value : In our case it is ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," since the ",(0,r.kt)("inlineCode",{parentName:"li"},"incrementCounter")," function is non-payable."),(0,r.kt)("li",{parentName:"ul"},"Gas : The gas limit that will be forwarded, we can set it to ",(0,r.kt)("inlineCode",{parentName:"li"},"300000"),"."),(0,r.kt)("li",{parentName:"ul"},"Nonce : The user nonce that we received earlier."),(0,r.kt)("li",{parentName:"ul"},"Deadline : A ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.5.1/ethereum/meta-transactions/sign-meta-transaction#unix-timestamp"},"Unix Timestamp")," after which the request is not executable anymore, which we calculated earlier."),(0,r.kt)("li",{parentName:"ul"},"Data : The encoded data of the ",(0,r.kt)("inlineCode",{parentName:"li"},"incrementCounter")," function.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sign Meta Transaction",src:n(96664).Z,width:"2259",height:"925"})),(0,r.kt)("h2",{id:"relayer-execution"},"Relayer Execution"),(0,r.kt)("p",null,"In our case we want a dedicated server to execute the Meta Transaction on behalf of a user."),(0,r.kt)("h3",{id:"prepare-relayer-signing"},"Prepare Relayer Signing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The server needs to receive the original Data that was used to create the Signed Meta Transaction."),(0,r.kt)("li",{parentName:"ul"},"First we will encode the data by selecting the ",(0,r.kt)("inlineCode",{parentName:"li"},"execute")," function from the Forwarder contract ",(0,r.kt)("em",{parentName:"li"},"ABI"),"."),(0,r.kt)("li",{parentName:"ul"},"Then, we need to get the ",(0,r.kt)("em",{parentName:"li"},"Relayer's")," nonce and the current gas price to execute the transaction.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Prepare Relayer",src:n(33033).Z,width:"2272",height:"1073"})),(0,r.kt)("h3",{id:"relayer-signing-and-sending"},"Relayer Signing and Sending"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After that we can call ",(0,r.kt)("inlineCode",{parentName:"li"},"estimate gas")," function, so we can provide a gas limit to execute this transaction."),(0,r.kt)("li",{parentName:"ul"},"Then we can sign the transaction with the ",(0,r.kt)("em",{parentName:"li"},"relayer's")," private key and provide all the needed arguments for the\n",(0,r.kt)("inlineCode",{parentName:"li"},"sign transaction")," function."),(0,r.kt)("li",{parentName:"ul"},"Lastly we can send this transaction to the Blockchain and the meta transaction will be executed.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Relayer Sign Send",src:n(78850).Z,width:"2281",height:"1075"})))}u.isMDXComponent=!0},44432:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/data_deadline-3a03345addc419868405e35b4f211162.png"},87511:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/get_nonce-738046ac192c883d632e0948de647117.png"},33033:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/relayer_prepare-d1ff71c1a2ca4403ae3e3e0a872829ea.png"},78850:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/relayer_sign_send-b74d6d864dc35d0259ae28dc15fe30d7.png"},96664:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sign_meta_transaction-d6f2afcba4c8117e2bd2e96a763c9478.png"}}]);