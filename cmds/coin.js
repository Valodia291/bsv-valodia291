const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('Монета подбрасывается...')

    var random = Math.floor(Math.random() * 4);

    if (random == 1) {
        message.channel.send(':full_moon: Орёл!')
    } else if (random == 2) {
        message.channel.send(':new_moon: Решка!')
    } else if (random == 3) {
        message.channel.send(':last_quarter_moon: Монета упала ребром!')
    }
};

module.exports.help = {
    name: "coin"
};