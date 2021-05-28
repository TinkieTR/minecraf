const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
exports.run = async(client, message, args) => {
if(message.author.id !== ayarlar.sahip) return;
let devtr = args[0]
  if(!devtr || isNaN(devtr)) return message.channel.send(`Davet linkini alacağın sunucunun ID'sini gir.`)
  client.guilds.get(devtr).channels.filter(dev => dev.type === `text`).random().createInvite({maxAge: 0, maxUses: 0}).then(davet => {
    message.author.send(davet.url);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-davet',
  description: 'sunucu-davet',
  usage: 'sunucu-davet <sunucu-id>',
};