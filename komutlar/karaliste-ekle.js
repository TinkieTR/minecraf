const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

if (!message.author.id == ayarlar.sahip) return message.reply('bu komutu sadece botun sahibi kullanabilir') 

let devtr = args[0]
if(!devtr || isNaN(devtr)) return message.channel.send(`:x: Karalisteye almak için geçerli bir Kullanıcı ID girmelisin.`)

let karaliste = db.fetch(`devtr.karaliste_${devtr}`)
if(karaliste) return message.channel.send(`:x: | ${devtr} ID'sine sahip kullanıcı zaten ekli.`)

db.set(`devtr.karaliste_${devtr}`, `ekli`)
message.channel.send(`✅ | <@${devtr}> isimli kişi başarıyla karalisteye eklendi.`)

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blakclist add"],
  permLevel: 4
};

exports.help = {
  name: 'karaliste-ekle',
  description: 'Herhangi bir üyeyi karalisteye eklersiniz.',
  usage: 'karaliste ekle <ID>'
};