const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    const embed = new Discord.RichEmbed()
    .setColor('#DCC090')
    .setAuthor('Ping-Pong! 🏓')
    .setDescription(`${Date.now() - message.createdTimestamp}`+ ' ms')
    .setTimestamp()
    message.channel.send(embed);
};
module.exports.help = {
    name: "ping"
};