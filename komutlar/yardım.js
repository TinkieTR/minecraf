const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
let aura = "ORANGE"  
const roman = new Discord.RichEmbed()

.setAuthor(client.user.username,client.user.avatarURL)
.setDescription("[**AuraMC**](https://www.auramc.org/) Sunucusunu Tercih Ettiğiniz İçin Teşekkür Ederiz.")
.setColor(aura)
.addField(" <a:cark:724434925662503096> a!otorol-yardım   "," Otorol Sistem Komutlarını Gösterir. ")
.addField("\n <a:cark:724434925662503096> a!davet-yardım ","Davet Sistem Komutlarını Gösterir.")
.addField("\n <a:cark:724434925662503096> a!yetkili-yardım ","Yetkili Komutlarını Gösterir.")
.addField("\n <a:cark:724434925662503096> a!müzik-yardım ","Müzik Komutlarını Gösterir.")
.addField("⤷ Linkler","[Sunucu Sitemiz](https://www.auramc.org/)")
.setImage("https://media.discordapp.net/attachments/744998417511743588/744999837510008962/Sunucu_Logo.png?width=579&height=579")
//.setImage("https://media.discordapp.net/attachments/710098208885440585/710145450644340836/baslksz-3.png?width=866&height=487")//yaptım zaten

message.channel.send(roman)





}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands","komutlar","Yardım","Help","help"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
