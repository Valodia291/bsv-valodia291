const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    
    let embed = new Discord.RichEmbed()
    .setTitle("Доступные команды:")
    .setColor('#DCC090')
    .addField("Информация","`/userinfo` `/serverinfo`")
    .addField("Модерирование","`/warn` `/unwarn` `/mute` `/unmute` `/clear` `/kick` `/ban` `/addrole`")
    .addField("Весёлое","`/ball` `/coin` `/vote` `/say` `/avatar` `/ping`")
    bot.send(embed);

};
module.exports.help = {
    name: "help"
};