module.exports = {
    name: 'dm',
    description: 'dm ppl',
    execute: async(message, args, cmd, client, Discord) => {
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("u no hav perm")
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send(`u not mention person or invalid idick`);
        if(!args.slice(1).join(" ")) return message.channel.send("u not specification the human nation")
        user.user.send(args.slice(1).join(" ")).catch(() => message.channel.send("that user cant B dickemed")).then(() => message.channel.send(`setn ass 2 ${user.user.tag}`))
    }
}