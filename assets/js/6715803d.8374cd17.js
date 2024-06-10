"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[58190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>i,h8:()=>a,qh:()=>c,y$:()=>o});n(87462),n(67294);var r=n(3905);const a=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:n}=e;const a="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function s(e,t,n,a){return(0,r.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return s(0,"Released","#afa","#181")}},30645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));n(4887);const o={sidebar_position:1,title:"Overview"},i=void 0,s={unversionedId:"ethereum/meta-transactions/overview",id:"version-2.6.0/ethereum/meta-transactions/overview",title:"Overview",description:"What are Meta Transactions",source:"@site/versioned_docs/version-2.6.0/ethereum/meta-transactions/overview.mdx",sourceDirName:"ethereum/meta-transactions",slug:"/ethereum/meta-transactions/overview",permalink:"/TSBC-Documentation/docs/2.6.0/ethereum/meta-transactions/overview",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.6.0/ethereum/meta-transactions/overview.mdx",tags:[],version:"2.6.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Decode Smart Contract ABI",permalink:"/TSBC-Documentation/docs/2.6.0/ethereum/abi/decode-abi"},next:{title:"Sign Meta Transaction",permalink:"/TSBC-Documentation/docs/2.6.0/ethereum/meta-transactions/sign-meta-transaction"}},c={},l=[{value:"What are Meta Transactions",id:"what-are-meta-transactions",level:2}],p={toc:l};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-are-meta-transactions"},"What are Meta Transactions"),(0,a.kt)("p",null,"Meta transactions are a popular way to enable users to make a transaction on Blockchain without directly paying the gas fees.\nInstead, they sign a message off-chain, which is then sent to a relayer who pays the gas fees and executes the transaction process."),(0,a.kt)("h1",{id:"how-meta-transactions-work"},"How Meta Transactions Work"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"User"),": Signs a meta transaction (that is a message containing information about the transaction he would like to execute)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Relayer"),": A web server with a wallet that signs a valid Ethereum transaction (that has the meta transaction as the payload) and sends it to the Blockchain."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Forwarder"),": An Ethereum contract in charge of verifying the signature of the meta transaction that, not surprisingly, forwards the request to a recipient contract."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Recipient"),": The Ethereum contract that the user intended to call without paying the gas fee. This contract has to be able to preserve the identity of the user that initially requested the transaction."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Meta-Transaction",src:n(21897).Z,width:"687",height:"179"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For additional information about meta transactions."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://support.metamask.io/hc/en-us/articles/12143770005275-What-are-metatransactions"},"Meta-Mask"),"."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/5.x/api/metatx"},"Open-Zeppelin"),"."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2771"},"EIP-2771"),".")))}m.isMDXComponent=!0},21897:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/meta_transaction-56d4b9567669ad6e55b6953d4d7a307f.png"}}]);