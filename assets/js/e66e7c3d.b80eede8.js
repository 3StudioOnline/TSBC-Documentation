"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[25498],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),i=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=i(t.components);return n.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=i(a),u=r,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(k,s(s({ref:e},p),{},{components:a})):n.createElement(k,s({ref:e},p))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4887:(t,e,a)=>{a.d(e,{UE:()=>s,h8:()=>r,qh:()=>d,y$:()=>o});a(87462),a(67294);var n=a(3905);const r=t=>{let{children:e,text:a}=t;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},a)},o=t=>{let{children:e}=t;return(0,n.kt)("span",{style:{color:"#faa"}},e)};function s(t){let{children:e,version:a}=t;const r="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:r,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},a)}function l(t,e,a,r){return(0,n.kt)("div",{style:{backgroundColor:r,color:a,border:"1px "+a+" solid",borderRadius:"5px",padding:".1rem .4rem"}},e)}const d=t=>{let{children:e}=t;return l(0,"Released","#afa","#181")}},51058:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));a(4887);const o={sidebar_position:3,title:"Smart Contract Standards"},s=void 0,l={unversionedId:"ethereum/smart-contract-standards",id:"version-2.4.0/ethereum/smart-contract-standards",title:"Smart Contract Standards",description:"The plugin comes with a variety of common Ethereum Smart Contract Standards. This page will give you an overview of what is included and ready-to-use.",source:"@site/versioned_docs/version-2.4.0/ethereum/smart-contract-standards.mdx",sourceDirName:"ethereum",slug:"/ethereum/smart-contract-standards",permalink:"/TSBC-Documentation/docs/2.4.0/ethereum/smart-contract-standards",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-2.4.0/ethereum/smart-contract-standards.mdx",tags:[],version:"2.4.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Smart Contract Standards"},sidebar:"tutorialSidebar",previous:{title:"Decode Smart Contract ABI",permalink:"/TSBC-Documentation/docs/2.4.0/ethereum/abi/decode-abi"},next:{title:"Overview",permalink:"/TSBC-Documentation/docs/2.4.0/encryption/aes/overview"}},d={},i=[{value:"Legend",id:"legend",level:2},{value:"ERCs",id:"ercs",level:2},{value:"EIPs",id:"eips",level:2},{value:"LSPs",id:"lsps",level:2},{value:"OpenSea",id:"opensea",level:2}],p={toc:i};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The plugin comes with a variety of common Ethereum Smart Contract Standards. This page will give you an overview of what is included and ready-to-use."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Remember, you are ",(0,r.kt)("strong",{parentName:"p"},"not")," limited by the Smart Contract Standards that come with this plugin. You can always add your own\n",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/ethereum/abi/parse-abi"},"Contract ABI")," data assets to support any Smart Contracts you wish to use."),(0,r.kt)("p",{parentName:"admonition"},"Please let us know if there are any standards that would be relevant to you and your projects, so we could add them in the near future for everyone.")),(0,r.kt)("h2",{id:"legend"},"Legend"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Standard Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ERC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"E"),"thereum ",(0,r.kt)("strong",{parentName:"td"},"R"),"equest for ",(0,r.kt)("strong",{parentName:"td"},"C"),"omment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EIP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"E"),"thereum ",(0,r.kt)("strong",{parentName:"td"},"I"),"mprovement ",(0,r.kt)("strong",{parentName:"td"},"P"),"roposal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LSP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"L"),"ukso ",(0,r.kt)("strong",{parentName:"td"},"S"),"tandard ",(0,r.kt)("strong",{parentName:"td"},"P"),"roposal")))),(0,r.kt)("h2",{id:"ercs"},"ERCs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Standard"),(0,r.kt)("th",{parentName:"tr",align:null},"Simple Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-20"},"ERC-20 Token Standard")),(0,r.kt)("td",{parentName:"tr",align:null},"A standard interface for tokens.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-165"},"ERC-165 Standard Interface Detection")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a standard method to publish and detect what interfaces a smart contract implements.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-721"},"ERC-721 Non-Fungible Token Standard")),(0,r.kt)("td",{parentName:"tr",align:null},"A standard interface for non-fungible tokens, also known as deeds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://erc725alliance.org/"},"ERC-725 General data key-value store and execution")),(0,r.kt)("td",{parentName:"tr",align:null},"ERC 725 describes proxy smart contracts that can be controlled by multiple keys and other smart contracts. ERC 735 is an associated standard to add and remove claims to an ERC 725 identity smart contract. These identity smart contracts can describe humans, groups, objects, and machines. ERC 725 lives on the Ethereum blockchain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-998"},"ERC-998 Composable Non-Fungible Token")),(0,r.kt)("td",{parentName:"tr",align:null},"Extends a ERC-721 to own other ERC-721 and ERC-20 tokens.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-1155"},"ERC-1155 Multi Token Standard")),(0,r.kt)("td",{parentName:"tr",align:null},"A standard interface for contracts that manage multiple token types. A single deployed contract may include any combination of fungible tokens, non-fungible tokens or other configurations (e.g. semi-fungible tokens).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-1271"},"ERC-1271 Standard Signature Validation Method for Contracts")),(0,r.kt)("td",{parentName:"tr",align:null},"Standard way to verify a signature when the account is a smart contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-2981"},"ERC-2981 NFT Royalty Standard")),(0,r.kt)("td",{parentName:"tr",align:null},"A standardized way to retrieve royalty payment information for non-fungible tokens (NFTs) to enable universal support for royalty payments across all NFT marketplaces and ecosystem participants.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-6551"},"ERC-6551 Non-fungible Token Bound Accounts")),(0,r.kt)("td",{parentName:"tr",align:null},"An interface and registry for smart contract accounts owned by non-fungible tokens.")))),(0,r.kt)("h2",{id:"eips"},"EIPs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Standard"),(0,r.kt)("th",{parentName:"tr",align:null},"Simple Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-3085"},"EIP-3085 Wallet Add Ethereum Chain RPC Method")),(0,r.kt)("td",{parentName:"tr",align:null},"An RPC method for adding Ethereum chains to wallet applications.")))),(0,r.kt)("h2",{id:"lsps"},"LSPs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Standard"),(0,r.kt)("th",{parentName:"tr",align:null},"Simple Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.lukso.tech/standards/universal-profile/lsp0-erc725account/"},"LSP-0 ERC-725 Account")),(0,r.kt)("td",{parentName:"tr",align:null},"This standard describes a version of an ERC725 smart contract, that represents a blockchain account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.lukso.tech/standards/generic-standards/lsp1-universal-receiver"},"LSP-1 Universal Receiver + Delegate")),(0,r.kt)("td",{parentName:"tr",align:null},"An entry function enabling a contract to receive arbitrary information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.lukso.tech/standards/tokens/LSP4-Digital-Asset-Metadata/"},"LSP-4 Digital Asset Metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"This standard describes a set of ERC725Y data key-value pairs that describe a digital asset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.lukso.tech/standards/universal-profile/lsp6-key-manager/"},"LSP-6 Key Manager")),(0,r.kt)("td",{parentName:"tr",align:null},"This standard describes a KeyManager contract with a set of pre-defined permissions for addresses. A KeyManager contract can control an ERC725Account like account, or any other ERC725 smart contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.lukso.tech/standards/tokens/LSP7-Digital-Asset/"},"LSP-7 Digital Asset")),(0,r.kt)("td",{parentName:"tr",align:null},"A standard interface for digital assets, for either fungible or non-fungible tokens.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.lukso.tech/standards/tokens/LSP8-Identifiable-Digital-Asset/"},"LSP-8 Identifiable Digital Asset")),(0,r.kt)("td",{parentName:"tr",align:null},"A standard interface for identifiable digital assets, allowing for tokens to be uniquely traded and given metadata using ERC725Y.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.lukso.tech/standards/universal-profile/lsp9-vault/"},"LSP-9 Vault")),(0,r.kt)("td",{parentName:"tr",align:null},"This standard describes a version of an ERC725 smart contract, that represents a blockchain vault.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.lukso.tech/contracts/contracts/LSP11BasicSocialRecovery/"},"LSP-11 Basic Social Recovery")),(0,r.kt)("td",{parentName:"tr",align:null},"This standard describes a basic social recovery contract that can recover access to ERC725 contracts through a LSP6-KeyManager.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.lukso.tech/standards/generic-standards/lsp14-ownable-2-step"},"LSP-14 Ownable 2-Step")),(0,r.kt)("td",{parentName:"tr",align:null},"This standard describes an extended version of EIP173 that uses a 2-step process to transfer or renounce ownership of a contract, instead of instant execution.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.lukso.tech/standards/generic-standards/lsp16-universal-factory"},"LSP-16 Universal Factory")),(0,r.kt)("td",{parentName:"tr",align:null},"This standard defines a universal factory smart contract, that will allow to deploy different types of smart contracts using CREATE2 opcode after being deployed with Nick Factory in order to produce the same address on different chains.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.lukso.tech/standards/generic-standards/lsp20-call-verification"},"LSP-20 Call Verifier")),(0,r.kt)("td",{parentName:"tr",align:null},"This standard introduces a mechanism for delegating the verification of a function call to another contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.lukso.tech/standards/generic-standards/lsp23-linked-contracts-factory"},"LSP-23 Linked Contracts Factory")),(0,r.kt)("td",{parentName:"tr",align:null},"This standard describes a smart contract factory that can deploy linked contracts and have an optional post-deployment execution.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.lukso.tech/standards/universal-profile/introduction/"},"Universal Profile + Init")),(0,r.kt)("td",{parentName:"tr",align:null},"A Universal Profile is an owned smart contract. Ownership means that such a contract has a separate owner.")))),(0,r.kt)("h2",{id:"opensea"},"OpenSea"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Standard"),(0,r.kt)("th",{parentName:"tr",align:null},"Simple Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.opensea.io/docs/metadata-standards"},"OpenSea Metadata Standard")),(0,r.kt)("td",{parentName:"tr",align:null},"Providing asset metadata allows applications like OpenSea to pull in rich data for digital assets and easily display them in-app. Digital assets on a given smart contract are typically represented solely by a unique identifier (e.g., the token_id in ERC721), so metadata allows these assets to have additional properties, such as a name, description, and image.")))))}c.isMDXComponent=!0}}]);