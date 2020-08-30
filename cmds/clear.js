const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    try{
    if(!message.member.hasPermission("MANAGA_MESSAGES")) return message.channel.send('Недостаточно прав для использования команды!') // чекаем права
    else if (!message.guild.me.hasPermission("MANAGA_MESSAGES")) return message.channel.send('У меня нет прав на удаление сообщения, пожалуйста перейдите в настройки. И дайте мне это право!')  
    if(!args) return bot.send('Вы не указали, сколько сообщений нужно удалить!'); 
    if(isNaN(args)) return bot.send('Это не число!'); 
    if(args > 100) return bot.send("Укажите значение меньше 100");
    if(args < 1) return bot.send("Укажите значение больше 1");
    message.channel.bulkDelete(args[0]).then(() =>{
        message.channel.send(`Удалено ${args[0]} сообщений`).then(msg => msg.delete(15*1000));
    });
    bot.send(botmessage);
}catch(err){
    console.log(err.name)
}

};
module.exports.help = {
    name: "clear"
};