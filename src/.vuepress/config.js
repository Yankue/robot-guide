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
		editLinks: false,
		searchMaxSuggestions: 5,
		smoothScroll: true,
		docsDir: 'guide',
		editLinks: false,
		sidebarDepth: 3,
		lastUpdated: true,
		nav: [
			{
				text: 'Changelog',
				link: '/changelog/'
			},
			{
				text: 'Premium',
				link: '/guide/premium'
			},
			{
				text: 'Invite',
				link: 'https://discord.com/oauth2/authorize?client_id=832239654304481312&scope=applications.commands%20bot&permissions=8'
			},
			{
				text: 'Support Server',
				link: 'https://robotdiscord.ga/support'
			},
		],
		sidebar: {
			'/guide/': [
				{
					title: 'Introduction',
					children: [
						'',
						'more-content',
						'bugs',
						'premium'
					]
				},
				{
					title: 'Getting Started',
					children: [
						'/guide/core-setup/'
					]
				},
				{
					title: 'Posting',
					children: [
						'/guide/posting/',
						'/guide/posting/plugins',
						'/guide/posting/approval',
						'/guide/posting/extras'
					]
				},
				{
					title: 'Tickets',
					children: [
						'/guide/tickets/'
					]
				},
				{
					title: 'Ranking',
					children: [
						'/guide/ranking/'
					]
				},
				{
					title: 'Moderation',
					children: [
						'/guide/moderation/',
						'/guide/moderation/managing-infractions'
					]
				},
				{
					title: 'Custom Commands',
					children: [
						'/guide/custom-commands/',
						'/guide/custom-commands/arguments',
						'/guide/custom-commands/listeners',
						'/guide/custom-commands/variables',
						'/guide/custom-commands/examples'
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
	plugins: []
}

for (const group of Object.values(config.themeConfig.sidebar)) {
	for (const section of group) {
		if (section.collapsable) continue;
		section.collapsable = false;
	}
}

if (process.env.NODE_ENV === 'production') {
	config.plugins.push(['@vuepress/google-analytics', { ga: process.env.GOOGLE_ANALYTICS_ID }]);
}

module.exports = config;
