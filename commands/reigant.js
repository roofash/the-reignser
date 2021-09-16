const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'reigant',
    description: "this reignations command",
    aliases: ['reign_gang', 'energy',],
    execute(message, args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6754E7')
        .setTitle('reign gang is the new bang enery but actually good')
        .setURL('https://c.tenor.com/3yNxd1BOdbcAAAAC/reign-rgo.gif')
        .setAuthor('reignchinwasees', 'https://c.tenor.com/3yNxd1BOdbcAAAAS/reign-rgo.gif')
        .setDescription('slurping balls')
        .addFields(
            {name: 'reign', value: 'gang', inline: true },
            {name: 'reign', value: 'fresh', inline: true },
            {name: 'reign', value: 'gud', inline: true },

        )
        .setImage('https://c.tenor.com/3yNxd1BOdbcAAAAC/reign-rgo.gif')
        .setThumbnail('https://c.tenor.com/3yNxd1BOdbcAAAAS/reign-rgo.gif')
        .setFooter('reign gang best gang', 'https://c.tenor.com/3yNxd1BOdbcAAAAS/reign-rgo.gif');


        message.channel.send(newEmbed);
    

    }
}