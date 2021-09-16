const { MessageEmbed } = require("discord.js");

module.exports = {
    name: '8ball',
    description: "ask 8ballsack",
    execute: async(message, args, cmd, client, Discord) => {
        let question = args.join(" ")
        if(!question) return message.reply("axe question, need 2 B more than 1 word btw")
        let responses = [
            "yessir",
            "non",
            "idc and idk but azaan is asscheeks",
            "but who is worse than azaan?? well its ABDULHADI SHAMA",
            "mayB"
        ]
        let response = responses[Math.floor(Math.random() * responses.length)]
        let embed = new MessageEmbed()
        .setTitle("8ballsacks")
        .setDescription(`question = **${question}**\nResponse = **${response}**`)
        message.channel.send(embed)
    }
}