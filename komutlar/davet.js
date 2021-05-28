const Discord = require('discord.js');

exports.run = (client, message) => {
  
  const davet = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`Bu Botu Sunucuna Ekleyebilirsin Linki Aşşağıda

[Bot Davet](https://discordapp.com/oauth2/authorize?client_id=724430516526252073&scope=bot&permissions=8) 

`)
  message.channel.send(davet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "davet"
}