const Discord = require("discord.js");

exports.run = function(client, message, args) {
  var öneri = args.slice(0).join(" ");
  var guildID = "724233665583906857"; //sunucu id
  var channelID = "724233665583906865"; //önerilerin geleceği kanal id

  if (!öneri) {
    return message.reply(
      "**Bir mesaj belirtin! Doğru kullanım:** `a!öneri <mesaj>`"
    );
  } else {
    var embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .addField("Eylem:", "Öneri")
      .addField("Kullanıcı:", message.author.tag)
      .addField("ID", message.author.id)
      .addField("Öneri", öneri);

    client.guilds
      .get(guildID)
      .channels.get(channelID)
      .send(embed);
    message.channel.send(
      "** :white_check_mark: Öneriniz Alınmıştır! En Yakın Zamanda İncelenecektir.**"
    );
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öneri"],
  permLevel: 0
};

exports.help = {
  name: "öneri",
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır",
  usage: "öneri <mesaj>"
};