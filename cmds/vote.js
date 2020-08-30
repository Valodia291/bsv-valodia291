const Discord = module.require("discord.js");
const fs = require("fs");

const agree    = "✅";
const disagree = "❎";

module.exports.run = async (bot,message,args) => {
  if(!args || args[0] === 'help') return message.reply("Usage: vote <question>")
  // Number.isInteger(itime)
  //  if (e) return message.reply('Пожалуйста, укажите действительный номер времени в секундах')
  let question = message.content.split(" ").splice(1).join(" ")
  if(question.length < 1){
    let msg = await message.channel.send(`Голосуйте сейчас же! (Время голосования: 2 минуты)`);
    await msg.react(agree);
    await msg.react(disagree);

    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 120000});
    msg.delete();

    var NO_Count = reactions.get(disagree).count;
    var YES_Count = reactions.get(agree);

    if(YES_Count == undefined){
      var YES_Count = 1;
    }else{
      var YES_Count = reactions.get(agree).count;
    }

    var sumsum = new Discord.RichEmbed()

              .addField("Голосование Завершено:", "----------------------------------------\n" +
                                            "Общее количество голосов (Да): " + `${YES_Count-1}\n` +
                                            "Общее количество голосов (нет): " + `${NO_Count-1}\n` +
                                            "----------------------------------------", true)

              .setColor('#DCC090')
    await message.channel.send({embed: sumsum});
  }else if(question.length > 1){
    let msg = await message.channel.send(`Вопрос: ${question} \nГолосуйте сейчас же! (Время голосования: 2 минуты)`);
    await msg.react(agree);
    await msg.react(disagree);
    
    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 120000});
    msg.delete();
    
    var NO_Count = reactions.get(disagree).count;
    var YES_Count = reactions.get(agree);
    
    if(YES_Count == undefined){
      var YES_Count = 1;
    }else{
      var YES_Count = reactions.get(agree).count;
    }
  
    var sumsum = new Discord.RichEmbed()
    
              .addField("Голосование Завершено:", "----------------------------------------\n" +
                                            "Вопрос: " + question + "\n" +
                                            "Общее количество голосов (Да): " + `${YES_Count-1}\n` +
                                            "Общее количество голосов (нет): " + `${NO_Count-1}\n` +
                                            "----------------------------------------", true)
  
              .setColor('#DCC090')
    await message.channel.send({embed: sumsum});
  }
  

}

module.exports.help = {
    name: "vote"
};