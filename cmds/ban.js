const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0]))
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Недостаточно прав для использования команды!')
    else if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('У меня нет прав на блокировать участников, пожалуйста перейдите в настройки. И дайте мне это право!')

    let rUser = bot.rUser;
    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(!rUser) return bot.send("Пользователь не найден");

    let reason = args.slice(1).join(' ') || 'Не указана' // причина
    await member.ban(reason) // баним
  
    let embed = new Discord.RichEmbed()
    .setColor('#DCC090')
    .setTitle('Бан', true)
    .addField('Модератор', `${message.author.tag}`, true)
    .addField('Пользователь', `${member.user.tag}`,true)
    .addField('Причина', `${reason}`,true)
    .setTimestamp()
    await message.channel.send(embed)

}

module.exports.help = {
    name: 'ban'
}