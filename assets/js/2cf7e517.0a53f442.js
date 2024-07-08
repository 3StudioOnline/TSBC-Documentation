"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[62813],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),h=o,f=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>i,h8:()=>o,qh:()=>c,y$:()=>a});r(87462),r(67294);var n=r(3905);const o=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},a=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:r}=e;const o="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function s(e,t,r,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return s(0,"Released","#afa","#181")}},4874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905)),a=r(4887);const i={sidebar_position:9,title:"QR Code"},s="What is a QR Code",c={unversionedId:"other-functionality/qr-code",id:"version-3.1.1/other-functionality/qr-code",title:"QR Code",description:"A QR code (Quick Response code) is a type of matrix barcode (or two-dimensional barcode) that can store a wide range of",source:"@site/versioned_docs/version-3.1.1/other-functionality/qr-code.mdx",sourceDirName:"other-functionality",slug:"/other-functionality/qr-code",permalink:"/TSBC-Documentation/docs/other-functionality/qr-code",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-3.1.1/other-functionality/qr-code.mdx",tags:[],version:"3.1.1",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"QR Code"},sidebar:"tutorialSidebar",previous:{title:"PBKDF2",permalink:"/TSBC-Documentation/docs/other-functionality/pbkdf2-hmac"},next:{title:"FAQ",permalink:"/TSBC-Documentation/docs/faq"}},d={},l=[{value:"QR Code Generation as Texture2D",id:"qr-code-generation-as-texture2d",level:2},{value:"QR Code Generation as Byte Array",id:"qr-code-generation-as-byte-array",level:2},{value:"Conversion of QR Code Byte Array to Texture2D",id:"conversion-of-qr-code-byte-array-to-texture2d",level:2}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-a-qr-code"},"What is a QR Code"),(0,o.kt)("p",null,"A QR code (Quick Response code) is a type of matrix barcode (or two-dimensional barcode) that can store a wide range of\ninformation and is easily scanned using a smartphone camera."),(0,o.kt)("p",null,"In the context of Blockchain, a QR code serves as a convenient and secure method to represent wallet addresses and\ntransaction information. Instead of manually typing long and complex addresses, users can scan a QR code to initiate\ntransactions, exchange public keys, or access specific content on a Blockchain. This simplifies the process of sending\nand receiving digital currencies, enhancing user experience and reducing the risk of errors in transactions."),(0,o.kt)("p",null,"For more information, see this ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/QR_code"},"Wikipedia")," article."),(0,o.kt)("h2",{id:"qr-code-generation-as-texture2d"},"QR Code Generation as Texture2D"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Generate QR Code as Texture2D")," generates a QR code from a text string of specified size in pixels as a Texture2D."),(0,o.kt)("p",null,"This function requires inputs as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Content ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : The text to store in the QR code. Must not be empty."),(0,o.kt)("li",{parentName:"ul"},"Width ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," : The width in pixels of the QR code. Must be greater than 0."),(0,o.kt)("li",{parentName:"ul"},"Height ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," : The height in pixels of the QR code. Must be greater than 0."),(0,o.kt)("li",{parentName:"ul"},"Margin ",(0,o.kt)(a.h8,{text:"4",mdxType:"Step"})," : The margin in pixels around the QR code. Must be greater than or equal to 0."),(0,o.kt)("li",{parentName:"ul"},"Encoding ",(0,o.kt)(a.h8,{text:"5",mdxType:"Step"})," : The character set to use for encoding the QR code."),(0,o.kt)("li",{parentName:"ul"},"Error Correction Level ",(0,o.kt)(a.h8,{text:"6",mdxType:"Step"})," : The error correction level, ranging from low (~7%) to high (~30%).\nThis variable refers to the degree of redundancy built into the code to ensure data integrity even\nif the code is damaged or partially obscured. A higher error correction level increases the QR code's resilience\nto damage, but it also increases the code's size.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"QR Code Generation as Texture2D",src:r(66921).Z,width:"729",height:"462"})),(0,o.kt)("p",null,"If the generation is successful, the value ",(0,o.kt)("em",{parentName:"p"},"QR Code")," ",(0,o.kt)(a.h8,{text:"7",mdxType:"Step"})," will return the QR code as a Texture2D\nwith encoded content in it."),(0,o.kt)("h2",{id:"qr-code-generation-as-byte-array"},"QR Code Generation as Byte Array"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Generate QR Code as Byte Array")," generates a QR code from a text string of specified size in pixels as a byte array."),(0,o.kt)("p",null,"This function requires inputs as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Content ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : The text to store in the QR code. Must not be empty."),(0,o.kt)("li",{parentName:"ul"},"Width ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," : The width in pixels of the QR code. Must be greater than 0."),(0,o.kt)("li",{parentName:"ul"},"Height ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," : The height in pixels of the QR code. Must be greater than 0."),(0,o.kt)("li",{parentName:"ul"},"Margin ",(0,o.kt)(a.h8,{text:"4",mdxType:"Step"})," : The margin in pixels around the QR code. Must be greater than or equal to 0."),(0,o.kt)("li",{parentName:"ul"},"Encoding ",(0,o.kt)(a.h8,{text:"5",mdxType:"Step"})," : The character set to use for encoding the QR code."),(0,o.kt)("li",{parentName:"ul"},"Error Correction Level ",(0,o.kt)(a.h8,{text:"6",mdxType:"Step"})," : The error correction level, ranging from low (~7%) to high (~30%).\nThis variable refers to the degree of redundancy built into the code to ensure data integrity even\nif the code is damaged or partially obscured. A higher error correction level increases the QR code's resilience\nto damage, but it also increases the code's size.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"QR Code Generation as Byte Array",src:r(4476).Z,width:"703",height:"473"})),(0,o.kt)("p",null,"If the generation is successful, the value ",(0,o.kt)("em",{parentName:"p"},"QR Code")," ",(0,o.kt)(a.h8,{text:"7",mdxType:"Step"})," will return the QR code as a byte array\nwith encoded content in it."),(0,o.kt)("h2",{id:"conversion-of-qr-code-byte-array-to-texture2d"},"Conversion of QR Code Byte Array to Texture2D"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Convert QR Code Byte Array to Texture2D")," converts a byte array containing a QR code to a Texture2D."),(0,o.kt)("p",null,"This function requires inputs as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Byte Array ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : The byte array with the QR code to convert."),(0,o.kt)("li",{parentName:"ul"},"Width ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," : The width in pixels of the QR code. Must match the original width used during QR code generation."),(0,o.kt)("li",{parentName:"ul"},"Height ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," : The height in pixels of the QR code. Must match the original height used during QR code generation.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Conversion of QR Code Byte Array to Texture2D",src:r(18098).Z,width:"596",height:"391"})),(0,o.kt)("p",null,"If the conversion is successful, the value ",(0,o.kt)("em",{parentName:"p"},"QR Code")," ",(0,o.kt)(a.h8,{text:"4",mdxType:"Step"})," will return the QR code as a Texture2D\nwith encoded content in it."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The third-party library ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zxing-cpp/zxing-cpp"},"ZXing-C++")," is used to generate the QR codes.")))}u.isMDXComponent=!0},66921:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/qr_01_generate_as_texture2d-d0f9992000719275c20e71282dbff776.png"},4476:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/qr_02_generate_as_byte_array-78269a9548b8ac998812557bc5f4296e.png"},18098:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/qr_03_convert-3cd0f7016ee9bb9c4b7dd8fe223abd3a.png"}}]);