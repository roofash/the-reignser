const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'cmds',
    description: "this is a cmd thing command cmd",
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#56ff00')
        .setTitle('cmds page 1/3')
        .setDescription('this is embed 4 dumb cmds')
        .addFields(            

{name: 'ban', value: 'competeleuy rempve ppl'},
            {name: 'bonjwa', value: 'give dumbass role if u no hav and testing cmd'},
            {name: 'boob', value: 'nothing 2 c here'},
            {name: 'chunguster', value: 'sonic chungus thingd'},
            {name: 'clear', value: 'clears commands above, for example clear 5 will clear 5 most recent mesages in that channle'},
            {name: 'cmds', value: 'this cmd helper thingy'},
            {name: 'hardest', value: 'random things that u should not mess with'},
            {name: 'docs', value: 'random ass search thingy ma bob that noone cares about'},
            {name: 'negus', value: 'should be obvious, just plays swiggity swag'},
            {name: 'gangsta', value: 'plays gangstas paradise'},

	        )
        .setFooter('make sure npot dumbass');
            


        message.channel.send(newEmbed);
    

    }
}
       