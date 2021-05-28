const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client,message,args) => {
  var rol = await db.fetch(`uyarıyetkilirol_${message.guild.id}`, rol)
let rol2 = message.guild.roles.find('id', rol)
if(!message.member.roles.has(db.fetch(`uyarıyetkilirol_${message.guild.id}`, rol))) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setDescription("Yeterli yetkiniz bulunmuyor."));
//DevTR
 let kisi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kisi) return message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription(`**:warning: Lütfen bir kullanıcı etiketleyiniz!**`))
    let sayı = db.get(`uyarısayı_${message.guild.id}_${kisi.id}`);
db.add(`uyarısayı_${message.guild.id}_${kisi.id}`, -1)
message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription(`${kisi} adlı kişinin **1** uyarısı silindi!`))
  const dmlog = db.get(`dmlog_${message.guild.id}`);
//DevTR
  if (dmlog == "açık") {
    kisi.send(
      new Discord.RichEmbed().setDescription(
        `**${message.guild.name}** Adlı sunucudan **1** uyarın silindi!
     \n \`\`\`Uyarı sayın: ${sayı}\`\`\` `)
    );
  let user = message.mentions.users.first();
//DevTR
 let uyarılog = db.get(`uyarılog_${message.guild.id}`)
const uyarı_log = client.channels.get(uyarılog);
    uyarı_log.send(
new Discord.RichEmbed()
    .setColor('BLACK')
    .setTimestamp()
    .addField('Eylem:', 'Uyarı Silme')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
//DevTR
)
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['uyarı-kaldır'],
    permLevel: 2
  };
  //DevTR
  exports.help = {
   name: "uyarı-sil",
  description: 'İstediğiniz kişinin uyarılarını kaldırır.',
  usage: 'uyarı-kaldır <@kullanıcı>'
};