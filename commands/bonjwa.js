module.exports = {
    name: 'bonjwa',
    description: "this is a reign cmd",
    execute(message, args, cmd, client, Discord) {

        if(message.member.roles.cache.has('865433899877269504')){
            message.channel.send('reign????????')



        }else{
            message.channel.send('u no hav role, ima give u da role my g');
            message.member.roles.add('865433899877269504');
        }
        

    }


}