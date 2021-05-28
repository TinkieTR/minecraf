const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
let aura = "RED"  
const auramc = new Discord.RichEmbed()

.setAuthor(client.user.username,client.user.avatarURL)
.setDescription("[**AuraMC**](https://www.auramc.org/) Sunucusunu Tercih Ettiğiniz İçin Teşekkür Ederiz.")
.setColor(aura)
.addField(" <a:para:724733854476140636> a!vip   "," Vip Fiyatlarını Öğrenirsiniz. ")
.addField("\n <a:para:724733854476140636> a!spawner ","Spawner Fiyatlarını Öğrenirsiniz.")
.addField("\n <a:para:724733854476140636> a!anahtar ","Anahtar Fiyatlarını Öğrenirsiniz.")
.addField("\n <a:para:724733854476140636> a!aura-coin ","Coin Fiyatlarını Öğrenirsiniz.")
.addField("\n <a:para:724733854476140636> a!edit-eşyalar ","Edit Eşyaların Fiyatlarını Öğrenirsiniz.")
.addField("\n <a:para:724733854476140636> a!ekstra-eşyalar ","Diğer Eşyaların Fiyatlarını Öğrenirsiniz.")
.addField("⤷ Linkler","**Satın Almak İçin [Tıklayınız](https://www.auramc.org/)**")
//.setImage("https://media.discordapp.net/attachments/710098208885440585/710145450644340836/baslksz-3.png?width=866&height=487")//yaptım zaten

message.channel.send(auramc)





}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["vipbakımdala"],
  permLevel: 0
};

module.exports.help = {
  name: 'vipbakımda',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
