module.exports = {
    name: 'boob',
    description: "this boob command",
    aliases: ['tit'],
    execute(message, args, cmd, client, Discord){
        message.channel.send('snacks');
    }
}
