module.exports = async (client) =>{
    const guild = client.guilds.cache.get('801096669286498345');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('865989206743711764');
        channel.setName(`booty members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}
 