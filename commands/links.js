const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'links',
    description: "gib links 2 ppl about me",
    aliases: ['link'],
    execute(message, args, cmd, client, Discord){
    const newEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('thing about raef pderson man')
    .setDescription('random as shit 2 hump ur mom')
    .addFields(
        {name: 'youtuube', value: 'https://www.youtube.com/channel/UCoE6DjQaNUnlYfGwNye5AVQ'},
        {name: 'twitchiong eye', value: 'https://www.twitch.tv/roofash'},
        {name: 'steam thingy', value: 'https://steamcommunity.com/profiles/76561198451753446'},

    )
    .setImage('')
    .setThumbnail('')
    .setFooter('raef links page man dude guy person supreme extreme gucci booty');


    message.channel.send(newEmbed);


}
}