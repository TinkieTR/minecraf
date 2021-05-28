const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

if (!message.author.id == ayarlar.sahip) return;

let devtr = args[0]
if(!devtr || isNaN(devtr)) return message.channel.send(`:x: Karalisteden çıkarmak için geçerli bir Kullanıcı ID girmelisin.`)

let karaliste = db.fetch(`devtr.karaliste_${devtr}`)
if(!karaliste) return message.channel.send(`:x: | ${devtr} ID'sine sahip kullanıcı zaten ekli değil.`)

db.delete(`devtr.karaliste_${devtr}`,)
message.channel.send(`✅ | <@${devtr}> isimli kişi başarıyla karalisteden çıkarıldı.`)

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist delete"],
  permLevel: 4
};

exports.help = {
  name: 'karaliste-sil',
  description: 'Herhangi bir üyeyi karalisteden çıkartırsınız.',
  usage: 'karaliste sil <ID>'
};