const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'monke',
    description: "this monke command",
    aliases: ['monkey', 'gorilla',],
    execute(message, args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('gog')
        .setDescription('this kinda yummy ngl')
        .addFields(
            {name: 'better', value: 'than'},
            {name: 'abulhadi', value: 'shit'},
            {name: '2', value: 'gud'},

        )
        .setImage('https://media.giphy.com/media/MKoIkENNdOw0w/giphy.gif')
        .setThumbnail('https://media.giphy.com/media/MKoIkENNdOw0w/giphy.gif')
        .setFooter('gorilla tag best game');


        message.channel.send(newEmbed);
    

    }
}