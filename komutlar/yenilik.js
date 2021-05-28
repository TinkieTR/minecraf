const Discord = require("discord.js");
const db = require("quick.db")
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {



  var yenilik = await db.fetch(`yenilik`);   
let y1;
if(yenilik === null) y1 = 'Şuanda Bir Yenilik Yapılmadı.'
else y1 = yenilik
    

    let codeming = message.channel

const embed = new Discord.RichEmbed()
.setTitle("AuraMC.org Yenilikleri")
.setDescription(`\n\n \`Yenilikler\` \n\n **${y1}** `)
codeming.send(embed)



};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "yenilik",
  description: "By Muhammed",
  usage: "taslak"
}; 