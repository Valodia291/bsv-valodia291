const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("У вас нет прав");//MANAGE_MESSAGES
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(!rUser) return bot.send("Пользователь не найден");
    
    let role = message.guild.roles.find(r => r.name === "🔇 Беззвучный");
    if(!rUser.roles.has(role.id)) return bot.send("Этот пользователь уже может говорить");
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
    delete bot.mutes[rUser.id];
    fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
        if(err) console.log(err);
    });

    rUser.removeRole(role);
};
module.exports.help = {
    name: "unmute"
};