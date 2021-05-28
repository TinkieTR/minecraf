const express = require('express');
const app = express();
const http = require('https');
    app.get("/", (request, response) => {
    console.log(`Bot Başarıyla Hostlandı..`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`https://muddy-pinto-plot.glitch.me/`);
    }, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const dctrat = require('dctr-antispam.js'); 
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
//////////////////////////////////////////////////////////////////////////////////

//-----------------------KOMUTLAR-----------------------\\
//-----------------------Sayaç-----------------------\\
//-----------------------Sayaç-----------------------\\
//-----------------------Sayaç-----------------------\\

client.on("guildMemberAdd", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find("name", skanal9);
  if (!skanal31) return;
  skanal31.send(`:bell: \`${ member.user.tag }\` Adlı Kullanıcı Sunucuya Katıldı. \`${sayac}\` Kullanıcı Olmaya \`${sayac - member.guild.members.size}\` Kullanıcı Kaldı ! <a:no:710518885320884366>  ` );
});

client.on("guildMemberRemove", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find("name", skanal9);
  if (!skanal31) return;
  skanal31.send(`:bell: \`${  member.user.tag }\`Adlı Kullanıcı Sunucudan Ayrıldı. \`${sayac}\` Kullanıcı Olmaya \`${sayac - member.guild.members.size}\` Kullanıcı Kaldı ! <a:ok:710518899526860870> `);
});

//-----------------------Sayaç Son-----------------------\\
//-----------------------Sayaç Son-----------------------\\
//-----------------------Sayaç Son-----------------------\\
//-----------------------Sa-As-----------------------\\
//-----------------------Sa-As-----------------------\\
//-----------------------Sa-As-----------------------\\
//-----------------------Sa-As-----------------------\\

client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa'){
          
        msg.reply('**Aleyküm Selam Hoşgeldin Sefalar Getirdin <a:can:724733888915701913>** ');    
      }
      }
    });

client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'hi'){
          
        msg.reply('**Hi welcome**');    
      }
      }
    });

client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sea'){
          
        msg.reply('**Aleyküm Selam Hoşgeldin Sefalar Getirdin <a:can:724733888915701913>** ');    
      }
      }
    });

//-----------------------Sa-As Son-----------------------\\
//-----------------------Sa-As Son-----------------------\\
//-----------------------Sa-As Son-----------------------\\
//-----------------------Sa-As Son-----------------------\\
//-----------------------Reklam Engel Link Engel-----------------------\\
//-----------------------Reklam Engel Link Engel-----------------------\\
//-----------------------Reklam Engel Link Engell-----------------------\\
//-----------------------Reklam Engel Link Engel-----------------------\\

client.on('message', async message => {
let aktif = await db.fetch(`reklamEngelcodeshare_${message.channel.id}`)
if (!aktif) return 
let reklamlar = ["discord.app", "discord.gg" ,"discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az", ".cf", ".me", ".in"]
let kelimeler = message.content.slice(" ").split(/ +/g)
if (reklamlar.some(word => message.content.toLowerCase().includes(word))) {
if (message.member.hasPermission("BAN_MEMBERS")) return;
message.delete()
message.reply('**Reklamları Engelliyorum! Haber Veriyim Dedim**').then(msg => msg.delete(7000)) 
}
});
//CodeShare
client.on("messageUpdate", async (oldMsg, newMsg) => {
let aktif = await db.fetch(`reklamEngelcodeshare_${oldMsg.channel.id}`)
if(!aktif) return
let reklamlar = ["discord.app", "discord.gg","discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az", ".cf", ".me", ".in"]
let kelimeler = newMsg.content.slice(" ").split(/ +/g)
if (reklamlar.some(word => newMsg.content.toLowerCase().includes(word))) {
if (newMsg.member.hasPermission("BAN_MEMBERS")) return;
newMsg.delete()
oldMsg.reply('**Reklamları Engelliyorum! Haber Vereyim Dedim**').then(msg => msg.delete(7000)) 
}
});


//-----------------------Reklam Engel Son-----------------------\\
//-----------------------Reklam Engel Son-----------------------\\
//-----------------------Reklam Engel Son-----------------------\\
//-----------------------Reklam Engel Son-----------------------\\



//-----------------------Modlog-----------------------\\
//-----------------------Modlog-----------------------\\
//-----------------------Modlog-----------------------\\
//-----------------------Modlog-----------------------\\
client.on('channelCreate', async channel => {
  const c = channel.guild.channels.get(db.fetch(`codeminglog_${channel.guild.id}`));
  if (!c) return;
    var embed = new Discord.RichEmbed()
                    .addField(`<a:Alarm1:708209590071984159> Kanal oluşturuldu`, ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\n► ID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)
    c.send(embed)
});

client.on('channelDelete', async channel => {
  const c = channel.guild.channels.get(db.fetch(`codeminglog_${channel.guild.id}`));
  if (!c) return;
    let embed = new Discord.RichEmbed()
                    .addField(`Kanal silindi`, ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\n► ID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)

    c.send(embed)
});

   client.on('channelNameUpdate', async channel => {
  const c = channel.guild.channels.get(db.fetch(`codeminglog_${channel.guild.id}`));
  if (!c) return;
    var embed = new Discord.RichEmbed()
                    .addField(`Kanal İsmi değiştirildi`, ` Yeni İsmi: \`${channel.name}\`\n► ID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)
    c.send(embed)
});




client.on('emojiCreate', emoji => {
  const c = emoji.guild.channels.get(db.fetch(`codeminglog_${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.RichEmbed()
                    .addField(`Emoji oluşturuldu`, ` İsmi: \`${emoji.name}\`\n GIF?: **${emoji.animated}**\n► ID: ${emoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL)

    c.send(embed)
    });
client.on('emojiDelete', emoji => {
  const c = emoji.guild.channels.get(db.fetch(`codeminglog_${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.RichEmbed()
                    .addField(`Emoji silindi`, ` İsmi: \`${emoji.name}\`\n GIF? : **${emoji.animated}**\n► ID: ${emoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL)

    c.send(embed)
    });
client.on('emojiUpdate', (oldEmoji, newEmoji) => {
  const c = newEmoji.guild.channels.get(db.fetch(`codeminglog_${newEmoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.RichEmbed()
                    .addField(`Emoji güncellendi`, ` Eski ismi: \`${oldEmoji.name}\`\n Yeni ismi: \`${newEmoji.name}\`\n► ID: ${oldEmoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${newEmoji.client.user.username}#${newEmoji.client.user.discriminator}`, newEmoji.client.user.avatarURL)

    c.send(embed)
    });

client.on('guildBanAdd', async (guild, user) => {    
    const channel = guild.channels.get(db.fetch(`codeminglog_${guild.id}`));
  if (!channel) return;
  
  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())

    let embed = new Discord.RichEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
                    .addField(`Kullanıcı banlandı`, ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Sebep: **${entry.reason || 'Belirtmedi'}**\n Banlayan: **${entry.executor.username}#${entry.executor.discriminator}**`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${entry.executor.username}#${entry.executor.discriminator} tarafından`, entry.executor.avatarURL)

    channel.send(embed)
});


client.on('guildBanRemove', async (guild, user) => {    
    const channel = guild.channels.get(db.fetch(`codeminglog_${guild.id}`));
  if (!channel) return;
  
  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())

    let embed = new Discord.RichEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
                    .addField(`Kullanıcının banı açıldı`, ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Banı Kaldıran: **${entry.executor.username}#${entry.executor.discriminator}**`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${entry.executor.username}#${entry.executor.discriminator} tarafından`, entry.executor.avatarURL)

    channel.send(embed)
});
client.on('messageDelete', async message => {    
  if(message.author.bot) return

    const channel = message.guild.channels.get(db.fetch(`codeminglog_${message.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.RichEmbed()
                    .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
                    .setTitle("Mesaj silindi")                
                    .addField(`Silinen mesaj : ${message.content}`,`Kanal: ${message.channel.name}`)
                  //  .addField(`Kanal:`,`${message.channel.name}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${message.client.user.username}#${message.client.user.discriminator}`, message.client.user.avatarURL)

    channel.send(embed)
});

client.on('messageUpdate', async(oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;
    if(oldMessage.content == newMessage.content) return;

    const channel = oldMessage.guild.channels.get(db.fetch(`codeminglog_${oldMessage.guild.id}`));
    if(!channel) return;

    let embed = new Discord.RichEmbed()
    .setTitle("Mesaj güncellendi!")
    .addField("Eski mesaj : ",`${oldMessage.content}`)
    .addField("Yeni mesaj : ",`${newMessage.content}`)
    .addField("Kanal : ",`${oldMessage.channel.name}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`${oldMessage.client.user.username}#${oldMessage.client.user.discriminator}`,`${oldMessage.client.user.avatarURL}`)

    channel.send(embed)
});

client.on('roleCreate', async (role) => {    

    const channel = role.guild.channels.get(db.fetch(`codeminglog_${role.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.RichEmbed()
.addField(`Rol oluşturuldu`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)                    
.setTimestamp()
.setColor("RANDOM")
.addField("Rol renk kodu : ",`${role.hexColor}`)
.setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL)

    channel.send(embed)
});

client.on('roleDelete', async (role) => {    

    const channel = role.guild.channels.get(db.fetch(`codeminglog_${role.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.RichEmbed()
.addField(`Rol silindi`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)                    
.setTimestamp()
.setColor("RANDOM")
    .addField("Rol renk kodu : ",`${role.hexColor}`)
.setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL)

    channel.send(embed)
})
client.on('voiceStateUpdate', (oldMember, newMember) => {
  
 // if (!logA[oldMember.guild.id]) return;
  
  if (db.has(`codeminglog_${oldMember.guild.id}`) === false) return;
  
  var kanal = oldMember.guild.channels.get(db.fetch(`codeminglog_${oldMember.guild.id}`).replace("<#", "").replace(">", ""))
  if (!kanal) return;
  
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel

  if(oldUserChannel === undefined && newUserChannel !== undefined) {

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${newMember.user.tag} adlı kullanıcı \`${newUserChannel.name}\` isimli sesli kanala giriş yaptı!`)
    kanal.send(embed);
    
  } else if(newUserChannel === undefined){

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${newMember.user.tag} adlı kullanıcı sesli kanaldan çıkış yaptı!`)
    kanal.send(embed);
    
  }
});

//-----------------------Modlog Son-----------------------\\
//-----------------------Modlog Son-----------------------\\
//-----------------------Modlog Son-----------------------\\
//-----------------------Modlog Son-----------------------\\
//------------------OTOROL ---------------------------\\

client.on("guildMemberAdd", async member => {
  
 let kanal = db.fetch(`codemingkanal_${member.guild.id}`)   
 let rol = db.fetch(`codemingrol_${member.guild.id}`)
let mesaj = db.fetch(`codemingmesaj_${member.guild.id}`)
  
if(!kanal) return
member.addRole(rol)
  if(!mesaj) {
  client.channels.get(kanal).send(':loudspeaker: :inbox_tray: Otomatik Rol Verildi Seninle Beraber **`'+member.guild.memberCount+'`** Kişiyiz! :wave: Hoşgeldin! **`'+member.user.username+'`**')
} else {
  
      var mesajs = mesaj.replace("-uye-", `${member.author.tag}`).replace("-uyetag-", `${member.author.username}`) .replace("-server-", `${member.guild.name}`).replace("-rol-", member.guild.roles.get(db.fetch(`codemingrol_${member.guild.id}`)).name).replace("-onlineuyesayısı-", member.guild.members.filter(s => s.presenceStatus === "online").size).replace("-botsayisi-", member.guild.members.filter(s => s.bot).size) .replace('-kanalsayisi-' ,member.guild.channels.size ).replace("-uyesayisi-", member.guild.memberCount).replace("-bolge-", member.guild.region)
  
  client.channels.get(kanal).send(mesajs)
}


});


//-------------OTOROL SON------------------\\

//------------------KÜFÜR ENGEL-----------------\\

client.on("message", async msg => {
  //const args = msg.content.slice.split(' ');
  const args = msg.content.trim().split(/ +/g);
  const fAK = await db.fetch(`filtreAK_${msg.guild.id}`);
  let mesaj = args.slice(1).join(" ");
  const filtre = await db.fetch(`filtre_${msg.guild.id}`);
  const kufur = [
    "mk",
    "s.kerim",
    "si.kerm",
    "o ç",
    "göt",
    "amk",
    "amq",
    "aq",
    "orospu",
    "oruspu",
    "oç",
    "sikerim",
    "yarrak",
    "piç",
    "amq",
    "sik",
    "amcık",
    "çocu",
    "sex",
    "seks",
    "yavsak",
    "yavşak",
    "amına",
    "orospu çocuğu",
    "sg",
    "siktir git",
    "awk",
    "skrm",
    "pıc",
    "o c",
    "pic"
  ];

  const reklam = [
    ".ml",
    "discord.gg",
    "invite",
    "discordapp",
    "discordgg",
    ".com",
    ".net",
    ".xyz",
    ".tk",
    ".pw",
    ".io",
    ".me",
    ".gg",
    "www.",
    "https",
    "http",
    ".gl",
    ".org",
    ".com.tr",
    ".biz",
    ".party",
    ".rf.gd",
    ".az",
    "glitch.me",
    "glitch.com"
  ];

  let kufures = await db.fetch(`kuyarr_${msg.author.id}`);
  let linkes = await db.fetch(`luyarr_${msg.author.id}`);
  let ads = msg.author.id;
  if (fAK == "açık") {
    const fltr = filtre;
    if (fltr.some(word => msg.content.includes(word))) {
      if (!msg.member.hasPermission("BAN_MEMBERS")) {
        msg.delete();

        var k = new Discord.RichEmbed()
          .setColor("#01CFFE")
          .setAuthor("Filtre Sistemi")
          .setDescription(
            `Bu sunucuda yasaklanmış bir kelimeyi kullandınız, bu yüzden mesajınızı sildim.`
          );
        msg.channel.send(k).then(message => message.delete(5000));

        return;
      }
    }
  }
  
  if (!msg.guild) return;

  if (db.has(`küfürE_${msg.guild.id}`) === true) {
    if (kufur.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();

        var k = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setAuthor("Küfür Engeli!")
          .setDescription(
            `Hey <@${msg.author.id}>, Bu sunucuda küfürler **${client.user.username}** tarafından engellenmektedir! Küfür etmene izin vermeyeceğim!`
          );
        db.add(`kuyarr_${msg.author.id}`, 1);
        msg.channel.send(k).then(message => message.delete(5000));
    
      }
    }
  }
});

//-------------------KÜFÜR ENGEL SON-----------------------\\
//İNVİTE SİSTEMİ

const invites = {};

const wait = require("util").promisify(setTimeout);

client.on("ready", () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("guildMemberRemove", async member => {
  let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
  if (!kanal) return;
  let veri = await db.fetch(`rol1_${member.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
  let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
  let veri2 = await db.fetch(`rol2_${member.guild.id}`);
  let d = await db.fetch(`bunudavet_${member.id}`);
  const sa = client.users.get(d);
  const sasad = member.guild.members.get(d);
  let sayı2 = await db.fetch(`davet_${d}_${member.guild.id}`);
  db.add(`davet_${d}_${member.guild.id}`, -1);

  if (!d) {
    const aa = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `\`\`${member}\`\` **adlı şahıs aramızdan ayrıldı.\nŞahsı davet eden:** \`\`Bulunamadı!\`\``
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(`**${member}** adlı kullanıcı aramızdan ayrıldı. davet eden: **Bulunamadı!**`);
    return;
  } else {
    const aa = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `\`\`${member}\`\` **adlı şahıs aramızdan ayrıldı.\nŞahsı davet eden:** \`\`${sa.tag}\`\``
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(`**${member}** adlı kullanıcı aramızdan ayrıldı. davet eden: **${sa.tag}**`);

    if (!veri) return;

    if (sasad.roles.has(veri)) {
      if (sayı2 <= veri12) {
        sasad.removeRole(veri);
        return;
      }
    }
    if (sasad.roles.has(veri2)) {
      if (!veri2) return;
      if (sayı2 <= veri21) {
        sasad.removeRole(veri2);
        return;
      }
    }
  }
});

client.on("guildMemberAdd", async member => {
  member.guild.fetchInvites().then(async guildInvites => {
    let veri = await db.fetch(`rol1_${member.guild.id}`);
    let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
    let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
    let veri2 = await db.fetch(`rol2_${member.guild.id}`);
    let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
    if (!kanal) return;
    const ei = invites[member.guild.id];

    invites[member.guild.id] = guildInvites;

    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const sasad = member.guild.members.get(invite.inviter.id);
    const davetçi = client.users.get(invite.inviter.id);

    db.add(`davet_${invite.inviter.id}_${member.guild.id}`, +1);
    db.set(`bunudavet_${member.id}`, invite.inviter.id);
    let sayı = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);

    let sayı2;
    if (!sayı) {
      sayı2 = 0;
    } else {
      sayı2 = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);
    }

    const aa = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `\`\`${member}\`\` **adlı şahıs sunucuya katıldı.\nŞahsı davet eden:** \`\`${davetçi.tag}\`\` **Toplam \`\`${sayı2}\`\` daveti oldu!**`
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(`**${member}** adlı kullanıcı aramıza katıldı. davet eden: **${davetçi.tag}** Toplam **${sayı2}** daveti oldu !`);
    if (!veri) return;

    if (!sasad.roles.has(veri)) {
      if (sayı2 => veri12) {
        sasad.addRole(veri);
        return;
      }
    } else {
      if (!veri2) return;
      if (sayı2 => veri21) {
        sasad.addRole(veri2);
        return;
      }
    }
  });
});



//İNVİTE SİSTEMİ SON

//CAPSLOCK ENGELLEME
client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 4) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel
              .send(`✋ **Lütfen Büyük Harf Kullanma!**`)
              .then(m => m.delete(5000));
          }
        }
      }
    }
  }
});
//CAPSLOCK ENGELLEME SON

//MÜZİK SİSTEMİ

const youTube = require('simple-youtube-api');
const Ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyCwoT7CY6-aSmvpLaHkxFqbojjokY2H20Q');

client.on("message", async message => {
  
  if (!message.guild) return;
 
  
  var prefix = ayarlar.prefix;
  
  var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
  var searchString = args.slice(1).join(' ');
  var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  var serverQueue = queue.get(message.guild.id);
  
    switch (args[0].toLowerCase()) {
        
      case "oynat":
    var voiceChannel = message.member.voiceChannel;
        
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("Dinlemek istediğin şarkıyı yazmalısın! (Şarkı ismi veya Youtube URLsi)")
    if (!url) return message.channel.send(embed);
        
    const voiceChannelAdd = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Lütfen herhangi bir sesli kanala katılınız.`)
    if (!voiceChannel) return message.channel.send(voiceChannelAdd);
    var permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) {
      const warningErr = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`Herhangi bir sesli kanala katılabilmek için yeterli iznim yok.`)
      return message.channel.send(warningErr);
    }
    if (!permissions.has('SPEAK')) {
      const musicErr = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`Müzik açamıyorum/şarkı çalamıyorum çünkü kanalda konuşma iznim yok veya mikrofonum kapalı.`)
      return message.channel.send(musicErr);
    }
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      var playlist = await youtube.getPlaylist(url);
      var videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        var video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, message, voiceChannel, true);
      }
      const PlayingListAdd = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`[${playlist.title}](https://www.youtube.com/watch?v=${playlist.id}) İsimli şarkı oynatma listesine Eklendi.`)
      return message.channel.send(PlayingListAdd);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
      try {
          var videos = await youtube.searchVideos(searchString, 10);
          
          var r = 1
        
          var video = await youtube.getVideoByID(videos[r - 1].id);
        } catch (err) {
          console.error(err);
          const songNope = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(`Aradığınız isimde bir şarkı bulamadım.`) 
          return message.channel.send(songNope);
        }
      }
      return handleVideo(video, message, voiceChannel);
    }
    break
       case "tekrar":
       const e = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`Bir sesli kanalda değilsin.`) 
    if (!message.member.voiceChannel) return message.channel.send(e);
    const p = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(p);
        
    var u = serverQueue.songs[0]
        
    /*var pla = await youtube.getPlaylist(u);
      var v = await pla.getVideos();*/
      var vi2 = await youtube.getVideoByID(u.id);
      await handleVideo(vi2, message, voiceChannel, true);
    const PlayingListAdd = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`[${u.title}](https://www.youtube.com/watch?v=${u.id}) İsimli şarkı bitince tekrar oynatılacak.`)
    return message.channel.send(PlayingListAdd);
        
    break;
      case "geç":
      const err0 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`Bir sesli kanalda değilsin.`) 
    if (!message.member.voiceChannel) return message.channel.send(err0);
    const err05 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(err05);
    const songSkip = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Şarkı başarıyla geçildi!`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songSkip)
    return undefined;
break;
      case "kapat":
    const err1 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Bir sesli kanalda değilsin.`)  
    if (!message.member.voiceChannel) return message.channel.send(err1);
    const err2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(err2);
    serverQueue.songs = [];
    const songEnd = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Şarkı başarıyla durduruldu ve odadan ayrıldım!`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songEnd);
    return undefined;
break;
      case "ses":
      const asd1 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`Bir sesli kanalda değilsin.`)  
    if (!message.member.voiceChannel) return message.channel.send(asd1);
    const asd2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(asd2);

    if (!args[1]) return message.reply("Ses seviyesi ayarlamak için bir sayı yaz!");
    serverQueue.volume = args[1];
    if (args[1] > 10) return message.channel.send(`Ses seviyesi en fazla \`10\` olarak ayarlanabilir.`)
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    const volumeLevelEdit = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Ayarlanan Ses Seviyesi: **${args[1]}**`)
    return message.channel.send(volumeLevelEdit);
break;
      case "kuyruk":
      var siralama = 0;
        const a = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`Bir sesli kanalda değilsin.`)  
    if (!message.member.voiceChannel) return message.channel.send(a);
    const b = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(b);
        
    var k = serverQueue.songs.map(song => `${++siralama} - [${song.title}](https://www.youtube.com/watch?v=${song.id})`).join('\n').replace(serverQueue.songs[0].title, `**${serverQueue.songs[0].title}**`)
        
    const kuyruk = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Şarkı Kuyruğu", k)
    return message.channel.send(kuyruk)
break;
case "durdur":
      if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        const asjdhsaasjdha = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Şarkı başarıyla duraklatıldı!`)
      return message.channel.send(asjdhsaasjdha);
    }
    return message.channel.send('Şuanda herhangi bir şarkı çalmıyor.');
break;
      case "devamet":
      if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        const asjdhsaasjdhaadssad = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Şarkı başarıyla devam ettiriliyor...`)
      return message.channel.send(asjdhsaasjdhaadssad);
    }
    return message.channel.send('Şuanda herhangi bir şarkı çalmıyor.');
  

  return undefined;
break;
}
async function handleVideo(video, message, voiceChannel, playlist = false) {
  var serverQueue = queue.get(message.guild.id);
  //console.log(video);
  var song = {
    id: video.id,
    title: video.title,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
		durations: video.duration.seconds,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    thumbnail: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
    requester: message.author.id,
  };
  if (!serverQueue) {
    var queueConstruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 3,
      playing: true
    };
    queue.set(message.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(message.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`Ses kanalına giremedim HATA: ${error}`);
      queue.delete(message.guild.id);
      return message.channel.send(`Ses kanalına giremedim HATA: ${error}`);
    }
  } else {
    serverQueue.songs.push(song);
    //console.log(serverQueue.songs);
    if (playlist) return undefined;

    const songListBed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`[${song.title}](https://www.youtube.com/watch?v=${song.id}) isimli şarkı kuyruğa eklendi!`)
    return message.channel.send(songListBed);
  }
  return undefined;
}
  function play(guild, song) {
  var serverQueue = queue.get(guild.id);

  if (!song) {
    queue.delete(guild.id);
    return;
  }
  //console.log(serverQueue.songs);

  const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
    .on('end', reason => {
      if (reason === 'İnternetten kaynaklı bir sorun yüzünden şarkılar kapatıldı.');
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on('error', error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  
  const playingBed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("**AuraMC Müzik Sistemi**", `https://i.postimg.cc/BnQCzh2s/861acd45b3d34f97265ac7161fbb6763.png`)
  .setAuthor(`Şuanda Oynatılıyor`, "https://davidjhinson.files.wordpress.com/2015/05/youtube-icon.png")
  .setDescription(`[${song.title}](${song.url})`)
  .addField("Şarkı Süresi", `${song.durationm}:${song.durations}`, true)
  .addField("Şarkıyı Açan Kullanıcı", `<@${song.requester}>`, true)
  .setThumbnail(song.thumbnail)
  serverQueue.textChannel.send(playingBed);
}  
})

//MÜZİK SİSTEMİ SON

//SEVİYE SİSTEMİ

client.on("message", async message => {
  let prefix = ayarlar.prefix;

  var id = message.author.id;
  var gid = message.guild.id;

  let hm = await db.fetch(`seviyeacik_${gid}`);
  let kanal = await db.fetch(`svlog_${gid}`);
  let xps = await db.fetch(`verilecekxp_${gid}`);
  let seviyerol = await db.fetch(`svrol_${gid}`);
  let rollvl = await db.fetch(`rollevel_${gid}`);

  if (!hm) return;
  if (message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);

  if (!lvl) {
    
    if (xps) {
      db.set(`xp_${id}_${gid}`, xps);
    }
    db.set(`xp_${id}_${gid}`, 4);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);
  } else {
    if (xps) {
      db.add(`xp_${id}_${gid}`, xps);
    }
    db.add(`xp_${id}_${gid}`, 4);

    if (xp > xpToLvl) {
      db.add(`lvl_${id}_${gid}`, 1);
      db.add(
        `xpToLvl_${id}_${gid}`,
        (await db.fetch(`lvl_${id}_${gid}`)) * 100
      );
      if (kanal) {
        client.channels
          .get(kanal.id)
          .send(
            message.member.user.username +
              "** Seviye Atladı! Yeni seviyesi; `" +
              lvl +
              "` Tebrikler! :tada: **"
          );

        
      }
   
    }

    if (seviyerol) {
      if (lvl >= rollvl) {
        message.guild.member(message.author.id).addRole(seviyerol);
        if (kanal) {
          client.channels
            .get(kanal.id)
            .send(
              message.member.user.username +
                "** Yeni Seviyesi **" +
                rollvl +
                "**  seviyeye ulaştı ve " +
                seviyerol +
                " Rolünü kazandı! :tada: **"
            );
        }
      }
    }
  }

  
});

//SEVİYE SİSTEMİ SON
client.on("message", async msg => {
  const request = require("node-superfetch");
  const db = require("quick.db");

  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;

  if (msg.content.length > 7) {
    db.add(`puancik_${msg.author.id + msg.guild.id}`, 1);
  }

  if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 150) {
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1);

    msg.channel.send(
      `Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${db.fetch(
        `seviye_${msg.author.id + msg.guild.id}`
      )}** seviye oldun!`
    );

    db.delete(`puancik_${msg.author.id + msg.guild.id}`);
  }
}); 
///////////////////////OtoCevap////////////////////////////
///////////////////////OtoCevap////////////////////////////
///////////////////////OtoCevap////////////////////////////
client.on("message", msg => {
  if (msg.content.toLowerCase() === "bilgi") {
    msg.reply("\n**Sunucu İp :** *Play.AuraMC.Org* \n**Sunucu Sitesi :** *https://www.auramc.org/*");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "ip") {
    msg.reply("\n**Sunucu İp :** *Play.AuraMC.Org* \n**Sunucu Sitesi :** *https://www.auramc.org/*");
  }
});  
client.on("message", msg => {
  if (msg.content.toLowerCase() === "ip ne") {
    msg.reply("\n**Sunucu İp :** *Play.AuraMC.Org* \n**Sunucu Sitesi :** *https://www.auramc.org/*");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "ip nedir") {
    msg.reply("\n**Sunucu İp :** *Play.AuraMC.Org* \n**Sunucu Sitesi :** *https://www.auramc.org/*");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "ip ne lan") {
    msg.reply("\n**Sunucu İp :** *Play.AuraMC.Org* \n**Sunucu Sitesi :** *https://www.auramc.org/*");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "ip öğrenebilirmiyim") {
    msg.reply("\n**Sunucu İp :** *Play.AuraMC.Org* \n**Sunucu Sitesi :** *https://www.auramc.org/*");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "ip öğrenebilir miyim") {
    msg.reply("\n**Sunucu İp :** *Play.AuraMC.Org* \n**Sunucu Sitesi :** *https://www.auramc.org/*");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "ip ögrenebilirmiyim") {
    msg.reply("\n**Sunucu İp :** *Play.AuraMC.Org* \n**Sunucu Sitesi :** *https://www.auramc.org/*");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "ip ogrenebilir miyim") {
    msg.reply("\n**Sunucu İp :** *Play.AuraMC.Org* \n**Sunucu Sitesi :** *https://www.auramc.org/*");
  }
});
///////////////////////OtoCevap Bitiş////////////////////////////
///////////////////////OtoCevap Bitiş////////////////////////////
///////////////////////OtoCevap Bitiş////////////////////////////
///////////////////////öneri tepki//////////////////////////
client.on("message", msg => {
   if (msg.channel.id !== "725855865143427084") return;
   msg.react("👍");
   setTimeout(() => {
     msg.react("👎");
   }, 2000);
});
client.on("message", msg => {
   if (msg.channel.id !== "729497966309671014") return;
   msg.react("👍");
   setTimeout(() => {
     msg.react("👎");
   }, 2000);
});
///////////////////////öneri tepki bitiş/////////////////
/////////////////////sunucu panel/////////////////
client.on("guildMemberAdd", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)
    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Toplam Üye •"))
    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Aktif Üye •"))
    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Botlar •"))
    let rekoraktif = member.guild.channels.find(x =>(x.name).startsWith("Rekor Aktiflik •"))
    
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)
    }
    try{
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)
      toplamaktif.setName(`Aktif Üye • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)
      botlar.setName(`Botlar • ${member.guild.members.filter(m => m.user.bot).size}`)
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)
   } catch(e) { }
  }
})

client.on("guildMemberRemove", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)
    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Toplam Üye •"))
    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Aktif Üye •"))
    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Botlar •"))
    let rekoraktif = member.guild.channels.
    find(x =>(x.name).startsWith("Rekor Aktiflik •"))
    
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)
    }
    try{
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)
      toplamaktif.setName(`Aktif Üye • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)
      botlar.setName(`Botlar • ${member.guild.members.filter(m => m.user.bot).size}`)
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)
   } catch(e) { }
  }
})
/////////////////////////sunucu panel bitiş/////////


 client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    msg.react('🇸');
  }
  });
client.on(`guildMemberAdd`, async member => {
  const e = new Discord.RichEmbed()
    .setColor(`ORANGE`)
    .setImage(`https://media.discordapp.net/attachments/720029424216440923/724429793474642020/image0.png`)
    .addField(`Hoşgeldin`, ` **                       :crown: AuraMC :crown: ** \n <a:anonim:724733826986803361> Lütfen Kişi/Kişilerle Konuşurken Saygınızı Bozmayın. \n\n **AuraMC Hakkında** ; \n <a:ate:724733722716274718> **Website** : https://www.auramc.org/ \n <a:ates:724733778848907275> **Sunucu İp** : Play.AuraMC.Org \n <a:balon:724733824151322625> **E-Posta** : auramcnetwork@gmail.com \n\n **AuraMC İyi Eğlenceler Diler.**\n **- AuraMC Ekibi.**`)
    .setFooter(`İyi Eğlenceler`)
  member.send(e);
});
client.on('message', Mesaj => {//eXe.py#2526
  
  if (Mesaj.content == `${ayarlar.prefix}token`) {
    if (Mesaj.author.id !== ayarlar.sahip) {
      Mesaj.channel.send('Hmm... Çok zekisin, ama ben daha zekiyim. Bu komutu sahibimden başkası kullanamaz!')//eXe.py#2526
    } else {
      Mesaj.author.send(
        new Discord.RichEmbed().setColor('RANDOM').setDescription(`**Tokenim:** *${client.token}*`)//eXe.py#2526
      )
    }
  }
})
// SPAM \\
client.on('ready', () => {
   dctrat(client, {
        uyarılimiti: 5, // Uyarı limiti.
        susturmalimiti: 10, // Susturma limiti.
        aralık: 1500, // Mesaj yazma aralığı. ms olarak ayarlayınız
        uyarımesajı: "**Spam Yapmaya Devam Edersen Mute Yiyeceksin Haberin Olsun . . .**", // Uyarı mesajı
        susturmamesajı: "**Kardeşim Seni Uyarmıştım Ama Beni Dinlemedin Cezanı Kesiyorum . . .**", // Susturulma mesajı
        maksspam_uyarı: 3,// Kullanıcılar aynı iletiyi spam gönderirken, X üyesi 8'den fazla ileti gönderdiğinde kullanıcılar uyarı alır.
        maksspam_susturma: 5, // Kullanıcılar aynı iletiyi spam gönderirken, X üyesi 10'den fazla ileti gönderdiğinde kullanıcılar susturulur.
        adminrol: ["Yönetici","Admin","Moderatör","Project; Aura","TestRehber"], // Bu rollere sahip kullanıcılar engellenmez
        adminkullanıcı: ["🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399"], // Bu kullanıcılar engellenmez
        susturmarolü: "susturulmuş", // Kullanıcı spam yaparsa otomatik olarak susturulur eğer rol açılmaza otomatik olarak açılır.
        susturmasüresi: 900000, // Susturma süresi bir kullanıcı spam yaptığı için susturulursa verilecek ceza süresi (15dk) ms olarak ayarlayınız.
        logkanalı: "antispam-log" // Susturulmaların ve kaldırılmalarının atılacağı log kanalı (açılmazsa otomatik bu isimde açılır.)
      });
  });
 
client.on('message', msg => {
  client.emit('checkMessage', msg); 
})
// SPAM \\
const googleTTS = require('google-tts-api')
client.on('voiceStateUpdate', async(oldUser, newUser) => {
if(oldUser.user.bot || newUser.user.bot) return;
googleTTS(`Botu Tercih Ettiğiniz İçin Teşekkür Ederim`, `tr`, 1).then(x => { 
newUser.voiceChannel.join().then(xfalcon => {
xfalcon.playStream(x).on(`end`, (devtr) => {
xfalcon.disconnect();
})
})
})
});