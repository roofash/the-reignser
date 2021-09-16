module.exports = {
    name: "slowmode",
    description: "Set the slowmode of a channel.",
    execute: async(message, args, cmd, client, Discord) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("u no hav admin perms idot")
        }
        let duration = args[0]
        if(isNaN(duration)) return message.reply("how long in seconds")
        let reason = args.slice(1).join(" ")
        if(!reason) return message.reply("gib reaon like ad ad df")
        
        message.channel.setRateLimitPerUser(duration, reason)
        message.reply(`ok i set the time 2 ${duration} with ur retarded reason of - ${reason}`)
    }
}