const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
let aura = "RED"  
const auramc = new Discord.RichEmbed()

.setAuthor(client.user.username,client.user.avatarURL)
.setDescription("İşte Ekstra Malzemelerin Fiyatları ;")
.setColor(aura)
.addField(" :butterfly:     1 Aylık Uçma Yetkisi : <a:para:724733854476140636> 15 TL","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/ekstra-esyalar)")
.addField("\n\n :wind_blowing_face:     Sınırsız Uçuş Yetkisi : <a:para:724733854476140636> 60 TL ","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/ekstra-esyalar)")
//.setImage("https://media.discordapp.net/attachments/710098208885440585/710145450644340836/baslksz-3.png?width=866&height=487")//yaptım zaten

message.channel.send(auramc)





}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ekstra-itemler"],
  permLevel: 0
};

module.exports.help = {
  name: 'ekstra-eşyalar',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
