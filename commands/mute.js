const discord = require('discord.js')
module.exports = {
    name: "mute",
    description: "mute sum1",
    execute: async(message, args, cmd, client, Discord) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("no perm");

        const target = message.mentions.members.first()
        if(!target) return message.reply("mention sum1");

        if(target.id === message.author.id) {
            return message.reply("cant mute urslef")
        }

        let reason = args.slice(1).join(" ");
        if(!reason) return message.reply("reason now or me eat u")

        const memberrole = message.guild.roles.cache.find(r => r.name === "member")
        const mutedrole = message.guild.roles.cache.find(r => r.name === "muted");
        if(!memberrole) return message.reply("cant find `member` role")
        if(!mutedrole) return message.reply("cant find `muted` role")

        if(target.roles.cache.some(r => r.name === "muted")) {
            return message.reply("alrady muted");
        }

        let embed = new discord.MessageEmbed()
        .setTitle("idot muted")
        .addField("traget", target.user.tag)
        .addField("muud", message.author.tag)
        .addField("reson", reason)
        await message.channel.send(embed)
        target.roles.add(mutedrole)
        target.roles.remove(memberrole)
    }
}