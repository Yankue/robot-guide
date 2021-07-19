const { description } = require('../../package.json');

const config = {

	title: 'RoBot Guide',

	description: description,

	theme: 'yuu',

	head: [
		['meta', { charset: 'utf-8' }],
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
		['link', { rel: 'icon', href: '/favicon.png' }],
		['meta', { name: 'theme-color', content: '#3498db' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['meta', { property: 'og:title', content: 'Robot Wiki' }],
		['meta', { property: 'og:description', content: 'Official Robot guide maintained by the Robot Staff Team' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:locale', content: 'en_US' }],
		['meta', { property: 'og:image', content: '/meta-image.png' }]
	],

	themeConfig: {
		yuu: {
			logo: 'GuideLogo',
			defaultDarkTheme: true,
			colorThemes: ['blue', 'green'],
			defaultColorTheme: 'blue',
		},
		repo: 'SinisterDeveloper/robot-wiki',
		editLinks: false,
		searchMaxSuggestions: 5,
		smoothScroll: true,
		docsDir: 'guide',
		editLinks: false,
		sidebarDepth: 3,
		lastUpdated: true,
		nav: [
			{
				text: 'Premium',
				link: 'other/premium.md'
			},
			{
				text: 'Invite',
				link: 'https://discord.com/oauth2/authorize?client_id=832239654304481312&scope=bot&permissions=8'
			},
			{
				text: 'Support Server',
				link: 'https://discordrobot.tech/support'
			},
		],
		sidebar: {
			'/guide/': [
				{
					title: 'Introduction',
					children: [
						'',
						'more-content',
					]
				},
				{
					title: 'Getting Started',
					children: [
						'/guide/core-setup/'
					]
				}
			],
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': '../',
			},
		},
	},
	plugins: [
		['vuepress-plugin-loading-overlay', {
			loader: 'dots',
			timeout: 500,
		}]
	]
}

for (const group of Object.values(config.themeConfig.sidebar)) {
	for (const section of group) {
		if (section.collapsable) continue;
		section.collapsable = false;
	}
}

if (process.env.NODE_ENV === 'production') {
	config.themeConfig.algolia = {
		apiKey: '2beecf2061d1b4b5f47593b7f790b3e9',
		indexName: 'robot',
	};

	config.plugins.push(['@vuepress/google-analytics', { ga: 'G-TNE4RT1QVL' }]);
}

module.exports = config;