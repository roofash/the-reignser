
            const { MessageEmbed } = require("discord.js");

            module.exports = {
                name: 'cmds_2',
                description: "this is a cmd thing command cmd",
                execute(message, args, cmd, client, Discord) {
                    const newEmbed = new Discord.MessageEmbed()
                    .setColor('#56ff00')
                    .setTitle('cmds page 2/3')
                    .setDescription('this is embed 4 dumb cmds')
                    .addFields(     
            
                        {name: 'image', value: 'searcges on gogle images, if u do -image banana, it will gogle a banana'},
                        {name: 'kick', value: 'like a ban but temporary'},
                        {name: 'mcserver', value: 'gives informatnoi on mc sevrers'},
                    {name: 'music', value: 'gud tips on musc'},
                        {name: 'play', value: 'play musc like ryhtm byt beter'},
                        {name: 'police', value: 'if ur in daner and if u dont no police'},
                        {name: 'reign', value: 'gang'},
                        {name: 'sigodembodles', value: 'the most tru thing in the univers'},
                        {name: 'tweet', value: 'dumb tweet thing'},
                        {name: 'raef', value: 'plays raef the legneds amazing song parody thingy ma boww that he made'},
                        {name: 'regenshin', value: 'plays the regenshin bros song'},
                        {name: 'ip_logger', value: 'best app by raef'},
                        {name: 'github', value: 'sorc code and the dow nlod 4 roofash app ip logger thigny'},
            
                       )
                    .setFooter('make sure npot dumbass');
                        
            
            
                    message.channel.send(newEmbed);
                
            
                }
            }