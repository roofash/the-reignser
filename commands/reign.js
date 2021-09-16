const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'reign',
    description: "this is a booty cmd",
    aliases: ['regin', 'reigin'],
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('dick')
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setDescription('this is a embed for big booties')
        .addFields(
            {name: 'booty 1', value: 'have a big ass'},
            {name: 'booty 2', value: 'eat reigns'},
            {name: 'booty 3', value: 'lick sleigns'},

        )
        .setImage('https://i.redd.it/1vcelsmregs61.jpg')
        .setFooter('make sure to eat alis ass');


        message.channel.send(newEmbed);
    

    }
}