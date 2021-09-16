const util = require('minecraft-server-util');
 
module.exports = {
    name: 'mcserver',
    description: 'get information about a minecraft server',
    cooldown: 3,
    aliases: ['mc', 'server', 'minecraft',],
    execute(message, args, cmd, client, Discord){
        if(!args[0]) return message.channel.send('eneterr ip');
        if(!args[1]) return message.channel.send('eneeterr port, nraml is 25565');
 
        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
            console.log(response);
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('status thing')
            .addFields(
                {name: 'iPP', value: response.host},
                {name: 'ppl online', value: response.onlinePlayers},
                {name: 'max gaymers', value: response.maxPlayers},
                {name: 'virgin version', value: response.version}
            )
            .setFooter('azaan is a dumbass');
 
            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('error finding ur mom');
            throw error;
        })
    }
}