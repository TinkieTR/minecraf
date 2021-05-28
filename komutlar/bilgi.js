const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const pinkcode = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et reis. :postbox:');
    message.channel.sendEmbed(pinkcode) }
    const pinkcode = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**                       :crown: ArawnMC :crown: ** \n <a:anonim:724733826986803361> Lütfen Kişi/Kişilerle Konuşurken Saygınızı Bozmayın. \n\n **ArawnMC Hakkında** ; \n <a:ate:724733722716274718> **Website** : https://arawnmc.oyna.tc \n <a:ates:724733778848907275> **Sunucu İp** : play.arawnmc.com \n <a:balon:724733824151322625> **E-Posta** : arawnmcnetwork@gmail.com \n\n **ArawnMC İyi Eğlenceler Diler.**\n **- ArawnMC Ekibi.**');
    return message.author.sendEmbed(pinkcode)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ip', 'sunucu', 'site'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Botun davet linkini özelden atar.',
  usage: 'davet'
};