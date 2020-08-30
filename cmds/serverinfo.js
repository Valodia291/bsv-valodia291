const Discord = module.require("discord.js");
const fs = require("fs");

function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " День" : " Дни") + " тому назад";
};

module.exports.run = async (bot,message,args) => {
    let verifLevels = ["Отсутствует", "Низкий", "Средний", "Высокий", "Самый высокий"];
    let region = {
        "brazil": "Brazil",
        "eu-central": "Central Europe",
        "singapore": "Singapore",
        "us-central": "U.S. Cent    ral",
        "sydney": "Sydney",
        "us-east": "U.S. East",
        "us-south": "U.S. South",
        "us-west": "U.S. West",
        "eu-west": "Western Europe",
        "vip-us-east": "VIP U.S. East",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "Hong Kong"
    };

    let embed = new Discord.RichEmbed()
    .setColor('#DCC090')
    .setTitle('Информация о сервере')
    .setThumbnail(message.guild.iconURL)
    .addField("Название сервера", message.guild.name)
    .addField('Созданный', `${message.guild.createdAt.toString().substr(0, 15)},\n(${checkDays(message.guild.createdAt)})`, true)
    .addField('Уровень Проверки', verifLevels[message.guild.verificationLevel], true)
    .addField('Регион', message.guild.region, true)
    .addField('Количество Пользователе', message.guild.memberCount, true)
    .addField('Тайм-аут АФК', message.guild.afkTimeout / 60 + ' минут', true)
    .addField("Созданный", `${message.guild.createdAt.toString().substr(0, 15)},\n(${checkDays(message.guild.createdAt)})`, true)
    .addBlankField()
    .setTimestamp()
    bot.send(embed);
};
module.exports.help = {
    name: "serverinfo"
};

    //.addField("Id", message.guild.id)
    //.addField("Количество Ботов", message.guild.members.cache.filter(m => m.user.bot))
    //.addField("Роли", message.guild.roles.cache)
    //.addField("Каналы", message.guild.channels.cache)