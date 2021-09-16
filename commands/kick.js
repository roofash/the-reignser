const discord = require('discord.js')
module.exports = { 
    name: "kick",
    description: "kicks someone",
    execute: async(message, args, cmd, client, Discord) => {
	  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("no perm idot")
        let target = message.mentions.members.first()

        if(!target) return message.reply("menton sum1 2 dik kick")

        if(target.id === message.author.id) {
            return message.reply("u cant dick kick urself")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("gib expmale or reaign reson on y 2 kick, it can be someting like a dfwf w fw w fw fw")

        let embed = new discord.MessageEmbed()
        .setTitle("idot kicked")
        .addField("target in darts", target.user.tag)
        .addField("muud", message.author.tag)
        .addField("reeson", `${reason}`)
        await message.channel.send(embed)
        await target.kick(reason)
    }
}