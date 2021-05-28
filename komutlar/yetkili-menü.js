const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
let aura = "ORANGE"  
const roman = new Discord.RichEmbed()

.setAuthor(client.user.username,client.user.avatarURL)
.setDescription("[**AuraMC**](https://www.auramc.org/) Sunucusunu Tercih Ettiğiniz İçin Teşekkür Ederiz.")
.setColor(aura)
.addField(" <a:cark:724434925662503096> a!ban @kişi   "," Belirttiğiniz Kişiyi Sunucudan Banlar")
.addField("\n <a:cark:724434925662503096> a!kick @kişi","Belirttiğiniz Kişiyi Sunucudan Atar")
.addField("\n <a:cark:724434925662503096> a!küfür-engelle aç/kapat","Küfür Korumasını Açar/Kapatır.")
.addField("\n <a:cark:724434925662503096> a!reklam-engel aç/kapat","Reklam Korumasını Açar/Kapatır.")
.addField("\n <a:cark:724434925662503096> a!mod-log #kanal","ModLog Kanalını Belirtirsiniz.")
.addField("\n <a:cark:724434925662503096> a!oylama-kanal #kanal","Oylamanın Yapılacağı Kanalı Seçersiniz")
.addField("\n <a:cark:724434925662503096> a!sa-as aç/kapat","SA-AS Sistemini Açar/Kapatır")
.addField("\n <a:cark:724434925662503096> a!cpsengel aç/kapat","Capslock Engeller")
.addField("\n <a:cark:724434925662503096> a!sayaç (sayı) (kanal)","Sayaç Sistemini Aktif Edersiniz")
.addField("\n <a:cark:724434925662503096> a!sunucupanel","Sunucu Panel Kanallarını Açar.")
.addField("\n <a:cark:724434925662503096> a!temizle-üye @kişi","Belirttiğiniz Kişinin Mesajlarını Siler")
.addField("\n <a:cark:724434925662503096> a!sil","Belirttiğiniz Kadar Mesajı Siler.")
.addField("\n <a:cark:724434925662503096> a!uyarı @kişi (sebep)","Belirttiğiniz Kişiyi Uyarır.")
.addField("⤷ Linkler","[Sunucu Sitemiz](https://www.auramc.org/)")
//.setImage("https://media.discordapp.net/attachments/710098208885440585/710145450644340836/baslksz-3.png?width=866&height=487")//yaptım zaten

message.channel.send(roman)





}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'yetkili-yardım',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
