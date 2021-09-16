module.exports = {
    name: 'regenshin',
    description: "this song boww command",
    execute(message, args, cmd, client, Discord){
        message.channel.send('an amazing collab made by the one and only raef and azzan', { files: ['./commands/The_REGENSHIN_Bros_full.mp3'] });
    }
}