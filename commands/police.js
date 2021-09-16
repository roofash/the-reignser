module.exports = {
    name: 'police',
    description: "this police command",
    aliases: ['sketsna_police', 'votsin_police'],
    execute(message, args, cmd, client, Discord){
        message.channel.send('CALL 911');
    }
}
