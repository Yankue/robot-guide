import VueDiscordMessage from 'vue-discord-message';

export default ({ Vue }) => {
    Vue.use(VueDiscordMessage, {
        avatars: {
            robot: require('./assets/robot-pfp.png'),
            sinister: require('./assets/sinister-pfp.png'),
        },
        profiles: {
            sinister: {
                author: 'SinisterDev',
                avatar: 'sinister',
            },
            robot: {
                author: 'RoBot',
                avatar: 'robot',
                bot: true,
            },
        },
    });
};