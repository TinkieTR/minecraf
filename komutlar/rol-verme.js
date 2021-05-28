const Discord = require("discord.js")
const ayar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {

function yazdir(yazi ,renk) {
    renk = renk.toUpperCase();
    const embed = new Discord.RichEmbed()
      .setDescription(`${yazi}`)
      .setColor(renk)
      .setTimestamp()
    return message.channel.send(embed)
}
//////////////////////////////////////////////////////////////////////////
message.delete();
if(!message.member.hasPermission(["ADMINISTRATOR "])) return yazdir(`Komudu Kullanmak için Yetkin yok`,"black");
    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0]);
    let rolver = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first();
    if(!rMember) return yazdir(`${message.member} ,Lütfen Bir Kullanıcı Seç\nÖrnek Kullanım : ${ayar.prefix}rolver @kişi @rol`,"black");
    let user = client.users.get(rMember.id);
    if(rMember.roles.has(rolver.id)) {
        return yazdir(`${rMember}, Bu Rolüne Sahip`,"black");
    } else {
      message.guild.member(rMember).addRole(rolver.id)
      return yazdir(`${rMember}.Rolünüz Başarı İle verildi`,"black")
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["rolssssdsghnbssver"],
    permLevel: 0
}
exports.help = {
    name: 'rolver',
    description: 'rol vemek için',
    usage: 'rolver etiket rol'
}