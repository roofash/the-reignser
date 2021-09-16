module.exports = {
    name: 'negus',
    description: "this negus command",
    execute(message, args, cmd, client, Discord){
        message.channel.send('song that ali listens 2 everyday', { files: ['./commands/reigant.mp3'] });
    }
}