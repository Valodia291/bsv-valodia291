const Discord = require('discord.js');
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission(["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_GUILD"])) return message.channel.send("Вы не можете давать роли!")
    if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send("У меня нет прав на выдачу ролей, пожалуйста перейдите в настройки. И дайте мне это право!")
    //if(!message.guild.me.highestRole.position <= role.position) return message.channel.send("Моя роль стоит ниже той, которую вы хотите выдать юзеру. Передвиньте мою роль, чтобы я смог дать её юзеру!"); 

    var role = message.mentions.roles.first();
    var member = message.mentions.members.first();
    var arg = new Array()
    arg[0] = member
    arg[1] = role
    if(!arg[0])return message.channel.send('Укажите участника которому хотите дать роль!')
    if(!arg[1])return message.channel.send('Укажите роль которую хотите дать участнику!')
    member.addRole(role)
    let embed = new Discord.RichEmbed()
    .setColor('#DCC090')
    .setDescription(`✅ Вы успешно выдали роль пользователю.`)
    .addField(`Модератор`,message.author.username, true)
    .addField(`Пользователь`,`<@${member.user.username}>`, true)
    .addField(`Добавленная роль`,`${role}`, true)
    bot.send(embed);
}
module.exports.help = {
    name: 'addrole'
}