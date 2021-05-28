//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let gonderilecek_kisi = bot.users.get("719991887221620807")//rapor edilecek kişinin idsi
let embed = new Discord.RichEmbed()
.setTitle("Bug Rapor")
.addField("Bug", bug)
.addField("Rapor Eden", user, true)
.setColor("#f49542")

//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
message.channel.send(":white_check_mark:  **| Bug Raporu Başarı İle İletildi.**")
gonderilecek_kisi.send(embed).then(i => i.react("⏳"))
//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
}
//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};
//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
exports.help = {
  name: 'bug-bildir',
  description: 'Çalışıp para kazanırsınız.',
  usage: 'prefix+bug-bildir <bug>'
}
//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.