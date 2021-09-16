 var scraper = require('images-scraper');
const { execute } = require('./reign');

const google = new scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    description: "send mesage",
    cooldown: 12,
    aliases: ['google', 'bing', 'search'],
    async execute(message, args, cmd, client, Discord){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('eneter iameg nmae')
        if(message.author.id === '448599620495474691') return message.channel.send("no");

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);

        
    }
}