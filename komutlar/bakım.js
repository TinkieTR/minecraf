const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
if (!message.author.id == "477189482206986240") return message.reply('Bokumu ye')
let lavender = db.fetch(`lavender.botbakim`)
if(lavender) {
message.channel.send(`Bot başarıyla bakım modundan çıkarıldı.`)
db.delete(`lavender.botbakim`)
};

if(!lavender) {
message.channel.send(`Botu başarıyla bakıma aldınız, bakımdan çıkarmak için aynı mesaj yazınız.`)
db.set(`lavender.botbakim`, 'aktif')
}};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [`bakim`],
permLevel: 4
};

exports.help = {
name: 'bakım',
description: 'Botu bakıma alırsınız.',
usage: 'bakım'
};