const discord = require('discord.js')
module.exports = { 
    name: "ban",
    description: "ban sum1",
    execute: async(message, args, cmd, client, Discord) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("no perm idot")
        let target = message.mentions.members.first()

        if(!target) return message.reply("mentosoion sum1")

        if(target.id === message.author.id) {
            return message.reply("cnat ban urself")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("gib reson")

        let embed = new discord.MessageEmbed()
        .setTitle("idot baneaned")
        .addField("bootyarget", target.user.tag)
        .addField("muud", message.author.tag)
        .addField("reign", `${reason}`)
        await message.channel.send(embed)
        await target.ban({reason:reason})
    }
}