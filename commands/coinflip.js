const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "coinflip",
    description: "flip coin",
    execute: async(message, args, cmd, client, Discord) => {
        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setTitle("dickflip")
        .setDescription(`u flip thinged a **${choice}**`)
        message.channel.send(embed)
    }
}