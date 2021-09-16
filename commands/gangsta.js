module.exports = {
    name: 'gangsta',
    description: "this another song command",
    execute(message, args, cmd, client, Discord){
        message.channel.send('the only song ali listens 2', { files: ['./commands/gangsta paradise.mp3'] });
    }
}