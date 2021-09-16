const { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'avatar',
    description: "disaply avater",
    aliases: ['av'],
    cooldown: 5,
    execute: async(message, args, cmd, client, Discord) => {
        const user = message.mentions.users.first() || message.author || client.users.cache.get(u => u.id === args[0])
        const avatar = user.displayAvatarURL({ size: 4096, dynamic: true})
        let embed = new MessageEmbed()
        .setTitle("bootytar")
        .setImage(avatar)
        .setTimestamp()
        message.channel.send(embed)
    }
}

