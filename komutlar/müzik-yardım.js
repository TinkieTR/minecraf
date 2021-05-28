const Discord = require('discord.js');

let botid = ('724430516526252073')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('ORANGE')
.addField('**:books: Müzik Komutları**',`
**:white_small_square: oynat** : İstediğiniz Müziği Oynatır!
**:white_small_square: durdur** : Oynatılan Müziği Durdurur!
**:white_small_square: geç** : Sıradaki Şarkıya Geçer!
**:white_small_square: ses** : Ses Seviyesini Belirler!
**:white_small_square: tekrar** : Çalan şarkı bitince tekrar çalar!
**:white_small_square: kuyruk** : Sıradaki Şarkıları Gösterir!
**:white_small_square: devamet** : Durdurulan Müziği Oynatır!
**:white_small_square: kapat** : Oynatılan Müziği Kapatır!`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
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
  name: 'müzik-yardım',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   