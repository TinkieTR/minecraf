const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client,message,args) => {

const asd = message.mentions.roles.first() || args.slice(0).join(' ')
if(!asd) return message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription('Lütfen rol etiketleyin'))

db.set(`uyarıyetkilirol_${message.guild.id}`, asd.id)
message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription(`Başarıyla uyarı yetkili rolü **${asd}** olarak ayarlandı!`))
}

exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 2,
aliases: []
}

exports.help = {
name: 'uyarı-yetkili-rol' ,
category:'Yetkili'   
}