# Blockchain Plugin

🔌 [Demo Unreal Project](https://dev.azure.com/3StudioOnline/Public%20Resources/_git/Web3UE) (PLUGIN REQUIRED) <br/>
📽 [Tutorial Videos](https://www.youtube.com/watch?v=Qp_JcKgtlzw&list=PLTztLWdi2XEG8sSoCs_lmqXq1_yvlWmkk) <br/>
📖 [Documentation](https://3studioonline.github.io/TSBC-Documentation) </br>
📆 [Roadmap](https://3studioonline.github.io/TSBC-Documentation/roadmap) <br/>
🛰 [Discord](https://discord.gg/3studio) <br/>

**Blockchain Integration Plugin**
Function library to construct and send blockchain transactions via JSON-RPC and communication with smart contracts directly from the engine. All functions are exposed to blueprints for user convenience. Can be Packaged and shipped with Dedicated Servers. No 3rd party libraries or dependencies.

Currently Supports **Ethereum**, **Polygon**, and **custom**. 

**WHY Blockchain?**

Blockchain allows to write, read and store values and functions inside a decentralized ledger that holds no cost to upkeep, and no need to set up servers or databases. It can keep any “cloud data” one would usually use 3rd party providers, involving saves, statistics, account data, user-generated content recipes, anonymous statistics. The cost of creating and maintaining the data can be as low as zero due to the possible use of test networks. Nevertheless, if you wish to migrate your project to the main net, you pay only for what is actual use, with no upkeep or pesky subscriptions to follow. You also are not reliably on 3rd party software that could, in theory, go under or unavailable at any time. 

**NFT support?**

You can mint, transfer, or use NFTs with this plugin. Either as rewards for playing or simply utilizing a premade project collection generated months ago. Here lies the most accessible gateway to the utility of NFTs. The plugin also allows launching solidity contracts directly from the engine.

**Play to Earn?**

Our plugin fully supports the play-to-earn model. You can present players with your tokens or directly by transfers or minting privileges for your games' NFTs. Play to earn, go above and beyond simple monetary value, and cold work entirely without a payment model or a custom token as currency.

**Next steps:**

We highly recommend you to check out the documentation pages. The *Getting Started* section is for you, if you are in a
hurry. For an in-depth explanation about the plugin's concepts and architecture, we prepared diagrams for you that will help you to understand the flow of
events.

If you happen to get stuck with our plugin or have any questions about how to use the **Blockchain Integration Plugin**, you can:
Join the community on our [Discord](https://discord.gg/3studio).
Check out the [FAQ](https://3studioonline.github.io/TSBC-Documentation/docs/faq) for common issues and how to solve them.

If you think that you have found a 🐞 bug 🐞, please report it on our [GitHub Issue Tracker](https://github.com/3studioonline/TSBC-Documentation/issues).

## Technical Details

**Features:**
- ECDSA - SECP 256 K1– a private and a public key generation based on elliptic curves. From random input or string key seed.
- Keccak 256, sha 256, sha 512, ripemd 160 hashing library functions integration.
- Ethereum Address generation and validation.
- JSON RPC Request – Functionality to call JSON RPC call on any blockchain node in any blockchain implementing JSON RPC as a method of communication. Send messages directly to nodes instead of a singular point of failure API gateway. Async nodes and event call-back version.
- _ETH functions – basic ETH functions for checking gas price, Get Balance, Send Raw Transaction, Estimate Gas. More coming.
- Uint256 parser – Blockchain uses variable types out of bound for unreal engine to handle natively. That’s why we introduced parsers for 256-bit integers and unsigned integers.
- Hex conversion – Converters in both ways to generate hex string from big int string, and other way around.
- Generate transaction – generation and signing transactions to send via RPC calls.
- Base58 Parser.
- Secure Random Bytes Library.

**v1.0**
- Base58 encoding
- Bytes array operations
- ECDSA SECP256k1 full support (signing, key generation, etc)
- Sha512, Sha256, Ripemd160
- Keccak-256 full support
- JSON-RPC General API call function (async and callback)
- Uint256 full support: Calculation, Comparison, Conversion, Parsing
- Ethereum Methods: Estimate gas, Gas price, Transaction count, Get balance
- Send raw transactions
- Address generation
- Address validation
- Transaction signing
- Transaction validation
- Get network configuration

**Code Modules:**
- TSBC_Plugin (Runtime)

**Number of Blueprints:** 0

**Number of C++ Classes:** 29

**Network Replicated:** Yes (via Blockchain)
