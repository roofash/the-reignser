const fetch = require('node-fetch')
module.exports = {
    name: "docs",
    description: "Search the d.js docs for something!",
    execute: async(message, args, cmd, client, Discord) => {
        const query = args.join(" ")
        if(!query) return message.reply("specify ass 2 search")
        fetch(`https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
            message.channel.send({ embed: data})
        })
    }
}