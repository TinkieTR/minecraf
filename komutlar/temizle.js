const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için "MESAJLARI YÖNET" iznine sahip olmalısın!`);
  if (!args[0] || isNaN(args[0])) return message.reply(`Temizlenecek mesaj miktarını belirtmelisin! (İstediğin kadar)`);
  message.delete();
  let sayi = Number(args[0]);
  let silinen = 0;
  for (var i = 0; i < (Math.floor(sayi/100)); i++) {
   message.channel.bulkDelete(100).then(r => silinen+=r.size);
    sayi = sayi-100;
  };
  if (sayi > 0)  message.channel.bulkDelete(sayi).then(r => silinen+=r.size);
  message.channel.send(`<a:syes6:724744149693235213> **Başarıyla \`\`${args[0]}\`\` Adet Mesaj Silindi.**`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["temizle", "çöp"],
  permLevel: 0
};

exports.help = { 
  name: 'sil', 
  description: 'Belirtilen miktarda mesajı temizler. (Sınırsız)',
  usage: 'temizle <miktar>',
  kategori: 'kullanıcı'
};