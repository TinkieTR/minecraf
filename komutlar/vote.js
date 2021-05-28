const Discord = require('discord.js')
exports.run = async(client, message, args) => {

let oyver = "https://minecraft-mp.com/server/261843/vote/"

 const embed = new Discord.RichEmbed()
.setDescription(`[**Oy Ver**](${oyver})`)
.setColor("ORANGE")
.setTimestamp()
message.channel.send(embed); 
} 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["oy","vote"],
  permLevel: 0
};

exports.help = {
  name: 'oy-ver',
  description: '',
  usage: 'davet'
};