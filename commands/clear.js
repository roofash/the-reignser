module.exports = {
    name: 'clear',
    description: "Clear messages!",
    cooldown: 5,
    aliases: ['c', 'cl'],
   async execute(message, args, cmd, client, Discord) {
        if (!args[0]) return message.reply("enter amunt mesg u wanna clear");
        if(isNaN(args[0])) return message.reply("type nubmer");

        if(args[0] > 5) return message.reply("sopt remove alot of msg");
        if(args[0] < 1) return message.reply("dleete more thna 1 msg");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages); return message.reply('cleard mesags')
            
    });

 }
}