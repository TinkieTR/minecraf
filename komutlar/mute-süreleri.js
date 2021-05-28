const Discord = require('discord.js');

let botid = ('724430516526252073')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('ORANGE')
.addField('**                                                         <a:skitap:724733766114869418> Mute Süreleri** <a:skitap:724733766114869418>',`

**\n:white_small_square: Spam 《10 dakika》 <a:unlem:724733762541453384>**

**:white_small_square: Harf Uzatımı《5 dakika》 <a:unlem:724733762541453384>**

**:white_small_square: CapsLock《5 dakika》 <a:unlem:724733762541453384>**

**:white_small_square: Küfür《20 dakika》 <a:unlem:724733762541453384>**

**:white_small_square: Ailevi küfür《3 saat》 <a:unlem:724733762541453384>**

**:white_small_square: Servere Hakaret Etme《5 gün》 <a:unlem:724733762541453384>**

**:white_small_square: Kışkırtma《10 dakika》 <a:unlem:724733762541453384>**

**:white_small_square: Argo《10 dakika》 <a:unlem:724733762541453384>**

**:white_small_square: Din,Irk,Siyaset Ayrımı《1 saat》 <a:unlem:724733762541453384>**

**:white_small_square: Sunucu ve Discord reklamı《BAN》 <a:unlem:724733762541453384>**

**:white_small_square: Yetkiliye hakaret ve küfür《1 saat》 <a:unlem:724733762541453384>**

**:white_small_square: Tehtit Etme《30 dakika》 <a:unlem:724733762541453384>**`)
.setFooter(`Sunucumuzda Oynayan Herkesin Kuralları ve Mute Sürelerini Okuduklarını var sayıyorum. İyi oyunlar.`)
    
.addField("⤷ Linkler","[Sunucu Sitemiz](https://www.auramc.org/)")
.setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'mutesüreler',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   