const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
var ayarlar = require("../ayarlar.json");

const aç = ["aç", "open","on"];
const kapat = ["kapat","off","close"];

exports.run = async(client, message, args) => {
  var rol = await db.fetch(`uyarıyetkilirol_${message.guild.id}`, rol)
let rol2 = message.guild.roles.find('725851338424188990', rol)
if(!message.member.roles.has(db.get(`uyarıyetkilirol_${message.guild.id}`, rol))) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setDescription("Yeterli yetkiniz bulunmuyor."));

   if(!args[0]) return message.channel.send(new Discord.RichEmbed().setDescription("Aç yada kapat yazmalısın!"))
   
  if(aç.includes(args[0])){
    
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setDescription("Dm log başarıyla açıldı."))
    
    db.set(`dmlog_${message.guild.id}`, "açık")
    
  }
   
     if(kapat.includes(args[0])){
    
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setDescription("Dm log başarıyla kapatıldı."))
    
    db.set(`dmlog_${message.guild.id}`, "kapalı")
    
  
   }
     
  
   
};

exports.conf = {
  enabled: true,
  guildOnly: true,
permLevel: 2,
  aliases: []
};

exports.help = {
  name: "uyarı-dm-log",
category:'Yetkili'
};