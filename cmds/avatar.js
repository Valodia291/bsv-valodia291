const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let rUser = bot.rUser;
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setTitle("Ваш аватар")
    .setColor("#DCC090")
    .setImage(a.avatarURL)
    bot.send(embed);  
  ;
};
module.exports.help = {
    name: "avatar"
};
