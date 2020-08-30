const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setColor('#DCC090')
    .setTitle('Информация о пользователь')
    .setThumbnail(a.avatarURL)
    .addField("Имя",a.username)
    .addField("Тэг",a.tag, true)
    .addField("Дискриминатор",a.discriminator, true)
    .addField("Создание аккаунта",a.createdAt, true)
    .addField("ID",a.id, true)
    .addField("Вы бот?",a.bot, true)
    .addBlankField()
    .setTimestamp()
    bot.send(embed);
};
module.exports.help = {
    name: "userinfo"
};