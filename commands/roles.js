const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "roles",
    description: "roles thing",
    execute: async(message, args, cmd, client, Discord) => {
        const user = message.mentions.members.first() || message.member || message.guild.members.cache.find(u => u.id === args[0])
        if(!user) return message.reply("not a valid assuser")
        
        const userRoles = user.roles.cache
        .filter((role) => role.id !== message.guild.id)
        .map((roles) => roles.toString())
        .join(", ")

        let embed = new MessageEmbed()
        .addField("roles thing", userRoles)
        .setFooter(user.user.tag, user.user.displayAvatarURL({ dynamic: true}))
        message.channel.send(embed)
    }
}