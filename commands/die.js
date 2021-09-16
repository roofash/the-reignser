const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'die',
    description: "this die command",
    cooldown: 1000,
    aliases: ['dead', 'cringe', 'cring', 'azaan_v2','hell','sheesh'],
    execute(message, args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('MY EYES')
        .setDescription('dude im actually dead rn')
        .addFields(
            {name: 'are you', value: 'alive?'},
            {name: 'cuz', value: 'im not'},
            {name: 'my fucking', value: 'eyes'},

        )
        .setImage('https://cdn.discordapp.com/attachments/766380756251312198/875777495591444500/abdul.png')
        .setThumbnail('https://cdn.discordapp.com/attachments/766380756251312198/875777495591444500/abdul.png')
        .setFooter('make sure 2 punch this guy in the face 24/7');


        message.channel.send(newEmbed);
    

    }
}