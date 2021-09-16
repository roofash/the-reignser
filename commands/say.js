const { User } = require("discord.js")


module.exports = {
    name: "say",
    description: "say code",
    execute: async(message, args, cmd, client, Discord) => {
        if(message.author.id !== User) {
           
        }
        let result = eval(args.join(" "))
        message.channel.send(result)
    }
}