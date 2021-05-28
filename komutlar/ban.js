const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json")

module.exports.run = async (bot, message, args) => {
  let prefix = ayarlar.prefix;
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription("**Ne yazık ki bu komutu kullanmaya yetkin yok.**")
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("<a:unlem:724733762541453384> Lütfen sunucudan yasaklanacak kişiyi etiketleyiniz!")
        .setColor("BLACK")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }

  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`<a:unlem:724733762541453384> ${u} **Adlı şahsın yasaklanmasını onaylıyor musunuz?**`)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit(`<a:unlem:724733762541453384> **İşlem iptal oldu.**`));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `<a:syes6:724744149693235213> **İşlem onaylandı! ${u} adlı şahıs sunucudan yasaklandı!**`
        );

        message.guild.ban(u, 2);
      }
    });
  });
};

module.exports.conf = {
  aliases: [],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "ban",
  description: "ban",
  usage: "ban"
};