const { token } = require('./config.json');
const { Client, Events, GatewayIntentBits } = require('discord.js');

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ]
});

bot.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}`);
});

bot.once('ready', ()  => {
    let testChannel = bot.channels.cache.find(channel => channel.id === '//YOUR CHANNEL ID');
    setInterval(() => {
        testChannel.send({ files: [
            {attachment: 'FILE LOCATION HERE'},
        ]});
    }, 10000);
});

bot.login(token);