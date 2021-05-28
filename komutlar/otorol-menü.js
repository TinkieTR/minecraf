const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
let aura = "ORANGE"  
const roman = new Discord.RichEmbed()

.setAuthor(client.user.username,client.user.avatarURL)
.setDescription("[**AuraMC**](https://www.auramc.org/) Sunucusunu Tercih Ettiğiniz İçin Teşekkür Ederiz.")
.setColor(aura)
.addField(" <a:cark:724434925662503096> a!otorol @rol #log-kanal   "," Otorol Özelliğini Aktif Edersiniz")
.addField("\n <a:cark:724434925662503096> a!otorol-mesajı (mesajınız) ","Otorol Mesajını Ayarlarsınız")
.addField("\n <a:cark:724434925662503096> a!otorolkapat ","Otorol Özelliğini Kapatırsınız.")
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
  name: 'otorol-yardım',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
