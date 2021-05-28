const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
let aura = "RED"  
const auramc = new Discord.RichEmbed()

.setAuthor(client.user.username,client.user.avatarURL)
.setDescription("İşte Coin Fiyatları ;")
.setColor(aura)
.addField(" :moneybag:    500 Bin Aura Coin : <a:para:724733854476140636> 20 TL","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/aura-coin)")
.addField("\n\n :moneybag:    1 Milyon Aura Coin : <a:para:724733854476140636> 40 TL ","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/aura-coin)")
//.setImage("https://media.discordapp.net/attachments/710098208885440585/710145450644340836/baslksz-3.png?width=866&height=487")//yaptım zaten

message.channel.send(auramc)





}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["coin"],
  permLevel: 0
};

module.exports.help = {
  name: 'aura-coin',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
