"use strict";(self.webpackChunktsbc_documentation=self.webpackChunktsbc_documentation||[]).push([[8542],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4887:(e,t,a)=>{a.d(t,{UE:()=>o,h8:()=>r,qh:()=>l,y$:()=>i});a(87462),a(67294);var n=a(3905);const r=e=>{let{children:t,text:a}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},a)},i=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function o(e){let{children:t,version:a}=e;const r="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:r,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},a)}function s(e,t,a,r){return(0,n.kt)("div",{style:{backgroundColor:r,color:a,border:"1px "+a+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return s(0,"Released","#afa","#181")}},98131:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(4887);const i={sidebar_position:2,title:"Private and Public Keys"},o=void 0,s={unversionedId:"quick-start/private-public-key",id:"version-1.0.8/quick-start/private-public-key",title:"Private and Public Keys",description:"Private Key",source:"@site/versioned_docs/version-1.0.8/quick-start/private-public-key.mdx",sourceDirName:"quick-start",slug:"/quick-start/private-public-key",permalink:"/TSBC-Documentation/docs/1.0.8/quick-start/private-public-key",draft:!1,editUrl:"https://github.com/3StudioOnline/TSBC-Documentation/edit/master/versioned_docs/version-1.0.8/quick-start/private-public-key.mdx",tags:[],version:"1.0.8",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Private and Public Keys"},sidebar:"tutorialSidebar",previous:{title:"Blockchain Configuration",permalink:"/TSBC-Documentation/docs/1.0.8/quick-start/network-config"},next:{title:"Wallet Address",permalink:"/TSBC-Documentation/docs/1.0.8/quick-start/wallet-address"}},l={},c=[{value:"Private Key",id:"private-key",level:2},{value:"Generate Random Key",id:"generate-random-key",level:3},{value:"Bytes To Base58",id:"bytes-to-base58",level:3},{value:"Storing Keys",id:"storing-keys",level:3},{value:"Public Key",id:"public-key",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"private-key"},"Private Key"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Private Key")," is a secret number that allows ",(0,r.kt)("em",{parentName:"p"},"Ethereum")," users to prove ownership of an account or contracts, by producing a digital signature."),(0,r.kt)("h3",{id:"generate-random-key"},"Generate Random Key"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Generate Private Key")," is a function that allows you to generate a ",(0,r.kt)("em",{parentName:"p"},"Private Key")," easily.\nThere is a slight chance of failure on untested platforms, but in general the plugin should work on all platforms."),(0,r.kt)("p",null,"We strongly recommend using this function for ",(0,r.kt)("em",{parentName:"p"},"Private Key")," generation since it's using a high secure random byte function."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generate Private Key",src:a(12076).Z,width:"322",height:"179"})),(0,r.kt)("h3",{id:"bytes-to-base58"},"Bytes To Base58"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BytesToBase58")," is a helper function that converts a ",(0,r.kt)("em",{parentName:"p"},"Bytes Array")," into a ",(0,r.kt)("em",{parentName:"p"},"Base58 String"),".\nThis helps to display the key in an easy to read format(String) or for offline storaging."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Base58",src:a(64031).Z,width:"578",height:"210"})),(0,r.kt)("h3",{id:"storing-keys"},"Storing Keys"),(0,r.kt)("p",null,"To truly own crypto assets you must be in possession of your ",(0,r.kt)("em",{parentName:"p"},"Private Keys")," to access your assets.\nMeaning the private key generated should not be stored on a server, but is owned by the user. All transactions should be initiated directly from the user's endpoint and directed to the ",(0,r.kt)("em",{parentName:"p"},"Blockchain")," network and not to an intermediary server."),(0,r.kt)("p",null,"The easiest way to store ",(0,r.kt)("em",{parentName:"p"},"Private keys")," is to make a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Save Game"),' object, create a variable of "Bytes Array" type in it then store the private key in it directly.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Save Game Bytes Array",src:a(3934).Z,width:"752",height:"251"})),(0,r.kt)("p",null,"To store the values you can use functions ",(0,r.kt)("inlineCode",{parentName:"p"},"Create Save Game Object"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Save Game to Slot"),". You can find more info about saving game objects ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/SaveGame/"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Save Game slot",src:a(49685).Z,width:"863",height:"244"})),(0,r.kt)("p",null,"In this way the ",(0,r.kt)("em",{parentName:"p"},"Private key")," will be stored locally on the users's device which will allow to reuse it again when the game is running.\nTo load a ",(0,r.kt)("em",{parentName:"p"},"Private Key")," you just need to verify that the save game file exists, then load it from the device. After that you have to either cast your save game object to your custom save game or use a blueprint interface to read the value."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Load Game slot",src:a(10143).Z,width:"862",height:"104"})),(0,r.kt)("p",null,"Your save game objects are stored in editor as well in your ",(0,r.kt)("inlineCode",{parentName:"p"},"projects-folder/Saved/SaveGames"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Save Game File Location",src:a(21700).Z,width:"674",height:"107"})),(0,r.kt)("p",null,"Only the ",(0,r.kt)("em",{parentName:"p"},"Private Key")," is necessary to gain full access to your wallet. All other components like an ",(0,r.kt)("em",{parentName:"p"},"Address")," or ",(0,r.kt)("em",{parentName:"p"},"Public Key")," can be regenerated from ",(0,r.kt)("em",{parentName:"p"},"Private Key")," at any time.\nIt is good practice to lock all functionalities of ",(0,r.kt)("em",{parentName:"p"},"Blockchain")," in an object that exists only on local client - like Widgets, HUD, Game Instance. "),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Never replicate ",(0,r.kt)("em",{parentName:"p"},"Private Keys")," to server or to other clients.")),(0,r.kt)("h2",{id:"public-key"},"Public Key"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Public Key")," is a number derived via a one-way function from a ",(0,r.kt)("em",{parentName:"p"},"Private key"),", which can be shared publicly and used by anyone to verify a digital signature made with the corresponding ",(0,r.kt)("em",{parentName:"p"},"Private Key"),"."),(0,r.kt)("p",null,"You can easily generate a ",(0,r.kt)("em",{parentName:"p"},"Public Key")," by using the function ",(0,r.kt)("inlineCode",{parentName:"p"},"Generate Public Key")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generate Public Key",src:a(25358).Z,width:"569",height:"250"})))}u.isMDXComponent=!0},12076:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/01_generate_private_key-ca0c193f90bce5e68e2565f10407bdd0.png"},64031:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/02_base58-8ec2037328dba59fd5039a3ec3b96ace.png"},3934:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/04_save_game_bytes_array-7202d7f613c1c6700a792e55da6244f5.png"},49685:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/05_save_game_slot-5524ff13749c4daded7f0f0f82a6d939.png"},10143:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/06_load_game_slot-1a6590186c9f7934ea0227e79f247345.png"},21700:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},25358:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/08_generate_public_key-0eb00daee5d520d70d385cfad6ce0ad1.png"}}]);