const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("У вас нет прав");
    else if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('У меня нет прав на выдачу ролей, пожалуйста перейдите в настройки. И дайте мне это право!')
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(!rUser) return bot.send("Пользователь не найден");
    if(!args[1]) return bot.send("Укажите время в секундах");
    let role = message.guild.roles.find(r => r.name === "🔇 Беззвучный");
    if(!role){
        role = await message.guild.createRole({
            name:"🔇 Беззвучный",
            permissions:[]
        });
        message.guild.channels.forEach(async (channel,id) => {
            await channel.overwritePermissions(role,{
                SEND_MESSAGES:false,
                ADD_REACTIONS:false
            });
        });
    };
    if(rUser.roles.has(role.id)) return bot.send("Этот пользователь уже не может говорить");
    bot.mutes[rUser.id] = {
        guild:message.guild.id,
        time:parseInt(Date.now() + (args[1]*1000)),
    };
    fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
        if(err) console.log(err);
    });

    rUser.addRole(role);
};
module.exports.help = {
    name: "mute"
};