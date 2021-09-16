const discord = require('discord.js')
module.exports = {
    name: "unmute",
    description: "unmutes sum1",
    execute: async(message, args, cmd, client, Discord) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("no perm");

        const target = message.mentions.members.first()
        if(!target) return message.reply("menton sum1");

        if(target.id === message.author.id) {
            return message.reply("cant unmute urself")
        }

        let reason = args.slice(1).join(" ");
        if(!reason) return message.reply("gib reson")

        const memberrole = message.guild.roles.cache.find(r => r.name === "member")
        const mutedrole = message.guild.roles.cache.find(r => r.name === "muted");
        if(!memberrole) return message.reply("cant find `member` role")
        if(!mutedrole) return message.reply("cant find `muted` role")

        if(!target.roles.cache.some(r => r.name === "muted")) {
            return message.reply("already unmured");
        }

        let embed = new discord.MessageEmbed()
        .setTitle("pesonel unmuted")
        .addField("trafet", target.user.tag)
        .addField("modermuator", message.author.tag)
        .addField("reaisn", reason)
        await message.channel.send(embed)
        target.roles.add(memberrole)
        target.roles.remove(mutedrole)
    }
}