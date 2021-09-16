module.exports = {
    name: 'raef',
    description: "this raef command",
    execute(message, args, cmd, client, Discord){
        message.channel.send('heres an amazing song', { files: ['./commands/godzilla but its good.mp3'] });
    }
}