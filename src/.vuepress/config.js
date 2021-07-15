const { description } = require('../../package.json');

const config = {
	
	title: 'RoBot Guide',
	
	description: description,

	theme: 'yuu',

	head: [
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
			defaultDarkTheme: true,
			colorThemes: ['blue', 'green'],
			defaultColorTheme: 'blue',
		},
		repo: 'SinisterDeveloper/robot-wiki',
		editLinks: false,
		docsDir: 'guide',
		editLinks: true,
		lastUpdated: false,
		nav: [
			{
				text: 'Support Server',
				link: 'https://discordrobot.tech/support'
			},
		],
		sidebar: {
			'/guide/': [
				{
					title: 'Home',
					children: [
						'',
						'using-vue',
					]
				}
			],
		}
	},

	plugins: [
		'@vuepress/plugin-back-to-top',
		'@vuepress/plugin-medium-zoom',
	]
}

for (const group of Object.values(config.themeConfig.sidebar)) {
	for (const section of group) {
		if (section.collapsable) continue;
		section.collapsable = false;
	}
}


module.exports = config;