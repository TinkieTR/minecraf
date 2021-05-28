const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
let aura = "RED"  
const auramc = new Discord.RichEmbed()

.setAuthor(client.user.username,client.user.avatarURL)
.setDescription("İşte Anahtar Fiyatları ;")
.setColor(aura)
.addField(" :ballot_box:   Oy Kasası Anahtarı : <a:para:724733854476140636> 3 TL","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/kasa-anahtarlari)")
.addField("\n\n :mage:   Sihirli Kasası Anahtarı : <a:para:724733854476140636> 3 TL ","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/kasa-anahtarlari)")
.addField("\n\n :fire:  Nadir Kasası Anahtarı : <a:para:724733854476140636> 6 TL ","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/kasa-anahtarlari)")
.addField("\n\n :diamonds:  Spawner Kasası Anahtarı : <a:para:724733854476140636> 20 TL ","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/kasa-anahtarlari)")
//.setImage("https://media.discordapp.net/attachments/710098208885440585/710145450644340836/baslksz-3.png?width=866&height=487")//yaptım zaten

message.channel.send(auramc)





}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["enektar"],
  permLevel: 0
};

module.exports.help = {
  name: 'anahtar',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
