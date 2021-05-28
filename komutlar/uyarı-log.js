const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client,message,args) => {
const devtr = message.mentions.channels.first() || args.slice(0).join(' ')
if(!devtr) return message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription('Lütfen bir kanal etiketle!'))
//DevTR
db.set(`uyarılog_${message.guild.id}`, devtr.id)
message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription(`Başarıyla uyarı log kanalı **${devtr}** olarak ayarlandı!`))
}
//DevTR
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}

exports.help = {
name: 'uyarı-log'
}