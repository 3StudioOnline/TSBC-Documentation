// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const url3StudioWebsite = "https://3studio.online";
const urlUnrealMarketplaceProduct_TSIF = "https://www.unrealengine.com/marketplace/en-US/product/b8a5ef2c915c4359b7e66d08a85d4c74";
const urlUnrealMarketplaceProduct_TSBC = "https://www.unrealengine.com/marketplace/en-US/product/fc42c8121e0d445f8887ed6962af796e";
const urlDiscordInviteLink = "http://discord.3studio.online";
const urlGitHubRepository = "https://github.com/3StudioOnline/TSBC-Documentation";
const urlGitHubIssueTracker = `${urlGitHubRepository}/issues`;

const globalRemarkPlugins = [
    require('mdx-mermaid'),
    require('remark-math'),
    require('@akebifiky/remark-simple-plantuml'),
];

const globalRehypePlugins = [
    require('rehype-katex'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "3Studio Online Blockchain Plugin",
    tagline: "Adds networking support that allows to communicate and interact with most popular blockchain networks.",
    organizationName: "3StudioOnline", // Usually your GitHub org/user name.
    projectName: "TSBC-Documentation", // Usually your repo name.
    deploymentBranch: "gh-pages",

    url: "https://3StudioOnline.github.io",
    baseUrl: "/TSBC-Documentation/",

    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",

    plugins: [
        'docusaurus-plugin-sass',
        require.resolve("docusaurus-plugin-image-zoom"),
    ],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl: ({versionDocsDirPath, docPath}) =>
                        `${urlGitHubRepository}/edit/master/${versionDocsDirPath}/${docPath}`,
                    showLastUpdateTime: false,
                    includeCurrentVersion: false,
                    versions: {
                        "2.1.0": {
                            banner: "none",
                        },
                        "2.0.4": {
                            banner: "none",
                        },
                        "1.2.0": {
                            banner: "none",
                        },
                        "1.1.0": {
                            banner: "none",
                        },
                        "1.0.8": {
                            banner: "none",
                        }
                    },

                    remarkPlugins: globalRemarkPlugins,
                    rehypePlugins: globalRehypePlugins,
                },

                pages: {
                    remarkPlugins: globalRemarkPlugins,
                    rehypePlugins: globalRehypePlugins,
                },

                blog: false,

                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },

                // gtag: {
                //     trackingID: 'G-TODO',
                //     anonymizeIP: true,
                // }
            }),
        ],
    ],

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },

            navbar: {
                title: "3Studio Online Blockchain Plugin",
                logo: {
                    alt: "3Studio Online Blockchain Plugin Logo",
                    src: "img/logo-48.png",
                },
                items: [
                    {
                        type: "doc",
                        docId: "getting-started/introduction",
                        label: "Documentation",
                        position: "left",
                    },

                    {type: "docsVersionDropdown", position: "left"},

                    {to: "/changelog", label: "Changelog", position: "right"},

                    {to: "/roadmap", label: "Roadmap", position: "right"},

                    {
                        href: urlDiscordInviteLink,
                        label: "Discord",
                        position: "right",
                    },

                    {
                        href: urlGitHubIssueTracker,
                        label: "Issue Tracker",
                        position: "right",
                    },

                    {
                        href: urlGitHubRepository,
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },

            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {to: "/docs/getting-started/introduction", label: "Getting Started"},

                            {to: "/changelog", label: "Changelog"},

                            {to: "/roadmap", label: "Roadmap"},
                        ],
                    },

                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: urlDiscordInviteLink,
                            },
                        ],
                    },

                    {
                        title: "Unreal Marketplace",
                        items: [
                            {
                                label: "3Studio Online Blockchain Plugin",
                                href: urlUnrealMarketplaceProduct_TSBC,
                            },
                            {
                                label: "3Studio Online IPFS Plugin",
                                href: urlUnrealMarketplaceProduct_TSIF,
                            },
                        ],
                    },

                    {
                        title: "More",
                        items: [
                            {
                                label: "3Studio",
                                href: url3StudioWebsite,
                            },

                            {
                                label: "GitHub",
                                href: urlGitHubRepository,
                            },

                            {
                                label: "Issue Tracker",
                                href: urlGitHubIssueTracker,
                            },
                        ],
                    },
                ],

                copyright: `Copyright © ${new Date().getFullYear()} 3Studio.online. All Rights Reserved.`,
            },

            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },

            zoom: {
                selector: '.markdown :not(em) > img',
                config: {
                    // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
                    margin: 64,
                    background: {
                        light: 'rgb(255, 255, 255)',
                        dark: 'rgb(50, 50, 50)',
                    }
                }
            }
        }),
};

module.exports = config;
