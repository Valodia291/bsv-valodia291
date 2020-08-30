const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    if(!args[0]) return message.reply("Пожалуйста, задайте полный вопрос");
    let replies = [
        'Бесспорно.',
	    'Предрешено.',
	    'Никаких сомнений.',
	    'Определённо да.',
    	'Можешь быть уверен в этом.',
	    'Мне кажется да.',
    	'Вероятнее всего.',
    	'Хорошие перспективы.',
    	'Знаки говорят да.',
    	'Да',
    	'Пока не ясно, попробуй снова.',
	    'Спроси позже.',
    	'Лучше не рассказывать.',
    	'Сейчас нельзя предсказать.',
    	'Сконцентрируйся и спроси опять.',
	    'Даже не думай.',
	    'Мой ответ нет.',
    	'По моим данным нет.',
    	'Перспективы не очень хорошие.',
    	'Весьма сомнительно.',
    	'Нет'
    ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setTitle("Волшебный Шар 8!")
    .setColor("#DCC090")
    .addField("Вопрос:", question)
    .addField("Ответ:", replies[result])

    bot.send(embed);
};

module.exports.help = {
    name: "ball"
};