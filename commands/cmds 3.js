const { MessageEmbed } = require("discord.js");
            
module.exports = {
name: 'cmds_3',
description: "this is a cmd thing command cmd",
execute(message, args, cmd, client, Discord) {
const newEmbed = new Discord.MessageEmbed()
.setColor('#56ff00')
.setTitle('cmds page 3/3')
.setDescription('this is embed 4 dumb cmds')
.addFields(   


{name: 'reactionrole', value: 'get 2 roles, not recommended 2 use cuz might fail so just use the reignsers rr in the rr channel'},
{name: 'die', value: 'dude actually dont do this commadn'},
{name: 'monke', value: 'unlike the die command, this is actually good'},
{name: 'avatar', value: 'gives u someones avatar image thing'},
{name: 'mute', value: 'mute some1'},
{name: 'unmute', value: 'unmute some1'},
{name: 'roles', value: 'tell u some1 roles'},
{name: '8ball', value: '8ballsack thing'},
{name: 'say', value: 'if u say something like -say message.channel.send("whatever u want"), bot says what u said in the ("whatever thing"'},
{name: 'coinflip', value: 'flips a heads or tails'},
{name: 'rps', value: 'dick appaer siser'},
{name: 'slowmode', value: 'timer on how long u wait 2 search'},
)
.setFooter('make sure npot dumbass');



message.channel.send(newEmbed);


}
}

