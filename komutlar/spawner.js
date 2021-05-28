const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
let aura = "RED"  
const auramc = new Discord.RichEmbed()

.setAuthor(client.user.username,client.user.avatarURL)
.setDescription("İşte Spawner Fiyatları ;")
.setColor(aura)
.addField(" :chicken:  Tavuk Spawner : <a:para:724733854476140636> 5 TL","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/spawnerler)")
.addField("\n\n :pig:  Domuz Spawner : <a:para:724733854476140636> 5 TL ","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/spawnerler)")
.addField("\n\n :sheep:  Koyun Spawner : <a:para:724733854476140636> 5 TL ","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/spawnerler)")
.addField("\n\n :cow:  İnek Spawner : <a:para:724733854476140636> 5 TL ","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/spawnerler)")
.addField("\n\n :spider:  Örümcek Spawner : <a:para:724733854476140636> 5 TL ","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/spawnerler)")
.addField("\n\n :skull:  İskelet Spawner : <a:para:724733854476140636> 5 TL ","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/spawnerler)")
.addField("\n\n :zombie:  Zombi Spawner : <a:para:724733854476140636> 5 TL ","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/spawnerler)")
.addField("\n\n :fire:  Blaze Spawner : <a:para:724733854476140636> 5 TL ","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/spawnerler)")
.addField("\n\n :green_square:  Balçık Spawner : <a:para:724733854476140636> 15 TL ","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/spawnerler)")
.addField("\n\n :zombie::pig:  Zombi Pigman Spawner : <a:para:724733854476140636> 20 TL ","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/spawnerler)")
.addField("\n\n :grey_exclamation:  Demir Golem Spawner : <a:para:724733854476140636> 30 TL ","Satın Almak İçin [Tıklayınız](https://auramc.org/magaza/emek-skyblock/spawnerler)")
//.setImage("https://media.discordapp.net/attachments/710098208885440585/710145450644340836/baslksz-3.png?width=866&height=487")//yaptım zaten

message.channel.send(auramc)





}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sp"],
  permLevel: 0
};

module.exports.help = {
  name: 'spawner',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
