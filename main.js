const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const memberCounter = require('./counters/member-counter');

client.once('ready' , () => {
    console.log('the reignsiner is online!');
    client.user.setActivity('dante is a boign');
    memberCounter(client);
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('865699105480638504').send(`Welcum <@${guildMember.user.id}> to our booty serbr`)
    });
    

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);

})




client.login("");
