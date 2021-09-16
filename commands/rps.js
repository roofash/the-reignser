const discord = require('discord.js')
module.exports = {
	name: "rps",
	description: "rps thing",
	execute: async(message, args, cmd, client, Discord) => {
		let embed = new discord.MessageEmbed()
		.setTitle("cock dicker ciseaux")
		.setDescription("reacting 2 porn 2 play")
		.setTimestamp()
		let msg = await message.channel.send(embed)
		await msg.react("🗻")
		await msg.react("✂")
		await msg.react("📰")

		const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
        		.setTitle("reuslt")
        		.addField("ur thing", `${reaction.emoji.name}`)
        		.addField("my thing", `${me}`)
			await msg.edit(result)

        		if ((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "📰" && reaction.emoji.name === "🗻") ||
                (me === "✂" && reaction.emoji.name === "📰")) {
                   
                    message.reply("LMAO U ACTUALLY LOST TO A FUCKING BOT, NOT EVEN A REAL HUMAN EZZZZEZEZEZE");
            } else if (me === reaction.emoji.name) {
                return message.reply("ok we tied the dicks 2gether 2 make a rope");
            } else {
                return message.reply("ur haxing, 1v1 me again ez claps");
            }
        })
        .catch(collected => {
                message.reply('gmae cancleed cuz ur slow as fuck');
            })
}
}
