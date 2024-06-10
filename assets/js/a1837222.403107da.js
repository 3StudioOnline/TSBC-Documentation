"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[79883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>i,h8:()=>r,qh:()=>c,y$:()=>o});n(87462),n(67294);var a=n(3905);const r=e=>{let{children:t,text:n}=e;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:n}=e;const r="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:r,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function s(e,t,n,r){return(0,a.kt)("div",{style:{backgroundColor:r,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return s(0,"Released","#afa","#181")}},82553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));n(4887);const o={sidebar_position:1,title:"Overview"},i=void 0,s={unversionedId:"blockchain/meta-transactions/overview",id:"version-3.0.0/blockchain/meta-transactions/overview",title:"Overview",description:"What are Meta Transactions",source:"@site/versioned_docs/version-3.0.0/blockchain/meta-transactions/overview.mdx",sourceDirName:"blockchain/meta-transactions",slug:"/blockchain/meta-transactions/overview",permalink:"/TSBC-Documentation/docs/3.0.0/blockchain/meta-transactions/overview",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-3.0.0/blockchain/meta-transactions/overview.mdx",tags:[],version:"3.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Filecoin Helper Functions",permalink:"/TSBC-Documentation/docs/3.0.0/blockchain/filecoin-functions/filecoin-helper-functions"},next:{title:"Sign Meta Transaction",permalink:"/TSBC-Documentation/docs/3.0.0/blockchain/meta-transactions/sign-meta-transaction"}},c={},l=[{value:"What are Meta Transactions",id:"what-are-meta-transactions",level:2}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-are-meta-transactions"},"What are Meta Transactions"),(0,r.kt)("p",null,"Meta transactions are a popular way to enable users to make a transaction on Blockchain without directly paying the gas fees.\nInstead, they sign a message off-chain, which is then sent to a relayer who pays the gas fees and executes the transaction process."),(0,r.kt)("h1",{id:"how-meta-transactions-work"},"How Meta Transactions Work"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"User"),": Signs a meta transaction (that is a message containing information about the transaction he would like to execute)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Relayer"),": A web server with a wallet that signs a valid Ethereum transaction (that has the meta transaction as the payload) and sends it to the Blockchain."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Forwarder"),": An Ethereum contract in charge of verifying the signature of the meta transaction that, not surprisingly, forwards the request to a recipient contract."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Recipient"),": The Ethereum contract that the user intended to call without paying the gas fee. This contract has to be able to preserve the identity of the user that initially requested the transaction."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Meta-Transaction",src:n(59881).Z,width:"687",height:"179"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For additional information about meta transactions."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://support.metamask.io/hc/en-us/articles/12143770005275-What-are-metatransactions"},"Meta-Mask"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/5.x/api/metatx"},"Open-Zeppelin"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2771"},"EIP-2771"),".")))}d.isMDXComponent=!0},59881:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/meta_transaction-56d4b9567669ad6e55b6953d4d7a307f.png"}}]);