"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[94017],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=m(a),k=i,h=u["".concat(l,".").concat(k)]||u[k]||c[k]||s;return a?n.createElement(h,r(r({ref:t},o),{},{components:a})):n.createElement(h,r({ref:t},o))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var m=2;m<s;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4887:(e,t,a)=>{a.d(t,{UE:()=>r,h8:()=>i,qh:()=>l,y$:()=>s});a(87462),a(67294);var n=a(3905);const i=e=>{let{children:t,text:a}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},a)},s=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function r(e){let{children:t,version:a}=e;const i="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:i,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},a)}function p(e,t,a,i){return(0,n.kt)("div",{style:{backgroundColor:i,color:a,border:"1px "+a+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return p(0,"Released","#afa","#181")}},59223:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=a(87462),i=(a(67294),a(3905)),s=a(4887);const r={sidebar_position:2,title:"Secp256k1"},p=void 0,l={unversionedId:"cryptography/ecdsa/secp256k1",id:"version-3.0.0/cryptography/ecdsa/secp256k1",title:"Secp256k1",description:"What is Secp256k1",source:"@site/versioned_docs/version-3.0.0/cryptography/ecdsa/secp256k1.mdx",sourceDirName:"cryptography/ecdsa",slug:"/cryptography/ecdsa/secp256k1",permalink:"/TSBC-Documentation/docs/3.0.0/cryptography/ecdsa/secp256k1",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-3.0.0/cryptography/ecdsa/secp256k1.mdx",tags:[],version:"3.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Secp256k1"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/TSBC-Documentation/docs/3.0.0/cryptography/ecdsa/overview"},next:{title:"Contract ABI Data Asset",permalink:"/TSBC-Documentation/docs/3.0.0/encoding/abi/parse-abi"}},m={},o=[{value:"What is Secp256k1",id:"what-is-secp256k1",level:2},{value:"Available Functions",id:"available-functions",level:2},{value:"Generate Private Key",id:"generate-private-key",level:3},{value:"Generate Public Key",id:"generate-public-key",level:3},{value:"Is Private Key Valid",id:"is-private-key-valid",level:3},{value:"Is Public Key Valid",id:"is-public-key-valid",level:3},{value:"Generate Shared Secret",id:"generate-shared-secret",level:3},{value:"Create Signature",id:"create-signature",level:3},{value:"Create Signature Deterministic",id:"create-signature-deterministic",level:3},{value:"Verify Signature",id:"verify-signature",level:3},{value:"Compress Public Key",id:"compress-public-key",level:3},{value:"Decompress Public Key",id:"decompress-public-key",level:3}],c={toc:o};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-secp256k1"},"What is Secp256k1"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Secp256k1"),' refers to a specific elliptic curve and set of parameters used in the implementation of the Elliptic\nCurve Digital Signature Algorithm (ECDSA). The "SECP" stands for "Standards for Efficient Cryptography," and "256"\nindicates the size of the key in bits. The "K1" denotes that this curve is specifically designed for use in cryptography.'),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Secp256k1")," elliptic curve is defined over the finite field of prime order. The equation of the curve is: ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"msup"},"y"),(0,i.kt)("mn",{parentName:"msup"},"2")),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"msup"},"x"),(0,i.kt)("mn",{parentName:"msup"},"3")),(0,i.kt)("mo",{parentName:"mrow"},"+"),(0,i.kt)("mn",{parentName:"mrow"},"7"),(0,i.kt)("mspace",{parentName:"mrow"}),(0,i.kt)("mspace",{parentName:"mrow",width:"0.6667em"}),(0,i.kt)("mrow",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"m"),(0,i.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"o"),(0,i.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"d")),(0,i.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,i.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,i.kt)("mi",{parentName:"mrow"},"p")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y^2 = x^3 + 7 \\mod p")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0085em",verticalAlign:"-0.1944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"3")))))))),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"7"),(0,i.kt)("span",{parentName:"span",className:"mspace allowbreak"}),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.6667em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathrm"},"mod"))),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"))))),"."),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"p")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," is a large prime number (the field modulus),"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"x")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," and ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"y")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")))))," are the coordinates of a point on the curve.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Secp256k1")," has gained significant prominence due to its use in various blockchain networks, most notably in Bitcoin and Ethereum.\n",(0,i.kt)("inlineCode",{parentName:"p"},"Secp256k1")," is used for key pair generation, digital signatures, and verification of transactions.\nAddresses are derived from public keys generated using this elliptic curve."),(0,i.kt)("p",null,"The choice of ",(0,i.kt)("inlineCode",{parentName:"p"},"Secp256k1")," for Ethereum was influenced by several factors, including the efficiency of the curve's\narithmetic operations, its resistance to certain types of cryptographic attacks, and its relatively simple mathematical\nstructure. The properties of ",(0,i.kt)("inlineCode",{parentName:"p"},"Secp256k1")," make it well-suited for the cryptographic requirements of blockchain\napplications, providing a good balance between security and computational efficiency."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For more detailed overview, please follow this ",(0,i.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Secp256k1"},"wiki-page"),".")),(0,i.kt)("h2",{id:"available-functions"},"Available Functions"),(0,i.kt)("p",null,"On this page you will find all the available functions for ",(0,i.kt)("inlineCode",{parentName:"p"},"Secp256k1")," curve implemented in this plugin."),(0,i.kt)("h3",{id:"generate-private-key"},"Generate Private Key"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Generate Private Key (secp256k1)")," is a function that allows you to generate a ",(0,i.kt)("em",{parentName:"p"},"Private Key")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"secp256k1"),".\nThere is a slight chance of failure on untested platforms, but in general the plugin should work on all platforms."),(0,i.kt)("p",null,"The function returns the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Private Key ",(0,i.kt)(s.h8,{text:"1",mdxType:"Step"}),": The generated private key."),(0,i.kt)("li",{parentName:"ul"},"Success ",(0,i.kt)(s.h8,{text:"2",mdxType:"Step"}),": A boolean value indicating whether the private key generation was successful or not.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We strongly recommend using this function for ",(0,i.kt)("em",{parentName:"p"},"Private Key")," generation since it's using a high secure random byte function.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generate Private Key",src:a(26962).Z,width:"500",height:"320"})),(0,i.kt)("h3",{id:"generate-public-key"},"Generate Public Key"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Generate Public Key (secp256k1)")," is a function that allows you to generate a ",(0,i.kt)("em",{parentName:"p"},"Public Key")," from a specified ",(0,i.kt)("em",{parentName:"p"},"Private Key"),"\nusing ",(0,i.kt)("inlineCode",{parentName:"p"},"secp256k1"),"."),(0,i.kt)("p",null,"This function requires the following inputs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Private Key ",(0,i.kt)(s.h8,{text:"1",mdxType:"Step"}),": The private key to use for generating the public key.")),(0,i.kt)("p",null,"The function returns the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Public Key ",(0,i.kt)(s.h8,{text:"2",mdxType:"Step"}),": The generated public key."),(0,i.kt)("li",{parentName:"ul"},"Success ",(0,i.kt)(s.h8,{text:"3",mdxType:"Step"}),": A boolean value indicating whether the public key generation was successful or not.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generate Public Key",src:a(60589).Z,width:"513",height:"353"})),(0,i.kt)("h3",{id:"is-private-key-valid"},"Is Private Key Valid"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Is Private Key Valid (secp256k1)")," is a function that checks if the given ",(0,i.kt)("em",{parentName:"p"},"private key")," is valid for ",(0,i.kt)("inlineCode",{parentName:"p"},"Secp256k1"),"."),(0,i.kt)("p",null,"This function requires the following inputs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Private Key ",(0,i.kt)(s.h8,{text:"1",mdxType:"Step"}),": The private key to validate.")),(0,i.kt)("p",null,"The function returns the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Success ",(0,i.kt)(s.h8,{text:"2",mdxType:"Step"}),":  A boolean value indicating whether the given private key is valid for Secp256k1 or not.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Is Private Key Valid",src:a(64952).Z,width:"498",height:"291"})),(0,i.kt)("h3",{id:"is-public-key-valid"},"Is Public Key Valid"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Is Public Key Valid (secp256k1)")," is a function that checks if the given ",(0,i.kt)("em",{parentName:"p"},"public key")," is valid for ",(0,i.kt)("inlineCode",{parentName:"p"},"Secp256k1"),"."),(0,i.kt)("p",null,"This function requires the following inputs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Public Key ",(0,i.kt)(s.h8,{text:"1",mdxType:"Step"}),": The public key to validate.")),(0,i.kt)("p",null,"The function returns the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Success ",(0,i.kt)(s.h8,{text:"2",mdxType:"Step"}),":  A boolean value indicating whether the given public key is valid for Secp256k1 or not.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Is Public Key Valid",src:a(29627).Z,width:"451",height:"271"})),(0,i.kt)("h3",{id:"generate-shared-secret"},"Generate Shared Secret"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Generate Shared Secret (secp256k1)")," is a function that generates a shared secret using ",(0,i.kt)("inlineCode",{parentName:"p"},"Secp256k1"),".\nThis shared secret is typically derived from your private key and someone's public key to establish a secure\ncommunication channel or to derive additional keys for symmetric encryption."),(0,i.kt)("p",null,"This function requires the following inputs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Public Key ",(0,i.kt)(s.h8,{text:"1",mdxType:"Step"}),": The public key to use for generating the secret."),(0,i.kt)("li",{parentName:"ul"},"Private Key ",(0,i.kt)(s.h8,{text:"2",mdxType:"Step"}),": The private key to use for generating the secret.")),(0,i.kt)("p",null,"The function returns the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Secret ",(0,i.kt)(s.h8,{text:"3",mdxType:"Step"}),":  The generated secret."),(0,i.kt)("li",{parentName:"ul"},"Success ",(0,i.kt)(s.h8,{text:"4",mdxType:"Step"}),":  A boolean value indicating whether the shared secret generation using Secp256k1 was successful or not.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generate Shared Secret",src:a(24304).Z,width:"481",height:"322"})),(0,i.kt)("h3",{id:"create-signature"},"Create Signature"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Create Signature (secp256k1)")," is a function that signs the given hash with the private key using ",(0,i.kt)("inlineCode",{parentName:"p"},"Secp256k1"),"."),(0,i.kt)("p",null,"This function requires the following inputs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Private Key ",(0,i.kt)(s.h8,{text:"1",mdxType:"Step"}),": The private key to use for signing."),(0,i.kt)("li",{parentName:"ul"},"Hash ",(0,i.kt)(s.h8,{text:"2",mdxType:"Step"}),": The hashed message to sign.")),(0,i.kt)("p",null,"The function returns the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Signature ",(0,i.kt)(s.h8,{text:"3",mdxType:"Step"}),":  The created signature."),(0,i.kt)("li",{parentName:"ul"},"Success ",(0,i.kt)(s.h8,{text:"4",mdxType:"Step"}),":  A boolean value indicating whether the signing using Secp256k1 was successful or not.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Requires the given hash to be at least 16 bytes in length. Too short and it will fail. Too long and the overflowing\nbytes will be cut off.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Signature",src:a(51635).Z,width:"482",height:"353"})),(0,i.kt)("h3",{id:"create-signature-deterministic"},"Create Signature Deterministic"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Create Signature (Deterministic) (secp256k1)")," is a function that signs the given hash deterministically with the\nprivate key using ",(0,i.kt)("inlineCode",{parentName:"p"},"Secp256k1"),"."),(0,i.kt)("p",null,"This function requires the following inputs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Private Key ",(0,i.kt)(s.h8,{text:"1",mdxType:"Step"}),": The private key to use for signing."),(0,i.kt)("li",{parentName:"ul"},"Hash ",(0,i.kt)(s.h8,{text:"2",mdxType:"Step"}),": The hashed message to sign."),(0,i.kt)("li",{parentName:"ul"},"Hash Type ",(0,i.kt)(s.h8,{text:"3",mdxType:"Step"}),": Type of the hash function used in hashing the message.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Hash Type")," has to match the actual hash function used when hashing the message.\nDifferent hash type will result in an invalid signature.")),(0,i.kt)("p",null,"The function returns the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Signature ",(0,i.kt)(s.h8,{text:"4",mdxType:"Step"}),":  The created signature."),(0,i.kt)("li",{parentName:"ul"},"Success ",(0,i.kt)(s.h8,{text:"5",mdxType:"Step"}),":  A boolean value indicating whether the deterministic signing using Secp256k1 was successful or not.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Requires the given hash to be at least 16 bytes in length. Too short and it will fail. Too long and the overflowing\nbytes will be cut off.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Signature Deterministic",src:a(1970).Z,width:"643",height:"434"})),(0,i.kt)("h3",{id:"verify-signature"},"Verify Signature"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Verify Signature (secp256k1)")," is a function that checks if the signature of a signed hash with the provided\n",(0,i.kt)("em",{parentName:"p"},"public key")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"Secp256k1")," is valid."),(0,i.kt)("p",null,"This function requires the following inputs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Public Key ",(0,i.kt)(s.h8,{text:"1",mdxType:"Step"}),": The signer's public key to use for verifying the given hashed message and signature."),(0,i.kt)("li",{parentName:"ul"},"Hash ",(0,i.kt)(s.h8,{text:"2",mdxType:"Step"}),": The hashed message that was used to create the signature."),(0,i.kt)("li",{parentName:"ul"},"Signature ",(0,i.kt)(s.h8,{text:"3",mdxType:"Step"}),": The signature to verify it matches with the given signer's public key and the hashed message.")),(0,i.kt)("p",null,"The function returns the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Success ",(0,i.kt)(s.h8,{text:"4",mdxType:"Step"}),":  A boolean value indicating whether the signature of a signed hash using Secp256k1 is valid or not.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Verify Signature",src:a(58785).Z,width:"482",height:"318"})),(0,i.kt)("h3",{id:"compress-public-key"},"Compress Public Key"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Compress Public Key (secp256k1)")," is a function that compresses the ",(0,i.kt)("em",{parentName:"p"},"public key")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"Secp256k1"),"."),(0,i.kt)("p",null,"This function requires the following inputs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Public Key ",(0,i.kt)(s.h8,{text:"1",mdxType:"Step"}),": The uncompressed public key.")),(0,i.kt)("p",null,"The function returns the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Compressed Public Key ",(0,i.kt)(s.h8,{text:"2",mdxType:"Step"}),": The compressed public key."),(0,i.kt)("li",{parentName:"ul"},"Success ",(0,i.kt)(s.h8,{text:"3",mdxType:"Step"}),":  A boolean value indicating whether the compression of the public key using Secp256k1 was successful or not.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Compress Public Key",src:a(45829).Z,width:"497",height:"323"})),(0,i.kt)("h3",{id:"decompress-public-key"},"Decompress Public Key"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Decompress Public Key (secp256k1)")," is a function that decompresses the compressed ",(0,i.kt)("em",{parentName:"p"},"public key")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"Secp256k1"),"."),(0,i.kt)("p",null,"This function requires the following inputs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Compressed Public Key ",(0,i.kt)(s.h8,{text:"1",mdxType:"Step"}),": The compressed public key.")),(0,i.kt)("p",null,"The function returns the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Public Key ",(0,i.kt)(s.h8,{text:"2",mdxType:"Step"}),": The uncompressed public key."),(0,i.kt)("li",{parentName:"ul"},"Success ",(0,i.kt)(s.h8,{text:"3",mdxType:"Step"}),":  A boolean value indicating whether the decompression of the public key using Secp256k1 was successful or not.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The function might return false if the decompressed ",(0,i.kt)("em",{parentName:"p"},"public key")," is not valid.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Decompress Public Key",src:a(19577).Z,width:"498",height:"350"})))}u.isMDXComponent=!0},26962:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/01_generate_private_key-a8657b232d0ee271ce793e27ce374b2f.png"},60589:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/02_generate_public_key-fec017b60fea99a31cc23d7eff2ff72d.png"},64952:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/03_valid_private_key-53471d57ba0a2ed76beb488b825f1b0e.png"},29627:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/04_valid_public_key-1098905d69ead0651f91aa4c4a1ab561.png"},24304:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/05_generate_shared_secret-0b0df9f457a8deb84c7069b9db1cb1e2.png"},51635:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/06_create_signature-9f1dbd1af8b0466e6c2d10c56ad631dc.png"},1970:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/07_create_signature_deterministic-99ea113a1bcfaebe3dfc80b018ce186d.png"},58785:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/08_verify_signature-17a5caf76a1b232cf142489e06aefa1a.png"},45829:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/09_compress_public_key-7dac3862bf35bd4cec2d153766b8817a.png"},19577:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/10_decompress_public_key-100f63b8231135cce22e2752d4a5d12c.png"}}]);